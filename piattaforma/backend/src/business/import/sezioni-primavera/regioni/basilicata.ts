import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

/** Comuni scritti male nell'allegato (o con la frazione al posto del comune). */
const COMUNI: Record<string, string> = {
  'FRANCAVILLA IN VILLA': 'Francavilla in Sinni',
  'NOVA SIRI MARINA': 'Nova Siri',
};

function comune(testo: string): string {
  // "SAN FELEcda Cecci": la contrada è attaccata al nome del comune.
  const pulito = testo.replace(/cda\b.*$/i, '').trim();
  return COMUNI[pulito.toUpperCase()] ?? pulito;
}

/** Denominazioni che non dicono nulla della sezione: meglio il nome dell'ente gestore. */
const GENERICA = /^SEZ(IONE|\.) (INFANZIA|PRIMAVERA)$/i;

export const BASILICATA: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-basilicata',
  regione: 'Basilicata',
  atto: 'Decreto USR Basilicata prot. n. 174 del 13/07/2026, a.s. 2025/26',
  // Allegato "Elenco Beneficiari Sezioni Primavera 2025.2026", dalla pagina
  // https://www.mim.gov.it/web/basilicata/-/decreto-assegnazione-risorse-sezioni-primavera-a-e-2025-2026
  url: 'https://www.mim.gov.it/documents/8099600/8784171/All.+Elenco+Beneficiari+Sezioni+Primavera+2025.2026.pdf/'
    + '53a67b45-d54c-e77f-ddd2-4f07a0a699b9?version=1.0&t=1783935055439',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-07-13T00:00:00Z'),
  nomeFile: 'decreto-174-2026.pdf',
  // 61 sezioni ammesse nell'allegato.
  minimo: 52,
  // Le celle su tre righe arrivano a 14,2 punti dalla riga del numero, appena fuori dalla finestra di "vicino":
  // comprimere le y del 10% le fa rientrare (le righe della tabella distano 40 punti, le righe di testo 7).
  estrai: (pagine) => righeTabella(pagine.map((p) => p.map((e) => ({ ...e, y: e.y * 0.9 }))), {
    ancora: { da: 20, a: 45, re: /^\d{1,3}$/ },
    colonne: { comune: [45, 190], gestore: [190, 400], nome: [400, 590] },
    assegnazione: 'vicino',
    ignora: ['COMUNE', 'ENTE GESTORE', 'DENOMINAZIONE SEZIONE PRIMAVERA'],
  }).map((r) => ({
    nome: !r.nome || GENERICA.test(r.nome) ? r.gestore : r.nome,
    comune: comune(r.comune),
  })),
};
