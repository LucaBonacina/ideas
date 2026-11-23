import { ElencoSezioniPrimavera } from './elenco';
import { LOMBARDIA } from './regioni/lombardia';
import { SICILIA } from './regioni/sicilia';
import { VENETO } from './regioni/veneto';
import { CAMPANIA } from './regioni/campania';
import { LIGURIA } from './regioni/liguria';
import { LAZIO } from './regioni/lazio';
import { BASILICATA } from './regioni/basilicata';
import { MOLISE } from './regioni/molise';
import { TOSCANA } from './regioni/toscana';
import { MARCHE } from './regioni/marche';
import { PUGLIA, PUGLIA_NUOVE } from './regioni/puglia';
import { FRIULI_VENEZIA_GIULIA } from './regioni/friuli-venezia-giulia';
import { PIEMONTE } from './regioni/piemonte';
import { SARDEGNA } from './regioni/sardegna';
import { ABRUZZO } from './regioni/abruzzo';
import { EMILIA_ROMAGNA } from './regioni/emilia-romagna';
import { UMBRIA } from './regioni/umbria';

export { ElencoSezioniPrimavera } from './elenco';

/** Elenchi regionali delle sezioni primavera ammesse al finanziamento: un file per regione in regioni/. */
export const ELENCHI_SEZIONI_PRIMAVERA: ElencoSezioniPrimavera[] = [
  LOMBARDIA,
  SICILIA,
  VENETO,
  CAMPANIA,
  LIGURIA,
  LAZIO,
  BASILICATA,
  MOLISE,
  TOSCANA,
  MARCHE,
  PUGLIA,
  PUGLIA_NUOVE,
  FRIULI_VENEZIA_GIULIA,
  PIEMONTE,
  SARDEGNA,
  ABRUZZO,
  EMILIA_ROMAGNA,
  UMBRIA,
];
