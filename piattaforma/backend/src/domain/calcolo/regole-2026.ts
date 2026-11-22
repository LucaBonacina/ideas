/**
 * Regole delle misure per il costo del nido, trascritte dai testi ufficiali.
 * Ogni regola cita la fonte: se cambia l'atto, si aggiorna qui e nei test.
 */

export interface Fonte {
  titolo: string;
  url: string;
}

export const FONTE_BONUS_NIDO_2026: Fonte = {
  titolo: 'INPS, circolare n. 29 del 27 marzo 2026, Bonus asilo nido e forme di supporto presso la propria abitazione',
  url: 'https://www.inps.it/content/dam/inps-site/it/scorporati/circolari-e-messaggi/2026/03/Circolare_15207/Allegati/16651_Circolare-numero-29-del-27-03-2026.pdf',
};

export const FONTE_NIDI_GRATIS_PLUS_2026: Fonte = {
  titolo: 'Regione Lombardia, D.G.R. XII/6201 del 25 maggio 2026, Nidi Gratis Plus 2026/27 e 2027/28 (allegato A)',
  url: 'https://anci.lombardia.it/documenti/23510-DGR_6201_2026.pdf',
};

export const FONTE_DETRAZIONE: Fonte = {
  titolo: 'Detrazione per la frequenza di asili nido: art. 1, c. 335, L. 266/2005 (non cumulabile con il Bonus nido, circolare INPS 29/2026, par. 8)',
  url: FONTE_BONUS_NIDO_2026.url,
};

/** Rate mensili del Bonus nido: dieci rate uguali e un'undicesima di arrotondamento (circolare 29/2026, par. 4). */
export interface FasciaBonus {
  annuo: number;
  rata: number;
  undicesima: number;
}

const FASCIA_3600: FasciaBonus = { annuo: 3600, rata: 327.27, undicesima: 327.30 };
const FASCIA_3000: FasciaBonus = { annuo: 3000, rata: 272.73, undicesima: 272.70 };
const FASCIA_2500: FasciaBonus = { annuo: 2500, rata: 227.27, undicesima: 227.30 };
const FASCIA_1500: FasciaBonus = { annuo: 1500, rata: 136.37, undicesima: 136.30 };

export const NATI_DAL = new Date('2024-01-01T00:00:00Z');

/**
 * Fascia del Bonus nido. iseeNeutralizzato: ISEE per specifiche prestazioni familiari meno
 * l'Assegno unico diviso per la scala di equivalenza; null se l'ISEE manca.
 */
export function fasciaBonusNido(dataNascita: Date, isee: number | null): FasciaBonus {
  if (isee === null) return FASCIA_1500;
  if (dataNascita >= NATI_DAL) return isee <= 40000 ? FASCIA_3600 : FASCIA_1500;
  if (isee < 25001) return FASCIA_3000;
  if (isee <= 40000) return FASCIA_2500;
  return FASCIA_1500;
}

/** ISEE neutralizzato dall'Assegno unico (esempio della circolare: 41.000 - 3.100/3,10 = 40.000). */
export function iseeNeutralizzato(isee: number, assegnoUnicoAnnuo: number, scalaEquivalenza: number): number {
  return Math.round((isee - assegnoUnicoAnnuo / scalaEquivalenza) * 100) / 100;
}

/** Nidi Gratis Plus: tetto all'ISEE e contributo massimo nella seconda fascia (allegato A). */
export const NIDI_GRATIS_PLUS = {
  iseeMassimo: 25000,
  iseePrimaFascia: 20000,
  contributoMassimoSecondaFascia: 100,
  mesi: 11,
  /** Importo INPS di riferimento: quello della prima fascia, per data di nascita (requisito c). */
  rimborsabileInps: (dataNascita: Date): number => (dataNascita >= NATI_DAL ? 327.27 : 272.73),
};

/** Servizi ammessi al Bonus nido (circolare 29/2026, par. 3): esclusi i centri per bambini e famiglie. */
export const TIPOLOGIE_BONUS_NIDO = ['NIDO', 'MICRONIDO', 'SEZIONE_PRIMAVERA', 'SPAZIO_GIOCO', 'SERVIZIO_DOMICILIARE'];

/** Servizi ammessi a Nidi Gratis Plus: nidi, micronidi e nidi famiglia (allegato A). */
export const TIPOLOGIE_NIDI_GRATIS_PLUS = ['NIDO', 'MICRONIDO', 'SERVIZIO_DOMICILIARE'];
