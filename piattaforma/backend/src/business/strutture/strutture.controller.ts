import { Controller, Get, Param, Query } from '@nestjs/common';
import { RicercaStruttureDto } from './dto/ricerca-strutture.dto';
import { PaginaStrutture, StruttureService } from './strutture.service';
import { Struttura } from '../../database/struttura.schema';

@Controller('strutture')
export class StruttureController {
  constructor(private readonly service: StruttureService) {}

  @Get()
  cerca(@Query() query: RicercaStruttureDto): Promise<PaginaStrutture> {
    return this.service.cerca(query);
  }

  @Get('copertura')
  copertura(): Promise<Record<string, unknown>[]> {
    return this.service.copertura();
  }

  @Get(':id')
  dettaglio(@Param('id') id: string): Promise<Struttura> {
    return this.service.dettaglio(id);
  }
}
