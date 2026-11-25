import ExcelJS from 'exceljs';
import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { idUnico, impronta } from '../strumenti/identificativi';

export const FONTE_LIGURIA_ALBO = 'liguria-albo-servizi-prima-infanzia';

const BASE = 'https://www.regione.liguria.it/components/com_publiccompetitions/includes/download.php?id=';

/**
 * Albo regionale dei servizi socioeducativi per la prima infanzia (L.R. Liguria 6/2009): nidi pubblici verificati,
 * nidi privati accreditati, servizi domiciliari pubblici e privati. Pubblicato nella sezione "Servizi socioeducativi
 * per la prima infanzia" del sito regionale.
 */
export const ELENCHI_LIGURIA = {
  'nidi-privati': { url: `${BASE}78263:albo-nidi-infanzia-privati.xlsx`, tipologia: Tipologia.NIDO, pubblico: false },
  'nidi-pubblici': { url: `${BASE}78266:albo-nidi-infanzia-pubblici.xlsx`, tipologia: Tipologia.NIDO, pubblico: true },
  'domiciliari-privati': {
    url: `${BASE}78264:albo-servizi-socioeducativi-domiciliari-privati-accreditati.xlsx`,
    tipologia: Tipologia.SERVIZIO_DOMICILIARE,
    pubblico: false,
  },
  'domiciliari-pubblici': {
    url: `${BASE}78267:albo-servizi-socioeducativi-domiciliari-pubblici.xlsx`,
    tipologia: Tipologia.SERVIZIO_DOMICILIARE,
    pubblico: true,
  },
};

export type ElencoLiguria = keyof typeof ELENCHI_LIGURIA;

/** Albo aggiornato al 30/04/2026. */
export const DATA_RIFERIMENTO_LIGURIA = new Date('2026-04-30T00:00:00Z');

/** 89 + 115 + 8 + 9 servizi nell'aggiornamento di aprile 2026. */
export const MINIMO_LIGURIA = 180;

export interface RigaLiguria {
  numero: string;
  denominazione: string;
  indirizzo: string;
  comune: string;
}

const testo = (v: ExcelJS.CellValue): string => {
  if (v && typeof v === 'object' && 'richText' in v) return v.richText.map((r) => r.text).join('').trim();
  if (v && typeof v === 'object' && 'text' in v) return String(v.text).trim();
  return String(v ?? '').trim();
};

/** Righe dati: dopo l'intestazione "N° / DENOMINAZIONE SERVIZIO / INDIRIZZO / COMUNE". */
export async function righeLiguria(contenuto: Buffer): Promise<RigaLiguria[]> {
  const libro = new ExcelJS.Workbook();
  await libro.xlsx.load(contenuto as unknown as ArrayBuffer);
  const righe: RigaLiguria[] = [];
  let iniziato = false;
  libro.worksheets[0].eachRow((riga) => {
    const v = Array.from(riga.values as ExcelJS.CellValue[]).slice(1).map(testo);
    if (!iniziato) {
      iniziato = v.some((c) => /DENOMINAZIONE/i.test(c));
      return;
    }
    if (!v[1] || !v[3]) return;
    righe.push({
      numero: v[0], denominazione: v[1], indirizzo: v[2], comune: v[3],
    });
  });
  return righe;
}

/** Nomi di comune abbreviati o scritti male nell'albo, nella forma ISTAT. */
const ALIAS: Record<string, string> = {
  'villanova di albenga': "Villanova d'Albenga",
  cisano: 'Cisano sul Neva',
  'albissola mare': 'Albissola Marina',
  'santa margherita': 'Santa Margherita Ligure',
  'san colombano': 'San Colombano Certenoli',
  'riccò del golfo': 'Riccò del Golfo di Spezia',
  'stefano di magra': 'Santo Stefano di Magra',
  vezzano: 'Vezzano Ligure',
};

/** Nome del comune senza frazione tra parentesi o dopo un trattino, con gli alias dell'albo. */
function nomeComune(c: string): string {
  const pulito = c.replace(/\s*\(.*\)\s*$/, '').replace(/\s+-\s+.*$/, '').trim();
  return ALIAS[pulito.toLowerCase()] ?? pulito;
}

export function parseLiguria(
  righe: RigaLiguria[],
  elenco: ElencoLiguria,
  comuni: ComuniLookup,
  scaricatoIl: Date,
): EsitoParsing {
  const { tipologia, pubblico, url } = ELENCHI_LIGURIA[elenco];
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const comune = comuni.daNome(nomeComune(r.comune), '', 'Liguria');
    if (!comune) {
      esito.scartate.push({ riga: i + 1, motivo: `comune non trovato: ${r.comune}` });
      return;
    }
    const domiciliare = tipologia === Tipologia.SERVIZIO_DOMICILIARE;
    const id = idUnico(`${elenco}-${comune.codiceIstat}-${impronta(r.denominazione)}`, visti);
    esito.strutture.push({
      chiave: `${FONTE_LIGURIA_ALBO}:${id}`,
      denominazione: domiciliare ? `Servizio educativo domiciliare a ${comune.nome}` : r.denominazione,
      tipologia,
      tipologiaOriginale: elenco,
      fascia: '0-3',
      gestione: pubblico ? Gestione.PUBBLICA : Gestione.PRIVATA,
      indirizzo: {
        via: domiciliare ? undefined : r.indirizzo || undefined,
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      accreditamento: pubblico ? undefined : 'si',
      misureAderite: [],
      contatti: {},
      caratteristiche: [pubblico ? 'servizio pubblico verificato (albo regionale)' : 'accreditato (albo regionale)'],
      riservato: { denominazione: r.denominazione, via: r.indirizzo || undefined },
      provenienza: {
        fonte: FONTE_LIGURIA_ALBO,
        idNellaFonte: id,
        url,
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento: DATA_RIFERIMENTO_LIGURIA,
        scaricatoIl,
      },
      attiva: true,
    } as Struttura);
  });
  return esito;
}
