import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { idUnico, impronta } from '../strumenti/identificativi';

export interface RigaSezionePrimavera {
  codice?: string;
  nome: string;
  comune: string;
  provincia?: string;
  indirizzo?: string;
}

export interface FonteSezioniPrimavera {
  fonte: string;
  regione: string;
  url: string;
  licenza: string;
  dataRiferimento: Date;
  /** Atto da citare nella scheda, es. "Decreto USR Lombardia n. 760 del 21/05/2026". */
  atto: string;
}

/** Codice meccanografico di una scuola (es. BG1A08400B); le righe con un codice fiscale non lo hanno. */
const MECCANOGRAFICO = /\b([A-Z]{2}[0-9A-Z]{8})\b/;

export function codiceMeccanografico(testo: string | undefined): string | undefined {
  const m = MECCANOGRAFICO.exec((testo ?? '').toUpperCase().replace(/\s+/g, ''));
  return m && /\d/.test(m[1]) ? m[1] : undefined;
}

/**
 * Sezioni primavera (servizio 24-36 mesi in una scuola dell'infanzia) dagli elenchi regionali di finanziamento.
 * Se la riga ha il codice meccanografico di una scuola già nell'anagrafe MIM, la sezione ne prende indirizzo,
 * coordinate, contatti e gestione: sta nello stesso edificio.
 */
export function parseSezioniPrimavera(
  righe: RigaSezionePrimavera[],
  meta: FonteSezioniPrimavera,
  comuni: ComuniLookup,
  scuole: Map<string, Struttura>,
  scaricatoIl: Date,
): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const scuola = r.codice ? scuole.get(r.codice) : undefined;
    const comune = scuola
      ? comuni.daCodiceIstat(scuola.indirizzo.codiceIstat)
      : comuni.daNome(r.comune, r.provincia ?? '', meta.regione);
    if (!comune) {
      esito.scartate.push({ riga: i + 1, motivo: `comune non trovato: ${r.comune} (${r.provincia ?? ''})` });
      return;
    }
    if (!r.nome && !scuola) {
      esito.scartate.push({ riga: i + 1, motivo: 'riga senza nome né codice' });
      return;
    }
    const nomeScuola = scuola?.denominazione ?? titoloLeggibile(r.nome);
    const denominazione = /^sezion[ei] primavera/i.test(nomeScuola) ? nomeScuola : `Sezione primavera c/o ${nomeScuola}`;
    const id = idUnico(r.codice ?? `${comune.codiceIstat}-${impronta(r.nome)}`, visti);
    let gestione = Gestione.SCONOSCIUTA;
    if (scuola) gestione = scuola.gestione;
    else if (/paritari/i.test(r.nome)) gestione = Gestione.PARITARIA;
    const struttura: Struttura = {
      chiave: `${meta.fonte}:${id}`,
      denominazione,
      tipologia: Tipologia.SEZIONE_PRIMAVERA,
      tipologiaOriginale: 'SEZIONE PRIMAVERA',
      fascia: '0-3',
      gestione,
      gestore: scuola?.gestore,
      indirizzo: scuola ? { ...scuola.indirizzo } : {
        via: r.indirizzo ? titoloLeggibile(r.indirizzo) : undefined,
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      etaMinimaMesi: 24,
      etaMassimaMesi: 36,
      misureAderite: [],
      contatti: scuola ? { ...scuola.contatti } : {},
      caratteristiche: [`ammessa al finanziamento: ${meta.atto}`],
      provenienza: {
        fonte: meta.fonte,
        idNellaFonte: id,
        url: meta.url,
        licenza: meta.licenza,
        dataRiferimento: meta.dataRiferimento,
        scaricatoIl,
      },
      attiva: true,
    };
    if (scuola?.posizione) {
      struttura.posizione = scuola.posizione;
      struttura.posizioneFonte = scuola.posizioneFonte ?? scuola.provenienza.fonte;
      struttura.posizionePrecisione = scuola.posizionePrecisione;
    }
    esito.strutture.push(struttura);
  });
  return esito;
}
