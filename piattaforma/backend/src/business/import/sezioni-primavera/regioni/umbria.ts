import { ElementoPdf } from '../../piemonte/pdf-testo';
import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

/** Un testo che nel PDF unisce due celle: dove cercarlo e dove mettere la seconda parte. */
export interface Divisione {
  da: number;
  a: number;
  /** Due gruppi: la prima cella e la seconda. */
  re: RegExp;
  /** Ascissa a cui collocare la seconda cella. */
  x: number;
}

/** Divide i testi che uniscono due celle (es. "1 Parrocchia S. Vitale", "80011000546 Assisi"). */
export function dividiCelle(pagine: ElementoPdf[][], divisioni: Divisione[]): ElementoPdf[][] {
  return pagine.map((elementi) => elementi.flatMap((e) => {
    const d = divisioni.find((v) => e.x >= v.da && e.x < v.a && v.re.test(e.testo));
    const m = d ? d.re.exec(e.testo) : null;
    return d && m ? [{ ...e, testo: m[1] }, { ...e, testo: m[2], x: d.x }] : [e];
  }));
}

/** Frazioni, refusi e nomi brevi: il comune ISTAT corrispondente. */
const COMUNI: Record<string, string> = {
  Passignano: 'Passignano sul Trasimeno',
  'Castel Ritardi': 'Castel Ritaldi',
  Eggi: 'Spoleto',
  Sangemini: 'San Gemini',
};

export const UMBRIA: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-umbria',
  regione: 'Umbria',
  atto: 'Decreto USR Umbria n. 199 del 28/04/2026, a.s. 2025/26',
  url: 'https://istruzione.umbria.it/wp-content/uploads/2026/04/Allegato-signed-1.pdf',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-04-28T00:00:00Z'),
  nomeFile: 'decreto-199-2026.pdf',
  // 34 sezioni nell'allegato.
  minimo: 29,
  estrai: (pagine) => righeTabella(dividiCelle(pagine, [
    { da: 55, a: 75, re: /^(\d{1,2})\s+(.+)$/, x: 80 },
    { da: 500, a: 515, re: /^(\d{11})\s+(.+)$/, x: 563 },
  ]), {
    ancora: { da: 55, a: 75, re: /^\d{1,2}$/ },
    colonne: { gestore: [75, 275], scuola: [275, 500], comune: [540, 640] },
    assegnazione: 'vicino',
    ignora: ['TOTALE'],
  }).map((r) => ({ nome: r.scuola || r.gestore, comune: COMUNI[r.comune] ?? r.comune })),
};
