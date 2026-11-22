import { Injectable, NotFoundException } from '@nestjs/common';
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
    const filtro = { 'indirizzo.codiceIstat': codiceIstat, attiva: true };
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
    const coordinate = posizioni.map((p) => p.posizione?.coordinates).filter((c): c is number[] => !!c);
    return {
      codiceIstat: comune.codiceIstat,
      nome: comune.nome,
      siglaProvincia: comune.siglaProvincia,
      regione: comune.regione,
      centro: coordinate.length > 0
        ? [mediana(coordinate.map((c) => c[0])), mediana(coordinate.map((c) => c[1]))] : undefined,
      conteggi,
    };
  }
}
