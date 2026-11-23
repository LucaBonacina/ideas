import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ComuneRepository } from '../../database/comune.repository';
import { EsitoSalvataggio, StrutturaRepository } from '../../database/struttura.repository';
import { HttpFetchService } from '../../service/http-fetch.service';
import { RawStoreService } from '../../service/raw-store.service';
import log from '../../log';
import { parseComuniIstat } from './comuni/comuni.parser';
import { ComuniLookup } from './comuni/comuni-lookup';
import { EsitoParsing } from './esito-parsing';
import {
  FONTE_MIM, FileMim, parseMim, provinceInfanzia,
} from './mim/mim.parser';
import { IscrittiInfanzia } from './mim/iscritti-infanzia';
import {
  FONTE_SCUOLA_IN_CHIARO, PAGINA_SCUOLA_IN_CHIARO, ScuolaSic, inItalia, parseRispostaSic, scuoleInfanziaSic, urlRicerca,
} from './mim/scuola-in-chiaro.parser';
import { FONTE_FVG, PAGINA_FVG, linkFileFvg, parseFvg } from './fvg/fvg.parser';
import { elementiPdf } from './piemonte/pdf-testo';
import {
  FONTE_PIEMONTE, URL_PIEMONTE, parsePiemonte, righeDaPagine,
} from './piemonte/piemonte.parser';
import {
  FONTE_LAZIO_ACCREDITATI, MINIMO_LAZIO_ACCREDITATI, PAGINA_LAZIO_ACCREDITATI, URL_LAZIO_ACCREDITATI,
  dataRiferimentoLazio, linkFileLazio, parseLazioAccreditati, righeDaPagineLazio,
} from './lazio/lazio-accreditati.parser';
import {
  FONTE_ROMA_NIDI, MINIMO_ROMA_NIDI, PAGINA_ROMA_NIDI, URL_ROMA_NIDI,
  dataRiferimentoRoma, linkFileRoma, parseRomaNidi, righeDaPagineRoma,
} from './roma/roma-nidi.parser';
import {
  FONTE_TOSCANA_NIDI_GRATIS, MINIMO_TOSCANA_NIDI_GRATIS, PAGINA_TOSCANA_NIDI_GRATIS, URL_TOSCANA_NIDI_GRATIS,
  linkElencoToscana, parseToscanaNidiGratis, righeDaPagineToscana,
} from './toscana/toscana-nidi-gratis.parser';
import {
  FONTE_PUGLIA_REGISTRO, MINIMO_PUGLIA_REGISTRO, URL_PUGLIA_REGISTRO, parsePugliaRegistro,
} from './puglia/puglia-registro.parser';
import {
  FONTE_PUGLIA_ZEROSEI, MINIMO_PUGLIA_ZEROSEI, URL_PUGLIA_ZEROSEI, parsePugliaZerosei,
} from './puglia/puglia-zerosei.parser';
import {
  FONTE_CAMPANIA_NIDI, MINIMO_CAMPANIA_NIDI, URL_CAMPANIA_NIDI, parseCampaniaNidi, righeDaPagineCampania,
} from './campania/campania-nidi.parser';
import {
  FONTE_NAPOLI_NIDI_PRIVATI, MINIMO_NAPOLI_NIDI_PRIVATI, PAGINA_NAPOLI_NIDI_PRIVATI, URL_NAPOLI_NIDI_PRIVATI,
  linkElencoNapoli, parseNapoliNidiPrivati, righeDaPagineNapoli,
} from './campania/napoli-nidi-privati.parser';
import {
  FONTE_TRENTO_NIDI, MINIMO_TRENTO_NIDI, URL_TRENTO_NIDI, parseTrentoNidi, righeDaPagineTrentoNidi,
} from './trento/trento-nidi.parser';
import {
  FONTE_TRENTO_TAGESMUTTER, MINIMO_TRENTO_TAGESMUTTER, URL_TRENTO_TAGESMUTTER,
  parseTagesmutter, righeDaPagineTagesmutter,
} from './trento/trento-tagesmutter.parser';
import {
  FONTE_VDA, MINIMO_VDA, URL_VDA, parseVda, righeDaPagineVda,
} from './valle-aosta/vda-nidi.parser';
import {
  FONTE_VENETO_DDR, MINIMO_VENETO_DDR, URL_VENETO_DDR, parseVenetoDdr, righeDaPagineVenetoDdr,
} from './veneto/veneto-ddr.parser';
import {
  FONTE_VENETO_NIDI_FAMIGLIA, MINIMO_VENETO_NIDI_FAMIGLIA, URL_VENETO_NIDI_FAMIGLIA, parseNidiFamiglia,
  righeDaPagineNidiFamiglia,
} from './veneto/veneto-nidi-famiglia.parser';
import { FONTE_BOLOGNA, MINIMO_BOLOGNA, URL_BOLOGNA, parseBologna } from './open-data-comunali/bologna.parser';
import { FONTE_FERRARA, MINIMO_FERRARA, URL_FERRARA, parseFerrara } from './open-data-comunali/ferrara.parser';
import { FONTE_GENOVA, MINIMO_GENOVA, URL_GENOVA, parseGenova } from './open-data-comunali/genova.parser';
import {
  FONTE_REGGIO_EMILIA, MINIMO_REGGIO_EMILIA, URL_REGGIO_EMILIA, parseReggioEmilia,
} from './open-data-comunali/reggio-emilia.parser';
import { IndiceMim } from './open-data-comunali/indice-mim';
import { PosizioneEsternaRepository } from '../../database/posizione-esterna.repository';
import { Struttura } from '../../database/struttura.schema';
import { BenchmarkIstat } from '../../database/benchmark-istat.schema';
import { parseBenchmarkIstat, urlBenchmarkIstat } from './istat/istat-benchmark.parser';
import { Gestione } from '../../domain/gestione.enum';
import { Tipologia } from '../../domain/tipologia.enum';
import { normalizzaNome, titoloLeggibile } from '../../domain/normalizza';
import {
  emailPubblicabile, pulisci, telefonoPubblicabile,
} from '../../domain/privacy';
import { FONTE_LOMBARDIA_UDOS, URL_LOMBARDIA_UDOS, parseLombardiaUdos } from './lombardia/lombardia-udos.parser';

export const URL_COMUNI_ISTAT = 'https://www.istat.it/storage/codici-unita-amministrative/Elenco-comuni-italiani.csv';

const BASE_MIM = 'https://dati.istruzione.it/opendata/opendata/catalogo/elements1/';

/** File dell'anagrafe MIM dell'anno scolastico 2026/27 (data di riferimento 01/09/2026). */
export const FILE_MIM: FileMim[] = [
  ['SCUANAGRAFESTAT20262720260901.csv', true],
  ['SCUANAGRAFEPAR20262720260901.csv', false],
  ['SCUANAAUTSTAT20262720260901.csv', true],
  ['SCUANAAUTPAR20262720260901.csv', false],
].map(([nome, statale]) => ({
  nome: nome as string,
  statale: statale as boolean,
  url: `${BASE_MIM}${nome}`,
  dataRiferimento: new Date('2026-09-01T00:00:00Z'),
}));

/** Bambini per età e per orario nelle scuole dell'infanzia (ultimo anno pubblicato: 2024/25). */
export const FILE_MIM_ISCRITTI = [
  'INFANZIAETASTA20242520250831.csv', 'INFANZIAETAPAR20242520250831.csv',
  'INFANZIATEMPOSTA20242520250831.csv', 'INFANZIATEMPOPAR20242520250831.csv',
];

export interface RapportoImport extends Partial<EsitoSalvataggio> {
  fonte: string;
  letti: number;
  scartate: number;
  esempiScarti: string[];
}

@Injectable()
export class ImportService {
  constructor(
    private readonly http: HttpFetchService,
    private readonly raw: RawStoreService,
    private readonly strutture: StrutturaRepository,
    private readonly comuni: ComuneRepository,
    private readonly posizioni: PosizioneEsternaRepository,
    @InjectModel(BenchmarkIstat.name) private readonly benchmark: Model<BenchmarkIstat>,
  ) {}

  /** Conteggi ISTAT dei servizi 0-3 per comune: il metro della completezza. */
  async importaBenchmarkIstat(offline = false, anno = '2024'): Promise<RapportoImport> {
    const { dati } = await this.file('istat-47_850', `servizi-${anno}.csv`, urlBenchmarkIstat(anno), offline, 6, 'application/vnd.sdmx.data+csv');
    const righe = parseBenchmarkIstat(dati);
    if (righe.length < 7000) throw new Error(`Benchmark ISTAT sospetto: ${righe.length} comuni`);
    await this.benchmark.bulkWrite(righe.map((b) => ({
      replaceOne: { filter: { codiceIstat: b.codiceIstat }, replacement: b, upsert: true },
    })), { ordered: false });
    return {
      fonte: 'istat-47_850', letti: righe.length, scartate: 0, esempiScarti: [],
    };
  }

  /** Scarica il file (o riusa l'ultimo salvato se offline) e restituisce contenuto e data. */
  private async file(
    fonte: string,
    nome: string,
    url: string,
    offline: boolean,
    tentativi?: number,
    accept?: string,
  ): Promise<{ dati: Buffer; data: Date }> {
    if (offline) {
      const ultimo = await this.raw.ultimo(fonte, nome);
      if (!ultimo) throw new Error(`Nessun file salvato per ${fonte}/${nome}: eseguire prima senza --offline`);
      return { dati: await this.raw.leggi(ultimo.percorso), data: ultimo.data };
    }
    const dati = await this.http.scarica(url, tentativi, accept);
    const data = new Date();
    const percorso = await this.raw.salva(fonte, nome, dati, data);
    log.info('File salvato', { fonte, percorso, byte: dati.length });
    return { dati, data };
  }

  async importaComuni(offline = false): Promise<RapportoImport> {
    const { dati } = await this.file('istat-comuni', 'Elenco-comuni-italiani.csv', URL_COMUNI_ISTAT, offline);
    const comuni = parseComuniIstat(dati);
    if (comuni.length < 7000) throw new Error(`Elenco comuni sospetto: solo ${comuni.length} righe`);
    await this.comuni.sostituisciTutti(comuni);
    return { fonte: 'istat-comuni', letti: comuni.length, scartate: 0, esempiScarti: [] };
  }

  private async lookup(): Promise<ComuniLookup> {
    const lookup = new ComuniLookup(await this.comuni.tutti());
    if (lookup.dimensione === 0) throw new Error('Elenco comuni vuoto: eseguire prima l\'import "comuni"');
    return lookup;
  }

  async importaMim(offline = false): Promise<RapportoImport> {
    const comuni = await this.lookup();
    const totale: EsitoParsing = { strutture: [], scartate: [] };
    const iscritti = new IscrittiInfanzia();
    for (const nome of FILE_MIM_ISCRITTI) {
      const { dati } = await this.file(FONTE_MIM, nome, `${BASE_MIM}${nome}`, offline);
      iscritti.aggiungi(dati);
    }
    for (const f of FILE_MIM) {
      const { dati, data } = await this.file(FONTE_MIM, f.nome, f.url, offline);
      const esito = parseMim(dati, f, comuni, data);
      esito.strutture.forEach((s) => iscritti.applica(s));
      totale.strutture.push(...esito.strutture);
      totale.scartate.push(...esito.scartate.map((s) => ({ ...s, motivo: `${f.nome}: ${s.motivo}` })));
    }
    return this.salva(FONTE_MIM, totale, 15000);
  }

  async importaLombardia(offline = false): Promise<RapportoImport> {
    const comuni = await this.lookup();
    const { dati, data } = await this.file(FONTE_LOMBARDIA_UDOS, 'pej5-wp65.csv', URL_LOMBARDIA_UDOS, offline);
    return this.salva(FONTE_LOMBARDIA_UDOS, parseLombardiaUdos(dati, comuni, data), 2000);
  }

  async importaFvg(offline = false): Promise<RapportoImport> {
    const comuni = await this.lookup();
    let url = '';
    if (!offline) {
      const pagina = (await this.http.scarica(PAGINA_FVG)).toString('utf8');
      url = linkFileFvg(pagina) ?? '';
      if (!url) throw new Error('Link al registro FVG non trovato nella pagina regionale');
    }
    const { dati, data } = await this.file(FONTE_FVG, 'registro.xlsx', url, offline);
    return this.salva(FONTE_FVG, await parseFvg(dati, url || PAGINA_FVG, comuni, data), 250);
  }

  async importaPiemonte(offline = false): Promise<RapportoImport> {
    const comuni = await this.lookup();
    const { dati, data } = await this.file(FONTE_PIEMONTE, 'anagrafe.pdf', URL_PIEMONTE, offline, 8);
    const righe = righeDaPagine(await elementiPdf(dati));
    return this.salva(FONTE_PIEMONTE, parsePiemonte(righe, comuni, data), 1000);
  }

  /** Link al file corrente letto dalla pagina dell'ente (il nome del file cambia a ogni aggiornamento). */
  private async linkCorrente(
    pagina: string,
    estrai: (html: string) => string | undefined,
    predefinito: string,
  ): Promise<string> {
    try {
      return estrai((await this.http.scarica(pagina)).toString('utf8')) ?? predefinito;
    } catch {
      return predefinito;
    }
  }

  async importaLazio(offline = false): Promise<RapportoImport> {
    const comuni = await this.lookup();
    const url = offline ? URL_LAZIO_ACCREDITATI
      : await this.linkCorrente(PAGINA_LAZIO_ACCREDITATI, linkFileLazio, URL_LAZIO_ACCREDITATI);
    const { dati, data } = await this.file(FONTE_LAZIO_ACCREDITATI, 'accreditati.pdf', url, offline, 5);
    const pagine = await elementiPdf(dati);
    const esito = parseLazioAccreditati(righeDaPagineLazio(pagine), url, comuni, data, dataRiferimentoLazio(pagine));
    return this.salva(FONTE_LAZIO_ACCREDITATI, esito, MINIMO_LAZIO_ACCREDITATI);
  }

  async importaRoma(offline = false): Promise<RapportoImport> {
    const comuni = await this.lookup();
    const url = offline ? URL_ROMA_NIDI : await this.linkCorrente(PAGINA_ROMA_NIDI, linkFileRoma, URL_ROMA_NIDI);
    const { dati, data } = await this.file(FONTE_ROMA_NIDI, 'elenco-strutture.pdf', url, offline, 5);
    const pagine = await elementiPdf(dati);
    const esito = parseRomaNidi(righeDaPagineRoma(pagine), url, comuni, data, dataRiferimentoRoma(pagine));
    return this.salva(FONTE_ROMA_NIDI, esito, MINIMO_ROMA_NIDI);
  }

  async importaToscana(offline = false): Promise<RapportoImport> {
    const comuni = await this.lookup();
    const url = offline ? URL_TOSCANA_NIDI_GRATIS
      : await this.linkCorrente(PAGINA_TOSCANA_NIDI_GRATIS, linkElencoToscana, URL_TOSCANA_NIDI_GRATIS);
    const { dati, data } = await this.file(FONTE_TOSCANA_NIDI_GRATIS, 'elenco-servizi.pdf', url, offline, 6);
    const righe = righeDaPagineToscana(await elementiPdf(dati));
    const esito = parseToscanaNidiGratis(righe, url, comuni, data);
    return this.salva(FONTE_TOSCANA_NIDI_GRATIS, esito, MINIMO_TOSCANA_NIDI_GRATIS);
  }

  async importaPugliaRegistro(offline = false): Promise<RapportoImport> {
    const comuni = await this.lookup();
    const { dati, data } = await this.file(FONTE_PUGLIA_REGISTRO, 'registri.csv', URL_PUGLIA_REGISTRO, offline);
    return this.salva(FONTE_PUGLIA_REGISTRO, parsePugliaRegistro(dati, comuni, data), MINIMO_PUGLIA_REGISTRO);
  }

  async importaPugliaZerosei(offline = false): Promise<RapportoImport> {
    const comuni = await this.lookup();
    const { dati, data } = await this.file(FONTE_PUGLIA_ZEROSEI, 'catalogo.csv', URL_PUGLIA_ZEROSEI, offline);
    return this.salva(FONTE_PUGLIA_ZEROSEI, parsePugliaZerosei(dati, comuni, data), MINIMO_PUGLIA_ZEROSEI);
  }

  async importaCampania(offline = false): Promise<RapportoImport> {
    const comuni = await this.lookup();
    const { dati, data } = await this.file(FONTE_CAMPANIA_NIDI, 'elenco-nidi.pdf', URL_CAMPANIA_NIDI, offline, 6);
    const righe = righeDaPagineCampania(await elementiPdf(dati));
    return this.salva(FONTE_CAMPANIA_NIDI, parseCampaniaNidi(righe, comuni, data), MINIMO_CAMPANIA_NIDI);
  }

  async importaNapoli(offline = false): Promise<RapportoImport> {
    const comuni = await this.lookup();
    const url = offline ? URL_NAPOLI_NIDI_PRIVATI
      : await this.linkCorrente(PAGINA_NAPOLI_NIDI_PRIVATI, linkElencoNapoli, URL_NAPOLI_NIDI_PRIVATI);
    const { dati, data } = await this.file(FONTE_NAPOLI_NIDI_PRIVATI, 'nidi-privati.pdf', url, offline, 6);
    const righe = righeDaPagineNapoli(await elementiPdf(dati));
    const esito = parseNapoliNidiPrivati(righe, url, comuni, data);
    return this.salva(FONTE_NAPOLI_NIDI_PRIVATI, esito, MINIMO_NAPOLI_NIDI_PRIVATI);
  }

  async importaTrento(offline = false): Promise<RapportoImport[]> {
    const comuni = await this.lookup();
    const n = await this.file(FONTE_TRENTO_NIDI, 'nidi.pdf', URL_TRENTO_NIDI, offline);
    const nidi = parseTrentoNidi(righeDaPagineTrentoNidi(await elementiPdf(n.dati), comuni), comuni, n.data);
    const t = await this.file(FONTE_TRENTO_TAGESMUTTER, 'tagesmutter.pdf', URL_TRENTO_TAGESMUTTER, offline);
    const tagesmutter = parseTagesmutter(righeDaPagineTagesmutter(await elementiPdf(t.dati)), comuni, t.data);
    return [
      await this.salva(FONTE_TRENTO_NIDI, nidi, MINIMO_TRENTO_NIDI),
      await this.salva(FONTE_TRENTO_TAGESMUTTER, tagesmutter, MINIMO_TRENTO_TAGESMUTTER),
    ];
  }

  async importaValleAosta(offline = false): Promise<RapportoImport> {
    const comuni = await this.lookup();
    const { dati, data } = await this.file(FONTE_VDA, 'autorizzazioni.pdf', URL_VDA, offline);
    return this.salva(FONTE_VDA, parseVda(righeDaPagineVda(await elementiPdf(dati)), comuni, data), MINIMO_VDA);
  }

  /**
   * Veneto: Nidi in Famiglia (verificato sul file reale, 213/213 righe) e servizi finanziati dal DDR 58/2024
   * (parser non ancora verificato). I siti della Regione non sono raggiungibili da questo ambiente: i file
   * scaricati a mano vanno messi in data/raw/<fonte>/<data>/ e l'import va eseguito con --offline.
   * Un allegato mancante non blocca gli altri.
   */
  async importaVeneto(offline = false): Promise<RapportoImport[]> {
    const comuni = await this.lookup();
    const rapporti: RapportoImport[] = [];
    try {
      const f = await this.file(FONTE_VENETO_NIDI_FAMIGLIA, 'nidi-famiglia.pdf', URL_VENETO_NIDI_FAMIGLIA, offline, 8);
      const famiglia = parseNidiFamiglia(righeDaPagineNidiFamiglia(await elementiPdf(f.dati)), comuni, f.data);
      rapporti.push(await this.salva(FONTE_VENETO_NIDI_FAMIGLIA, famiglia, MINIMO_VENETO_NIDI_FAMIGLIA));
    } catch (e) {
      log.error('Veneto, Nidi in Famiglia non importati', { errore: (e as Error).message });
    }
    try {
      const totale: EsitoParsing = { strutture: [], scartate: [] };
      for (const a of ['C', 'D'] as const) {
        const { dati, data } = await this.file(FONTE_VENETO_DDR, `allegato-${a}.pdf`, URL_VENETO_DDR[a], offline, 8);
        const e = parseVenetoDdr(righeDaPagineVenetoDdr(await elementiPdf(dati)), a, comuni, data);
        totale.strutture.push(...e.strutture);
        totale.scartate.push(...e.scartate.map((x) => ({ ...x, motivo: `${a}: ${x.motivo}` })));
      }
      rapporti.push(await this.salva(FONTE_VENETO_DDR, totale, MINIMO_VENETO_DDR));
    } catch (e) {
      log.error('Veneto, servizi finanziati (DDR 58/2024) non importati', { errore: (e as Error).message });
    }
    return rapporti;
  }

  /** Open data di Bologna, Ferrara, Reggio Emilia e Genova; va eseguito dopo l'anagrafe MIM. */
  async importaComunaliNord(offline = false): Promise<RapportoImport[]> {
    const comuni = await this.lookup();
    const scuole = await this.strutture.model.find(
      { tipologia: Tipologia.SCUOLA_INFANZIA, 'indirizzo.codiceIstat': { $in: ['037006', '010025'] } },
      { 'indirizzo.codiceIstat': 1, denominazione: 1, 'indirizzo.via': 1 },
    ).lean<Struttura[]>();
    const mim = new IndiceMim(scuole.map((x) => ({
      codiceIstat: x.indirizzo.codiceIstat, denominazione: x.denominazione, via: x.indirizzo.via,
    })));
    const bo = await this.file(FONTE_BOLOGNA, 'elenco-delle-scuole.json', URL_BOLOGNA, offline);
    const fe = await this.file(FONTE_FERRARA, 'nido.geojson', URL_FERRARA, offline);
    const ge = await this.file(FONTE_GENOVA, 'scuole.jsonld', URL_GENOVA, offline);
    const re: Record<string, { dati: Buffer; data: Date }> = {};
    for (const k of ['comunali', 'privati', 'fism', 'geo'] as const) {
      re[k] = await this.file(FONTE_REGGIO_EMILIA, `${k}.${k === 'geo' ? 'geojson' : 'csv'}`, URL_REGGIO_EMILIA[k], offline);
    }
    const reggio = parseReggioEmilia({
      comunali: re.comunali.dati, privati: re.privati.dati, fism: re.fism.dati, geo: re.geo.dati,
    }, comuni, re.comunali.data);
    return [
      await this.salva(FONTE_BOLOGNA, parseBologna(bo.dati, comuni, bo.data, mim), MINIMO_BOLOGNA),
      await this.salva(FONTE_FERRARA, parseFerrara(fe.dati, comuni, fe.data), MINIMO_FERRARA),
      await this.salva(FONTE_REGGIO_EMILIA, reggio, MINIMO_REGGIO_EMILIA),
      await this.salva(FONTE_GENOVA, parseGenova(ge.dati, comuni, ge.data, mim), MINIMO_GENOVA),
    ];
  }

  /**
   * Salva solo se il risultato è plausibile: un file troncato o un cambio di formato
   * non deve disattivare migliaia di strutture (circuit breaker, GR-7).
   */
  private async salva(fonte: string, esito: EsitoParsing, minimoAtteso: number): Promise<RapportoImport> {
    const rapporto: RapportoImport = {
      fonte,
      letti: esito.strutture.length,
      scartate: esito.scartate.length,
      esempiScarti: esito.scartate.slice(0, 10).map((s) => `riga ${s.riga}: ${s.motivo}`),
    };
    await this.applicaPosizioniEsterne(fonte, esito.strutture);
    if (esito.strutture.length < minimoAtteso) {
      throw new Error(`Import ${fonte} interrotto: ${esito.strutture.length} strutture, attese almeno ${minimoAtteso}`);
    }
    Object.assign(rapporto, await this.strutture.sostituisciFonte(fonte, esito.strutture));
    log.info('Import completato', rapporto);
    return rapporto;
  }

  /** Aggiunge le coordinate trovate in altre fonti ai record che non le hanno. */
  private async applicaPosizioniEsterne(fonte: string, strutture: Struttura[]): Promise<void> {
    const mappa = await this.posizioni.mappa(`${fonte}:`);
    for (const s of strutture) {
      const esterna = mappa.get(s.chiave);
      if (!s.posizione && esterna) {
        Object.assign(s, { posizione: { type: 'Point', coordinates: esterna.coordinates }, posizioneFonte: esterna.fonte });
      }
      if (esterna?.telefono && !s.contatti.telefono) s.contatti.telefono = esterna.telefono;
    }
  }

  /**
   * Coordinate delle scuole dell'infanzia da Scuola in Chiaro (API pubblica del MIM, non documentata).
   * Una ricerca per provincia restituisce tutte le scuole della provincia: circa 110 richieste lente.
   * Le scuole non trovate si cercano una per una, fino a un massimo prudente.
   */
  async importaCoordinateMim(offline = false, massimoSingole = 3000): Promise<RapportoImport> {
    const provincia = new Map<string, string>();
    for (const f of FILE_MIM) {
      const ultimo = await this.raw.ultimo(FONTE_MIM, f.nome);
      if (!ultimo) throw new Error('File MIM non trovati: eseguire prima l\'import "mim"');
      provinceInfanzia(await this.raw.leggi(ultimo.percorso)).forEach((p, c) => provincia.set(c, p));
    }
    const trovate = new Map<string, [number, number]>();
    const telefoni = new Map<string, string>();
    const nonInAnagrafe = new Map<string, ScuolaSic>();
    const scaricatoIl = new Date();
    const cerca = async (chiave: string, nomeFile: string): Promise<void> => {
      let pagina = 1;
      let totale = Infinity;
      while ((pagina - 1) * PAGINA_SCUOLA_IN_CHIARO < totale) {
        const { dati } = await this.file(FONTE_SCUOLA_IN_CHIARO, `${nomeFile}-p${pagina}.json`, urlRicerca(chiave, pagina), offline);
        const esito = parseRispostaSic(dati);
        esito.coordinate.forEach((c, codice) => { if (provincia.has(codice)) trovate.set(codice, c); });
        esito.telefoni.forEach((t, codice) => { if (provincia.has(codice)) telefoni.set(codice, t); });
        scuoleInfanziaSic(dati).filter((x) => !provincia.has(x.codiceDebole.toUpperCase()))
          .forEach((x) => nonInAnagrafe.set(x.codiceDebole.toUpperCase(), x));
        totale = esito.totale;
        pagina += 1;
      }
    };
    const province = [...new Set(provincia.values())].sort();
    for (const p of province) {
      await cerca(p, `provincia-${p.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
    }
    const mancanti = [...provincia.keys()].filter((c) => !trovate.has(c));
    log.info('Scuole senza coordinate dopo la ricerca per provincia', { mancanti: mancanti.length });
    for (const codice of mancanti.slice(0, massimoSingole)) {
      await cerca(codice, `codice-${codice}`).catch((errore) => {
        log.warn('Ricerca singola non riuscita', { codice, errore: errore instanceof Error ? errore.message : errore });
      });
    }
    const posizioni = [...trovate].map(([codice, coordinates]) => ({
      chiave: `${FONTE_MIM}:${codice}`, coordinates, fonte: FONTE_SCUOLA_IN_CHIARO, scaricatoIl, telefono: telefoni.get(codice),
    }));
    await this.posizioni.salva(posizioni);
    let aggiornate = 0;
    for (let i = 0; i < posizioni.length; i += 1000) {
      const res = await this.strutture.model.bulkWrite(posizioni.slice(i, i + 1000).map((p) => ({
        updateOne: {
          filter: { chiave: p.chiave },
          update: {
            $set: {
              posizione: { type: 'Point', coordinates: p.coordinates },
              posizioneFonte: p.fonte,
              ...(p.telefono ? { 'contatti.telefono': p.telefono } : {}),
            },
          },
        },
      })), { ordered: false });
      aggiornate += res.modifiedCount;
    }
    const aggiunte = await this.salvaScuoleSoloSic([...nonInAnagrafe.values()], scaricatoIl);
    log.info('Scuole presenti solo in Scuola in Chiaro', aggiunte);
    const rapporto: RapportoImport = {
      fonte: FONTE_SCUOLA_IN_CHIARO,
      letti: trovate.size,
      scartate: provincia.size - trovate.size,
      esempiScarti: [...provincia.keys()].filter((c) => !trovate.has(c)).slice(0, 10).map((c) => `senza coordinate: ${c}`),
      aggiornati: aggiornate,
    };
    log.info('Coordinate MIM completate', rapporto);
    return rapporto;
  }

  /**
   * Scuole dell'infanzia presenti in Scuola in Chiaro ma non ancora nell'anagrafe open data
   * (di solito paritarie riconosciute dopo la data di riferimento del file).
   */
  private async salvaScuoleSoloSic(
    scuole: ScuolaSic[],
    scaricatoIl: Date,
  ): Promise<EsitoSalvataggio | { scartate: number }> {
    const comuni = await this.lookup();
    const strutture: Struttura[] = [];
    for (const x of scuole) {
      // Scuola in Chiaro dà il nome del comune e della provincia, non i codici: si accetta solo un nome univoco.
      const omonimi = await this.comuni.model.find({ nomeNormalizzato: normalizzaNome(x.comune ?? '') }, { siglaProvincia: 1 }).lean();
      const comune = omonimi.length === 1 ? comuni.daNome(x.comune ?? '', omonimi[0].siglaProvincia) : undefined;
      if (!comune) continue;
      const lat = Number(x.latitudine);
      const lng = Number(x.longitudine);
      const statale = x.scuolaStatale === '1';
      strutture.push({
        chiave: `${FONTE_SCUOLA_IN_CHIARO}:${x.codiceDebole.toUpperCase()}`,
        denominazione: titoloLeggibile(x.denominazione ?? x.codiceDebole),
        tipologia: Tipologia.SCUOLA_INFANZIA,
        tipologiaOriginale: 'SCUOLA INFANZIA (Scuola in Chiaro)',
        fascia: '3-6',
        gestione: statale ? Gestione.STATALE : Gestione.PARITARIA,
        indirizzo: {
          via: pulisci(x.indirizzo) ? titoloLeggibile(x.indirizzo as string) : undefined,
          cap: pulisci(x.cap),
          comune: comune.nome,
          codiceIstat: comune.codiceIstat,
          codiceCatastale: comune.codiceCatastale,
          siglaProvincia: comune.siglaProvincia,
          regione: comune.regione,
        },
        posizione: Number.isFinite(lat) && Number.isFinite(lng) && inItalia(lat, lng)
          ? { type: 'Point', coordinates: [lng, lat] } : undefined,
        contatti: { email: emailPubblicabile(x.email), telefono: telefonoPubblicabile(x.telefono) },
        misureAderite: [],
        caratteristiche: [],
        provenienza: {
          fonte: FONTE_SCUOLA_IN_CHIARO,
          idNellaFonte: x.codiceDebole.toUpperCase(),
          url: 'https://unica.istruzione.gov.it/sic/',
          licenza: 'non dichiarata dalla fonte (stessi dati dell\'anagrafe IODL 2.0)',
          scaricatoIl,
        },
        attiva: true,
      });
    }
    if (strutture.length === 0) return { scartate: scuole.length };
    return this.strutture.sostituisciFonte(FONTE_SCUOLA_IN_CHIARO, strutture);
  }
}
