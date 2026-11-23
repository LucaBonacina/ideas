import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module';
import { HttpFetchService } from '../service/http-fetch.service';
import { RawStoreService } from '../service/raw-store.service';
import { ImportService } from './import/import.service';
import { StruttureController } from './strutture/strutture.controller';
import { StruttureService } from './strutture/strutture.service';
import { CalcolatoreController } from './calcolatore/calcolatore.controller';
import { CalcolatoreService } from './calcolatore/calcolatore.service';
import { ComuniController } from './comuni/comuni.controller';
import { ComuniService } from './comuni/comuni.service';
import { RaccoltaComuniService } from './raccolta/raccolta-comuni.service';
import { DeduplicaService } from './deduplica/deduplica.service';
import { GeocodificaService } from './geocodifica/geocodifica.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StruttureController, CalcolatoreController, ComuniController],
  providers: [
    HttpFetchService, RawStoreService, ImportService, StruttureService, CalcolatoreService, ComuniService,
    RaccoltaComuniService, DeduplicaService, GeocodificaService,
  ],
  exports: [ImportService, RaccoltaComuniService, DeduplicaService, GeocodificaService],
})
export default class BusinessModule {}
