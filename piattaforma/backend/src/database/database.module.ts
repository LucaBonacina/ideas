import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Struttura, StrutturaSchema } from './struttura.schema';
import { Comune, ComuneSchema } from './comune.schema';
import { StrutturaRepository } from './struttura.repository';
import { ComuneRepository } from './comune.repository';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({ uri: config.getOrThrow<string>('MONGO_URI') }),
    }),
    MongooseModule.forFeature([
      { name: Struttura.name, schema: StrutturaSchema },
      { name: Comune.name, schema: ComuneSchema },
    ]),
  ],
  providers: [StrutturaRepository, ComuneRepository],
  exports: [StrutturaRepository, ComuneRepository],
})
export default class DatabaseModule {}
