import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/** Elenco ufficiale dei comuni ISTAT: serve a unire le fonti (codice catastale, nome, provincia). */
@Schema({ timestamps: true, collection: 'comuni' })
export class Comune {
  @Prop({ required: true, unique: true })
    codiceIstat!: string;

  @Prop({ required: true, index: true })
    codiceCatastale!: string;

  @Prop({ required: true })
    nome!: string;

  @Prop()
    nomeAltraLingua?: string;

  /** Nome normalizzato (maiuscolo, senza accenti e punteggiatura) per il confronto con le fonti. */
  @Prop({ required: true, index: true })
    nomeNormalizzato!: string;

  @Prop({ required: true, index: true })
    siglaProvincia!: string;

  @Prop({ required: true })
    regione!: string;
}

export type ComuneDocument = HydratedDocument<Comune>;
export const ComuneSchema = SchemaFactory.createForClass(Comune);
