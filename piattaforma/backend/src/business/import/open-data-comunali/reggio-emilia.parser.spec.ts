import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseReggioEmilia } from './reggio-emilia.parser';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = comuniDiProva([
  ['035033', "Reggio nell'Emilia", 'RE', 'Emilia-Romagna'],
  ['035027', 'Montecchio Emilia', 'RE', 'Emilia-Romagna'],
  ['035001', 'Albinea', 'RE', 'Emilia-Romagna'],
]);

const INTESTAZIONE = "COMUNE;DENOMINAZIONE;SEZIONI;ETA' INF. 1 ANNO;;ETA' 1 / 2 ANNI;;ETA' SUP. 2 ANNI;;TOTALE\n;;;MASCHI;FEMMINE;MASCHI;FEMMINE;MASCHI;FEMMINE;\n";

const COMUNALI = Buffer.from(`NIDI D'INFANZIA COMUNALI;;;;;;;;;\n${INTESTAZIONE}REGGIO EMILIA;Allende *;3;1;1;6;12;13;11;44\nATLANTIDE;Nido;1;0;0;1;1;1;1;4\nTOTALE;;4;1;1;7;13;14;12;48\n`);
const PRIVATI = Buffer.from(`${INTESTAZIONE}CONVENZIONATI;;;;;;;;;;;\nALBINEA;Aquilone;1;0;0;4;8;20;20;54;;\nAPPALTATI;;;;;;;;;;;\nALBINEA;Aquilone;3;1;1;4;8;20;20;54;;\nPRIVATI;;;;;;;;;;;\nREGGIO EMILIA;"Piccolo gruppo educativo\nNido famiglia ""A casa di Lucia""";1;0;0;1;3;0;4;8;;\n`, 'latin1');
const FISM = Buffer.from(`SEZIONI NIDI "PRIMAVERA";;;;;;;;;\n${INTESTAZIONE}MONTECCHIO;Santa Dorotea;1;0;0;3;9;5;3;20;\n`);
const GEO = Buffer.from(JSON.stringify({
  features: [{ properties: { NOME: 'S. ALLENDE', INDIRIZZO: 'VIA GATTALUPA, 5/A' }, geometry: { coordinates: [10.66, 44.68] } }],
}));

describe('parser servizi prima infanzia provincia di Reggio Emilia', () => {
  const esito = parseReggioEmilia({
    comunali: COMUNALI, privati: PRIVATI, fism: FISM, geo: GEO,
  }, comuni, new Date());

  it('legge le sezioni dei file e mappa la gestione', () => {
    expect(esito.strutture.map((s) => [s.denominazione, s.tipologia, s.gestione])).toEqual([
      ['Allende', Tipologia.NIDO, Gestione.COMUNALE],
      ['Aquilone', Tipologia.NIDO, Gestione.PRIVATA],
      ['Aquilone', Tipologia.NIDO, Gestione.COMUNALE],
      ["Nido famiglia a Reggio nell'Emilia", Tipologia.SERVIZIO_DOMICILIARE, Gestione.PRIVATA],
      ['Santa Dorotea', Tipologia.SEZIONE_PRIMAVERA, Gestione.PRIVATA],
    ]);
    expect(esito.scartate[0].motivo).toMatch(/comune non trovato: ATLANTIDE/);
    expect(new Set(esito.strutture.map((s) => s.chiave)).size).toBe(5);
  });

  it('aggiunge indirizzo e coordinate del capoluogo, e gli iscritti', () => {
    expect(esito.strutture[0]).toMatchObject({
      gestore: "Comune di Reggio nell'Emilia",
      indirizzo: { via: 'Via Gattalupa, 5/A' },
      posizione: { coordinates: [10.66, 44.68] },
      bambiniIscritti: 44,
      annoIscritti: '2024/25',
      tipologiaOriginale: "NIDO D'INFANZIA COMUNALE (POLO PER L'INFANZIA 0-6)",
    });
    expect(esito.strutture[2].gestore).toBeUndefined();
  });

  it('non pubblica nomi dei servizi domiciliari', () => {
    const dom = esito.strutture[3];
    expect(JSON.stringify(dom)).not.toMatch(/lucia/i);
    expect(dom.posizione).toBeUndefined();
  });
});
