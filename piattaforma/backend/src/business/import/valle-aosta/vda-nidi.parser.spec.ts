import { ElementoPdf } from '../piemonte/pdf-testo';
import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseVda, righeDaPagineVda, sedeVda } from './vda-nidi.parser';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = comuniDiProva([
  ['007003', 'Aosta', 'AO', "Valle d'Aosta"],
  ['007031', 'Gignod', 'AO', "Valle d'Aosta"],
  ['007057', 'Roisan', 'AO', "Valle d'Aosta"],
  ['007061', 'Saint-Pierre', 'AO', "Valle d'Aosta"],
]);

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

/** Righe come nel PDF regionale: titolare in cella unita, nido + spazio gioco nella stessa sede, accreditamento. */
const PAGINA: ElementoPdf[] = [
  e('Titolare', 65, 524), e('Tipologia Struttura', 207, 524), e('Posti', 284, 524), e('Sede Operativa', 477, 524),
  e('Unité des Communes Valdôtaines Grand-Paradis', 20, 416), e("Nido d'infanzia", 162, 420), e('54', 284, 420),
  e('Spazio gioco', 162, 412), e('4', 285, 412), e('Loc Les Ordines, n. 41 - 11010 St Pierre', 428, 416),
  e('La Sorgente s.c.s. (La Farfavola)', 20, 326), e("Nido d'infanzia", 162, 326), e('32', 284, 327),
  e('Via Valli Valdostane n. 5 - 11100 Aosta', 321, 326), e('Via Pollio Salimbeni, 7 - 11100 Aosta', 428, 326),
  e('28/01/2026', 743, 326), e('28/01/2099', 784, 327),
  e("Nido d'infanzia", 162, 261), e('24', 284, 261), e('Fraz Chez Roncoz n. 23 - 11010 Gignod', 428, 261),
  e('Unité des Communes Valdôtaines Grand-Combin', 32, 229),
  e("Nido d'infanzia", 162, 213), e('16', 284, 210), e('Reg. Champvillair Dessus, 22 - 11010 Roisan', 428, 210),
];

describe('parser autorizzazioni nidi Valle d\'Aosta', () => {
  const righe = righeDaPagineVda([PAGINA]);
  const esito = parseVda(righe, comuni, new Date('2026-11-22'));

  it('legge le sedi operative con CAP e comuni con trattino', () => {
    expect(sedeVda('Fraz. Bourg, n. 4 - 11020 Antey-Saint-André')).toEqual({ via: 'Fraz. Bourg, n. 4', cap: '11020', comune: 'Antey-Saint-André' });
    expect(sedeVda('Pont Suaz 16/A - Charvensod')).toEqual({ via: 'Pont Suaz 16/A', comune: 'Charvensod' });
  });

  it('assegna il titolare della cella unita al gruppo di sedi', () => {
    expect(righe.map((r) => [r.tipologia, r.posti, r.titolare])).toEqual([
      ["Nido d'infanzia", '54', 'Unité des Communes Valdôtaines Grand-Paradis'],
      ['Spazio gioco', '4', 'Unité des Communes Valdôtaines Grand-Paradis'],
      ["Nido d'infanzia", '32', 'La Sorgente s.c.s. (La Farfavola)'],
      ["Nido d'infanzia", '24', 'Unité des Communes Valdôtaines Grand-Combin'],
      ["Nido d'infanzia", '16', 'Unité des Communes Valdôtaines Grand-Combin'],
    ]);
  });

  it('mappa tipologia, gestione, accreditamento e gestore solo pubblico', () => {
    expect(esito.scartate).toEqual([]);
    const [nido, spazio, farfavola, gignod] = esito.strutture;
    expect(nido).toMatchObject({
      tipologia: Tipologia.NIDO, gestione: Gestione.PUBBLICA_ALTRA, posti: 54, indirizzo: { comune: 'Saint-Pierre', cap: '11010' },
    });
    expect(spazio.tipologia).toBe(Tipologia.SPAZIO_GIOCO);
    expect(farfavola).toMatchObject({
      denominazione: "Nido d'infanzia La Farfavola", gestione: Gestione.PRIVATA, gestore: undefined, accreditamento: 'si',
    });
    expect(farfavola.indirizzo.via).toBe('Via Pollio Salimbeni, 7');
    expect(gignod).toMatchObject({ gestore: 'Unité des Communes Valdôtaines Grand-Combin', accreditamento: undefined });
  });
});
