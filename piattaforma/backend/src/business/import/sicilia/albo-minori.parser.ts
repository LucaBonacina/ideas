import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { righeTabella } from '../sezioni-primavera/tabella-pdf';
import { idUnico } from '../strumenti/identificativi';

export const FONTE_SICILIA_ALBO = 'sicilia-albo-lr22-86-minori';

/** Albo regionale degli enti socio-assistenziali (L.R. 22/1986), sezione Minori, Dipartimento della Famiglia. */
export const URL_SICILIA_ALBO = 'https://www2.regione.sicilia.it/famiglia/albi/MINORI.pdf';

/** File aggiornato al 18/09/2026 (Last-Modified del server). */
export const DATA_RIFERIMENTO_SICILIA_ALBO = new Date('2026-09-18T00:00:00Z');

/** 309 servizi 0-3 nell'aggiornamento di settembre 2026. */
export const MINIMO_SICILIA_ALBO = 250;

export interface RigaAlboSicilia {
  provincia: string;
  comune: string;
  ente: string;
  indirizzo: string;
  tipologia: string;
  utenti: string;
  iscrizione: string;
}

export function righeDaPagineAlboSicilia(pagine: ElementoPdf[][]): RigaAlboSicilia[] {
  return righeTabella(pagine, {
    ancora: { da: 55, a: 75, re: /^(AG|CL|CT|EN|ME|PA|RG|SR|TP)$/ },
    colonne: {
      provincia: [55, 75],
      comune: [75, 155],
      ente: [155, 326],
      indirizzo: [326, 457],
      tipologia: [457, 510],
      utenti: [510, 537],
      iscrizione: [537, 558],
    },
    assegnazione: 'vicino',
    ignora: ['PROVINCIA', 'COMUNE IN CUI HA SEDE', 'LA STRUTTURA', "DENOMINAZIONE DELL'ISTITUZIONE",
      'INDIRIZZO DELLA STRUTTURA', 'TIPOLOGIA', 'NUMERO', 'UTENTI', 'NUM.', 'ALBO', 'DATA', 'DECRETO', 'DECRET', 'O',
      'NE', 'ISCRIZIO'],
  }) as unknown as RigaAlboSicilia[];
}

/** Solo le tipologie 0-3 dell'albo (il resto: comunità alloggio, assistenza domiciliare, centri diurni…). */
export function tipologiaAlbo(t: string): Tipologia | undefined {
  const x = t.toUpperCase().replace(/\s+/g, ' ');
  if (x.includes('MICRO NIDO') || x.includes('MICRONIDO')) return Tipologia.MICRONIDO;
  if (x.includes('ASILO NIDO')) return Tipologia.NIDO;
  if (x.includes('SPAZIO GIOCO')) return Tipologia.SPAZIO_GIOCO;
  if (x.includes('CENTRO PER BAMBINI E FAMIGLIE')) return Tipologia.CENTRO_BAMBINI_FAMIGLIE;
  return undefined;
}

/** Ente con una forma giuridica o un nome collettivo: altrimenti può essere una persona (ditta individuale). */
const ENTE_COLLETTIVO = new RegExp([
  'COOP', 'SOC', 'ASSOC', 'S\\.?R\\.?L', 'S\\.?N\\.?C', 'S\\.?A\\.?S', 'ONLUS', 'FONDAZ', 'PARROCCHIA', 'ISTITUT',
  'CONGREGAZ', 'COMUNE', 'ENTE', 'CENTRO', 'ASILO', 'NIDO', 'SCUOLA', 'IMPRESA', 'CONSORZIO', 'E\\.?T\\.?S', 'A\\.?P\\.?S',
  'O\\.?D\\.?V', 'SUORE', 'OPERA', 'DIOCESI', 'CASA', 'GRUPPO', 'BABY', 'KIDS', 'CLUB', 'MONDO', 'PICCOL',
].join('|'), 'i');

const ETICHETTE: Record<string, string> = {
  [Tipologia.MICRONIDO]: 'Micronido',
  [Tipologia.NIDO]: 'Asilo nido',
  [Tipologia.SPAZIO_GIOCO]: 'Spazio gioco',
  [Tipologia.CENTRO_BAMBINI_FAMIGLIE]: 'Centro per bambini e famiglie',
};

/** Nomi dei comuni scritti in forma diversa da quella ufficiale ISTAT. */
const ALIAS_COMUNI: Record<string, string> = {
  'SANTA MARGHERITA BELICE': 'Santa Margherita di Belice',
};

export function parseAlboSicilia(righe: RigaAlboSicilia[], comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const tipologia = tipologiaAlbo(r.tipologia);
    if (!tipologia) return;
    const comune = comuni.daNome(ALIAS_COMUNI[r.comune.toUpperCase()] ?? r.comune, r.provincia, 'Sicilia');
    if (!comune) {
      esito.scartate.push({ riga: i + 1, motivo: `comune non trovato: ${r.comune} (${r.provincia})` });
      return;
    }
    const etichetta = ETICHETTE[tipologia];
    // L'albo riporta l'ente, non il nome del servizio: il nome pubblico è "tipologia - ente", se l'ente non è una persona.
    const denominazione = ENTE_COLLETTIVO.test(r.ente)
      ? `${etichetta} - ${titoloLeggibile(r.ente)}`
      : `${etichetta} a ${comune.nome}`;
    const id = idUnico(r.iscrizione && /^\d+$/.test(r.iscrizione) ? r.iscrizione : `${comune.codiceIstat}-${i}`, visti);
    const posti = Number(r.utenti);
    esito.strutture.push({
      chiave: `${FONTE_SICILIA_ALBO}:${id}`,
      denominazione,
      tipologia,
      tipologiaOriginale: r.tipologia,
      fascia: '0-3',
      gestione: /^COMUNE\b/i.test(r.ente) ? Gestione.COMUNALE : Gestione.PRIVATA,
      gestore: /^COMUNE\b/i.test(r.ente) ? titoloLeggibile(r.ente) : undefined,
      indirizzo: {
        via: r.indirizzo ? titoloLeggibile(r.indirizzo) : undefined,
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      posti: Number.isFinite(posti) && posti > 0 && posti < 500 ? posti : undefined,
      accreditamento: 'si',
      misureAderite: [],
      contatti: {},
      caratteristiche: [`iscritto all'albo regionale L.R. 22/1986 n. ${r.iscrizione}`],
      riservato: { gestore: r.ente },
      provenienza: {
        fonte: FONTE_SICILIA_ALBO,
        idNellaFonte: id,
        url: URL_SICILIA_ALBO,
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento: DATA_RIFERIMENTO_SICILIA_ALBO,
        scaricatoIl,
      },
      attiva: true,
    } as Struttura);
  });
  return esito;
}
