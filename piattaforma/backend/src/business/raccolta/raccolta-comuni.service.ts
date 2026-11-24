import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { createHash } from 'crypto';
import { mkdir, writeFile, readFile, readdir } from 'fs/promises';
import { join } from 'path';
import { Model } from 'mongoose';
import pLimit from 'p-limit';
import { BenchmarkIstat } from '../../database/benchmark-istat.schema';
import { StrutturaRepository } from '../../database/struttura.repository';
import { ComuneRepository } from '../../database/comune.repository';
import { HttpFetchService } from '../../service/http-fetch.service';
import log from '../../log';
import { Robots } from './robots';
import { linkDi, rilevante, urlDaSitemap } from './pagine-rilevanti';
import { URL_IPA_ENTI, sitiComuni } from './siti-comuni.parser';
import { htmlInTesto, partiRilevanti, pdfInTesto } from './testo-comune';
import { elementiPdf } from '../import/piemonte/pdf-testo';

export interface PaginaRaccolta {
  url: string;
  file: string;
  tipo: 'html' | 'pdf';
  testoLink?: string;
}

export interface EsitoComune {
  codiceIstat: string;
  sito?: string;
  buco: number;
  pagine: PaginaRaccolta[];
  errore?: string;
}

/** Sitemap utili prima (modello AGID dei siti comunali: luoghi e servizi), quelle rumorose mai. */
// eslint-disable-next-line max-len
const SITEMAP_UTILI = /luog|servizi|page|pagin|document|sito_tematico|unita_organizzativa|punto_contatto|scuol|struttur|attachment|allegat|media/i;
// eslint-disable-next-line max-len
const SITEMAP_INUTILI = /biblio|video|notizi|news|event|post|tipi_|category|categor|tag|argoment|persona|incaric|author|agenda|licenz|nav_menu|wp_theme|archive|envira/i;

function prioritaSitemap(url: string): number {
  const nome = url.replace(/^.*\//, '');
  if (SITEMAP_INUTILI.test(nome)) return 9;
  if (/luog|servizi|scuol|struttur/i.test(nome)) return 0;
  if (SITEMAP_UTILI.test(nome)) return /attachment|allegat|media/i.test(nome) ? 2 : 1;
  return 5;
}

const LINK_SEZIONI = /scuol|istruzion|educa|infanzia|servizi[\s_-]*(al|alla|per)[\s_-]*(cittadin|persona|famigli)|famigli|sociale/i; // eslint-disable-line max-len

/**
 * Raccolta comune per comune: per i comuni in cui ISTAT conta più servizi 0-3 di quelli che abbiamo,
 * cerca nel sito istituzionale le pagine e i PDF sui nidi e li salva per l'estrazione.
 */
@Injectable()
export class RaccoltaComuniService {
  private readonly cartella: string;

  constructor(
    config: ConfigService,
    private readonly http: HttpFetchService,
    private readonly strutture: StrutturaRepository,
    private readonly comuni: ComuneRepository,
    @InjectModel(BenchmarkIstat.name) private readonly benchmark: Model<BenchmarkIstat>,
  ) {
    this.cartella = join(config.get<string>('DATA_DIR') || join(process.cwd(), 'data'), 'raw', 'comuni');
  }

  /** Comuni con un buco rispetto a ISTAT, dal più grande, con il numero di servizi mancanti. */
  async comuniConBuco(): Promise<{ codiceIstat: string; buco: number }[]> {
    const [benchmark, nostri] = await Promise.all([
      this.benchmark.find({ totale: { $gt: 0 } }, { codiceIstat: 1, totale: 1 }).lean(),
      this.strutture.model.aggregate<{ _id: string; n: number }>([
        { $match: { attiva: true, fascia: '0-3', duplicatoDi: { $exists: false } } },
        { $group: { _id: '$indirizzo.codiceIstat', n: { $sum: 1 } } },
      ]),
    ]);
    const n = new Map(nostri.map((x) => [x._id, x.n]));
    return benchmark
      .map((b) => ({ codiceIstat: b.codiceIstat, buco: b.totale - (n.get(b.codiceIstat) ?? 0) }))
      .filter((b) => b.buco > 0)
      .sort((a, b) => b.buco - a.buco);
  }

  /**
   * Raccoglie le pagine dei comuni con il buco più grande. Con `regioni` solo quei comuni; i comuni già raccolti
   * (cartella con indice.json) si saltano, così la raccolta si può riprendere a lotti.
   */
  async raccogli(
    limite: number,
    parallelo = 6,
    regioni: string[] = [],
    bucoMinimo = 1,
  ): Promise<{ comuni: number; conPagine: number; pagine: number }> {
    const siti = await sitiComuni(await this.http.scarica(URL_IPA_ENTI));
    const tutti = await this.comuni.tutti();
    const regionePer = new Map(tutti.map((c) => [c.codiceIstat, c.regione]));
    const catastalePer = new Map(tutti.map((c) => [c.codiceIstat, c.codiceCatastale]));
    const fatti = await Promise.all((await this.comuniConBuco()).map(async (c) => ({
      ...c,
      fatto: await readFile(join(this.cartella, c.codiceIstat, 'indice.json')).then(() => true).catch(() => false),
    })));
    const obiettivo = fatti
      .filter((c) => !c.fatto && c.buco >= bucoMinimo && (regioni.length === 0 || regioni.includes(regionePer.get(c.codiceIstat) ?? '')))
      .slice(0, limite);
    const coda = pLimit(parallelo);
    const esiti = await Promise.all(obiettivo.map((c) => coda(async () => {
      const esito = await this.raccogliComune(c.codiceIstat, siti.get(catastalePer.get(c.codiceIstat) ?? ''), c.buco)
        .catch((e: Error) => ({
          codiceIstat: c.codiceIstat, buco: c.buco, pagine: [], errore: e.message,
        } as EsitoComune));
      log.info('Comune raccolto', {
        codiceIstat: c.codiceIstat, buco: c.buco, pagine: esito.pagine.length, errore: esito.errore,
      });
      return esito;
    })));
    return {
      comuni: esiti.length,
      conPagine: esiti.filter((e) => e.pagine.length > 0).length,
      pagine: esiti.reduce((t, e) => t + e.pagine.length, 0),
    };
  }

  private async testo(url: string): Promise<string | undefined> {
    try {
      return (await this.http.scarica(url, 1)).toString('utf8');
    } catch {
      return undefined;
    }
  }

  async raccogliComune(
    codiceIstat: string,
    sito: string | undefined,
    buco: number,
    massimo = Math.min(80, 12 + Math.ceil(buco * 1.5)),
  ): Promise<EsitoComune> {
    const esito: EsitoComune = {
      codiceIstat, sito, buco, pagine: [],
    };
    if (!sito) return this.chiudi({ ...esito, errore: 'sito istituzionale non presente in IPA' });
    let base: URL;
    try { base = new URL(sito); } catch { return this.chiudi({ ...esito, errore: `sito non valido: ${sito}` }); }
    const robots = new Robots((await this.testo(new URL('/robots.txt', base).toString())) ?? '');
    const stessoSito = (u: string) => {
      try {
        const h = new URL(u).host.replace(/^www\./, '');
        const indirizzo = new URL(u);
        return h === base.host.replace(/^www\./, '') && robots.consentito(indirizzo.pathname + indirizzo.search);
      } catch { return false; }
    };
    const candidati = new Map<string, string>();

    // 1. Sitemap: elenco completo delle pagine, se il sito la pubblica.
    const sitemapDaLeggere = [...robots.sitemap, new URL('/sitemap.xml', base).toString()];
    const visteSitemap = new Set<string>();
    while (sitemapDaLeggere.length > 0 && visteSitemap.size < 30) {
      sitemapDaLeggere.sort((a, b) => prioritaSitemap(a) - prioritaSitemap(b));
      const s = sitemapDaLeggere.shift() as string;
      if (visteSitemap.size > 1 && prioritaSitemap(s) === 9) break;
      if (visteSitemap.has(s)) continue;
      visteSitemap.add(s);
      const xml = await this.testo(s);
      if (!xml || !xml.includes('<loc>')) continue;
      for (const u of urlDaSitemap(xml)) {
        if (/\.xml(\.gz)?$/i.test(u)) sitemapDaLeggere.push(u);
        else if (rilevante(u) && stessoSito(u)) candidati.set(u, '');
      }
    }

    log.debug('Sitemap lette', { codiceIstat, sitemap: [...visteSitemap], candidati: candidati.size });

    // 2. Senza sitemap utile: home page e sezioni "scuola / servizi alla persona".
    if (candidati.size < 3) {
      const home = await this.testo(base.toString());
      if (!home && candidati.size === 0) {
        return this.chiudi({ ...esito, errore: 'sito non raggiungibile o rifiuta i client automatici' });
      }
      if (home) {
        const link = linkDi(home ?? '', base.toString()).filter((l) => stessoSito(l.url));
        link.filter((l) => rilevante(l.url, l.testo)).forEach((l) => candidati.set(l.url, l.testo));
        const sezioni = [...new Set(link
          .filter((l) => LINK_SEZIONI.test(l.testo) || LINK_SEZIONI.test(l.url)).map((l) => l.url))];
        for (const s of sezioni.slice(0, 6)) {
          const html = await this.testo(s);
          if (!html) continue;
          linkDi(html, s).filter((l) => stessoSito(l.url) && rilevante(l.url, l.testo))
            .forEach((l) => candidati.set(l.url, l.testo));
        }
      }
    }

    // 3. Scarica le pagine candidate e i PDF pertinenti che contengono.
    const cartella = join(this.cartella, codiceIstat);
    await mkdir(cartella, { recursive: true });
    const punteggio = (u: string) => (/luog|struttur|servizieducativi|sedi|elenco|nidi-d|asili/i.test(u) ? 0 : 1)
      + (/\.pdf(\?|$)/i.test(u) ? 0.5 : 0);
    const daScaricare = [...candidati.entries()].sort((a, b) => punteggio(a[0]) - punteggio(b[0])).slice(0, massimo);
    for (const [url, testoLink] of daScaricare) {
      if (esito.pagine.length >= massimo) break;
      const pdf = /\.pdf(\?|$)/i.test(url);
      let dati: Buffer;
      try { dati = await this.http.scarica(url, 2); } catch { continue; }
      const file = `${createHash('sha1').update(url).digest('hex').slice(0, 12)}.${pdf ? 'pdf' : 'html'}`;
      await writeFile(join(cartella, file), dati);
      esito.pagine.push({
        url, file, tipo: pdf ? 'pdf' : 'html', testoLink: testoLink || undefined,
      });
      if (!pdf) {
        linkDi(dati.toString('utf8'), url)
          .filter((l) => /\.pdf(\?|$)/i.test(l.url) && rilevante(l.url, l.testo) && !candidati.has(l.url))
          .slice(0, 3)
          .forEach((l) => { candidati.set(l.url, l.testo); daScaricare.push([l.url, l.testo]); });
      }
    }
    await writeFile(join(cartella, 'indice.json'), JSON.stringify(esito, null, 1));
    return esito;
  }

  /**
   * Per ogni comune raccolto scrive testo.txt: le parti delle pagine e dei PDF che parlano di servizi 0-3,
   * con l'URL di provenienza. È il materiale da cui si estraggono le strutture.
   */
  async preparaTesti(massimoPerComune = 24000): Promise<{ comuni: number; conTesto: number }> {
    const cartelle = (await readdir(this.cartella, { withFileTypes: true })).filter((d) => d.isDirectory());
    let conTesto = 0;
    for (const d of cartelle) {
      const dir = join(this.cartella, d.name);
      const esito = await readFile(join(dir, 'indice.json'), 'utf8').then((t) => JSON.parse(t) as EsitoComune)
        .catch(() => undefined);
      if (!esito || esito.pagine.length === 0) continue;
      const parti: string[] = [];
      let totale = 0;
      // Prima le pagine che descrivono strutture (luoghi, elenchi, PDF), per ultime notizie e comunicati.
      const peso = (u: string): number => {
        if (/notizi|news|comunicat|event[io]|stampa/i.test(u)) return 3;
        if (/luog|struttur|elenco|sedi|nidi|asil|infanzia/i.test(u)) return 0;
        return /\.pdf/i.test(u) ? 1 : 2;
      };
      for (const p of [...esito.pagine].sort((a, b) => peso(a.url) - peso(b.url))) {
        if (totale > massimoPerComune) break;
        let testo = '';
        try {
          const dati = await readFile(join(dir, p.file));
          testo = p.tipo === 'pdf' ? pdfInTesto(await elementiPdf(dati)) : htmlInTesto(dati.toString('utf8'));
        } catch {
          continue;
        }
        const rilevanti = partiRilevanti(testo);
        if (!rilevanti) continue;
        parti.push(`=== ${p.url}\n${rilevanti}`);
        totale += rilevanti.length;
      }
      if (parti.length === 0) continue;
      await writeFile(join(dir, 'testo.txt'), parti.join('\n\n').slice(0, massimoPerComune));
      conTesto += 1;
    }
    return { comuni: cartelle.length, conTesto };
  }

  /** Salva l'esito di un comune anche quando non ci sono pagine: così non si riprova al giro dopo. */
  private async chiudi(esito: EsitoComune): Promise<EsitoComune> {
    const cartella = join(this.cartella, esito.codiceIstat);
    await mkdir(cartella, { recursive: true });
    await writeFile(join(cartella, 'indice.json'), JSON.stringify(esito, null, 1));
    return esito;
  }
}
