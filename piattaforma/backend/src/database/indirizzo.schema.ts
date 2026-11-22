import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Indirizzo {
  @Prop()
    via?: string;

  @Prop()
    cap?: string;

  @Prop({ required: true })
    comune!: string;

  @Prop({ required: true, index: true })
    codiceIstat!: string;

  @Prop()
    codiceCatastale?: string;

  @Prop({ required: true, index: true })
    siglaProvincia!: string;

  @Prop({ required: true, index: true })
    regione!: string;
}

export const IndirizzoSchema = SchemaFactory.createForClass(Indirizzo);
