import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { comuneTrentino } from './comuni-trentini';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { slug } from '../strumenti/identificativi';

export const FONTE_TRENTO_TAGESMUTTER = 'trento-nidi-familiari-tagesmutter';

export const URL_TRENTO_TAGESMUTTER = 'https://www.vivoscuola.it/content/download/481196/10325967/version/1/file/Elenco+nidi+familiari+ae+2026+2027+AL+SETT2026.pdf';

export const DATA_RIFERIMENTO_TRENTO_TAGESMUTTER = new Date('2026-09-01T00:00:00Z');

/** 76 nidi familiari nell'a.e. 2026/27. */
export const MINIMO_TRENTO_TAGESMUTTER = 53;

export interface RigaTagesmutter {
  /** Testo della cella "Comuni sedi", es. "Arco, 4 nidi familiari". */
  sede: string;
  gestore: string;
}

/**
 * Ricostruisce le righe dell'elenco (una per comune e soggetto gestore). Le pagine sono in orizzontale:
 * se le intestazioni hanno la stessa x, le righe si leggono per x e le colonne per y.
 */
export function righeDaPagineTagesmutter(pagine: ElementoPdf[][]): RigaTagesmutter[] {
  const tutte = pagine.flat();
  const intestazione = (re: RegExp): ElementoPdf | undefined => tutte.find((e) => re.test(e.testo));
  const hComunita = intestazione(/^Comunit. di valle$/i);
  const hGestore = intestazione(/^Soggetto gestore/i);
  if (!hComunita || !hGestore) throw new Error('Intestazioni dell\'elenco Tagesmutter non trovate');
  const ruotata = Math.abs(hComunita.x - hGestore.x) < 3;
  const riga = (e: ElementoPdf): number => (ruotata ? e.x : -e.y);
  const colonna = (e: ElementoPdf): number => (ruotata ? e.y : e.x);
  const inizioGestore = colonna(hGestore) - 20;
  const fineComunita = colonna(hComunita) + 60;
  const righe: RigaTagesmutter[] = [];
  for (const elementi of pagine) {
    const gruppi = new Map<number, ElementoPdf[]>();
    for (const e of elementi) {
      const chiave = [...gruppi.keys()].find((k) => Math.abs(k - riga(e)) <= 3) ?? riga(e);
      gruppi.set(chiave, [...(gruppi.get(chiave) ?? []), e]);
    }
    [...gruppi.keys()].sort((a, b) => a - b).forEach((k) => {
      const celle = (gruppi.get(k) ?? []).sort((a, b) => colonna(a) - colonna(b));
      const testoDi = (filtro: (c: number) => boolean): string => celle.filter((e) => filtro(colonna(e)))
        .map((e) => e.testo).join(' ').replace(/\s+/g, ' ')
        .trim();
      const sede = testoDi((c) => c >= fineComunita && c < inizioGestore);
      const gestore = testoDi((c) => c >= inizioGestore);
      if (/\d+\s+(nid|serviz)/i.test(sede)) righe.push({ sede, gestore });
    });
  }
  return righe;
}

/** "Primiero San Martino di Castrozza (Transacqua, Tonadico), 2 nidi familiari" -> comune e numero. */
export function sedeTagesmutter(sede: string): { comune: string; numero: number } | undefined {
  const m = sede.match(/^(.+?\s*(?:\([^)]*\))?)\s*,?\s+(\d+)\s+(?:nid[oi] familiar[ei]|serviz(?:io|i))\b/i);
  return m ? { comune: m[1].trim(), numero: Number(m[2]) } : undefined;
}

/**
 * Nidi familiari-servizio Tagesmutter iscritti all'albo provinciale (L.P. 4/2002, art. 8). L'elenco dà solo il
 * numero di servizi per comune e gestore: si crea un record per servizio, con nome generico e senza indirizzo,
 * perché si svolgono nell'abitazione dell'educatrice.
 */
export function parseTagesmutter(righe: RigaTagesmutter[], comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  righe.forEach((r, i) => {
    const sede = sedeTagesmutter(r.sede);
    if (!sede || sede.numero === 0) {
      esito.scartate.push({ riga: i + 1, motivo: `riga non riconosciuta: ${r.sede}` });
      return;
    }
    const comune = comuneTrentino(sede.comune, comuni);
    if (!comune) {
      esito.scartate.push({ riga: i + 1, motivo: `comune non trovato: ${sede.comune}` });
      return;
    }
    // Gestori iscritti all'albo: una cooperativa sociale e un ente privato (CSOE); nessun ente pubblico.
    const privato = /cooperativ|csoe|fondazion|associazion/i.test(r.gestore);
    for (let n = 1; n <= sede.numero; n += 1) {
      const id = `${comune.codiceIstat}-${slug(r.gestore || 'gestore')}-${n}`;
      const struttura: Struttura = {
        chiave: `${FONTE_TRENTO_TAGESMUTTER}:${id}`,
        denominazione: `Nido familiare - Tagesmutter a ${comune.nome}`,
        tipologia: Tipologia.SERVIZIO_DOMICILIARE,
        tipologiaOriginale: 'NIDO FAMILIARE - SERVIZIO TAGESMUTTER',
        fascia: '0-3',
        gestione: privato ? Gestione.PRIVATA : Gestione.SCONOSCIUTA,
        indirizzo: {
          comune: comune.nome,
          codiceIstat: comune.codiceIstat,
          codiceCatastale: comune.codiceCatastale,
          siglaProvincia: comune.siglaProvincia,
          regione: comune.regione,
        },
        misureAderite: [],
        contatti: {},
        caratteristiche: [],
        provenienza: {
          fonte: FONTE_TRENTO_TAGESMUTTER,
          idNellaFonte: id,
          url: URL_TRENTO_TAGESMUTTER,
          licenza: 'non dichiarata dalla fonte',
          dataRiferimento: DATA_RIFERIMENTO_TRENTO_TAGESMUTTER,
          scaricatoIl,
        },
        attiva: true,
      };
      esito.strutture.push(struttura);
    }
  });
  return esito;
}
