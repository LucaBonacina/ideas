import { calcolaCostoNetto, InputCostoNetto } from './costo-netto';
import { fasciaBonusNido, iseeNeutralizzato } from './regole-2026';

const nato2025 = new Date('2025-03-10T00:00:00Z');
const nato2023 = new Date('2023-05-01T00:00:00Z');

const base: InputCostoNetto = {
  dataNascita: nato2025,
  rettaMensile: 600,
  mesi: 11,
  iseeNeutralizzato: 15000,
  iseeMisureRegionali: 15000,
  regione: 'Lombardia',
  tipologia: 'NIDO',
  pubblicaOConvenzionata: true,
  comuneAderenteNidiGratisPlus: true,
  genitoreOccupatoODid: true,
};

describe('regole Bonus nido 2026 (circolare INPS 29/2026)', () => {
  it('riproduce l\'esempio di neutralizzazione della circolare', () => {
    expect(iseeNeutralizzato(41000, 3100, 3.1)).toBe(40000);
  });

  it('applica le fasce per data di nascita', () => {
    expect(fasciaBonusNido(nato2025, 40000).annuo).toBe(3600);
    expect(fasciaBonusNido(nato2025, 40000.01).annuo).toBe(1500);
    expect(fasciaBonusNido(nato2025, null).annuo).toBe(1500);
    expect(fasciaBonusNido(nato2023, 25000.99).annuo).toBe(3000);
    expect(fasciaBonusNido(nato2023, 25001).annuo).toBe(2500);
    expect(fasciaBonusNido(nato2023, 40000).annuo).toBe(2500);
    expect(fasciaBonusNido(nato2023, 40001).annuo).toBe(1500);
  });
});

describe('calcolo del costo netto', () => {
  it('Lombardia, ISEE basso, tutto confermato: retta azzerata', () => {
    const e = calcolaCostoNetto(base);
    expect(e.rettaAnnua).toBe(6600);
    const [inps, ngp] = e.misure;
    expect(inps).toMatchObject({ stato: 'applicata', mensile: 327.27, annuo: 3600 });
    expect(ngp).toMatchObject({ stato: 'applicata', mensile: 272.73, annuo: 3000.03 });
    expect(e.costoNettoAnnuo).toBe(0);
  });

  it('seconda fascia di Nidi Gratis Plus: al massimo 100 euro al mese', () => {
    const e = calcolaCostoNetto({ ...base, iseeMisureRegionali: 22000 });
    expect(e.misure[1]).toMatchObject({ mensile: 100, annuo: 1100 });
    expect(e.costoNettoAnnuo).toBe(6600 - 3600 - 1100);
  });

  it('condizioni non note: la misura regionale resta da verificare e non entra nel costo certo', () => {
    const e = calcolaCostoNetto({ ...base, comuneAderenteNidiGratisPlus: null, pubblicaOConvenzionata: null });
    expect(e.misure[1].stato).toBe('da verificare');
    expect(e.costoNettoAnnuo).toBe(3000);
    expect(e.costoNettoAnnuoSeVerificate).toBe(0);
  });

  it('privato non convenzionato: solo il Bonus nido', () => {
    const e = calcolaCostoNetto({ ...base, pubblicaOConvenzionata: false });
    expect(e.misure[1].stato).toBe('non spetta');
    expect(e.costoNettoAnnuo).toBe(3000);
  });

  it('il bonus non supera la retta pagata', () => {
    const e = calcolaCostoNetto({ ...base, rettaMensile: 200, regione: 'Lazio' });
    expect(e.misure).toHaveLength(1);
    expect(e.misure[0].annuo).toBe(2200);
    expect(e.costoNettoAnnuo).toBe(0);
    expect(e.avvertenze.join(' ')).toContain('solo il Bonus nido INPS');
  });

  it('scuola dell\'infanzia: nessuna misura per il nido', () => {
    const e = calcolaCostoNetto({ ...base, tipologia: 'SCUOLA_INFANZIA' });
    expect(e.misure.every((m) => m.stato === 'non spetta')).toBe(true);
  });

  it('centro prima infanzia lombardo: bonus da verificare', () => {
    const e = calcolaCostoNetto({ ...base, tipologia: 'SPAZIO_GIOCO', tipologiaOriginale: 'CENTRO PRIMA INFANZIA' });
    expect(e.misure[0].stato).toBe('da verificare');
    expect(e.misure[1].stato).toBe('non spetta');
  });

  it('nato prima del 2024 con ISEE 30.000: 2.500 euro', () => {
    const e = calcolaCostoNetto({
      ...base, dataNascita: nato2023, iseeNeutralizzato: 30000, iseeMisureRegionali: 30000,
    });
    expect(e.misure[0].annuo).toBe(2500);
    expect(e.misure[1].stato).toBe('non spetta');
  });
});
