import { ElementoPdf } from '../piemonte/pdf-testo';
import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseNidiFamiglia, righeDaPagineNidiFamiglia } from './veneto-nidi-famiglia.parser';
import { Tipologia } from '../../../domain/tipologia.enum';

const comuni = comuniDiProva([['025021', 'Feltre', 'BL', 'Veneto']]);

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

const PAGINA: ElementoPdf[] = [
  e('PROV', 20, 560), e('COMUNE', 60, 560),
  e('BL', 20, 500), e('Feltre', 60, 500), e('32032', 150, 500), e('IL NIDO DI ANNA', 200, 500), e('Via Roma 1', 320, 500),
  e('ANNA BIANCHI', 420, 500), e('LUCA VERDI', 520, 500), e('ENIF00123', 620, 500), e('CRNIF0009', 700, 500),
  e('BL', 20, 480), e('Feltre', 60, 480), e('32032', 150, 480), e('CASA DI GIO', 200, 480), e('Via Monte 3', 320, 480),
  e('GIOVANNA NERI', 420, 480), e('LUCA VERDI', 520, 480), e('ENIF00456', 620, 480),
  e('VR', 20, 460), e('Atlantide', 60, 460), e('37100', 150, 460),
];

describe('parser Nidi in Famiglia Veneto', () => {
  const righe = righeDaPagineNidiFamiglia([PAGINA]);
  const esito = parseNidiFamiglia(righe, comuni, new Date());

  it('tiene solo comune e un identificativo non reversibile', () => {
    expect(righe).toHaveLength(3);
    expect(esito.strutture).toHaveLength(2);
    expect(esito.scartate).toHaveLength(1);
    expect(esito.strutture[0]).toMatchObject({
      tipologia: Tipologia.SERVIZIO_DOMICILIARE, denominazione: 'Nido in famiglia a Feltre', contatti: {},
    });
    expect(esito.strutture[0].chiave).not.toBe(esito.strutture[1].chiave);
  });

  it('non pubblica nomi, indirizzi né codici delle educatrici', () => {
    expect(JSON.stringify(esito.strutture)).not.toMatch(/ANNA|BIANCHI|VERDI|NERI|Roma|Monte|ENIF|CRNIF/i);
    expect(esito.strutture.every((s) => !s.indirizzo.via && !s.posizione)).toBe(true);
  });
});
