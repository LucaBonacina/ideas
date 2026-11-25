import { Comune } from '../../../database/comune.schema';
import { normalizzaNome as normalizzaBase } from '../../../domain/normalizza';

/** Per il confronto tra fonti: anche "J" e "I" si equivalgono (Buja / Buia). */
const normalizzaNome = (nome: string): string => normalizzaBase(nome).replace(/J/g, 'I');

/** Ricerca dei comuni in memoria, per unire le fonti che usano codici o nomi diversi. */
export class ComuniLookup {
  private readonly perCatastale = new Map<string, Comune>();

  private readonly perNomeProvincia = new Map<string, Comune>();

  private readonly perIstat = new Map<string, Comune>();

  private readonly perNomeRegione = new Map<string, Comune | null>();

  /** Nome senza spazi né apostrofi: alcuni PDF perdono gli spazi ("MOTTASANT'ANASTASIA"). */
  private readonly perNomeCompatto = new Map<string, Comune>();

  private readonly tutti: Comune[];

  constructor(comuni: Comune[]) {
    this.tutti = comuni;
    for (const c of comuni) {
      this.perCatastale.set(c.codiceCatastale, c);
      this.perIstat.set(c.codiceIstat, c);
      this.perNomeProvincia.set(`${normalizzaNome(c.nome)}|${c.siglaProvincia}`, c);
      const chiaveRegione = `${normalizzaNome(c.nome)}|${normalizzaNome(c.regione)}`;
      // null se due comuni della stessa regione hanno lo stesso nome: in quel caso serve la provincia.
      this.perNomeRegione.set(chiaveRegione, this.perNomeRegione.has(chiaveRegione) ? null : c);
      this.perNomeCompatto.set(`${normalizzaNome(c.nome).replace(/[^A-Z]/g, '')}|${c.siglaProvincia}`, c);
      if (c.nomeAltraLingua) {
        this.perNomeProvincia.set(`${normalizzaNome(c.nomeAltraLingua)}|${c.siglaProvincia}`, c);
      }
    }
  }

  get dimensione(): number {
    return this.perCatastale.size;
  }

  daCodiceIstat(codice: string): Comune | undefined {
    return this.perIstat.get(codice.trim());
  }

  daCodiceCatastale(codice: string): Comune | undefined {
    return this.perCatastale.get(codice.trim().toUpperCase());
  }

  /** Ricerca per nome e provincia; se la provincia manca, per nome e regione (solo se il nome è univoco). */
  daNome(nome: string, siglaProvincia: string, regione?: string): Comune | undefined {
    if (siglaProvincia.trim()) {
      const sigla = siglaProvincia.trim().toUpperCase();
      return this.perNomeProvincia.get(`${normalizzaNome(nome)}|${sigla}`)
        ?? this.perNomeCompatto.get(`${normalizzaNome(nome).replace(/[^A-Z]/g, '')}|${sigla}`);
    }
    if (!regione) return undefined;
    return this.perNomeRegione.get(`${normalizzaNome(nome)}|${normalizzaNome(regione)}`) ?? undefined;
  }

  /**
   * Comune della provincia il cui nome comincia con quello dato ("Appiano" -> "Appiano sulla strada del vino"),
   * solo se è uno solo.
   */
  daInizioNome(nome: string, siglaProvincia: string): Comune | undefined {
    const n = normalizzaNome(nome);
    if (n.length < 3) return undefined;
    const trovati = this.tutti.filter((c) => c.siglaProvincia === siglaProvincia
      && [c.nome, c.nomeAltraLingua].some((x) => x && normalizzaNome(x).startsWith(`${n} `)));
    return trovati.length === 1 ? trovati[0] : undefined;
  }
}
