import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('salute')
  salute(): { stato: string } {
    return { stato: 'ok' };
  }
}
