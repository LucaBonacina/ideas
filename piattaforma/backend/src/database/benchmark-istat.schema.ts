import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/**
 * Conteggio ufficiale dei servizi 0-3 per comune (censimento ISTAT delle unità di offerta).
 * Non è un elenco: serve a misurare quanto è completo il nostro.
 */
@Schema({ timestamps: true, collection: 'benchmark_istat' })
export class BenchmarkIstat {
  @Prop({ required: true, unique: true })
    codiceIstat!: string;

  @Prop({ required: true })
    anno!: string;

  @Prop({ required: true })
    totale!: number;

  /** nidi (compresi micronidi e aziendali), sezioni primavera, spazi gioco, domiciliari, centri bambini-genitori */
  @Prop({ type: Object, required: true })
    perTipo!: Record<string, number>;
}

export type BenchmarkIstatDocument = HydratedDocument<BenchmarkIstat>;
export const BenchmarkIstatSchema = SchemaFactory.createForClass(BenchmarkIstat);
