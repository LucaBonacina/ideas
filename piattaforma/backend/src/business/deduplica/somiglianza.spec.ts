import { chiaveIndirizzo, paroleNome, somiglianza } from './somiglianza';

describe('somiglianza tra strutture di fonti diverse', () => {
  it('confronta i nomi senza le parole generiche', () => {
    expect(somiglianza(paroleNome('Asilo Nido Comunale "Il Girasole"'), paroleNome('NIDO D\'INFANZIA IL GIRASOLE'))).toBe(1);
    expect(somiglianza(paroleNome('Nido Peter Pan'), paroleNome('Nido Arcobaleno'))).toBe(0);
  });

  it('riconosce lo stesso indirizzo scritto in modi diversi', () => {
    expect(chiaveIndirizzo('Via A. Meucci, 4')).toBe(chiaveIndirizzo('VIA ANTONIO MEUCCI 4/A'));
    expect(chiaveIndirizzo('Piazza Garibaldi')).toBeUndefined();
  });
});
