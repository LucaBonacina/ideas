import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Posizione {
  @Prop({ type: String, enum: ['Point'], default: 'Point' })
    type!: 'Point';

  /** [longitudine, latitudine] come da GeoJSON */
  @Prop({ type: [Number], required: true })
    coordinates!: number[];
}

export const PosizioneSchema = SchemaFactory.createForClass(Posizione);
