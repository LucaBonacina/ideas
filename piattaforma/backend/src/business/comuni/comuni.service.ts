import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BenchmarkIstat } from '../../database/benchmark-istat.schema';
import { TIPI_ISTAT } from '../import/istat/istat-benchmark.parser';
import { ComuneRepository } from '../../database/comune.repository';
import { StrutturaRepository } from '../../database/struttura.repository';
import { normalizzaNome } from '../../domain/normalizza';

export interface ComuneSintesi {
  codiceIstat: string;
  nome: string;
  siglaProvincia: string;
  regione: string;
}

export interface ComuneDettaglio extends ComuneSintesi {
  /** Posizione indicativa: mediana delle strutture geolocalizzate del comune, se ce ne sono. */
  centro?: [number, number];
  conteggi: { fascia: string; tipologia: string; strutture: number }[];
  /** Confronto con il censimento ISTAT dei servizi 0-3, per tipologia. */
  completezza03?: {
    anno: string;
    istat: number;
    nostri: number;
    perTipo: { tipoIstat: string; istat: number; nostri: number }[];
  };
}

function mediana(valori: number[]): number {
  const ordinati = [...valori].sort((a, b) => a - b);
  return ordinati[Math.floor(ordinati.length / 2)];
}

@Injectable()
export class ComuniService {
  constructor(
    private readonly comuni: ComuneRepository,
    private readonly strutture: StrutturaRepository,
    @InjectModel(BenchmarkIstat.name) private readonly benchmark: Model<BenchmarkIstat>,
  ) {}

  /** Suggerimenti per nome: prima i comuni che iniziano con il testo, poi quelli che lo contengono. */
  async cerca(q: string, limite = 10): Promise<ComuneSintesi[]> {
    const testo = normalizzaNome(q).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (testo.length < 2) return [];
    const campi = {
      _id: 0, codiceIstat: 1, nome: 1, siglaProvincia: 1, regione: 1,
    };
    // Prima il nome esatto o più corto ("Bergamo" prima di "Bergamasco"), poi in ordine alfabetico.
    const inizio = (await this.comuni.model.find({ nomeNormalizzato: { $regex: `^${testo}` } }, campi)
      .lean<ComuneSintesi[]>())
      .sort((a, b) => a.nome.length - b.nome.length || a.nome.localeCompare(b.nome, 'it'))
      .slice(0, limite);
    if (inizio.length >= limite) return inizio;
    const contiene = await this.comuni.model.find({
      nomeNormalizzato: { $regex: testo }, codiceIstat: { $nin: inizio.map((c) => c.codiceIstat) },
    }, campi).sort({ nome: 1 }).limit(limite - inizio.length).lean<ComuneSintesi[]>();
    return [...inizio, ...contiene];
  }

  async dettaglio(codiceIstat: string): Promise<ComuneDettaglio> {
    const comune = await this.comuni.model.findOne({ codiceIstat }).lean();
    if (!comune) throw new NotFoundException('Comune non trovato');
    const filtro = { 'indirizzo.codiceIstat': codiceIstat, attiva: true, duplicatoDi: { $exists: false } };
    const [conteggi, posizioni] = await Promise.all([
      this.strutture.model.aggregate<{ fascia: string; tipologia: string; strutture: number }>([
        { $match: filtro },
        { $group: { _id: { fascia: '$fascia', tipologia: '$tipologia' }, strutture: { $sum: 1 } } },
        {
          $project: {
            _id: 0, fascia: '$_id.fascia', tipologia: '$_id.tipologia', strutture: 1,
          },
        },
        { $sort: { fascia: 1, tipologia: 1 } },
      ]),
      this.strutture.model.find({ ...filtro, posizione: { $exists: true } }, { posizione: 1 }).lean(),
    ]);
    const b = await this.benchmark.findOne({ codiceIstat }).lean();
    const nostriPer = (tipi: string[]) => conteggi
      .filter((c) => tipi.includes(c.tipologia)).reduce((t, c) => t + c.strutture, 0);
    const perTipo = Object.entries(TIPI_ISTAT).map(([tipoIstat, tipi]) => ({
      tipoIstat, istat: b?.perTipo?.[tipoIstat] ?? 0, nostri: nostriPer(tipi),
    }));
    const completezza03 = b ? {
      anno: b.anno, istat: b.totale, nostri: perTipo.reduce((t, x) => t + x.nostri, 0), perTipo,
    } : undefined;
    const coordinate = posizioni.map((p) => p.posizione?.coordinates).filter((c): c is number[] => !!c);
    return {
      codiceIstat: comune.codiceIstat,
      nome: comune.nome,
      siglaProvincia: comune.siglaProvincia,
      regione: comune.regione,
      centro: coordinate.length > 0
        ? [mediana(coordinate.map((c) => c[0])), mediana(coordinate.map((c) => c[1]))] : undefined,
      conteggi,
      completezza03,
    };
  }

  /** Completezza 0-3 per regione: nostri servizi contro il censimento ISTAT, e comuni con un buco. */
  async completezzaRegioni(): Promise<{
    regione: string; istat: number; nostri: number; comuniConServizi: number; comuniCompleti: number;
  }[]> {
    const [benchmark, comuni, nostri] = await Promise.all([
      this.benchmark.find({}, { codiceIstat: 1, totale: 1 }).lean(),
      this.comuni.model.find({}, { codiceIstat: 1, regione: 1 }).lean(),
      this.strutture.model.aggregate<{ _id: string; n: number }>([
        { $match: { attiva: true, fascia: '0-3', duplicatoDi: { $exists: false } } },
        { $group: { _id: '$indirizzo.codiceIstat', n: { $sum: 1 } } },
      ]),
    ]);
    const regioneDi = new Map(comuni.map((c) => [c.codiceIstat, c.regione]));
    const nostriDi = new Map(nostri.map((n) => [n._id, n.n]));
    type Conteggi = { istat: number; nostri: number; comuniConServizi: number; comuniCompleti: number };
    const perRegione = new Map<string, Conteggi>();
    for (const b of benchmark) {
      const regione = regioneDi.get(b.codiceIstat);
      if (!regione) continue;
      const r = perRegione.get(regione) ?? {
        istat: 0, nostri: 0, comuniConServizi: 0, comuniCompleti: 0,
      };
      const n = nostriDi.get(b.codiceIstat) ?? 0;
      r.istat += b.totale;
      // Un comune con più schede di quante ne conti ISTAT non compensa i buchi degli altri.
      r.nostri += Math.min(n, b.totale);
      if (b.totale > 0) {
        r.comuniConServizi += 1;
        if (n >= b.totale) r.comuniCompleti += 1;
      }
      perRegione.set(regione, r);
    }
    return [...perRegione.entries()]
      .map(([regione, r]) => ({ regione, ...r }))
      .sort((a, b) => a.regione.localeCompare(b.regione));
  }
}
