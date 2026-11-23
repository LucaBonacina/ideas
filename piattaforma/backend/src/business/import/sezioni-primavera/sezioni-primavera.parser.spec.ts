import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { codiceMeccanografico, parseSezioniPrimavera } from './sezioni-primavera.parser';
import { righeTabella } from './tabella-pdf';

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

describe('tabelle PDF', () => {
  it('assegna alla riga le celle andate a capo sopra l\'ancora', () => {
    const pagina = [
      e('Nome scuola', 55, 748), e('N.', 23, 748),
      e('SCUOLA MATERNA', 55, 733), e('"SAN MARTINO"', 55, 719), e('1', 25, 719), e('CISERANO', 298, 719),
      e('BG1A08400B', 616, 719),
      e('SCUOLA MATERNA', 55, 690), e('"REGINA"', 55, 675), e('2', 25, 675), e('BONATE SOTTO', 298, 675),
    ];
    const righe = righeTabella([pagina], {
      ancora: { da: 15, a: 45, re: /^\d+$/ },
      colonne: { nome: [50, 195], comune: [295, 430], codice: [600, 800] },
      assegnazione: 'sopra',
      ignora: ['Nome scuola', 'N.'],
    });
    expect(righe).toEqual([
      { nome: 'SCUOLA MATERNA "SAN MARTINO"', comune: 'CISERANO', codice: 'BG1A08400B' },
      { nome: 'SCUOLA MATERNA "REGINA"', comune: 'BONATE SOTTO', codice: '' },
    ]);
  });

  it('assegna alla riga le celle andate a capo sotto l\'ancora', () => {
    const pagina = [
      e('N.', 22, 1076), e('denominazione', 194, 1076),
      e('1', 25, 1003), e('ALPAGO', 74, 1003), e('SCUOLA INFANZIA PARITARIA MARIA', 151, 1003),
      e('IMMACOLATA AI CADUTI', 151, 992), e('(EX SAN GIROLAMO)', 151, 982),
      e('2', 25, 972), e('BELLUNO', 74, 972), e('SCUOLA "DON BOSCO"', 151, 972), e('1/13', 803, 39),
    ];
    const righe = righeTabella([pagina], {
      ancora: { da: 18, a: 35, re: /^\d+$/ },
      colonne: { comune: [72, 150], nome: [150, 365] },
      assegnazione: 'sotto',
      ignora: ['N.', 'denominazione'],
    });
    expect(righe).toEqual([
      { comune: 'ALPAGO', nome: 'SCUOLA INFANZIA PARITARIA MARIA IMMACOLATA AI CADUTI (EX SAN GIROLAMO)' },
      { comune: 'BELLUNO', nome: 'SCUOLA "DON BOSCO"' },
    ]);
  });

  it('salta le pagine escluse', () => {
    const pagina = [e('Sezioni primavera non ammesse', 300, 560), e('AG', 66, 500), e('FAVARA', 480, 500)];
    expect(righeTabella([pagina], {
      ancora: { da: 55, a: 80, re: /^AG$/ }, colonne: { comune: [472, 552] }, assegnazione: 'vicino', escludiPagina: /non ammesse/,
    })).toEqual([]);
  });
});

describe('sezioni primavera', () => {
  const comuni = comuniDiProva([['016075', 'Ciserano', 'BG', 'Lombardia'], ['016178', 'Ranica', 'BG', 'Lombardia']]);
  const scuola = {
    chiave: 'mim-anagrafe:BG1A08400B',
    denominazione: 'Scuola Materna Parrocchiale San Martino',
    gestione: Gestione.PARITARIA,
    indirizzo: {
      via: 'Via Roma 1', comune: 'Ciserano', codiceIstat: '016075', siglaProvincia: 'BG', regione: 'Lombardia',
    },
    posizione: { type: 'Point', coordinates: [9.6, 45.58] },
    contatti: { telefono: '035000000' },
    provenienza: { fonte: 'mim-anagrafe' },
  } as unknown as Struttura;
  const meta = {
    fonte: 'sezioni-primavera-lombardia',
    regione: 'Lombardia',
    url: 'u',
    licenza: 'l',
    dataRiferimento: new Date('2026-05-21'),
    atto: 'Decreto 760/2026',
  };
  const esito = parseSezioniPrimavera([
    { codice: 'BG1A08400B', nome: 'SCUOLA MATERNA PARROCCHIALE "SAN MARTINO"', comune: 'CISERANO', provincia: 'BG' },
    { nome: 'SEZIONE PRIMAVERA', comune: 'RANICA', provincia: 'BG' },
  ], meta, comuni, new Map([['BG1A08400B', scuola]]), new Date());

  it('prende indirizzo, coordinate e contatti dalla scuola che la ospita', () => {
    expect(esito.strutture[0]).toMatchObject({
      chiave: 'sezioni-primavera-lombardia:BG1A08400B',
      denominazione: 'Sezione primavera c/o Scuola Materna Parrocchiale San Martino',
      tipologia: Tipologia.SEZIONE_PRIMAVERA,
      gestione: Gestione.PARITARIA,
      etaMinimaMesi: 24,
      etaMassimaMesi: 36,
      indirizzo: { via: 'Via Roma 1', codiceIstat: '016075' },
      posizione: { coordinates: [9.6, 45.58] },
      contatti: { telefono: '035000000' },
    });
  });

  it('senza codice usa il comune della riga', () => {
    expect(esito.strutture[1]).toMatchObject({ denominazione: 'Sezione Primavera', indirizzo: { comune: 'Ranica' } });
  });

  it('riconosce solo i codici meccanografici', () => {
    expect(codiceMeccanografico('BG1A08400B')).toBe('BG1A08400B');
    expect(codiceMeccanografico('00330380163')).toBeUndefined();
    expect(codiceMeccanografico('AG)')).toBeUndefined();
  });
});
