import { ComuniLookup } from '../comuni/comuni-lookup';
import { ElementoPdf } from '../piemonte/pdf-testo';
import {
  dataRiferimentoRoma, linkFileRoma, parseRomaNidi, righeDaPagineRoma,
} from './roma-nidi.parser';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = new ComuniLookup([{
  codiceIstat: '058091', codiceCatastale: 'H501', nome: 'Roma', nomeNormalizzato: 'ROMA', siglaProvincia: 'RM', regione: 'Lazio',
}]);

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

/** Pagine ruotate come le estrae pdf.js: ogni riga della tabella ha la stessa x, le colonne differiscono per la y. */
const PAGINA_1: ElementoPdf[] = [
  e('MUNICIPIO ROMA I', 54, 366), e('Iscrizioni Nidi 2026/2027', 66, 352), e('Nidi della Rete Capitolina', 86, 50),
  e('CODICE', 124, 55), e('NOME STRUTTURA', 124, 134), e('GESTIONE STRUTTURA', 124, 257), e('INDIRIZZO', 124, 418),
  e('TELEFONO', 124, 534), e('ORARIO', 124, 614),
  e('001', 148, 62), e('ASSONIDO CLODIA', 148, 92), e('PRIVATA', 148, 254), e('CIRCONVALLAZIONE CLODIA,', 148, 356),
  e('133', 158, 356), e('0636004011', 148, 524), e('08:00 - 16:30', 148, 592), e('5', 148, 688), e('2', 148, 729), e('0', 148, 769),
  e('002', 172, 62), e('IL MAGGIOLINO', 172, 92), e('CAPITOLINA', 172, 254), e('VIA NOVENIO BUCCHI, 2', 172, 356),
  e('06-9595-0134 08:00 - 17:00', 172, 524), e('15', 172, 685),
  e('003', 186, 62), e('LA LUMACHINA DI BIANCHELLA NOEMI', 186, 92), e('PRIVATA IN', 186, 254), e('PROGETTO DI', 196, 254),
  e('FINANZA', 206, 254), e('VIA CRISTOFORO COLOMBO, 588 3471234567', 186, 356),
  e('004', 220, 62), e('MICRONIDO CASA DEGLI GNOMI CAPITOLINA', 220, 92), e('VIA BOCCIONI, 14', 220, 356),
  e('06', 220, 524), e('5212248', 220, 546),
  e('Note: IL NIDO BRONTOLO NON È DISPONIBILE. INFO 0669616495', 454, 50),
  e('Pagina 1 di', 545, 123), e('11/08/2026 17:30', 545, 50),
];

/** Pagina successiva: la tabella dei nidi continua senza intestazione, poi sezioni ponte e spazi gioco. */
const PAGINA_2: ElementoPdf[] = [
  e('MUNICIPIO ROMA I', 54, 366), e('Iscrizioni Nidi 2026/2027', 66, 352),
  e('005', 82, 62), e('PINOCCHIO', 82, 92), e('CAPITOLINA IN APPALTO', 82, 254), e('PIAZZALE DEGLI EROI, 12', 82, 356),
  e('Sezione Ponte (Presso scuola comunale dell\'infanzia)', 100, 50), e('CODICE', 114, 59), e('NOME STRUTTURA', 114, 182),
  e('006', 136, 66), e('A. CADLOLO', 136, 100), e('VIA DELLA RONDINELLA, 2', 136, 342), e('06-9595-0110', 136, 536),
  e('20', 136, 730),
  e('Spazi Gioco Convenzionati', 200, 50), e('CODICE', 238, 53), e('NOME STRUTTURA', 238, 127), e('MM', 248, 681),
  e('007', 262, 60), e('PAN DI ZUCCHERO', 262, 89), e('PRIVATA', 262, 245), e('VIA TRIPOLI, 64', 262, 349),
  e('3911046615', 262, 512), e('08:00 - 18:30', 262, 586),
];

describe('parser elenco servizi 0-3 di Roma Capitale', () => {
  const pagine = [PAGINA_1, PAGINA_2];
  const righe = righeDaPagineRoma(pagine);
  const esito = parseRomaNidi(righe, 'https://x/elenco.pdf', comuni, new Date(), dataRiferimentoRoma(pagine));
  const [clodia, maggiolino, finanza, gnomi, pinocchio, ponte, spazio] = esito.strutture;

  it('trova il link al PDF nella scheda servizi', () => {
    const html = '<a href="https://www.comune.roma.it/web-resources/cms/documents/Bando_nidi__elenco_strutture_al_11_Agosto_2026.pdf">x</a>';
    expect(linkFileRoma(html)).toBe('https://www.comune.roma.it/web-resources/cms/documents/Bando_nidi__elenco_strutture_al_11_Agosto_2026.pdf');
  });

  it('ricostruisce le righe ruotate, anche tra pagine e tabelle diverse', () => {
    expect(righe.map((r) => r.tabella)).toEqual(['NIDI', 'NIDI', 'NIDI', 'NIDI', 'NIDI', 'PONTE', 'SPAZI_GIOCO']);
    expect(righe[0].celle.indirizzo).toBe('CIRCONVALLAZIONE CLODIA, 133');
    expect(righe[2].celle.gestione).toBe('PRIVATA IN PROGETTO DI FINANZA');
    expect(righe[3].celle).toMatchObject({ nome: 'MICRONIDO CASA DEGLI GNOMI', gestione: 'CAPITOLINA' });
    expect(JSON.stringify(righe)).not.toMatch(/BRONTOLO|NOME STRUTTURA|Pagina/);
    expect(esito.scartate).toHaveLength(0);
  });

  it('mappa tipologia, gestione e chiave per municipio', () => {
    expect(clodia).toMatchObject({
      chiave: 'roma-capitale-elenco-servizi-0-3:01-001',
      tipologia: Tipologia.NIDO,
      gestione: Gestione.PRIVATA,
      gestore: undefined,
      indirizzo: { comune: 'Roma', codiceIstat: '058091', via: 'Circonvallazione Clodia, 133' },
      contatti: { telefono: '0636004011' },
      provenienza: { dataRiferimento: new Date('2026-08-11T00:00:00Z'), idNellaFonte: '01-001' },
    });
    expect(clodia.posti).toBeUndefined();
    expect(maggiolino).toMatchObject({ gestione: Gestione.COMUNALE, gestore: 'Roma Capitale', contatti: { telefono: '0695950134' } });
    expect(gnomi).toMatchObject({ tipologia: Tipologia.MICRONIDO, contatti: { telefono: '065212248' } });
    expect(pinocchio).toMatchObject({ gestione: Gestione.COMUNALE, gestore: undefined });
    expect(ponte).toMatchObject({
      tipologia: Tipologia.SEZIONE_PRIMAVERA,
      tipologiaOriginale: 'Sezione Ponte (Presso scuola comunale dell\'infanzia)',
      gestione: Gestione.COMUNALE,
    });
    expect(spazio).toMatchObject({ tipologia: Tipologia.SPAZIO_GIOCO, gestione: Gestione.PRIVATA });
  });

  it('non pubblica cellulari né nomi dei titolari', () => {
    expect(finanza).toMatchObject({ denominazione: 'La Lumachina', gestione: Gestione.PRIVATA });
    expect(finanza.indirizzo.via).toBe('Via Cristoforo Colombo, 588');
    expect(finanza.contatti.telefono).toBeUndefined();
    expect(spazio.contatti.telefono).toBeUndefined();
    expect(JSON.stringify(esito.strutture)).not.toMatch(/3471234567|3911046615|Bianchella|BIANCHELLA/);
  });
});
