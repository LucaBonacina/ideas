import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module';
import { HttpFetchService } from '../service/http-fetch.service';
import { RawStoreService } from '../service/raw-store.service';
import { ImportService } from './import/import.service';
import { StruttureController } from './strutture/strutture.controller';
import { StruttureService } from './strutture/strutture.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StruttureController],
  providers: [HttpFetchService, RawStoreService, ImportService, StruttureService],
  exports: [ImportService],
})
export default class BusinessModule {}
