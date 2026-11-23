import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Tipologia } from '../domain/tipologia.enum';
import { Gestione } from '../domain/gestione.enum';

import { Provenienza } from './provenienza.schema';
import { Indirizzo } from './indirizzo.schema';
import { Contatti } from './contatti.schema';
import { DatiRiservati } from './dati-riservati.schema';
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

  /** Fonte delle coordinate, se diversa dalla fonte del record. */
  @Prop()
    posizioneFonte?: string;

  @Prop()
    posti?: number;

  /** Età accolte in mesi, se dichiarate dalla fonte. */
  @Prop()
    etaMinimaMesi?: number;

  @Prop()
    etaMassimaMesi?: number;

  /** Accreditamento regionale o comunale, se la fonte lo dice. */
  @Prop({ enum: ['si', 'no', 'in corso'] })
    accreditamento?: 'si' | 'no' | 'in corso';

  /** Bambini iscritti e anno scolastico del dato (scuole dell'infanzia). */
  @Prop()
    bambiniIscritti?: number;

  @Prop()
    annoIscritti?: string;

  /** Accoglie bambini sotto i 3 anni ("anticipatari"), secondo gli iscritti dell'ultimo anno disponibile. */
  @Prop()
    anticipatari?: boolean;

  /** Orari settimanali frequentati: ridotto (25 ore), normale (40), prolungato (fino a 50). */
  @Prop({ type: [String], default: undefined })
    orari?: string[];

  /** Misure di riduzione delle rette a cui la struttura aderisce, secondo la fonte. */
  @Prop({ type: [String], default: [] })
    misureAderite!: string[];

  @Prop({ type: Contatti, default: {} })
    contatti!: Contatti;

  /** Caratteristiche dichiarate dalla fonte (es. "montagna", "lingua slovena", "ospedaliera"). */
  @Prop({ type: [String], default: [] })
    caratteristiche!: string[];

  @Prop({ type: Provenienza, required: true })
    provenienza!: Provenienza;

  /** Chiave della scheda principale, se questa è la stessa struttura descritta da un'altra fonte. */
  @Prop({ index: true })
    duplicatoDi?: string;

  /** Altre fonti che descrivono la stessa struttura (solo sulla scheda principale). */
  @Prop({ type: [String], default: undefined })
    altreFonti?: string[];

  /** Dati conservati ma mai restituiti dall'API: vanno chiesti esplicitamente con select('+riservato'). */
  @Prop({ type: DatiRiservati, select: false })
    riservato?: DatiRiservati;

  /** false se la struttura non compare più nell'ultimo aggiornamento della fonte. */
  @Prop({ default: true, index: true })
    attiva!: boolean;
}

export type StrutturaDocument = HydratedDocument<Struttura>;
export const StrutturaSchema = SchemaFactory.createForClass(Struttura);
StrutturaSchema.index({ posizione: '2dsphere' });
StrutturaSchema.index({ denominazione: 'text', 'indirizzo.comune': 'text' });
StrutturaSchema.index({ 'provenienza.fonte': 1 });
