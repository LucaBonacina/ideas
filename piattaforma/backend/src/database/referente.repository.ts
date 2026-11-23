import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Referente } from './referente.schema';
import { EsitoSalvataggio } from './struttura.repository';

@Injectable()
export class ReferenteRepository {
  constructor(@InjectModel(Referente.name) readonly model: Model<Referente>) {}

  /** Sostituisce i referenti di un ruolo e di una regione; chi non compare più resta come non attivo. */
  async sostituisci(regione: string, ruolo: string, referenti: Referente[]): Promise<EsitoSalvataggio> {
    const esito: EsitoSalvataggio = { inseriti: 0, aggiornati: 0, disattivati: 0 };
    if (referenti.length > 0) {
      const res = await this.model.bulkWrite(referenti.map((r) => ({
        replaceOne: { filter: { codice: r.codice }, replacement: { ...r, attivo: true }, upsert: true },
      })), { ordered: false });
      esito.inseriti = res.upsertedCount;
      esito.aggiornati = res.modifiedCount;
    }
    const dis = await this.model.updateMany(
      { regione, ruolo, codice: { $nin: referenti.map((r) => r.codice) }, attivo: true },
      { $set: { attivo: false } },
    );
    esito.disattivati = dis.modifiedCount;
    return esito;
  }
}
