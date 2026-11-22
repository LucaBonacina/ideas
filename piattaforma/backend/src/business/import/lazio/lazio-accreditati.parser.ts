import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { pulisci } from '../../../domain/privacy';
import { normalizzaNome, titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { denominazioneSenzaPersone, nomeGenerico } from './denominazione';
import { ElementoPdf } from '../piemonte/pdf-testo';

export const FONTE_LAZIO_ACCREDITATI = 'lazio-servizi-educativi-accreditati';

/** Pagina regionale con il link all'ultimo elenco: il nome del PDF cambia a ogni aggiornamento. */
export const PAGINA_LAZIO_ACCREDITATI = 'https://regione.lazio.it/cittadini/sociale-famiglie/Servizi-Prima-Infanzia/Accreditamento-Servizi-Educativi';

/** Elenco al 16/11/2026 (757 servizi), usato se la pagina non si legge. */
export const URL_LAZIO_ACCREDITATI = 'https://regione.lazio.it/sites/default/files/2026-11/Elenco-Servizi-Educativi-Accreditati-16-11-26.pdf';

/** Circa il 70% delle 757 righe dell'elenco al 16/11/2026. */
export const MINIMO_LAZIO_ACCREDITATI = 530;

const CODICE_ISTAT_ROMA = '058091';

/** Intestazioni della tabella e scostamento dell'inizio colonna rispetto all'intestazione. */
const COLONNE: [string, string, number][] = [
  ['numero', 'Numero', -100],
  ['scadenza', 'Scadenza', -6],
  ['codice', 'Cod.', -7],
  ['tipo', 'Tipo Servizio', -2],
  ['posti', 'Posti', -3],
  ['natura', 'Natura', -7],
  ['titolarita', 'Titolarità', -11],
  ['gestione', 'Gestione', -13],
  ['denominazione', 'Denominazione', -69],
  ['comune', 'Comune', -40],
  ['provincia', 'Prov.', -6],
  ['indirizzo', 'Indirizzo', -43],
  ['burl', 'n.', -9],
  ['dataBurl', 'data BURL', -2],
];

/** Frammenti più lontani di così dalla riga più vicina (note a piè di pagina) non appartengono alla tabella. */
const DISTANZA_MASSIMA = 8;

export type RigaLazio = Record<string, string>;

/** Trova nella pagina regionale il link all'ultimo elenco PDF dei servizi accreditati. */
export function linkFileLazio(html: string): string | undefined {
  const link = html.match(/href="([^"]*Elenco-Servizi-Educativi-Accreditati[^"]*\.pdf)"/i)?.[1];
  return link ? new URL(link, PAGINA_LAZIO_ACCREDITATI).toString() : undefined;
}

/** Data dell'estrazione stampata a piè di pagina ("16/11/2026"). */
export function dataRiferimentoLazio(pagine: ElementoPdf[][]): Date | undefined {
  const data = pagine[0]?.find((e) => /^\d{2}\/\d{2}\/\d{4}$/.test(e.testo))?.testo.split('/');
  return data ? new Date(`${data[2]}-${data[1]}-${data[0]}T00:00:00Z`) : undefined;
}

/**
 * Ricostruisce le righe: ogni riga inizia con il numero di accreditamento (AR, ARMN, ARSG, ARSP);
 * i frammenti delle celle su due righe ("Sezione / primavera") vanno alla riga più vicina in verticale.
 */
export function righeDaPagineLazio(pagine: ElementoPdf[][]): RigaLazio[] {
  const righe: RigaLazio[] = [];
  for (const elementi of pagine) {
    const intestazioni = new Map(elementi.map((e) => [e.testo, e]));
    const yIntestazione = intestazioni.get('Denominazione')?.y;
    if (yIntestazione === undefined) continue;
    const inizi = COLONNE
      .filter(([, titolo]) => intestazioni.has(titolo))
      .map(([nome, titolo, scarto]) => ({ nome, x: (intestazioni.get(titolo) as ElementoPdf).x + scarto }))
      .sort((a, b) => a.x - b.x);
    const xScadenza = inizi.find((c) => c.nome === 'scadenza')?.x ?? 60;
    const corpo = elementi.filter((e) => e.y < yIntestazione - 8);
    const ancore = corpo
      .filter((e) => e.x < xScadenza && /^AR[A-Z]*\d+$/.test(e.testo))
      .map((e) => ({ y: e.y, celle: new Map<string, ElementoPdf[]>() }));
    if (ancore.length === 0) continue;
    for (const e of corpo) {
      const vicina = ancore.reduce((m, a) => (Math.abs(a.y - e.y) < Math.abs(m.y - e.y) ? a : m));
      if (Math.abs(vicina.y - e.y) > DISTANZA_MASSIMA) continue;
      const colonna = [...inizi].reverse().find((c) => e.x >= c.x)?.nome ?? 'numero';
      vicina.celle.set(colonna, [...(vicina.celle.get(colonna) ?? []), e]);
    }
    for (const a of ancore) {
      const riga: RigaLazio = {};
      a.celle.forEach((pezzi, colonna) => {
        riga[colonna] = pezzi.sort((p, q) => q.y - p.y || p.x - q.x).map((p) => p.testo).join(' ').replace(/\s+/g, ' ')
          .trim();
      });
      righe.push(riga);
    }
  }
  return righe;
}

function tipologiaDa(tipo: string, numero: string): Tipologia | undefined {
  const t = normalizzaNome(tipo);
  if (t.startsWith('MICRONIDO') || t.startsWith('MICRO NIDO') || numero.startsWith('ARMN')) return Tipologia.MICRONIDO;
  if (t.startsWith('SEZIONE PRIMAVERA') || numero.startsWith('ARSP')) return Tipologia.SEZIONE_PRIMAVERA;
  if (t.startsWith('SPAZIO GIOCO') || numero.startsWith('ARSG')) return Tipologia.SPAZIO_GIOCO;
  if (t.startsWith('NIDO')) return Tipologia.NIDO;
  return undefined;
}

/** Natura (pubblica o privata) e titolarità (comunale, aziendale…) dichiarate dalla fonte. */
function gestioneDa(natura: string, titolarita: string): Gestione {
  const n = normalizzaNome(natura);
  const t = normalizzaNome(titolarita);
  if (n === 'PRIVATA') return Gestione.PRIVATA;
  if (n !== 'PUBBLICA') return Gestione.SCONOSCIUTA;
  if (t.startsWith('COMU')) return Gestione.COMUNALE;
  return t ? Gestione.PUBBLICA_ALTRA : Gestione.PUBBLICA;
}

/** "Via Tranquillo Cremona, 22 - 00155" -> via e CAP separati. */
function viaECap(indirizzo: string): { via?: string; cap?: string } {
  const cap = indirizzo.match(/[\s,-]+(0[0-4]\d{3})\s*$/);
  const via = pulisci(cap ? indirizzo.slice(0, cap.index) : indirizzo);
  return { via: via ? titoloLeggibile(via) : undefined, cap: cap?.[1] };
}

/** Elenco regionale dei servizi educativi per l'infanzia accreditati (DGR 964/2022), PDF estratto dal SIRSE. */
export function parseLazioAccreditati(
  righe: RigaLazio[],
  url: string,
  comuni: ComuniLookup,
  scaricatoIl: Date,
  dataRiferimento?: Date,
): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  const roma = comuni.daCodiceIstat(CODICE_ISTAT_ROMA);
  righe.forEach((r, i) => {
    const numero = (r.numero ?? '').trim();
    const tipologia = tipologiaDa(r.tipo ?? '', numero);
    const nomeComune = pulisci(r.comune) ?? '';
    const comune = /^MUNICIPIO ROMA\b/i.test(nomeComune) ? roma : comuni.daNome(nomeComune, r.provincia ?? '', 'Lazio');
    if (!tipologia || !comune) {
      esito.scartate.push({
        riga: i + 1,
        motivo: !tipologia ? `tipologia sconosciuta: ${r.tipo}` : `comune non trovato: ${nomeComune} (${r.provincia})`,
      });
      return;
    }
    const base = pulisci(r.codice)?.match(/^\d+$/)?.[0] ?? numero;
    const ripetizioni = (visti.get(base) ?? 0) + 1;
    visti.set(base, ripetizioni);
    const id = ripetizioni === 1 ? base : `${base}-${ripetizioni}`;
    const gestione = gestioneDa(r.natura ?? '', r.titolarita ?? '');
    const diretta = /^DIRETTA$/i.test((r.gestione ?? '').trim());
    const enteComunale = comune.codiceIstat === CODICE_ISTAT_ROMA ? 'Roma Capitale' : `Comune di ${comune.nome}`;
    const posti = Number.parseInt(r.posti ?? '', 10);
    const { via, cap } = viaECap(r.indirizzo ?? '');
    // I nidi privati di ditte individuali e società di persone hanno spesso il nome del titolare nella denominazione.
    const nome = denominazioneSenzaPersone(pulisci(r.denominazione) ?? '', gestione === Gestione.PRIVATA);
    const struttura: Struttura = {
      chiave: `${FONTE_LAZIO_ACCREDITATI}:${id}`,
      denominazione: nome ? titoloLeggibile(nome) : nomeGenerico(tipologia, comune.nome),
      tipologia,
      tipologiaOriginale: (r.tipo ?? '').trim(),
      fascia: '0-3',
      gestione,
      // Gestore solo per i servizi comunali a gestione diretta: per appalti e concessioni la fonte non lo nomina.
      gestore: gestione === Gestione.COMUNALE && diretta ? enteComunale : undefined,
      indirizzo: {
        via,
        cap,
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      posti: Number.isFinite(posti) && posti > 0 ? posti : undefined,
      accreditamento: 'si',
      misureAderite: [],
      contatti: {},
      caratteristiche: [],
      provenienza: {
        fonte: FONTE_LAZIO_ACCREDITATI,
        idNellaFonte: id,
        url,
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento,
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
