import { Struttura } from '../../database/struttura.schema';

export interface EsitoParsing {
  strutture: Struttura[];
  /** Righe scartate con il motivo, per il controllo di qualità dell'import. */
  scartate: { riga: number; motivo: string }[];
}
