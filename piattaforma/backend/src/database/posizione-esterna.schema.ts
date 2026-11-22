import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/**
 * Coordinate trovate in una fonte diversa da quella del record (es. Scuola in Chiaro per l'anagrafe MIM).
 * Stanno in una raccolta separata così un nuovo import della fonte principale non le cancella.
 */
@Schema({ timestamps: true, collection: 'posizioni_esterne' })
export class PosizioneEsterna {
  @Prop({ required: true, unique: true })
    chiave!: string;

  /** [longitudine, latitudine] */
  @Prop({ type: [Number], required: true })
    coordinates!: number[];

  @Prop({ required: true })
    fonte!: string;

  /** Telefono della scuola, se la fonte esterna lo dà. */
  @Prop()
    telefono?: string;

  @Prop({ required: true })
    scaricatoIl!: Date;
}

export type PosizioneEsternaDocument = HydratedDocument<PosizioneEsterna>;
export const PosizioneEsternaSchema = SchemaFactory.createForClass(PosizioneEsterna);
