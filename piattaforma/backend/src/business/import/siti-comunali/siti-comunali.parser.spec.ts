import { viaSenzaComune } from './siti-comunali.parser';

describe('indirizzi dalle pagine comunali', () => {
  it.each([
    ['Via delle Caselle 2, 17025 Loano', 'Loano', 'Via delle Caselle 2'],
    ['Via Roma 12 - 65100 Pescara (PE)', 'Pescara', 'Via Roma 12'],
    ['Via Roma 1 17025 Loano', 'Loano', 'Via Roma 1'],
    ['Via Roma 1, 17025', 'Loano', 'Via Roma 1'],
    ['Via Loano', 'Loano', 'Via Loano'],
  ])('%s', (indirizzo, comune, atteso) => {
    expect(viaSenzaComune(indirizzo, comune)).toBe(atteso);
  });
});
