import { parse } from 'csv-parse/sync';
import { BenchmarkIstat } from '../../../database/benchmark-istat.schema';
import { Tipologia } from '../../../domain/tipologia.enum';

/** Servizi attivi per comune e tipologia, titolarità totale, per l'anno indicato. */
export const urlBenchmarkIstat = (anno: string): string => 'https://esploradati.istat.it/SDMXWS/rest/data/IT1,47_850,1.0/'
  + `A..SERV..ALL.9?startPeriod=${anno}&endPeriod=${anno}`;

/** Corrispondenza tra le tipologie ISTAT e le nostre. */
export const TIPI_ISTAT: Record<string, Tipologia[]> = {
  CDNUR: [Tipologia.NIDO, Tipologia.MICRONIDO],
  DNISC: [Tipologia.SEZIONE_PRIMAVERA],
  GUARD: [Tipologia.SPAZIO_GIOCO],
  HNUR: [Tipologia.SERVIZIO_DOMICILIARE],
  CCHP: [Tipologia.CENTRO_BAMBINI_FAMIGLIE],
};

export function parseBenchmarkIstat(contenuto: Buffer): BenchmarkIstat[] {
  const righe: Record<string, string>[] = parse(contenuto.toString('utf8'), { columns: true, skip_empty_lines: true });
  const perComune = new Map<string, BenchmarkIstat>();
  for (const r of righe) {
    if (!/^\d{6}$/.test(r.REF_AREA) || r.OBS_VALUE === '') continue;
    const b = perComune.get(r.REF_AREA) ?? {
      codiceIstat: r.REF_AREA, anno: r.TIME_PERIOD, totale: 0, perTipo: {},
    };
    const valore = Number(r.OBS_VALUE) || 0;
    if (r.TYPE_SOCIO_EDUC_SERVICE === 'ALL') b.totale = valore;
    else if (TIPI_ISTAT[r.TYPE_SOCIO_EDUC_SERVICE]) b.perTipo[r.TYPE_SOCIO_EDUC_SERVICE] = valore;
    perComune.set(r.REF_AREA, b);
  }
  return [...perComune.values()];
}
