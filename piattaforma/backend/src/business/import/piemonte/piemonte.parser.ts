import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { pulisci } from '../../../domain/privacy';
import { titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { ElementoPdf } from './pdf-testo';

export const FONTE_PIEMONTE = 'piemonte-anagrafe-prima-infanzia';

export const URL_PIEMONTE = 'https://www.regione.piemonte.it/web/media/24892/download';

export const DATA_RIFERIMENTO_PIEMONTE = new Date('2025-12-31T00:00:00Z');

/** Intestazioni della tabella e scostamento dell'inizio colonna rispetto all'intestazione. */
const COLONNE: [string, string, number][] = [
  ['provincia', 'PROVINCIA', -100],
  ['comune', 'COMUNE', -10],
  ['istat', 'CODICE', -10],
  ['tipologia', 'TIPOLOGIA', -10],
  ['gestione', 'COMUNALE / PUBBLICO /', -10],
  ['denominazione', 'DENOMINAZIONE', -10],
  ['indirizzo', 'INDIRIZZO', -10],
  ['cap', 'CAP', -10],
  ['posti', 'CAPAC RIC', -10],
  ['geoloc', 'CODICE GEOLOC RCERP', -10],
  ['pes', 'COD PES', -10],
  ['autorizzazione', 'AUTORIZZAZIONE', -30],
  ['titolare', 'TITOLARE AUTORIZZAZIONE', -10],
];

export type RigaPiemonte = Record<string, string>;

/**
 * Ricostruisce le righe della tabella: ogni riga ha la sigla della provincia nella prima colonna;
 * i frammenti delle celle su più righe si assegnano alla riga con la sigla più vicina in verticale.
 */
export function righeDaPagine(pagine: ElementoPdf[][]): RigaPiemonte[] {
  const righe: RigaPiemonte[] = [];
  for (const elementi of pagine) {
    const intestazioni = new Map(elementi.map((e) => [e.testo, e]));
    const yIntestazione = intestazioni.get('PROVINCIA')?.y;
    if (yIntestazione === undefined) continue;
    const inizi = COLONNE
      .filter(([, titolo]) => intestazioni.has(titolo))
      .map(([nome, titolo, scarto]) => ({ nome, x: (intestazioni.get(titolo) as ElementoPdf).x + scarto }))
      .sort((a, b) => a.x - b.x);
    const xComune = inizi.find((c) => c.nome === 'comune')?.x ?? 0;
    const corpo = elementi.filter((e) => e.y < yIntestazione - 8 && !/^Pagina|^di$/.test(e.testo));
    const ancore = corpo
      .filter((e) => e.x < xComune && /^[A-Z]{2}$/.test(e.testo))
      .map((e) => ({ y: e.y, celle: new Map<string, ElementoPdf[]>() }));
    if (ancore.length === 0) continue;
    for (const e of corpo) {
      const colonna = [...inizi].reverse().find((c) => e.x >= c.x)?.nome ?? 'provincia';
      const vicina = ancore.reduce((m, a) => (Math.abs(a.y - e.y) < Math.abs(m.y - e.y) ? a : m));
      vicina.celle.set(colonna, [...(vicina.celle.get(colonna) ?? []), e]);
    }
    for (const a of ancore) {
      const riga: RigaPiemonte = {};
      a.celle.forEach((pezzi, colonna) => {
        riga[colonna] = pezzi.sort((p, q) => q.y - p.y || p.x - q.x).map((p) => p.testo).join(' ').replace(/\s+/g, ' ')
          .trim();
      });
      righe.push(riga);
    }
  }
  return righe;
}

function tipologiaDa(testo: string): Tipologia | undefined {
  const t = testo.toUpperCase();
  if (t.startsWith('SP ')) return Tipologia.SEZIONE_PRIMAVERA;
  if (t.startsWith('MICRO NIDO')) return Tipologia.MICRONIDO;
  if (t.startsWith("NIDO D'INFANZIA")) return Tipologia.NIDO;
  if (t.startsWith('NIDO IN FAMIGLIA')) return Tipologia.SERVIZIO_DOMICILIARE;
  if (t.startsWith('SPAZIO GIOCO')) return Tipologia.SPAZIO_GIOCO;
  return undefined;
}

function gestioneDa(testo: string): Gestione {
  if (/COMUNALE/.test(testo)) return Gestione.COMUNALE;
  if (/PUBBLICO/.test(testo)) return Gestione.PUBBLICA;
  if (/PRIVATO/.test(testo)) return Gestione.PRIVATA;
  return Gestione.SCONOSCIUTA;
}

/** Anagrafe regionale dei servizi per la prima infanzia del Piemonte (PDF annuale). */
export function parsePiemonte(righe: RigaPiemonte[], comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const tipologia = tipologiaDa(r.tipologia ?? '');
    const istat = (r.istat ?? '').match(/\d{6}/)?.[0];
    const comune = istat ? comuni.daCodiceIstat(istat) : undefined;
    if (!tipologia || !comune) {
      esito.scartate.push({
        riga: i + 1,
        motivo: !tipologia ? `tipologia sconosciuta: ${r.tipologia}` : `comune non trovato: ${r.istat}`,
      });
      return;
    }
    const gestione = gestioneDa(r.gestione ?? '');
    const domiciliare = tipologia === Tipologia.SERVIZIO_DOMICILIARE;
    let nome = titoloLeggibile(pulisci(r.denominazione) ?? '');
    if (tipologia === Tipologia.SEZIONE_PRIMAVERA && /^c\/o/i.test(nome)) nome = `Sezione primavera ${nome.replace(/^c\/o/i, 'c/o')}`;
    if (domiciliare || !nome) nome = `${domiciliare ? 'Nido in famiglia' : 'Servizio prima infanzia'} a ${comune.nome}`;
    // Il PDF non ha un identificativo per tutte le righe: si usa il codice PES o RCERP, altrimenti comune e posizione.
    const base = pulisci(r.pes) ?? pulisci(r.geoloc) ?? `${comune.codiceIstat}-${tipologia}`;
    const ripetizioni = (visti.get(base) ?? 0) + 1;
    visti.set(base, ripetizioni);
    const id = ripetizioni === 1 ? base : `${base}-${ripetizioni}`;
    const posti = Number.parseInt(r.posti ?? '', 10);
    const titolare = pulisci(r.titolare);
    const via = pulisci(r.indirizzo);
    const struttura: Struttura = {
      chiave: `${FONTE_PIEMONTE}:${id}`,
      denominazione: nome,
      tipologia,
      tipologiaOriginale: (r.tipologia ?? '').toUpperCase(),
      fascia: '0-3',
      gestione,
      // Il titolare si mostra solo per gli enti pubblici (per i privati può essere una persona fisica).
      gestore: titolare && [Gestione.COMUNALE, Gestione.PUBBLICA].includes(gestione)
        ? titoloLeggibile(titolare) : undefined,
      indirizzo: {
        via: domiciliare || !via ? undefined : titoloLeggibile(via),
        cap: (r.cap ?? '').match(/\d{5}/)?.[0],
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      posti: Number.isFinite(posti) && posti > 0 ? posti : undefined,
      misureAderite: [],
      contatti: {},
      caratteristiche: [],
      provenienza: {
        fonte: FONTE_PIEMONTE,
        idNellaFonte: id,
        url: URL_PIEMONTE,
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento: DATA_RIFERIMENTO_PIEMONTE,
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
