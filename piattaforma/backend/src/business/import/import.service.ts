import { Injectable } from '@nestjs/common';
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
import { PosizioneEsternaRepository } from '../../database/posizione-esterna.repository';
import { Struttura } from '../../database/struttura.schema';
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
  ) {}

  /** Scarica il file (o riusa l'ultimo salvato se offline) e restituisce contenuto e data. */
  private async file(
    fonte: string,
    nome: string,
    url: string,
    offline: boolean,
    tentativi?: number,
  ): Promise<{ dati: Buffer; data: Date }> {
    if (offline) {
      const ultimo = await this.raw.ultimo(fonte, nome);
      if (!ultimo) throw new Error(`Nessun file salvato per ${fonte}/${nome}: eseguire prima senza --offline`);
      return { dati: await this.raw.leggi(ultimo.percorso), data: ultimo.data };
    }
    const dati = await this.http.scarica(url, tentativi);
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
