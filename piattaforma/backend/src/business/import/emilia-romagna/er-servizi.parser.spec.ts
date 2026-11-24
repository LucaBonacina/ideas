import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseEr, tipologiaEr } from './er-servizi.parser';

const comuni = comuniDiProva([['037006', 'Bologna', 'BO', 'Emilia-Romagna'], ['037002', 'Anzola dell\'Emilia', 'BO',
  'Emilia-Romagna']]);

describe('servizi autorizzati Emilia-Romagna', () => {
  const riga = {
    codice: '1929',
    nome: 'Nido \'Gianni Rodari\'',
    indirizzo: 'Via Risorgimento 20',
    provincia: 'BO',
    comune: 'ANZOLA DELL\'EMILIA',
    tipologia: 'Nido d\'infanzia',
    titolare: 'Comune di Anzola Dell\'Emilia',
    gestore: 'Cadiai',
  };
  const domiciliare = {
    ...riga,
    codice: '13097',
    nome: 'Al giardino',
    comune: 'BOLOGNA',
    tipologia: 'Servizio domiciliare',
    titolare: 'Mario Rossi',
    gestore: 'Mario Rossi',
  };
  const { strutture } = parseEr([riga, domiciliare], 'privata', comuni, new Date());

  it('classifica i servizi comunali dati in gestione', () => {
    expect(strutture[0]).toMatchObject({
      tipologia: Tipologia.NIDO,
      gestione: Gestione.COMUNALE,
      gestore: 'Comune di Anzola Dell\'Emilia',
      indirizzo: { via: 'Via Risorgimento 20', comune: 'Anzola dell\'Emilia' },
    });
  });

  it('non pubblica nome, indirizzo e titolare dei servizi domiciliari', () => {
    const { riservato, ...pubblico } = strutture[1];
    expect(JSON.stringify(pubblico)).not.toMatch(/Rossi|giardino|Risorgimento/);
    expect(riservato).toMatchObject({ via: 'Via Risorgimento 20', gestore: 'Mario Rossi / Mario Rossi' });
  });

  it('mappa le macro tipologie regionali', () => {
    expect(tipologiaEr('Sezione aggregata 24-36 mesi')).toBe(Tipologia.SEZIONE_PRIMAVERA);
    expect(tipologiaEr('Micro-nido')).toBe(Tipologia.MICRONIDO);
    expect(tipologiaEr('Centro per bambini e genitori')).toBe(Tipologia.CENTRO_BAMBINI_FAMIGLIE);
    expect(tipologiaEr('Spazio bambini')).toBe(Tipologia.SPAZIO_GIOCO);
    expect(tipologiaEr('Piccolo gruppo educativo')).toBe(Tipologia.NIDO);
  });
});
