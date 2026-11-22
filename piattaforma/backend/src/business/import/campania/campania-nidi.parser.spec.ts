import { ComuniLookup } from '../comuni/comuni-lookup';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { parseCampaniaNidi, righeDaPagineCampania } from './campania-nidi.parser';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = new ComuniLookup([
  {
    codiceIstat: '064005', codiceCatastale: 'A399', nome: 'Ariano Irpino', nomeNormalizzato: 'ARIANO IRPINO', siglaProvincia: 'AV', regione: 'Campania',
  },
  {
    codiceIstat: '065025', codiceCatastale: 'B644', nome: 'Capaccio Paestum', nomeNormalizzato: 'CAPACCIO PAESTUM', siglaProvincia: 'SA', regione: 'Campania',
  },
]);

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

const INTESTAZIONE: ElementoPdf[] = [
  e('Elenco nidi e micronidi', 41, 797), e('Data', 621, 784), e('Telefono', 982, 784), e('Ambito', 19, 781), e('Prov', 34, 781),
  e('Comune', 54, 781), e('Servizio', 97, 781), e('Denominazione', 150, 781), e('Ricettività', 201, 781), e('Indirizzo', 249, 781),
  e('Cap', 298, 781), e('Telefono', 317, 781), e('Email', 358, 781), e('Scheda SIS', 391, 781), e('Gestione', 420, 781),
  e('Titolarità', 461, 781), e('Soggetto pubblico che affida', 498, 781), e('Provvedimento', 565, 781), e('Prestatore', 706, 781),
];

/** Prima pagina con l'intestazione e una riga pubblica; seconda pagina senza intestazione con una riga privata. */
const PAGINA_1: ElementoPdf[] = [
  ...INTESTAZIONE,
  e('Micro nido (da 0 a 3 anni)', 78, 764), e('MICRO-NIDO DEL COMUNE DI', 129, 764), e('Servizio a titolarità pubblica, in', 443, 764),
  e('A01', 18, 761), e('AV', 33, 761), e('Ariano Irpino', 45, 761), e('24', 199, 761), e('VIA CORNO 1', 220, 761), e('83031', 292, 761),
  e('0825123456', 312, 761), e('nido@comune.ariano', 338, 761), e('AVSRS0315', 388, 761), e('Comune di Ariano Irpino', 495, 761),
  e('Obbiettivo 2000', 673, 761), e('.it', 338, 758),
  e('(SRS02)', 78, 759), e('ARIANO', 129, 759), e('affidamento', 443, 759),
];

const PAGINA_2: ElementoPdf[] = [
  e('Elenco nidi e micronidi', 41, 797),
  e("Nido d'infanzia (da 0 a 3 anni)", 78, 781), e('Servizio a titolarità privata con', 443, 783),
  e('S5', 18, 779), e('SA', 33, 779), e('Capaccio', 45, 779), e('IL NIDO DI ROSSI MARIA SNC', 129, 779), e('30', 199, 779),
  e('VIA MARE 5', 220, 779), e('3331234567', 312, 779), e('rossi.maria@gmail.com', 338, 779), e('RSSMRA80A41H703X', 890, 779),
  e('(SRS01)', 78, 776), e('offerta solo ai privati', 443, 774),
  e('Micro nido (da 0 a 3 anni)', 78, 766), e('S5', 18, 764), e('SA', 33, 764), e('Capaccio', 45, 764), e('BABY', 129, 764),
  e('(SRS02)', 78, 761), e('nido@pec.it', 338, 764),
];

describe('parser elenco nidi e micronidi Campania', () => {
  const righe = righeDaPagineCampania([PAGINA_1, PAGINA_2]);
  const esito = parseCampaniaNidi(righe, comuni, new Date());

  it('ricostruisce le righe anche nelle pagine senza intestazione', () => {
    expect(righe).toHaveLength(3);
    expect(righe[0]).toMatchObject({
      denominazione: 'MICRO-NIDO DEL COMUNE DI ARIANO', email: 'nido@comune.ariano.it', sis: 'AVSRS0315',
    });
    expect(righe[1].titolarita).toBe('Servizio a titolarità privata con offerta solo ai privati');
  });

  it('mappa tipologia, gestione e gestore pubblico', () => {
    const [pubblico, privato, senzaTitolarita] = esito.strutture;
    expect(pubblico).toMatchObject({
      chiave: 'campania-elenco-nidi-micronidi:AVSRS0315',
      tipologia: Tipologia.MICRONIDO,
      gestione: Gestione.COMUNALE,
      gestore: 'Comune Di Ariano Irpino',
      posti: 24,
      contatti: { email: 'nido@comune.ariano.it', telefono: '0825123456' },
    });
    expect(privato).toMatchObject({ tipologia: Tipologia.NIDO, gestione: Gestione.PRIVATA, gestore: undefined, denominazione: 'Il Nido' });
    expect(privato.indirizzo.comune).toBe('Capaccio Paestum');
    expect(senzaTitolarita).toMatchObject({ gestione: Gestione.SCONOSCIUTA, chiave: 'campania-elenco-nidi-micronidi:065025-baby' });
  });

  it('non pubblica persone, cellulari, email personali, PEC e codici fiscali', () => {
    const testo = JSON.stringify(esito.strutture);
    expect(testo).not.toMatch(/ROSSI|Rossi|gmail|3331234567|RSSMRA|pec\.it|Obbiettivo/);
  });
});
