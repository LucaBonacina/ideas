import { parse } from 'csv-parse/sync';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import {
  emailPubblicabile, isCodiceFiscalePersona, pulisci, sitoPubblicabile, telefonoPubblicabile,
} from '../../../domain/privacy';
import { titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';

export const FONTE_LOMBARDIA_UDOS = 'lombardia-udos';

export const URL_LOMBARDIA_UDOS = 'https://www.dati.lombardia.it/api/views/pej5-wp65/rows.csv?accessType=DOWNLOAD';

const TIPOLOGIE: Record<string, Tipologia> = {
  'ASILO NIDO': Tipologia.NIDO,
  'MICRO NIDO': Tipologia.MICRONIDO,
  'NIDO FAMIGLIA': Tipologia.SERVIZIO_DOMICILIARE,
  'CENTRO PRIMA INFANZIA': Tipologia.SPAZIO_GIOCO,
};

/** Forme giuridiche private riconoscibili nel nome dell'ente gestore. */
const FORMA_PRIVATA = new RegExp([
  '\\bS\\.?\\s?R\\.?\\s?L\\.?\\b', '\\bS\\.?\\s?N\\.?\\s?C\\.?\\b', '\\bS\\.?\\s?A\\.?\\s?S\\.?\\b', '\\bS\\.?\\s?P\\.?\\s?A\\.?\\b',
  '\\bCOOP', '\\bSOCIET', '\\bONLUS\\b', '\\bASSOCIAZIONE\\b', '\\bFONDAZIONE\\b', '\\bPARROCCHIA\\b',
  '\\bCONGREGAZIONE\\b', '\\bIMPRESA SOCIALE\\b', '\\bE\\.?T\\.?S\\.?\\b', '\\bA\\.?P\\.?S\\.?\\b',
].join('|'));

/** Gestione dedotta solo da evidenze nel nome dell'ente gestore; altrimenti resta sconosciuta. */
function gestioneDa(enteGestore: string, gestorePersona: boolean): Gestione {
  if (gestorePersona) return Gestione.PRIVATA;
  const nome = enteGestore.toUpperCase();
  if (/^COMUNE (DI|DEL|DELLA|DELL')/.test(nome)) return Gestione.COMUNALE;
  if (/^(UNIONE (DEI|DI) COMUNI|AZIENDA SPECIALE|AZIENDA SERVIZI ALLA PERSONA|ASP |CONSORZIO)/.test(nome)) {
    return Gestione.PUBBLICA_ALTRA;
  }
  if (FORMA_PRIVATA.test(nome)) return Gestione.PRIVATA;
  return Gestione.SCONOSCIUTA;
}

/** Registro delle unità d'offerta sociali per la prima infanzia della Regione Lombardia. */
export function parseLombardiaUdos(contenuto: Buffer, comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const righe: Record<string, string>[] = parse(contenuto.toString('utf8').replace(/^\uFEFF/, ''), {
    columns: true, skip_empty_lines: true, relax_column_count: true,
  });
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  righe.forEach((r, i) => {
    const riga = i + 2;
    const cudes = pulisci(r.CODICE_CUDES);
    const tipologiaFonte = (r.UNITA_OFFERTE_SOCIALI ?? '').trim().toUpperCase();
    const tipologia = TIPOLOGIE[tipologiaFonte];
    if (!cudes || !tipologia) {
      esito.scartate.push({ riga, motivo: !cudes ? 'codice CUDES mancante' : `tipologia sconosciuta: ${tipologiaFonte}` });
      return;
    }
    const comune = comuni.daNome(r.COMUNE_DI_UBICAZIONE ?? '', r.PROV ?? '');
    if (!comune) {
      esito.scartate.push({ riga, motivo: `comune non trovato: ${r.COMUNE_DI_UBICAZIONE} (${r.PROV})` });
      return;
    }
    const enteGestore = pulisci(r.DENOMINAZIONE_EG) ?? '';
    const gestorePersona = isCodiceFiscalePersona(r.CODICE_FISCALE_EG);
    const gestione = gestioneDa(enteGestore, gestorePersona);
    // Un nido famiglia si svolge in un'abitazione: niente via né coordinate, solo il comune.
    const domiciliare = tipologia === Tipologia.SERVIZIO_DOMICILIARE;
    const lat = Number(r.WGS84_Y);
    const lng = Number(r.WGS84_X);
    const coordinateValide = Number.isFinite(lat) && Number.isFinite(lng)
      && lat > 35 && lat < 48 && lng > 6 && lng < 19;
    const posti = Number.parseInt(r.NR_POSTI ?? '', 10);
    const via = pulisci(r.INDIRIZZO_STRUTTURA);
    const nome = pulisci(r.DENOMINAZIONE_STRUTTURA) ?? cudes;
    esito.strutture.push({
      chiave: `${FONTE_LOMBARDIA_UDOS}:${cudes}`,
      denominazione: domiciliare && gestorePersona ? `Nido famiglia a ${comune.nome}` : titoloLeggibile(nome),
      tipologia,
      tipologiaOriginale: tipologiaFonte,
      fascia: '0-3',
      gestione,
      // Il nome del gestore si mostra solo per gli enti pubblici: i nomi delle società di persone
      // (snc, sas) e delle associazioni contengono spesso nomi di persone fisiche.
      gestore: [Gestione.COMUNALE, Gestione.PUBBLICA_ALTRA].includes(gestione)
        ? titoloLeggibile(enteGestore) : undefined,
      indirizzo: {
        via: domiciliare || !via ? undefined : titoloLeggibile(via),
        cap: pulisci(r.CAP),
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      posizione: !domiciliare && coordinateValide ? { type: 'Point', coordinates: [lng, lat] } : undefined,
      posti: Number.isFinite(posti) && posti > 0 ? posti : undefined,
      contatti: domiciliare ? {} : {
        email: emailPubblicabile(r.EMAIL_STRUTTURA),
        sito: sitoPubblicabile(r.SITO_WEB_MAIL),
        telefono: telefonoPubblicabile(r.TELEFONO_STRUTTURA),
      },
      caratteristiche: tipologiaFonte === 'CENTRO PRIMA INFANZIA' ? ['centro prima infanzia (Lombardia)'] : [],
      provenienza: {
        fonte: FONTE_LOMBARDIA_UDOS,
        idNellaFonte: cudes,
        url: 'https://www.dati.lombardia.it/d/pej5-wp65',
        licenza: 'non dichiarata dalla fonte',
        scaricatoIl,
      },
      attiva: true,
    });
  });
  return esito;
}
