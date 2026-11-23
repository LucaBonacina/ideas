import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

/** Comune della scuola senza la frazione: "TRASAGHIS (Avasinis)", "PREMARIACCO fraz. IPPLIS". */
function comune(testo: string): string {
  return testo.replace(/\s*\(.*\)\s*$/, '').replace(/\s+fraz\..*$/i, '').trim();
}

export const FRIULI_VENEZIA_GIULIA: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-friuli-venezia-giulia',
  regione: 'Friuli-Venezia Giulia',
  atto: 'Decreto Regione FVG n. 63588/2026 del 17/11/2026, a.s. 2026/27',
  url: 'https://www.regione.fvg.it/rafvg/cms/RAFVG/famiglia-casa/politiche-famiglia/FOGLIA40/allegati/'
    + '20261117_Decr_riparto_Sezioni_Primavera_2026_2027_allegato.pdf',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-11-17T00:00:00Z'),
  nomeFile: 'decreto-63588-2026.pdf',
  // 42 sezioni in prosecuzione e 2 nuove attivazioni.
  minimo: 37,
  // Il comune è quello della scuola (x 340-440), non quello della sede del gestore (x 660-760).
  estrai: (pagine) => righeTabella(pagine, {
    ancora: { da: 50, a: 72, re: /^\d{1,3}a?$/ },
    colonne: { nome: [72, 340], comune: [340, 440], provincia: [440, 460], esito: [980, 1100] },
    assegnazione: 'vicino',
  }).filter((r) => /\bAMMESSA\b/i.test(r.esito) && !/NON AMMESSA/i.test(r.esito))
    .map((r) => ({ nome: r.nome, comune: comune(r.comune), provincia: r.provincia })),
};
