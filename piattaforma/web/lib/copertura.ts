import 'server-only';
import { api } from './api';
import type { RigaCopertura } from './tipi';

const TIPOLOGIE_0_3 = new Set(['NIDO', 'MICRONIDO', 'SEZIONE_PRIMAVERA', 'SPAZIO_GIOCO', 'CENTRO_BAMBINI_FAMIGLIE', 'SERVIZIO_DOMICILIARE']);

/** Regioni in cui abbiamo almeno una fonte con servizi 0-3. */
export async function regioniCon03(): Promise<Set<string>> {
  const righe = (await api<RigaCopertura[]>('/strutture/copertura')) ?? [];
  return new Set(righe.filter((r) => TIPOLOGIE_0_3.has(r.tipologia)).map((r) => r.regione));
}
