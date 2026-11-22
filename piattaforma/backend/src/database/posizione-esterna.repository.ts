import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PosizioneEsterna } from './posizione-esterna.schema';

@Injectable()
export class PosizioneEsternaRepository {
  constructor(@InjectModel(PosizioneEsterna.name) readonly model: Model<PosizioneEsterna>) {}

  async salva(posizioni: PosizioneEsterna[]): Promise<void> {
    for (let i = 0; i < posizioni.length; i += 1000) {
      await this.model.bulkWrite(posizioni.slice(i, i + 1000).map((p) => ({
        replaceOne: { filter: { chiave: p.chiave }, replacement: p, upsert: true },
      })), { ordered: false });
    }
  }

  async mappa(prefisso: string): Promise<Map<string, PosizioneEsterna>> {
    const righe = await this.model.find({ chiave: { $regex: `^${prefisso}` } }).lean<PosizioneEsterna[]>();
    return new Map(righe.map((r) => [r.chiave, r]));
  }
}
