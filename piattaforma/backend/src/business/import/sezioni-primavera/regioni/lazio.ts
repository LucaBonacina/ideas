import { codiceMeccanografico } from '../sezioni-primavera.parser';
import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

/** Refusi nella colonna del comune. */
const COMUNI: Record<string, string> = { FROSINONNE: 'FROSINONE' };

export const LAZIO: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-lazio',
  regione: 'Lazio',
  atto: 'Decreto USR Lazio DDG n. 134 del 09/02/2026, a.s. 2025/26',
  url: 'https://www.ufficioscolasticoregionalelazio.it/wp-content/uploads/2026/02/riparto-sez.Primavera-anno-25-26-9_signed.pdf',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-02-09T00:00:00Z'),
  nomeFile: 'decreto-134-2026.pdf',
  // 105 istituzioni (127 sezioni) nel piano di riparto; le righe "TOTALI" per provincia non hanno il numero d'ordine.
  minimo: 90,
  estrai: (pagine) => righeTabella(pagine, {
    ancora: { da: 48, a: 62, re: /^\d{1,3}$/ },
    colonne: {
      // Il comune comincia sempre a x≈252; più a destra c'è il nome della provincia che apre ogni gruppo.
      codice: [62, 105], nome: [105, 250], comune: [250, 270], provincia: [318, 335],
    },
    assegnazione: 'vicino',
  }).map((r) => ({
    codice: codiceMeccanografico(r.codice), nome: r.nome, comune: COMUNI[r.comune] ?? r.comune, provincia: r.provincia,
  })),
};
