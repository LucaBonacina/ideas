import { ComuniLookup } from '../comuni/comuni-lookup';
import { parsePiemonte, righeDaPagine } from './piemonte.parser';
import { ElementoPdf } from './pdf-testo';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = new ComuniLookup([{
  codiceIstat: '006001', codiceCatastale: 'A052', nome: 'Acqui Terme', nomeNormalizzato: 'ACQUI TERME', siglaProvincia: 'AL', regione: 'Piemonte',
}]);

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

/** Una pagina come la estrae pdf.js: intestazioni, una riga semplice e una con celle su più righe. */
const PAGINA: ElementoPdf[] = [
  e('PROVINCIA', 69, 737), e('COMUNE', 110, 737), e('CODICE', 191, 740), e('TIPOLOGIA', 224, 737),
  e('COMUNALE / PUBBLICO /', 328, 740), e('DENOMINAZIONE', 406, 737), e('INDIRIZZO', 508, 737), e('CAP', 624, 737),
  e('CAPAC RIC', 672, 737), e('CODICE GEOLOC RCERP', 737, 737), e('COD PES', 861, 737), e('AUTORIZZAZIONE', 950, 737),
  e('TITOLARE AUTORIZZAZIONE', 1036, 737),
  e('AL', 82, 722), e('ACQUI TERME', 110, 722), e('006001', 192, 722), e("NIDO D'INFANZIA -EX ASILO NIDO-", 224, 722),
  e('COMUNALE', 348, 722), e('IL GIARDINO', 406, 722), e('VIA ALDO MORO 7', 508, 722), e('15011', 622, 722), e('24', 685, 722),
  e('Z0060011000', 755, 722), e('AL1N001001', 858, 722), e('D.D. 375', 927, 722), e('COMUNE DI ACQUI TERME', 1028, 722),
  e('c/o SCUOLA PARITARIA SACRO', 406, 708), e('AL', 82, 700), e('ACQUI TERME', 110, 700), e('006001', 192, 700),
  e('SP c/o SC. INF. PARIT.', 224, 700), e('PRIVATO', 351, 700), e('PIAZZA SAN GUIDO 14', 508, 700), e('15011', 622, 700),
  e('10', 685, 700), e('Z006001Z005', 755, 700), e('ROSSI MARIA', 1028, 700), e('CUORE', 406, 692),
  e('AL', 82, 670), e('ACQUI TERME', 110, 670), e('006001', 192, 670), e('NIDO IN FAMIGLIA', 224, 670), e('PRIVATO', 351, 670),
  e('LA CASETTA DI MARIA', 406, 670), e('VIA PRIVATA 1', 508, 670), e('15011', 622, 670), e('4', 685, 670),
  e('Pagina', 570, 58), e('1', 596, 58),
];

describe('parser anagrafe Piemonte', () => {
  const righe = righeDaPagine([PAGINA]);
  const esito = parsePiemonte(righe, comuni, new Date());

  it('ricostruisce le celle su più righe', () => {
    expect(righe).toHaveLength(3);
    expect(righe[1].denominazione).toBe('c/o SCUOLA PARITARIA SACRO CUORE');
    expect(righe[0].autorizzazione).toBe('D.D. 375');
  });

  it('mappa tipologie, gestione e privacy', () => {
    const [nido, sp, famiglia] = esito.strutture;
    expect(nido).toMatchObject({
      tipologia: Tipologia.NIDO,
      gestione: Gestione.COMUNALE,
      gestore: 'Comune Di Acqui Terme',
      posti: 24,
      chiave: 'piemonte-anagrafe-prima-infanzia:AL1N001001',
    });
    expect(sp).toMatchObject({
      tipologia: Tipologia.SEZIONE_PRIMAVERA,
      gestione: Gestione.PRIVATA,
      gestore: undefined,
      denominazione: 'Sezione primavera c/o Scuola Paritaria Sacro Cuore',
    });
    expect(famiglia).toMatchObject({ tipologia: Tipologia.SERVIZIO_DOMICILIARE, denominazione: 'Nido in famiglia a Acqui Terme' });
    expect(famiglia.indirizzo.via).toBeUndefined();
    expect(JSON.stringify(esito.strutture)).not.toMatch(/ROSSI|MARIA|Maria/);
  });
});
