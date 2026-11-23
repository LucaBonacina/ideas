import { ElementoPdf } from '../../piemonte/pdf-testo';
import { comuneRichiedente, indirizzoScuola, righeMarche } from './marche';

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

describe('sezioni primavera Marche', () => {
  it('ricostruisce le righe alte del prospetto, senza leggere l\'IBAN', () => {
    const pagina = [
      // Intestazione: "SEZIONE" a x 274 non è l'inizio di una riga.
      e('SEZIONE', 274.7, 500.8), e('N.', 72.8, 491.4),
      // Riga 1: numero d'ordine a metà altezza.
      e('COMUNE DI', 108, 472.1), e('SEZIONE', 192.4, 472.1), e('SCUOLA', 276.5, 472.1),
      e('ANCONA', 113.3, 462.7), e('PRIMAVERA L\'ISOLA', 171.8, 462.7), e('DELL\'INFANZIA', 263, 462.7),
      e('IT78Z010000', 415.9, 460.1),
      e('VIA LARGO XXIV', 100.1, 453.4), e('DI ELINOR', 189.4, 453.4), e('FANTASIA', 272.6, 453.4),
      e('1', 74.2, 448.7),
      e('MAGGIO', 114, 444), e('VIA VERGA, 2', 267.5, 444),
      e('61300 ANCONA', 101.3, 434.6), e('ANCONA', 275.3, 434.6),
      // Riga 2, ultima della pagina: il comune è spezzato a capo e la provincia è tra parentesi.
      e('COMUNE DI', 108, 235.7), e('SEZIONE', 192.4, 235.7), e('ASILO NIDO', 269.9, 235.7),
      e('CASTELRAIMOND', 97.4, 226.3), e('PRIMAVERA', 186.2, 226.3), e('"F.BARTOLINI"', 264.6, 226.3),
      e('O', 125.9, 217), e('CASTELRAIMONDO', 174.1, 217), e('VIA CONSALVATICO', 255.8, 217),
      e('5', 74.2, 207.5), e('P. DELLA', 112.8, 207.5), e('69/A', 281.8, 207.5),
      e('REPUBBLICA', 105.8, 198.1), e('62022', 279.5, 198.1),
      e('CASTELRAIMOND', 97.4, 188.8), e('CASTELRAIMONDO', 256.9, 188.8),
      e('O (MC)', 116.5, 179.4),
      // Piè di pagina.
      e('DECRETO RIPARTO SEZIONI PRIMAVERA 25-26', 199.1, 133.1),
    ];
    const righe = righeMarche([pagina]);
    expect(righe).toEqual([
      {
        nome: 'SEZIONE PRIMAVERA L\'ISOLA DI ELINOR', comune: 'ANCONA', provincia: undefined, indirizzo: 'VIA VERGA, 2',
      },
      {
        nome: 'SEZIONE PRIMAVERA CASTELRAIMONDO',
        comune: 'CASTELRAIMOND O',
        provincia: 'MC',
        indirizzo: 'VIA CONSALVATICO 69/A',
      },
    ]);
    expect(JSON.stringify(righe)).not.toContain('IT78');
  });

  it('legge il comune richiedente anche senza indirizzo', () => {
    expect(comuneRichiedente(['COMUNE DI RIPE', 'SAN GINESIO', 'RIPE SAN GINESIO', '(MC)']))
      .toEqual({ comune: 'RIPE SAN GINESIO', provincia: 'MC' });
    expect(comuneRichiedente(['COMUNE DI FANO', 'VIA SAN', 'FRANCESCO 76', 'FANO (PU)']))
      .toEqual({ comune: 'FANO', provincia: 'PU' });
  });

  it('isola l\'indirizzo della scuola ospitante', () => {
    expect(indirizzoScuola('SCUOLA INFANZIA MORESCO ISC MONTERUBBIANO VIA POSTINA, 3 MORESCO FM', 'MORESCO'))
      .toBe('VIA POSTINA, 3');
    expect(indirizzoScuola('SCUOLA INFANZIA PARITARIA "S.VINCENZO" VIA VERDI, 95 60019 SENIGALLIA (AN)', 'SENIGALLIA'))
      .toBe('VIA VERDI, 95');
    expect(indirizzoScuola('SCUOLA DELL\'INFANZIA', 'ANCONA')).toBeUndefined();
  });
});
