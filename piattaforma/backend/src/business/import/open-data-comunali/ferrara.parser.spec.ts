import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseFerrara } from './ferrara.parser';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = comuniDiProva([['038008', 'Ferrara', 'FE', 'Emilia-Romagna']]);

const f = (p: object, coordinate: number[] = [11.62, 44.84]): object => ({ properties: { LEGENDA: 'Attiva', ...p }, geometry: { coordinates: coordinate } });

const FILE = Buffer.from(JSON.stringify({
  features: [
    f({ NOME: 'Il Salice + Piccole Gru spazio bambino', DESCRIZION: 'scuola Nido Comunale + spazio bambino \\ Il Salice', INDIRIZZO: 'Via del Salice 19', ID: 'S151', GESTIONE: 'COMUNALE' }),
    f({ NOME: 'Le Coccinelle', DESCRIZION: 'scuola Nido + Materna Privata \\ Le Coccinelle', INDIRIZZO: 'Piazza Costa 36', ID: 'S127', GESTIONE: '' }),
    f({ NOME: 'P.G.E. Scarabocchiando a casa di Valentina', DESCRIZION: 'Nido + infanzia privato', INDIRIZZO: 'Via Coronella 71', ID: '', GESTIONE: 'PRIVATA' }),
    f({ NOME: 'Le Coccinelle', DESCRIZION: 'Nido + Infanzia privata', INDIRIZZO: 'Piazza Costa 36', ID: '', GESTIONE: 'PRIVATA' }),
    f({ NOME: 'Lontano', INDIRIZZO: 'Via X', GESTIONE: 'PRIVATA' }, [2.35, 48.85]),
  ],
}));

describe('parser nidi e spazi bambini Ferrara', () => {
  const esito = parseFerrara(FILE, comuni, new Date());

  it('separa nido e spazio bambini e ricava la gestione dalla descrizione', () => {
    const [nido, spazio, coccinelle] = esito.strutture;
    expect(nido).toMatchObject({
      chiave: 'ferrara-nidi-spazi-bambini:S151',
      denominazione: 'Il Salice',
      tipologia: Tipologia.NIDO,
      gestione: Gestione.COMUNALE,
      gestore: 'Comune di Ferrara',
      posizione: { coordinates: [11.62, 44.84] },
    });
    expect(spazio).toMatchObject({ chiave: 'ferrara-nidi-spazi-bambini:S151-spazio-bambini', tipologia: Tipologia.SPAZIO_GIOCO, denominazione: 'Spazio bambini Piccole Gru' });
    expect(coccinelle).toMatchObject({ gestione: Gestione.PRIVATA, gestore: undefined, tipologiaOriginale: 'SCUOLA NIDO + MATERNA PRIVATA' });
  });

  it('protegge i piccoli gruppi educativi, scarta i duplicati e le coordinate fuori Italia', () => {
    const pge = esito.strutture.find((s) => s.tipologia === Tipologia.SERVIZIO_DOMICILIARE);
    expect(pge).toMatchObject({ denominazione: 'Piccolo gruppo educativo a Ferrara', posizione: undefined });
    expect(pge?.indirizzo.via).toBeUndefined();
    expect(JSON.stringify(pge)).not.toMatch(/valentina|coronella/i);
    expect(esito.scartate.map((s) => s.motivo)).toEqual(['duplicato: Le Coccinelle']);
    expect(esito.strutture.find((s) => s.denominazione === 'Lontano')?.posizione).toBeUndefined();
  });
});
