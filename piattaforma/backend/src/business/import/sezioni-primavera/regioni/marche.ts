import { ElementoPdf } from '../../piemonte/pdf-testo';
import { ElencoSezioniPrimavera, LICENZA_ATTO } from '../elenco';
import { RigaSezionePrimavera } from '../sezioni-primavera.parser';

/**
 * Colonne del prospetto nel decreto, misurate sul PDF. La colonna dell'IBAN (x 410-470) non si legge di proposito:
 * è un dato del gestore che non serve e non va conservato.
 */
const COLONNE = {
  richiedente: [90, 170],
  sezione: [170, 250],
  scuola: [250, 335],
} as const;

/** Inizio di un indirizzo nella cella del comune richiedente o della scuola ospitante. */
const INDIRIZZO = /\b(VIA|VIALE|V\.LE|PIAZZA|PIAZZETTA|P\.ZZA|P\.|CORSO|LARGO|LOC\.|LOCALITA'?|FRAZ\.)\s/;

/** Righe di testo di una cella (dall'alto in basso), unendo gli elementi alla stessa altezza. */
function righeCella(elementi: ElementoPdf[], [da, a]: readonly [number, number]): string[] {
  const righe: { y: number; parti: ElementoPdf[] }[] = [];
  elementi.filter((e) => e.x >= da && e.x < a)
    .sort((p, q) => q.y - p.y)
    .forEach((e) => {
      const riga = righe.find((r) => Math.abs(r.y - e.y) <= 3);
      if (riga) riga.parti.push(e);
      else righe.push({ y: e.y, parti: [e] });
    });
  return righe.map((r) => r.parti.sort((p, q) => p.x - q.x).map((e) => e.testo.trim()).join(' '));
}

const spazi = (testo: string): string => testo.replace(/\s+/g, ' ').trim();

/**
 * Comune richiedente: le righe dopo "COMUNE DI" fino all'indirizzo. Le parole spezzate a capo
 * ("CASTELRAIMOND" / "O") restano separate da uno spazio: la ricerca dei comuni le ritrova senza spazi.
 */
export function comuneRichiedente(righe: string[]): { comune: string; provincia?: string } {
  const testo = spazi(righe.join(' '));
  const provincia = /\(([A-Z]{2})\)$/.exec(testo)?.[1];
  const nome: string[] = [];
  for (const [i, riga] of righe.entries()) {
    const resto = i === 0 ? riga.replace(/^COMUNE DI\s*/i, '') : riga;
    if (INDIRIZZO.test(`${resto} `) && INDIRIZZO.exec(`${resto} `)!.index === 0) break;
    if (resto) nome.push(resto);
  }
  let comune = spazi(nome.join(' ').replace(/\([A-Z]{2}\)/g, ''));
  // Senza indirizzo il nome si ripete come località: "RIPE SAN GINESIO RIPE SAN GINESIO".
  const parole = comune.split(' ');
  const meta = parole.length / 2;
  if (parole.length % 2 === 0 && parole.slice(0, meta).join(' ') === parole.slice(meta).join(' ')) {
    comune = parole.slice(0, meta).join(' ');
  }
  return { comune, provincia };
}

/** Indirizzo della scuola ospitante: dalla via fino al CAP o al nome del comune. */
export function indirizzoScuola(cella: string, comune: string): string | undefined {
  const m = INDIRIZZO.exec(cella);
  if (!m) return undefined;
  let via = cella.slice(m.index).replace(/\s*\([A-Z]{2}\)$/, '').replace(/\s\d{5}\b.*$/, '');
  const fine = via.toUpperCase().lastIndexOf(` ${comune.toUpperCase()}`);
  if (fine > 0) via = via.slice(0, fine);
  return spazi(via) || undefined;
}

/**
 * Il prospetto ha colonne strette e ogni riga occupa 5-10 righe di testo, col numero d'ordine a metà altezza.
 * Ogni riga inizia dove la colonna della sezione dice "SEZIONE" (prima riga della cella "SEZIONE PRIMAVERA ...")
 * e finisce alla riga successiva o, per l'ultima della pagina, simmetricamente rispetto al numero d'ordine.
 */
export function righeMarche(pagine: ElementoPdf[][]): RigaSezionePrimavera[] {
  const risultato: RigaSezionePrimavera[] = [];
  for (const elementi of pagine) {
    const inizi = elementi
      .filter((e) => e.testo.trim() === 'SEZIONE' && e.x >= 185 && e.x < 200)
      .map((e) => e.y)
      .sort((a, b) => b - a);
    inizi.forEach((cima, i) => {
      const numero = elementi.find((e) => /^\d{1,2}$/.test(e.testo.trim()) && e.x >= 65 && e.x < 85
        && e.y < cima && (i === inizi.length - 1 || e.y > inizi[i + 1]));
      if (!numero) return;
      const fondo = Math.max(i < inizi.length - 1 ? inizi[i + 1] + 2 : -Infinity, 2 * numero.y - cima - 6);
      const blocco = elementi.filter((e) => e.y <= cima + 2 && e.y > fondo);
      const { comune, provincia } = comuneRichiedente(righeCella(blocco, COLONNE.richiedente));
      const scuola = spazi(righeCella(blocco, COLONNE.scuola).join(' '));
      risultato.push({
        nome: spazi(righeCella(blocco, COLONNE.sezione).join(' ')),
        comune,
        provincia,
        indirizzo: indirizzoScuola(scuola, comune),
      });
    });
  }
  return risultato;
}

export const MARCHE: ElencoSezioniPrimavera = {
  fonte: 'sezioni-primavera-marche',
  regione: 'Marche',
  atto: 'Decreto USR Marche DDG n. 2440 del 03/11/2026 (rettifica del DDG n. 2230), a.s. 2025/26',
  // Dalla pagina https://www.mim.gov.it/web/miur-usr-marche/-/ddg-n-2440-del-3-novembre-2026-rettifica-del-decreto-
  // di-riparto-dei-contributi-per-le-sezioni-primavera-a-s-2025-2026
  url: 'https://www.mim.gov.it/documents/7501645/10323953/m_pi.AOODRMA.REGISTRO+DECRETI%28R%29.0002440.03-11-2026.pdf/'
    + 'd45b8b99-5710-3a9d-64db-6a5be9a66123?version=1.0&t=1793801391692',
  licenza: LICENZA_ATTO,
  dataRiferimento: new Date('2026-11-03T00:00:00Z'),
  nomeFile: 'decreto-2440-2026.pdf',
  // 15 sezioni nel prospetto dell'art. 1.
  minimo: 13,
  estrai: righeMarche,
};
