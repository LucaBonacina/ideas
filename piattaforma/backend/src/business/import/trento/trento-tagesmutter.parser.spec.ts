import { ElementoPdf } from '../piemonte/pdf-testo';
import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseTagesmutter, righeDaPagineTagesmutter, sedeTagesmutter } from './trento-tagesmutter.parser';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = comuniDiProva([
  ['022006', 'Arco', 'TN', 'Trentino-Alto Adige'],
  ['022098', 'Madruzzo', 'TN', 'Trentino-Alto Adige'],
]);

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

/** Pagina in orizzontale: le righe hanno la stessa x, le colonne crescono con y. */
const PAGINA: ElementoPdf[] = [
  e('Comunità di valle', 109, 57), e('Comuni sedi di nidi familiari-tagesmutter', 109, 290),
  e('Soggetto gestore di riferimento', 109, 550),
  e('Alto Garda e Ledro', 124, 57), e('Arco, 4', 124, 220), e('nidi familiari', 124, 310),
  e('Cooperativa Tagesmutter del Trentino IL SORRISO', 124, 550),
  e('Valle di Cembra', 140, 57), e('0 Comuni sedi di nidi familiari', 140, 220),
  e('Valle dei Laghi', 155, 57), e('Madruzzo (Calavino) 1 servizio', 155, 220), e('CSOE Mons. Dalponte', 155, 550),
  e('Totale nidi familiari-Tagesmutter', 170, 57), e('76', 170, 220),
];

describe('parser nidi familiari Tagesmutter Trento', () => {
  it('legge comune e numero di servizi', () => {
    expect(sedeTagesmutter('Primiero San Martino di Castrozza (Transacqua, Tonadico), 2 nidi familiari'))
      .toEqual({ comune: 'Primiero San Martino di Castrozza (Transacqua, Tonadico)', numero: 2 });
    expect(sedeTagesmutter('Mezzana, 1 servizio')).toEqual({ comune: 'Mezzana', numero: 1 });
  });

  it('crea un record per servizio, generico e senza indirizzo', () => {
    const righe = righeDaPagineTagesmutter([PAGINA]);
    expect(righe).toHaveLength(2);
    const esito = parseTagesmutter(righe, comuni, new Date());
    expect(esito.strutture).toHaveLength(5);
    expect(esito.strutture[0]).toMatchObject({
      tipologia: Tipologia.SERVIZIO_DOMICILIARE,
      gestione: Gestione.PRIVATA,
      denominazione: 'Nido familiare - Tagesmutter a Arco',
      contatti: {},
      chiave: 'trento-nidi-familiari-tagesmutter:022006-cooperativa-tagesmutter-del-trentino-il-sorriso-1',
    });
    expect(esito.strutture[0].gestore).toBeUndefined();
    expect(esito.strutture[4].indirizzo.comune).toBe('Madruzzo');
    expect(esito.strutture.every((s) => !s.posizione && !s.indirizzo.via)).toBe(true);
    expect(new Set(esito.strutture.map((s) => s.chiave)).size).toBe(5);
  });

  it('scarta le righe non riconosciute', () => {
    const esito = parseTagesmutter([{ sede: 'Atlantide, 2 nidi familiari', gestore: 'X' }], comuni, new Date());
    expect(esito.scartate[0].motivo).toMatch(/comune non trovato/);
  });
});
