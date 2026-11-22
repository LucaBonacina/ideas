import { parse } from 'csv-parse/sync';
import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { pulisci } from '../../../domain/privacy';
import { normalizzaNome, titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { contieneNomiDiPersona, denominazionePubblicabile } from '../nomi/denominazione-pubblicabile';

export const FONTE_PUGLIA_REGISTRO = 'puglia-registro-strutture';

export const URL_PUGLIA_REGISTRO = 'https://dati.puglia.it/ckan/dataset/bffa2d3d-c0b4-4fc9-a96c-7104a272ed38/resource/7aa651c7-b536-494e-861e-2adbcf798223/download/registri2023od.csv';

export const PAGINA_PUGLIA_REGISTRO = 'https://dati.puglia.it/ckan/dataset/registri-regionali-delle-strutture-e-dei-servizi-socio-assistenziali-pubblici-e-privati-autorizzati';

/** Data di pubblicazione dell'estrazione "registri2023od.csv" (ultima iscrizione presente: 24/05/2023). */
export const DATA_RIFERIMENTO_PUGLIA_REGISTRO = new Date('2023-10-05T00:00:00Z');

/** 935 servizi 0-3 nell'estrazione 2023. */
export const MINIMO_PUGLIA_REGISTRO = 650;

/** Articoli del Reg. reg. 4/2007 dei servizi per la prima infanzia (le ludoteche, art. 89, sono per 3-11 anni). */
const TIPOLOGIE: [RegExp, Tipologia, string][] = [
  [/^ASILO NIDO/, Tipologia.NIDO, 'Asilo nido'],
  [/^MICRO NIDO/, Tipologia.MICRONIDO, 'Micronido'],
  [/^SEZIONE PRIMAVERA/, Tipologia.SEZIONE_PRIMAVERA, 'Sezione primavera'],
  [/^CENTRO LUDICO PRIMA INFANZIA/, Tipologia.SPAZIO_GIOCO, 'Centro ludico prima infanzia'],
  [/ART 101A/, Tipologia.SERVIZIO_DOMICILIARE, 'Servizio educativo domiciliare'],
  [/ART 101B/, Tipologia.SERVIZIO_DOMICILIARE, 'Nido in famiglia'],
];

/** Sigle del registro diverse dalla sigla automobilistica ISTAT. */
const SIGLE: Record<string, string> = { BAT: 'BT' };

/** Comuni scritti nel registro in forma diversa da quella ISTAT. */
const ALIAS_COMUNI: Record<string, string> = { 'SANNICANDRO GARGANICO': 'San Nicandro Garganico' };

/** Scuole statali, anche abbreviate ("Dir.ne Did.ca", "I.C.", "Ist. comp."), sul nome normalizzato. */
const SCUOLA_STATALE = new RegExp([
  '\\bIST(ITUTO)?\\b.*\\b(OMNI)?COMP', '\\bDIR(EZIONE| NE)?\\b.*\\bDID', 'CIRCOLO DIDATTICO', 'ISTITUZIONE SCOLASTICA',
  '^I C\\b', '\\bSTATALE\\b',
].join('|'));

const ALTRO_ENTE = /^(UNIONE|CONSORZIO|AZIENDA|ASP|AMBITO|PROVINCIA)\b/;

/** Gestione dalla natura del titolare dichiarata dal registro, precisata dal nome dell'ente pubblico. */
function gestioneDa(natura: string, titolare: string): Gestione {
  if (natura === 'privata') return Gestione.PRIVATA;
  if (natura !== 'pubblica') return Gestione.SCONOSCIUTA;
  const t = normalizzaNome(titolare);
  if (/\bCOMUN(E|ALE)\b|\bSINDACO\b/.test(t)) return Gestione.COMUNALE;
  if (SCUOLA_STATALE.test(t) || ALTRO_ENTE.test(t)) return Gestione.PUBBLICA_ALTRA;
  return Gestione.PUBBLICA;
}

/** Nome dell'ente pubblico titolare, solo se è davvero il nome di un ente ("Comune di Bari", "Istituto comprensivo …"). */
function gestoreDa(gestione: Gestione, titolare: string): string | undefined {
  const t = normalizzaNome(titolare);
  if (gestione === Gestione.COMUNALE) return /^COMUNE DI\b/.test(t) ? titoloLeggibile(titolare) : undefined;
  if (gestione === Gestione.PUBBLICA_ALTRA) return titoloLeggibile(titolare);
  return undefined;
}

/** Registri regionali delle strutture e dei servizi socio-assistenziali autorizzati (Puglia, open data CSV). */
export function parsePugliaRegistro(contenuto: Buffer, comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const righe: Record<string, string>[] = parse(contenuto.toString('utf8').replace(/^\uFEFF/, ''), {
    columns: true, skip_empty_lines: true, relax_column_count: true,
  });
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const riga = i + 2;
    const articolo = (r.ARTICOLO ?? '').trim();
    const voce = TIPOLOGIE.find(([re]) => re.test(normalizzaNome(articolo)));
    // Il file comprende anche anziani, disabili e gli altri servizi per minori: si tengono solo i servizi 0-3.
    if ((r.REGISTRO ?? '').trim() !== 'Minori' || !voce) return;
    const [, tipologia, etichetta] = voce;
    if ((r.CANCELLATO ?? '').trim().toUpperCase() !== 'NO' || pulisci(r.DATA_ATTO_CANCELLAZIONE)) {
      esito.scartate.push({ riga, motivo: 'cancellato dal registro' });
      return;
    }
    // Alcune sedi cessate sono segnalate solo nel nome ("HEIDI" HA CESSATO, "cessata attività").
    if (/\bCESSAT[OA]\b|\bCHIUS[OA]\b/.test(normalizzaNome(r.DENOMINAZIONE_SEDE_OP ?? ''))) {
      esito.scartate.push({ riga, motivo: 'cessato secondo la denominazione' });
      return;
    }
    const provincia = (r.PROVINCIA_SEDE_OP ?? '').trim().toUpperCase();
    const nomeComune = ALIAS_COMUNI[normalizzaNome(r.COMUNE_SEDE_OP ?? '')] ?? r.COMUNE_SEDE_OP ?? '';
    const comune = comuni.daNome(nomeComune, SIGLE[provincia] ?? provincia) ?? comuni.daNome(nomeComune, '', 'Puglia');
    if (!comune) {
      esito.scartate.push({ riga, motivo: `comune non trovato: ${r.COMUNE_SEDE_OP} (${provincia})` });
      return;
    }
    const titolare = pulisci(r.DENOMINAZIONE_TITOLARE) ?? '';
    const gestione = gestioneDa((r.NATURA_TITOLARE ?? '').trim().toLowerCase(), titolare);
    const domiciliare = tipologia === Tipologia.SERVIZIO_DOMICILIARE;
    // Il registro riporta nome e cognome del legale rappresentante: non si pubblicano, e se compaiono
    // nel nome della sede si usa un nome generico.
    const legale = [r.COGNOME_LEGALE ?? '', r.NOME_LEGALE ?? ''];
    // Alcuni nomi hanno caratteri di controllo e "¿" al posto di virgolette e apostrofi (conversione di codifica).
    const nomeFonte = (pulisci(r.DENOMINAZIONE_SEDE_OP) ?? '').replace(/[\u0080-\u009f]/g, '').replace(/¿/g, "'");
    let nome: string | undefined = nomeFonte && !contieneNomiDiPersona(nomeFonte, legale) ? nomeFonte : undefined;
    // I servizi pubblici hanno intitolazioni; nei privati " di Cognome Nome" è spesso il titolare.
    if ([Gestione.PRIVATA, Gestione.SCONOSCIUTA].includes(gestione)) {
      nome = denominazionePubblicabile(nomeFonte, legale);
    }
    // Nessun identificativo univoco: provincia del registro, numero del provvedimento di iscrizione e posizione.
    const base = [r.PROVINCIA_REGISTRO, r.NUM_PROVV_ISCRIZIONE_REGISTRO, r.POSIZIONE]
      .map((v) => normalizzaNome(v ?? '').replace(/ /g, '') || 'x').join('-');
    const ripetizioni = (visti.get(base) ?? 0) + 1;
    visti.set(base, ripetizioni);
    const id = ripetizioni === 1 ? base : `${base}-${ripetizioni}`;
    const posti = Number.parseInt(r.RICETTIVITA ?? '', 10);
    const via = pulisci(r.INDIRIZZO_SEDE_OP);
    const struttura: Struttura = {
      chiave: `${FONTE_PUGLIA_REGISTRO}:${id}`,
      denominazione: domiciliare || !nome ? `${etichetta} a ${comune.nome}` : titoloLeggibile(nome),
      tipologia,
      tipologiaOriginale: articolo,
      fascia: '0-3',
      gestione,
      gestore: gestoreDa(gestione, titolare),
      indirizzo: {
        via: domiciliare || !via ? undefined : titoloLeggibile(via),
        cap: domiciliare ? undefined : (r.CAP_SEDE_OP ?? '').match(/\d{5}/)?.[0],
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      posti: Number.isFinite(posti) && posti > 0 ? posti : undefined,
      misureAderite: [],
      contatti: {},
      caratteristiche: [],
      provenienza: {
        fonte: FONTE_PUGLIA_REGISTRO,
        idNellaFonte: id,
        url: PAGINA_PUGLIA_REGISTRO,
        licenza: 'CC-BY 4.0',
        dataRiferimento: DATA_RIFERIMENTO_PUGLIA_REGISTRO,
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
