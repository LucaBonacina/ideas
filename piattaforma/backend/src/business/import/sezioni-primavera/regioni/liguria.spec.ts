import { separaComune } from './liguria';

describe('sezioni primavera Liguria', () => {
  it('separa indirizzo e comune dalla stessa cella', () => {
    expect(separaComune('Via Santa Chiara 20 - 16043 Chiavari')).toEqual({ indirizzo: 'Via Santa Chiara 20', comune: 'Chiavari' });
    expect(separaComune('Corso Europa 36 - 17025 - Loano (SV)')).toEqual({ indirizzo: 'Corso Europa 36', comune: 'Loano' });
    expect(separaComune('Via Sauli Pallavicino 35, Arenzano (GE)'))
      .toEqual({ indirizzo: 'Via Sauli Pallavicino 35', comune: 'Arenzano' });
    expect(separaComune('VIA SAN GIUSEPPE, 1 LERICI (SP) 19032')).toEqual({ indirizzo: 'VIA SAN GIUSEPPE, 1', comune: 'LERICI' });
  });

  it('riconduce località e abbreviazioni al comune', () => {
    expect(separaComune('Via Guala 1 - 16158 Genova Voltri').comune).toBe('Genova');
    expect(separaComune('Via Gaspare Murtola 31 - 16157 GE-Prà').comune).toBe('Genova');
    expect(separaComune('Via Vappa n. 39 - 19123 Rebocco La Spezia').comune).toBe('La Spezia');
    expect(separaComune('Via All\'Educandato n. 1 - 16039 Sestri L.').comune).toBe('Sestri Levante');
    expect(separaComune('Via Opera Pia 9/A - 16145')).toEqual({ indirizzo: 'Via Opera Pia 9/A', comune: 'Genova' });
  });

  it('lascia vuoto il comune che non c\'è', () => {
    expect(separaComune('Via Amedeo Casabona 3')).toEqual({ indirizzo: 'Via Amedeo Casabona 3', comune: '' });
  });
});
