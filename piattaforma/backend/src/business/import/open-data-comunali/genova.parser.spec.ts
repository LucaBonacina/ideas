import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseGenova } from './genova.parser';
import { IndiceMim } from './indice-mim';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = comuniDiProva([['010025', 'Genova', 'GE', 'Liguria']]);

const P = 'https://onto.comune.genova.it/lod/ontologia_Scuole#';
const r = (id: number, nome: string, tipo: string, via: string): object => ({
  [`${P}hasID`]: [{ '@value': `File:///AnagScuole.json.${id}` }],
  [`${P}hasName`]: [{ '@value': nome }],
  [`${P}hasType`]: [{ '@value': tipo }],
  [`${P}hasAddress`]: [{ '@value': via }],
  [`${P}hasPostalCode`]: [{ '@value': '16100' }],
  [`${P}locatedIn`]: [{ '@value': 'Genova' }],
});

const FILE = Buffer.from(JSON.stringify([
  r(187, 'Cantaegua', 'Asilo Nido (con 3 sezioni)', 'Via Mogadiscio 49B'),
  r(182, 'Xxx Alice', 'Asilo Nido (con 2 Sezioni)', 'Via Isocorte 10A'),
  r(9600, 'PAC Yo-yo', 'Asilo Nido Pac', 'Piazza Della Maddalena 11'),
  r(9678, 'Ghersi Sezione Primavera', 'Primavera Paritaria', 'Via Coni Zugna 15'),
  r(9599, 'Una Mamma Per Amica', 'Educatore Domiciliare', 'Via Forli 1'),
  r(9700, 'Oleandro Estivo', 'Asilo Nido Estivo', 'Vico Di San Filippo 1R'),
  r(1, 'Coccinella', 'Scuola Infanzia', 'Via Benedetto Da Porto 14A'),
  r(2, 'Gabbiano', 'Scuola Infanzia', 'Via Lodi 2D'),
  r(3, 'Mazzini', 'Primaria Statale', 'Via Lodi 4'),
]));

describe('parser scuole Genova', () => {
  const mim = new IndiceMim([{ codiceIstat: '010025', denominazione: 'COCCINELLA', via: 'VIA B. DA PORTO 14' }]);
  const esito = parseGenova(FILE, comuni, new Date(), mim);

  it('mappa i tipi in tipologia e gestione', () => {
    expect(esito.strutture.map((s) => [s.chiave, s.tipologia, s.gestione])).toEqual([
      ['genova-scuole:187', Tipologia.NIDO, Gestione.COMUNALE],
      ['genova-scuole:9600', Tipologia.NIDO, Gestione.PRIVATA],
      ['genova-scuole:9678', Tipologia.SEZIONE_PRIMAVERA, Gestione.PARITARIA],
      ['genova-scuole:9599', Tipologia.SERVIZIO_DOMICILIARE, Gestione.SCONOSCIUTA],
      ['genova-scuole:2', Tipologia.SCUOLA_INFANZIA, Gestione.COMUNALE],
    ]);
    expect(esito.strutture[0].indirizzo).toMatchObject({ via: 'Via Mogadiscio 49B', cap: '16100' });
  });

  it('scarta i record dismessi, i servizi estivi e le scuole già nel MIM', () => {
    expect(esito.scartate.map((s) => s.motivo)).toEqual([
      'record dismesso: Xxx Alice', 'servizio estivo', "scuola dell'infanzia comunale già nell'anagrafe MIM",
    ]);
  });

  it('servizi domiciliari: nome generico, niente indirizzo', () => {
    const dom = esito.strutture[3];
    expect(dom.denominazione).toBe('Servizio educativo domiciliare a Genova');
    expect(dom.indirizzo.via).toBeUndefined();
    expect(JSON.stringify(dom)).not.toMatch(/mamma|forli/i);
  });
});
