import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Tipologia } from '../domain/tipologia.enum';
import { Gestione } from '../domain/gestione.enum';

import { Provenienza } from './provenienza.schema';
import { Indirizzo } from './indirizzo.schema';
import { Contatti } from './contatti.schema';
import { Posizione } from './posizione.schema';

export {
  Provenienza, Indirizzo, Contatti, Posizione,
};

@Schema({ timestamps: true, collection: 'strutture' })
export class Struttura {
  /** Chiave stabile: "<fonte>:<id nella fonte>" */
  @Prop({ required: true, unique: true })
    chiave!: string;

  @Prop({ required: true })
    denominazione!: string;

  @Prop({ required: true, enum: Tipologia, index: true })
    tipologia!: Tipologia;

  /** Tipologia come scritta nella fonte, per controllo e per le regole regionali. */
  @Prop({ required: true })
    tipologiaOriginale!: string;

  @Prop({ required: true, enum: ['0-3', '3-6', '0-6'], index: true })
    fascia!: '0-3' | '3-6' | '0-6';

  @Prop({ required: true, enum: Gestione })
    gestione!: Gestione;

  /** Nome dell'ente gestore, solo se persona giuridica o ente pubblico. */
  @Prop()
    gestore?: string;

  @Prop({ type: Indirizzo, required: true })
    indirizzo!: Indirizzo;

  /** Assente se la struttura è in un'abitazione privata o se non è ancora geocodificata. */
  @Prop({ type: Posizione })
    posizione?: Posizione;

  @Prop()
    posti?: number;

  @Prop({ type: Contatti, default: {} })
    contatti!: Contatti;

  /** Caratteristiche dichiarate dalla fonte (es. "montagna", "lingua slovena", "ospedaliera"). */
  @Prop({ type: [String], default: [] })
    caratteristiche!: string[];

  @Prop({ type: Provenienza, required: true })
    provenienza!: Provenienza;

  /** false se la struttura non compare più nell'ultimo aggiornamento della fonte. */
  @Prop({ default: true, index: true })
    attiva!: boolean;
}

export type StrutturaDocument = HydratedDocument<Struttura>;
export const StrutturaSchema = SchemaFactory.createForClass(Struttura);
StrutturaSchema.index({ posizione: '2dsphere' });
StrutturaSchema.index({ denominazione: 'text', 'indirizzo.comune': 'text' });
StrutturaSchema.index({ 'provenienza.fonte': 1 });
