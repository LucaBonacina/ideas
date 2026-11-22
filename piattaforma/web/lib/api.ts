import 'server-only';

const API_URL = process.env.API_URL || 'http://localhost:8181';

/** Chiamata al backend dal server Next. Restituisce null se la risorsa non esiste. */
export async function api<T>(percorso: string, revalidate = 3600): Promise<T | null> {
  const risposta = await fetch(`${API_URL}${percorso}`, { next: { revalidate } });
  if (risposta.status === 404 || risposta.status === 400) return null;
  if (!risposta.ok) throw new Error(`API ${percorso}: HTTP ${risposta.status}`);
  return (await risposta.json()) as T;
}
