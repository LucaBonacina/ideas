import { codiceMeccanografico } from '../sezioni-primavera.parser';
import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

/** Sedi scritte in breve, con refusi o con la frazione: il comune ISTAT corrispondente. */
const COMUNI: Record<string, string> = {
  'San demetrio': "San Demetrio ne' Vestini",
  'S.Benedetto dei Marsi': 'San Benedetto dei Marsi',
  Roseto: 'Roseto degli Abruzzi',
  'Civitalla del Tronto': 'Civitella del Tronto',
  "L'Aqula-S.Gregorio": "L'Aquila",
  "L'Aquila - Sassa": "L'Aquila",
  "L'Aquila - ONNA": "L'Aquila",
  'Castelnuovo Vomano': 'Castellalto',
  'Cellino Attanasimo': 'Cellino Attanasio',
  'Castiglione MM': 'Castiglione Messer Marino',
  'S.Valentino': 'San Valentino in Abruzzo Citeriore',
};

export const ABRUZZO: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-abruzzo',
  regione: 'Abruzzo',
  atto: 'Decreto del Direttore Generale USR Abruzzo n. 146 del 04/08/2025, a.s. 2024/25',
  // Il PDF della graduatoria sta in uno zip (documents/919804/0/Contributi+alle+SEZIONI+PRIMAVERA+-+Cap.+14661
  // ++a.s.+202425+Decreto+DG+e+tabella.zip): si estrae a mano e si usa offline; qui la pagina ufficiale.
  url: 'https://www.mim.gov.it/web/abruzzo/contributi-alle-sezioni-primavera-atti-di-concessione',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2025-08-04T00:00:00Z'),
  nomeFile: 'decreto-146-2025.pdf',
  // 46 sezioni in graduatoria (l'ultimo atto pubblicato è per l'a.s. 2024/25).
  minimo: 39,
  estrai: (pagine) => righeTabella(pagine, {
    ancora: { da: 50, a: 59, re: /^\d{1,2}$/ },
    colonne: {
      sezione: [59, 123], scuola: [123, 185], codice: [185, 219], comune: [219, 265],
    },
    assegnazione: 'vicino',
  }).map((r) => ({
    codice: codiceMeccanografico(r.codice),
    // Le sezioni nei nidi comunali non hanno una scuola ospitante: si usa il nome della sezione.
    nome: /^(nido )?comunale$/i.test(r.scuola) ? `Nido comunale ${r.sezione}` : r.scuola || r.sezione,
    comune: COMUNI[r.comune] ?? r.comune,
  })),
};
