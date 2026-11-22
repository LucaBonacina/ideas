import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

/** Da dove viene il record: ogni scheda mostra fonte e data (funzione F01). */
@Schema({ _id: false })
export class Provenienza {
  @Prop({ required: true })
    fonte!: string;

  @Prop({ required: true })
    idNellaFonte!: string;

  @Prop()
    url?: string;

  @Prop()
    licenza?: string;

  /** Data di riferimento dichiarata dalla fonte (es. 01/09/2026 per l'anagrafe MIM). */
  @Prop()
    dataRiferimento?: Date;

  @Prop({ required: true })
    scaricatoIl!: Date;
}

export const ProvenienzaSchema = SchemaFactory.createForClass(Provenienza);
