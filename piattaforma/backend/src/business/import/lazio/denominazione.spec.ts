import { denominazioneSenzaPersone, nomeGenerico } from './denominazione';
import { Tipologia } from '../../../domain/tipologia.enum';

describe('denominazioni senza nomi di persone', () => {
  it.each([
    ['La casa dei folletti di Federica Arcadi', 'La casa dei folletti'],
    ['bimbi e coccole sas di de bonis serena', 'bimbi e coccole sas'],
    ['Il Sorriso snc di Giamboi V. e Voli E.', 'Il Sorriso snc'],
    ['DSM SAS DI TERESA DE SANTIS - LA NUVOLETTA', 'DSM SAS - LA NUVOLETTA'],
    ['Babylandia 2 di Storno Liliana s.a.s.', 'Babylandia 2'],
  ])('toglie il titolare da "%s"', (nome, atteso) => {
    expect(denominazioneSenzaPersone(nome, true)).toBe(atteso);
  });

  it.each([
    'NIDO DI PETER PAN', 'Il Castello di Piccole Scintille', 'I CUCCIOLI DI VIA SILVERI', 'Il Nido di Tata srls',
    'il mondo di mary poppins srls', 'MANDORLO ROSA', 'Nido Lucia', 'REGINA MARGHERITA',
  ])('lascia "%s"', (nome) => {
    expect(denominazioneSenzaPersone(nome, true)).toBe(nome);
  });

  it('scarta le denominazioni dei privati fatte solo di cognome e nome', () => {
    expect(denominazioneSenzaPersone('CALVANO ANNA MARIA', true)).toBeUndefined();
    expect(denominazioneSenzaPersone('Pietro Micca', false)).toBe('Pietro Micca');
    expect(nomeGenerico(Tipologia.NIDO, 'Labico')).toBe('Nido a Labico');
  });
});
