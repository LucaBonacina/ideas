import { normalizzaNome } from '../../../domain/normalizza';

/** Forma giuridica di una società di persone o di capitali in fondo al nome ("snc", "s.a.s.", "srls"…). */
const FORMA_IN_CODA = new RegExp(
  '[\\s.,-]*\\b(?:s\\.?\\s?n\\.?\\s?c|s\\.?\\s?a\\.?\\s?s|s\\.?\\s?r\\.?\\s?l\\.?\\s?s?|s\\.?\\s?p\\.?\\s?a)\\b\\.?'
    + '(?:\\s+(?:di|de)\\b.*)?$',
  'i',
);

/** Parole che dopo "di" indicano un'intitolazione o un luogo, non il titolare: "Asilo di San Rocco", "Il nido di Nemo". */
const NON_PERSONA = new Set([
  'IL', 'LO', 'LA', 'I', 'GLI', 'LE', 'L', 'UN', 'UNA', 'SAN', 'SANTA', 'SANTO', 'SANT', 'S', 'SS', 'GESU', 'NOSTRA',
  'VIA', 'PIAZZA', 'VILLA', 'CORTE', 'BORGO', 'CASA',
]);

/** " di Rossi Maria", " DI ANCORA L. E MELACCA T.": da due a quattro parole in fondo al nome dopo "di". */
const DI_PERSONA = /\s+di\s+([\p{L}'’.&]+(?:\s+[\p{L}'’.&]+){1,3})\s*$/iu;

function senzaTitolareInCoda(nome: string): string {
  let risultato = nome.replace(FORMA_IN_CODA, '').trim();
  const coda = risultato.match(DI_PERSONA);
  if (coda) {
    const prima = normalizzaNome(coda[1]).split(' ')[0];
    if (!NON_PERSONA.has(prima)) risultato = risultato.slice(0, coda.index).trim();
  }
  return risultato.replace(/[\s,.;:"'-]+$/, '').trim();
}

/** Vero se il testo contiene una parola (di almeno 3 lettere) dei nomi di persona dati. */
export function contieneNomiDiPersona(testo: string, nomiDiPersona: string[]): boolean {
  const parole = new Set(normalizzaNome(testo).split(' '));
  return nomiDiPersona.flatMap((n) => normalizzaNome(n).split(' ')).some((p) => p.length >= 3 && parole.has(p));
}

/**
 * Nome di un servizio privato senza il nome della persona titolare.
 * Toglie "snc/sas/srl di …" e " di Cognome Nome" in coda; se restano parole di nomi di persona noti
 * (es. il legale rappresentante) restituisce undefined, e il chiamante usa un nome generico.
 */
export function denominazionePubblicabile(nome: string, nomiDiPersona: string[] = []): string | undefined {
  const pulito = senzaTitolareInCoda(nome.trim());
  if (contieneNomiDiPersona(pulito, nomiDiPersona) || normalizzaNome(pulito).length < 2) return undefined;
  return pulito;
}
