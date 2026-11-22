import {
  emailPubblicabile, isCodiceFiscalePersona, sitoPubblicabile, telefonoPubblicabile,
} from './privacy';

describe('regole sui dati personali', () => {
  it('scarta le email su domini di posta personale', () => {
    expect(emailPubblicabile('mario.rossi@gmail.com')).toBeUndefined();
    expect(emailPubblicabile('Non Disponibile')).toBeUndefined();
    expect(emailPubblicabile('CRIC80100E@istruzione.it')).toBe('cric80100e@istruzione.it');
  });

  it('riconosce il codice fiscale di una persona fisica', () => {
    expect(isCodiceFiscalePersona('BRTLNE81C70E897S')).toBe(true);
    expect(isCodiceFiscalePersona('95076400126')).toBe(false);
  });

  it('tiene solo i telefoni fissi', () => {
    expect(telefonoPubblicabile('3473974772')).toBeUndefined();
    expect(telefonoPubblicabile('035 399 111')).toBe('035399111');
    expect(telefonoPubblicabile('+39 02 1234567')).toBeUndefined();
  });

  it('normalizza i siti', () => {
    expect(sitoPubblicabile('www.Esempio.it')).toBe('https://www.esempio.it');
    expect(sitoPubblicabile('info@esempio.it')).toBeUndefined();
  });
});
