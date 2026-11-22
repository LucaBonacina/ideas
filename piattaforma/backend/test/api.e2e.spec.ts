import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import request from 'supertest';
import { StrutturaRepository } from '../src/database/struttura.repository';
import { ComuniLookup } from '../src/business/import/comuni/comuni-lookup';
import { parseLombardiaUdos } from '../src/business/import/lombardia/lombardia-udos.parser';
import { parseMim } from '../src/business/import/mim/mim.parser';
import { COMUNI_TEST } from './fixtures/comuni';
import { LOMBARDIA_UDOS } from './fixtures/lombardia';
import { MIM_STATALI } from './fixtures/mim';

describe('API strutture (con MongoDB in memoria)', () => {
  let mongo: MongoMemoryServer;
  let app: INestApplication;
  let repo: StrutturaRepository;
  const oggi = new Date('2026-11-22T00:00:00Z');
  const comuni = new ComuniLookup(COMUNI_TEST);

  beforeAll(async () => {
    mongo = await MongoMemoryServer.create();
    process.env.MONGO_URI = mongo.getUri('nidi');
    // Import dinamico: la configurazione si valida al caricamento del modulo.
    const { AppModule } = await import('../src/app.module');
    const modulo = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = modulo.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }));
    await app.init();
    repo = app.get(StrutturaRepository);
    await repo.model.syncIndexes();
    await repo.sostituisciFonte('lombardia-udos', parseLombardiaUdos(Buffer.from(LOMBARDIA_UDOS), comuni, oggi).strutture);
    const mim = parseMim(Buffer.from(MIM_STATALI), {
      nome: 'f', statale: true, url: 'u', dataRiferimento: oggi,
    }, comuni, oggi);
    await repo.sostituisciFonte('mim-anagrafe', mim.strutture);
  });

  afterAll(async () => {
    await app?.close();
    await mongo?.stop();
  });

  it('cerca per comune e fascia', async () => {
    const res = await request(app.getHttpServer()).get('/strutture?comune=016024&fascia=0-3').expect(200);
    expect(res.body.totale).toBe(2);
    expect(res.body.risultati.map((s: { denominazione: string }) => s.denominazione))
      .toEqual(['Micronido Arcobaleno', 'Nido Meucci']);
  });

  it('cerca per distanza', async () => {
    const vicino = await request(app.getHttpServer()).get('/strutture?lat=45.69&lng=9.64&raggioKm=1').expect(200);
    expect(vicino.body.totale).toBe(1);
    const lontano = await request(app.getHttpServer()).get('/strutture?lat=41.9&lng=12.5&raggioKm=5').expect(200);
    expect(lontano.body.totale).toBe(0);
  });

  it('rifiuta parametri non validi', async () => {
    await request(app.getHttpServer()).get('/strutture?fascia=9-12').expect(400);
    await request(app.getHttpServer()).get('/strutture?campoIgnoto=1').expect(400);
  });

  it('mostra la scheda con la fonte', async () => {
    const res = await request(app.getHttpServer()).get('/strutture/mim-anagrafe:CRAA80104E').expect(200);
    expect(res.body.provenienza).toMatchObject({ fonte: 'mim-anagrafe', licenza: 'IODL 2.0' });
    await request(app.getHttpServer()).get('/strutture/inesistente').expect(404);
  });

  it('disattiva le strutture sparite dalla fonte', async () => {
    const restanti = parseLombardiaUdos(Buffer.from(LOMBARDIA_UDOS), comuni, oggi).strutture
      .filter((s) => s.chiave !== 'lombardia-udos:055912');
    const esito = await repo.sostituisciFonte('lombardia-udos', restanti);
    expect(esito.disattivati).toBe(1);
    const res = await request(app.getHttpServer()).get('/strutture?comune=016024').expect(200);
    expect(res.body.totale).toBe(1);
  });

  it('riporta la copertura per regione e fonte', async () => {
    const res = await request(app.getHttpServer()).get('/strutture/copertura').expect(200);
    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining({ regione: 'Lombardia', tipologia: 'SCUOLA_INFANZIA', strutture: 1 }),
    ]));
  });
});
