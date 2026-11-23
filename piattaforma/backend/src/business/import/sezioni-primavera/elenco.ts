import { ElementoPdf } from '../piemonte/pdf-testo';
import { FonteSezioniPrimavera, RigaSezionePrimavera } from './sezioni-primavera.parser';

/** Un elenco regionale: dove scaricarlo, come leggerlo, quante righe aspettarsi almeno (circuit breaker). */
export interface ElencoSezioniPrimavera extends FonteSezioniPrimavera {
  nomeFile: string;
  minimo: number;
  estrai: (pagine: ElementoPdf[][]) => RigaSezionePrimavera[];
}

export const LICENZA_ATTO = 'atto amministrativo pubblico (non dichiarata)';
