import { normalizzaNome } from '../../domain/normalizza';

/** Parole che non distinguono una struttura dall'altra. */
const PAROLE_VUOTE = new Set([
  'ASILO', 'ASILI', 'NIDO', 'NIDI', 'MICRONIDO', 'MICRO', 'D', 'DI', 'DEL', 'DELLA', 'DELLE', 'DEI', 'DELL', 'INFANZIA',
  'COMUNALE', 'COMUNALI', 'SCUOLA', 'IL', 'LA', 'LE', 'LO', 'I', 'GLI', 'L', 'E', 'A', 'AL', 'ALLA', 'SEZIONE', 'PRIMAVERA',
  'SPAZIO', 'GIOCO', 'CENTRO', 'SERVIZIO', 'EDUCATIVO', 'PRIMA', 'SRL', 'SNC', 'SAS', 'COOP', 'COOPERATIVA', 'SOCIALE',
  'ONLUS', 'APS', 'ETS', 'C', 'O', 'CO', 'PRESSO', 'AZIENDALE', 'BABY', 'BIMBI', 'BAMBINI', 'SOC', 'SOCIETA', 'ARL',
  'CENTRO', 'LUDICO', 'LUDICA', 'LUDOTECA', 'PER',
]);

export function paroleNome(nome: string): Set<string> {
  return new Set(normalizzaNome(nome).split(' ').filter((p) => p.length > 1 && !PAROLE_VUOTE.has(p)));
}

/** Indice di Jaccard tra due insiemi di parole (0 = nulla in comune, 1 = identici). */
export function somiglianza(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let comuni = 0;
  a.forEach((p) => { if (b.has(p)) comuni += 1; });
  return comuni / (a.size + b.size - comuni);
}

// eslint-disable-next-line max-len
const TIPI_STRADA = /^(VIA|VIALE|V LE|PIAZZA|P ZZA|PZA|CORSO|C SO|LARGO|VICOLO|VICO|STRADA|LOCALITA|LOC|FRAZIONE|FRAZ|CONTRADA|C DA|PIAZZALE|BORGO|SALITA|LUNGOTEVERE|LUNGOMARE|VIA DEL|VIA DELLA)\s+/;

/** "Via A. Meucci, 4" e "VIA ANTONIO MEUCCI 4/A" -> "MEUCCI 4": cognome della via e numero civico. */
export function chiaveIndirizzo(via: string | undefined): string | undefined {
  if (!via) return undefined;
  const n = normalizzaNome(via).replace(TIPI_STRADA, '');
  // La via è ciò che precede il primo numero civico; quello che segue (piano, scala, interno) si ignora.
  const m = n.match(/^(.*?)\b(\d+)/);
  if (!m) return undefined;
  const parole = m[1].split(' ').filter((p) => p.length > 2);
  if (parole.length === 0) return undefined;
  return `${parole[parole.length - 1]} ${m[2]}`;
}

/** Un nome contenuto nell'altro ("Fly Family" e "Fly Family Soc. Coop. Orlando"), con almeno due parole distintive. */
export function contenuto(a: Set<string>, b: Set<string>): boolean {
  const [piccolo, grande] = a.size <= b.size ? [a, b] : [b, a];
  if (piccolo.size < 2) return false;
  let tutti = true;
  piccolo.forEach((p) => { if (!grande.has(p)) tutti = false; });
  return tutti;
}
