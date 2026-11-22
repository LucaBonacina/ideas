import { stessaStruttura } from './deduplica.service';
import { Struttura } from '../../database/struttura.schema';
import { Gestione } from '../../domain/gestione.enum';
import { Tipologia } from '../../domain/tipologia.enum';

const s = (fonte: string, denominazione: string, via?: string, tipologia = Tipologia.NIDO): Struttura => ({
  chiave: `${fonte}:${denominazione}`,
  denominazione,
  tipologia,
  tipologiaOriginale: tipologia,
  fascia: '0-3',
  gestione: Gestione.PRIVATA,
  indirizzo: {
    via, comune: 'Roma', codiceIstat: '058091', siglaProvincia: 'RM', regione: 'Lazio',
  },
  contatti: {},
  misureAderite: [],
  caratteristiche: [],
  provenienza: { fonte, idNellaFonte: denominazione, scaricatoIl: new Date() },
  attiva: true,
});

describe('stessa struttura in fonti diverse', () => {
  it('unisce nome uguale e stesso indirizzo scritto diversamente', () => {
    expect(stessaStruttura(s('a', 'Il Glicine', 'Via Giuseppe Lazzati, 213'), s('b', 'IL GLICINE', 'VIA G. LAZZATI 213'))).toBe(true);
  });

  it('unisce un nome contenuto nell\'altro', () => {
    expect(stessaStruttura(s('a', 'Fly Family', 'Viale Enzo Ferrari'), s('b', 'Fly Family - Soc. Coop. Orlando', 'Viale E. Ferrari C/O Aeroporto 1'))).toBe(true);
  });

  it('non unisce sedi diverse con lo stesso nome', () => {
    expect(stessaStruttura(s('a', 'La Freccia Azzurra', 'Via Di Villa Lauricella, 22'), s('b', 'La Freccia Azzurra', 'Piazza Vincenzo Ceresi, 11'))).toBe(false);
  });

  it('unisce nomi diversi allo stesso indirizzo solo se compatibili', () => {
    expect(stessaStruttura(s('a', 'Cecchina - Maria Venezia', 'Via Della Cecchina, 30'), s('b', 'Cecchina', 'Via Della Cecchina,30'))).toBe(true);
    expect(stessaStruttura(s('a', 'Peter Pan', 'Via Roma 1'), s('b', 'Arcobaleno', 'Via Roma 1'))).toBe(false);
  });

  it('non unisce servizi di famiglie diverse o della stessa fonte', () => {
    expect(stessaStruttura(s('a', 'Girasole', 'Via Roma 1'), s('b', 'Girasole', 'Via Roma 1', Tipologia.SEZIONE_PRIMAVERA))).toBe(false);
    expect(stessaStruttura(s('a', 'Girasole', 'Via Roma 1'), s('a', 'Girasole', 'Via Roma 1'))).toBe(false);
  });
});
