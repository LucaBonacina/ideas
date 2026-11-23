import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { idUnico, impronta } from '../strumenti/identificativi';

export const FONTE_VENETO_NIDI_FAMIGLIA = 'veneto-nidi-in-famiglia';

export const URL_VENETO_NIDI_FAMIGLIA = 'https://www.regione.veneto.it/documents/10797/84546/allegato+A+ddr+n.+39+del+05.05.2025.pdf/4b4d7ef6-b268-4bd8-bb0d-fdeff95c7ad0';

export const PAGINA_VENETO_NIDI_FAMIGLIA = 'https://www.regione.veneto.it/web/sociale/nidi-in-famiglia';

/** Elenco alla data del 04/04/2025 (allegato A al DDR n. 39 del 05/05/2025). */
export const DATA_RIFERIMENTO_VENETO_NIDI_FAMIGLIA = new Date('2025-04-04T00:00:00Z');

/** 213 Nidi in Famiglia al 04/04/2025. */
export const MINIMO_VENETO_NIDI_FAMIGLIA = 150;

/** Una riga dell'elenco: tutto quello che la fonte pubblica. Cosa mostrare lo decide il prodotto. */
export interface RigaNidoFamiglia {
  provincia: string;
  comune: string;
  cap?: string;
  denominazione?: string;
  via?: string;
  educatore?: string;
  coordinatore?: string;
  codiceEducatore?: string;
  codiceCoordinatore?: string;
}

const PROVINCE = /^(BL|PD|RO|TV|VE|VI|VR)$/;
const CAP_VENETO = /^(3\d|45)\d{3}$/;
const INTESTAZIONI = /^(N\.|Provincia|Comune|CAP|Nido in Famiglia|Indirizzo|(Codice )?(Educatore|Coordinatore))$/i;

// L'atto contiene refusi nei codici: "ENIF 144", "ENI155", "CRNIF 4".
const ENIF = /^ENI?F?\s*(\d+)$/i;
const CRNIF = /^CRNIF\s*(\d+)$/i;

function codice(elementi: ElementoPdf[], re: RegExp, prefisso: string): string | undefined {
  const m = elementi.map((e) => re.exec(e.testo.trim())).find((x) => x);
  return m ? `${prefisso}${m[1]}` : undefined;
}

/** Posizione orizzontale delle colonne, letta dall'intestazione della pagina. */
interface Colonne {
  cap: number;
  nido: number;
  indirizzo: number;
  educatore: number;
  coordinatore: number;
  codici: number;
}

function colonne(elementi: ElementoPdf[]): Colonne | undefined {
  const x = (re: RegExp): number | undefined => elementi.find((e) => re.test(e.testo.trim()))?.x;
  const c = {
    cap: x(/^CAP$/i),
    nido: x(/^Nido in Famiglia$/i),
    indirizzo: x(/^Indirizzo$/i),
    educatore: x(/^Educatore$/i),
    coordinatore: x(/^Coordinatore$/i),
    codici: x(/^Codice educatore$/i),
  };
  return Object.values(c).every((v) => v !== undefined) ? c as Colonne : undefined;
}

function testo(elementi: ElementoPdf[], da: number, a: number): string | undefined {
  const t = elementi.filter((e) => e.x >= da - 2 && e.x < a - 2)
    .sort((p, q) => (Math.abs(p.y - q.y) > 3 ? q.y - p.y : p.x - q.x))
    .map((e) => e.testo)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
  return t || undefined;
}

/**
 * Ricostruisce le righe dell'elenco dei Nidi in Famiglia: ogni riga inizia con la sigla della provincia;
 * comune, educatore e coordinatore possono andare a capo sopra e sotto la riga.
 */
export function righeDaPagineNidiFamiglia(pagine: ElementoPdf[][]): RigaNidoFamiglia[] {
  const righe: RigaNidoFamiglia[] = [];
  for (const elementi of pagine) {
    const sigle = elementi.filter((e) => PROVINCE.test(e.testo));
    if (sigle.length === 0) continue;
    const xSigla = Math.min(...sigle.map((e) => e.x));
    const ancore = sigle.filter((e) => e.x <= xSigla + 10).sort((a, b) => b.y - a.y);
    const col = colonne(elementi);
    const capPagina = elementi.filter((e) => CAP_VENETO.test(e.testo));
    // Inizio della colonna CAP: delimita il comune anche quando il CAP di una riga manca.
    const xCap = col?.cap ?? (capPagina.length > 0 ? Math.min(...capPagina.map((e) => e.x)) : Infinity);
    ancore.forEach((a, i) => {
      const sopra = Math.min(i > 0 ? (ancore[i - 1].y + a.y) / 2 : a.y + 14, a.y + 14);
      const sotto = Math.max(i < ancore.length - 1 ? (ancore[i + 1].y + a.y) / 2 : a.y - 14, a.y - 14);
      const finestra = elementi.filter((e) => e.y < sopra && e.y > sotto && e.x > a.x + 1
        && !INTESTAZIONI.test(e.testo.trim()));
      const cap = finestra.find((e) => CAP_VENETO.test(e.testo))?.testo;
      const comune = testo(finestra.filter((e) => !CAP_VENETO.test(e.testo)), a.x + 3, xCap) ?? '';
      const riga: RigaNidoFamiglia = { provincia: a.testo, comune, cap };
      riga.codiceEducatore = codice(finestra, ENIF, 'ENIF');
      riga.codiceCoordinatore = codice(finestra, CRNIF, 'CRNIF');
      if (col) {
        riga.denominazione = testo(finestra, col.nido, col.indirizzo);
        riga.via = testo(finestra, col.indirizzo, col.educatore);
        riga.educatore = testo(finestra, col.educatore, col.coordinatore);
        riga.coordinatore = testo(finestra, col.coordinatore, col.codici);
      }
      righe.push(riga);
    });
  }
  return righe;
}

/**
 * Nidi in Famiglia del Veneto (DGR 153/2018): servizi 0-3 in contesto domiciliare, gestiti da un'educatrice
 * o un educatore. La scheda pubblica ha nome generico e nessun indirizzo (è l'abitazione dell'educatrice):
 * nome reale, via, CAP e codici dei referenti restano in `riservato`, che l'API non restituisce.
 */
export function parseNidiFamiglia(righe: RigaNidoFamiglia[], comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const comune = comuni.daNome(r.comune, r.provincia);
    if (!comune) {
      esito.scartate.push({ riga: i + 1, motivo: `comune non trovato: ${r.comune} (${r.provincia})` });
      return;
    }
    const base = r.codiceEducatore ? `${comune.codiceIstat}-${impronta(r.codiceEducatore)}` : comune.codiceIstat;
    const id = idUnico(base, visti);
    const struttura: Struttura = {
      chiave: `${FONTE_VENETO_NIDI_FAMIGLIA}:${id}`,
      denominazione: `Nido in famiglia a ${comune.nome}`,
      tipologia: Tipologia.SERVIZIO_DOMICILIARE,
      tipologiaOriginale: 'NIDO IN FAMIGLIA',
      fascia: '0-3',
      gestione: Gestione.PRIVATA,
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
      riservato: {
        denominazione: r.denominazione,
        via: r.via,
        cap: r.cap,
        referenti: [r.codiceEducatore, r.codiceCoordinatore].filter((c): c is string => !!c),
      },
      provenienza: {
        fonte: FONTE_VENETO_NIDI_FAMIGLIA,
        idNellaFonte: id,
        url: URL_VENETO_NIDI_FAMIGLIA,
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento: DATA_RIFERIMENTO_VENETO_NIDI_FAMIGLIA,
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
