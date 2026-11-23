import { codiceMeccanografico } from '../sezioni-primavera.parser';
import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

/** Comuni abbreviati e frazioni scritte al posto del comune. */
const COMUNI: Record<string, string> = {
  'sestri l.': 'Sestri Levante',
  's. stefano di magra': 'Santo Stefano di Magra',
  'tovo s. giacomo': 'Tovo San Giacomo',
  'arma di taggia': 'Taggia',
  'san terenzo': 'Lerici',
};

/** CAP dei capoluoghi, quando la cella ha il CAP ma non il comune ("Via Opera Pia 9/A - 16145"). */
const CAPOLUOGHI: [RegExp, string][] = [
  [/^161\d\d$/, 'Genova'], [/^191\d\d$/, 'La Spezia'], [/^17100$/, 'Savona'], [/^18100$/, 'Imperia'],
];

/**
 * Il decreto ligure mette indirizzo, CAP e comune in un'unica cella ("Via Guala 1 - 16158 Genova Voltri"):
 * il comune è dopo il CAP o, senza CAP, dopo l'ultimo numero civico. Le località di Genova e della Spezia
 * ("Genova Pegli", "GE-Prà", "Rebocco La Spezia") diventano il comune.
 */
export function separaComune(cella: string): { indirizzo: string; comune: string } {
  const testo = cella.replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
  const cap = /\b\d{5}\b/.exec(testo);
  let indirizzo: string;
  let comune: string;
  if (cap && testo.slice(cap.index + 5).replace(/[\s,–-]/g, '')) {
    indirizzo = testo.slice(0, cap.index);
    comune = testo.slice(cap.index + 5);
  } else {
    const senzaCap = cap ? testo.slice(0, cap.index) : testo;
    const civico = /^(.*\d[\w/]*)(.*)$/.exec(senzaCap);
    indirizzo = civico ? civico[1] : senzaCap;
    comune = civico ? civico[2] : '';
  }
  comune = comune.replace(/^[\s,–-]+|[\s,–-]+$/g, '').replace(/\s+(GE|IM|SP|SV)$/i, '');
  if (/^(Genova\b|GE-)/i.test(comune)) comune = 'Genova';
  else if (/\bLa Spezia$/i.test(comune)) comune = 'La Spezia';
  else if (!comune && cap) comune = CAPOLUOGHI.find(([re]) => re.test(cap[0]))?.[1] ?? '';
  else comune = COMUNI[comune.toLowerCase()] ?? comune;
  return { indirizzo: indirizzo.replace(/[\s,–-]+$/, ''), comune };
}

export const LIGURIA: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-liguria',
  regione: 'Liguria',
  atto: 'Decreto USR Liguria (R) n. 1302 del 25/05/2026, a.s. 2025/26',
  url: 'https://cspace.spaggiari.eu//pub/GESR0001/Scuole%20non%20Statali/SEZIONI%20PRIMAVERA%2025_26/'
    + 'Piano%20di%20Riparto%20CAP%201466-1%20Contributi%20finanziari%20sezioni%20primavera%20EF%202026_RTS.pdf',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-05-25T00:00:00Z'),
  nomeFile: 'decreto-1302-2026.pdf',
  // 86 istituzioni (88 sezioni) autorizzate e finanziate.
  minimo: 73,
  estrai: (pagine) => righeTabella(pagine, {
    ancora: { da: 128, a: 142, re: /^\d{1,3}$/ },
    colonne: {
      codice: [155, 184], nome: [184, 283], indirizzo: [283, 374], provincia: [374, 390],
    },
    assegnazione: 'vicino',
    ignora: ['n°', 'Codice', 'meccanografico', 'Denominazione', 'Comune', 'Prov.', '* Con arrotondamento'],
  }).map((r) => ({
    codice: codiceMeccanografico(r.codice),
    nome: r.nome.replace(/\s*\*$/, ''),
    provincia: r.provincia,
    ...separaComune(r.indirizzo),
  })),
};
