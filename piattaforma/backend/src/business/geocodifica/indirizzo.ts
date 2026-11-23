/**
 * Scompone e normalizza gli indirizzi scritti a mano dalle fonti ("Via F. Antolisei,25", "Via Porpora45",
 * "Taio, frazione Segno, Via Arizona, 16") per confrontarli con gli odonimi dello stradario (ANNCSU e simili).
 */

export interface IndirizzoScomposto {
  /** Odonimo normalizzato: maiuscolo, senza accenti né punteggiatura, abbreviazioni sciolte. */
  odonimo: string;
  civico?: number;
  esponente?: string;
}

const DUG = [
  'VIA', 'VIALE', 'PIAZZA', 'PIAZZALE', 'PIAZZETTA', 'CORSO', 'LARGO', 'VICOLO', 'VICO', 'STRADA', 'STRADONE',
  'STRADELLA', 'CONTRADA', 'LOCALITA', 'BORGO', 'SALITA', 'DISCESA', 'LUNGOMARE', 'LUNGOLAGO', 'LUNGARNO',
  'LUNGOTEVERE', 'TRAVERSA', 'RIONE', 'CALLE', 'FONDAMENTA', 'CAMPO', 'PRATO', 'CIRCONVALLAZIONE', 'GALLERIA',
  'PASSEGGIATA', 'RAMPA', 'SCALINATA', 'VIOTTOLO', 'BELVEDERE', 'PARCO', 'QUARTIERE', 'FRAZIONE', 'CORTE',
  'CONTRA', 'RUGA', 'REGIONE', 'BORGATA', 'CASCINA', 'CANTONE', 'SESTIERE', 'CASALE', 'TRAVERSA', 'SOTTOPORTICO', 'PIAZZOLA', 'GRADINATA', 'CLAUSURA',
];
const DUG_SET = new Set(DUG);

/** Abbreviazioni frequenti nelle fonti, già senza punti. */
const ABBREVIAZIONI: Record<string, string> = {
  V: 'VIA',
  VLE: 'VIALE',
  VL: 'VIALE',
  PZA: 'PIAZZA',
  PZZA: 'PIAZZA',
  PIAZ: 'PIAZZA',
  PLE: 'PIAZZALE',
  PZLE: 'PIAZZALE',
  PTTA: 'PIAZZETTA',
  CSO: 'CORSO',
  LGO: 'LARGO',
  VCO: 'VICOLO',
  STR: 'STRADA',
  LOC: 'LOCALITA',
  CDA: 'CONTRADA',
  CTR: 'CONTRADA',
  TRAV: 'TRAVERSA',
  CIRC: 'CIRCONVALLAZIONE',
  MSGR: 'MONSIGNORE',
  MRI: 'MARTIRI',
  PROF: 'PROFESSORE',
  DOTT: 'DOTTORE',
  GEN: 'GENERALE',
  CAV: 'CAVALIERE',
  ON: 'ONOREVOLE',
  AVV: 'AVVOCATO',
  ING: 'INGEGNERE',
  SS: 'SANTISSIM',
  SANTISSIMO: 'SANTISSIM',
  SANTISSIMA: 'SANTISSIM',
  MONSIGNOR: 'MONSIGNORE',
  MONS: 'MONSIGNORE',
  STA: 'SANTA',
  FLLI: 'FRATELLI',
  FRAZ: 'FRAZIONE',
  FRAZNE: 'FRAZIONE',
  REG: 'REGIONE',
  BGT: 'BORGATA',
  BORG: 'BORGATA',
  STO: 'SANTO',
};

const MESI = new Set(['GENNAIO', 'FEBBRAIO', 'MARZO', 'APRILE', 'MAGGIO', 'GIUGNO', 'LUGLIO', 'AGOSTO',
  'SETTEMBRE', 'OTTOBRE', 'NOVEMBRE', 'DICEMBRE']);

/** Parole che non distinguono una via dall'altra. */
export const PAROLE_VUOTE = new Set(['DI', 'DEL', 'DELLO', 'DELLA', 'DEI', 'DEGLI', 'DELLE', 'DE', 'D', 'E', 'LA', 'LO',
  'IL', 'I', 'GLI', 'LE', 'L', 'AL', 'ALLA', 'ALLE', 'AI', 'AGLI', 'DA', 'IN']);

const ROMANI: Record<string, number> = { I: 1, V: 5, X: 10, L: 50 };

const UNITA = ['', 'UNO', 'DUE', 'TRE', 'QUATTRO', 'CINQUE', 'SEI', 'SETTE', 'OTTO', 'NOVE', 'DIECI', 'UNDICI', 'DODICI',
  'TREDICI', 'QUATTORDICI', 'QUINDICI', 'SEDICI', 'DICIASSETTE', 'DICIOTTO', 'DICIANNOVE'];
const ORDINALI = ['', 'PRIMO', 'SECONDO', 'TERZO', 'QUARTO', 'QUINTO', 'SESTO', 'SETTIMO', 'OTTAVO', 'NONO', 'DECIMO',
  'UNDICESIMO', 'DODICESIMO', 'TREDICESIMO', 'QUATTORDICESIMO', 'QUINDICESIMO', 'SEDICESIMO', 'DICIASSETTESIMO',
  'DICIOTTESIMO', 'DICIANNOVESIMO'];

/** Numeri in lettere da 1 a 39, cardinali e ordinali ("VENTICINQUE", "VENTITREESIMO", "PRIMA"), in cifre. */
const NUMERI_IN_LETTERE: Map<string, number> = (() => {
  const m = new Map<string, number>();
  const decine: [string, number][] = [['VENT', 20], ['TRENT', 30]];
  for (let n = 1; n < 20; n += 1) {
    m.set(UNITA[n], n);
    m.set(ORDINALI[n], n);
    m.set(ORDINALI[n].replace(/O$/, 'A'), n);
  }
  for (const [radice, valore] of decine) {
    m.set(`${radice}I`.replace('TRENTI', 'TRENTA'), valore);
    m.set(`${radice}ESIMO`, valore);
    m.set(`${radice}ESIMA`, valore);
    for (let u = 1; u < 10; u += 1) {
      const unita = UNITA[u];
      const base = /^[UO]/.test(unita) ? radice : `${radice}${radice === 'VENT' ? 'I' : 'A'}`;
      const cardinale = `${base}${unita === 'TRE' ? 'TRE' : unita}`;
      m.set(cardinale, valore + u);
      const ordinale = `${cardinale.replace(/[AEIO]$/, '')}${unita === 'TRE' || unita === 'SEI' ? `${unita.slice(-1)}` : ''}ESIMO`;
      m.set(ordinale, valore + u);
      m.set(ordinale.replace(/O$/, 'A'), valore + u);
    }
  }
  return m;
})();

function daRomano(t: string): number | undefined {
  if (!/^[IVXL]+$/.test(t)) return undefined;
  let tot = 0;
  for (let i = 0; i < t.length; i += 1) {
    const v = ROMANI[t[i]];
    const succ = ROMANI[t[i + 1]] ?? 0;
    tot += v < succ ? -v : v;
  }
  return tot > 0 && tot <= 60 ? tot : undefined;
}

/** "V.le", "P.zza", "C.so", "M.ri": il punto in mezzo alla parola si toglie solo se ne esce un'abbreviazione nota. */
function unisciAbbreviazioni(testo: string): string {
  return testo.replace(/\b([A-Za-z]{1,2})\.([A-Za-z]{1,4})\b/g, (tutto, a: string, b: string) => (
    ABBREVIAZIONI[(a + b).toUpperCase()] ? `${a}${b}` : tutto));
}

function pulisci(testo: string): string {
  return testo.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase()
    .replace(/[’'`´]/g, ' ')
    .replace(/[^A-Z0-9/ ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normalizza un odonimo: abbreviazioni sciolte, date in numeri ("XXV APRILE" e "25 APRILE" diventano uguali),
 * "S." lasciata come iniziale (può essere San, Santa, Santo).
 */
export function normalizzaOdonimo(odonimo: string): string {
  const parole = pulisci(unisciAbbreviazioni(odonimo).replace(/\./g, '. ')).split(' ').filter(Boolean)
    .map((p, i, tutte) => {
      const sciolta = ABBREVIAZIONI[p] && (i === 0 || !['V', 'ON'].includes(p)) ? ABBREVIAZIONI[p] : p;
      const inLettere = NUMERI_IN_LETTERE.get(sciolta);
      if (inLettere !== undefined) return String(inLettere);
      const romano = daRomano(sciolta);
      // Numeri romani: sempre se di più lettere ("XXIII"), le lettere singole solo prima di un mese.
      if (romano !== undefined && (sciolta.length > 1 || MESI.has(tutte[i + 1] ?? ''))) return String(romano);
      return sciolta;
    });
  return parole.join(' ');
}

/** Parole significative di un odonimo, senza DUG né parole vuote; le iniziali (una lettera) a parte. */
export function paroleOdonimo(odonimo: string): { dug?: string; parole: string[]; iniziali: string[] } {
  const p = odonimo.split(' ').filter(Boolean);
  const dug = DUG_SET.has(p[0]) ? p[0] : undefined;
  const senzaDug = dug ? p.slice(1) : p;
  // "D ANNUNZIO" si scrive anche "DANNUNZIO": si tiene anche la forma unita.
  const unite = senzaDug.flatMap((x, i) => (['D', 'L', 'DELL', 'DALL', 'SANT', 'NELL'].includes(x) && senzaDug[i + 1]
    ? [`${x}${senzaDug[i + 1]}`] : []));
  const resto = senzaDug.filter((x) => !PAROLE_VUOTE.has(x));
  return {
    dug,
    parole: [...resto.filter((x) => x.length > 1), ...unite],
    iniziali: resto.filter((x) => x.length === 1),
  };
}

/**
 * Separa via e civico. Il civico è il primo numero dopo il nome della via che non fa parte del nome
 * (es. "Via 4 Novembre 12": 4 è parte del nome, 12 è il civico).
 */
export function scomponiIndirizzo(testo: string): IndirizzoScomposto | undefined {
  let t = pulisci(unisciAbbreviazioni(testo).replace(/\./g, '. ').replace(/([A-Za-z])(\d)/g, '$1 $2'));
  if (!t) return undefined;
  // Se l'indirizzo comincia con località o frazione, si parte dal primo DUG ("TAIO FRAZIONE SEGNO VIA ARIZONA 16").
  const parole = t.split(' ');
  const iDug = parole.findIndex((p, i) => i > 0 && (DUG_SET.has(p) && p !== 'FRAZIONE' && p !== 'LOCALITA'));
  if (iDug > 0 && !DUG_SET.has(parole[0]) && !ABBREVIAZIONI[parole[0]]) t = parole.slice(iDug).join(' ');
  if (/^(FRAZIONE|LOCALITA) /.test(t) && iDug > 0) t = parole.slice(iDug).join(' ');
  // Tutto ciò che segue un trattino o "FRAZ"/"PIANO"/"INT" è un complemento, non la via.
  t = t.replace(/ (FRAZ|FRAZIONE|LOC|LOCALITA|PIANO|INT|INTERNO|SCALA|PRESSO|C O|ANGOLO|ANG) .*$/, '')
    .trim();
  const token = t.split(' ');
  const via: string[] = [];
  let civico: number | undefined;
  let esponente: string | undefined;
  for (let i = 0; i < token.length; i += 1) {
    const p = token[i];
    const numero = /^(\d+)(?:\/?([A-Z]{1,3}|\d{1,2}))?$/.exec(p);
    if (numero && via.length > 0 && !MESI.has(token[i + 1] ?? '')) {
      civico = Number(numero[1]);
      const succ = token[i + 1];
      esponente = numero[2] && /^[A-Z]+$/.test(numero[2]) ? numero[2] : undefined;
      if (!esponente && succ && /^([A-Z]|BIS|TER)$/.test(succ)) esponente = succ;
      if (!esponente && succ === '/' && token[i + 2] && /^[A-Z]$/.test(token[i + 2])) esponente = token[i + 2];
      break;
    }
    if (/^(N|NR|NUM|SNC|SN|SC|S N C)$/.test(p) && via.length > 0) {
      if (p === 'SNC' || p === 'SN' || p === 'SC') break;
      continue;
    }
    if (p !== '/') via.push(p);
  }
  if (via.length === 0) return undefined;
  return { odonimo: normalizzaOdonimo(via.join(' ')), civico, esponente };
}
