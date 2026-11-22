/** Tipologie di servizio 0-6, armonizzate tra le fonti (D.Lgs. 65/2017 e norme regionali). */
export enum Tipologia {
  NIDO = 'NIDO',
  MICRONIDO = 'MICRONIDO',
  SEZIONE_PRIMAVERA = 'SEZIONE_PRIMAVERA',
  SPAZIO_GIOCO = 'SPAZIO_GIOCO',
  CENTRO_BAMBINI_FAMIGLIE = 'CENTRO_BAMBINI_FAMIGLIE',
  SERVIZIO_DOMICILIARE = 'SERVIZIO_DOMICILIARE',
  SCUOLA_INFANZIA = 'SCUOLA_INFANZIA',
  POLO_INFANZIA = 'POLO_INFANZIA',
}

/** Fascia d'età principale servita dalla tipologia. */
export function fasciaDiTipologia(tipologia: Tipologia): '0-3' | '3-6' | '0-6' {
  if (tipologia === Tipologia.SCUOLA_INFANZIA) return '3-6';
  if (tipologia === Tipologia.POLO_INFANZIA) return '0-6';
  return '0-3';
}
