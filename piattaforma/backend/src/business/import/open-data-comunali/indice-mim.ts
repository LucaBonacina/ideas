import { normalizzaNome } from '../../../domain/normalizza';

/** Una scuola dell'infanzia dell'anagrafe MIM (statale o paritaria), ridotta a ciò che serve al confronto. */
export interface ScuolaMim {
  codiceIstat: string;
  denominazione: string;
  via?: string;
}

/** Parole che non distinguono una scuola da un'altra. */
const GENERICHE = new Set([
  'SCUOLA', 'INFANZIA', 'DELL', 'DELLA', 'DI', 'DEL', 'MATERNA', 'PARITARIA', 'COMUNALE', 'STATALE', 'PLESSO', 'PL', 'EX',
  'SC', 'INF', 'POLO', 'LA', 'IL', 'E', 'DE', 'D', 'L', 'PPC', 'SEZIONE',
]);

function parole(testo: string): string[] {
  return normalizzaNome(testo).split(' ').filter((p) => p.length >= 3 && !GENERICHE.has(p));
}

/** "VIA MAURIZIO BUFALINI 16/2" -> { strada: "BUFALINI", civico: "16" } (ultima parola prima del civico). */
function stradaECivico(via: string): { strada?: string; civico?: string } {
  const n = normalizzaNome(via);
  const m = n.match(/^(.*?)\s+(\d+)/);
  const nomi = (m ? m[1] : n).split(' ').filter((p) => p.length >= 3);
  return { strada: nomi[nomi.length - 1], civico: m?.[2] };
}

/**
 * Indice delle scuole dell'infanzia MIM di alcuni comuni, per non importare due volte da un open data comunale
 * una scuola 3-6 che l'anagrafe nazionale ha già. Una scuola è "nel MIM" se una parola distintiva del nome
 * coincide, oppure se strada e numero civico coincidono.
 */
export class IndiceMim {
  private readonly perComune = new Map<string, { parole: Set<string>; strada?: string; civico?: string }[]>();

  constructor(scuole: ScuolaMim[]) {
    for (const s of scuole) {
      const voci = this.perComune.get(s.codiceIstat) ?? [];
      voci.push({ parole: new Set(parole(s.denominazione)), ...stradaECivico(s.via ?? '') });
      this.perComune.set(s.codiceIstat, voci);
    }
  }

  contiene(codiceIstat: string, denominazione: string, via?: string): boolean {
    const voci = this.perComune.get(codiceIstat) ?? [];
    const nome = parole(denominazione);
    const indirizzo = stradaECivico(via ?? '');
    return voci.some((v) => nome.some((p) => v.parole.has(p))
      || (!!indirizzo.strada && !!indirizzo.civico && v.strada === indirizzo.strada && v.civico === indirizzo.civico));
  }
}
