import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseBologna } from './bologna.parser';
import { IndiceMim } from './indice-mim';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = comuniDiProva([['037006', 'Bologna', 'BO', 'Emilia-Romagna']]);

const r = (nome: string, servizio: string, gestione: string, via: string, civico: string, geoId: string): object => ({
  nome, servizio, gestione, denominazi: via, civico, geo_id: geoId, anno_scolast: '2026-2027', geo_point_2d: { lon: 11.32, lat: 44.49 },
});

const FILE = Buffer.from(JSON.stringify([
  r('NONNA ELIDE', "NIDO D'INFANZIA", 'PRIVATA CONVENZIONATA', 'VIA FILIPPO TURATI', '43', '290'),
  r('PATINI', "NIDO D'INFANZIA", 'COMUNALE', 'VIA DEL PRATELLO', '2', '1'),
  r('BALU', "NIDO D'INFANZIA", 'COMUNALE IN CONCESSIONE', 'VIALE DELLA REPUBBLICA', '23', '2'),
  r('DALL\'OLIO', "SCUOLA DELL'INFANZIA", 'COMUNALE', 'VIA BRUNO MONTERUMICI', '1', '3'),
  r('ROSELLE', "SCUOLA DELL'INFANZIA", 'COMUNALE', 'VIA ROSELLE', '12', '4'),
  r('MAST', "SCUOLA DELL'INFANZIA", 'PRIVATA NON PARITARIA', 'VIA SPERANZA', '40', '5'),
  r('GUINIZELLI', 'SCUOLA PRIMARIA', 'STATALE', 'VIA GUINIZELLI', '5', '6'),
]));

describe('parser elenco scuole Bologna', () => {
  const mim = new IndiceMim([{ codiceIstat: '037006', denominazione: 'DALLOLIO', via: 'VIA MONTERUMICI 1/2' }]);

  it('importa i nidi con gestione, gestore solo diretto e coordinate', () => {
    const esito = parseBologna(FILE, comuni, new Date(), mim);
    const [convenzionato, comunale, concessione] = esito.strutture;
    expect(convenzionato).toMatchObject({
      chiave: 'bologna-elenco-scuole:290',
      tipologia: Tipologia.NIDO,
      gestione: Gestione.PRIVATA,
      gestore: undefined,
      denominazione: 'Nonna Elide',
      indirizzo: { via: 'Via Filippo Turati 43' },
      posizione: { coordinates: [11.32, 44.49] },
    });
    expect(comunale.gestore).toBe('Comune di Bologna');
    expect(concessione).toMatchObject({ gestione: Gestione.COMUNALE, gestore: undefined });
    expect(convenzionato.provenienza.dataRiferimento).toEqual(new Date('2026-09-01T00:00:00Z'));
  });

  it('importa solo le scuole dell\'infanzia comunali assenti dal MIM', () => {
    const esito = parseBologna(FILE, comuni, new Date(), mim);
    expect(esito.strutture.filter((s) => s.fascia === '3-6').map((s) => s.denominazione)).toEqual(['Roselle']);
    expect(esito.scartate.map((s) => s.motivo)).toEqual([
      "scuola dell'infanzia comunale già nell'anagrafe MIM",
      "scuola dell'infanzia PRIVATA NON PARITARIA: coperta o da verificare con l'anagrafe MIM",
    ]);
    const senzaIndice = parseBologna(FILE, comuni, new Date());
    expect(senzaIndice.strutture.every((s) => s.fascia === '0-3')).toBe(true);
  });
});
