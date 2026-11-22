import { parse } from 'csv-parse/sync';
import { Comune } from '../../../database/comune.schema';
import { Posizione, Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { normalizzaNome, titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import {
  idUnico, impronta, posizioneInItalia, slug,
} from '../strumenti/identificativi';

export const FONTE_REGGIO_EMILIA = 'reggio-emilia-servizi-prima-infanzia';

const BASE_RE = 'https://opendata.comune.re.it/dataset/3c8a352e-75a3-489a-bbc6-322d93241843/resource';

/** "Iscritti ai servizi prescolari fascia 0-3 anni a.s. 2024/25 della Provincia di Reggio Emilia" (CC BY). */
export const URL_REGGIO_EMILIA = {
  comunali: `${BASE_RE}/9c814f7d-7976-43e3-9da4-4290582024ec/download/nidi-dinfanzia-comunali.csv`,
  privati: `${BASE_RE}/61c331d9-7dc6-4344-95aa-d950f005d566/download/nidi-dinfanzia-convenzionati-appaltato-e-privati.csv`,
  fism: `${BASE_RE}/94cd1397-dd5a-4eb1-976a-ba3400546ce7/download/nidi-fism.csv`,
  /** Nidi del Comune capoluogo con indirizzo e coordinate (2022): solo per arricchire i record della città. */
  geo: 'https://geoserver.comune.re.it/geoserver/geo_re/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geo_re:SCU_SCUOLE_NIDO&outputFormat=application/json&srsName=EPSG:4326',
};

export const PAGINA_REGGIO_EMILIA = 'https://opendata.comune.re.it/dataset/iscritti-ai-servizi-prescolari-fascia-0-3-anni';

export const ANNO_REGGIO_EMILIA = '2024/25';

/** 141 servizi nella provincia nell'a.s. 2024/25. */
export const MINIMO_REGGIO_EMILIA = 100;

export interface FileReggioEmilia {
  comunali: Buffer;
  privati: Buffer;
  fism: Buffer;
  geo?: Buffer;
}

/** Abbreviazioni dei nomi dei comuni usate nei file provinciali. */
const ALIAS_COMUNI: Record<string, string> = {
  'REGGIO EMILIA': "Reggio nell'Emilia",
  MONTECCHIO: 'Montecchio Emilia',
  BAGNOLO: 'Bagnolo in Piano',
  'S ILARIO': "Sant'Ilario d'Enza",
  'S ILARIO D ENZA': "Sant'Ilario d'Enza",
  'S POLO': "San Polo d'Enza",
  'S MARTINO IN RIO': 'San Martino in Rio',
  'CASTELNOVO SOTTO': 'Castelnovo di Sotto',
};

/** Parole che non distinguono un nido da un altro nel confronto dei nomi. */
const PAROLE_GENERICHE = new Set(['CENTRO', 'VERDE', 'NIDO', 'SEZIONE', 'SCUOLA']);

type Sezione = 'comunale' | 'convenzionato' | 'appaltato' | 'privato' | 'fism';

/** Righe-titolo che nel file dei nidi non comunali separano le tre sezioni. */
const CAMBI_SEZIONE: Record<string, Sezione> = {
  CONVENZIONATI: 'convenzionato', APPALTATI: 'appaltato', PRIVATI: 'privato',
};

interface NidoGeo { nome: string; via: string; posizione?: Posizione }

function testo(contenuto: Buffer): string {
  const utf8 = contenuto.toString('utf8');
  return (utf8.includes('\uFFFD') ? contenuto.toString('latin1') : utf8).replace(/^\uFEFF/, '');
}

function righeCsv(contenuto: Buffer): string[][] {
  return parse(testo(contenuto), {
    delimiter: ';', relax_column_count: true, relax_quotes: true, skip_empty_lines: true,
  });
}

function comuneReggiano(nome: string, comuni: ComuniLookup): Comune | undefined {
  const chiave = normalizzaNome(nome);
  return comuni.daNome(ALIAS_COMUNI[chiave] ?? nome, 'RE');
}

function parole(nome: string): Set<string> {
  return new Set(normalizzaNome(nome).split(' ').filter((p) => p.length >= 4 && !PAROLE_GENERICHE.has(p)));
}

/** Nidi del capoluogo dal servizio WFS del Comune (indirizzo e coordinate). */
export function nidiGeoReggio(contenuto: Buffer): NidoGeo[] {
  const geo = JSON.parse(testo(contenuto)) as {
    features: { properties: Record<string, string>; geometry?: { coordinates?: number[] } }[];
  };
  return geo.features.map((f) => ({
    nome: f.properties.NOME ?? '',
    via: f.properties.INDIRIZZO ?? '',
    posizione: posizioneInItalia(f.geometry?.coordinates?.[0], f.geometry?.coordinates?.[1]),
  }));
}

function tipologiaDa(sezione: Sezione, nome: string): Tipologia {
  if (sezione === 'fism') return Tipologia.SEZIONE_PRIMAVERA;
  if (/nido famiglia|domicil/i.test(nome)) return Tipologia.SERVIZIO_DOMICILIARE;
  // Il piccolo gruppo educativo (DGR 1564/2017) è un servizio per pochi bambini, assimilato al micronido.
  if (/piccolo gruppo educativo/i.test(nome)) return Tipologia.MICRONIDO;
  return Tipologia.NIDO;
}

/** Varianti del nido scritte nel nome (senza riportare il nome, che per i nidi famiglia può essere di una persona). */
function variante(nome: string): string {
  return [/piccolo gruppo educativo/i.test(nome) ? ' - PICCOLO GRUPPO EDUCATIVO' : '', /nido famiglia/i.test(nome) ? ' - NIDO FAMIGLIA' : '']
    .join('');
}

const ETICHETTE: Record<Sezione, string> = {
  comunale: "NIDO D'INFANZIA COMUNALE",
  appaltato: "NIDO D'INFANZIA COMUNALE IN APPALTO",
  convenzionato: "NIDO D'INFANZIA PRIVATO CONVENZIONATO",
  privato: "NIDO D'INFANZIA PRIVATO",
  fism: 'SEZIONE PRIMAVERA ANNESSA A SCUOLA DELL\'INFANZIA F.I.S.M.',
};

/**
 * Servizi per la prima infanzia della provincia di Reggio Emilia con gli iscritti dell'a.s. 2024/25:
 * nidi comunali, nidi convenzionati, appaltati e privati, sezioni primavera delle scuole F.I.S.M.
 * Per i nidi del capoluogo si aggiungono indirizzo e coordinate dal servizio geografico del Comune.
 */
export function parseReggioEmilia(file: FileReggioEmilia, comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  const geo = file.geo ? nidiGeoReggio(file.geo) : [];
  const usati = new Set<NidoGeo>();
  const leggi = (contenuto: Buffer, sezioneIniziale: Sezione, nomeFile: string): void => {
    let sezione = sezioneIniziale;
    righeCsv(contenuto).forEach((r, i) => {
      const prima = (r[0] ?? '').trim();
      const cambio = CAMBI_SEZIONE[prima.toUpperCase()];
      if (cambio && sezioneIniziale === 'convenzionato') {
        sezione = cambio;
        return;
      }
      const nomeFonte = (r[1] ?? '').replace(/\s+/g, ' ').trim();
      const iscritti = Number((r[9] ?? '').replace(/\./g, '').trim());
      if (!prima || !nomeFonte || /^(COMUNE|TOTALE)$/i.test(prima) || !Number.isFinite(iscritti) || r[9]?.trim() === '') return;
      const comune = comuneReggiano(prima, comuni);
      if (!comune) {
        esito.scartate.push({ riga: i + 1, motivo: `${nomeFile}: comune non trovato: ${prima}` });
        return;
      }
      const polo = /\*\s*$/.test(nomeFonte);
      const nome = nomeFonte.replace(/\*\s*$/, '').replace(/""/g, '"').trim();
      const tipologia = tipologiaDa(sezione, nome);
      const domiciliare = tipologia === Tipologia.SERVIZIO_DOMICILIARE;
      const id = idUnico(`${sezione}-${comune.codiceIstat}-${domiciliare ? impronta(nome) : slug(nome)}`, visti);
      // Indirizzo e coordinate dal WFS: solo nel capoluogo e solo se una parola del nome coincide con un solo nido.
      const candidati = comune.codiceIstat === '035033' && !domiciliare
        ? geo.filter((g) => [...parole(g.nome)].some((p) => parole(nome).has(p))) : [];
      const luogo = candidati.length === 1 && !usati.has(candidati[0]) ? candidati[0] : undefined;
      if (luogo) usati.add(luogo);
      const gestione = ['comunale', 'appaltato'].includes(sezione) ? Gestione.COMUNALE : Gestione.PRIVATA;
      const struttura: Struttura = {
        chiave: `${FONTE_REGGIO_EMILIA}:${id}`,
        denominazione: domiciliare ? `Nido famiglia a ${comune.nome}` : nome,
        tipologia,
        tipologiaOriginale: `${ETICHETTE[sezione]}${polo ? " (POLO PER L'INFANZIA 0-6)" : ''}${variante(nome)}`,
        fascia: '0-3',
        gestione,
        gestore: sezione === 'comunale' ? `Comune di ${comune.nome}` : undefined,
        indirizzo: {
          via: luogo ? titoloLeggibile(luogo.via) : undefined,
          comune: comune.nome,
          codiceIstat: comune.codiceIstat,
          codiceCatastale: comune.codiceCatastale,
          siglaProvincia: comune.siglaProvincia,
          regione: comune.regione,
        },
        posizione: luogo?.posizione,
        posizioneFonte: luogo?.posizione ? 'reggio-emilia-wfs-nidi' : undefined,
        bambiniIscritti: domiciliare || !Number.isFinite(iscritti) ? undefined : iscritti,
        annoIscritti: domiciliare ? undefined : ANNO_REGGIO_EMILIA,
        misureAderite: [],
        contatti: {},
        caratteristiche: [],
        provenienza: {
          fonte: FONTE_REGGIO_EMILIA,
          idNellaFonte: id,
          url: PAGINA_REGGIO_EMILIA,
          licenza: 'CC BY',
          scaricatoIl,
        },
        attiva: true,
      };
      esito.strutture.push(struttura);
    });
  };
  leggi(file.comunali, 'comunale', 'nidi comunali');
  leggi(file.privati, 'convenzionato', 'nidi convenzionati, appaltati e privati');
  leggi(file.fism, 'fism', 'sezioni primavera F.I.S.M.');
  return esito;
}
