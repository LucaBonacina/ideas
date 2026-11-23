import { codiceMeccanografico } from '../sezioni-primavera.parser';
import { righeTabella } from '../tabella-pdf';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

const COMUNI: Record<string, string> = { 'QUARTU S.E.': "Quartu Sant'Elena" };

export const SARDEGNA: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-sardegna',
  regione: 'Sardegna',
  atto: 'Nota USR Sardegna prot. n. 18771 del 05/11/2026, elenco provvisorio delle sezioni ammesse, a.s. 2025/26',
  url: 'https://www.mim.gov.it/documents/7756686/10326193/Allegato+1+_+Elenco+provvisorio+delle+Sezioni+Primavera'
    + '+ammesse+al+finanziamento+a.e.+2025_2026_signed.pdf',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-11-05T00:00:00Z'),
  nomeFile: 'nota-18771-2026.pdf',
  // 40 sezioni nell'elenco provvisorio.
  minimo: 34,
  estrai: (pagine) => righeTabella(pagine, {
    ancora: { da: 60, a: 80, re: /^\d{1,3}$/ },
    colonne: {
      nome: [90, 185], codice: [185, 255], comune: [255, 335],
    },
    assegnazione: 'vicino',
    ignora: ['N.', 'Soggetto Proponente', 'Codice Meccanografico', 'Comune', 'Provincia'],
  }).map((r) => ({
    codice: codiceMeccanografico(r.codice),
    // Le sezioni comunali di Oristano hanno come proponente solo l'indirizzo ("VIA SATTA").
    ...(/^VIA\s/.test(r.nome) ? { nome: `SEZIONE PRIMAVERA ${r.nome}`, indirizzo: r.nome } : { nome: r.nome }),
    comune: COMUNI[r.comune] ?? r.comune,
    // La sigla della provincia non si usa: dopo il riordino delle province sarde non sempre coincide con
    // quella ISTAT (es. San Vito, "CA" nell'elenco e "SU" per l'ISTAT).
  })),
};
