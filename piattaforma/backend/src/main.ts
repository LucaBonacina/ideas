import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import log from './log';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }));
  app.enableCors();
  const porta = app.get(ConfigService).get<string>('PORT') || '8181';
  await app.listen(porta);
  log.info(`API in ascolto sulla porta ${porta}`);
}

bootstrap();
