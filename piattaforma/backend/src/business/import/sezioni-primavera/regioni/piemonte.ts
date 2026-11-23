import { ElementoPdf } from '../../piemonte/pdf-testo';
import { codiceMeccanografico } from '../sezioni-primavera.parser';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';

/**
 * Codice dalla cella: a volte ci sono due codici ("TOIC849008- TOAA849048", istituto e plesso) o un suffisso
 * ("VC1A004008SP"). Si prende l'ultimo, che è il plesso dell'infanzia.
 */
function codicePiemonte(cella: string): string | undefined {
  return cella.toUpperCase().split(/[^0-9A-Z]+/).reverse()
    .map((t) => codiceMeccanografico(t.slice(0, 10)))
    .find(Boolean);
}

// Nato dalla fusione di Murisengo e Villadeati: l'elenco ISTAT ha ancora Murisengo, dove sta la sezione.
const COMUNI: Record<string, string> = { 'MURISENGO MONFERRATO': 'Murisengo' };

const PROVINCIA = /^(AL|AT|BI|CN|NO|TO|VB|VC)$/;

const COLONNE: Record<string, [number, number]> = {
  sezione: [45, 235], gestore: [235, 495], codice: [660, 750], comune: [750, 960], provincia: [975, 1000],
};

/**
 * Righe della tabella: le celle andate a capo stanno sotto la riga della sigla della provincia, quindi ogni testo
 * va alla sigla più vicina sopra di lui. Si saltano l'intestazione e i subtotali per ambito territoriale.
 */
export function righePiemonte(pagine: ElementoPdf[][]): Record<string, string>[] {
  return pagine.flatMap((elementi) => {
    const testata = elementi.find((e) => e.testo === 'Meccanografico')?.y ?? Infinity;
    const utili = elementi.filter((e) => e.y < testata - 1 && !/^(Ambito Territoriale|Totale)/i.test(e.testo));
    const ancore = utili.filter((e) => e.x >= 975 && e.x < 1000 && PROVINCIA.test(e.testo))
      .sort((a, b) => b.y - a.y);
    const celle = ancore.map(() => new Map<string, ElementoPdf[]>());
    for (const e of utili) {
      const sopra = ancore.filter((a) => a.y >= e.y - 2);
      const colonna = Object.keys(COLONNE).find((k) => e.x >= COLONNE[k][0] && e.x < COLONNE[k][1]);
      if (!sopra.length || !colonna) continue;
      const cella = celle[sopra.length - 1];
      cella.set(colonna, [...(cella.get(colonna) ?? []), e]);
    }
    return celle.map((cella) => Object.fromEntries(Object.keys(COLONNE).map((k) => [k, (cella.get(k) ?? [])
      .sort((p, q) => (Math.abs(p.y - q.y) > 3 ? q.y - p.y : p.x - q.x)).map((e) => e.testo).join(' ').replace(/\s+/g, ' ')
      .trim()])));
  });
}

export const PIEMONTE: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-piemonte',
  regione: 'Piemonte',
  atto: 'Decreto USR Piemonte prot. n. 10437 del 28/04/2026 (riparto definitivo), a.s. 2025/26',
  url: 'https://www.istruzionepiemonte.it/wp-content/uploads/2026/04/DRPI26-10437-sezprim2526-riparto-allegato1.pdf',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-04-28T00:00:00Z'),
  nomeFile: 'decreto-10437-2026.pdf',
  // 148 sezioni nell'allegato.
  minimo: 125,
  estrai: (pagine) => righePiemonte(pagine).map((r) => ({
    codice: codicePiemonte(r.codice),
    // Il nome della sezione è spesso generico ("PRIMAVERA"): si usa l'ente presso cui è attivata.
    nome: r.gestore || r.sezione,
    // "ALESSANDRIA - SPINETTA MARENGO": comune e frazione; a volte c'è il prefisso "Città :".
    comune: COMUNI[r.comune] ?? r.comune.replace(/^Città\s*:\s*/i, '').split(' - ')[0],
    provincia: r.provincia,
  })),
};
