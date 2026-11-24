import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ImportService } from './business/import/import.service';
import { RaccoltaComuniService } from './business/raccolta/raccolta-comuni.service';
import { DeduplicaService } from './business/deduplica/deduplica.service';
import { GeocodificaService } from './business/geocodifica/geocodifica.service';
import log from './log';

/**
 * Esegue gli import da riga di comando:
 *   npm run import -- comuni|istat|mim|lombardia|fvg|piemonte|lazio|roma|toscana|puglia-zerosei|puglia-registro|campania|napoli|trento|valle-aosta|veneto|comunali-nord|sezioni-primavera|coordinate-mim|deduplica|geocodifica|raccolta-comuni|tutto [--offline]
 * Con --offline riusa gli ultimi file grezzi salvati senza riscaricarli.
 */
async function main(): Promise<void> {
  const [comando = 'tutto', ...opzioni] = process.argv.slice(2);
  const offline = opzioni.includes('--offline');
  const app = await NestFactory.createApplicationContext(AppModule, { logger: ['error', 'warn'] });
  const servizio = app.get(ImportService);
  const raccolta = app.get(RaccoltaComuniService);
  const valore = (nome: string): string | undefined => opzioni.find((o) => o.startsWith(`--${nome}=`))
    ?.slice(nome.length + 3);
  const parallelo = Number(valore('parallelo') ?? 6);
  const regioni = (valore('regioni') ?? '').split(',').map((r) => r.trim()).filter(Boolean);
  const limite = Number(opzioni.find((o) => o.startsWith('--limite='))?.split('=')[1] ?? 300);
  const passi: Record<string, () => Promise<unknown>> = {
    comuni: () => servizio.importaComuni(offline),
    istat: () => servizio.importaBenchmarkIstat(offline),
    mim: () => servizio.importaMim(offline),
    lombardia: () => servizio.importaLombardia(offline),
    fvg: () => servizio.importaFvg(offline),
    piemonte: () => servizio.importaPiemonte(offline),
    lazio: () => servizio.importaLazio(offline),
    roma: () => servizio.importaRoma(offline),
    toscana: () => servizio.importaToscana(offline),
    'puglia-zerosei': () => servizio.importaPugliaZerosei(offline),
    'puglia-registro': () => servizio.importaPugliaRegistro(offline),
    campania: () => servizio.importaCampania(offline),
    napoli: () => servizio.importaNapoli(offline),
    trento: () => servizio.importaTrento(offline),
    'valle-aosta': () => servizio.importaValleAosta(offline),
    veneto: () => servizio.importaVeneto(offline),
    'emilia-romagna': () => servizio.importaEmiliaRomagna(offline),
    'sicilia-albo': () => servizio.importaSiciliaAlbo(offline),
    'coordinate-mim': () => servizio.importaCoordinateMim(offline),
    'sezioni-primavera': () => servizio.importaSezioniPrimavera(offline),
    'comunali-nord': () => servizio.importaComunaliNord(offline),
    'raccolta-comuni': () => raccolta.raccogli(limite, parallelo, regioni, Number(valore('buco-minimo') ?? 1)),
    'testi-comuni': () => raccolta.preparaTesti(),
    'siti-comunali': () => servizio.importaSitiComunali(),
    deduplica: () => app.get(DeduplicaService).esegui(),
    geocodifica: () => app.get(GeocodificaService).esegui(),
  };
  const daEseguire = comando === 'tutto' ? Object.keys(passi).filter((p) => !['raccolta-comuni', 'testi-comuni'].includes(p)) : [comando];
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
