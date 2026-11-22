import { ComuniLookup } from '../comuni/comuni-lookup';
import { parsePugliaRegistro } from './puglia-registro.parser';
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

const COLONNE = ['REGISTRO', 'ARTICOLO', 'PROVINCIA_REGISTRO', 'POSIZIONE', 'NUM_PROVV_ISCRIZIONE_REGISTRO', 'CANCELLATO',
  'DATA_ATTO_CANCELLAZIONE', 'DENOMINAZIONE_TITOLARE', 'NATURA_TITOLARE', 'DENOMINAZIONE_SEDE_OP', 'INDIRIZZO_SEDE_OP',
  'COMUNE_SEDE_OP', 'CAP_SEDE_OP', 'PROVINCIA_SEDE_OP', 'COGNOME_LEGALE', 'NOME_LEGALE', 'RICETTIVITA'];

const CSV = [
  COLONNE.join(','),
  'Minori,Asilo Nido (art.53 Reg. R. n.4/2007),BA,12,100,NO,,Comune di Bari,pubblica,Asilo nido Arcobaleno,Via Roma 1,Bari,70121,BA,Decaro,Antonio,40',
  'Minori,Micro Nido (art.53 Reg. R. n.4/2007),BA,13,101,NO,,Ditta Individuale Hakuna Matata di Calò Laura,privata,HAKUNA MATATA DI CALÒ LAURA,Via Trapani 12,Bari,70122,BA,Calò,Laura,17',
  'Minori,Sezione Primavera (art.53 Reg. R. n.4/2007),BAT,5,7,NO,,ISTITUTO COMPRENSIVO MANZONI,pubblica,Sezione primavera Manzoni,Via Bari 3,Andria,76123,BAT,Rossi,Anna,20',
  '"Minori","Servizio di educazione familiare per l\'infanzia o servizio per l\'infanzia a domicilio (Art. 101a Reg. R. n.4/2007)",BA,14,102,NO,,Verdi Giulia,privata,Casa di Giulia,Via Casa 5,Bari,70123,BA,Verdi,Giulia,5',
  'Minori,Asilo Nido (art.53 Reg. R. n.4/2007),BA,15,103,SI,01-gen-22,Coop X,privata,Nido chiuso,Via X 1,Bari,70121,BA,Bianchi,Luca,30',
  'Minori,Micro Nido (art.53 Reg. R. n.4/2007),BA,16,104,NO,,Coop Y,privata,"""HEIDI"" HA CESSATO",Via Y 1,Bari,70121,BA,Neri,Ugo,12',
  'Minori,Ludoteca (art.89 Reg. R. n.4/2007),BA,17,105,NO,,Coop Z,privata,Ludoteca,Via Z 1,Bari,70121,BA,Gialli,Ivo,30',
  'Anziani,Casa di riposo,BA,18,106,NO,,Coop W,privata,Casa,Via W 1,Bari,70121,BA,Blu,Eva,30',
].join('\n');

describe('parser registro strutture Puglia', () => {
  const esito = parsePugliaRegistro(Buffer.from(CSV), comuni, new Date());

  it('tiene solo i servizi 0-3 attivi', () => {
    expect(esito.strutture).toHaveLength(4);
    expect(esito.scartate.map((s) => s.motivo)).toEqual(['cancellato dal registro', 'cessato secondo la denominazione']);
  });

  it('mappa tipologia, gestione e gestore pubblico', () => {
    const [comunale, privato, primavera] = esito.strutture;
    expect(comunale).toMatchObject({
      tipologia: Tipologia.NIDO,
      gestione: Gestione.COMUNALE,
      gestore: 'Comune Di Bari',
      posti: 40,
      chiave: 'puglia-registro-strutture:BA-100-12',
    });
    expect(privato).toMatchObject({ tipologia: Tipologia.MICRONIDO, gestione: Gestione.PRIVATA, gestore: undefined });
    expect(primavera).toMatchObject({
      tipologia: Tipologia.SEZIONE_PRIMAVERA, gestione: Gestione.PUBBLICA_ALTRA, gestore: 'Istituto Comprensivo Manzoni',
    });
    expect(primavera.indirizzo).toMatchObject({ comune: 'Andria', siglaProvincia: 'BT' });
    expect(primavera.provenienza.licenza).toBe('CC-BY 4.0');
  });

  it('non pubblica i nomi dei legali rappresentanti né i dati dei servizi a domicilio', () => {
    const [comunale, privato, , domicilio] = esito.strutture;
    expect(privato.denominazione).toBe('Hakuna Matata');
    expect(domicilio).toMatchObject({ tipologia: Tipologia.SERVIZIO_DOMICILIARE, denominazione: 'Servizio educativo domiciliare a Bari' });
    expect(domicilio.indirizzo.via).toBeUndefined();
    const testo = JSON.stringify(esito.strutture);
    expect(testo).not.toMatch(/Calò|CALÒ|Laura|Decaro|Antonio|Giulia|Verdi|Rossi/);
    expect(comunale.denominazione).toBe('Asilo Nido Arcobaleno');
  });
});
