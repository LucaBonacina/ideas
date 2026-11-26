import { ComuniLookup } from '../comuni/comuni-lookup';
import { ElementoPdf } from '../piemonte/pdf-testo';
import {
  linkElencoNapoli, parseNapoliNidiPrivati, righeDaPagineNapoli,
} from './napoli-nidi-privati.parser';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = new ComuniLookup([{
  codiceIstat: '063049', codiceCatastale: 'F839', nome: 'Napoli', nomeNormalizzato: 'NAPOLI', siglaProvincia: 'NA', regione: 'Campania',
}]);

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

const URL = 'https://static-www.comune.napoli.it/wp-content/uploads/2011/11/elenco-nidi-autorizzati-agg_03-11-2026.pdf';

const PAGINA: ElementoPdf[] = [
  e('Autorizzazione al', 325, 553), e('Sospensione', 434, 553), e('Recapito', 688, 553), e('Ricettività', 799, 553),
  e('Municipalità', 30, 549), e('Quartiere', 70, 549), e('Denominazione', 105, 549), e('Tipologia', 153, 549),
  e('Soggetto prestatore', 200, 549), e('Partita IVA', 282, 549), e('Accreditamento', 383, 549), e('PEC', 524, 549),
  e('E-MAIL', 623, 549), e('Sede Operativa', 738, 549), e('funzionamento', 328, 546), e('struttura', 689, 546), e('minori', 804, 546),
  e('Nido', 161, 525), e('1', 18, 522), e('Municipalità VI', 31, 522), e('Acquolina', 115, 522),
  e('Scacco Matto Soc. Coop. Sociale', 191, 522), e('Dirigenziale n. 6', 383, 522), e('info@pec.scaccomattocoop.it', 476, 522),
  e('info@scaccomattocoop', 587, 522), e('081/0380234', 684, 522), e('Via Argine, 929', 739, 522), e('30', 810, 522),
  e("d'Infanzia", 156, 519), e('.it', 590, 519),
  e('2', 18, 491), e('Municipalità I', 32, 491), e('La Ludoteca', 108, 491), e('Micro-Nido', 154, 491),
  e('La Ludoteca s.a.s. di Paola Bianchi', 185, 491), e('nome.cognome@gmail.com', 587, 491), e('333 1234567', 684, 491),
  e('Via Chiaia, 30', 741, 491), e('14', 810, 491),
  e('3', 18, 461), e('Il Sole', 110, 461), e('Micro-Nido', 154, 461), e('SOSPESA con', 436, 461), e('Via Sole 1', 741, 461),
  e('Pagina', 412, 14), e('2', 429, 14),
];

const LUDOTECHE: ElementoPdf[] = [e('LUDOTECHE PER LA PRIMA INFANZIA PRIVATE AUTORIZZATE', 223, 519), e('1', 18, 470)];

describe('parser nidi privati autorizzati Napoli', () => {
  const righe = righeDaPagineNapoli([PAGINA, LUDOTECHE]);
  const esito = parseNapoliNidiPrivati(righe, URL, comuni, new Date());

  it('legge le righe dei nidi e si ferma alle ludoteche', () => {
    expect(righe).toHaveLength(3);
    expect(righe[0]).toMatchObject({ tipologia: "Nido d'Infanzia", posti: '30', telefono: '081/0380234' });
  });

  it('mappa i nidi, scarta i sospesi e protegge i dati personali', () => {
    expect(esito.scartate).toEqual([{ riga: 3, motivo: 'servizio sospeso' }]);
    const [nido, micro] = esito.strutture;
    expect(nido).toMatchObject({
      tipologia: Tipologia.NIDO,
      gestione: Gestione.PRIVATA,
      denominazione: 'Acquolina',
      posti: 30,
      accreditamento: 'si',
      contatti: { email: 'info@scaccomattocoop.it', telefono: '0810380234' },
      chiave: 'napoli-nidi-privati-autorizzati:063049-acquolina',
    });
    expect(nido.provenienza.dataRiferimento).toEqual(new Date('2026-11-03T00:00:00Z'));
    expect(micro).toMatchObject({ tipologia: Tipologia.MICRONIDO, denominazione: 'La Ludoteca' });
    expect(micro.gestore).toBeUndefined();
    expect(JSON.stringify(esito.strutture)).not.toMatch(/Paola|Bianchi|gmail|333|pec\./);
  });

  it('trova il link al PDF nella pagina comunale', () => {
    expect(linkElencoNapoli(`<a href="${URL}">Elenco</a>`)).toBe(URL);
  });
});
