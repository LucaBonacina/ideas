import { ElencoSezioniPrimavera } from './elenco';
import { LOMBARDIA } from './regioni/lombardia';
import { SICILIA } from './regioni/sicilia';
import { VENETO } from './regioni/veneto';
import { CAMPANIA } from './regioni/campania';
import { LIGURIA } from './regioni/liguria';
import { LAZIO } from './regioni/lazio';

export { ElencoSezioniPrimavera } from './elenco';

/** Elenchi regionali delle sezioni primavera ammesse al finanziamento: un file per regione in regioni/. */
export const ELENCHI_SEZIONI_PRIMAVERA: ElencoSezioniPrimavera[] = [
  LOMBARDIA,
  SICILIA,
  VENETO,
  CAMPANIA,
  LIGURIA,
  LAZIO,
];
