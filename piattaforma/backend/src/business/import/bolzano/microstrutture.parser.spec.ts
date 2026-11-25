import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { comuniDiProva } from '../strumenti/comuni-di-prova';
import { parseMicrostrutture, righeMicrostrutture } from './microstrutture.parser';

const HTML = `<nav>Menu</nav><p>contatto, richiesta di posto e registrazione</p>
<p>APPIANO/S. Michele</p><p><strong>Microstruttura aziendale Villa Zebra</strong></p>
<p>Via Sill, 3 - S. Michele - 39057 Appiano</p><p>Paideias</p>
<p>BOLZANO</p><p>Arcobaleno</p><p>Piazzetta Anne Frank, 17 - 39100 Bolzano</p><p>Babycoop</p>
<p>info@babycoop.it</p><p>Service</p><p>Altro</p>`;

describe('microstrutture Alto Adige', () => {
  const comuni = comuniDiProva([['021004', 'Appiano sulla strada del vino', 'BZ', 'Trentino-Alto Adige'],
    ['021008', 'Bolzano', 'BZ', 'Trentino-Alto Adige']]);
  const righe = righeMicrostrutture(HTML);
  const { strutture } = parseMicrostrutture(righe, comuni, new Date());

  it('legge località, nome, indirizzo, gestore ed email', () => {
    expect(righe).toHaveLength(2);
    expect(righe[1]).toMatchObject({ nome: 'Arcobaleno', gestore: 'Babycoop', email: 'info@babycoop.it', aziendale: false });
  });

  it('trova il comune dal nome breve e distingue le microstrutture aziendali', () => {
    expect(strutture[0]).toMatchObject({
      tipologia: Tipologia.NIDO, gestione: Gestione.PRIVATA, indirizzo: { comune: 'Appiano sulla strada del vino', via: 'Via Sill, 3' },
    });
    expect(strutture[1]).toMatchObject({ tipologia: Tipologia.MICRONIDO, gestione: Gestione.COMUNALE, gestore: 'Babycoop' });
  });
});
