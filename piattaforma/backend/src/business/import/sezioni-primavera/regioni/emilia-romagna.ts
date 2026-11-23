import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

/** Comuni spezzati a metà parola nella cella, o con la frazione. */
const COMUNI: Record<string, string> = {
  'MONTESCUD O - MONTE COLOMBO': 'Montescudo-Monte Colombo',
  'BAGNACAVAL LO': 'Bagnacavallo',
  'CASALGRAND E': 'Casalgrande',
  'BRUGNETO DI REGGIOLO': 'Reggiolo',
};

export const EMILIA_ROMAGNA: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-emilia-romagna',
  regione: 'Emilia-Romagna',
  atto: 'Decreto del Direttore Generale USR Emilia-Romagna n. 349 del 28/04/2026, a.s. 2025/26',
  url: 'https://www.istruzioneer.gov.it/wp-content/uploads/2026/04/m_pi.AOODRER.Registro-DecretiR.0000349.28-04-2026.pdf',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-04-28T00:00:00Z'),
  nomeFile: 'decreto-349-2026.pdf',
  // 60 sezioni nell'allegato.
  minimo: 51,
  // Le celle vanno a capo su 2-5 righe centrate su quella del numero progressivo, fino a 14 punti sopra e sotto:
  // si dimezza la scala verticale perché ogni testo vada al numero più vicino senza il limite di "vicino".
  // Si leggono solo le pagine dell'allegato, quelle con l'intestazione "Prog.".
  estrai: (pagine) => righeTabella(pagine
    .filter((elementi) => elementi.some((e) => e.testo === 'Prog.'))
    .map((elementi) => elementi.map((e) => ({ ...e, y: e.y / 2 }))), {
    ancora: { da: 80, a: 100, re: /^\d{1,3}$/ },
    colonne: {
      comune: [160, 230], gestore: [230, 345], servizio: [345, 445],
    },
    assegnazione: 'vicino',
    ignora: ['Prog.', 'Provincia', 'Comune', 'Ente Gestore', 'Intitolazione', 'servizio', 'Importo assegnato'],
  }).map((r) => ({
    // Se il servizio si chiama solo "Sezione primavera" si usa l'ente gestore.
    nome: /^(sez(ione|\.)?\s*primavera)?$/i.test(r.servizio) ? r.gestore : r.servizio,
    comune: COMUNI[r.comune] ?? r.comune,
    // La sigla della provincia non si usa: in alcune righe è sbagliata (RE per i comuni di Rimini).
  })),
};
