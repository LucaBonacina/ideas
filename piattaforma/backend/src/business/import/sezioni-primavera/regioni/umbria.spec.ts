import { dividiCelle } from './umbria';

describe('dividiCelle', () => {
  it('divide il numero dal gestore e il codice fiscale dal comune', () => {
    const [pagina] = dividiCelle([[
      { testo: '1 Parrocchia S. Vitale', x: 68, y: 510 },
      { testo: '80011000546 Assisi', x: 507, y: 510 },
      { testo: '80007520549', x: 507, y: 498 },
    ]], [
      { da: 55, a: 75, re: /^(\d{1,2})\s+(.+)$/, x: 80 },
      { da: 500, a: 515, re: /^(\d{11})\s+(.+)$/, x: 563 },
    ]);
    expect(pagina).toEqual([
      { testo: '1', x: 68, y: 510 },
      { testo: 'Parrocchia S. Vitale', x: 80, y: 510 },
      { testo: '80011000546', x: 507, y: 510 },
      { testo: 'Assisi', x: 563, y: 510 },
      { testo: '80007520549', x: 507, y: 498 },
    ]);
  });
});
