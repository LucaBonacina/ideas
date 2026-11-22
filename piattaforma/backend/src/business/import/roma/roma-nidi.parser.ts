import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { pulisci, telefonoPubblicabile } from '../../../domain/privacy';
import { normalizzaNome, titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { denominazioneSenzaPersone, nomeGenerico } from '../lazio/denominazione';

export const FONTE_ROMA_NIDI = 'roma-capitale-elenco-servizi-0-3';

/** Scheda servizi con il link all'elenco dell'anno: il nome del PDF cambia con la data. */
export const PAGINA_ROMA_NIDI = 'https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF39924&pagina=13';

/** Elenco "Iscrizioni Nidi 2026/2027" all'11/08/2026, usato se la pagina non si legge. */
export const URL_ROMA_NIDI = 'https://www.comune.roma.it/web-resources/cms/documents/Bando_nidi__elenco_strutture_al_11_Agosto_2026.pdf';

/** Circa il 70% delle 455 righe dell'elenco 2026/27. */
export const MINIMO_ROMA_NIDI = 320;

const CODICE_ISTAT_ROMA = '058091';

export type TabellaRoma = 'NIDI' | 'PONTE' | 'SPAZI_GIOCO';

/** Titoli delle tabelle come scritti nella fonte. */
const TITOLI: [RegExp, TabellaRoma][] = [
  [/^Nidi della Rete Capitolina/i, 'NIDI'],
  [/^Sezione Ponte/i, 'PONTE'],
  [/^Spazi Gioco/i, 'SPAZI_GIOCO'],
];

/**
 * Le pagine sono ruotate: ogni riga della tabella è una colonna di testo (x crescente) e le colonne
 * si distinguono per la y. Inizio di ciascuna colonna, per tabella.
 */
const COLONNE: Record<TabellaRoma, [string, number][]> = {
  NIDI: [['codice', 0], ['nome', 80], ['gestione', 240], ['indirizzo', 340], ['telefono', 510], ['orario', 580],
    ['postiP', 660], ['postiM', 705], ['postiG', 745]],
  PONTE: [['codice', 0], ['nome', 90], ['indirizzo', 330], ['telefono', 520], ['orario', 600], ['posti', 670]],
  SPAZI_GIOCO: [['codice', 0], ['nome', 80], ['gestione', 235], ['indirizzo', 340], ['telefono', 500], ['orario', 575],
    ['postiMM', 670], ['postiGM', 700], ['postiMP', 730], ['postiGP', 760]],
};

/** Sotto questa y ci sono titoli e note a piè di tabella; il codice struttura sta tra questa y e Y_FINE_CODICE. */
const Y_NOTE = 56;

const Y_FINE_CODICE = 80;

/** Oltre questa x c'è il piè di pagina ("Pagina 1 di 50", data di stampa). */
const X_PIEDE = 540;

export interface RigaRoma {
  tabella: TabellaRoma;
  titolo: string;
  municipio: string;
  celle: Record<string, string>;
}

/** Trova nella scheda servizi il link all'elenco PDF delle strutture. */
export function linkFileRoma(html: string): string | undefined {
  const link = html.match(/href="([^"]*elenco_strutture[^"]*\.pdf)"/i)?.[1];
  return link ? new URL(link, PAGINA_ROMA_NIDI).toString() : undefined;
}

/** Data di stampa a piè di pagina ("11/08/2026 17:30"). */
export function dataRiferimentoRoma(pagine: ElementoPdf[][]): Date | undefined {
  const data = pagine[0]?.find((e) => /^\d{2}\/\d{2}\/\d{4}( \d{2}:\d{2})?$/.test(e.testo))?.testo.slice(0, 10).split('/');
  return data ? new Date(`${data[2]}-${data[1]}-${data[0]}T00:00:00Z`) : undefined;
}

/**
 * Ricostruisce le righe dell'elenco "Iscrizioni Nidi" diviso per municipio. Ogni riga inizia con il codice
 * a tre cifre; le celle su più righe (indirizzi e gestioni lunghe, secondo telefono) seguono con x maggiore.
 * Le tabelle continuano da una pagina all'altra senza intestazione.
 */
export function righeDaPagineRoma(pagine: ElementoPdf[][]): RigaRoma[] {
  const righe: RigaRoma[] = [];
  let tabella: TabellaRoma | undefined;
  let titolo = '';
  let municipio = '';
  for (const elementi of pagine) {
    municipio = elementi.map((e) => e.testo.match(/^MUNICIPIO ROMA ([IVXL]+)$/i)?.[1]).find(Boolean) ?? municipio;
    const ordinati = elementi.filter((e) => e.x < X_PIEDE).sort((a, b) => a.x - b.x || a.y - b.y);
    let corrente: RigaRoma | undefined;
    let xCorrente = -Infinity;
    const pezzi = new Map<RigaRoma, Map<string, string[]>>();
    for (const e of ordinati) {
      const nuovoTitolo = e.y < Y_NOTE ? TITOLI.find(([re]) => re.test(e.testo)) : undefined;
      if (nuovoTitolo) {
        [, tabella] = nuovoTitolo;
        titolo = e.testo;
        corrente = undefined;
      } else if (e.y >= Y_NOTE && tabella) {
        if (e.y < Y_FINE_CODICE && /^\d{3}$/.test(e.testo) && e.x > xCorrente + 3) {
          corrente = {
            tabella, titolo, municipio, celle: {},
          };
          xCorrente = e.x;
          righe.push(corrente);
          pezzi.set(corrente, new Map());
        }
        if (corrente) {
          const colonna = [...COLONNE[tabella]].reverse().find(([, y]) => e.y >= y)?.[0] ?? 'codice';
          const celle = pezzi.get(corrente) as Map<string, string[]>;
          celle.set(colonna, [...(celle.get(colonna) ?? []), e.testo]);
        }
      }
    }
    pezzi.forEach((celle, riga) => {
      celle.forEach((testi, colonna) => {
        Object.assign(riga.celle, { [colonna]: testi.join(' ').replace(/\s+/g, ' ').trim() });
      });
      // Nome lungo che invade la colonna della gestione: "MICRONIDO CASA DEGLI GNOMI CAPITOLINA".
      const unito = riga.tabella !== 'PONTE' && !riga.celle.gestione ? riga.celle.nome?.match(/^(.+?)\s+(CAPITOLINA|PRIVATA)$/) : null;
      if (unito) Object.assign(riga.celle, { nome: unito[1], gestione: unito[2] });
    });
  }
  return righe;
}

const ROMANI: Record<string, number> = {
  I: 1, V: 5, X: 10, L: 50,
};

function daRomano(numero: string): number {
  const cifre = numero.toUpperCase().split('').map((c) => ROMANI[c] ?? 0);
  return cifre.reduce((somma, c, i) => somma + (c < (cifre[i + 1] ?? 0) ? -c : c), 0);
}

/** Primo numero fisso tra quelli scritti nella cella (anche spezzati: "06" "5212248"); i cellulari si scartano. */
function telefonoDa(testo: string): string | undefined {
  let parziale = '';
  for (const pezzo of testo.split(/[\s/]+/)) {
    const cifre = pezzo.replace(/[^0-9]/g, '');
    // Un pezzo lungo che inizia per 0 o 3 è un numero nuovo; gli altri completano il precedente ("06" "5212248").
    parziale = cifre.length >= 6 && /^[03]/.test(cifre) ? cifre : parziale + cifre;
    if (parziale.length >= 8) {
      const telefono = telefonoPubblicabile(parziale);
      if (telefono) return telefono;
      parziale = '';
    }
  }
  return undefined;
}

function tipologiaDa(r: RigaRoma): Tipologia {
  if (r.tabella === 'PONTE') return Tipologia.SEZIONE_PRIMAVERA;
  if (r.tabella === 'SPAZI_GIOCO') return Tipologia.SPAZIO_GIOCO;
  return /^MICRO ?NIDO\b/.test(normalizzaNome(r.celle.nome ?? '')) ? Tipologia.MICRONIDO : Tipologia.NIDO;
}

function gestioneDa(r: RigaRoma): Gestione {
  // Le sezioni ponte sono nelle scuole dell'infanzia di Roma Capitale (titolo della tabella).
  if (r.tabella === 'PONTE') return Gestione.COMUNALE;
  const g = normalizzaNome(r.celle.gestione ?? '');
  if (g.startsWith('CAPITOLINA')) return Gestione.COMUNALE;
  if (g.startsWith('PRIVATA')) return Gestione.PRIVATA;
  return Gestione.SCONOSCIUTA;
}

/** Elenco dei servizi educativi 0-3 della rete capitolina (nidi diretti e convenzionati, sezioni ponte, spazi gioco). */
export function parseRomaNidi(
  righe: RigaRoma[],
  url: string,
  comuni: ComuniLookup,
  scaricatoIl: Date,
  dataRiferimento?: Date,
): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const roma = comuni.daCodiceIstat(CODICE_ISTAT_ROMA);
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const municipio = daRomano(r.municipio);
    const nomeFonte = pulisci(r.celle.nome);
    if (!roma || !municipio || !nomeFonte) {
      esito.scartate.push({
        riga: i + 1,
        motivo: !roma ? 'comune di Roma assente dall\'elenco comuni'
          : `${!municipio ? 'municipio' : 'nome'} mancante: codice ${r.celle.codice}`,
      });
      return;
    }
    // I codici ripartono da 001 in ogni municipio.
    const base = `${String(municipio).padStart(2, '0')}-${r.celle.codice}`;
    const ripetizioni = (visti.get(base) ?? 0) + 1;
    visti.set(base, ripetizioni);
    const id = ripetizioni === 1 ? base : `${base}-${ripetizioni}`;
    const tipologia = tipologiaDa(r);
    const gestione = gestioneDa(r);
    // Telefono a volte attaccato all'indirizzo ("VIA ..., 588 0659583240") e orario attaccato al telefono.
    const indirizzo = pulisci(r.celle.indirizzo) ?? '';
    const telefonoInVia = indirizzo.match(/\s+([03]\d[\d-]{5,}(?:\s.*)?)$/);
    const via = pulisci(telefonoInVia ? indirizzo.slice(0, telefonoInVia.index) : indirizzo);
    const telefono = telefonoDa(`${telefonoInVia?.[1] ?? ''} ${(r.celle.telefono ?? '').replace(/\d{2}:\d{2}\s*-\s*\d{2}:\d{2}/g, ' ')}`);
    const nome = denominazioneSenzaPersone(nomeFonte, gestione === Gestione.PRIVATA);
    const struttura: Struttura = {
      chiave: `${FONTE_ROMA_NIDI}:${id}`,
      denominazione: nome ? titoloLeggibile(nome) : nomeGenerico(tipologia, roma.nome),
      tipologia,
      tipologiaOriginale: r.titolo,
      fascia: '0-3',
      gestione,
      // Gestore solo per la gestione diretta: per i nidi "in appalto" la fonte non nomina l'appaltatore.
      gestore: r.tabella === 'PONTE' || normalizzaNome(r.celle.gestione ?? '') === 'CAPITOLINA' ? 'Roma Capitale' : undefined,
      indirizzo: {
        via: via ? titoloLeggibile(via) : undefined,
        comune: roma.nome,
        codiceIstat: roma.codiceIstat,
        codiceCatastale: roma.codiceCatastale,
        siglaProvincia: roma.siglaProvincia,
        regione: roma.regione,
      },
      misureAderite: [],
      contatti: { telefono },
      caratteristiche: [],
      provenienza: {
        fonte: FONTE_ROMA_NIDI,
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
