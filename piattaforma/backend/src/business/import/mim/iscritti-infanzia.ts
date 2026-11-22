import { parse } from 'csv-parse/sync';
import { Struttura } from '../../../database/struttura.schema';

const ORARI: Record<string, string> = {
  'orario ridotto': 'ridotto (25 ore settimanali)',
  'orario normale': 'normale (40 ore settimanali)',
  'orario prolungato': 'prolungato (fino a 50 ore settimanali)',
};

interface DatiScuola {
  bambini: number;
  sotto3: number;
  orari: Set<string>;
  anno?: string;
}

/**
 * Bambini per fascia d'età e per tempo scuola, dai dataset MIM dell'area "Studenti".
 * Un file "per età" e uno "per orario" ciascuno per statali e paritarie; si uniscono per codice scuola.
 */
export class IscrittiInfanzia {
  private readonly perScuola = new Map<string, DatiScuola>();

  aggiungi(contenuto: Buffer): void {
    const righe: Record<string, string>[] = parse(contenuto.toString('utf8').replace(/^\uFEFF/, ''), {
      columns: true, skip_empty_lines: true, relax_column_count: true,
    });
    for (const r of righe) {
      const codice = (r.CODICESCUOLA ?? '').trim().toUpperCase();
      if (!codice) continue;
      const d = this.perScuola.get(codice) ?? { bambini: 0, sotto3: 0, orari: new Set<string>() };
      const anno = (r.ANNOSCOLASTICO ?? '').trim();
      if (anno.length === 6) d.anno = `${anno.slice(0, 4)}/${anno.slice(4)}`;
      if (r.FASCIAETA !== undefined) {
        const n = Number(r.BAMBINI) || 0;
        d.bambini += n;
        if (/< di 3|meno di 3/i.test(r.FASCIAETA)) d.sotto3 += n;
      }
      if (r.TEMPOSCUOLA !== undefined && ORARI[r.TEMPOSCUOLA.trim().toLowerCase()]) {
        const n = (Number(r.BAMBINIMASCHI) || 0) + (Number(r.BAMBINIFEMMINE) || 0);
        if (n > 0) d.orari.add(ORARI[r.TEMPOSCUOLA.trim().toLowerCase()]);
      }
      this.perScuola.set(codice, d);
    }
  }

  applica(s: Struttura): void {
    const d = this.perScuola.get(s.provenienza.idNellaFonte.toUpperCase());
    if (!d) return;
    Object.assign(s, {
      bambiniIscritti: d.bambini > 0 ? d.bambini : undefined,
      annoIscritti: d.anno,
      anticipatari: d.bambini > 0 ? d.sotto3 > 0 : undefined,
      orari: d.orari.size > 0 ? [...d.orari].sort() : undefined,
    });
  }
}
