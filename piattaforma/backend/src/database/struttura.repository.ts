import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Struttura } from './struttura.schema';

export interface EsitoSalvataggio {
  inseriti: number;
  aggiornati: number;
  disattivati: number;
}

@Injectable()
export class StrutturaRepository {
  constructor(@InjectModel(Struttura.name) readonly model: Model<Struttura>) {}

  /**
   * Sostituisce i record di una fonte con quelli dell'ultimo import.
   * I record che non compaiono più restano nel database come non attivi (storico delle chiusure).
   */
  async sostituisciFonte(fonte: string, strutture: Struttura[]): Promise<EsitoSalvataggio> {
    const chiavi = strutture.map((s) => s.chiave);
    const esito: EsitoSalvataggio = { inseriti: 0, aggiornati: 0, disattivati: 0 };
    const LOTTO = 1000;
    for (let i = 0; i < strutture.length; i += LOTTO) {
      const ops = strutture.slice(i, i + LOTTO).map((s) => ({
        replaceOne: { filter: { chiave: s.chiave }, replacement: { ...s, attiva: true }, upsert: true },
      }));
      const res = await this.model.bulkWrite(ops, { ordered: false });
      esito.inseriti += res.upsertedCount;
      esito.aggiornati += res.modifiedCount;
    }
    const dis = await this.model.updateMany(
      { 'provenienza.fonte': fonte, chiave: { $nin: chiavi }, attiva: true },
      { $set: { attiva: false } },
    );
    esito.disattivati = dis.modifiedCount;
    return esito;
  }
}
