import 'server-only';

const API_URL = process.env.API_URL || 'http://localhost:8181';

/** Chiamata al backend dal server Next. Restituisce null se la risorsa non esiste. */
export async function api<T>(percorso: string, revalidate = 3600): Promise<T | null> {
  const risposta = await fetch(`${API_URL}${percorso}`, { next: { revalidate } });
  if (risposta.status === 404 || risposta.status === 400) return null;
  if (!risposta.ok) throw new Error(`API ${percorso}: HTTP ${risposta.status}`);
  return (await risposta.json()) as T;
}

/** Catalogo delle fonti (cambia solo con un nuovo import). */
export async function catalogoFonti(): Promise<import('./tipi').CatalogoFonti> {
  return (await api<import('./tipi').CatalogoFonti>('/fonti', 3600)) ?? { fonti: [], ausiliarie: [] };
}

/** Nome leggibile di una fonte delle strutture o della posizione ("civici:ANNCSU@2026-11-02"). */
export function nomeFonte(catalogo: import('./tipi').CatalogoFonti, codice: string): string {
  if (codice.startsWith('civici:')) {
    const f = codice.slice(7).split('@')[0];
    if (f === 'ANNCSU') return 'ANNCSU, numeri civici (geocodifica dall\'indirizzo)';
    if (f.startsWith('OSM')) return '© OpenStreetMap contributors (geocodifica dall\'indirizzo)';
    return `Stradario ${f.replace(/^CIVICI_/, '').replace(/_/g, ' ').toLowerCase()} (geocodifica dall'indirizzo)`;
  }
  return catalogo.fonti.find((f) => f.codice === codice)?.nome ?? codice;
}
