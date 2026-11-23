import { codiceMeccanografico } from '../sezioni-primavera.parser';
import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

/** Comuni abbreviati o scritti in modo diverso dall'ISTAT. */
const COMUNI: Record<string, string> = {
  'GAZZO PADOVANO': 'GAZZO',
  'S. GIUSTINA IN COLLE': 'SANTA GIUSTINA IN COLLE',
  'SAN MARTINO LUPARI': 'SAN MARTINO DI LUPARI',
  "SAN DONA' PIAVE": 'SAN DONÀ DI PIAVE',
  'CORNEDO V.NO': 'CORNEDO VICENTINO',
  'MONTORSO V.NO': 'MONTORSO VICENTINO',
};

/** A volte comune e denominazione sono un unico testo ("TORRI DI QUARTESOLO SCUOLA INFANZIA ..."). */
const INIZIO_NOME = /\s((?:scuol[ae]|sc\.|nido|asilo|istituto)\b.*)$/i;

export const VENETO: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-veneto',
  regione: 'Veneto',
  atto: 'Decreto USR Veneto prot. 5650 del 25/11/2025, a.s. 2025/26',
  // Allegato all'albo pretorio dell'USR: il download diretto è rifiutato se non si passa dalla pagina dell'albo,
  // quindi il file si usa solo offline (copia nel RAW store, import con --offline).
  url: 'https://istruzioneveneto.gov.it/pubblicita-legale/albo-pretorio-in-corso/?action=dwnalle&id=5471&idAtto=2678',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2025-11-25T00:00:00Z'),
  nomeFile: 'decreto-5650-2025.pdf',
  // 409 sezioni autorizzate; l'elenco sostituisce quello del DDG 5447 del 14/11/2025.
  minimo: 350,
  estrai: (pagine) => righeTabella(pagine, {
    ancora: { da: 18, a: 35, re: /^\d{1,3}$/ },
    colonne: {
      provincia: [45, 72], comune: [72, 150], nome: [150, 365], codice: [365, 410], indirizzo: [410, 532],
    },
    assegnazione: 'sotto',
  }).map((r) => {
    const unito = INIZIO_NOME.exec(r.comune);
    const comune = unito ? r.comune.slice(0, unito.index) : r.comune;
    // Talvolta codice e indirizzo sono un unico testo ("BL1A04200X VIA P. DA RIN"): si separano.
    const [sidi, ...via] = r.codice.split(' ');
    return {
      codice: codiceMeccanografico(sidi),
      nome: (unito ? `${unito[1]} ${r.nome}`.trim() : r.nome).replace(/\s*-{2,}$/, ''),
      comune: COMUNI[comune.toUpperCase()] ?? comune,
      provincia: r.provincia,
      indirizzo: [...via, r.indirizzo].filter(Boolean).join(' ') || undefined,
    };
  }),
};
