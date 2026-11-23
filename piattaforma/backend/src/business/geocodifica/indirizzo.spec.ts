import { normalizzaOdonimo, scomponiIndirizzo } from './indirizzo';
import { IndiceCivici } from './indice-civici';

describe('scomposizione degli indirizzi', () => {
  it.each([
    ['Via F. Antolisei,25', { odonimo: 'VIA F ANTOLISEI', civico: 25 }],
    ['Via Porpora45', { odonimo: 'VIA PORPORA', civico: 45 }],
    ['Taio, frazione Segno, Via Arizona, 16', { odonimo: 'VIA ARIZONA', civico: 16 }],
    ['Via Mons. Lenotti N. 73/75 73/75 Piano Terra', { odonimo: 'VIA MONSIGNORE LENOTTI', civico: 73 }],
    ['Via 4 Novembre 12', { odonimo: 'VIA 4 NOVEMBRE', civico: 12 }],
    ['Via Xxv Aprile 13', { odonimo: 'VIA 25 APRILE', civico: 13 }],
    ['Via Villa Castelli 12/B', { odonimo: 'VIA VILLA CASTELLI', civico: 12, esponente: 'B' }],
    ['Via San Domenico 13 Bis', { odonimo: 'VIA SAN DOMENICO', civico: 13, esponente: 'BIS' }],
    ['Via Don Bodino 12 - Fraz.. San Defendente', { odonimo: 'VIA DON BODINO', civico: 12 }],
    ['Via Stampacchia Sn', { odonimo: 'VIA STAMPACCHIA' }],
    ['V.le della Repubblica 3', { odonimo: 'VIALE DELLA REPUBBLICA', civico: 3 }],
    ['P.zza Garibaldi', { odonimo: 'PIAZZA GARIBALDI' }],
  ])('%s', (testo, atteso) => {
    expect(scomponiIndirizzo(testo)).toEqual({ civico: undefined, esponente: undefined, ...atteso });
  });

  it('rende uguali le date in numeri romani e arabi', () => {
    expect(normalizzaOdonimo('VIA XX SETTEMBRE')).toBe(normalizzaOdonimo('Via 20 Settembre'));
  });
});

describe('indice dei civici', () => {
  const indice = new IndiceCivici();
  indice.aggiungi('VIA FRANCO ANTOLISEI', '25', '', 41.1, 12.1, 'ANNCSU');
  indice.aggiungi('VIA FRANCO ANTOLISEI', '29', '', 41.1003, 12.1003, 'ANNCSU');
  indice.aggiungi('VIA FRANCO ANTOLISEI', '12', 'B', 41.1006, 12.1006, 'OSM_ITALIA');
  indice.aggiungi('VIA ROMA', '1', '', 41.1009, 12.1, 'ANNCSU');
  indice.aggiungi('PIAZZA ROMA', '1', '', 41.1012, 12.1, 'ANNCSU');
  indice.aggiungi('VIA GIUSEPPE MAZZINI', '2', '', 41.1015, 12.1, 'ANNCSU');
  indice.aggiungi('VIA GIOVANNI MAZZINI', '2', '', 41.1018, 12.1, 'ANNCSU');

  it('abbina il civico con le iniziali sciolte', () => {
    expect(indice.trova(scomponiIndirizzo('Via F. Antolisei,25')!)).toMatchObject({ lat: 41.1, precisione: 'civico' });
  });

  it('usa il civico vicino sullo stesso lato', () => {
    expect(indice.trova(scomponiIndirizzo('Via Antolisei 27')!)).toMatchObject({ precisione: 'civico-vicino' });
  });

  it('ricade sulla via senza civico', () => {
    expect(indice.trova(scomponiIndirizzo('Via Antolisei snc')!)).toMatchObject({ precisione: 'via' });
  });

  it('distingue il DUG', () => {
    expect(indice.trova(scomponiIndirizzo('Piazza Roma 1')!)).toMatchObject({ lat: 41.1012 });
  });

  it('non sceglie tra due vie ugualmente compatibili', () => {
    expect(indice.trova(scomponiIndirizzo('Via Mazzini 2')!)).toBeUndefined();
    expect(indice.trova(scomponiIndirizzo('Via G. Mazzini 2')!)).toBeUndefined();
  });

  it('non inventa vie', () => {
    expect(indice.trova(scomponiIndirizzo('Via Inesistente 3')!)).toBeUndefined();
  });
});

describe('indice dei civici, casi reali', () => {
  const indice = new IndiceCivici();
  indice.aggiungi('STRADA NOVI', '21', '', 45.0001, 8.4, 'ANNCSU');
  indice.aggiungi("PIAZZA GABRIELE D'ANNUNZIO", '2', '', 45.0002, 8.4, 'ANNCSU');
  indice.aggiungi('VIA CARDINALE GUGLIELMO MASSAIA', '87', '', 45.0003, 8.4, 'ANNCSU');
  indice.aggiungi('VIA FRATELLI BANDIERA', '22', '', 45.0004, 8.4, 'ANNCSU');
  indice.aggiungi('FRAZIONE MADONNINA', '40', '', 45.0005, 8.4, 'ANNCSU');

  it.each([
    ['Via Novi 21', 45.0001],
    ['Piazza Dannunzio 2', 45.0002],
    ['Via Cardinal Massaia 87', 45.0003],
    ['Via F.lli Bandiera 22', 45.0004],
    ['Fraz. Madonnina 40', 45.0005],
  ])('%s', (testo, lat) => {
    expect(indice.trova(scomponiIndirizzo(testo)!)).toMatchObject({ lat, precisione: 'civico' });
  });
});

describe('numeri e titoli negli odonimi', () => {
  it.each([
    ['VIA PIO DODICESIMO', 'Via Pio Xii'],
    ['VIA VENTICINQUE APRILE', 'Via XXV Aprile'],
    ['VIALE PAPA GIOVANNI VENTITREESIMO', 'Viale Papa Giovanni XXIII'],
    ['VIA VENTI SETTEMBRE', 'Via XX Settembre'],
    ['VIA TRENTUNO MAGGIO', 'Via 31 Maggio'],
    ['TRAVERSA PRIMA DI VIA ROMA', 'Traversa 1 di Via Roma'],
    ['VIA MONSIGNOR ANGELO DIMICCOLI', 'Via Mons. Angelo Dimiccoli'],
  ])('%s = %s', (a, b) => {
    expect(normalizzaOdonimo(a)).toBe(normalizzaOdonimo(b));
  });

  it('abbina SS. a Santissima', () => {
    const indice = new IndiceCivici();
    indice.aggiungi('PIAZZA DELLA SANTISSIMA ANNUNZIATA', '12', '', 43.7, 11.2, 'ANNCSU');
    expect(indice.trova(scomponiIndirizzo('Piazza SS.Annunziata 12')!)).toMatchObject({ precisione: 'civico' });
  });
});

describe('controlli contro gli abbinamenti sbagliati', () => {
  const indice = new IndiceCivici();
  for (let i = 1; i <= 40; i += 1) indice.aggiungi('VIA ROMA', String(i), '', 38.1 + i * 0.0001, 13.3, 'ANNCSU');
  indice.aggiungi('VIA KENNEDY', '2', '', 42.07, 12.29, 'ANNCSU');
  indice.aggiungi('VIA DEI PADULANI', '1', '', 38.1, 13.3, 'ANNCSU');
  indice.aggiungi('VIA GIACOMO SBISA', '2', '', 38.1, 13.3, 'ANNCSU');
  indice.aggiungi('PIAZZA EDMONDO DE AMICIS', '4', '', 38.1, 13.3, 'ANNCSU');
  indice.aggiungi('VIA NAZIONALE', '1', '', 38.10, 13.30, 'ANNCSU');
  indice.aggiungi('VIA NAZIONALE', '99', '', 38.10, 13.33, 'ANNCSU');

  it.each([
    ['civico fuori dal comune', 'Via Kennedy 2'],
    ['parola diversa', 'Via Padula'],
    ['iniziale dopo il nome', 'Via S.giacomo 2'],
    ['via contro piazza', 'Via De Amicis 4'],
    ['via lunga senza civico', 'Via Nazionale'],
  ])('%s', (_caso, testo) => {
    expect(indice.trova(scomponiIndirizzo(testo)!)).toBeUndefined();
  });

  it('accetta la via corta senza civico', () => {
    expect(indice.trova(scomponiIndirizzo('Via Roma snc')!)).toMatchObject({ precisione: 'via' });
  });
});
