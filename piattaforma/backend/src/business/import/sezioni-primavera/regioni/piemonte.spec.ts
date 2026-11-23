import { PIEMONTE, righePiemonte } from './piemonte';

describe('righePiemonte', () => {
  const pagina = [
    { testo: 'Meccanografico', x: 672, y: 729 },
    { testo: 'ASILO NIDO', x: 241, y: 715.7 },
    { testo: 'TOIC849008-', x: 670, y: 715.7 },
    { testo: 'Città : CIRIÈ', x: 757, y: 715.7 },
    { testo: 'TO', x: 984, y: 715.7 },
    { testo: 'IL GIARDINO', x: 241, y: 700.1 },
    { testo: 'TOAA849048', x: 670, y: 700.1 },
    { testo: 'SCUOLA SAN LUCA', x: 241, y: 684.5 },
    { testo: 'ALESSANDRIA - SPINETTA MARENGO', x: 757, y: 684.5 },
    { testo: 'AL', x: 985, y: 684.5 },
    { testo: 'Ambito Territoriale di Alessandria', x: 758, y: 669 },
  ];

  it('attacca le celle andate a capo alla riga sopra e ignora i subtotali', () => {
    expect(righePiemonte([pagina]).map((r) => [r.gestore, r.codice, r.comune, r.provincia])).toEqual([
      ['ASILO NIDO IL GIARDINO', 'TOIC849008- TOAA849048', 'Città : CIRIÈ', 'TO'],
      ['SCUOLA SAN LUCA', '', 'ALESSANDRIA - SPINETTA MARENGO', 'AL'],
    ]);
  });

  it('prende il codice del plesso e il comune senza frazione', () => {
    expect(PIEMONTE.estrai([pagina])).toEqual([
      { codice: 'TOAA849048', nome: 'ASILO NIDO IL GIARDINO', comune: 'CIRIÈ', provincia: 'TO' },
      { codice: undefined, nome: 'SCUOLA SAN LUCA', comune: 'ALESSANDRIA', provincia: 'AL' },
    ]);
  });
});
