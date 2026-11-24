import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { righeTabella } from '../sezioni-primavera/tabella-pdf';
import { idUnico } from '../strumenti/identificativi';

export const FONTE_ER = 'emilia-romagna-servizi-autorizzati';

const PAGINA_ER = 'https://sociale.regione.emilia-romagna.it/nidi-e-scuole-dellinfanzia/servizi-educativi/'
  + 'servizi-educativi-autorizzati-al-funzionamento-in-emilia-romagna';

/**
 * Elenchi regionali dei servizi educativi per la prima infanzia autorizzati al funzionamento (art. 19 L.R. 19/2016,
 * dal sistema informativo SPiER): uno per i servizi pubblici a gestione diretta, uno per quelli pubblici a gestione
 * privata e per i privati.
 */
export const URL_ER = {
  diretta: `${PAGINA_ER}/servizi-educativi-pubblici-a-gestione-diretta.pdf/@@download/file`,
  privata: `${PAGINA_ER}/servizi-educativi-pubblici-a-gestione-privata-e-privati-autorizzati.pdf/@@download/file`,
};

/** Autorizzazioni in vigore al 17/02/2026. */
export const DATA_RIFERIMENTO_ER = new Date('2026-02-17T00:00:00Z');

/** 334 + 910 servizi nell'aggiornamento di febbraio 2026. */
export const MINIMO_ER = { diretta: 280, privata: 770 };

export type ElencoEr = keyof typeof URL_ER;

export interface RigaEr {
  codice: string;
  nome: string;
  indirizzo: string;
  provincia: string;
  comune: string;
  tipologia: string;
  titolare: string;
  gestore: string;
}

export function righeDaPagineEr(pagine: ElementoPdf[][]): RigaEr[] {
  return righeTabella(pagine, {
    ancora: { da: 20, a: 77, re: /^\d{1,6}$/ },
    colonne: {
      codice: [20, 77],
      nome: [77, 221],
      indirizzo: [221, 337],
      provincia: [337, 387],
      comune: [387, 503],
      tipologia: [503, 619],
      titolare: [619, 764],
      gestore: [764, 1000],
    },
    assegnazione: 'vicino',
    ignora: ['Codice', 'servizio', 'Denominazione servizio', 'Indirizzo servizio', 'Provincia', 'Comune',
      'Macro tipologia', 'Denominazione ente titolare', 'Denominazione ente gestore'],
  }) as unknown as RigaEr[];
}

/** Macro tipologie regionali (L.R. 19/2016) nelle tipologie del progetto. */
export function tipologiaEr(macro: string): Tipologia {
  const m = macro.toLowerCase();
  if (m.includes('24-36')) return Tipologia.SEZIONE_PRIMAVERA;
  if (m.includes('micro')) return Tipologia.MICRONIDO;
  if (m.includes('domiciliare')) return Tipologia.SERVIZIO_DOMICILIARE;
  if (m.includes('centro per bambini')) return Tipologia.CENTRO_BAMBINI_FAMIGLIE;
  if (m.includes('spazio bambini')) return Tipologia.SPAZIO_GIOCO;
  // Nido d'infanzia, sezioni di nido aggregate, sezioni 3-36 mesi, piccolo gruppo educativo, sperimentali.
  return Tipologia.NIDO;
}

const ENTE_LOCALE = /^(comune|unione|union[ei]|citt[aà] metropolitana|provincia)\b/i;
// ASP, istituzioni comunali, aziende sanitarie, consorzi pubblici.
const ENTE_PUBBLICO = /^(asp\b|azienda (pubblica )?(di )?serv|istituzione|a(zienda )?usl|consorzio pubblico)/i;

/** Il testo è già in maiuscole e minuscole nella maggior parte delle righe: si corregge solo il tutto maiuscolo. */
const leggibile = (t: string): string => (t === t.toUpperCase() ? titoloLeggibile(t) : t);

export function parseEr(righe: RigaEr[], elenco: ElencoEr, comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const comune = comuni.daNome(r.comune, r.provincia, 'Emilia-Romagna');
    if (!comune) {
      esito.scartate.push({ riga: i + 1, motivo: `comune non trovato: ${r.comune} (${r.provincia})` });
      return;
    }
    const tipologia = tipologiaEr(r.tipologia);
    const domiciliare = tipologia === Tipologia.SERVIZIO_DOMICILIARE;
    let gestione = Gestione.PRIVATA;
    if (ENTE_LOCALE.test(r.titolare)) gestione = Gestione.COMUNALE;
    else if (ENTE_PUBBLICO.test(r.titolare)) gestione = Gestione.PUBBLICA_ALTRA;
    else if (elenco === 'diretta') gestione = Gestione.PUBBLICA;
    const pubblica = gestione !== Gestione.PRIVATA;
    const id = idUnico(r.codice, visti);
    esito.strutture.push({
      chiave: `${FONTE_ER}:${id}`,
      denominazione: domiciliare ? `Servizio educativo domiciliare a ${comune.nome}` : leggibile(r.nome),
      tipologia,
      tipologiaOriginale: r.tipologia,
      fascia: '0-3',
      gestione,
      gestore: pubblica ? leggibile(r.titolare) : undefined,
      indirizzo: {
        via: domiciliare ? undefined : r.indirizzo || undefined,
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      misureAderite: [],
      contatti: {},
      caratteristiche: pubblica && elenco === 'privata' ? ['servizio pubblico a gestione privata'] : [],
      riservato: {
        denominazione: r.nome,
        via: r.indirizzo || undefined,
        gestore: [r.titolare, r.gestore].filter(Boolean).join(' / ') || undefined,
      },
      provenienza: {
        fonte: FONTE_ER,
        idNellaFonte: id,
        url: URL_ER[elenco],
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento: DATA_RIFERIMENTO_ER,
        scaricatoIl,
      },
      attiva: true,
    } as Struttura);
  });
  return esito;
}
