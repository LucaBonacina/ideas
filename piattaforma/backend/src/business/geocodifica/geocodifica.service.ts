import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { execFileSync } from 'child_process';
import { createReadStream, existsSync } from 'fs';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { createInterface } from 'readline';
import { createGunzip } from 'zlib';
import { StrutturaRepository } from '../../database/struttura.repository';
import { PosizioneEsternaRepository } from '../../database/posizione-esterna.repository';
import { PosizioneEsterna } from '../../database/posizione-esterna.schema';
import { Struttura } from '../../database/struttura.schema';
import { Tipologia } from '../../domain/tipologia.enum';
import log from '../../log';
import { scomponiIndirizzo } from './indirizzo';
import { Geocodifica, IndiceCivici } from './indice-civici';

/** Cartella dei file grezzi dello stradario: un .csv.gz per provincia (civici_<regione>_<SIGLA>.csv.gz). */
export const FONTE_CIVICI = 'civici-utente';

export interface RapportoGeocodifica {
  daGeocodificare: number;
  geocodificate: number;
  perPrecisione: Record<string, number>;
  perFonte: Record<string, number>;
  senzaIndirizzoLeggibile: number;
  /** Strutture in comuni per cui lo stradario non ha nessun civico: buchi dello stradario, non dell'abbinamento. */
  inComuniSenzaCivici: number;
  nonTrovatePerRegione: Record<string, number>;
  provinceSenzaFile: string[];
  esempiNonTrovati: string[];
}

/**
 * Geocodifica le strutture che hanno l'indirizzo ma non le coordinate, con lo stradario dei civici
 * (ANNCSU integrato con fonti regionali e OpenStreetMap). Le coordinate trovate vanno anche in
 * posizioni_esterne, così sopravvivono ai nuovi import delle fonti.
 * I servizi domiciliari restano esclusi: il loro indirizzo è l'abitazione di una persona.
 */
@Injectable()
export class GeocodificaService {
  private readonly radice: string;

  constructor(
    config: ConfigService,
    private readonly strutture: StrutturaRepository,
    private readonly posizioni: PosizioneEsternaRepository,
  ) {
    this.radice = join(config.get<string>('DATA_DIR') || join(process.cwd(), 'data'), 'raw', FONTE_CIVICI);
  }

  async esegui(): Promise<RapportoGeocodifica> {
    const cartella = await this.cartellaCivici();
    const file = (await readdir(cartella)).filter((f) => f.endsWith('.csv.gz'));
    const filePerProvincia = new Map(file.map((f) => [/_([A-Z]{2})\.csv\.gz$/.exec(f)?.[1] ?? f, join(cartella, f)]));
    const da = await this.strutture.model.find({
      attiva: true,
      posizione: { $exists: false },
      tipologia: { $ne: Tipologia.SERVIZIO_DOMICILIARE },
      'indirizzo.via': { $exists: true, $ne: '' },
    }, { chiave: 1, indirizzo: 1 }).lean<Struttura[]>();
    const rapporto: RapportoGeocodifica = {
      daGeocodificare: da.length,
      geocodificate: 0,
      perPrecisione: {},
      perFonte: {},
      senzaIndirizzoLeggibile: 0,
      inComuniSenzaCivici: 0,
      nonTrovatePerRegione: {},
      provinceSenzaFile: [],
      esempiNonTrovati: [],
    };
    const perProvincia = new Map<string, Struttura[]>();
    for (const s of da) {
      const lista = perProvincia.get(s.indirizzo.siglaProvincia) ?? [];
      lista.push(s);
      perProvincia.set(s.indirizzo.siglaProvincia, lista);
    }
    const trovate: PosizioneEsterna[] = [];
    for (const [sigla, lista] of [...perProvincia.entries()].sort()) {
      const percorso = filePerProvincia.get(sigla);
      if (!percorso) {
        rapporto.provinceSenzaFile.push(sigla);
        continue;
      }
      const indici = await this.leggiProvincia(percorso, new Set(lista.map((s) => s.indirizzo.codiceIstat)));
      for (const s of lista) {
        const scomposto = scomponiIndirizzo(s.indirizzo.via!);
        if (!scomposto) {
          rapporto.senzaIndirizzoLeggibile += 1;
          continue;
        }
        const indice = indici.get(s.indirizzo.codiceIstat);
        const g: Geocodifica | undefined = indice?.trova(scomposto);
        if (!g) {
          const r = s.indirizzo.regione;
          rapporto.nonTrovatePerRegione[r] = (rapporto.nonTrovatePerRegione[r] ?? 0) + 1;
          if (!indice) {
            rapporto.inComuniSenzaCivici += 1;
            continue;
          }
          if (rapporto.esempiNonTrovati.length < 40) {
            rapporto.esempiNonTrovati.push(`${s.indirizzo.comune}: ${s.indirizzo.via}`);
          }
          continue;
        }
        rapporto.perPrecisione[g.precisione] = (rapporto.perPrecisione[g.precisione] ?? 0) + 1;
        const fonte = g.fonte.split('@')[0];
        rapporto.perFonte[fonte] = (rapporto.perFonte[fonte] ?? 0) + 1;
        trovate.push({
          chiave: s.chiave,
          coordinates: [g.lon, g.lat],
          fonte: `civici:${g.fonte}`,
          precisione: g.precisione,
          scaricatoIl: new Date(),
        });
      }
      log.info('Geocodifica provincia', { sigla, strutture: lista.length, trovateFinora: trovate.length });
    }
    await this.posizioni.salva(trovate);
    for (let i = 0; i < trovate.length; i += 1000) {
      await this.strutture.model.bulkWrite(trovate.slice(i, i + 1000).map((p) => ({
        updateOne: {
          filter: { chiave: p.chiave, posizione: { $exists: false } },
          update: {
            $set: {
              posizione: { type: 'Point', coordinates: p.coordinates },
              posizioneFonte: p.fonte,
              posizionePrecisione: p.precisione,
            },
          },
        },
      })), { ordered: false });
    }
    rapporto.geocodificate = trovate.length;
    return rapporto;
  }

  /** Ultima cartella dello stradario; se c'è solo lo zip lo estrae. */
  private async cartellaCivici(): Promise<string> {
    const giorni = (await readdir(this.radice).catch(() => [] as string[])).filter((g) => /^\d{4}-\d{2}-\d{2}$/.test(g))
      .sort().reverse();
    if (giorni.length === 0) throw new Error(`Nessuno stradario in ${this.radice}`);
    const giorno = join(this.radice, giorni[0]);
    const trovaCartella = async (): Promise<string | undefined> => {
      const voci = await readdir(giorno, { withFileTypes: true });
      const d = voci.find((v) => v.isDirectory() && v.name.startsWith('export_civici'));
      return d ? join(giorno, d.name) : undefined;
    };
    const esistente = await trovaCartella();
    if (esistente) return esistente;
    const zip = (await readdir(giorno)).find((f) => f.endsWith('.zip'));
    if (!zip) throw new Error(`Nessuno zip dello stradario in ${giorno}`);
    execFileSync('unzip', ['-qo', join(giorno, zip), '-x', '__MACOSX/*', '-d', giorno]);
    const estratta = await trovaCartella();
    if (!estratta || !existsSync(estratta)) throw new Error('Estrazione dello stradario non riuscita');
    return estratta;
  }

  /** Legge un file provinciale tenendo solo i comuni che servono. */
  private async leggiProvincia(percorso: string, comuni: Set<string>): Promise<Map<string, IndiceCivici>> {
    const indici = new Map<string, IndiceCivici>();
    const righe = createInterface({ input: createReadStream(percorso).pipe(createGunzip()), crlfDelay: Infinity });
    let intestazione: string[] | undefined;
    let col: Record<string, number> = {};
    for await (const riga of righe) {
      if (!intestazione) {
        intestazione = (riga.startsWith('\uFEFF') ? riga.slice(1) : riga).split(';');
        col = Object.fromEntries(intestazione.map((c, i) => [c.trim(), i]));
        continue;
      }
      const istat = riga.slice(0, 6);
      if (!comuni.has(istat)) continue;
      const c = riga.split(';');
      let indice = indici.get(istat);
      if (!indice) {
        indice = new IndiceCivici();
        indici.set(istat, indice);
      }
      indice.aggiungi(
        c[col.odonimo] ?? '',
        c[col.civico] ?? '',
        c[col.esponente] ?? '',
        Number(c[col.lat]),
        Number(c[col.lon]),
        c[col.fonte_posizione] || c[col.fonte_civico] || 'sconosciuta',
      );
    }
    return indici;
  }
}
