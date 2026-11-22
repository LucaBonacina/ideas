import { Comune } from '../../../database/comune.schema';
import { normalizzaNome } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';

/** Nomi degli elenchi provinciali diversi dalla denominazione ISTAT. */
const ALIAS: Record<string, string> = {
  'S ORSOLA': "Sant'Orsola Terme",
  RUFFRE: 'Ruffrè-Mendola',
  'CASTELLO DI FIEMME': 'Castello-Molina di Fiemme',
  'SPIAZZO RENDENA': 'Spiazzo',
  SORAGA: 'Soraga di Fassa',
  'SAN GIOVANNI DI FASSA SEN JAN': 'San Giovanni di Fassa',
};

export function senzaParentesi(testo: string): string {
  return testo.replace(/\([^)]*\)?/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Comune della Provincia di Trento da un nome dell'elenco: "Novella (Cagnò)", "S. Orsola"...
 * Se il nome fuori parentesi non esiste (comune nato da una fusione recente), prova la località tra parentesi.
 */
export function comuneTrentino(nome: string, comuni: ComuniLookup): Comune | undefined {
  const pulito = senzaParentesi(nome);
  const trovato = comuni.daNome(ALIAS[normalizzaNome(pulito)] ?? pulito, 'TN');
  if (trovato) return trovato;
  const traParentesi = nome.match(/\(([^,)]+)/)?.[1]?.trim();
  return traParentesi ? comuni.daNome(traParentesi, 'TN') : undefined;
}
