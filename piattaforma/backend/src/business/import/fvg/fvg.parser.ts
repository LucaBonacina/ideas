import ExcelJS from 'exceljs';
import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { emailPubblicabile, pulisci, telefonoPubblicabile } from '../../../domain/privacy';
import { titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';

export const FONTE_FVG = 'fvg-registro-prima-infanzia';

export const PAGINA_FVG = 'https://www.regione.fvg.it/rafvg/cms/RAFVG/famiglia-casa/politiche-famiglia/FOGLIA27/';

export const MISURA_FVG = 'Abbattimento rette servizi prima infanzia (Regione FVG)';

const TIPOLOGIE: Record<string, Tipologia> = {
  "NIDO D'INFANZIA": Tipologia.NIDO,
  'SERVIZIO EDUCATIVO DOMICILIARE': Tipologia.SERVIZIO_DOMICILIARE,
  'SPAZIO GIOCO': Tipologia.SPAZIO_GIOCO,
  'CENTRO BAMBINI E GENITORI': Tipologia.CENTRO_BAMBINI_FAMIGLIE,
};

/** Trova nella pagina regionale il link all'ultimo file Excel del registro (il nome cambia ogni mese). */
export function linkFileFvg(html: string): string | undefined {
  const link = html.match(/href="([^"]*Strutture_per_registro[^"]*\.xlsx)"/i)?.[1];
  return link ? new URL(link, PAGINA_FVG).toString() : undefined;
}

function testo(valore: ExcelJS.CellValue): string {
  if (valore === null || valore === undefined) return '';
  if (typeof valore === 'object' && 'text' in valore) return String(valore.text);
  if (typeof valore === 'object' && 'result' in valore) return String(valore.result ?? '');
  return String(valore);
}

function siNo(valore: string): 'si' | 'no' | 'in corso' | undefined {
  const v = valore.trim().toLowerCase();
  if (v === 'sì' || v === 'si') return 'si';
  if (v === 'no') return 'no';
  if (v.includes('fase') || v.includes('valutazione')) return 'in corso';
  return undefined;
}

/** Registro regionale dei servizi per la prima infanzia attivi in Friuli-Venezia Giulia (file Excel mensile). */
export async function parseFvg(
  contenuto: Buffer,
  url: string,
  comuni: ComuniLookup,
  scaricatoIl: Date,
): Promise<EsitoParsing> {
  const libro = new ExcelJS.Workbook();
  await libro.xlsx.load(contenuto as unknown as ArrayBuffer);
  const foglio = libro.worksheets[0];
  // values è un array sparso che parte dall'indice 1: Array.from riempie i buchi.
  const intestazione = Array.from(foglio.getRow(1).values as ExcelJS.CellValue[], (v) => testo(v).trim());
  const col = (nome: string): number => {
    const i = intestazione.findIndex((h) => h.toLowerCase().startsWith(nome.toLowerCase()));
    if (i < 0) throw new Error(`Colonna FVG mancante: ${nome}`);
    return i;
  };
  const c = {
    codice: col('Codice Struttura'),
    tipologia: col('Tipologia Servizio'),
    nome: col('Nome'),
    comune: col('Comune'),
    telefono: col('Numero di Telefono'),
    email: col('Struttura E-mail'),
    gestione: col('Tipologia Struttura'),
    posti: col('Capacità Ricettiva'),
    etaDa: col("Fascia d'età - Da"),
    etaA: col("Fascia d'età - A"),
    accreditato: col('Accreditato'),
    abbattimento: col('Applica abbattimento rette'),
  };
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  foglio.eachRow((row, numero) => {
    if (numero === 1) return;
    const v = row.values as ExcelJS.CellValue[];
    const codice = pulisci(testo(v[c.codice]));
    if (!codice) return;
    const tipologiaFonte = testo(v[c.tipologia]).trim();
    const tipologia = TIPOLOGIE[tipologiaFonte.toUpperCase()];
    if (!tipologia) {
      esito.scartate.push({ riga: numero, motivo: `tipologia sconosciuta: ${tipologiaFonte}` });
      return;
    }
    const comune = comuni.daNome(testo(v[c.comune]), '', 'Friuli-Venezia Giulia');
    if (!comune) {
      esito.scartate.push({ riga: numero, motivo: `comune non trovato: ${testo(v[c.comune])}` });
      return;
    }
    // Un servizio domiciliare si svolge in un'abitazione: niente nome (spesso è quello dell'educatrice) né recapiti.
    const domiciliare = tipologia === Tipologia.SERVIZIO_DOMICILIARE;
    const gestioneFonte = testo(v[c.gestione]).trim().toLowerCase();
    const posti = Number(testo(v[c.posti]));
    const etaDa = Number(testo(v[c.etaDa]));
    const etaA = Number(testo(v[c.etaA]));
    const struttura: Struttura = {
      chiave: `${FONTE_FVG}:${codice}`,
      denominazione: domiciliare ? `Servizio educativo domiciliare a ${comune.nome}` : titoloLeggibile(testo(v[c.nome])),
      tipologia,
      tipologiaOriginale: tipologiaFonte.toUpperCase(),
      fascia: '0-3',
      gestione: { pubblica: Gestione.PUBBLICA, privata: Gestione.PRIVATA }[gestioneFonte] ?? Gestione.SCONOSCIUTA,
      indirizzo: {
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      posti: Number.isFinite(posti) && posti > 0 ? posti : undefined,
      etaMinimaMesi: Number.isFinite(etaDa) && testo(v[c.etaDa]) !== '' ? etaDa : undefined,
      etaMassimaMesi: Number.isFinite(etaA) && etaA > 0 ? etaA : undefined,
      accreditamento: siNo(testo(v[c.accreditato])),
      misureAderite: siNo(testo(v[c.abbattimento])) === 'si' ? [MISURA_FVG] : [],
      contatti: domiciliare ? {} : {
        email: emailPubblicabile(testo(v[c.email])),
        telefono: telefonoPubblicabile(testo(v[c.telefono])),
      },
      caratteristiche: [],
      provenienza: {
        fonte: FONTE_FVG,
        idNellaFonte: codice,
        url,
        licenza: 'non dichiarata dalla fonte',
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
