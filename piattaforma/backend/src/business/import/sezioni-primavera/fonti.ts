import { ElencoSezioniPrimavera } from './elenco';
import { LOMBARDIA } from './regioni/lombardia';
import { SICILIA } from './regioni/sicilia';

export { ElencoSezioniPrimavera } from './elenco';

/** Elenchi regionali delle sezioni primavera ammesse al finanziamento: un file per regione in regioni/. */
export const ELENCHI_SEZIONI_PRIMAVERA: ElencoSezioniPrimavera[] = [
  LOMBARDIA,
  SICILIA,
];
