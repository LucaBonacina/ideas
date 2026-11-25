export interface Struttura {
  _id: string;
  chiave: string;
  denominazione: string;
  tipologia: string;
  tipologiaOriginale: string;
  fascia: '0-3' | '3-6' | '0-6';
  gestione: string;
  gestore?: string;
  indirizzo: {
    via?: string; cap?: string; comune: string; codiceIstat: string; siglaProvincia: string; regione: string;
  };
  posizione?: { type: 'Point'; coordinates: [number, number] };
  posizioneFonte?: string;
  posizionePrecisione?: string;
  posti?: number;
  etaMinimaMesi?: number;
  etaMassimaMesi?: number;
  accreditamento?: 'si' | 'no' | 'in corso';
  misureAderite?: string[];
  bambiniIscritti?: number;
  annoIscritti?: string;
  anticipatari?: boolean;
  orari?: string[];
  altreFonti?: string[];
  contatti?: { email?: string; pec?: string; sito?: string; telefono?: string };
  caratteristiche?: string[];
  provenienza: {
    fonte: string; idNellaFonte: string; url?: string; licenza?: string; dataRiferimento?: string; scaricatoIl: string;
  };
}

export interface Pagina<T> {
  totale: number;
  pagina: number;
  perPagina: number;
  risultati: T[];
}

export interface ComuneSintesi {
  codiceIstat: string;
  nome: string;
  siglaProvincia: string;
  regione: string;
}

export interface ComuneDettaglio extends ComuneSintesi {
  centro?: [number, number];
  conteggi: { fascia: string; tipologia: string; strutture: number }[];
  completezza03?: { anno: string; istat: number; nostri: number; perTipo: { tipoIstat: string; istat: number; nostri: number }[] };
}

export interface CompletezzaRegione {
  regione: string;
  istat: number;
  nostri: number;
  comuniConServizi: number;
  comuniCompleti: number;
}

export interface RigaCopertura {
  regione: string;
  tipologia: string;
  fonte: string;
  strutture: number;
  conPosizione: number;
}

export interface EsitoMisura {
  misura: string;
  stato: 'applicata' | 'non spetta' | 'da verificare';
  mensile: number;
  annuo: number;
  motivi: string[];
  fonte: { titolo: string; url: string };
}

export interface EsitoCostoNetto {
  rettaAnnua: number;
  costoNettoAnnuo: number;
  costoNettoMensile: number;
  costoNettoAnnuoSeVerificate: number;
  misure: EsitoMisura[];
  avvertenze: string[];
  struttura?: string;
}

export interface Fonte {
  codice: string;
  nome: string;
  descrizione: string;
  strutture: number;
  licenza?: string;
  url?: string;
  dataRiferimento?: string;
  scaricatoIl?: string;
}

export interface FonteAusiliaria {
  nome: string;
  descrizione: string;
  url: string;
  licenza: string;
  uso: string;
}

export interface CatalogoFonti {
  fonti: Fonte[];
  ausiliarie: FonteAusiliaria[];
}
