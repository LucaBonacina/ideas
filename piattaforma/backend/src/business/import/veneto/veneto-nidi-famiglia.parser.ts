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

/** Solo ciò che si pubblica: provincia e comune. Nome, indirizzo ed educatrici non vengono letti. */
export interface RigaNidoFamiglia {
  provincia: string;
  comune: string;
  /** Impronta non reversibile del codice educatore (ENIF...), solo per avere un identificativo stabile. */
  impronta?: string;
}

const PROVINCE = /^(BL|PD|RO|TV|VE|VI|VR)$/;
const CAP_VENETO = /^(3\d|45)\d{3}$/;

/**
 * Ricostruisce le righe dell'elenco dei Nidi in Famiglia: ogni riga inizia con la sigla della provincia,
 * seguita da comune e CAP. Dalle altre colonne si prende solo il codice dell'educatore, ridotto a un'impronta.
 */
export function righeDaPagineNidiFamiglia(pagine: ElementoPdf[][]): RigaNidoFamiglia[] {
  const righe: RigaNidoFamiglia[] = [];
  for (const elementi of pagine) {
    const sigle = elementi.filter((e) => PROVINCE.test(e.testo));
    if (sigle.length === 0) continue;
    const xSigla = Math.min(...sigle.map((e) => e.x));
    const ancore = sigle.filter((e) => e.x <= xSigla + 10).sort((a, b) => b.y - a.y);
    for (const a of ancore) {
      const riga = elementi.filter((e) => Math.abs(e.y - a.y) <= 3).sort((p, q) => p.x - q.x);
      const cap = riga.find((e) => CAP_VENETO.test(e.testo) && e.x > a.x);
      const comune = riga.filter((e) => e.x > a.x && (!cap || e.x < cap.x) && !CAP_VENETO.test(e.testo))
        .map((e) => e.testo).join(' ').replace(/\s+/g, ' ')
        .trim();
      const codice = riga.find((e) => /^ENIF\w+$/i.test(e.testo))?.testo;
      righe.push({ provincia: a.testo, comune, impronta: codice ? impronta(codice) : undefined });
    }
  }
  return righe;
}

/**
 * Nidi in Famiglia del Veneto (DGR 153/2018): servizi 0-3 in contesto domiciliare, gestiti da un'educatrice
 * o un educatore. Nome generico, nessun indirizzo, nessun recapito, nessun nome di persona.
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
    const id = idUnico(r.impronta ? `${comune.codiceIstat}-${r.impronta}` : comune.codiceIstat, visti);
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
