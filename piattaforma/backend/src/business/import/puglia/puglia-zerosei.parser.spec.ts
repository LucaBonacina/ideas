import { ComuniLookup } from '../comuni/comuni-lookup';
import { MISURA_PUGLIA_ZEROSEI, parsePugliaZerosei } from './puglia-zerosei.parser';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = new ComuniLookup([
  {
    codiceIstat: '072006', codiceCatastale: 'A662', nome: 'Bari', nomeNormalizzato: 'BARI', siglaProvincia: 'BA', regione: 'Puglia',
  },
  {
    codiceIstat: '110001', codiceCatastale: 'A285', nome: 'Andria', nomeNormalizzato: 'ANDRIA', siglaProvincia: 'BT', regione: 'Puglia',
  },
]);

const CSV = [
  "\uFEFF<font color='#025B9F'><b>\nLa lista è ordinata per Provincia e Comune</b></font>"
    + '"Avviso","Prov","Comune","Gestore","Cod.pratica","Denominazione","Tipo","Info","Indirizzo","Cap","Telefono","Email","Web"',
  '"Catalogo ZEROSEI 26/27","BA","BARI","SUORE MINIME DELLA PASSIONE","AB123","ASILO NIDO ""PRIMI PASSI""","(art. 53) Asilo nido","","TRAV. II VIA UMBRIA N. 5, 70132","70132","080 1234567","nido@primipassi.it","www.primipassi.it"',
  '"Catalogo ZEROSEI 26/27","BT","ANDRIA","VERDI ANNA","CD456","A PICCOLI PASSI DI VERDI ANNA","(art. 90) Centro ludico per la prima infanzia","","VIA ROMA 2","76123","333 1234567","nome.cognome@gmail.com",""',
  '"Catalogo ZEROSEI 26/27","BA","BARI","ISTITUTO COMPRENSIVO MANZONI","EF789","SEZIONE PRIMAVERA MANZONI","(art. 53) Sezione primavera","","VIA BARI 3","70121","0805555555","baic@istruzione.it",""',
  '"Catalogo ZEROSEI 26/27","BA","BARI","EOS SOC. COOP.","GH012","ALMA","(art. 101 lett.a) Servizio educ.familiare o servizio a domicilio","","VIA CASA 4","70121","0809168386","eos@coop.it",""',
  '"Catalogo ZEROSEI 26/27","BA","BARI","X SRL","IJ345","LUDOTECA","(art. 89) Ludoteca","","VIA X","70121","","",""',
].join('\n');

describe('parser catalogo zerosei Puglia', () => {
  const esito = parsePugliaZerosei(Buffer.from(CSV), comuni, new Date());

  it('salta la nota iniziale e scarta le tipologie fuori 0-3', () => {
    expect(esito.strutture).toHaveLength(4);
    expect(esito.scartate).toEqual([{ riga: 6, motivo: 'tipologia sconosciuta: (art. 89) Ludoteca' }]);
  });

  it('mappa tipologia, contatti, misura e gestione dal nome del gestore', () => {
    const [nido, ludico, primavera] = esito.strutture;
    expect(nido).toMatchObject({
      chiave: 'puglia-catalogo-zerosei:AB123',
      tipologia: Tipologia.NIDO,
      gestione: Gestione.PRIVATA,
      gestore: undefined,
      denominazione: 'Asilo Nido Primi Passi',
      misureAderite: [MISURA_PUGLIA_ZEROSEI],
      contatti: { email: 'nido@primipassi.it', telefono: '0801234567', sito: 'https://www.primipassi.it' },
    });
    expect(nido.indirizzo).toMatchObject({ via: 'Trav. Ii Via Umbria N. 5', cap: '70132', comune: 'Bari' });
    expect(ludico).toMatchObject({ tipologia: Tipologia.SPAZIO_GIOCO, gestione: Gestione.SCONOSCIUTA, denominazione: 'A Piccoli Passi' });
    expect(ludico.indirizzo.siglaProvincia).toBe('BT');
    expect(primavera).toMatchObject({ gestione: Gestione.PUBBLICA_ALTRA, gestore: 'Istituto Comprensivo Manzoni' });
  });

  it('protegge persone e servizi a domicilio', () => {
    const [, ludico, , domicilio] = esito.strutture;
    expect(ludico.contatti).toEqual({ email: undefined, telefono: undefined, sito: undefined });
    expect(domicilio).toMatchObject({ denominazione: 'Servizio educativo domiciliare a Bari', contatti: {} });
    expect(domicilio.indirizzo.via).toBeUndefined();
    expect(JSON.stringify(esito.strutture)).not.toMatch(/VERDI|Verdi|ANNA|Anna|Alma|Casa 4/);
  });
});
