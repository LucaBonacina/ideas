import { contieneNomiDiPersona, denominazionePubblicabile } from './denominazione-pubblicabile';

describe('denominazione senza nomi di persona', () => {
  it('toglie forma giuridica e titolare in coda', () => {
    expect(denominazionePubblicabile('SUNRISE.s.a.s. di Bianco Valeria')).toBe('SUNRISE');
    expect(denominazionePubblicabile('HAKUNA MATATA SNC DI PAGANO ROBERTA E MELLONE IVAN')).toBe('HAKUNA MATATA');
    expect(denominazionePubblicabile('IL NIDO DELLE CICOGNE DI MALFETTONE NUNZIA')).toBe('IL NIDO DELLE CICOGNE');
    expect(denominazionePubblicabile('HAKUNA MATATA DI G. & T. SRLS')).toBe('HAKUNA MATATA');
  });

  it('lascia le intitolazioni e i nomi con una sola parola dopo "di"', () => {
    expect(denominazionePubblicabile('Asilo nido Madre Teresa di Calcutta')).toBe('Asilo nido Madre Teresa di Calcutta');
    expect(denominazionePubblicabile('I Pulcini di San Benedetto')).toBe('I Pulcini di San Benedetto');
    expect(denominazionePubblicabile('Nido di via Alfieri')).toBe('Nido di via Alfieri');
  });

  it('rifiuta i nomi che contengono un nome di persona noto', () => {
    expect(denominazionePubblicabile('FRASCELLA CINZIA - SPEEDY GONZALES', ['Frascella', 'Cinzia'])).toBeUndefined();
    expect(contieneNomiDiPersona('Asilo nido Peter Pan', ['Rossi', 'Al'])).toBe(false);
  });
});
