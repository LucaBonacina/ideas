import { ElementoPdf } from '../piemonte/pdf-testo';
import { righeDaPagineEducatori } from './veneto-educatori.parser';
import { pulisciVia, referentiVeneto } from './veneto-referenti';
import { RigaNidoFamiglia } from './veneto-nidi-famiglia.parser';
import { Struttura } from '../../../database/struttura.schema';

const e = (testo: string, x: number, y: number): ElementoPdf => ({ testo, x, y });

const ALBO: ElementoPdf[] = [
  e('Cognome', 115, 716), e('Nome', 195, 716), e('indirizzo di posta elettronica', 269, 716), e('indirizzo PEC', 424, 716),
  e('1', 27, 696), e('ENIF1', 64, 696), e('Rossi', 115, 696), e('Anna', 195, 696), e('anna@example.it', 269, 696),
  e('anna@pec.example.it', 424, 696),
  e('2', 27, 670), e('ENIF2', 64, 670), e('De Luca', 115, 670), e('Maria Grazia', 195, 670),
  e('a@example.it', 269, 674), e('b@example.it', 269, 666), e('-', 424, 670),
];

describe('referenti dei Nidi in Famiglia', () => {
  const albo = righeDaPagineEducatori([ALBO]);

  it('legge l\'albo con email multiple e PEC mancanti', () => {
    expect(albo).toEqual([
      { codice: 'ENIF1', cognome: 'Rossi', nome: 'Anna', email: ['anna@example.it'], pec: 'anna@pec.example.it' },
      { codice: 'ENIF2', cognome: 'De Luca', nome: 'Maria Grazia', email: ['a@example.it', 'b@example.it'], pec: undefined },
    ]);
  });

  it('collega educatori e coordinatori alle strutture', () => {
    const righe: RigaNidoFamiglia[] = [
      { provincia: 'BL', comune: 'Feltre', codiceEducatore: 'ENIF1', codiceCoordinatore: 'CRNIF3', coordinatore: 'Bianchi Luca' },
      { provincia: 'BL', comune: 'Feltre', codiceEducatore: 'ENIF9', educatore: 'Verdi Sara', codiceCoordinatore: 'CRNIF3' },
    ];
    const strutture = [
      { chiave: 'v:1', riservato: { referenti: ['ENIF1', 'CRNIF3'] } },
      { chiave: 'v:2', riservato: { referenti: ['ENIF9', 'CRNIF3'] } },
    ] as Struttura[];
    const d = new Date();
    const r = referentiVeneto(righe, strutture, albo, { nidi: 'DDR 39', educatori: 'DDR 40' }, d, d);
    expect(r.coordinatori).toHaveLength(1);
    expect(r.coordinatori[0]).toMatchObject({ codice: 'CRNIF3', nomeCompleto: 'Bianchi Luca', strutture: ['v:1', 'v:2'] });
    expect(r.educatori.find((x) => x.codice === 'ENIF1')).toMatchObject({
      cognome: 'Rossi', email: ['anna@example.it'], strutture: ['v:1'], fonti: ['DDR 40', 'DDR 39'],
    });
    expect(r.educatori.find((x) => x.codice === 'ENIF9')).toMatchObject({ nomeCompleto: 'Verdi Sara', strutture: ['v:2'] });
  });

  it('toglie dalla via il nome dell\'educatrice finito nella stessa cella', () => {
    expect(pulisciVia('Via Verdi, 45 - Fraz. Domegliara Rossi Anna', albo[0])).toBe('Via Verdi, 45 - Fraz. Domegliara');
    expect(pulisciVia('Via Verdi, 45', albo[0])).toBe('Via Verdi, 45');
  });
});
