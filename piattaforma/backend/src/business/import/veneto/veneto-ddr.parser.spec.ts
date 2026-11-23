import { ElementoPdf } from '../piemonte/pdf-testo';
import { comuniDiProva } from '../strumenti/comuni-di-prova';
import {
  parseVenetoDdr, righeDaPagineVenetoDdr, tipologiaVeneto,
} from './veneto-ddr.parser';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = comuniDiProva([
  ['025001', 'Alpago', 'BL', 'Veneto'],
  ['023091', 'Verona', 'VR', 'Veneto'],
  ['028060', 'Padova', 'PD', 'Veneto'],
]);

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

/** Righe come negli allegati del decreto: n., provincia, comune, codice, CF, ente, servizio, importo. */
const PAGINA: ElementoPdf[] = [
  e('2', 30, 500), e('BL', 50, 500), e('ALPAGO', 80, 500), e('BL00029', 160, 500), e('01234567890', 220, 500),
  e("KAIROS SOCIETA' COOPERATIVA", 300, 500), e('MICRONIDO MON PETIT', 480, 500), e('12.487,01', 650, 500), e('€', 700, 500),
  e('SOCIALE ONLUS', 300, 490),
  e('3', 30, 470), e('VR', 50, 470), e('VERONA', 80, 470), e('VR00100', 160, 470), e('RSSMRA80A41L781X', 220, 470),
  e('ROSSI MARIA', 300, 470), e('NIDO INTEGRATO DA MARIA ROSSI', 480, 470), e('5.000,00', 650, 470),
];

describe('parser servizi finanziati Veneto (DDR)', () => {
  const righe = righeDaPagineVenetoDdr([PAGINA]);

  it('ricostruisce le righe con le celle andate a capo', () => {
    expect(righe).toHaveLength(2);
    expect(righe[0]).toMatchObject({
      provincia: 'BL',
      comune: 'ALPAGO',
      codice: 'BL00029',
      ente: "KAIROS SOCIETA' COOPERATIVA SOCIALE ONLUS",
      denominazione: 'MICRONIDO MON PETIT',
    });
  });

  it('ricava la tipologia dal nome', () => {
    expect(tipologiaVeneto('NIDO INTEGRATO SAN GIUSEPPE')).toEqual({ tipologia: Tipologia.NIDO, originale: 'NIDO INTEGRATO' });
    expect(tipologiaVeneto('MICRO-NIDO IL GIRASOLE').tipologia).toBe(Tipologia.MICRONIDO);
  });

  it('privati: niente gestore, e nome generico per le ditte individuali', () => {
    const esito = parseVenetoDdr(righe, 'C', comuni, new Date());
    const [coop, ditta] = esito.strutture;
    expect(coop).toMatchObject({
      chiave: 'veneto-servizi-finanziati-ddr:BL00029',
      tipologia: Tipologia.MICRONIDO,
      gestione: Gestione.PRIVATA,
      denominazione: 'Micronido Mon Petit',
      gestore: undefined,
      accreditamento: 'si',
    });
    expect(ditta.denominazione).toBe('Nido Integrato a Verona');
    const pubblici = esito.strutture.map(({ riservato: _riservato, ...resto }) => resto);
    expect(JSON.stringify(pubblici)).not.toMatch(/ROSSI|Rossi|RSSMRA/);
    expect(ditta.riservato).toMatchObject({ gestore: 'ROSSI MARIA', codiceFiscaleGestore: 'RSSMRA80A41L781X' });
  });

  it('pubblici: gestione comunale e gestore', () => {
    const esito = parseVenetoDdr([{
      provincia: 'PD', comune: 'PADOVA', codice: 'PD00001', codiceFiscale: '00644060287', ente: 'COMUNE DI PADOVA', denominazione: 'ASILO NIDO GIOSTRA',
    }, {
      provincia: 'PD', comune: 'ATLANTIDE', codice: 'PD00002', codiceFiscale: '', ente: '', denominazione: '',
    }], 'D', comuni, new Date());
    expect(esito.strutture[0]).toMatchObject({ gestione: Gestione.COMUNALE, gestore: 'Comune Di Padova' });
    expect(esito.scartate[0].motivo).toMatch(/comune non trovato/);
  });
});
