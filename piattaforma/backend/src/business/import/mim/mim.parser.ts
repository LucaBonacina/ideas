import { parse } from 'csv-parse/sync';
import { Gestione } from '../../../domain/gestione.enum';
import { Tipologia } from '../../../domain/tipologia.enum';
import { emailPubblicabile, pulisci, sitoPubblicabile } from '../../../domain/privacy';
import { titoloLeggibile } from '../../../domain/normalizza';
import { ComuniLookup } from '../comuni/comuni-lookup';
import { EsitoParsing } from '../esito-parsing';

export const FONTE_MIM = 'mim-anagrafe';

export interface FileMim {
  nome: string;
  statale: boolean;
  url: string;
  dataRiferimento: Date;
}

/** Caratteristiche delle statali utili ai segmenti (bisogni speciali, lingua, territorio). */
const CARATTERISTICHE: Record<string, string> = {
  MONTAGNA: 'montagna',
  'PRESSO ISTITUTO OSPEDALIERO': 'ospedaliera',
  'LINGUA SLOVENA': 'lingua slovena',
  ISOLANA: 'isolana',
  'ANNESSA A CONVITTO': 'annessa a convitto',
};

function caratteristica(valore: string | undefined): string[] {
  const v = (pulisci(valore) ?? '').toUpperCase();
  if (!v || v === 'NORMALE') return [];
  const nota = Object.keys(CARATTERISTICHE).find((k) => v.includes(k));
  return [nota ? CARATTERISTICHE[nota] : v.toLowerCase()];
}

/** Estrae le scuole dell'infanzia da un file dell'anagrafe MIM (statali o paritarie). */
export function parseMim(contenuto: Buffer, file: FileMim, comuni: ComuniLookup, scaricatoIl: Date): EsitoParsing {
  const righe: Record<string, string>[] = parse(contenuto.toString('utf8').replace(/^\uFEFF/, ''), {
    columns: true, skip_empty_lines: true, relax_column_count: true,
  });
  const esito: EsitoParsing = { strutture: [], scartate: [] };
  righe.forEach((r, i) => {
    if (!(r.DESCRIZIONETIPOLOGIAGRADOISTRUZIONESCUOLA ?? '').includes('INFANZIA')) return;
    const codice = pulisci(r.CODICESCUOLA);
    if (!codice) {
      esito.scartate.push({ riga: i + 2, motivo: 'codice scuola mancante' });
      return;
    }
    const comune = comuni.daCodiceCatastale(r.CODICECOMUNESCUOLA ?? '');
    if (!comune) {
      esito.scartate.push({ riga: i + 2, motivo: `comune non trovato: ${r.CODICECOMUNESCUOLA}` });
      return;
    }
    const via = pulisci(r.INDIRIZZOSCUOLA);
    esito.strutture.push({
      chiave: `${FONTE_MIM}:${codice}`,
      denominazione: titoloLeggibile(pulisci(r.DENOMINAZIONESCUOLA) ?? codice),
      tipologia: Tipologia.SCUOLA_INFANZIA,
      tipologiaOriginale: r.DESCRIZIONETIPOLOGIAGRADOISTRUZIONESCUOLA,
      fascia: '3-6',
      gestione: file.statale ? Gestione.STATALE : Gestione.PARITARIA,
      gestore: file.statale ? titoloLeggibile(pulisci(r.DENOMINAZIONEISTITUTORIFERIMENTO) ?? '') || undefined : undefined,
      indirizzo: {
        via: via ? titoloLeggibile(via) : undefined,
        cap: pulisci(r.CAPSCUOLA),
        comune: comune.nome,
        codiceIstat: comune.codiceIstat,
        codiceCatastale: comune.codiceCatastale,
        siglaProvincia: comune.siglaProvincia,
        regione: comune.regione,
      },
      contatti: {
        email: emailPubblicabile(r.INDIRIZZOEMAILSCUOLA),
        pec: emailPubblicabile(r.INDIRIZZOPECSCUOLA),
        sito: sitoPubblicabile(r.SITOWEBSCUOLA),
      },
      caratteristiche: caratteristica(r.DESCRIZIONECARATTERISTICASCUOLA),
      provenienza: {
        fonte: FONTE_MIM,
        idNellaFonte: codice,
        url: file.url,
        licenza: 'IODL 2.0',
        dataRiferimento: file.dataRiferimento,
        scaricatoIl,
      },
      attiva: true,
    });
  });
  return esito;
}
