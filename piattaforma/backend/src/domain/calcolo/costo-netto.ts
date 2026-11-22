import {
  FONTE_BONUS_NIDO_2026, FONTE_DETRAZIONE, FONTE_NIDI_GRATIS_PLUS_2026, Fonte, NIDI_GRATIS_PLUS,
  TIPOLOGIE_BONUS_NIDO, TIPOLOGIE_NIDI_GRATIS_PLUS, fasciaBonusNido,
} from './regole-2026';

/** Una risposta che la famiglia può non conoscere: null significa "non so". */
export type SiNoNonSo = boolean | null;

export interface InputCostoNetto {
  dataNascita: Date;
  /** Retta mensile rimborsabile (retta più pasti), già al netto di eventuali contributi comunali. */
  rettaMensile: number;
  /** Mesi di frequenza nell'anno educativo (massimo 11). */
  mesi: number;
  /** ISEE neutralizzato dall'Assegno unico, per il Bonus nido INPS. null se assente. */
  iseeNeutralizzato: number | null;
  /** ISEE minorenni o per specifiche prestazioni familiari (non neutralizzato), per Nidi Gratis Plus. */
  iseeMisureRegionali: number | null;
  regione: string;
  tipologia: string;
  /** Tipologia scritta dalla fonte (es. "CENTRO PRIMA INFANZIA" in Lombardia). */
  tipologiaOriginale?: string;
  pubblicaOConvenzionata: SiNoNonSo;
  comuneAderenteNidiGratisPlus: SiNoNonSo;
  genitoreOccupatoODid: SiNoNonSo;
}

export type StatoMisura = 'applicata' | 'non spetta' | 'da verificare';

export interface EsitoMisura {
  misura: string;
  stato: StatoMisura;
  /** Importo mensile e annuo considerati nel calcolo (0 se non spetta). */
  mensile: number;
  annuo: number;
  motivi: string[];
  fonte: Fonte;
}

export interface EsitoCostoNetto {
  rettaAnnua: number;
  /** Costo netto se si avverano tutte le misure "applicata". */
  costoNettoAnnuo: number;
  costoNettoMensile: number;
  /** Costo netto se si avverano anche le misure "da verificare" (scenario migliore). */
  costoNettoAnnuoSeVerificate: number;
  misure: EsitoMisura[];
  avvertenze: string[];
}

const arrotonda = (n: number): number => Math.round(n * 100) / 100;

function bonusNido(input: InputCostoNetto): EsitoMisura {
  const fascia = fasciaBonusNido(input.dataNascita, input.iseeNeutralizzato);
  const motivi: string[] = [];
  let stato: StatoMisura = 'applicata';
  if (!TIPOLOGIE_BONUS_NIDO.includes(input.tipologia)) {
    return {
      misura: 'Bonus asilo nido INPS',
      stato: 'non spetta',
      mensile: 0,
      annuo: 0,
      motivi: ['Il servizio non è tra quelli ammessi (nidi, micronidi, sezioni primavera, spazi gioco, servizi domiciliari).'],
      fonte: FONTE_BONUS_NIDO_2026,
    };
  }
  if (input.tipologiaOriginale === 'CENTRO PRIMA INFANZIA') {
    stato = 'da verificare';
    motivi.push('In Lombardia un "centro prima infanzia" può essere assimilato a uno spazio gioco (ammesso) o a un centro per bambini e famiglie (escluso): chiedere alla struttura.');
  }
  // Il rimborso di ogni mese non supera la spesa (par. 7); le prime dieci rate sono uguali, l'undicesima arrotonda.
  let annuo = 0;
  for (let m = 1; m <= input.mesi; m += 1) {
    annuo += Math.min(input.rettaMensile, m === 11 ? fascia.undicesima : fascia.rata);
  }
  motivi.push(input.iseeNeutralizzato === null
    ? 'Senza ISEE spetta l\'importo minimo di 1.500 euro l\'anno.'
    : `Fascia di ${fascia.annuo.toLocaleString('it-IT')} euro l'anno, fino a ${fascia.rata.toLocaleString('it-IT')} euro al mese e mai oltre la retta pagata.`);
  return {
    misura: 'Bonus asilo nido INPS',
    stato,
    mensile: arrotonda(Math.min(input.rettaMensile, fascia.rata)),
    annuo: arrotonda(annuo),
    motivi,
    fonte: FONTE_BONUS_NIDO_2026,
  };
}

function nidiGratisPlus(input: InputCostoNetto): EsitoMisura | undefined {
  if (input.regione !== 'Lombardia') return undefined;
  const base = { misura: 'Nidi Gratis Plus (Regione Lombardia)', fonte: FONTE_NIDI_GRATIS_PLUS_2026 };
  const nonSpetta = (motivo: string): EsitoMisura => ({
    ...base, stato: 'non spetta', mensile: 0, annuo: 0, motivi: [motivo],
  });
  if (!TIPOLOGIE_NIDI_GRATIS_PLUS.includes(input.tipologia)) {
    return nonSpetta('Ammessi solo nidi, micronidi e nidi famiglia.');
  }
  if (input.iseeMisureRegionali === null || input.iseeMisureRegionali > NIDI_GRATIS_PLUS.iseeMassimo) {
    return nonSpetta('Serve un ISEE minorenni o per specifiche prestazioni familiari fino a 25.000 euro.');
  }
  if (input.pubblicaOConvenzionata === false) {
    return nonSpetta('Vale solo per strutture pubbliche o per posti privati in convenzione con il Comune.');
  }
  if (input.comuneAderenteNidiGratisPlus === false) return nonSpetta('Il Comune non aderisce alla misura.');
  if (input.genitoreOccupatoODid === false) {
    return nonSpetta('Almeno un genitore deve essere occupato, o disoccupato con DID e Patto di servizio.');
  }
  const rimborsabile = NIDI_GRATIS_PLUS.rimborsabileInps(input.dataNascita);
  const eccedenza = Math.max(0, input.rettaMensile - rimborsabile);
  if (eccedenza === 0) return nonSpetta('La retta non supera l\'importo rimborsato dall\'INPS: non c\'è una quota da coprire.');
  const primaFascia = input.iseeMisureRegionali <= NIDI_GRATIS_PLUS.iseePrimaFascia;
  const mensile = primaFascia ? eccedenza : Math.min(eccedenza, NIDI_GRATIS_PLUS.contributoMassimoSecondaFascia);
  const motivi = [primaFascia
    ? 'Con ISEE fino a 20.000 euro la Regione copre tutta la retta oltre l\'importo INPS.'
    : 'Con ISEE tra 20.000 e 25.000 euro la Regione copre la retta oltre l\'importo INPS fino a 100 euro al mese.'];
  const daVerificare: string[] = [];
  if (input.pubblicaOConvenzionata === null) daVerificare.push('che il posto sia pubblico o convenzionato con il Comune');
  if (input.comuneAderenteNidiGratisPlus === null) daVerificare.push('che il Comune sia tra quelli ammessi alla misura');
  if (input.genitoreOccupatoODid === null) daVerificare.push('che almeno un genitore sia occupato o iscritto come disoccupato (DID e PSP)');
  if (daVerificare.length > 0) motivi.push(`Da verificare: ${daVerificare.join('; ')}.`);
  motivi.push('Il contributo è versato al Comune, non alla famiglia: la famiglia paga direttamente la retta ridotta.');
  return {
    ...base,
    stato: daVerificare.length > 0 ? 'da verificare' : 'applicata',
    mensile: arrotonda(mensile),
    annuo: arrotonda(mensile * Math.min(input.mesi, NIDI_GRATIS_PLUS.mesi)),
    motivi,
  };
}

/**
 * Costo netto annuo del nido per una famiglia: retta meno Bonus nido INPS e misure regionali.
 * Non stima ciò che non conosce: le condizioni ignote rendono la misura "da verificare".
 */
export function calcolaCostoNetto(input: InputCostoNetto): EsitoCostoNetto {
  if (input.mesi < 1 || input.mesi > 11) throw new Error('I mesi devono essere tra 1 e 11');
  if (input.rettaMensile < 0) throw new Error('La retta non può essere negativa');
  const misure = [bonusNido(input), nidiGratisPlus(input)].filter((m): m is EsitoMisura => m !== undefined);
  const rettaAnnua = arrotonda(input.rettaMensile * input.mesi);
  const somma = (stati: StatoMisura[]): number => misure
    .filter((m) => stati.includes(m.stato)).reduce((t, m) => t + m.annuo, 0);
  const costoNettoAnnuo = arrotonda(Math.max(0, rettaAnnua - somma(['applicata'])));
  const avvertenze = [
    'Il Bonus nido INPS non si somma alla detrazione fiscale del 19% per la frequenza del nido: chi riceve il bonus non può detrarre la stessa spesa.',
    'Iscrizione, pre-scuola e post-scuola non sono rimborsabili dal Bonus nido.',
  ];
  if (input.regione !== 'Lombardia') {
    avvertenze.push('Per questa regione il calcolo considera per ora solo il Bonus nido INPS: le misure regionali e comunali non sono ancora incluse.');
  }
  return {
    rettaAnnua,
    costoNettoAnnuo,
    costoNettoMensile: arrotonda(costoNettoAnnuo / input.mesi),
    costoNettoAnnuoSeVerificate: arrotonda(Math.max(0, rettaAnnua - somma(['applicata', 'da verificare']))),
    misure,
    avvertenze: [...avvertenze, `Fonte della detrazione: ${FONTE_DETRAZIONE.titolo}.`],
  };
}
