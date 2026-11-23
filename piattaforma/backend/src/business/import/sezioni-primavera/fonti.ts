import { ElementoPdf } from '../piemonte/pdf-testo';
import { codiceMeccanografico, FonteSezioniPrimavera, RigaSezionePrimavera } from './sezioni-primavera.parser';
import { righeTabella } from './tabella-pdf';

/** Un elenco regionale: dove scaricarlo, come leggerlo, quante righe aspettarsi almeno (circuit breaker). */
export interface ElencoSezioniPrimavera extends FonteSezioniPrimavera {
  nomeFile: string;
  minimo: number;
  estrai: (pagine: ElementoPdf[][]) => RigaSezionePrimavera[];
}

const LICENZA_ATTO = 'atto amministrativo pubblico (non dichiarata)';

export const ELENCHI_SEZIONI_PRIMAVERA: ElencoSezioniPrimavera[] = [
  {
    fonte: 'sezioni-primavera-lombardia',
    regione: 'Lombardia',
    atto: 'Decreto USR Lombardia n. 760 del 21/05/2026, a.s. 2025/26',
    url: 'https://www.regione.lombardia.it/content/dam/rl/canali-tematici-servizi/03-istruzione-formazione-e-lavoro/'
      + '01-sistema-integrato-0---6-anni/red-sezioni-primavera/avvisi-sezioni-primavera/'
      + 'Decreto%20e%20allegato%20USR%20n.%20760%20del%2021%20maggio%202026%20-%20Sezioni%20Primavera%20ammesse'
      + '%20al%20finanziamento%20per%20l%27a.s.%202025_2026.pdf',
    licenza: LICENZA_ATTO,
    dataRiferimento: new Date('2026-05-21T00:00:00Z'),
    nomeFile: 'decreto-760-2026.pdf',
    // 769 istituzioni ammesse secondo il decreto.
    minimo: 700,
    estrai: (pagine) => righeTabella(pagine, {
      ancora: { da: 15, a: 45, re: /^\d{1,4}$/ },
      colonne: {
        nome: [50, 195], provincia: [195, 295], comune: [295, 430], codice: [600, 800],
      },
      assegnazione: 'sopra',
      ignora: ['N.', 'Nome scuola', 'Provincia Scuola', 'Comune Scuola', 'CONTRIBUTO', 'STATALE (USR', 'REGIONE',
        'LOMBARDIA', 'LOMBARDIA)', 'Codice Meccanografico', 'Scuola'],
    }).map((r) => ({
      codice: codiceMeccanografico(r.codice), nome: r.nome, comune: r.comune, provincia: r.provincia,
    })),
  },
  {
    fonte: 'sezioni-primavera-sicilia',
    regione: 'Sicilia',
    atto: 'Decreto USR Sicilia n. 90 del 03/03/2026, a.s. 2025/26',
    url: 'https://www.usr.sicilia.it/download/5196/31684/31685/'
      + 'm_pi-aoodrsi-registro-regionale-dei-decreti-direttorialir-0000090-03-03-2026.pdf',
    licenza: LICENZA_ATTO,
    dataRiferimento: new Date('2026-03-03T00:00:00Z'),
    nomeFile: 'decreto-90-2026.pdf',
    minimo: 200,
    estrai: (pagine) => righeTabella(pagine, {
      ancora: { da: 55, a: 80, re: /^(AG|CL|CT|EN|ME|PA|RG|SR|TP)$/ },
      colonne: {
        provincia: [55, 98], codice: [98, 150], nome: [150, 358], indirizzo: [358, 472], comune: [472, 552],
      },
      assegnazione: 'vicino',
      ignora: ['Prov.', 'Codice', 'meccanografico', 'Denominazione scuola', 'Indirizzo', 'Comune', 'Tipologia di Scuola'],
      escludiPagina: /non ammesse/i,
    }).map((r) => ({
      codice: codiceMeccanografico(r.codice),
      nome: r.nome,
      comune: r.comune,
      provincia: r.provincia,
      indirizzo: r.indirizzo,
    })),
  },
];
