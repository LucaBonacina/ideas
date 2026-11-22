import { Comune } from '../../../database/comune.schema';
import { normalizzaNome } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';

/** Lookup dei comuni per i test: [codice ISTAT, nome, sigla provincia, regione]. */
export function comuniDiProva(voci: [string, string, string, string][]): ComuniLookup {
  return new ComuniLookup(voci.map(([codiceIstat, nome, siglaProvincia, regione]): Comune => ({
    codiceIstat, codiceCatastale: `Z${codiceIstat.slice(-3)}`, nome, nomeNormalizzato: normalizzaNome(nome), siglaProvincia, regione,
  })));
}
