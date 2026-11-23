import { Struttura } from '../../../database/struttura.schema';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { titoloLeggibile } from '../../../domain/normalizza';
import { isCodiceFiscalePersona } from '../../../domain/privacy';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';
import { ElementoPdf } from '../piemonte/pdf-testo';
import { idUnico } from '../strumenti/identificativi';

// Parole dell'intestazione della tabella, ripetuta in cima a ogni pagina.
const INTESTAZIONE = new Set(['nr.', 'prov.', 'comune', 'codice', 'meccanografico', 'codice fiscale', 'beneficiario',
  'ente beneficiario', 'denominazione del servizio', 'contributo', 'contributo 2024']);

export const FONTE_VENETO_DDR = 'veneto-servizi-finanziati-ddr';

const BASE_BUR = 'https://bur.regione.veneto.it/BurvServices/Pubblica/Download.aspx';

/**
 * Allegati del DDR n. 58 del 19/06/2024 (riparto del contributo regionale ai servizi per la prima infanzia):
 * C = gestori privati, D = gestori pubblici.
 */
export const URL_VENETO_DDR = {
  C: `${BASE_BUR}?name=58_Allegato_C_DDR_58_19-06-2024_534140.pdf&type=7&storico=False`,
  D: `${BASE_BUR}?name=58_Allegato_D_DDR_58_19-06-2024_534140.pdf&type=7&storico=False`,
};

export const PAGINA_VENETO_DDR = 'https://bur.regione.veneto.it/BurvServices/Pubblica/DettaglioDecreto.aspx?id=534140';

export const DATA_RIFERIMENTO_VENETO_DDR = new Date('2024-06-19T00:00:00Z');

/** 802 servizi finanziati nel 2024 (544 privati, 258 pubblici). */
export const MINIMO_VENETO_DDR = 560;

export type AllegatoVeneto = 'C' | 'D';

export interface RigaVenetoDdr {
  provincia: string;
  comune: string;
  codice: string;
  codiceFiscale: string;
  ente: string;
  denominazione: string;
}

const PROVINCE = /^(BL|PD|RO|TV|VE|VI|VR)$/;
const CODICE = /^(BL|PD|RO|TV|VE|VI|VR)\d{5}$/;
const CF = /^(\d{11}|[A-Z0-9]{16})$/i;
const IMPORTO = /\d{1,3}(\.\d{3})*,\d{2}/;

/** La x più frequente (arrotondata) di un elenco: l'inizio di una colonna allineata a sinistra. */
function moda(valori: number[]): number | undefined {
  const conteggi = new Map<number, number>();
  valori.forEach((v) => conteggi.set(Math.round(v / 3) * 3, (conteggi.get(Math.round(v / 3) * 3) ?? 0) + 1));
  return [...conteggi.entries()].sort((a, b) => b[1] - a[1] || a[0] - b[0])[0]?.[0];
}

/**
 * Ricostruisce le righe degli allegati: l'ancora è il codice regionale del servizio (es. BL00029).
 * Le colonne "ente beneficiario" e "denominazione del servizio" stanno tra il codice fiscale e l'importo:
 * il loro inizio si ricava dai dati (le celle sono allineate a sinistra), e i frammenti delle celle andate a capo
 * si assegnano all'ancora più vicina, preferendo quella sopra.
 */
export function righeDaPagineVenetoDdr(pagine: ElementoPdf[][]): RigaVenetoDdr[] {
  const righe: RigaVenetoDdr[] = [];
  for (const elementi of pagine) {
    const ancore = elementi.filter((e) => CODICE.test(e.testo)).sort((a, b) => b.y - a.y);
    if (ancore.length === 0) continue;
    const sullaRiga = (a: ElementoPdf): ElementoPdf[] => elementi.filter((e) => Math.abs(e.y - a.y) <= 3)
      .sort((p, q) => p.x - q.x);
    const xCodice = moda(ancore.map((a) => a.x)) ?? 0;
    // Inizio delle colonne ente e denominazione, dalla posizione dei testi tra codice fiscale e importo.
    const centrali = ancore.map((a) => sullaRiga(a)
      .filter((e) => e.x > a.x + 5 && !CF.test(e.testo) && !IMPORTO.test(e.testo) && !/^€$/.test(e.testo)));
    const xEnte = moda(centrali.filter((c) => c.length > 0).map((c) => c[0].x)) ?? 0;
    const xDenominazione = moda(centrali.flatMap((c) => c.slice(1).map((e) => e.x)).filter((x) => x > xEnte + 20))
      ?? Number.POSITIVE_INFINITY;
    const xImporto = moda(elementi.filter((e) => IMPORTO.test(e.testo)).map((e) => e.x)) ?? Number.POSITIVE_INFINITY;
    const celle = ancore.map(() => ({
      comune: [] as ElementoPdf[], ente: [] as ElementoPdf[], denominazione: [] as ElementoPdf[],
    }));
    const distanza = (a: ElementoPdf, y: number): number => (y <= a.y ? a.y - y : (y - a.y) * 2);
    for (const e of elementi) {
      if (CODICE.test(e.testo) || CF.test(e.testo) || IMPORTO.test(e.testo) || PROVINCE.test(e.testo)) continue;
      if (/^\d+$|^€$/.test(e.testo) || INTESTAZIONE.has(e.testo.trim().toLowerCase())) continue;
      const i = ancore.reduce((m, a, k) => (distanza(a, e.y) < distanza(ancore[m], e.y) ? k : m), 0);
      if (distanza(ancore[i], e.y) > 20) continue;
      if (e.x < xCodice - 3) celle[i].comune.push(e);
      else if (e.x >= xEnte - 3 && e.x < xDenominazione - 3) celle[i].ente.push(e);
      else if (e.x >= xDenominazione - 3 && e.x < xImporto - 3) celle[i].denominazione.push(e);
    }
    const unisci = (pezzi: ElementoPdf[]): string => pezzi.sort((p, q) => q.y - p.y || p.x - q.x).map((p) => p.testo)
      .join(' ').replace(/\s+/g, ' ')
      .trim();
    ancore.forEach((a, i) => {
      const riga = sullaRiga(a);
      celle[i].comune = celle[i].comune.filter((e) => e.x > (riga.find((r) => PROVINCE.test(r.testo))?.x ?? -1));
      righe.push({
        provincia: riga.find((e) => PROVINCE.test(e.testo))?.testo ?? a.testo.slice(0, 2),
        comune: unisci(celle[i].comune),
        codice: a.testo,
        codiceFiscale: riga.find((e) => CF.test(e.testo) && e.x > a.x)?.testo ?? '',
        ente: unisci(celle[i].ente),
        denominazione: unisci(celle[i].denominazione),
      });
    });
  }
  return righe;
}

/** Tipologia dal nome del servizio (le tipologie venete della L.R. 32/1990 e della DGR 84/2007). */
export function tipologiaVeneto(denominazione: string): { tipologia: Tipologia; originale: string } {
  const d = denominazione.toUpperCase();
  if (/MICRO\s?-?NIDO/.test(d)) return { tipologia: Tipologia.MICRONIDO, originale: 'MICRONIDO' };
  if (/NIDO INTEGRATO/.test(d)) return { tipologia: Tipologia.NIDO, originale: 'NIDO INTEGRATO' };
  if (/AZIENDAL/.test(d)) return { tipologia: Tipologia.NIDO, originale: 'NIDO AZIENDALE' };
  if (/CENTRO (PER L.)?INFANZIA/.test(d)) return { tipologia: Tipologia.NIDO, originale: 'CENTRO INFANZIA' };
  if (/ASILO NIDO|NIDO D.INFANZIA/.test(d)) return { tipologia: Tipologia.NIDO, originale: 'ASILO NIDO' };
  return { tipologia: Tipologia.NIDO, originale: 'SERVIZIO PRIMA INFANZIA ACCREDITATO (TIPOLOGIA NON INDICATA)' };
}

/**
 * Servizi per la prima infanzia accreditati e finanziati dalla Regione del Veneto (allegati C e D del decreto
 * annuale di riparto). Nessun indirizzo, capienza o contatto. Per le ditte individuali (codice fiscale di persona)
 * il nome del servizio può contenere quello della titolare: la scheda pubblica ha un nome generico, i dati reali
 * stanno in `riservato`.
 */
export function parseVenetoDdr(
  righe: RigaVenetoDdr[],
  allegato: AllegatoVeneto,
  comuni: ComuniLookup,
  scaricatoIl: Date,
): EsitoParsing {
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  const visti = new Map<string, number>();
  righe.forEach((r, i) => {
    const comune = comuni.daNome(r.comune, r.provincia);
    if (!comune) {
      esito.scartate.push({ riga: i + 1, motivo: `comune non trovato: ${r.comune} (${r.provincia})` });
      return;
    }
    const { tipologia, originale } = tipologiaVeneto(r.denominazione);
    const persona = isCodiceFiscalePersona(r.codiceFiscale);
    let gestione = Gestione.PRIVATA;
    if (allegato === 'D') gestione = /^COMUNE\b/i.test(r.ente) ? Gestione.COMUNALE : Gestione.PUBBLICA_ALTRA;
    const id = idUnico(r.codice, visti);
    const etichetta = originale.startsWith('SERVIZIO') ? 'Servizio prima infanzia' : titoloLeggibile(originale);
    const struttura: Struttura = {
      chiave: `${FONTE_VENETO_DDR}:${id}`,
      denominazione: persona || !r.denominazione ? `${etichetta} a ${comune.nome}` : titoloLeggibile(r.denominazione),
      tipologia,
      tipologiaOriginale: originale,
      fascia: '0-3',
      gestione,
      gestore: allegato === 'D' && r.ente ? titoloLeggibile(r.ente) : undefined,
      indirizzo: {
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      accreditamento: 'si',
      misureAderite: [],
      contatti: {},
      caratteristiche: [],
      // Nome reale del servizio, ente e codice fiscale: conservati, la scheda pubblica decide il prodotto.
      riservato: {
        denominazione: r.denominazione || undefined,
        gestore: r.ente || undefined,
        codiceFiscaleGestore: r.codiceFiscale || undefined,
      },
      provenienza: {
        fonte: FONTE_VENETO_DDR,
        idNellaFonte: id,
        url: URL_VENETO_DDR[allegato],
        licenza: 'non dichiarata dalla fonte',
        dataRiferimento: DATA_RIFERIMENTO_VENETO_DDR,
        scaricatoIl,
      },
      attiva: true,
    };
    esito.strutture.push(struttura);
  });
  return esito;
}
