import { ComuniLookup } from '../comuni/comuni-lookup';
import { ElementoPdf } from '../piemonte/pdf-testo';
import {
  MISURA_TOSCANA_NIDI_GRATIS, linkElencoToscana, parseToscanaNidiGratis, righeDaPagineToscana,
} from './toscana-nidi-gratis.parser';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = new ComuniLookup([
  {
    codiceIstat: '049009', codiceCatastale: 'E625', nome: 'Livorno', nomeNormalizzato: 'LIVORNO', siglaProvincia: 'LI', regione: 'Toscana',
  },
  {
    codiceIstat: '048052', codiceCatastale: 'H791', nome: 'San Casciano in Val di Pesa', nomeNormalizzato: 'SAN CASCIANO IN VAL DI PESA', siglaProvincia: 'FI', regione: 'Toscana',
  },
]);

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

const URL = 'https://www301.regione.toscana.it/bancadati/atti/Contenuto.xml?id=1&nomeFile=Decreto+n.22561+del+12-10-2026-+Allegato+B+';

/** Una pagina come la estrae pdf.js: celle centrate in verticale, una con quattro righe di testo. */
const PAGINA: ElementoPdf[] = [
  e('Allegato B', 778, 560), e('Amministrazione comunale di', 38, 547), e('Comune ove ha sede', 192, 547),
  e('Tipologia soggetto', 289, 547), e('Tipologia servizio', 406, 542), e('Nome del servizio', 543, 542),
  e('Indirizzo del servizio', 685, 542), e('riferimento', 38, 536), e('il servizio', 215, 536), e('titolare', 313, 536),
  e('Livorno', 38, 524), e('Livorno', 219, 524), e('Comune', 311, 524), e('Nido d’infanzia', 412, 524),
  e('Pinaverde', 561, 524), e('Via Di Collinaia 15', 691, 524),
  e('Livorno', 38, 511), e('Livorno', 219, 511), e('Privato accreditato', 291, 511), e('Nido d’infanzia', 412, 511),
  e('Scarabeo snc di Rossi Maria', 540, 511), e('Via Della Campana 37', 684, 511),
  e('Privato', 314, 499), e('accreditato/posti in', 290, 488), e('Livorno', 38, 482), e('Livorno', 219, 482),
  e('Nido d’infanzia', 412, 482), e('Il Gabbiano', 560, 482), e('Via Roma 1', 690, 482),
  e('convenzione con il', 291, 477), e('comune Livorno', 296, 466),
  e('Servizio educativo in contesto', 383, 458), e('San Casciano Val di', 194, 458), e('Livorno', 38, 452),
  e('Privato accreditato', 291, 452), e('La Casa di Anna', 550, 452), e('Via Privata 3', 690, 452),
  e('domiciliare', 421, 447), e('Pesa', 226, 447),
];

describe('parser Nidi gratis Toscana', () => {
  const righe = righeDaPagineToscana([PAGINA]);
  const esito = parseToscanaNidiGratis(righe, URL, comuni, new Date());

  it('ricostruisce le celle centrate su più righe', () => {
    expect(righe).toHaveLength(4);
    expect(righe[1].titolare).toBe('Privato accreditato');
    expect(righe[2].titolare).toBe('Privato accreditato/posti in convenzione con il comune Livorno');
    expect(righe[3]).toMatchObject({ tipologia: 'Servizio educativo in contesto domiciliare', comune: 'San Casciano Val di Pesa' });
  });

  it('mappa tipologia, gestione, misura e data del decreto', () => {
    const [comunale, privato, convenzionato, domiciliare] = esito.strutture;
    expect(esito.scartate).toHaveLength(0);
    expect(comunale).toMatchObject({
      tipologia: Tipologia.NIDO,
      gestione: Gestione.COMUNALE,
      gestore: 'Comune di Livorno',
      denominazione: 'Pinaverde',
      misureAderite: [MISURA_TOSCANA_NIDI_GRATIS],
      chiave: 'toscana-nidi-gratis:049009-pinaverde',
    });
    expect(comunale.indirizzo.via).toBe('Via Di Collinaia 15');
    expect(comunale.provenienza.dataRiferimento).toEqual(new Date('2026-10-12T00:00:00Z'));
    expect(privato).toMatchObject({ gestione: Gestione.PRIVATA, gestore: undefined, denominazione: 'Scarabeo' });
    expect(convenzionato.gestione).toBe(Gestione.PRIVATA);
    expect(domiciliare).toMatchObject({
      tipologia: Tipologia.SERVIZIO_DOMICILIARE,
      denominazione: 'Servizio educativo domiciliare a San Casciano in Val di Pesa',
      contatti: {},
    });
    expect(domiciliare.indirizzo.via).toBeUndefined();
    expect(JSON.stringify(esito.strutture)).not.toMatch(/Rossi|Anna|Privata 3/);
  });

  it('trova nella pagina del bando l\'elenco dei servizi più recente', () => {
    const html = '<a href="https://x/Contenuto.xml?id=1&amp;nomeFile=Decreto+n.1+del+30-07-2026-+Allegato+M+">Elenco dei Servizi educativi</a>'
      + '<a href="https://x/Contenuto.xml?id=2&amp;nomeFile=Decreto+n.2+del+12-10-2026-+Allegato+B+">elenco Servizi educativi <strong>aggiornato</strong></a>'
      + '<a href="https://x/Contenuto.xml?id=3&amp;nomeFile=Decreto+n.3+del+11-11-2026-+Allegato+A+">Elenco domande ammesse</a>';
    expect(linkElencoToscana(html)).toBe('https://x/Contenuto.xml?id=2&nomeFile=Decreto+n.2+del+12-10-2026-+Allegato+B+');
  });
});
