import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Struttura, StrutturaSchema } from './struttura.schema';
import { Comune, ComuneSchema } from './comune.schema';
import { StrutturaRepository } from './struttura.repository';
import { ComuneRepository } from './comune.repository';
import { PosizioneEsterna, PosizioneEsternaSchema } from './posizione-esterna.schema';
import { BenchmarkIstat, BenchmarkIstatSchema } from './benchmark-istat.schema';
import { PosizioneEsternaRepository } from './posizione-esterna.repository';
import { Referente, ReferenteSchema } from './referente.schema';
import { ReferenteRepository } from './referente.repository';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({ uri: config.getOrThrow<string>('MONGO_URI') }),
    }),
    MongooseModule.forFeature([
      { name: Struttura.name, schema: StrutturaSchema },
      { name: Comune.name, schema: ComuneSchema },
      { name: PosizioneEsterna.name, schema: PosizioneEsternaSchema },
      { name: BenchmarkIstat.name, schema: BenchmarkIstatSchema },
      { name: Referente.name, schema: ReferenteSchema },
    ]),
  ],
  providers: [StrutturaRepository, ComuneRepository, PosizioneEsternaRepository, ReferenteRepository],
  exports: [
    StrutturaRepository, ComuneRepository, PosizioneEsternaRepository, ReferenteRepository, MongooseModule,
  ],
})
export default class DatabaseModule {}
