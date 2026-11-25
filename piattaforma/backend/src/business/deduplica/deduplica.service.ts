import { Injectable } from '@nestjs/common';
import { StrutturaRepository } from '../../database/struttura.repository';
import { Struttura } from '../../database/struttura.schema';
import { Tipologia } from '../../domain/tipologia.enum';
import log from '../../log';
import {
  chiaveIndirizzo, contenuto, paroleNome, somiglianza,
} from './somiglianza';

/**
 * Ordine di preferenza delle fonti quando descrivono la stessa struttura: prima i registri
 * regionali completi e aggiornati, poi gli elenchi parziali. Le fonti non elencate vengono dopo.
 */
export const PRIORITA_FONTI = [
  'lombardia-udos', 'fvg-registro-prima-infanzia', 'piemonte-anagrafe-prima-infanzia',
  'lazio-servizi-educativi-accreditati', 'roma-capitale-elenco-servizi-0-3',
  'toscana-nidi-gratis', 'campania-elenco-nidi-micronidi', 'napoli-nidi-privati-autorizzati',
  'puglia-catalogo-zerosei', 'puglia-registro-strutture',
  'trento-elenco-nidi-infanzia', 'trento-nidi-familiari-tagesmutter', 'vda-autorizzazioni-nidi',
  'veneto-servizi-finanziati-ddr', 'veneto-nidi-in-famiglia',
  'emilia-romagna-servizi-autorizzati', 'liguria-albo-servizi-prima-infanzia', 'sicilia-albo-lr22-86-minori',
  'bolzano-microstrutture-prima-infanzia',
  'reggio-emilia-servizi-prima-infanzia', 'bologna-elenco-scuole', 'genova-scuole', 'ferrara-nidi-spazi-bambini',
];

/** Dopo i registri: gli elenchi di finanziamento delle sezioni primavera, poi le pagine dei siti comunali. */
const PRIORITA_SEZIONI_PRIMAVERA = PRIORITA_FONTI.length;
const PRIORITA_SITI_COMUNALI = PRIORITA_FONTI.length + 2;

const FAMIGLIA: Record<string, string> = {
  [Tipologia.NIDO]: 'nido',
  [Tipologia.MICRONIDO]: 'nido',
  [Tipologia.SEZIONE_PRIMAVERA]: 'primavera',
  [Tipologia.SPAZIO_GIOCO]: 'integrativo',
  [Tipologia.CENTRO_BAMBINI_FAMIGLIE]: 'integrativo',
  [Tipologia.SERVIZIO_DOMICILIARE]: 'domiciliare',
};

const priorita = (fonte: string): number => {
  const i = PRIORITA_FONTI.indexOf(fonte);
  if (i >= 0) return i;
  if (fonte.startsWith('sezioni-primavera-')) return PRIORITA_SEZIONI_PRIMAVERA;
  if (fonte === 'siti-comunali') return PRIORITA_SITI_COMUNALI;
  return PRIORITA_FONTI.length + 1;
};

/** Stessa struttura se: stessa famiglia di servizio e nome molto simile, oppure stesso indirizzo e nome compatibile. */
export function stessaStruttura(a: Struttura, b: Struttura): boolean {
  if (a.provenienza.fonte === b.provenienza.fonte) return false;
  if (FAMIGLIA[a.tipologia] !== FAMIGLIA[b.tipologia]) return false;
  if (a.tipologia === Tipologia.SERVIZIO_DOMICILIARE) return false;
  const pa = paroleNome(a.denominazione);
  const pb = paroleNome(b.denominazione);
  const nomi = Math.max(somiglianza(pa, pb), contenuto(pa, pb) ? 0.6 : 0);
  const ia = chiaveIndirizzo(a.indirizzo.via);
  const ib = chiaveIndirizzo(b.indirizzo.via);
  // Due indirizzi completi e diversi: sedi diverse, anche con lo stesso nome (catene, più plessi).
  if (ia && ib && ia !== ib) return false;
  if (nomi >= 0.6) return true;
  return !!ia && ia === ib && nomi >= 0.25;
}

@Injectable()
export class DeduplicaService {
  constructor(private readonly repo: StrutturaRepository) {}

  /**
   * Ricalcola i duplicati tra fonti per i servizi 0-3: la scheda della fonte preferita resta principale
   * e prende dalle altre i campi che le mancano; le altre restano nel database ma non si mostrano.
   */
  async esegui(): Promise<{ gruppi: number; duplicati: number }> {
    const { model } = this.repo;
    await model.updateMany({ fascia: '0-3' }, { $unset: { duplicatoDi: '', altreFonti: '' } });
    const tutte = await model.find({ attiva: true, fascia: '0-3' }).lean<Struttura[]>();
    const perComune = new Map<string, Struttura[]>();
    tutte.forEach((s) => {
      const c = s.indirizzo.codiceIstat;
      perComune.set(c, [...(perComune.get(c) ?? []), s]);
    });
    const operazioni: Parameters<typeof model.bulkWrite>[0] = [];
    let gruppi = 0;
    let duplicati = 0;
    for (const strutture of perComune.values()) {
      if (new Set(strutture.map((s) => s.provenienza.fonte)).size < 2) continue;
      const ordinate = [...strutture].sort((a, b) => priorita(a.provenienza.fonte) - priorita(b.provenienza.fonte));
      const assegnate = new Set<string>();
      for (const principale of ordinate) {
        if (assegnate.has(principale.chiave)) continue;
        const uguali = ordinate.filter((s) => !assegnate.has(s.chiave) && s.chiave !== principale.chiave
          && stessaStruttura(principale, s));
        // Al massimo una struttura per ciascuna altra fonte: due schede della stessa fonte sono strutture diverse.
        const perFonte = new Map<string, Struttura>();
        uguali.forEach((s) => { if (!perFonte.has(s.provenienza.fonte)) perFonte.set(s.provenienza.fonte, s); });
        if (perFonte.size === 0) continue;
        gruppi += 1;
        const integrazioni: Record<string, unknown> = {};
        for (const d of perFonte.values()) {
          assegnate.add(d.chiave);
          duplicati += 1;
          operazioni.push({
            updateOne: { filter: { chiave: d.chiave }, update: { $set: { duplicatoDi: principale.chiave } } },
          });
          if (!principale.indirizzo.via && d.indirizzo.via) integrazioni['indirizzo.via'] ??= d.indirizzo.via;
          if (!principale.indirizzo.cap && d.indirizzo.cap) integrazioni['indirizzo.cap'] ??= d.indirizzo.cap;
          if (!principale.posizione && d.posizione) integrazioni.posizione ??= d.posizione;
          if (!principale.posti && d.posti) integrazioni.posti ??= d.posti;
          if (!principale.contatti?.telefono && d.contatti?.telefono) integrazioni['contatti.telefono'] ??= d.contatti.telefono;
          if (!principale.contatti?.email && d.contatti?.email) integrazioni['contatti.email'] ??= d.contatti.email;
          if (!principale.contatti?.sito && d.contatti?.sito) integrazioni['contatti.sito'] ??= d.contatti.sito;
          if (!principale.accreditamento && d.accreditamento) integrazioni.accreditamento ??= d.accreditamento;
          if (!principale.gestore && d.gestore) integrazioni.gestore ??= d.gestore;
        }
        assegnate.add(principale.chiave);
        operazioni.push({
          updateOne: {
            filter: { chiave: principale.chiave },
            update: { $set: { ...integrazioni, altreFonti: [...perFonte.values()].map((d) => d.chiave) } },
          },
        });
      }
    }
    for (let i = 0; i < operazioni.length; i += 1000) {
      await model.bulkWrite(operazioni.slice(i, i + 1000), { ordered: false });
    }
    log.info('Deduplica completata', { gruppi, duplicati });
    return { gruppi, duplicati };
  }
}
