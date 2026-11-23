import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

/**
 * Dati della fonte che si conservano ma che l'API non restituisce (select: false sullo schema Struttura):
 * cosa mostrare lo decide il prodotto. Esempio: nome e indirizzo reali dei Nidi in Famiglia, che coincidono
 * con l'abitazione dell'educatrice.
 */
@Schema({ _id: false })
export class DatiRiservati {
  @Prop()
    denominazione?: string;

  @Prop()
    via?: string;

  @Prop()
    cap?: string;

  /** Codici dei referenti collegati (raccolta referenti), es. ENIF358, CRNIF22. */
  @Prop({ type: [String], default: undefined })
    referenti?: string[];
}

export const DatiRiservatiSchema = SchemaFactory.createForClass(DatiRiservati);
