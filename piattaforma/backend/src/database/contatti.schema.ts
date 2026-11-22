import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Contatti {
  @Prop()
    email?: string;

  @Prop()
    pec?: string;

  @Prop()
    sito?: string;

  @Prop()
    telefono?: string;
}

export const ContattiSchema = SchemaFactory.createForClass(Contatti);
