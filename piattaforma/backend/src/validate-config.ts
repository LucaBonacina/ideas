import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { AppConfig } from './app.config';

export function validateConfig(env: Record<string, unknown>): AppConfig {
  const config = plainToInstance(AppConfig, env);
  const errors = validateSync(config, { skipMissingProperties: false });
  if (errors.length > 0) {
    const first = errors[0];
    throw new Error(`Configurazione non valida: ${first.property} ${JSON.stringify(first.constraints)}`);
  }
  return config;
}
