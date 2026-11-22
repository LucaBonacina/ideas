import { ElementoPdf } from '../piemonte/pdf-testo';
import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseTrentoNidi, righeDaPagineTrentoNidi } from './trento-nidi.parser';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = comuniDiProva([
  ['022111', 'Primiero San Martino di Castrozza', 'TN', 'Trentino-Alto Adige'],
  ['022222', 'Storo', 'TN', 'Trentino-Alto Adige'],
  ['022199', 'Tione di Trento', 'TN', 'Trentino-Alto Adige'],
  ['022205', 'Trento', 'TN', 'Trentino-Alto Adige'],
]);

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

/** Una pagina come la estrae pdf.js: comune su due righe, indirizzo sopra il nome del comune, lettera D/E sfalsata. */
const PAGINA: ElementoPdf[] = [
  e('Comunità di valle', 54, 413), e('Comune sede di nido', 189, 413), e('Posti', 560, 413),
  e('Primiero', 54, 312), e('Primiero San Martino di', 169, 312), e('1', 330, 312), e('Tonadico 1, Via Fuganti, 12', 362, 312),
  e('20', 566, 312), e('E', 650, 312),
  e('Castrozza (Tonadico)', 169, 302), e('1', 330, 302), e('Tonadico 2, Via Fuganti, 12', 362, 302), e('12', 566, 302), e('E', 650, 302),
  e('totale nidi', 263, 290), e('2', 329, 290), e('totale posti', 493, 290), e('32', 566, 290),
  e('Storo', 169, 261), e('1', 330, 261), e('Darzo, Via Nepomuceno, 13', 362, 261), e('32', 566, 261), e('E', 650, 261),
  e('Tione, Via Durone, 22', 362, 251), e('35', 566, 251), e('E', 650, 251),
  e('Tione di Trento', 169, 241), e('1', 330, 241), e('Loc. Zuclo (sede staccata)', 362, 238), e('15*', 568, 238), e('E', 650, 238),
  e('Trento', 169, 200), e('1', 330, 200), e('“Lago Blu”, Via Ginestre, 23', 362, 200), e('60', 566, 200), e('D', 650, 200),
  e('1', 330, 190), e('D', 650, 190), e('Via Petrarca Part time', 362, 180), e('30', 568, 180), e('mattino', 362, 170),
];

describe('parser elenco nidi Trento', () => {
  const righe = righeDaPagineTrentoNidi([PAGINA], comuni);
  const esito = parseTrentoNidi(righe, comuni, new Date());

  it('ricostruisce comuni su due righe, celle a capo e lettere sfalsate, saltando i totali', () => {
    expect(righe.map((r) => [r.comune, r.posti, r.gestione])).toEqual([
      ['Primiero San Martino di Castrozza', '20', 'E'],
      ['Primiero San Martino di Castrozza', '12', 'E'],
      ['Storo', '32', 'E'],
      ['Tione di Trento', '35', 'E'],
      ['Tione di Trento', '15*', 'E'],
      ['Trento', '60', 'D'],
      ['Trento', '30', 'D'],
    ]);
    expect(righe[6].indirizzo).toBe('Via Petrarca Part time mattino');
  });

  it('mappa gestione, gestore e denominazione', () => {
    expect(esito.scartate).toEqual([]);
    const [primo, , , , zuclo, lagoBlu] = esito.strutture;
    expect(primo).toMatchObject({
      tipologia: Tipologia.NIDO,
      gestione: Gestione.COMUNALE,
      gestore: undefined,
      denominazione: "Nido d'infanzia a Primiero San Martino di Castrozza, Tonadico 1, Via Fuganti, 12",
      posti: 20,
      chiave: 'trento-elenco-nidi-infanzia:022111-tonadico-1-via-fuganti-12',
    });
    expect(zuclo).toMatchObject({ gestione: Gestione.PUBBLICA_ALTRA, posti: 15 });
    expect(lagoBlu).toMatchObject({
      denominazione: "Nido d'infanzia Lago Blu", gestore: 'Comune di Trento', indirizzo: { via: 'Via Ginestre, 23' },
    });
    expect(lagoBlu.provenienza.licenza).toBe('non dichiarata dalla fonte');
  });

  it('scarta le righe con comune sconosciuto', () => {
    const r = parseTrentoNidi([{
      comune: 'Atlantide', indirizzo: 'Via X', posti: '10', gestione: 'E',
    }], comuni, new Date());
    expect(r.scartate[0].motivo).toMatch(/comune non trovato/);
  });
});
