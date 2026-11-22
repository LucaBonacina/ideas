import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { idUnico, slug } from '../strumenti/identificativi';

export const FONTE_VDA = 'vda-autorizzazioni-nidi';

export const URL_VDA = 'https://gestionewww.regione.vda.it/allegato.aspx?pk=115707';

/** Data di creazione del PDF regionale. */
export const DATA_RIFERIMENTO_VDA = new Date('2026-08-03T00:00:00Z');

/** 44 servizi (nidi, nidi aziendali, spazi gioco) nel PDF di agosto 2026. */
export const MINIMO_VDA = 30;

export interface RigaVda {
  titolare: string;
  tipologia: string;
  posti: string;
  sedeOperativa: string;
  /** Data di scadenza dell'accreditamento (gg/mm/aaaa), se c'è. */
  scadenzaAccreditamento: string;
}

/** Limiti delle colonne (x): titolare, tipologia, posti, sede legale, sede operativa, autorizzazione, accreditamento. */
const X_TIPOLOGIA = 150;
const X_POSTI = 280;
const X_SEDE_LEGALE = 300;
const X_SEDE_OPERATIVA = 420;
const X_AUTORIZZAZIONE = 560;
const X_SCADENZA = 770;

const vicino = (a: number, b: number, tolleranza = 4): boolean => Math.abs(a - b) <= tolleranza;

/**
 * Ricostruisce le righe dell'elenco regionale delle autorizzazioni e degli accreditamenti.
 * Ogni sede operativa può avere più tipologie (nido + spazio gioco), ognuna con i suoi posti;
 * il titolare è in una cella unita: se non è sulla riga della sede, vale per il gruppo di sedi consecutive
 * senza titolare che lo racchiude in verticale.
 */
export function righeDaPagineVda(pagine: ElementoPdf[][]): RigaVda[] {
  const righe: RigaVda[] = [];
  for (const elementi of pagine) {
    const sedi = elementi
      .filter((e) => e.x >= X_SEDE_OPERATIVA && e.x < X_AUTORIZZAZIONE)
      .filter((e) => /\d|-/.test(e.testo) && !/^Sede/i.test(e.testo))
      .sort((a, b) => b.y - a.y);
    if (sedi.length === 0) continue;
    const titolari = elementi.filter((e) => e.x < X_TIPOLOGIA && !/^Titolare$/i.test(e.testo));
    const tipologie = elementi
      .filter((e) => e.x >= X_TIPOLOGIA && e.x < X_POSTI && /nido|spazio|garderie/i.test(e.testo));
    const posti = elementi.filter((e) => e.x >= X_POSTI && e.x < X_SEDE_LEGALE && /^\d+$/.test(e.testo));
    const scadenze = elementi.filter((e) => e.x >= X_SCADENZA && /^\d{2}\/\d{2}\/\d{4}$/.test(e.testo));
    const piuVicino = <T extends ElementoPdf>(lista: T[], y: number): T | undefined => lista
      .reduce<T | undefined>((m, e) => (!m || Math.abs(e.y - y) < Math.abs(m.y - y) ? e : m), undefined);

    // Titolare di ogni sede: sulla stessa riga, altrimenti quello che sta dentro il gruppo di sedi senza titolare.
    const titolareDi = new Map<ElementoPdf, string>();
    const usati = new Set<ElementoPdf>();
    for (const s of sedi) {
      const t = titolari.find((e) => vicino(e.y, s.y));
      if (t) {
        titolareDi.set(s, t.testo);
        usati.add(t);
      }
    }
    const liberi = titolari.filter((t) => !usati.has(t));
    let gruppo: ElementoPdf[] = [];
    const chiudiGruppo = (): void => {
      if (gruppo.length === 0) return;
      const alto = gruppo[0].y + 6;
      const basso = gruppo[gruppo.length - 1].y - 6;
      const t = liberi.find((e) => e.y <= alto && e.y >= basso);
      if (t) gruppo.forEach((s) => titolareDi.set(s, t.testo));
      gruppo = [];
    };
    for (const s of sedi) {
      if (titolareDi.has(s)) chiudiGruppo();
      else gruppo.push(s);
    }
    chiudiGruppo();

    // Ogni tipologia va alla sede più vicina; i posti alla tipologia più vicina.
    for (const t of tipologie) {
      const sede = piuVicino(sedi, t.y) as ElementoPdf;
      const p = piuVicino(posti, t.y);
      const scadenza = piuVicino(scadenze, sede.y);
      righe.push({
        titolare: titolareDi.get(sede) ?? '',
        tipologia: t.testo,
        posti: p && Math.abs(p.y - t.y) <= 8 ? p.testo : '',
        sedeOperativa: sede.testo,
        scadenzaAccreditamento: scadenza && vicino(scadenza.y, sede.y, 6) ? scadenza.testo : '',
      });
    }
  }
  return righe;
}

/** "Fraz. Villair, 23/bis - 11013 Courmayeur" -> via, CAP e comune. */
export function sedeVda(testo: string): { via: string; cap?: string; comune: string } | undefined {
  const pulito = testo.replace(/\(AO\)\.?|\.$/g, '').replace(/\s+/g, ' ').trim();
  const conCap = pulito.match(/^(.*?)\s*[-–]\s*(\d{4,5})\s*[-–]?\s*(\D.*)$/);
  const senzaCap = pulito.match(/^(.*)\s+[-–]\s+(\D.*)$/);
  if (conCap) {
    return { via: conCap[1].replace(/,\s*$/, ''), cap: conCap[2].length === 5 ? conCap[2] : undefined, comune: conCap[3].trim() };
  }
  return senzaCap ? { via: senzaCap[1].replace(/,\s*$/, ''), comune: senzaCap[2].trim() } : undefined;
}

function nomeComuneVda(nome: string): string {
  return nome.replace(/^St\.?\s+/i, 'Saint ').replace(/\s+/g, ' ').trim();
}

function tipologiaVda(testo: string): Tipologia | undefined {
  if (/^nido/i.test(testo)) return Tipologia.NIDO;
  if (/spazio gioco|garderie/i.test(testo)) return Tipologia.SPAZIO_GIOCO;
  return undefined;
}

/** Titolari pubblici (Unités des Communes, Azienda USL, Comuni) o privati riconoscibili dalla forma giuridica. */
function gestioneVda(titolare: string): Gestione {
  if (/^comune\b/i.test(titolare)) return Gestione.COMUNALE;
  if (/unit[ée] des communes|azienda u\.?s\.?l|^regione/i.test(titolare)) return Gestione.PUBBLICA_ALTRA;
  if (/coop|s\.?c\.?s\.?|fondazione|associazione|s\.?r\.?l|onlus/i.test(titolare)) return Gestione.PRIVATA;
  return Gestione.SCONOSCIUTA;
}

/** Accreditato se la scadenza dell'accreditamento non è passata; senza scadenza la fonte non lo dice. */
function accreditamentoVda(scadenza: Date | undefined, oggi: Date): 'si' | 'no' | undefined {
  if (!scadenza) return undefined;
  return scadenza >= oggi ? 'si' : 'no';
}

function dataItaliana(testo: string): Date | undefined {
  const m = testo.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  return m ? new Date(`${m[3]}-${m[2]}-${m[1]}T00:00:00Z`) : undefined;
}

/**
 * Elenco regionale delle autorizzazioni e degli accreditamenti dei nidi e degli spazi gioco della Valle d'Aosta.
 * Non contiene le tate familiari (servizi domiciliari). Il nome del servizio c'è solo a volte, tra parentesi
 * dopo il titolare: altrimenti si usa tipologia, comune e via.
 */
export function parseVda(righe: RigaVda[], comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const tipologia = tipologiaVda(r.tipologia);
    const sede = sedeVda(r.sedeOperativa);
    const comune = sede ? comuni.daNome(nomeComuneVda(sede.comune), 'AO') : undefined;
    if (!tipologia || !sede || !comune) {
      esito.scartate.push({
        riga: i + 1,
        motivo: !tipologia ? `tipologia sconosciuta: ${r.tipologia}` : `comune non trovato: ${r.sedeOperativa}`,
      });
      return;
    }
    const gestione = gestioneVda(r.titolare);
    const nomeServizio = r.titolare.match(/\(([^)]+)\)/)?.[1]?.trim();
    const etichetta = /aziendale/i.test(r.tipologia) ? 'Nido aziendale' : r.tipologia.replace(/^./, (c) => c.toUpperCase());
    const via = titoloLeggibile(sede.via);
    const id = idUnico(`${comune.codiceIstat}-${slug(sede.via)}-${slug(r.tipologia)}`, visti);
    const scadenza = dataItaliana(r.scadenzaAccreditamento);
    const posti = Number.parseInt(r.posti, 10);
    const pubblico = [Gestione.COMUNALE, Gestione.PUBBLICA_ALTRA].includes(gestione);
    const struttura: Struttura = {
      chiave: `${FONTE_VDA}:${id}`,
      denominazione: nomeServizio ? `${etichetta} ${nomeServizio}` : `${etichetta} a ${comune.nome}, ${via}`,
      tipologia,
      tipologiaOriginale: r.tipologia.toUpperCase(),
      fascia: '0-3',
      gestione,
      gestore: pubblico ? r.titolare.replace(/\s+/g, ' ').trim() : undefined,
      indirizzo: {
        via,
        cap: sede.cap,
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      posti: Number.isFinite(posti) && posti > 0 ? posti : undefined,
      accreditamento: accreditamentoVda(scadenza, scaricatoIl),
      misureAderite: [],
      contatti: {},
      caratteristiche: [],
      provenienza: {
        fonte: FONTE_VDA,
        idNellaFonte: id,
        url: URL_VDA,
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento: DATA_RIFERIMENTO_VDA,
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
