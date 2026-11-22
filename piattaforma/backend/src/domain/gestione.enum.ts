/** Natura della gestione. SCONOSCIUTA quando la fonte non la dichiara: non va dedotta senza evidenza. */
export enum Gestione {
  STATALE = 'STATALE',
  COMUNALE = 'COMUNALE',
  PUBBLICA_ALTRA = 'PUBBLICA_ALTRA',
  /** Pubblica senza indicazione dell'ente (comune o altro). */
  PUBBLICA = 'PUBBLICA',
  PRIVATA_PARITARIA = 'PRIVATA_PARITARIA',
  PARITARIA = 'PARITARIA',
  PRIVATA = 'PRIVATA',
  SCONOSCIUTA = 'SCONOSCIUTA',
}
