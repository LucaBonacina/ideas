import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { emailPubblicabile } from '../../../domain/privacy';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { idUnico, impronta } from '../strumenti/identificativi';

export const FONTE_BZ_MICROSTRUTTURE = 'bolzano-microstrutture-prima-infanzia';

/**
 * "Elenco delle microstrutture per la prima infanzia in Alto Adige" dell'Agenzia per la famiglia della Provincia di
 * Bolzano. La pagina carica l'elenco con JavaScript: il file grezzo è la pagina salvata dal browser.
 */
export const URL_BZ_MICROSTRUTTURE = 'https://famiglia.provincia.bz.it/it/elenco-microstrutture-prima-infanzia';

/** Pagina aggiornata il 10/09/2026. */
export const DATA_RIFERIMENTO_BZ = new Date('2026-09-10T00:00:00Z');

export const MINIMO_BZ_MICROSTRUTTURE = 100;

export interface RigaMicrostruttura {
  localita: string;
  nome: string;
  indirizzo: string;
  gestore: string;
  email?: string;
  aziendale: boolean;
}

/** Righe di testo della pagina, una per elemento HTML, con il grassetto marcato da ** (microstrutture aziendali). */
function righeTesto(html: string): string[] {
  return html.replace(/<(script|style|svg)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<(strong|b)\b[^>]*>/gi, '**')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#(\d+);/g, (_t, n: string) => String.fromCodePoint(Number(n)))
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

const CAP = /\b39\d{3}\b/;
const LOCALITA = /^\**[A-ZÀ-ÜÄÖ' .\-/]+(\/[A-Za-zÀ-ÿ' .-]+)?$/;

/**
 * L'elenco è una sequenza: LOCALITÀ (maiuscolo), nome, indirizzo con CAP, ente gestore, email facoltative.
 * Inizia dopo l'intestazione "contatto, richiesta di posto e registrazione" e finisce al menu "Service".
 */
export function righeMicrostrutture(html: string): RigaMicrostruttura[] {
  const r = righeTesto(html);
  const inizio = r.findIndex((l) => /richiesta di posto e registrazione/i.test(l));
  const fine = r.findIndex((l, i) => i > inizio && /^Service$/.test(l));
  const testo = r.slice(inizio + 1, fine > 0 ? fine : undefined);
  const out: RigaMicrostruttura[] = [];
  for (let i = 0; i < testo.length; i += 1) {
    const loc = testo[i].replace(/\*/g, '');
    if (!LOCALITA.test(loc) || i + 2 >= testo.length || !CAP.test(testo[i + 2])) continue;
    const nome = testo[i + 1];
    const email = [] as string[];
    let j = i + 4;
    while (j < testo.length && /@/.test(testo[j])) {
      email.push(testo[j]);
      j += 1;
    }
    out.push({
      localita: loc,
      nome: nome.replace(/\*/g, '').trim(),
      indirizzo: testo[i + 2],
      gestore: (testo[i + 3] ?? '').replace(/\*/g, ''),
      email: email[0],
      aziendale: /aziendal/i.test(nome) || nome.startsWith('**'),
    });
    i = j - 1;
  }
  return out;
}

/** Nomi brevi usati nell'elenco per comuni con un nome ufficiale diverso. */
const ALIAS: Record<string, string> = { casies: 'Valle di Casies' };

/** Comune dall'indirizzo ("Via Sill, 3 - S. Michele - 39057 Appiano"), altrimenti dalla località. */
function comuneDi(r: RigaMicrostruttura, comuni: ComuniLookup) {
  const dopoCap = r.indirizzo.split(CAP)[1]?.replace(/^[\s-]+/, '').trim();
  const candidati = [dopoCap, r.localita.split('/')[0]].filter((x): x is string => !!x);
  for (const c of candidati) {
    const nome = ALIAS[c.toLowerCase()] ?? c;
    const trovato = comuni.daNome(nome, 'BZ') ?? comuni.daInizioNome(nome, 'BZ');
    if (trovato) return trovato;
  }
  return undefined;
}

export function parseMicrostrutture(
  righe: RigaMicrostruttura[],
  comuni: ComuniLookup,
  scaricatoIl: Date,
): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const comune = comuneDi(r, comuni);
    if (!comune) {
      esito.scartate.push({ riga: i + 1, motivo: `comune non trovato: ${r.indirizzo} (${r.localita})` });
      return;
    }
    const id = idUnico(`${comune.codiceIstat}-${impronta(`${r.nome} ${r.indirizzo}`)}`, visti);
    const via = r.indirizzo.split(/\s+-\s+/)[0].replace(/,\s*$/, '').trim();
    esito.strutture.push({
      chiave: `${FONTE_BZ_MICROSTRUTTURE}:${id}`,
      denominazione: /^microstruttura$/i.test(r.nome) ? `Microstruttura ${comune.nome}` : r.nome,
      tipologia: r.aziendale ? Tipologia.NIDO : Tipologia.MICRONIDO,
      tipologiaOriginale: r.aziendale ? 'MICROSTRUTTURA AZIENDALE' : 'MICROSTRUTTURA (KITA)',
      fascia: '0-3',
      // Le microstrutture (Kita) sono servizi dei comuni dati in gestione a cooperative accreditate.
      gestione: r.aziendale ? Gestione.PRIVATA : Gestione.COMUNALE,
      gestore: r.aziendale ? undefined : r.gestore || undefined,
      indirizzo: {
        via,
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      accreditamento: 'si',
      misureAderite: [],
      contatti: { email: emailPubblicabile(r.email) },
      caratteristiche: [`ente gestore: ${r.gestore}`],
      riservato: { gestore: r.gestore, via: r.indirizzo },
      provenienza: {
        fonte: FONTE_BZ_MICROSTRUTTURE,
        idNellaFonte: id,
        url: URL_BZ_MICROSTRUTTURE,
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento: DATA_RIFERIMENTO_BZ,
        scaricatoIl,
      },
      attiva: true,
    } as Struttura);
  });
  return esito;
}
