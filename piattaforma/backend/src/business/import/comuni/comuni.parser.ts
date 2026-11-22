import { parse } from 'csv-parse/sync';
import { Comune } from '../../../database/comune.schema';
import { normalizzaNome } from '../../../domain/normalizza';

/** Legge l'elenco dei comuni ISTAT (CSV con ";" in codifica Latin-1). */
export function parseComuniIstat(contenuto: Buffer): Comune[] {
  const righe: string[][] = parse(contenuto.toString('latin1'), {
    delimiter: ';', relax_column_count: true, skip_empty_lines: true,
  });
  const [intestazione, ...dati] = righe;
  const indice = (inizio: string): number => {
    const i = intestazione.findIndex((h) => h.replace(/\s+/g, ' ').trim().startsWith(inizio));
    if (i < 0) throw new Error(`Colonna ISTAT mancante: ${inizio}`);
    return i;
  };
  const iCodice = indice('Codice Comune formato alfanumerico');
  const iNome = indice('Denominazione in italiano');
  const iAltra = indice('Denominazione altra lingua');
  const iRegione = indice('Denominazione Regione');
  const iSigla = indice('Sigla automobilistica');
  const iCatastale = indice('Codice Catastale del comune');
  return dati.filter((r) => r[iCodice]).map((r) => ({
    codiceIstat: r[iCodice].trim(),
    codiceCatastale: r[iCatastale].trim().toUpperCase(),
    nome: r[iNome].trim(),
    nomeAltraLingua: r[iAltra]?.trim() || undefined,
    nomeNormalizzato: normalizzaNome(r[iNome]),
    siglaProvincia: r[iSigla].trim().toUpperCase(),
    regione: r[iRegione].split('/')[0].trim(),
  }));
}
