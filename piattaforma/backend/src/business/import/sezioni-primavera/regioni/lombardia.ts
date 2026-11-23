import { codiceMeccanografico } from '../sezioni-primavera.parser';
import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

export const LOMBARDIA: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-lombardia',
  regione: 'Lombardia',
  atto: 'Decreto USR Lombardia n. 760 del 21/05/2026, a.s. 2025/26',
  url: 'https://www.regione.lombardia.it/content/dam/rl/canali-tematici-servizi/03-istruzione-formazione-e-lavoro/'
    + '01-sistema-integrato-0---6-anni/red-sezioni-primavera/avvisi-sezioni-primavera/'
    + 'Decreto%20e%20allegato%20USR%20n.%20760%20del%2021%20maggio%202026%20-%20Sezioni%20Primavera%20ammesse'
    + '%20al%20finanziamento%20per%20l%27a.s.%202025_2026.pdf',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-05-21T00:00:00Z'),
  nomeFile: 'decreto-760-2026.pdf',
  // 769 istituzioni ammesse secondo il decreto.
  minimo: 700,
  estrai: (pagine) => righeTabella(pagine, {
    ancora: { da: 15, a: 45, re: /^\d{1,4}$/ },
    colonne: {
      nome: [50, 195], provincia: [195, 295], comune: [295, 430], codice: [600, 800],
    },
    assegnazione: 'sopra',
    ignora: ['N.', 'Nome scuola', 'Provincia Scuola', 'Comune Scuola', 'CONTRIBUTO', 'STATALE (USR', 'REGIONE',
      'LOMBARDIA', 'LOMBARDIA)', 'Codice Meccanografico', 'Scuola'],
  }).map((r) => ({
    codice: codiceMeccanografico(r.codice), nome: r.nome, comune: r.comune, provincia: r.provincia,
  })),
};
