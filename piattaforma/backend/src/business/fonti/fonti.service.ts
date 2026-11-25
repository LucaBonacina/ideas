import { Injectable } from '@nestjs/common';
import { StrutturaRepository } from '../../database/struttura.repository';
import { FONTI_AUSILIARIE, FonteAusiliaria, descrizioneFonte } from '../../domain/catalogo-fonti';

export interface Fonte {
  codice: string;
  nome: string;
  descrizione: string;
  /** Strutture attive che vengono da questa fonte (schede principali e doppioni). */
  strutture: number;
  licenza?: string;
  /** Link alla fonte, se è uno solo; le fonti con più file o pagine (es. siti comunali) non lo hanno. */
  url?: string;
  dataRiferimento?: Date;
  scaricatoIl?: Date;
}

/** Catalogo delle fonti con i numeri reali del database: serve alla pagina fonti e alle attribuzioni di licenza. */
@Injectable()
export class FontiService {
  constructor(private readonly strutture: StrutturaRepository) {}

  async elenco(): Promise<{ fonti: Fonte[]; ausiliarie: FonteAusiliaria[] }> {
    const righe = await this.strutture.model.aggregate<{
      _id: string; n: number; licenze: string[]; url: string[]; dataRiferimento?: Date; scaricatoIl?: Date;
    }>([
      { $match: { attiva: true } },
      {
        $group: {
          _id: '$provenienza.fonte',
          n: { $sum: 1 },
          licenze: { $addToSet: '$provenienza.licenza' },
          url: { $addToSet: '$provenienza.url' },
          dataRiferimento: { $max: '$provenienza.dataRiferimento' },
          scaricatoIl: { $max: '$provenienza.scaricatoIl' },
        },
      },
    ]);
    const fonti = righe.map((r) => ({
      codice: r._id,
      ...descrizioneFonte(r._id),
      strutture: r.n,
      licenza: r.licenze.filter(Boolean).join('; ') || undefined,
      url: r.url.length === 1 ? r.url[0] : undefined,
      dataRiferimento: r.dataRiferimento,
      scaricatoIl: r.scaricatoIl,
    })).sort((a, b) => a.nome.localeCompare(b.nome, 'it'));
    return { fonti, ausiliarie: FONTI_AUSILIARIE };
  }
}
