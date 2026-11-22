/** Maiuscolo, senza accenti, apostrofi e spazi multipli: per confrontare nomi di comuni tra fonti diverse. */
export function normalizzaNome(nome: string): string {
  return nome
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, ' ')
    .trim();
}

/** "VIA MANZONI 98" -> "Via Manzoni 98", lasciando invariate sigle brevi come "IC". */
export function titoloLeggibile(testo: string): string {
  return testo
    .replace(/["“”«»]/g, ' ')
    .trim()
    .replace(/^'+|'+$/g, '')
    .toLowerCase()
    .replace(/(^|[\s'"(/-])(\p{L})/gu, (_m, sep: string, lettera: string) => `${sep}${lettera.toUpperCase()}`)
    .replace(/\s+/g, ' ')
    .trim();
}
