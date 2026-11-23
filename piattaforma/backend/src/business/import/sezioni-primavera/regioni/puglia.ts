import { RigaTabella, righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';
import { RigaSezionePrimavera } from '../sezioni-primavera.parser';

/** Refusi e frazioni nella colonna del comune. */
const COMUNI: Record<string, string> = {
  NOIICATTARO: 'NOICATTARO',
  'NOHA DI GALATINA': 'GALATINA',
};

/** L'allegato usa "BAT" per Barletta-Andria-Trani, la sigla ufficiale è "BT". */
const provincia = (sigla: string): string => (sigla === 'BAT' ? 'BT' : sigla);

/** Solo le sezioni ammesse (anche "AMMESSA CON RISERVA"). */
const ammessa = (esito: string): boolean => /^AMMESSA\b/i.test(esito);

function riga(r: RigaTabella): RigaSezionePrimavera {
  return {
    nome: r.nome,
    comune: COMUNI[r.comune.toUpperCase()] ?? r.comune,
    provincia: provincia(r.provincia),
    indirizzo: r.indirizzo || undefined,
  };
}

export const PUGLIA: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-puglia',
  regione: 'Puglia',
  // Ultimo riparto disponibile, per l'a.s. 2024/25.
  atto: 'Decreto USR Puglia DDG n. 39192 del 18/06/2025, a.s. 2024/25',
  // Allegato 1, estratto dallo zip https://www.pugliausr.gov.it/images/Pubblicazioni/2025/39252_2025.zip
  // pubblicato nella pagina https://www.pugliausr.gov.it/index.php/diritto-allo-studio/scuole-paritarie/26416-39252-2025
  // (usato offline).
  url: 'https://www.pugliausr.gov.it/index.php/diritto-allo-studio/scuole-paritarie/26416-39252-2025',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2025-06-18T00:00:00Z'),
  nomeFile: 'decreto-39192-2025-allegato-1.pdf',
  // 71 sezioni ammesse nell'allegato 1.
  minimo: 60,
  estrai: (pagine) => righeTabella(pagine, {
    ancora: { da: 50, a: 70, re: /^\d{1,3}$/ },
    colonne: {
      nome: [70, 230], provincia: [295, 325], comune: [325, 400], indirizzo: [400, 495], esito: [680, 740],
    },
    assegnazione: 'vicino',
  }).filter((r) => ammessa(r.esito)).map(riga),
};

/**
 * Allegato 2 dello stesso decreto: le sezioni di nuova istituzione (4 righe), con colonne in posizioni diverse.
 * È una fonte a sé perché ogni fonte legge un solo file.
 */
export const PUGLIA_NUOVE: ElencoSezioniPrimavera = {
  ...PUGLIA,
  fonte: 'sezioni-primavera-puglia-nuove',
  atto: 'Decreto USR Puglia DDG n. 39192 del 18/06/2025 (allegato 2, nuove sezioni), a.s. 2024/25',
  nomeFile: 'decreto-39192-2025-allegato-2.pdf',
  // 4 sezioni nell'allegato 2.
  minimo: 3,
  estrai: (pagine) => righeTabella(pagine, {
    // L'ID può avere un apice ("60'"): seconda sezione della stessa scuola dell'allegato 1.
    ancora: { da: 50, a: 70, re: /^\d{1,3}'?$/ },
    colonne: {
      nome: [70, 175], provincia: [245, 280], comune: [280, 355], indirizzo: [355, 430], esito: [630, 685],
    },
    assegnazione: 'vicino',
  }).filter((r) => ammessa(r.esito)).map(riga),
};
