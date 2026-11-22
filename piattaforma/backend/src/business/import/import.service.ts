import { Injectable } from '@nestjs/common';
import { ComuneRepository } from '../../database/comune.repository';
import { EsitoSalvataggio, StrutturaRepository } from '../../database/struttura.repository';
import { HttpFetchService } from '../../service/http-fetch.service';
import { RawStoreService } from '../../service/raw-store.service';
import log from '../../log';
import { parseComuniIstat } from './comuni/comuni.parser';
import { ComuniLookup } from './comuni/comuni-lookup';
import { EsitoParsing } from './esito-parsing';
import { FONTE_MIM, FileMim, parseMim } from './mim/mim.parser';
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
  ) {}

  /** Scarica il file (o riusa l'ultimo salvato se offline) e restituisce contenuto e data. */
  private async file(
    fonte: string,
    nome: string,
    url: string,
    offline: boolean,
  ): Promise<{ dati: Buffer; data: Date }> {
    if (offline) {
      const ultimo = await this.raw.ultimo(fonte, nome);
      if (!ultimo) throw new Error(`Nessun file salvato per ${fonte}/${nome}: eseguire prima senza --offline`);
      return { dati: await this.raw.leggi(ultimo.percorso), data: ultimo.data };
    }
    const dati = await this.http.scarica(url);
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
    for (const f of FILE_MIM) {
      const { dati, data } = await this.file(FONTE_MIM, f.nome, f.url, offline);
      const esito = parseMim(dati, f, comuni, data);
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
    if (esito.strutture.length < minimoAtteso) {
      throw new Error(`Import ${fonte} interrotto: ${esito.strutture.length} strutture, attese almeno ${minimoAtteso}`);
    }
    Object.assign(rapporto, await this.strutture.sostituisciFonte(fonte, esito.strutture));
    log.info('Import completato', rapporto);
    return rapporto;
  }
}
