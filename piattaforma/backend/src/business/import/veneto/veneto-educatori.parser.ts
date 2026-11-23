import { ElementoPdf } from '../piemonte/pdf-testo';

export const FONTE_VENETO_EDUCATORI = 'veneto-educatori-nidi-in-famiglia';

/** Allegato A al DDR n. 40 del 05/05/2025: elenco regionale degli educatori dei Nidi in Famiglia. */
export const PAGINA_VENETO_EDUCATORI = 'https://www.regione.veneto.it/web/sociale/nidi-in-famiglia';

export const DATA_RIFERIMENTO_VENETO_EDUCATORI = new Date('2025-04-04T00:00:00Z');

/** 379 educatori iscritti al 04/04/2025. */
export const MINIMO_VENETO_EDUCATORI = 250;

export interface RigaEducatore {
  codice: string;
  cognome?: string;
  nome?: string;
  email: string[];
  pec?: string;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/** Righe ancorate al codice ENIF; le colonne si leggono dalla posizione delle intestazioni. */
export function righeDaPagineEducatori(pagine: ElementoPdf[][]): RigaEducatore[] {
  const righe: RigaEducatore[] = [];
  for (const elementi of pagine) {
    const x = (re: RegExp): number | undefined => elementi.find((e) => re.test(e.testo.trim()))?.x;
    const xCognome = x(/^Cognome$/i);
    const xNome = x(/^Nome$/i);
    const xEmail = x(/^indirizzo di posta elettronica$/i);
    const xPec = x(/^indirizzo PEC$/i);
    if ([xCognome, xNome, xEmail, xPec].some((v) => v === undefined)) continue;
    const ancore = elementi.filter((e) => /^ENIF\d+$/i.test(e.testo.trim())).sort((a, b) => b.y - a.y);
    ancore.forEach((a, i) => {
      const sopra = Math.min(i > 0 ? (ancore[i - 1].y + a.y) / 2 : a.y + 12, a.y + 12);
      const sotto = Math.max(i < ancore.length - 1 ? (ancore[i + 1].y + a.y) / 2 : a.y - 12, a.y - 12);
      const fin = elementi.filter((e) => e.y < sopra && e.y > sotto).sort((p, q) => q.y - p.y || p.x - q.x);
      const col = (da: number, al: number): string[] => fin
        .filter((e) => e.x >= da - 2 && e.x < al - 2).map((e) => e.testo.trim()).filter((t) => t && t !== '-');
      righe.push({
        codice: a.testo.trim().toUpperCase(),
        cognome: col(xCognome!, xNome!).join(' ') || undefined,
        nome: col(xNome!, xEmail!).join(' ') || undefined,
        email: col(xEmail!, xPec!).filter((t) => EMAIL.test(t)).map((t) => t.toLowerCase()),
        pec: col(xPec!, Infinity).find((t) => EMAIL.test(t))?.toLowerCase(),
      });
    });
  }
  return righe;
}
