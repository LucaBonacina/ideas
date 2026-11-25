import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseLiguria } from './albo-liguria.parser';

const comuni = comuniDiProva([['010025', 'Genova', 'GE', 'Liguria'], ['011025', 'Vezzano Ligure', 'SP', 'Liguria']]);

describe('albo regionale Liguria', () => {
  it('legge i nidi pubblici con gli alias dei comuni', () => {
    const { strutture, scartate } = parseLiguria([
      { numero: '1', denominazione: 'Il Girasole', indirizzo: 'Via Roma 1', comune: 'Vezzano' },
    ], 'nidi-pubblici', comuni, new Date());
    expect(scartate).toEqual([]);
    expect(strutture[0]).toMatchObject({
      denominazione: 'Il Girasole',
      tipologia: Tipologia.NIDO,
      gestione: Gestione.PUBBLICA,
      indirizzo: { comune: 'Vezzano Ligure', via: 'Via Roma 1' },
    });
  });

  it('non pubblica nome e indirizzo dei servizi domiciliari', () => {
    const { strutture } = parseLiguria([
      { numero: '2', denominazione: 'Casa di Anna', indirizzo: 'Pz. Del Micone 7/1', comune: 'Genova' },
    ], 'domiciliari-privati', comuni, new Date());
    const { riservato, ...pubblico } = strutture[0];
    expect(JSON.stringify(pubblico)).not.toMatch(/Anna|Micone/);
    expect(riservato).toEqual({ denominazione: 'Casa di Anna', via: 'Pz. Del Micone 7/1' });
  });
});
