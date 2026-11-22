import { telefonoPubblicabile } from '../../../domain/privacy';

export const FONTE_SCUOLA_IN_CHIARO = 'mim-scuola-in-chiaro';

export const URL_SCUOLA_IN_CHIARO = 'https://unica.istruzione.gov.it/services/sic/api/v1.0/ricerche/ricercaRapida';

export const PAGINA_SCUOLA_IN_CHIARO = 1000;

interface RispostaSic {
  scuole?: { codiceDebole?: string; latitudine?: number; longitudine?: number; telefono?: string }[];
  paginazione?: { numeroElementiTotale?: number };
}

export function urlRicerca(chiave: string, pagina: number): string {
  const q = new URLSearchParams({
    chiaviDiRicerca: chiave, numeroElementiPagina: String(PAGINA_SCUOLA_IN_CHIARO), numeroPagina: String(pagina),
  });
  return `${URL_SCUOLA_IN_CHIARO}?${q.toString()}`;
}

/** Coordinate plausibili per l'Italia (esclude valori nulli o invertiti). */
export function inItalia(lat: number, lng: number): boolean {
  return lat > 35.4 && lat < 47.2 && lng > 6.6 && lng < 18.6;
}

/** Codice meccanografico -> [longitudine, latitudine], più il totale dichiarato per la paginazione. */
export function parseRispostaSic(contenuto: Buffer): {
  coordinate: Map<string, [number, number]>; telefoni: Map<string, string>; totale: number;
} {
  const dati = JSON.parse(contenuto.toString('utf8')) as RispostaSic;
  const coordinate = new Map<string, [number, number]>();
  const telefoni = new Map<string, string>();
  for (const s of dati.scuole ?? []) {
    const lat = Number(s.latitudine);
    const lng = Number(s.longitudine);
    const tel = telefonoPubblicabile(s.telefono);
    if (s.codiceDebole && tel) telefoni.set(s.codiceDebole.toUpperCase(), tel);
    if (s.codiceDebole && Number.isFinite(lat) && Number.isFinite(lng) && inItalia(lat, lng)) {
      coordinate.set(s.codiceDebole.toUpperCase(), [lng, lat]);
    }
  }
  return { coordinate, telefoni, totale: dati.paginazione?.numeroElementiTotale ?? 0 };
}

export interface ScuolaSic {
  codiceDebole: string;
  denominazione?: string;
  email?: string;
  telefono?: string;
  indirizzo?: string;
  comune?: string;
  provincia?: string;
  cap?: string;
  latitudine?: number;
  longitudine?: number;
  scuolaStatale?: string;
  scuolaParitaria?: string;
  tipoDiIstruzione?: string;
}

/** Tutte le scuole dell'infanzia (tipo "AA") di una risposta di ricerca. */
export function scuoleInfanziaSic(contenuto: Buffer): ScuolaSic[] {
  const dati = JSON.parse(contenuto.toString('utf8')) as { scuole?: ScuolaSic[] };
  return (dati.scuole ?? []).filter((s) => s.tipoDiIstruzione === 'AA' && s.codiceDebole);
}
