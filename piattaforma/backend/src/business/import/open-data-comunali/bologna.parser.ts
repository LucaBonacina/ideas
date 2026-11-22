import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { titoloLeggibile } from '../../../domain/normalizza';
import { pulisci } from '../../../domain/privacy';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { idUnico, posizioneInItalia, slug } from '../strumenti/identificativi';
import { IndiceMim } from './indice-mim';

export const FONTE_BOLOGNA = 'bologna-elenco-scuole';

export const URL_BOLOGNA = 'https://opendata.comune.bologna.it/api/explore/v2.1/catalog/datasets/elenco-delle-scuole/exports/json?lang=it';

export const PAGINA_BOLOGNA = 'https://opendata.comune.bologna.it/explore/dataset/elenco-delle-scuole/';

/** 88 nidi nell'a.s. 2026-2027. */
export const MINIMO_BOLOGNA = 60;

const CODICE_ISTAT_BOLOGNA = '037006';

interface RecordBologna {
  nome?: string;
  servizio?: string;
  gestione?: string;
  denominazi?: string;
  civico?: string | number;
  subciv?: string | null;
  geo_id?: string;
  civkey?: string;
  anno_scolast?: string;
  geo_point_2d?: { lon?: number; lat?: number };
}

/** "COMUNALE IN CONCESSIONE" e "INDIRETTA": servizi del Comune affidati a un gestore esterno. */
function gestioneBologna(testo: string): Gestione | undefined {
  const g = testo.toUpperCase();
  if (/^COMUNALE|^INDIRETTA/.test(g)) return Gestione.COMUNALE;
  if (/^PRIVATA/.test(g)) return Gestione.PRIVATA;
  if (/^STATALE/.test(g)) return Gestione.STATALE;
  return undefined;
}

function annoInizio(anno: string | undefined): Date | undefined {
  const m = (anno ?? '').match(/^(\d{4})-\d{4}$/);
  return m ? new Date(`${m[1]}-09-01T00:00:00Z`) : undefined;
}

/**
 * "Elenco delle scuole" del Comune di Bologna (CC BY 4.0): si importano i nidi d'infanzia.
 * Le scuole dell'infanzia (3-6) sono nell'anagrafe MIM: si importano solo quelle comunali che, con l'indice MIM
 * passato, risultano assenti dall'anagrafe; senza indice si scartano tutte.
 */
export function parseBologna(
  contenuto: Buffer,
  comuni: ComuniLookup,
  scaricatoIl: Date,
  mim?: IndiceMim,
): EsitoParsing {
  const righe = JSON.parse(contenuto.toString('utf8')) as RecordBologna[];
  const comune = comuni.daCodiceIstat(CODICE_ISTAT_BOLOGNA);
  if (!comune) throw new Error('Comune di Bologna assente dall\'elenco dei comuni');
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const servizio = (r.servizio ?? '').toUpperCase();
    const nome = pulisci(r.nome);
    const gestione = gestioneBologna(r.gestione ?? '');
    const via = [pulisci(r.denominazi), pulisci(String(r.civico ?? '')), pulisci(r.subciv)].filter(Boolean).join(' ');
    let tipologia: Tipologia;
    if (servizio.startsWith('NIDO')) tipologia = Tipologia.NIDO;
    else if (servizio.startsWith("SCUOLA DELL'INFANZIA")) tipologia = Tipologia.SCUOLA_INFANZIA;
    else return; // primarie e secondarie: fuori ambito, non sono scarti.
    if (!nome || !gestione) {
      esito.scartate.push({ riga: i + 1, motivo: !nome ? 'nome mancante' : `gestione sconosciuta: ${r.gestione}` });
      return;
    }
    if (tipologia === Tipologia.SCUOLA_INFANZIA) {
      if (gestione !== Gestione.COMUNALE) {
        esito.scartate.push({ riga: i + 1, motivo: `scuola dell'infanzia ${r.gestione}: coperta o da verificare con l'anagrafe MIM` });
        return;
      }
      if (!mim || mim.contiene(comune.codiceIstat, nome, via)) {
        esito.scartate.push({ riga: i + 1, motivo: `scuola dell'infanzia comunale già nell'anagrafe MIM${mim ? '' : ' (indice non fornito)'}` });
        return;
      }
    }
    const id = idUnico(pulisci(r.geo_id) ?? slug(`${nome} ${via}`), visti);
    const lng = r.geo_point_2d?.lon;
    const lat = r.geo_point_2d?.lat;
    const struttura: Struttura = {
      chiave: `${FONTE_BOLOGNA}:${id}`,
      denominazione: titoloLeggibile(nome),
      tipologia,
      tipologiaOriginale: `${servizio} - ${(r.gestione ?? '').toUpperCase()}`,
      fascia: tipologia === Tipologia.NIDO ? '0-3' : '3-6',
      gestione,
      // Il Comune è gestore solo dei servizi a gestione diretta (non di quelli in concessione o indiretti).
      gestore: (r.gestione ?? '').toUpperCase() === 'COMUNALE' ? `Comune di ${comune.nome}` : undefined,
      indirizzo: {
        via: via ? titoloLeggibile(via) : undefined,
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      posizione: posizioneInItalia(lng, lat),
      misureAderite: [],
      contatti: {},
      caratteristiche: [],
      provenienza: {
        fonte: FONTE_BOLOGNA,
        idNellaFonte: id,
        url: PAGINA_BOLOGNA,
        licenza: 'CC BY 4.0',
        dataRiferimento: annoInizio(r.anno_scolast),
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
