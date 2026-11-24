import { ElementoPdf } from '../import/piemonte/pdf-testo';

const ENTITA: Record<string, string> = {
  nbsp: ' ',
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  agrave: 'à',
  egrave: 'è',
  eacute: 'é',
  igrave: 'ì',
  ograve: 'ò',
  ugrave: 'ù',
  Agrave: 'À',
  Egrave: 'È',
  ndash: '–',
  mdash: '—',
  rsquo: '’',
  lsquo: '‘',
  ldquo: '“',
  rdquo: '”',
  hellip: '…',
  euro: '€',
  deg: '°',
  uuml: 'ü',
  ouml: 'ö',
  auml: 'ä',
  szlig: 'ß',
};

function decodifica(testo: string): string {
  return testo
    .replace(/&#(\d+);/g, (_t, n: string) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_t, n: string) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (t, n: string) => ENTITA[n] ?? t);
}

/** Testo leggibile di una pagina HTML: il contenuto principale, senza menu, script e piè di pagina. */
export function htmlInTesto(html: string): string {
  let h = html.replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<(script|style|noscript|svg|nav|header|footer|form)\b[\s\S]*?<\/\1>/gi, ' ');
  const main = /<main\b[\s\S]*?<\/main>/i.exec(h) ?? /<article\b[\s\S]*?<\/article>/i.exec(h);
  if (main) [h] = main;
  const titolo = /<title>([\s\S]*?)<\/title>/i.exec(html)?.[1];
  const testo = decodifica(h
    .replace(/<(br|hr)\b[^>]*>/gi, '\n')
    .replace(/<\/(p|div|li|tr|h[1-6]|section|dd|dt|table)>/gi, '\n')
    .replace(/<(td|th)\b[^>]*>/gi, ' | ')
    .replace(/<[^>]+>/g, ' '))
    .replace(/[ \t\u00a0]+/g, ' ')
    .replace(/\n\s*/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim();
  return titolo ? `${decodifica(titolo).trim()}\n${testo}` : testo;
}

/** Testo di un PDF, riga per riga (gli elementi con la stessa y formano una riga). */
export function pdfInTesto(pagine: ElementoPdf[][]): string {
  return pagine.map((elementi) => {
    const righe = new Map<number, ElementoPdf[]>();
    for (const e of elementi) {
      const y = Math.round(e.y / 3) * 3;
      righe.set(y, [...(righe.get(y) ?? []), e]);
    }
    return [...righe.entries()].sort((a, b) => b[0] - a[0])
      .map(([, r]) => r.sort((p, q) => p.x - q.x).map((e) => e.testo.trim()).join('  '))
      .filter(Boolean)
      .join('\n');
  }).join('\n');
}

const CHIAVI = new RegExp([
  'nid[oi]', 'micronid', 'primavera', 'prima infanzia', 'infanzia', 'spazi[o ]+gioco', 'centr[oi] (per )?bambini',
  'tagesm', 'kita', 'kinderhort', 'kleinkind', 'ludotec', '0[- ]?3 anni',
].join('|'), 'gi');

/**
 * Riduce un testo alle parti che parlano di servizi 0-3: tutto se è corto, altrimenti finestre attorno
 * alle parole chiave. Serve a tenere l'estrazione leggibile e breve.
 */
export function partiRilevanti(testo: string, massimo = 6000, finestra = 900): string {
  if (testo.length <= massimo) return new RegExp(CHIAVI.source, 'i').test(testo) ? testo : '';
  const intervalli: [number, number][] = [];
  for (const m of testo.matchAll(CHIAVI)) {
    const da = Math.max(0, (m.index ?? 0) - finestra);
    const a = Math.min(testo.length, (m.index ?? 0) + finestra);
    const ultimo = intervalli[intervalli.length - 1];
    if (ultimo && da <= ultimo[1]) ultimo[1] = a;
    else intervalli.push([da, a]);
  }
  let out = '';
  for (const [da, a] of intervalli) {
    if (out.length > massimo) break;
    out += `${out ? '\n[…]\n' : ''}${testo.slice(da, a)}`;
  }
  return out.slice(0, massimo);
}
