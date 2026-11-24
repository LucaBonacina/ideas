import { Tipologia } from '../../../domain/tipologia.enum';
import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseAlboSicilia } from './albo-minori.parser';

const comuni = comuniDiProva([['084011', 'Canicattì', 'AG', 'Sicilia'],
  ['084036', 'Santa Margherita di Belice', 'AG', 'Sicilia']]);

describe('albo regionale Sicilia, sezione Minori', () => {
  const base = { provincia: 'AG', indirizzo: 'VIA NAZIONALE, 152', utenti: '25', iscrizione: '4486' };
  const { strutture } = parseAlboSicilia([
    { ...base, comune: "CANICATTI'", ente: 'COOPERATIVA SOCIALE ASSISTENZA', tipologia: 'ASILO NIDO' },
    { ...base, comune: 'CANICATTI\'', ente: 'COOP. LA TANA', tipologia: 'COMUNITA\' ALLOGGIO' },
    { ...base, comune: 'SANTA MARGHERITA BELICE', ente: 'ROSSI MARIA', tipologia: 'MICRO NIDO', iscrizione: '17' },
  ], comuni, new Date());

  it('tiene solo i servizi 0-3', () => {
    expect(strutture).toHaveLength(2);
    expect(strutture[0]).toMatchObject({
      denominazione: 'Asilo nido - Cooperativa Sociale Assistenza',
      tipologia: Tipologia.NIDO,
      posti: 25,
      indirizzo: { comune: 'Canicattì', via: 'Via Nazionale, 152' },
    });
  });

  it('non usa come nome un ente che può essere una persona', () => {
    expect(strutture[1]).toMatchObject({
      denominazione: 'Micronido a Santa Margherita di Belice', riservato: { gestore: 'ROSSI MARIA' },
    });
  });
});
