import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comune } from './comune.schema';

@Injectable()
export class ComuneRepository {
  constructor(@InjectModel(Comune.name) readonly model: Model<Comune>) {}

  async sostituisciTutti(comuni: Comune[]): Promise<number> {
    const ops = comuni.map((c) => ({
      replaceOne: { filter: { codiceIstat: c.codiceIstat }, replacement: c, upsert: true },
    }));
    await this.model.bulkWrite(ops, { ordered: false });
    return comuni.length;
  }

  async tutti(): Promise<Comune[]> {
    return this.model.find().lean<Comune[]>().exec();
  }
}
