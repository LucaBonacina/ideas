import { createHash } from 'crypto';
import { normalizzaNome } from '../../../domain/normalizza';
import { inItalia } from '../mim/scuola-in-chiaro.parser';
import { Posizione } from '../../../database/struttura.schema';

/** "Via Sant'Alessandro, 10 – nido 1" -> "via-sant-alessandro-10-nido-1": per identificativi deterministici. */
export function slug(testo: string): string {
  return normalizzaNome(testo).toLowerCase().replace(/\s+/g, '-');
}

/** Impronta breve e non reversibile di un codice che non va ripubblicato (es. codice di un'educatrice). */
export function impronta(testo: string): string {
  return createHash('sha256').update(testo.trim().toUpperCase()).digest('hex').slice(0, 12);
}

/** Rende unici gli identificativi ripetuti aggiungendo "-2", "-3"... nell'ordine della fonte. */
export function idUnico(base: string, visti: Map<string, number>): string {
  const n = (visti.get(base) ?? 0) + 1;
  visti.set(base, n);
  return n === 1 ? base : `${base}-${n}`;
}

/** Punto GeoJSON solo se le coordinate sono numeri validi in Italia. */
export function posizioneInItalia(lng: unknown, lat: unknown): Posizione | undefined {
  const x = Number(lng);
  const y = Number(lat);
  if (lng === null || lat === null || lng === '' || lat === '') return undefined;
  return Number.isFinite(x) && Number.isFinite(y) && inItalia(y, x) ? { type: 'Point', coordinates: [x, y] } : undefined;
}
