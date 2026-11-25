import { separaCivico } from './mim.parser';

describe('indirizzi MIM', () => {
  it.each([
    ['Via Mazzini159', 'Via Mazzini 159'],
    ['Via Don Angelo Pedrinellin.6', 'Via Don Angelo Pedrinelli n. 6'],
    ['Via Xxv Aprile 13', 'Via Xxv Aprile 13'],
    ['Via 4 Novembre', 'Via 4 Novembre'],
  ])('%s', (via, atteso) => {
    expect(separaCivico(via)).toBe(atteso);
  });
});
