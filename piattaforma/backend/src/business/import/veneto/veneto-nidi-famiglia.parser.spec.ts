import { ElementoPdf } from '../piemonte/pdf-testo';
import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseNidiFamiglia, righeDaPagineNidiFamiglia } from './veneto-nidi-famiglia.parser';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = comuniDiProva([['025021', 'Feltre', 'BL', 'Veneto']]);

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

const PAGINA: ElementoPdf[] = [
  e('Provincia', 20, 560), e('Comune', 60, 560), e('CAP', 150, 560), e('Nido in Famiglia', 200, 560),
  e('Indirizzo', 320, 560), e('Educatore', 420, 560), e('Coordinatore', 520, 560), e('Codice educatore', 620, 560),
  e('Codice Coordinatore', 700, 560),
  e('BL', 20, 500), e('Feltre', 60, 500), e('32032', 150, 500), e('IL NIDO DI ANNA', 200, 500), e('Via Roma 1', 320, 500),
  e('ANNA BIANCHI', 420, 500), e('LUCA VERDI', 520, 500), e('ENIF00123', 620, 500), e('CRNIF0009', 700, 500),
  e('BL', 20, 480), e('Feltre', 60, 480), e('32032', 150, 480), e('CASA DI GIO', 200, 480), e('Via Monte 3', 320, 480),
  e('GIOVANNA NERI', 420, 480), e('LUCA VERDI', 520, 480), e('ENIF 456', 620, 480), e('CRNIF 9', 700, 480),
  e('VR', 20, 460), e('Atlantide', 60, 460), e('37100', 150, 460),
];

describe('parser Nidi in Famiglia Veneto', () => {
  const righe = righeDaPagineNidiFamiglia([PAGINA]);
  const esito = parseNidiFamiglia(righe, comuni, new Date());

  it('legge tutte le colonne, anche con i refusi nei codici', () => {
    expect(righe[0]).toMatchObject({
      comune: 'Feltre',
      cap: '32032',
      denominazione: 'IL NIDO DI ANNA',
      via: 'Via Roma 1',
      educatore: 'ANNA BIANCHI',
      coordinatore: 'LUCA VERDI',
      codiceEducatore: 'ENIF00123',
      codiceCoordinatore: 'CRNIF0009',
    });
    expect(righe[1]).toMatchObject({ codiceEducatore: 'ENIF456', codiceCoordinatore: 'CRNIF9' });
  });

  it('crea una scheda per nido con chiavi distinte', () => {
    expect(righe).toHaveLength(3);
    expect(esito.strutture).toHaveLength(2);
    expect(esito.scartate).toHaveLength(1);
    expect(esito.strutture[0]).toMatchObject({
      tipologia: Tipologia.SERVIZIO_DOMICILIARE, denominazione: 'Nido in famiglia a Feltre', contatti: {},
    });
    expect(esito.strutture[0].chiave).not.toBe(esito.strutture[1].chiave);
  });

  it('tiene nome reale, via e codici solo nei dati riservati', () => {
    const pubblici = esito.strutture.map(({ riservato: _riservato, ...resto }) => resto);
    expect(JSON.stringify(pubblici)).not.toMatch(/ANNA|BIANCHI|VERDI|NERI|Roma|Monte|ENIF|CRNIF/i);
    expect(esito.strutture[0].riservato).toEqual({
      denominazione: 'IL NIDO DI ANNA', via: 'Via Roma 1', cap: '32032', referenti: ['ENIF00123', 'CRNIF0009'],
    });
    expect(esito.strutture.every((s) => !s.indirizzo.via && !s.posizione)).toBe(true);
  });
});
