export const FONTE_SCUOLA_IN_CHIARO = 'mim-scuola-in-chiaro';

export const URL_SCUOLA_IN_CHIARO = 'https://unica.istruzione.gov.it/services/sic/api/v1.0/ricerche/ricercaRapida';

export const PAGINA_SCUOLA_IN_CHIARO = 1000;

interface RispostaSic {
  scuole?: { codiceDebole?: string; latitudine?: number; longitudine?: number }[];
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
export function parseRispostaSic(contenuto: Buffer): { coordinate: Map<string, [number, number]>; totale: number } {
  const dati = JSON.parse(contenuto.toString('utf8')) as RispostaSic;
  const coordinate = new Map<string, [number, number]>();
  for (const s of dati.scuole ?? []) {
    const lat = Number(s.latitudine);
    const lng = Number(s.longitudine);
    if (s.codiceDebole && Number.isFinite(lat) && Number.isFinite(lng) && inItalia(lat, lng)) {
      coordinate.set(s.codiceDebole.toUpperCase(), [lng, lat]);
    }
  }
  return { coordinate, totale: dati.paginazione?.numeroElementiTotale ?? 0 };
}
