import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { pulisci } from '../../../domain/privacy';
import { normalizzaNome, titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { denominazionePubblicabile } from '../nomi/denominazione-pubblicabile';

export const FONTE_TOSCANA_NIDI_GRATIS = 'toscana-nidi-gratis';

/** Pagina del bando famiglie: a ogni decreto l'elenco dei servizi cambia URL. */
export const PAGINA_TOSCANA_NIDI_GRATIS = 'https://www.regione.toscana.it/it/-/bando-nidi-gratis-2026-2027-per-i-servizi-educativi-rivolto-alle-famiglie';

/** Allegato B del decreto 22561 del 12-10-2026, ultimo elenco dei servizi verificato. */
export const URL_TOSCANA_NIDI_GRATIS = 'https://www301.regione.toscana.it/bancadati/atti/Contenuto.xml?id=5534458&nomeFile=Decreto+n.22561+del+12-10-2026-+Allegato+B+';

export const MISURA_TOSCANA_NIDI_GRATIS = 'Nidi gratis (Regione Toscana)';

/** 900 servizi nell'elenco del 12-10-2026. */
export const MINIMO_TOSCANA_NIDI_GRATIS = 630;

/** Data del decreto, letta dal nome del file ("del+12-10-2026"). */
export function dataDecretoToscana(url: string): Date | undefined {
  const m = decodeURIComponent(url).match(/del[+\s](\d{2})-(\d{2})-(\d{4})/);
  return m ? new Date(`${m[3]}-${m[2]}-${m[1]}T00:00:00Z`) : undefined;
}

/** Nella pagina del bando, il link all'elenco dei servizi educativi del decreto più recente. */
export function linkElencoToscana(html: string): string | undefined {
  const candidati = [...html.matchAll(/<a[^>]+href="([^"]*Contenuto\.xml[^"]*)"[^>]*>([\s\S]{0,300}?)<\/a>/gi)]
    .filter(([, , testo]) => /elenco/i.test(testo) && /servizi educativi/i.test(testo) && !/domande/i.test(testo))
    .map(([, href]) => href.replace(/&amp;/g, '&').replace(/^http:/, 'https:'))
    .filter((href) => dataDecretoToscana(href));
  candidati.sort((a, b) => (dataDecretoToscana(b) as Date).getTime() - (dataDecretoToscana(a) as Date).getTime());
  return candidati[0];
}

/** Intestazioni della tabella e scostamento dell'inizio colonna (il testo delle celle è centrato). */
const COLONNE: [string, string, number][] = [
  ['amministrazione', 'Amministrazione comunale di', -100],
  ['comune', 'Comune ove ha sede', -3],
  ['titolare', 'Tipologia soggetto', -9],
  ['tipologia', 'Tipologia servizio', -26],
  ['nome', 'Nome del servizio', -73],
  ['indirizzo', 'Indirizzo del servizio', -45],
];

/** Distanza massima tra due righe di testo della stessa cella. */
const PASSO_RIGA = 12.3;

/** Scarto ammesso tra il centro di una cella e il centro della sua riga. */
const TOLLERANZA_CENTRO = 3;

export type RigaToscana = Record<string, string>;

/**
 * Divide i frammenti di una colonna in celle: le celle su più righe sono centrate in verticale,
 * quindi una cella è il gruppo di righe consecutive la cui media cade sul centro di una riga della tabella.
 */
function celleDiColonna(frammenti: ElementoPdf[], centri: number[]): { y: number; pezzi: ElementoPdf[] }[] {
  const ordinati = [...frammenti].sort((a, b) => b.y - a.y || a.x - b.x);
  const linee: ElementoPdf[][] = [];
  for (const f of ordinati) {
    const ultima = linee[linee.length - 1];
    if (ultima && Math.abs(ultima[0].y - f.y) < 1.5) ultima.push(f); else linee.push([f]);
  }
  const vicino = (y: number): number => centri.reduce((m, c) => (Math.abs(c - y) < Math.abs(m - y) ? c : m));
  const celle: { y: number; pezzi: ElementoPdf[] }[] = [];
  let i = 0;
  while (i < linee.length) {
    let presa = 1;
    for (let n = 1; n <= 6 && i + n <= linee.length; n += 1) {
      const gruppo = linee.slice(i, i + n);
      if (n > 1 && gruppo[n - 2][0].y - gruppo[n - 1][0].y > PASSO_RIGA) break;
      const media = gruppo.reduce((s, l) => s + l[0].y, 0) / n;
      if (Math.abs(vicino(media) - media) <= TOLLERANZA_CENTRO) {
        presa = n;
        break;
      }
    }
    const gruppo = linee.slice(i, i + presa);
    celle.push({ y: vicino(gruppo.reduce((s, l) => s + l[0].y, 0) / presa), pezzi: gruppo.flat() });
    i += presa;
  }
  return celle;
}

/**
 * Ricostruisce le righe del PDF: il centro di ogni riga è quello della cella "tipologia servizio"
 * (sempre presente, comincia con "Nido", "Spazio" o "Servizio").
 */
export function righeDaPagineToscana(pagine: ElementoPdf[][]): RigaToscana[] {
  const righe: RigaToscana[] = [];
  for (const elementi of pagine) {
    const intestazioni = new Map(elementi.map((e) => [e.testo, e]));
    const yIntestazione = intestazioni.get('Nome del servizio')?.y;
    if (yIntestazione === undefined) continue;
    const inizi = COLONNE
      .filter(([, titolo]) => intestazioni.has(titolo))
      .map(([nome, titolo, scarto]) => ({ nome, x: (intestazioni.get(titolo) as ElementoPdf).x + scarto }))
      .sort((a, b) => a.x - b.x);
    const colonna = (e: ElementoPdf): string => [...inizi].reverse().find((c) => e.x >= c.x)?.nome ?? 'amministrazione';
    const corpo = elementi.filter((e) => e.y < yIntestazione - 8);
    const centri: number[] = [];
    let cella: ElementoPdf[] = [];
    const chiudi = (): void => {
      if (cella.length) centri.push(cella.reduce((s, e) => s + e.y, 0) / cella.length);
      cella = [];
    };
    for (const e of corpo.filter((f) => colonna(f) === 'tipologia').sort((a, b) => b.y - a.y)) {
      const staccata = cella.length > 0 && cella[cella.length - 1].y - e.y > PASSO_RIGA;
      if (/^(nido|spazio|servizio|centro)/i.test(e.testo) || staccata) chiudi();
      cella.push(e);
    }
    chiudi();
    if (centri.length === 0) continue;
    const perCentro = new Map<number, RigaToscana>(centri.map((c) => [c, {}]));
    for (const { nome } of inizi) {
      for (const c of celleDiColonna(corpo.filter((e) => colonna(e) === nome), centri)) {
        const riga = perCentro.get(c.y) as RigaToscana;
        const testo = c.pezzi.map((p) => p.testo).join(' ');
        riga[nome] = `${riga[nome] ?? ''} ${testo}`.replace(/\s+/g, ' ').trim();
      }
    }
    righe.push(...centri.map((c) => perCentro.get(c) as RigaToscana));
  }
  return righe;
}

/** Nomi dei comuni scritti nel PDF in forma diversa da quella ISTAT. */
const ALIAS_COMUNI: Record<string, string> = {
  'SAN CASCIANO VAL DI PESA': 'San Casciano in Val di Pesa',
  'CASTELFRANCO PIAN DI SCO': 'Castelfranco Piandiscò',
  'CASTELNUOVO GARFAGNANA': 'Castelnuovo di Garfagnana',
  'COLLE VAL D ELSA': "Colle di Val d'Elsa",
  'CASTIGLION DELLA PESCAIA': 'Castiglione della Pescaia',
};

/** Comune della sede: senza "Comune di"; per le sedi scritte "A- B" vale il primo comune riconosciuto. */
function comuneDa(testo: string, comuni: ComuniLookup): ReturnType<ComuniLookup['daNome']> {
  for (const parte of testo.replace(/^comune di\s+/i, '').split(/\s*-\s*/)) {
    const comune = comuni.daNome(ALIAS_COMUNI[normalizzaNome(parte)] ?? parte, '', 'Toscana');
    if (comune) return comune;
  }
  return undefined;
}

function tipologiaDa(testo: string): Tipologia | undefined {
  const t = normalizzaNome(testo);
  if (t.startsWith('NIDO')) return Tipologia.NIDO;
  if (t.startsWith('SPAZIO GIOCO')) return Tipologia.SPAZIO_GIOCO;
  if (t.includes('DOMICILIARE')) return Tipologia.SERVIZIO_DOMICILIARE;
  if (t.startsWith('CENTRO')) return Tipologia.CENTRO_BAMBINI_FAMIGLIE;
  return undefined;
}

function gestioneDa(titolare: string): Gestione {
  const t = normalizzaNome(titolare);
  if (t === 'COMUNE' || t.startsWith('COMUNE ')) return Gestione.COMUNALE;
  if (t.includes('PUBBLICO NON COMUNALE')) return Gestione.PUBBLICA_ALTRA;
  if (t.startsWith('PRIVATO')) return Gestione.PRIVATA;
  return Gestione.SCONOSCIUTA;
}

const ETICHETTE: Record<string, string> = {
  [Tipologia.NIDO]: "Nido d'infanzia",
  [Tipologia.SPAZIO_GIOCO]: 'Spazio gioco',
  [Tipologia.SERVIZIO_DOMICILIARE]: 'Servizio educativo domiciliare',
  [Tipologia.CENTRO_BAMBINI_FAMIGLIE]: 'Centro bambini e famiglie',
};

/** Elenco dei servizi educativi per la prima infanzia aderenti a Nidi gratis (Regione Toscana, PDF allegato al decreto). */
export function parseToscanaNidiGratis(
  righe: RigaToscana[],
  url: string,
  comuni: ComuniLookup,
  scaricatoIl: Date,
): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const tipologiaFonte = pulisci(r.tipologia) ?? '';
    const tipologia = tipologiaDa(tipologiaFonte);
    if (!tipologia) {
      esito.scartate.push({ riga: i + 1, motivo: `tipologia sconosciuta: ${tipologiaFonte}` });
      return;
    }
    const comune = comuneDa(r.comune ?? '', comuni);
    if (!comune) {
      esito.scartate.push({ riga: i + 1, motivo: `comune non trovato: ${r.comune}` });
      return;
    }
    const gestione = gestioneDa(r.titolare ?? '');
    const domiciliare = tipologia === Tipologia.SERVIZIO_DOMICILIARE;
    const generico = `${ETICHETTE[tipologia]} a ${comune.nome}`;
    const nomeFonte = pulisci(r.nome);
    // I nomi dei servizi comunali sono intitolazioni; quelli dei privati possono contenere il nome del titolare.
    const nome = nomeFonte && gestione !== Gestione.PRIVATA ? nomeFonte : denominazionePubblicabile(nomeFonte ?? '');
    // Nessun identificativo nel PDF: comune e nome del servizio, con un contatore per i doppioni.
    const base = `${comune.codiceIstat}-${normalizzaNome(nomeFonte ?? tipologia).replace(/ /g, '-').toLowerCase()}`;
    const ripetizioni = (visti.get(base) ?? 0) + 1;
    visti.set(base, ripetizioni);
    const id = ripetizioni === 1 ? base : `${base}-${ripetizioni}`;
    const amministrazione = pulisci(r.amministrazione) ?? '';
    const via = pulisci(r.indirizzo);
    let gestore: string | undefined;
    if (gestione === Gestione.COMUNALE) {
      gestore = comuneDa(amministrazione, comuni)?.codiceIstat === comune.codiceIstat
        ? `Comune di ${comune.nome}` : titoloLeggibile(amministrazione) || undefined;
    }
    const struttura: Struttura = {
      chiave: `${FONTE_TOSCANA_NIDI_GRATIS}:${id}`,
      denominazione: domiciliare || !nome ? generico : nome,
      tipologia,
      tipologiaOriginale: tipologiaFonte,
      fascia: '0-3',
      gestione,
      gestore,
      indirizzo: {
        via: domiciliare || !via ? undefined : via,
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      misureAderite: [MISURA_TOSCANA_NIDI_GRATIS],
      contatti: {},
      caratteristiche: [],
      provenienza: {
        fonte: FONTE_TOSCANA_NIDI_GRATIS,
        idNellaFonte: id,
        url,
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento: dataDecretoToscana(url),
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
