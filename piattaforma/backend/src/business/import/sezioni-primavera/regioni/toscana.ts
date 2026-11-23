import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

export const TOSCANA: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-toscana',
  regione: 'Toscana',
  // Il riparto per l'a.s. 2025/26 non è ancora pubblicato: si usa quello dell'anno precedente.
  atto: 'Decreto USR Toscana DDG n. 1674 del 24/11/2025, a.s. 2024/25',
  // Dalla pagina https://www.mim.gov.it/web/miur-usr-toscana/-/sezioni-primavera-contributi-finanziari-a-s-2024-25-
  // riparto-contributi
  url: 'https://www.mim.gov.it/documents/828576/8785740/m_pi.AOODRTO.Registro+regionale+dei+decreti+direttoriali'
    + '%28R%29.0001674.24-11-2025.pdf/075f9349-8019-4e64-1078-db6dda976a98?version=1.0&t=1763985507053',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2025-11-24T00:00:00Z'),
  nomeFile: 'decreto-1674-2025.pdf',
  // 32 sezioni nel prospetto allegato.
  minimo: 27,
  // Le colonne dell'ente gestore e della sede legale non servono: la sede legale non è il comune della sezione.
  estrai: (pagine) => righeTabella(pagine, {
    ancora: { da: 270, a: 290, re: /^[A-Z]{2}$/ },
    colonne: {
      richiedente: [20, 92], nome: [92, 160], indirizzo: [160, 220], comune: [220, 270], provincia: [270, 290],
    },
    assegnazione: 'vicino',
    ignora: ['Istituzione richiedente', 'Sezione Primavera', 'Indirizzo', 'Comune', 'Pr.'],
  }).map((r) => ({
    nome: r.nome || r.richiedente,
    // "Chiusi (SI)": la provincia è già nella sua colonna.
    comune: r.comune.replace(/\s*\([A-Z]{2}\)$/, ''),
    provincia: r.provincia,
    indirizzo: r.indirizzo || undefined,
  })),
};
