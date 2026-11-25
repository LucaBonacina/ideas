import { Controller, Get } from '@nestjs/common';
import { FonteAusiliaria } from '../../domain/catalogo-fonti';
import { Fonte, FontiService } from './fonti.service';

@Controller('fonti')
export class FontiController {
  constructor(private readonly fonti: FontiService) {}

  /** Fonti dei dati con licenza, link e date, più le fonti ausiliarie da attribuire (ISTAT, IPA, ANNCSU, OSM). */
  @Get()
  elenco(): Promise<{ fonti: Fonte[]; ausiliarie: FonteAusiliaria[] }> {
    return this.fonti.elenco();
  }
}
