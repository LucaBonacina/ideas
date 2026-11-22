import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { emailPubblicabile, pulisci, telefonoPubblicabile } from '../../../domain/privacy';
import { normalizzaNome, titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { denominazionePubblicabile } from '../nomi/denominazione-pubblicabile';

export const FONTE_NAPOLI_NIDI_PRIVATI = 'napoli-nidi-privati-autorizzati';

/** Pagina "Autorizzazione ed accreditamento": il nome del PDF contiene la data di aggiornamento e cambia. */
export const PAGINA_NAPOLI_NIDI_PRIVATI = 'https://www.comune.napoli.it/articolo_tematico/welfare-e-pari-opportunita/autorizzazione-ed-accreditamento/';

export const URL_NAPOLI_NIDI_PRIVATI = 'https://static-www.comune.napoli.it/wp-content/uploads/2011/11/elenco-nidi-autorizzati-agg_03-11-2026.pdf';

/** 45 nidi e micronidi nell'elenco del 03/11/2026. */
export const MINIMO_NAPOLI_NIDI_PRIVATI = 30;

/** Data di aggiornamento dal nome del file ("agg_03-11-2026"). */
export function dataElencoNapoli(url: string): Date | undefined {
  const m = url.match(/agg_(\d{2})-(\d{2})-(\d{4})/);
  return m ? new Date(`${m[3]}-${m[2]}-${m[1]}T00:00:00Z`) : undefined;
}

/** Nella pagina comunale, il link all'elenco dei nidi privati autorizzati. */
export function linkElencoNapoli(html: string): string | undefined {
  return html.match(/href="([^"]*elenco-nidi-autorizzati[^"]*\.pdf)"/i)?.[1];
}

/** Intestazioni e scostamento dell'inizio colonna rispetto all'intestazione. */
const COLONNE: [string, string, number][] = [
  ['numero', 'Municipalità', -100],
  ['municipalita', 'Municipalità', -6],
  ['quartiere', 'Quartiere', 3],
  ['denominazione', 'Denominazione', -5],
  ['tipologia', 'Tipologia', -3],
  ['prestatore', 'Soggetto prestatore', -18],
  ['piva', 'Partita IVA', -6],
  ['autorizzazione', 'Autorizzazione al', -7],
  ['accreditamento', 'Accreditamento', -3],
  ['sospensione', 'Sospensione', -4],
  ['pec', 'PEC', -69],
  ['email', 'E-MAIL', -53],
  ['telefono', 'Recapito', -13],
  ['sede', 'Sede Operativa', -38],
  ['posti', 'Ricettività', 1],
];

export type RigaNapoli = Record<string, string>;

/**
 * Ricostruisce le righe dell'elenco dei nidi: ogni riga ha un numero progressivo nella prima colonna.
 * Le pagine delle ludoteche hanno un'altra impaginazione e non si leggono.
 */
export function righeDaPagineNapoli(pagine: ElementoPdf[][]): RigaNapoli[] {
  const righe: RigaNapoli[] = [];
  for (const elementi of pagine) {
    if (elementi.some((e) => /^LUDOTECHE/.test(e.testo))) break;
    const intestazioni = new Map(elementi.map((e) => [e.testo, e]));
    const yIntestazione = intestazioni.get('Soggetto prestatore')?.y;
    if (yIntestazione === undefined) continue;
    const inizi = COLONNE
      .filter(([, titolo]) => intestazioni.has(titolo))
      .map(([nome, titolo, scarto]) => ({ nome, x: (intestazioni.get(titolo) as ElementoPdf).x + scarto }))
      .sort((a, b) => a.x - b.x);
    const xMunicipalita = inizi.find((c) => c.nome === 'municipalita')?.x ?? 24;
    const corpo = elementi.filter((e) => e.y < yIntestazione - 5 && !/^Pagina$/.test(e.testo) && e.y > 20);
    const ancore = corpo
      .filter((e) => e.x < xMunicipalita && /^\d+$/.test(e.testo))
      .map((e) => ({ y: e.y, celle: new Map<string, ElementoPdf[]>() }));
    if (ancore.length === 0) continue;
    for (const e of corpo) {
      const colonna = [...inizi].reverse().find((c) => e.x >= c.x)?.nome ?? 'numero';
      const vicina = ancore.reduce((m, a) => (Math.abs(a.y - e.y) < Math.abs(m.y - e.y) ? a : m));
      vicina.celle.set(colonna, [...(vicina.celle.get(colonna) ?? []), e]);
    }
    for (const a of ancore) {
      const riga: RigaNapoli = {};
      a.celle.forEach((pezzi, colonna) => {
        riga[colonna] = pezzi.sort((p, q) => q.y - p.y || p.x - q.x).map((p) => p.testo).join(' ').replace(/\s+/g, ' ')
          .trim();
      });
      righe.push(riga);
    }
  }
  return righe;
}

/** Prima email pubblicabile della cella, anche se va a capo a metà ("…@gmail" / ".com"). */
function primaEmail(cella: string | undefined): string | undefined {
  const unita = (cella ?? '').replace(/\s+(?=\.)|(?<=[@.])\s+/g, '');
  return unita.split(/[\s;,]+/).map((e) => emailPubblicabile(e)).find((e) => e);
}

function tipologiaDa(testo: string): Tipologia | undefined {
  const t = normalizzaNome(testo);
  if (t.startsWith('MICRO')) return Tipologia.MICRONIDO;
  if (t.startsWith('NIDO')) return Tipologia.NIDO;
  return undefined;
}

/** Elenco dei nidi e micronidi privati autorizzati al funzionamento nel Comune di Napoli (PDF). */
export function parseNapoliNidiPrivati(
  righe: RigaNapoli[],
  url: string,
  comuni: ComuniLookup,
  scaricatoIl: Date,
): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const napoli = comuni.daNome('Napoli', 'NA');
  if (!napoli) throw new Error('Comune di Napoli assente dall\'elenco dei comuni');
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const tipologiaFonte = pulisci(r.tipologia) ?? '';
    const tipologia = tipologiaDa(tipologiaFonte);
    if (!tipologia) {
      esito.scartate.push({ riga: i + 1, motivo: `tipologia sconosciuta: ${tipologiaFonte}` });
      return;
    }
    if (/SOSPES/.test(normalizzaNome(r.sospensione ?? ''))) {
      esito.scartate.push({ riga: i + 1, motivo: 'servizio sospeso' });
      return;
    }
    const nomeFonte = pulisci(r.denominazione) ?? '';
    const nome = denominazionePubblicabile(nomeFonte);
    const base = `${napoli.codiceIstat}-${normalizzaNome(nomeFonte || tipologia).replace(/ /g, '-').toLowerCase()}`;
    const ripetizioni = (visti.get(base) ?? 0) + 1;
    visti.set(base, ripetizioni);
    const id = ripetizioni === 1 ? base : `${base}-${ripetizioni}`;
    const posti = Number.parseInt(r.posti ?? '', 10);
    const via = pulisci(r.sede);
    const struttura: Struttura = {
      chiave: `${FONTE_NAPOLI_NIDI_PRIVATI}:${id}`,
      denominazione: nome ? titoloLeggibile(nome) : `${tipologia === Tipologia.NIDO ? "Nido d'infanzia" : 'Micronido'} a Napoli`,
      tipologia,
      tipologiaOriginale: tipologiaFonte,
      fascia: '0-3',
      // L'elenco è quello dei servizi privati autorizzati.
      gestione: Gestione.PRIVATA,
      indirizzo: {
        via: via ? titoloLeggibile(via) : undefined,
        comune: napoli.nome,
        codiceIstat: napoli.codiceIstat,
        codiceCatastale: napoli.codiceCatastale,
        siglaProvincia: napoli.siglaProvincia,
        regione: napoli.regione,
      },
      posti: Number.isFinite(posti) && posti > 0 ? posti : undefined,
      accreditamento: pulisci(r.accreditamento) ? 'si' : undefined,
      misureAderite: [],
      // Le PEC sono spesso nominative e non si pubblicano.
      contatti: {
        email: primaEmail(r.email),
        telefono: telefonoPubblicabile(r.telefono),
      },
      caratteristiche: [],
      provenienza: {
        fonte: FONTE_NAPOLI_NIDI_PRIVATI,
        idNellaFonte: id,
        url,
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento: dataElencoNapoli(url),
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
