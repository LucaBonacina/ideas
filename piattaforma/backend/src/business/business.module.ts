import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module';
import { HttpFetchService } from '../service/http-fetch.service';
import { RawStoreService } from '../service/raw-store.service';
import { ImportService } from './import/import.service';
import { StruttureController } from './strutture/strutture.controller';
import { StruttureService } from './strutture/strutture.service';
import { CalcolatoreController } from './calcolatore/calcolatore.controller';
import { CalcolatoreService } from './calcolatore/calcolatore.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StruttureController, CalcolatoreController],
  providers: [HttpFetchService, RawStoreService, ImportService, StruttureService, CalcolatoreService],
  exports: [ImportService],
})
export default class BusinessModule {}
