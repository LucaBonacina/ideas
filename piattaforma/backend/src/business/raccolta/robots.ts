/** Regole di robots.txt per tutti i client ("User-agent: *"): basta per non visitare ciò che il sito esclude. */
export class Robots {
  private readonly vietati: RegExp[] = [];

  readonly sitemap: string[] = [];

  constructor(testo: string) {
    let perTutti = false;
    for (const grezza of testo.split(/\r?\n/)) {
      const riga = grezza.replace(/#.*/, '').trim();
      const [chiave, ...resto] = riga.split(':');
      const valore = resto.join(':').trim();
      const k = (chiave ?? '').toLowerCase();
      if (k === 'user-agent') perTutti = valore === '*';
      else if (k === 'disallow' && perTutti && valore) this.vietati.push(Robots.regola(valore));
      else if (k === 'sitemap' && valore) this.sitemap.push(valore);
    }
  }

  /** "*" vale qualunque sequenza, "$" la fine dell'indirizzo; il resto è un prefisso. */
  private static regola(valore: string): RegExp {
    const corpo = valore.replace(/[.+?^{}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*');
    return new RegExp(`^${corpo}`);
  }

  /** percorso comprende anche la query string ("/pagina?s=x"). */
  consentito(percorso: string): boolean {
    return !this.vietati.some((v) => v.test(percorso));
  }
}
