/** Parole che indicano una pagina su nidi e servizi 0-3 (nell'URL o nel testo del link). */
const PAROLE = new RegExp([
  'asil[io][\\s_-]*nid',
  '(^|[/_-])nid[oi]([/_-]|$)',
  'nid[oi][\\s_-]*(d[\\s_-]*infanzia',
  'comunal',
  'famiglia)',
  'micronid',
  'sezion[ei][\\s_-]*primavera',
  'spazi?[\\s_-]*gioc',
  'servizi[\\s_-]*(educativ',
  'per[\\s_-]*l[\\s_-]*infanzia',
  'prima[\\s_-]*infanzia',
  '0[\\s_-]*3',
  'zero)',
  'prima[\\s_-]*infanzia',
  '0[\\s_-]*-?[\\s_-]*3[\\s_-]*anni',
  'tagesm',
  // Alto Adige: Kindertagesstätte, Kinderhort, Kleinkindbetreuung.
  '(^|[/_\\s-])kitas?([/_\\s.-]|$)',
  'kindertages',
  'kinderhort',
  'kleinkind',
  'kinderbetreu',
  'ludotec',
  'baby[\\s_-]*park',
  'centr[oi][\\s_-]*(bambini',
  'infanzia)',
  'polo[\\s_-]*infanzia',
].join('|'), 'i');

/** Pagine da escludere anche se contengono le parole (bandi di gara, determine, albo). */
const ESCLUSE = new RegExp([
  'gara',
  'notizi',
  'comunicat',
  'event[io]',
  'concors',
  'mobilit',
  'assunz',
  'assistent',
  'educator',
  'menu',
  'appalt',
  'determin',
  'delibera',
  'albo[\\s_-]*pretorio',
  'amministrazione[\\s_-]*trasparente',
  'bando[\\s_-]*di[\\s_-]*gara',
  'cig',
  '\\.(jpg',
  'png',
  'gif',
  'zip',
  'docx?',
  'xlsx?',
  'p7m)(\\?',
  '$)',
].join('|'), 'i');

export function rilevante(url: string, testoLink = ''): boolean {
  let percorso = url;
  try { percorso = decodeURIComponent(new URL(url).pathname); } catch { /* url relativo o malformato */ }
  return (PAROLE.test(percorso) || PAROLE.test(testoLink)) && !ESCLUSE.test(url);
}

/** Link (href e testo) di una pagina HTML, risolti rispetto all'URL della pagina. */
export function linkDi(html: string, base: string): { url: string; testo: string }[] {
  const risultati: { url: string; testo: string }[] = [];
  const re = /<a\b[^>]*href\s*=\s*["']([^"'#]+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m = re.exec(html);
  while (m) {
    try {
      const url = new URL(m[1].trim(), base).toString();
      risultati.push({ url, testo: m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() });
    } catch { /* link non valido */ }
    m = re.exec(html);
  }
  return risultati;
}

/** URL elencati in una sitemap XML (anche indici di sitemap). */
export function urlDaSitemap(xml: string): string[] {
  return [...xml.matchAll(/<loc>\s*(?:<!\[CDATA\[)?\s*([^<\s\]]+)\s*(?:\]\]>)?\s*<\/loc>/gi)]
    .map((m) => m[1].replace(/&amp;/g, '&'));
}
