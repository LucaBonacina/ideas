import ExcelJS from 'exceljs';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { MISURA_FVG, linkFileFvg, parseFvg } from './fvg.parser';
import { COMUNI_TEST } from '../../../../test/fixtures/comuni';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

async function fileDiProva(): Promise<Buffer> {
  const libro = new ExcelJS.Workbook();
  const f = libro.addWorksheet('Novembre 2026');
  f.addRow(['Codice Struttura', 'Tipologia Servizio', 'Nome', 'Comune', 'Numero di Telefono', 'Struttura E-mail',
    'Tipologia Struttura', 'Capacità Ricettiva', "Fascia d'età - Da (mesi)", "Fascia d'età - A (mesi)", 'Accreditato',
    'Applica abbattimento rette']);
  f.addRow(['A1', "Nido d'infanzia", 'NIDO COMUNALE “OLIVIA”', 'UDINE', '0432 111111', 'nido@comune.udine.it', 'Pubblica', 24, 3, 36, 'Sì', 'Sì']);
  f.addRow(['A2', 'Servizio educativo domiciliare', 'LA CASA DI MARIA ROSSI', 'UDINE', '333 1234567', 'maria@gmail.com', 'Privata', 5, 3, 36, 'in fase di accreditamento ', 'No']);
  f.addRow(['A3', 'Ludoteca', 'X', 'UDINE', '', '', 'Privata', 5, 3, 36, 'No', 'No']);
  return Buffer.from(await libro.xlsx.writeBuffer());
}

describe('parser registro FVG', () => {
  it('trova il link al file del mese nella pagina regionale', () => {
    const html = '<a href="/rafvg/cms/RAFVG/x/allegati/20261106_Strutture_per_registro_Regionale_Novembre_26.xlsx">x</a>';
    expect(linkFileFvg(html)).toBe('https://www.regione.fvg.it/rafvg/cms/RAFVG/x/allegati/20261106_Strutture_per_registro_Regionale_Novembre_26.xlsx');
  });

  it('legge età, accreditamento e misure, e protegge i servizi domiciliari', async () => {
    const esito = await parseFvg(await fileDiProva(), 'https://x', new ComuniLookup(COMUNI_TEST), new Date());
    expect(esito.scartate).toHaveLength(1);
    const [nido, dom] = esito.strutture;
    expect(nido).toMatchObject({
      tipologia: Tipologia.NIDO,
      gestione: Gestione.PUBBLICA,
      denominazione: 'Nido Comunale Olivia',
      etaMinimaMesi: 3,
      etaMassimaMesi: 36,
      accreditamento: 'si',
      misureAderite: [MISURA_FVG],
      contatti: { email: 'nido@comune.udine.it', telefono: '0432111111' },
    });
    expect(nido.indirizzo).toMatchObject({ comune: 'Udine', codiceIstat: '030129' });
    expect(dom).toMatchObject({
      tipologia: Tipologia.SERVIZIO_DOMICILIARE,
      denominazione: 'Servizio educativo domiciliare a Udine',
      accreditamento: 'in corso',
      contatti: {},
    });
    expect(JSON.stringify(dom)).not.toMatch(/ROSSI|Rossi|gmail/);
  });
});
