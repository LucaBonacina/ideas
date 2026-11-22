import { Injectable, NotFoundException } from '@nestjs/common';
import { FilterQuery, Types } from 'mongoose';
import { StrutturaRepository } from '../../database/struttura.repository';
import { Struttura } from '../../database/struttura.schema';
import { Tipologia } from '../../domain/tipologia.enum';
import { RicercaStruttureDto } from './dto/ricerca-strutture.dto';

export interface PaginaStrutture {
  totale: number;
  pagina: number;
  perPagina: number;
  risultati: Struttura[];
}

function escapeRegex(testo: string): string {
  return testo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

@Injectable()
export class StruttureService {
  constructor(private readonly repo: StrutturaRepository) {}

  async cerca(dto: RicercaStruttureDto): Promise<PaginaStrutture> {
    const filtro: FilterQuery<Struttura> = { attiva: true };
    if (dto.comune) filtro['indirizzo.codiceIstat'] = dto.comune;
    if (dto.provincia) filtro['indirizzo.siglaProvincia'] = dto.provincia.toUpperCase();
    if (dto.tipologia) filtro.tipologia = dto.tipologia;
    // Un polo 0-6 compare sia nella ricerca 0-3 sia in quella 3-6.
    if (dto.fascia) filtro.fascia = { $in: [dto.fascia, '0-6'] };
    if (dto.q) filtro.denominazione = { $regex: escapeRegex(dto.q), $options: 'i' };
    if (dto.lat !== undefined && dto.lng !== undefined) {
      const raggioRad = (dto.raggioKm ?? 5) / 6378.1;
      filtro.posizione = { $geoWithin: { $centerSphere: [[dto.lng, dto.lat], raggioRad] } };
    }
    const pagina = dto.pagina ?? 1;
    const perPagina = dto.perPagina ?? 20;
    const [totale, risultati] = await Promise.all([
      this.repo.model.countDocuments(filtro),
      this.repo.model.find(filtro)
        .sort({ denominazione: 1 })
        .skip((pagina - 1) * perPagina)
        .limit(perPagina)
        .select('-__v')
        .lean<Struttura[]>(),
    ]);
    return {
      totale, pagina, perPagina, risultati,
    };
  }

  async dettaglio(id: string): Promise<Struttura> {
    const trovata = Types.ObjectId.isValid(id)
      ? await this.repo.model.findById(id).lean<Struttura>()
      : await this.repo.model.findOne({ chiave: id }).lean<Struttura>();
    if (!trovata) throw new NotFoundException('Struttura non trovata');
    return trovata;
  }

  /**
   * Copertura dichiarata per regione: quante strutture per tipologia e da quali fonti.
   * Serve a mostrare onestamente dove l'elenco è completo e dove no (F01).
   */
  async copertura(): Promise<Record<string, unknown>[]> {
    return this.repo.model.aggregate([
      { $match: { attiva: true } },
      {
        $group: {
          _id: { regione: '$indirizzo.regione', tipologia: '$tipologia', fonte: '$provenienza.fonte' },
          strutture: { $sum: 1 },
          conPosizione: { $sum: { $cond: [{ $ifNull: ['$posizione', false] }, 1, 0] } },
        },
      },
      { $sort: { '_id.regione': 1, '_id.tipologia': 1 } },
      {
        $project: {
          _id: 0, regione: '$_id.regione', tipologia: '$_id.tipologia', fonte: '$_id.fonte', strutture: 1, conPosizione: 1,
        },
      },
    ]);
  }

  tipologie(): Tipologia[] {
    return Object.values(Tipologia);
  }
}
