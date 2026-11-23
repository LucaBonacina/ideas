import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

/** Molte righe hanno come nome solo "Sezione Primavera": in quel caso si usa il soggetto gestore. */
const GENERICA = /^sezione primavera$/i;

export const MOLISE: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-molise',
  regione: 'Molise',
  atto: 'Decreto USR Molise DDG n. 137 del 02/09/2026, a.s. 2025/26',
  // Allegato A, estratto dallo zip (documents/7190124/7414777/02-09-2026.zip) pubblicato in questa pagina:
  // usato offline.
  url: 'https://www.mim.gov.it/web/molise/-/riparto-delle-risorse-destinate-alle-sezioni-primavera-per-l-anno-'
    + 'educativo-2025-2026',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-09-02T00:00:00Z'),
  nomeFile: 'decreto-137-2026.pdf',
  // 20 sezioni nell'allegato A.
  minimo: 17,
  estrai: (pagine) => righeTabella(pagine, {
    ancora: { da: 45, a: 60, re: /^\d{1,2}$/ },
    colonne: { comune: [60, 128], nome: [128, 225], gestore: [225, 415] },
    assegnazione: 'vicino',
  }).map((r) => ({
    nome: !r.nome || GENERICA.test(r.nome) ? r.gestore : r.nome,
    comune: r.comune,
  })),
};
