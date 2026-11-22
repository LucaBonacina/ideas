import {
  BadRequestException, Body, Controller, HttpCode, Post,
} from '@nestjs/common';
import { EsitoCostoNetto } from '../../domain/calcolo/costo-netto';
import { CalcolatoreService } from './calcolatore.service';
import { CostoNettoDto } from './dto/costo-netto.dto';

@Controller('calcolatore')
export class CalcolatoreController {
  constructor(private readonly service: CalcolatoreService) {}

  @Post('costo-netto')
  @HttpCode(200)
  async costoNetto(@Body() dto: CostoNettoDto): Promise<EsitoCostoNetto> {
    try {
      return await this.service.costoNetto(dto);
    } catch (errore) {
      if (errore instanceof Error && /mesi|retta/.test(errore.message)) throw new BadRequestException(errore.message);
      throw errore;
    }
  }
}
