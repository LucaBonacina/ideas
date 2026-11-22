import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { normalizzaNome } from '../../../domain/normalizza';
import { comuneTrentino, senzaParentesi } from './comuni-trentini';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { idUnico, slug } from '../strumenti/identificativi';

export const FONTE_TRENTO_NIDI = 'trento-elenco-nidi-infanzia';

export const URL_TRENTO_NIDI = 'https://www.vivoscuola.it/content/download/461645/9919459/version/1/file/25.26.Elenco+nidi+d%27infanzia+al+1+settembre+2025.pdf';

/** Pagina provinciale che collega l'elenco (cambia nome a ogni anno educativo). */
export const PAGINA_TRENTO_NIDI = 'https://www.provincia.tn.it/Servizi/Bonus-nidi-d-infanzia';

export const DATA_RIFERIMENTO_TRENTO_NIDI = new Date('2025-09-01T00:00:00Z');

/** 107 nidi nell'a.e. 2025/26. */
export const MINIMO_TRENTO_NIDI = 75;

export interface RigaTrentoNidi {
  comune: string;
  indirizzo: string;
  posti: string;
  /** D = gestione diretta, E = esternalizzata. */
  gestione: string;
}

/** Un solo asterisco sui posti rimanda alla nota "Titolare del servizio è la Comunità di Valle". */
function titolareComunita(posti: string): boolean {
  return /^\d+\*$/.test(posti.trim());
}

/** Limiti delle colonne (x) dell'elenco, come impaginato dalla Provincia. */
const X_COMUNE = 160;
const X_NUMERO = 320;
const X_INDIRIZZO = 355;
const X_POSTI = 550;
const X_GESTIONE = 600;

interface Ancora { y: number; posti: string; indirizzo: ElementoPdf[]; gestione?: string }

/**
 * Ricostruisce le righe dell'elenco provinciale dei nidi. Ogni nido ha un numero di posti nella colonna "Posti":
 * è l'ancora della riga. Le celle su più righe (indirizzi lunghi, lettere D/E disallineate) si assegnano all'ancora
 * più vicina, preferendo quella sopra (le celle vanno a capo verso il basso). Il comune vale finché non cambia.
 */
export function righeDaPagineTrentoNidi(pagine: ElementoPdf[][], comuni: ComuniLookup): RigaTrentoNidi[] {
  const righe: RigaTrentoNidi[] = [];
  let comuneCorrente = '';
  for (const elementi of pagine) {
    const yTotali = elementi.filter((e) => /^totale/i.test(e.testo)).map((e) => e.y);
    const vicinoATotale = (y: number): boolean => yTotali.some((t) => Math.abs(t - y) <= 3);
    const indirizzi = elementi.filter((e) => e.x >= X_INDIRIZZO && e.x < X_POSTI && !/^totale/i.test(e.testo));
    const ancore: Ancora[] = elementi
      .filter((e) => e.x >= X_POSTI && e.x < X_GESTIONE && /^\d+\**$/.test(e.testo) && !vicinoATotale(e.y))
      .filter((e) => indirizzi.some((i) => Math.abs(i.y - e.y) <= 4))
      .map((e) => ({ y: e.y, posti: e.testo, indirizzo: [] }))
      .sort((a, b) => b.y - a.y);
    if (ancore.length === 0) continue;
    // Distanza con preferenza per l'ancora sopra l'elemento (y maggiore).
    const distanza = (a: Ancora, y: number): number => (y <= a.y ? a.y - y : (y - a.y) * 2);
    const piuVicina = (y: number): Ancora => ancore.reduce((m, a) => (distanza(a, y) < distanza(m, y) ? a : m));
    for (const e of indirizzi) {
      const a = piuVicina(e.y);
      if (distanza(a, e.y) <= 25) a.indirizzo.push(e);
    }
    // Una lettera D/E va all'ancora libera più vicina (a volte è stampata una riga sopra i posti).
    const lettere = elementi.filter((x) => x.x >= X_GESTIONE && /^[DE]$/.test(x.testo)).sort((a, b) => b.y - a.y);
    for (const e of lettere) {
      const libera = ancore.filter((q) => !q.gestione && Math.abs(q.y - e.y) <= 15)
        .reduce<Ancora | undefined>((m, q) => (!m || Math.abs(q.y - e.y) < Math.abs(m.y - e.y) ? q : m), undefined);
      if (libera) libera.gestione = e.testo;
    }
    // Colonna dei comuni: un nome su due righe ("Primiero San Martino di" + "Castrozza (Tonadico)") si ricompone.
    const frammenti = elementi
      .filter((e) => e.x >= X_COMUNE && e.x < X_NUMERO && !/^totale|^provinciale|^d.infanzia$/i.test(e.testo))
      .sort((a, b) => b.y - a.y);
    const slot: { y: number; nome: string }[] = [];
    let sospeso: ElementoPdf | undefined;
    for (const f of frammenti) {
      const unito = sospeso ? `${sospeso.testo} ${senzaParentesi(f.testo)}` : '';
      if (sospeso && comuneTrentino(unito, comuni)) {
        slot.push({ y: sospeso.y, nome: unito }, { y: f.y, nome: unito });
        sospeso = undefined;
      } else if (comuneTrentino(f.testo, comuni)) {
        slot.push({ y: f.y, nome: f.testo });
        sospeso = undefined;
      } else if (!f.testo.startsWith('(')) {
        sospeso = f;
      }
    }
    for (const a of ancore) {
      const indirizzo = a.indirizzo.sort((p, q) => q.y - p.y || p.x - q.x).map((p) => p.testo).join(' ')
        .replace(/\s+/g, ' ')
        .trim();
      const sopra = slot.filter((s) => s.y >= a.y - 3);
      let nome = sopra.length > 0 ? sopra[sopra.length - 1].nome : comuneCorrente;
      // "Tione, Via Durone" sta sopra il nome "Tione di Trento": vale il comune che inizia come l'indirizzo.
      const localita = normalizzaNome(indirizzo.split(/,| - /)[0] ?? '');
      const sotto = slot.find((s) => s.y < a.y - 3 && s.y >= a.y - 15);
      if (sotto && localita && normalizzaNome(sotto.nome).startsWith(localita)) nome = sotto.nome;
      righe.push({
        comune: nome, indirizzo, posti: a.posti, gestione: a.gestione ?? '',
      });
    }
    const ultimo = slot.length > 0 ? slot[slot.length - 1].nome : comuneCorrente;
    comuneCorrente = ultimo;
  }
  return righe;
}

/** Nome tra virgolette nell'indirizzo ("“Aquilone”, Via Saibanti, 4"). */
function nomeTraVirgolette(indirizzo: string): string | undefined {
  return indirizzo.match(/[“"]([^”"]+)[”"]/)?.[1]?.trim();
}

/**
 * Elenco provinciale dei nidi d'infanzia del Trentino (servizi dei Comuni, a gestione diretta o esternalizzata).
 * La nota del PDF dice che il titolare è la Comunità di Valle solo per i nidi segnati con l'asterisco:
 * in tutti gli altri casi il titolare è il Comune.
 */
export function parseTrentoNidi(righe: RigaTrentoNidi[], comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const comune = comuneTrentino(r.comune, comuni);
    if (!comune) {
      esito.scartate.push({ riga: i + 1, motivo: `comune non trovato: ${r.comune}` });
      return;
    }
    const indirizzo = r.indirizzo.replace(/\s+/g, ' ').trim();
    if (!indirizzo) {
      esito.scartate.push({ riga: i + 1, motivo: 'indirizzo mancante' });
      return;
    }
    const id = idUnico(`${comune.codiceIstat}-${slug(indirizzo)}`, visti);
    const nome = nomeTraVirgolette(indirizzo);
    const via = indirizzo.replace(/[“"][^”"]+[”"]\s*,?\s*/, '').trim();
    const posti = Number.parseInt(r.posti, 10);
    const comunita = titolareComunita(r.posti);
    const struttura: Struttura = {
      chiave: `${FONTE_TRENTO_NIDI}:${id}`,
      denominazione: nome ? `Nido d'infanzia ${nome}` : `Nido d'infanzia a ${comune.nome}, ${via}`,
      tipologia: Tipologia.NIDO,
      tipologiaOriginale: `NIDO D'INFANZIA (GESTIONE ${{ D: 'DIRETTA', E: 'ESTERNALIZZATA' }[r.gestione] ?? 'NON INDICATA'})`,
      fascia: '0-3',
      gestione: comunita ? Gestione.PUBBLICA_ALTRA : Gestione.COMUNALE,
      // Il Comune è anche il gestore solo con la gestione diretta (con quella esternalizzata gestisce un affidatario).
      gestore: !comunita && r.gestione === 'D' ? `Comune di ${comune.nome}` : undefined,
      indirizzo: {
        via,
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
        fonte: FONTE_TRENTO_NIDI,
        idNellaFonte: id,
        url: URL_TRENTO_NIDI,
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento: DATA_RIFERIMENTO_TRENTO_NIDI,
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
