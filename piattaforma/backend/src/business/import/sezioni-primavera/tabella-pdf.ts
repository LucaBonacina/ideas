import { ElementoPdf } from '../piemonte/pdf-testo';

/**
 * Configurazione di una tabella in un PDF: dove sta l'ancora di ogni riga (es. il numero d'ordine o la sigla
 * della provincia) e i limiti orizzontali delle colonne, misurati sui dati del documento.
 */
export interface ConfigTabella {
  ancora: { da: number; a: number; re: RegExp };
  colonne: Record<string, [number, number]>;
  /**
   * "sopra": le celle andate a capo stanno sopra l'ancora (l'ancora è sull'ultima riga della cella);
   * "vicino": ogni testo va all'ancora più vicina, entro metà della distanza dalle righe accanto.
   */
  assegnazione: 'sopra' | 'vicino';
  /** Testi da ignorare, esatti (intestazioni ripetute in cima alle pagine). */
  ignora?: string[];
  /** Pagine da saltare se un loro testo corrisponde (es. l'elenco delle sezioni non ammesse). */
  escludiPagina?: RegExp;
}

export type RigaTabella = Record<string, string>;

function unisci(elementi: ElementoPdf[]): string {
  return elementi.sort((p, q) => (Math.abs(p.y - q.y) > 3 ? q.y - p.y : p.x - q.x))
    .map((e) => e.testo.trim())
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Ricostruisce le righe di una tabella stampata in PDF, pagina per pagina. */
export function righeTabella(pagine: ElementoPdf[][], cfg: ConfigTabella): RigaTabella[] {
  const righe: RigaTabella[] = [];
  for (const elementi of pagine) {
    if (cfg.escludiPagina && elementi.some((e) => cfg.escludiPagina!.test(e.testo))) continue;
    const ignora = new Set(cfg.ignora ?? []);
    const utili = elementi.filter((e) => e.testo.trim() && !ignora.has(e.testo.trim()));
    const ancore = utili.filter((e) => e.x >= cfg.ancora.da && e.x < cfg.ancora.a && cfg.ancora.re.test(e.testo.trim()))
      .sort((a, b) => b.y - a.y);
    ancore.forEach((a, i) => {
      let sopra: number;
      let sotto: number;
      if (cfg.assegnazione === 'sopra') {
        sopra = i > 0 ? ancore[i - 1].y - 3 : a.y + 40;
        sotto = a.y - 3;
      } else {
        sopra = Math.min(i > 0 ? (ancore[i - 1].y + a.y) / 2 : a.y + 14, a.y + 14);
        sotto = Math.max(i < ancore.length - 1 ? (ancore[i + 1].y + a.y) / 2 : a.y - 14, a.y - 14);
      }
      const finestra = utili.filter((e) => e.y < sopra && e.y >= sotto);
      const riga: RigaTabella = {};
      for (const [nome, [da, al]] of Object.entries(cfg.colonne)) {
        riga[nome] = unisci(finestra.filter((e) => e.x >= da && e.x < al));
      }
      righe.push(riga);
    });
  }
  return righe;
}
