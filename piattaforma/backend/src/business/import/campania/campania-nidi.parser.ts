import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { emailPubblicabile, pulisci, telefonoPubblicabile } from '../../../domain/privacy';
import { normalizzaNome, titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { denominazionePubblicabile } from '../nomi/denominazione-pubblicabile';

export const FONTE_CAMPANIA_NIDI = 'campania-elenco-nidi-micronidi';

/**
 * "Elenco nidi e micronidi" della Regione Campania (avviso voucher nidi 2023/24, aggiornato al 04/03/2024).
 * L'originale regionale non è stato trovato: è la copia ripubblicata dal Comune di Battipaglia.
 */
export const URL_CAMPANIA_NIDI = 'https://www.comune.battipaglia.sa.it/download/ec270586b4914122964f627510ff1df9/elenco_aggiornato_al_04.03.24.pdf';

export const DATA_RIFERIMENTO_CAMPANIA_NIDI = new Date('2024-03-04T00:00:00Z');

/** 731 righe nell'elenco del 04/03/2024. */
export const MINIMO_CAMPANIA_NIDI = 510;

/** Intestazione, occorrenza (alcune sono ripetute) e scostamento dell'inizio colonna rispetto all'intestazione. */
const COLONNE: [string, string, number, number][] = [
  ['ambito', 'Ambito', 0, -100],
  ['prov', 'Prov', 0, -3],
  ['comune', 'Comune', 0, -10],
  ['servizio', 'Servizio', 0, -21],
  ['denominazione', 'Denominazione', 0, -23],
  ['posti', 'Ricettività', 0, -4],
  ['indirizzo', 'Indirizzo', 0, -31],
  ['cap', 'Cap', 0, -8],
  ['telefono', 'Telefono', 0, -7],
  ['email', 'Email', 0, -22],
  ['sis', 'Scheda SIS', 0, -5],
  ['gestione', 'Gestione', 0, -10],
  ['titolarita', 'Titolarità', 0, -20],
  ['affidante', 'Soggetto pubblico che affida', 0, -5],
  ['provvedimento', 'Provvedimento', 0, -20],
  ['data', 'Data', 0, -2],
  ['prestatore', 'Prestatore', 0, -35],
];

export type RigaCampania = Record<string, string>;

/**
 * Ricostruisce le righe: ogni riga ha la sigla della provincia nella seconda colonna;
 * i frammenti delle celle su più righe si assegnano alla riga con la sigla più vicina in verticale.
 * L'intestazione è solo nella prima pagina: le colonne valgono per tutte.
 */
export function righeDaPagineCampania(pagine: ElementoPdf[][]): RigaCampania[] {
  const righe: RigaCampania[] = [];
  let inizi: { nome: string; x: number }[] = [];
  for (const elementi of pagine) {
    const ambito = elementi.find((e) => e.testo === 'Ambito');
    if (ambito) {
      inizi = COLONNE.flatMap(([nome, titolo, occorrenza, scarto]) => {
        const h = elementi
          .filter((e) => e.testo === titolo && Math.abs(e.y - ambito.y) < 6)
          .sort((a, b) => a.x - b.x)[occorrenza];
        return h ? [{ nome, x: h.x + scarto }] : [];
      }).sort((a, b) => a.x - b.x);
    }
    if (inizi.length === 0) continue;
    const xProv = inizi.find((c) => c.nome === 'prov')?.x ?? 30;
    const xComune = inizi.find((c) => c.nome === 'comune')?.x ?? 43;
    const corpo = elementi.filter((e) => (!ambito || e.y < ambito.y - 3) && !/^Elenco nidi/i.test(e.testo));
    const ancore = corpo
      .filter((e) => e.x >= xProv && e.x < xComune && /^[A-Z]{2}$/.test(e.testo))
      .map((e) => ({ y: e.y, celle: new Map<string, ElementoPdf[]>() }));
    if (ancore.length === 0) continue;
    for (const e of corpo) {
      const colonna = [...inizi].reverse().find((c) => e.x >= c.x)?.nome ?? 'ambito';
      const vicina = ancore.reduce((m, a) => (Math.abs(a.y - e.y) < Math.abs(m.y - e.y) ? a : m));
      vicina.celle.set(colonna, [...(vicina.celle.get(colonna) ?? []), e]);
    }
    for (const a of ancore) {
      const riga: RigaCampania = {};
      a.celle.forEach((pezzi, colonna) => {
        // Gli indirizzi email lunghi vanno a capo a metà ("…@legalm" / "ail.it"): si riuniscono senza spazio.
        const separatore = colonna === 'email' ? '' : ' ';
        riga[colonna] = pezzi.sort((p, q) => q.y - p.y || p.x - q.x).map((p) => p.testo).join(separatore)
          .replace(/\s+/g, ' ')
          .trim();
      });
      righe.push(riga);
    }
  }
  return righe;
}

/** Comuni scritti nell'elenco in forma diversa da quella ISTAT. */
const ALIAS_COMUNI: Record<string, string> = { CAPACCIO: 'Capaccio Paestum' };

function tipologiaDa(testo: string): Tipologia | undefined {
  const t = normalizzaNome(testo);
  if (t.startsWith('MICRO NIDO') || t.startsWith('MICRONIDO')) return Tipologia.MICRONIDO;
  if (t.startsWith('NIDO')) return Tipologia.NIDO;
  return undefined;
}

/** Titolarità pubblica o privata dichiarata; "comunale" solo se l'ente che affida è un Comune. */
function gestioneDa(titolarita: string, affidante: string): Gestione {
  const t = normalizzaNome(titolarita);
  if (t.includes('TITOLARITA PRIVATA')) return Gestione.PRIVATA;
  if (t.includes('TITOLARITA PUBBLICA')) return /^COMUNE\b/.test(normalizzaNome(affidante)) ? Gestione.COMUNALE : Gestione.PUBBLICA;
  return Gestione.SCONOSCIUTA;
}

const ETICHETTE: Record<string, string> = { [Tipologia.NIDO]: "Nido d'infanzia", [Tipologia.MICRONIDO]: 'Micronido' };

/** Elenco regionale dei nidi e micronidi autorizzati della Campania (PDF). */
export function parseCampaniaNidi(righe: RigaCampania[], comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const servizio = pulisci(r.servizio) ?? '';
    const tipologia = tipologiaDa(servizio);
    if (!tipologia) {
      esito.scartate.push({ riga: i + 1, motivo: `tipologia sconosciuta: ${servizio}` });
      return;
    }
    const nomeComune = ALIAS_COMUNI[normalizzaNome(r.comune ?? '')] ?? r.comune ?? '';
    const comune = comuni.daNome(nomeComune, r.prov ?? '') ?? comuni.daNome(nomeComune, '', 'Campania');
    if (!comune) {
      esito.scartate.push({ riga: i + 1, motivo: `comune non trovato: ${r.comune} (${r.prov})` });
      return;
    }
    const affidante = pulisci(r.affidante) ?? '';
    const gestione = gestioneDa(r.titolarita ?? '', affidante);
    const pubblica = [Gestione.COMUNALE, Gestione.PUBBLICA].includes(gestione);
    const nomeFonte = pulisci(r.denominazione) ?? '';
    // Nei privati il nome può contenere quello del titolare ("… di Rossi Maria"); il prestatore non si pubblica.
    const nome = pubblica ? nomeFonte : denominazionePubblicabile(nomeFonte);
    // La scheda del Sistema informativo sociale identifica il servizio; se manca, comune e nome.
    const sis = (r.sis ?? '').match(/[A-Z]{2}SRS\w+/)?.[0];
    const base = sis ?? `${comune.codiceIstat}-${normalizzaNome(nomeFonte || tipologia).replace(/ /g, '-').toLowerCase()}`;
    const ripetizioni = (visti.get(base) ?? 0) + 1;
    visti.set(base, ripetizioni);
    const id = ripetizioni === 1 ? base : `${base}-${ripetizioni}`;
    const posti = Number.parseInt(r.posti ?? '', 10);
    const via = pulisci(r.indirizzo);
    const email = emailPubblicabile(r.email);
    // Le PEC sono spesso caselle nominative del titolare: non si pubblicano.
    const pec = email && /(^|[.@])(\w*pec|legalmail|postecert)\./.test(email);
    const struttura: Struttura = {
      chiave: `${FONTE_CAMPANIA_NIDI}:${id}`,
      denominazione: nome ? titoloLeggibile(nome) : `${ETICHETTE[tipologia]} a ${comune.nome}`,
      tipologia,
      tipologiaOriginale: servizio,
      fascia: '0-3',
      gestione,
      gestore: pubblica && normalizzaNome(affidante).split(' ').length > 1 ? titoloLeggibile(affidante) : undefined,
      indirizzo: {
        via: via ? titoloLeggibile(via) : undefined,
        cap: (r.cap ?? '').match(/\d{5}/)?.[0],
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      posti: Number.isFinite(posti) && posti > 0 ? posti : undefined,
      misureAderite: [],
      contatti: {
        email: pec ? undefined : email,
        telefono: telefonoPubblicabile(r.telefono),
      },
      caratteristiche: [],
      provenienza: {
        fonte: FONTE_CAMPANIA_NIDI,
        idNellaFonte: id,
        url: URL_CAMPANIA_NIDI,
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento: DATA_RIFERIMENTO_CAMPANIA_NIDI,
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
