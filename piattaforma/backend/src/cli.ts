import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ImportService } from './business/import/import.service';
import log from './log';

/**
 * Esegue gli import da riga di comando:
 *   npm run import -- comuni|mim|lombardia|fvg|piemonte|coordinate-mim|tutto [--offline]
 * Con --offline riusa gli ultimi file grezzi salvati senza riscaricarli.
 */
async function main(): Promise<void> {
  const [comando = 'tutto', ...opzioni] = process.argv.slice(2);
  const offline = opzioni.includes('--offline');
  const app = await NestFactory.createApplicationContext(AppModule, { logger: ['error', 'warn'] });
  const servizio = app.get(ImportService);
  const passi: Record<string, () => Promise<unknown>> = {
    comuni: () => servizio.importaComuni(offline),
    mim: () => servizio.importaMim(offline),
    lombardia: () => servizio.importaLombardia(offline),
    fvg: () => servizio.importaFvg(offline),
    piemonte: () => servizio.importaPiemonte(offline),
    'coordinate-mim': () => servizio.importaCoordinateMim(offline),
  };
  const daEseguire = comando === 'tutto' ? Object.keys(passi) : [comando];
  try {
    for (const nome of daEseguire) {
      if (!passi[nome]) throw new Error(`Import sconosciuto: ${nome}`);
      const rapporto = await passi[nome]();
      process.stdout.write(`${JSON.stringify(rapporto, null, 2)}\n`);
    }
  } catch (errore) {
    log.error('Import fallito', { errore: errore instanceof Error ? errore.message : errore });
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

main();
