import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/**
 * Persone che gestiscono o coordinano un servizio, come pubblicate negli atti regionali
 * (es. educatrici e coordinatori dei Nidi in Famiglia del Veneto). Raccolta separata dalle strutture:
 * nessun endpoint pubblico la espone. Serve al prodotto (es. invito a rivendicare la scheda).
 */
@Schema({ timestamps: true, collection: 'referenti' })
export class Referente {
  /** Codice nell'albo della fonte, es. ENIF358 o CRNIF22. */
  @Prop({ required: true, unique: true })
    codice!: string;

  @Prop({ required: true, enum: ['educatore-nido-famiglia', 'coordinatore-nido-famiglia'] })
    ruolo!: string;

  @Prop()
    cognome?: string;

  @Prop()
    nome?: string;

  /** Nome come scritto nell'elenco delle strutture, quando cognome e nome non sono separati. */
  @Prop()
    nomeCompleto?: string;

  @Prop({ type: [String], default: [] })
    email!: string[];

  @Prop()
    pec?: string;

  /** Chiavi delle strutture collegate. */
  @Prop({ type: [String], default: [] })
    strutture!: string[];

  @Prop({ required: true })
    regione!: string;

  /** Atti da cui vengono i dati, con data di riferimento. */
  @Prop({ type: [String], default: [] })
    fonti!: string[];

  @Prop({ required: true })
    dataRiferimento!: Date;

  @Prop({ required: true })
    scaricatoIl!: Date;

  @Prop({ default: true })
    attivo!: boolean;
}

export type ReferenteDocument = HydratedDocument<Referente>;
export const ReferenteSchema = SchemaFactory.createForClass(Referente);
