import { ComuniLookup } from './comuni/comuni-lookup';
import { parseMim } from './mim/mim.parser';
import { parseLombardiaUdos } from './lombardia/lombardia-udos.parser';
import { Gestione } from '../../domain/gestione.enum';
import { Tipologia } from '../../domain/tipologia.enum';
import { COMUNI_TEST } from '../../../test/fixtures/comuni';
import { MIM_PARITARIE, MIM_STATALI } from '../../../test/fixtures/mim';
import { LOMBARDIA_UDOS } from '../../../test/fixtures/lombardia';

const comuni = new ComuniLookup(COMUNI_TEST);
const oggi = new Date('2026-11-22T00:00:00Z');
const file = (statale: boolean) => ({
  nome: 'f.csv', statale, url: 'https://x', dataRiferimento: oggi,
});

describe('parser anagrafe MIM', () => {
  it('estrae solo le scuole dell\'infanzia e scarta i comuni sconosciuti', () => {
    const esito = parseMim(Buffer.from(MIM_STATALI), file(true), comuni, oggi);
    expect(esito.strutture).toHaveLength(1);
    expect(esito.scartate).toEqual([{ riga: 4, motivo: 'comune non trovato: Z999' }]);
    const [s] = esito.strutture;
    expect(s.chiave).toBe('mim-anagrafe:CRAA80104E');
    expect(s.gestione).toBe(Gestione.STATALE);
    expect(s.indirizzo).toMatchObject({ comune: 'Casalmaggiore', codiceIstat: '019036', via: 'Via Manzoni 98' });
    expect(s.caratteristiche).toEqual(['montagna']);
    expect(s.contatti.pec).toBeUndefined();
  });

  it('non pubblica email personali delle paritarie', () => {
    const [s] = parseMim(Buffer.from(MIM_PARITARIE), file(false), comuni, oggi).strutture;
    expect(s.gestione).toBe(Gestione.PARITARIA);
    expect(s.contatti.email).toBeUndefined();
    expect(s.contatti.pec).toBe('materna@pec.net');
    expect(s.indirizzo.regione).toBe('Friuli-Venezia Giulia');
  });
});

describe('parser registro Lombardia', () => {
  const esito = parseLombardiaUdos(Buffer.from(LOMBARDIA_UDOS), comuni, oggi);

  it('mappa tipologie e gestione con evidenza', () => {
    expect(esito.strutture).toHaveLength(3);
    expect(esito.scartate[0].motivo).toContain('tipologia sconosciuta');
    const nido = esito.strutture.find((s) => s.chiave === 'lombardia-udos:055911');
    expect(nido).toMatchObject({
      tipologia: Tipologia.NIDO, gestione: Gestione.COMUNALE, gestore: 'Comune Di Bergamo', posti: 20,
    });
    expect(nido?.posizione?.coordinates).toEqual([9.6428, 45.6906]);
    expect(nido?.contatti.telefono).toBe('035399111');
    const micro = esito.strutture.find((s) => s.chiave === 'lombardia-udos:055912');
    expect(micro).toMatchObject({
      gestione: Gestione.PRIVATA, gestore: undefined, posti: undefined, posizione: undefined,
    });
    expect(micro?.contatti.telefono).toBeUndefined();
  });

  it('non espone dati del nido famiglia gestito da una persona', () => {
    const nf = esito.strutture.find((s) => s.chiave === 'lombardia-udos:099663');
    expect(nf).toMatchObject({
      tipologia: Tipologia.SERVIZIO_DOMICILIARE,
      denominazione: 'Nido famiglia a Cuasso al Monte',
      gestore: undefined,
      posizione: undefined,
      contatti: {},
    });
    expect(nf?.indirizzo.via).toBeUndefined();
    expect(JSON.stringify(nf)).not.toMatch(/ROSSI|Rossi|RSSMRA/);
  });
});
