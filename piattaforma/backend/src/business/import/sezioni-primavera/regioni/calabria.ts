import { codiceMeccanografico } from '../sezioni-primavera.parser';
import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

/** Elenco provvisorio a.e. 2025/26 (allegato A alla nota USR Calabria prot. 35686 del 16/11/2026): si tengono le ammissibili. */
export const CALABRIA: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-calabria',
  regione: 'Calabria',
  atto: 'USR Calabria, elenco provvisorio prot. 35686 del 16/11/2026, a.e. 2025/26',
  url: 'https://www.istruzione.calabria.it/wp-content/uploads/2026/11/'
    + 'Allegato-A-sezioni-primavera-2025-26-m_pi.AOODRCAL.REGISTRO-UFFICIALEE.0035686.16-11-2026.pdf',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-11-16T00:00:00Z'),
  nomeFile: 'allegato-a-35686-2026.pdf',
  // 15 sezioni ammissibili su 26 domande.
  minimo: 12,
  estrai: (pagine) => righeTabella(pagine, {
    ancora: { da: 20, a: 38, re: /^\d{1,3}$/ },
    colonne: {
      codice: [38, 108], nome: [108, 250], comune: [250, 336], provincia: [336, 360], esito: [690, 900],
    },
    assegnazione: 'sopra',
    ignora: ['n°', 'Codice', 'meccanografico', 'Denominazione', 'Comune', 'Prov.', 'n° Sezioni', 'primavera', 'finanziate',
      'n°', 'bambini', 'accolti', 'convenzione', 'regione', 'NOTE', 'ESITO'],
  }).filter((r) => /AMMISSIBILE/.test(r.esito) && !/NON AMMISSIBILE/.test(r.esito)).map((r) => ({
    codice: codiceMeccanografico(r.codice),
    nome: r.nome,
    comune: /^REGGIO CALABRIA$/i.test(r.comune) ? 'Reggio di Calabria' : r.comune,
    provincia: r.provincia,
  })),
};
