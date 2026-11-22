import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { normalizzaNome } from '../../../domain/normalizza';
import { pulisci } from '../../../domain/privacy';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import {
  idUnico, impronta, posizioneInItalia, slug,
} from '../strumenti/identificativi';

export const FONTE_FERRARA = 'ferrara-nidi-spazi-bambini';

export const URL_FERRARA = 'https://sit.comune.fe.it/geoserverckan/Ferrara/Nido_preview/wfs?service=WFS&version=2.0.0&request=GetFeature&typeNames=Ferrara:Nido_preview&outputFormat=application/json&srsName=EPSG:4326';

export const PAGINA_FERRARA = 'https://dati.comune.fe.it/dataset/nido';

/** 37 record (36 servizi distinti) nella mappatura riferita al 2021. */
export const MINIMO_FERRARA = 25;

const CODICE_ISTAT_FERRARA = '038008';

/** Il campo A_2021 dice se il servizio era attivo nel 2021: è l'anno di riferimento del dato. */
export const DATA_RIFERIMENTO_FERRARA = new Date('2021-12-31T00:00:00Z');

interface ProprietaFerrara {
  NOME?: string;
  DESCRIZION?: string;
  INDIRIZZO?: string;
  ID?: string;
  LOC?: string;
  A_2021?: string;
  GESTIONE?: string;
  LEGENDA?: string;
}

/** Gestione dichiarata nel campo GESTIONE o, se vuoto, nella descrizione ("scuola Nido Comunale"). */
function gestioneFerrara(p: ProprietaFerrara): Gestione {
  const testo = `${p.GESTIONE ?? ''} ${p.GESTIONE ? '' : p.DESCRIZION ?? ''}`.toUpperCase();
  if (/COMUNAL/.test(testo)) return Gestione.COMUNALE;
  if (/PRIVAT/.test(testo)) return Gestione.PRIVATA;
  return Gestione.SCONOSCIUTA;
}

/**
 * Mappatura dei servizi 0-3 pubblici e privati del Comune di Ferrara (WFS, dato annuale fermo al 2021).
 * "Nido + Infanzia": si importa il nido (la scuola dell'infanzia è nell'anagrafe MIM). Un nido con spazio bambini
 * produce due record. I "P.G.E." (piccoli gruppi educativi) possono stare in un'abitazione: nome generico,
 * senza indirizzo né coordinate.
 */
export function parseFerrara(contenuto: Buffer, comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const geo = JSON.parse(contenuto.toString('utf8')) as {
    features: { id?: string; properties: ProprietaFerrara; geometry?: { coordinates?: number[] } }[];
  };
  const comune = comuni.daCodiceIstat(CODICE_ISTAT_FERRARA);
  if (!comune) throw new Error('Comune di Ferrara assente dall\'elenco dei comuni');
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  const giaVisti = new Set<string>();
  geo.features.forEach((f, i) => {
    const p = f.properties;
    const nome = pulisci(p.NOME);
    const via = pulisci(p.INDIRIZZO);
    if (!nome) {
      esito.scartate.push({ riga: i + 1, motivo: 'nome mancante' });
      return;
    }
    if (p.LEGENDA && !/attiv/i.test(p.LEGENDA)) {
      esito.scartate.push({ riga: i + 1, motivo: `non attivo: ${p.LEGENDA}` });
      return;
    }
    const firma = `${normalizzaNome(nome)}|${normalizzaNome(via ?? '')}`;
    if (giaVisti.has(firma)) {
      esito.scartate.push({ riga: i + 1, motivo: `duplicato: ${nome}` });
      return;
    }
    giaVisti.add(firma);
    const descrizione = (p.DESCRIZION ?? '').replace(/\\.*$/, '').trim();
    const gestione = gestioneFerrara(p);
    const domiciliare = /^P\.?\s?G\.?\s?E\.?\b|piccolo gruppo educativo/i.test(nome);
    const conSpazio = /spazio bambin/i.test(`${descrizione} ${nome}`);
    const [lng, lat] = f.geometry?.coordinates ?? [];
    // Per i servizi in abitazione l'identificativo non deve ripetere nome e indirizzo.
    const base = pulisci(p.ID) ?? (domiciliare ? impronta(`${nome} ${via ?? ''}`) : slug(`${nome} ${via ?? ''}`));
    const servizi: { tipologia: Tipologia; suffisso: string }[] = [
      { tipologia: domiciliare ? Tipologia.SERVIZIO_DOMICILIARE : Tipologia.NIDO, suffisso: '' },
      ...(conSpazio && !domiciliare ? [{ tipologia: Tipologia.SPAZIO_GIOCO, suffisso: '-spazio-bambini' }] : []),
    ];
    for (const s of servizi) {
      const id = idUnico(`${base}${s.suffisso}`, visti);
      const nomeServizio = nome.replace(/\s*\+.*spazio bambin[oi]\s*$/i, '').trim();
      let denominazione = nomeServizio;
      if (s.tipologia === Tipologia.SPAZIO_GIOCO) {
        denominazione = `Spazio bambini ${nome.match(/\+\s*(.+?)\s*spazio/i)?.[1] ?? nomeServizio}`;
      }
      if (domiciliare) denominazione = `Piccolo gruppo educativo a ${comune.nome}`;
      const struttura: Struttura = {
        chiave: `${FONTE_FERRARA}:${id}`,
        denominazione,
        tipologia: s.tipologia,
        tipologiaOriginale: `${descrizione || 'Nido'}`.toUpperCase(),
        fascia: '0-3',
        gestione,
        gestore: gestione === Gestione.COMUNALE ? `Comune di ${comune.nome}` : undefined,
        indirizzo: {
          via: domiciliare ? undefined : via,
          comune: comune.nome,
          codiceIstat: comune.codiceIstat,
          codiceCatastale: comune.codiceCatastale,
          siglaProvincia: comune.siglaProvincia,
          regione: comune.regione,
        },
        posizione: domiciliare ? undefined : posizioneInItalia(lng, lat),
        misureAderite: [],
        contatti: {},
        caratteristiche: [],
        provenienza: {
          fonte: FONTE_FERRARA,
          idNellaFonte: id,
          url: PAGINA_FERRARA,
          licenza: 'CC BY 4.0',
          dataRiferimento: DATA_RIFERIMENTO_FERRARA,
          scaricatoIl,
        },
        attiva: true,
      };
      esito.strutture.push(struttura);
    }
  });
  return esito;
}
