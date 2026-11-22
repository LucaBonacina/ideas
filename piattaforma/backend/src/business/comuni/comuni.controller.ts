import {
  Controller, Get, Param, Query,
} from '@nestjs/common';
import { ComuneDettaglio, ComuneSintesi, ComuniService } from './comuni.service';

@Controller('comuni')
export class ComuniController {
  constructor(private readonly service: ComuniService) {}

  @Get()
  cerca(@Query('q') q = ''): Promise<ComuneSintesi[]> {
    return this.service.cerca(q.slice(0, 60));
  }

  @Get('completezza')
  completezza(): ReturnType<ComuniService['completezzaRegioni']> {
    return this.service.completezzaRegioni();
  }

  @Get(':codiceIstat')
  dettaglio(@Param('codiceIstat') codiceIstat: string): Promise<ComuneDettaglio> {
    return this.service.dettaglio(codiceIstat);
  }
}
