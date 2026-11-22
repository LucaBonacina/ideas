import { chiaveIndirizzo, paroleNome, somiglianza } from './somiglianza';

describe('somiglianza tra strutture di fonti diverse', () => {
  it('confronta i nomi senza le parole generiche', () => {
    expect(somiglianza(paroleNome('Asilo Nido Comunale "Il Girasole"'), paroleNome('NIDO D\'INFANZIA IL GIRASOLE'))).toBe(1);
    expect(somiglianza(paroleNome('Nido Peter Pan'), paroleNome('Nido Arcobaleno'))).toBe(0);
  });

  it('riconosce lo stesso indirizzo scritto in modi diversi', () => {
    expect(chiaveIndirizzo('Via A. Meucci, 4')).toBe(chiaveIndirizzo('VIA ANTONIO MEUCCI 4/A'));
    expect(chiaveIndirizzo('Piazza Garibaldi')).toBeUndefined();
    expect(chiaveIndirizzo('Via Beata Elia Di San Clemente, 235')).toBe(chiaveIndirizzo('Via Beata Elia Di San Clemente 235 Piano T1-2-3'));
    expect(chiaveIndirizzo('Strada Carmine 11')).toBe(chiaveIndirizzo('Strada Carmine 11 Piano Terra'));
  });
});
