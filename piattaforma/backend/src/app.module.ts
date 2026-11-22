import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import BusinessModule from './business/business.module';
import { validateConfig } from './validate-config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validateConfig }),
    BusinessModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
