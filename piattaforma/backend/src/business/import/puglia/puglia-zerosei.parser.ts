import { parse } from 'csv-parse/sync';
import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import {
  emailPubblicabile, isCodiceFiscalePersona, pulisci, sitoPubblicabile, telefonoPubblicabile,
} from '../../../domain/privacy';
import { normalizzaNome, titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { denominazionePubblicabile } from '../nomi/denominazione-pubblicabile';

export const FONTE_PUGLIA_ZEROSEI = 'puglia-catalogo-zerosei';

/** Codice dell'avviso "Catalogo ZEROSEI 26/27" nel filtro della ricerca (cambia a ogni anno educativo). */
export const AVVISO_PUGLIA_ZEROSEI = '10001';

/** Esportazione CSV della ricerca pubblica, filtrata sull'avviso (nessun login richiesto). */
export const URL_PUGLIA_ZEROSEI = `https://www.studioinpuglia.regione.puglia.it/bs/udo_tevlist.php?cmd=search&t=udo_tev&z_cas_avv=%3D&x_cas_avv=${AVVISO_PUGLIA_ZEROSEI}&export=csv`;

export const PAGINA_PUGLIA_ZEROSEI = 'https://www.studioinpuglia.regione.puglia.it/zerosei/';

export const MISURA_PUGLIA_ZEROSEI = 'Buono educativo zerotre (Regione Puglia)';

/** 565 unità di offerta nel catalogo 2026/27. */
export const MINIMO_PUGLIA_ZEROSEI = 400;

const TIPOLOGIE: [RegExp, Tipologia, string][] = [
  [/ASILO NIDO/, Tipologia.NIDO, 'Asilo nido'],
  [/MICRONIDO|MICRO NIDO/, Tipologia.MICRONIDO, 'Micronido'],
  [/SEZIONE PRIMAVERA/, Tipologia.SEZIONE_PRIMAVERA, 'Sezione primavera'],
  [/CENTRO LUDICO/, Tipologia.SPAZIO_GIOCO, 'Centro ludico prima infanzia'],
  [/ART 101 LETT A/, Tipologia.SERVIZIO_DOMICILIARE, 'Servizio educativo domiciliare'],
  [/ART 101 LETT B/, Tipologia.SERVIZIO_DOMICILIARE, 'Nido in famiglia'],
];

const SIGLE: Record<string, string> = { BAT: 'BT' };

/** Forme giuridiche ed enti privati riconoscibili nel nome del gestore (nome normalizzato). */
const FORMA_PRIVATA = new RegExp([
  '\\bS ?R ?L', '\\bS ?N ?C\\b', '\\bS ?A ?S\\b', '\\bS ?P ?A\\b', '\\bS ?C ?S\\b', '\\bCOOP', '\\bSOC\\b', '\\bSOCIET',
  '\\bONLUS\\b', '\\bASS(OCIAZIONE)?\\b', '\\bFONDAZIONE\\b', '\\bPARROCCHIA\\b', '\\bCONGREGAZIONE\\b', '\\bSUORE\\b',
  '\\bISTITUTO\\b.*\\b(SUORE|FIGLIE|SACRO|SAN|SANTA)\\b', '\\bIMPRESA SOCIALE\\b', '\\bE ?T ?S\\b', '\\bA ?P ?S\\b',
  '\\bDITTA\\b', '\\bPARITARIA\\b', '\\bENTE MORALE\\b', '\\bMOVIMENTO\\b', '\\bCONSORZIO\\b.*\\bCOOP',
].join('|'));

const SCUOLA_STATALE = /\bIST(ITUTO)?\b.*\b(OMNI)?COMPRENSIVO|\bCIRCOLO DIDATTICO\b|\bDIREZIONE DIDATTICA\b|\bSTATALE/;

/** Il catalogo non dichiara la natura del gestore: si deduce solo da evidenze nel nome, altrimenti resta sconosciuta. */
function gestioneDa(gestore: string): Gestione {
  const g = normalizzaNome(gestore);
  if (/^COMUNE (DI|DEL|DELLA|DELL)\b/.test(g)) return Gestione.COMUNALE;
  if (SCUOLA_STATALE.test(g) || /^(UNIONE (DEI|DI) COMUNI|AZIENDA PUBBLICA|ASP|AMBITO TERRITORIALE)\b/.test(g)) {
    return Gestione.PUBBLICA_ALTRA;
  }
  if (FORMA_PRIVATA.test(g) || isCodiceFiscalePersona(gestore)) return Gestione.PRIVATA;
  return Gestione.SCONOSCIUTA;
}

/** Catalogo telematico zerosei: unità di offerta 0-3 accreditate per il Buono educativo (Regione Puglia). */
export function parsePugliaZerosei(contenuto: Buffer, comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const testo = contenuto.toString('utf8').replace(/^\uFEFF/, '');
  // L'esportazione comincia con una nota in HTML prima dell'intestazione.
  const inizio = testo.indexOf('"Avviso"');
  if (inizio < 0) throw new Error('Intestazione del catalogo zerosei non trovata');
  const righe: Record<string, string>[] = parse(testo.slice(inizio), {
    columns: true, skip_empty_lines: true, relax_column_count: true,
  });
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Set<string>();
  righe.forEach((r, i) => {
    const riga = i + 2;
    const tipoFonte = (r.Tipo ?? '').trim();
    const voce = TIPOLOGIE.find(([re]) => re.test(normalizzaNome(tipoFonte)));
    const pratica = pulisci(r['Cod.pratica']);
    if (!voce || !pratica) {
      esito.scartate.push({ riga, motivo: !pratica ? 'codice pratica mancante' : `tipologia sconosciuta: ${tipoFonte}` });
      return;
    }
    if (visti.has(pratica)) {
      esito.scartate.push({ riga, motivo: `codice pratica ripetuto: ${pratica}` });
      return;
    }
    visti.add(pratica);
    const [, tipologia, etichetta] = voce;
    const provincia = (r.Prov ?? '').trim().toUpperCase();
    const comune = comuni.daNome(r.Comune ?? '', SIGLE[provincia] ?? provincia) ?? comuni.daNome(r.Comune ?? '', '', 'Puglia');
    if (!comune) {
      esito.scartate.push({ riga, motivo: `comune non trovato: ${r.Comune} (${provincia})` });
      return;
    }
    const gestoreFonte = pulisci(r.Gestore) ?? '';
    const gestione = gestioneDa(gestoreFonte);
    const pubblica = [Gestione.COMUNALE, Gestione.PUBBLICA_ALTRA].includes(gestione);
    const domiciliare = tipologia === Tipologia.SERVIZIO_DOMICILIARE;
    const nomeFonte = pulisci(r.Denominazione) ?? '';
    // Alcuni gestori sono ditte individuali col nome della persona: quel nome non va pubblicato, neanche dentro la
    // denominazione. Un gestore di due o tre parole senza forma giuridica né parole comuni si tratta come persona.
    const g = normalizzaNome(gestoreFonte);
    const parole = g.split(' ').length;
    const gestorePersona = gestione === Gestione.SCONOSCIUTA && parole >= 2 && parole <= 3
      && !/\b(ASILO|NIDO|MICRONIDO|CENTRO|SCUOLA|ISTITUTO|CONSORZIO|SEZIONE|LUDOTECA|IL|LO|LA|LE|GLI|I)\b/.test(g);
    const nome = pubblica ? nomeFonte : denominazionePubblicabile(nomeFonte, gestorePersona ? [gestoreFonte] : []);
    // L'indirizzo a volte finisce con il CAP ("TRAV. II VIA UMBRIA N. 5, 70132").
    const via = pulisci((r.Indirizzo ?? '').replace(/[,\s]+\d{5}\s*$/, ''));
    const struttura: Struttura = {
      chiave: `${FONTE_PUGLIA_ZEROSEI}:${pratica}`,
      denominazione: domiciliare || !nome ? `${etichetta} a ${comune.nome}` : titoloLeggibile(nome),
      tipologia,
      tipologiaOriginale: tipoFonte,
      fascia: '0-3',
      gestione,
      gestore: pubblica ? titoloLeggibile(gestoreFonte) : undefined,
      indirizzo: {
        via: domiciliare || !via ? undefined : titoloLeggibile(via),
        cap: domiciliare ? undefined : (r.Cap ?? '').match(/\d{5}/)?.[0],
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      misureAderite: [MISURA_PUGLIA_ZEROSEI],
      contatti: domiciliare ? {} : {
        email: emailPubblicabile(r.Email),
        sito: sitoPubblicabile(r.Web),
        telefono: telefonoPubblicabile(r.Telefono),
      },
      caratteristiche: [],
      provenienza: {
        fonte: FONTE_PUGLIA_ZEROSEI,
        idNellaFonte: pratica,
        url: PAGINA_PUGLIA_ZEROSEI,
        licenza: 'non dichiarata dalla fonte',
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
