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
    ]),
  ],
  providers: [StrutturaRepository, ComuneRepository, PosizioneEsternaRepository],
  exports: [StrutturaRepository, ComuneRepository, PosizioneEsternaRepository, MongooseModule],
})
export default class DatabaseModule {}
