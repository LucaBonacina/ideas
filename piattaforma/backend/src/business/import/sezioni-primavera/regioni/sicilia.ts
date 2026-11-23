import { codiceMeccanografico } from '../sezioni-primavera.parser';
import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

export const SICILIA: ElencoSezioniPrimavera = {
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
};
