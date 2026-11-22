import { Comune } from '../../../database/comune.schema';
import { normalizzaNome } from '../../../domain/normalizza';

/** Ricerca dei comuni in memoria, per unire le fonti che usano codici o nomi diversi. */
export class ComuniLookup {
  private readonly perCatastale = new Map<string, Comune>();

  private readonly perNomeProvincia = new Map<string, Comune>();

  constructor(comuni: Comune[]) {
    for (const c of comuni) {
      this.perCatastale.set(c.codiceCatastale, c);
      this.perNomeProvincia.set(`${c.nomeNormalizzato}|${c.siglaProvincia}`, c);
      if (c.nomeAltraLingua) {
        this.perNomeProvincia.set(`${normalizzaNome(c.nomeAltraLingua)}|${c.siglaProvincia}`, c);
      }
    }
  }

  get dimensione(): number {
    return this.perCatastale.size;
  }

  daCodiceCatastale(codice: string): Comune | undefined {
    return this.perCatastale.get(codice.trim().toUpperCase());
  }

  daNome(nome: string, siglaProvincia: string): Comune | undefined {
    return this.perNomeProvincia.get(`${normalizzaNome(nome)}|${siglaProvincia.trim().toUpperCase()}`);
  }
}
