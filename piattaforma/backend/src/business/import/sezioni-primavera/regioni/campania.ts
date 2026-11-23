import { codiceMeccanografico } from '../sezioni-primavera.parser';
import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

/** Comuni abbreviati o scritti male nell'allegato. */
const COMUNI: Record<string, string> = { 'SANTA MARIA C.V.': 'SANTA MARIA CAPUA VETERE', 'SESSA ARUNCA': 'SESSA AURUNCA' };

export const CAMPANIA: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-campania',
  regione: 'Campania',
  atto: 'Decreto USR Campania prot. 101103 del 30/10/2026, a.s. 2025/26',
  url: 'https://www.mim.gov.it/documents/7673905/10323025/'
    + 'm_pi.AOODRCA.REGISTRO+UFFICIALE%28U%29.0101103.30-10-2026.pdf/6f6abca0-c7c0-5cde-a965-8a93c95f036d',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-10-30T00:00:00Z'),
  nomeFile: 'decreto-101103-2026.pdf',
  // 179 sezioni nell'allegato 1 (il decreto annulla e sostituisce il prot. 99048 del 26/10/2026).
  minimo: 150,
  estrai: (pagine) => righeTabella(pagine, {
    ancora: { da: 50, a: 70, re: /^\d{1,3}$/ },
    colonne: {
      codice: [70, 134], nome: [155, 365], comune: [365, 453], provincia: [453, 472],
    },
    // Celle centrate in verticale: le righe andate a capo stanno sopra e sotto il numero d'ordine.
    assegnazione: 'vicino',
  }).map((r) => {
    const codice = codiceMeccanografico(r.codice);
    return {
      codice,
      // Senza codice (nidi comunali) la colonna riporta la tipologia, es. "ASILO NIDO": fa parte del nome.
      nome: /\d/.test(r.codice) ? r.nome : [r.codice, r.nome].filter(Boolean).join(' '),
      comune: COMUNI[r.comune] ?? r.comune,
      provincia: r.provincia,
    };
  }),
};
