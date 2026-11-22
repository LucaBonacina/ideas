import { ComuniLookup } from '../comuni/comuni-lookup';
import { ElementoPdf } from '../piemonte/pdf-testo';
import {
  dataRiferimentoLazio, linkFileLazio, parseLazioAccreditati, righeDaPagineLazio,
} from './lazio-accreditati.parser';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = new ComuniLookup([
  {
    codiceIstat: '058091', codiceCatastale: 'H501', nome: 'Roma', nomeNormalizzato: 'ROMA', siglaProvincia: 'RM', regione: 'Lazio',
  },
  {
    codiceIstat: '056059', codiceCatastale: 'M082', nome: 'Viterbo', nomeNormalizzato: 'VITERBO', siglaProvincia: 'VT', regione: 'Lazio',
  },
]);

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

const INTESTAZIONI: ElementoPdf[] = [
  e('Numero', 29, 549), e('Scadenza', 71, 549), e('Cod.', 112, 549), e('Tipo Servizio', 137, 544), e('Posti', 188, 549),
  e('Natura', 217, 544), e('Titolarità', 256, 544), e('Gestione', 308, 544), e('Denominazione', 414, 544),
  e('Comune', 565, 544), e('Prov.', 631, 544), e('Indirizzo', 691, 544), e('n.', 769, 549), e('data BURL', 787, 544),
];

const riga = (y: number, celle: string[]): ElementoPdf[] => {
  const x = [40, 72, 110, 167, 192, 215, 255, 311, 351, 529, 634, 651, 768, 790];
  return celle.map((testo, i) => e(testo, x[i], y)).filter((c) => c.testo);
};

/** Una pagina come la estrae pdf.js: righe semplici, una "Sezione / primavera" su due righe e il piè di pagina. */
const PAGINA: ElementoPdf[] = [
  ...INTESTAZIONI,
  ...riga(527, ['AR0003', '05/09/28', '10804', 'Nido', '30', 'Pubblica', 'Comunale', 'Diretta', 'I Cuccioli', 'VITERBO', 'VT',
    'Via S.Maria in Volturno, 27', '83', '17/10/23']),
  ...riga(517, ['AR0005', '30/09/28', '10812', 'Nido', '25', 'Privata', 'Privata', 'Convenzione', 'LA LUMACHINA DI BIANCHELLA NOEMI',
    'VITERBO', 'VT', 'Via Campo Sportivo, 6', '84', '19/10/23']),
  ...riga(507, ['ARSG14039', '31/07/28', '17790', 'Spazio gioco', '50', 'Pubblica', 'Comunale', 'Appalto', 'SPAZIO GIOCO IL PRATO',
    'MUNICIPIO ROMA X', 'RM', 'Via Tranquillo Cremona, 22 - 00155', '8', '28/01/25']),
  ...riga(497, ['AR0009', '30/09/28', '10807', 'Ludoteca', '15', 'Privata', 'Privata', 'Diretta', 'X', 'VITERBO', 'VT', 'Via A 1', '84', '19/10/23']),
  ...riga(487, ['AR0010', '30/09/28', '10808', 'Nido', '15', 'Privata', 'Privata', 'Diretta', 'Y', 'ATLANTIDE', 'VT', 'Via B 2', '84', '19/10/23']),
  e('Sezione', 158, 317), e('Primavera', 150, 307),
  ...riga(312, ['ARSP14177', '03/01/29', '18035', '', '12', 'Pubblica', 'Az.le pubblico', 'Diretta', 'CALVANO ANNA MARIA',
    'VITERBO', 'VT', 'Via Acciaccarelli 1', '7', '23/01/24']),
  e('NB: dati provvisori estrapolati dal SIRSE.', 18, 26), e('16/11/2026', 402, 26), e('1/16', 810, 26),
];

describe('parser elenco servizi educativi accreditati Lazio', () => {
  const righe = righeDaPagineLazio([PAGINA]);
  const esito = parseLazioAccreditati(righe, 'https://x/elenco.pdf', comuni, new Date(), dataRiferimentoLazio([PAGINA]));

  it('trova il link al PDF nella pagina regionale', () => {
    const html = '<a href="/sites/default/files/2026-11/Elenco-Servizi-Educativi-Accreditati-16-11-26.pdf">Elenco</a>';
    expect(linkFileLazio(html))
      .toBe('https://regione.lazio.it/sites/default/files/2026-11/Elenco-Servizi-Educativi-Accreditati-16-11-26.pdf');
  });

  it('ricostruisce le righe, anche con il tipo su due righe, e ignora il piè di pagina', () => {
    expect(righe).toHaveLength(6);
    expect(righe[0]).toMatchObject({ numero: 'AR0003', codice: '10804', gestione: 'Diretta', provincia: 'VT' });
    expect(righe[5].tipo).toBe('Sezione Primavera');
    expect(JSON.stringify(righe)).not.toMatch(/SIRSE/);
  });

  it('scarta tipologie e comuni sconosciuti', () => {
    expect(esito.scartate.map((s) => s.motivo)).toEqual(['tipologia sconosciuta: Ludoteca', 'comune non trovato: ATLANTIDE (VT)']);
  });

  it('mappa tipologia, gestione, comune, CAP e provenienza', () => {
    const [nido, privato, spazio, sezione] = esito.strutture;
    expect(nido).toMatchObject({
      chiave: 'lazio-servizi-educativi-accreditati:10804',
      tipologia: Tipologia.NIDO,
      gestione: Gestione.COMUNALE,
      gestore: 'Comune di Viterbo',
      posti: 30,
      accreditamento: 'si',
      indirizzo: { comune: 'Viterbo', codiceIstat: '056059', via: 'Via S.maria In Volturno, 27' },
      provenienza: { dataRiferimento: new Date('2026-11-16T00:00:00Z'), licenza: 'non dichiarata dalla fonte' },
    });
    expect(privato).toMatchObject({ gestione: Gestione.PRIVATA, gestore: undefined });
    expect(spazio).toMatchObject({
      tipologia: Tipologia.SPAZIO_GIOCO,
      gestione: Gestione.COMUNALE,
      gestore: undefined,
      indirizzo: { comune: 'Roma', via: 'Via Tranquillo Cremona, 22', cap: '00155' },
    });
    expect(sezione).toMatchObject({ tipologia: Tipologia.SEZIONE_PRIMAVERA, gestione: Gestione.PUBBLICA_ALTRA });
  });

  it('toglie i nomi dei titolari dalle denominazioni dei privati', () => {
    expect(esito.strutture[1].denominazione).toBe('La Lumachina');
    expect(JSON.stringify(esito.strutture)).not.toMatch(/BIANCHELLA|Bianchella|NOEMI|Noemi/);
    // Un servizio pubblico intitolato a una persona mantiene il nome.
    expect(esito.strutture[3].denominazione).toBe('Calvano Anna Maria');
  });
});
