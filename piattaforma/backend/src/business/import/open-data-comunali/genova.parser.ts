import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { pulisci } from '../../../domain/privacy';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { idUnico, impronta, slug } from '../strumenti/identificativi';
import { IndiceMim } from './indice-mim';

export const FONTE_GENOVA = 'genova-scuole';

export const URL_GENOVA = 'https://dati.comune.genova.it/dataset/0d43e543-0ee0-4f3b-931b-dae28e69ec7d/resource/8eba9a1b-4f2b-41e7-88f6-131af4c254e0/download/scuole.jsonld';

export const PAGINA_GENOVA = 'https://dati.comune.genova.it/dataset/scuole-genova';

/** Data di pubblicazione del dataset "Scuole". */
export const DATA_RIFERIMENTO_GENOVA = new Date('2024-12-16T00:00:00Z');

/** 166 servizi (164 da 0-3 e 2 scuole dell'infanzia comunali assenti dal MIM) nel dataset del 2024. */
export const MINIMO_GENOVA = 115;

const CODICE_ISTAT_GENOVA = '010025';

const P = 'https://onto.comune.genova.it/lod/ontologia_Scuole#';

type RecordGenova = Record<string, { '@value'?: string }[] | string>;

interface Regola { re: RegExp; tipologia?: Tipologia; gestione?: Gestione; scarto?: string }

/**
 * Tipi del dataset (testo libero). Quelli senza qualifica ("Asilo Nido (con 3 sezioni)", "Primavera Tempo Pieno",
 * "Scuola Infanzia") sono i servizi comunali: lo conferma l'anagrafe 2016 delle scuole pubbliche dello stesso
 * Comune, dove gli stessi nidi sono "NIDO D'INFANZIA COMUNALE". "Pac" sono nidi privati (accreditati e
 * convenzionati, secondo i nomi "PAC ..." anche tra i "Privato Accreditato").
 */
const REGOLE: Regola[] = [
  { re: /^asilo nido estivo/i, scarto: 'servizio estivo' },
  { re: /^asilo nido (privato|pac)/i, tipologia: Tipologia.NIDO, gestione: Gestione.PRIVATA },
  { re: /^asilo nido/i, tipologia: Tipologia.NIDO, gestione: Gestione.COMUNALE },
  { re: /^primavera paritaria/i, tipologia: Tipologia.SEZIONE_PRIMAVERA, gestione: Gestione.PARITARIA },
  { re: /^primavera/i, tipologia: Tipologia.SEZIONE_PRIMAVERA, gestione: Gestione.COMUNALE },
  { re: /^educatore domiciliare/i, tipologia: Tipologia.SERVIZIO_DOMICILIARE, gestione: Gestione.SCONOSCIUTA },
  { re: /^centro bambini comunale/i, tipologia: Tipologia.SPAZIO_GIOCO, gestione: Gestione.COMUNALE },
  { re: /^centro bambini privato/i, tipologia: Tipologia.SPAZIO_GIOCO, gestione: Gestione.PRIVATA },
  { re: /^scuola infanzia$/i, tipologia: Tipologia.SCUOLA_INFANZIA, gestione: Gestione.COMUNALE },
  { re: /^scuola infanzia privata/i, scarto: "scuola dell'infanzia privata non paritaria (3-6)" },
];

function valore(r: RecordGenova, campo: string): string | undefined {
  const v = r[`${P}${campo}`];
  return Array.isArray(v) ? pulisci(v[0]?.['@value']) : undefined;
}

/**
 * Dataset "Scuole" del Comune di Genova (JSON-LD, CC BY 4.0): nidi comunali e privati, sezioni primavera,
 * centri bambini, educatori domiciliari. I record con il nome che inizia per "Xxx" sono versioni dismesse
 * di un servizio ripubblicato con un nuovo codice. Le scuole dell'infanzia comunali entrano solo se assenti
 * dall'anagrafe MIM (indice passato dal chiamante); statali e paritarie sono già nel MIM.
 */
export function parseGenova(contenuto: Buffer, comuni: ComuniLookup, scaricatoIl: Date, mim?: IndiceMim): EsitoParsing {
  const dati = JSON.parse(contenuto.toString('utf8')) as RecordGenova[] | { '@graph': RecordGenova[] };
  const righe = Array.isArray(dati) ? dati : dati['@graph'];
  const comune = comuni.daCodiceIstat(CODICE_ISTAT_GENOVA);
  if (!comune) throw new Error('Comune di Genova assente dall\'elenco dei comuni');
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const tipo = (valore(r, 'hasType') ?? '').replace(/\s+/g, ' ');
    const regola = REGOLE.find((x) => x.re.test(tipo));
    if (!regola) return; // scuole di altri gradi o già nel MIM (statali, paritarie): fuori ambito.
    const nome = valore(r, 'hasName');
    const comuneRecord = valore(r, 'locatedIn');
    if (regola.scarto || !regola.tipologia || !regola.gestione || !nome) {
      esito.scartate.push({ riga: i + 1, motivo: regola.scarto ?? 'nome mancante' });
      return;
    }
    if (/^xxx\b/i.test(nome)) {
      esito.scartate.push({ riga: i + 1, motivo: `record dismesso: ${nome}` });
      return;
    }
    if (comuneRecord && comuneRecord.toUpperCase() !== 'GENOVA') {
      esito.scartate.push({ riga: i + 1, motivo: `fuori comune: ${comuneRecord}` });
      return;
    }
    const via = valore(r, 'hasAddress');
    const viaValida = via && !/non inserito/i.test(via) ? via : undefined;
    const { tipologia, gestione } = regola;
    if (tipologia === Tipologia.SCUOLA_INFANZIA && (!mim || mim.contiene(comune.codiceIstat, nome, viaValida))) {
      esito.scartate.push({ riga: i + 1, motivo: `scuola dell'infanzia comunale già nell'anagrafe MIM${mim ? '' : ' (indice non fornito)'}` });
      return;
    }
    const domiciliare = tipologia === Tipologia.SERVIZIO_DOMICILIARE;
    const codice = (valore(r, 'hasID') ?? '').match(/(\d+)$/)?.[1];
    const id = idUnico(codice ?? (domiciliare ? impronta(`${nome} ${via ?? ''}`) : slug(`${nome} ${via ?? ''}`)), visti);
    const micronido = tipologia === Tipologia.NIDO && /micronido/i.test(nome);
    const struttura: Struttura = {
      chiave: `${FONTE_GENOVA}:${id}`,
      denominazione: domiciliare ? `Servizio educativo domiciliare a ${comune.nome}` : nome,
      tipologia: micronido ? Tipologia.MICRONIDO : tipologia,
      tipologiaOriginale: tipo.toUpperCase(),
      fascia: tipologia === Tipologia.SCUOLA_INFANZIA ? '3-6' : '0-3',
      gestione,
      indirizzo: {
        via: domiciliare ? undefined : viaValida,
        cap: domiciliare ? undefined : valore(r, 'hasPostalCode')?.match(/^\d{5}$/)?.[0],
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      misureAderite: [],
      contatti: {},
      caratteristiche: [],
      provenienza: {
        fonte: FONTE_GENOVA,
        idNellaFonte: id,
        url: PAGINA_GENOVA,
        licenza: 'CC BY 4.0',
        dataRiferimento: DATA_RIFERIMENTO_GENOVA,
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
