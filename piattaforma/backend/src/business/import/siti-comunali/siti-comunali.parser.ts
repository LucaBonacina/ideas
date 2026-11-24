import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { fasciaDiTipologia, Tipologia } from '../../../domain/tipologia.enum';
import { titoloLeggibile } from '../../../domain/normalizza';
import { emailPubblicabile, pulisci, sitoPubblicabile, telefonoPubblicabile } from '../../../domain/privacy';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { idUnico, impronta } from '../strumenti/identificativi';

export const FONTE_SITI_COMUNALI = 'siti-comunali';

/** Una struttura estratta dalle pagine del sito di un comune (file estratto.json nella cartella del comune). */
export interface StrutturaEstratta {
  nome: string;
  tipologia: string;
  gestione?: string;
  indirizzo?: string;
  telefono?: string;
  email?: string;
  sito?: string;
  posti?: number;
  etaMinimaMesi?: number;
  etaMassimaMesi?: number;
  /** Pagina da cui viene l'informazione. */
  url: string;
  /** Frase della pagina che prova l'esistenza del servizio: serve a controllare l'estrazione. */
  citazione: string;
  /** Anno a cui si riferisce la pagina, se indicato (es. "2025/26"). */
  anno?: string;
}

export interface EstrattoComune {
  codiceIstat: string;
  strutture: StrutturaEstratta[];
  note?: string;
}

const TIPOLOGIE = new Set<string>(Object.values(Tipologia));
const GESTIONI = new Set<string>(Object.values(Gestione));

/**
 * Strutture 0-6 dai siti istituzionali dei comuni. Si scartano le righe senza URL o senza citazione:
 * ogni struttura deve essere verificabile sulla pagina da cui viene.
 */
export function parseSitiComunali(estratti: EstrattoComune[], comuni: ComuniLookup, raccoltoIl: Date): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  let n = 0;
  for (const e of estratti) {
    const comune = comuni.daCodiceIstat(e.codiceIstat);
    const visti = new Map<string, number>();
    for (const s of e.strutture) {
      n += 1;
      if (!comune) {
        esito.scartate.push({ riga: n, motivo: `comune sconosciuto: ${e.codiceIstat}` });
        continue;
      }
      if (!s.nome?.trim() || !s.url || !s.citazione?.trim()) {
        esito.scartate.push({ riga: n, motivo: `${e.codiceIstat}: struttura senza nome, URL o citazione` });
        continue;
      }
      if (!TIPOLOGIE.has(s.tipologia)) {
        esito.scartate.push({ riga: n, motivo: `${e.codiceIstat}: tipologia non valida ${s.tipologia}` });
        continue;
      }
      const tipologia = s.tipologia as Tipologia;
      const domiciliare = tipologia === Tipologia.SERVIZIO_DOMICILIARE;
      const id = idUnico(`${e.codiceIstat}-${impronta(s.nome)}`, visti);
      const struttura: Struttura = {
        chiave: `${FONTE_SITI_COMUNALI}:${id}`,
        denominazione: domiciliare ? `Servizio educativo domiciliare a ${comune.nome}` : titoloLeggibile(s.nome),
        tipologia,
        tipologiaOriginale: s.tipologia,
        fascia: fasciaDiTipologia(tipologia),
        gestione: s.gestione && GESTIONI.has(s.gestione) ? s.gestione as Gestione : Gestione.SCONOSCIUTA,
        indirizzo: {
          via: domiciliare ? undefined : pulisci(s.indirizzo),
          comune: comune.nome,
          codiceIstat: comune.codiceIstat,
          codiceCatastale: comune.codiceCatastale,
          siglaProvincia: comune.siglaProvincia,
          regione: comune.regione,
        },
        posti: Number.isFinite(s.posti) && (s.posti ?? 0) > 0 ? s.posti : undefined,
        etaMinimaMesi: s.etaMinimaMesi,
        etaMassimaMesi: s.etaMassimaMesi,
        misureAderite: [],
        contatti: domiciliare ? {} : {
          telefono: telefonoPubblicabile(s.telefono),
          email: emailPubblicabile(s.email),
          sito: sitoPubblicabile(s.sito),
        },
        caratteristiche: s.anno ? [`pagina riferita a ${s.anno}`] : [],
        // Quello che la pagina dice, così com'è: cosa mostrare lo decide il prodotto.
        riservato: {
          denominazione: s.nome,
          via: pulisci(s.indirizzo),
        },
        provenienza: {
          fonte: FONTE_SITI_COMUNALI,
          idNellaFonte: id,
          url: s.url,
          licenza: 'pagina del sito istituzionale del comune',
          dataRiferimento: raccoltoIl,
          scaricatoIl: raccoltoIl,
        },
        attiva: true,
      };
      esito.strutture.push(struttura);
    }
  }
  return esito;
}
