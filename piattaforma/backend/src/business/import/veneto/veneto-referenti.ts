import { Referente } from '../../../database/referente.schema';
import { Struttura } from '../../../database/struttura.schema';
import { RigaEducatore } from './veneto-educatori.parser';
import { RigaNidoFamiglia } from './veneto-nidi-famiglia.parser';

export interface ReferentiVeneto {
  educatori: Referente[];
  coordinatori: Referente[];
}

/**
 * Unisce l'albo degli educatori (DDR 40/2025: nome, email, PEC) e l'elenco dei Nidi in Famiglia
 * (DDR 39/2025: chi lavora in quale nido, nomi dei coordinatori) in una scheda per persona, collegata alle strutture.
 */
export function referentiVeneto(
  righe: RigaNidoFamiglia[],
  strutture: Struttura[],
  albo: RigaEducatore[],
  fonti: { nidi: string; educatori?: string },
  dataRiferimento: Date,
  scaricatoIl: Date,
): ReferentiVeneto {
  const mappa = new Map<string, Referente>();
  const scheda = (codice: string, ruolo: string): Referente => {
    let r = mappa.get(codice);
    if (!r) {
      r = {
        codice, ruolo, email: [], strutture: [], regione: 'Veneto', fonti: [], dataRiferimento, scaricatoIl, attivo: true,
      };
      mappa.set(codice, r);
    }
    return r;
  };
  for (const a of albo) {
    Object.assign(scheda(a.codice, 'educatore-nido-famiglia'), {
      cognome: a.cognome, nome: a.nome, email: a.email, pec: a.pec, fonti: [fonti.educatori ?? ''].filter(Boolean),
    });
  }
  for (const r of righe) {
    if (r.codiceEducatore) {
      const s = scheda(r.codiceEducatore, 'educatore-nido-famiglia');
      s.nomeCompleto ??= r.educatore;
      if (!s.fonti.includes(fonti.nidi)) s.fonti.push(fonti.nidi);
    }
    if (r.codiceCoordinatore) {
      const s = scheda(r.codiceCoordinatore, 'coordinatore-nido-famiglia');
      s.nomeCompleto ??= r.coordinatore;
      if (!s.fonti.includes(fonti.nidi)) s.fonti.push(fonti.nidi);
    }
  }
  for (const st of strutture) {
    for (const codice of st.riservato?.referenti ?? []) {
      const r = mappa.get(codice);
      if (r && !r.strutture.includes(st.chiave)) r.strutture.push(st.chiave);
    }
  }
  const tutti = [...mappa.values()];
  return {
    educatori: tutti.filter((r) => r.ruolo === 'educatore-nido-famiglia'),
    coordinatori: tutti.filter((r) => r.ruolo === 'coordinatore-nido-famiglia'),
  };
}

/** Nell'atto la via di qualche riga ingloba il nome dell'educatrice: lo si toglie se coincide con l'albo. */
export function pulisciVia(via: string | undefined, educatore?: RigaEducatore): string | undefined {
  if (!via || !educatore?.cognome || !educatore.nome) return via;
  const nomi = [`${educatore.cognome} ${educatore.nome}`, `${educatore.nome} ${educatore.cognome}`];
  const trovato = nomi.find((n) => via.toLowerCase().endsWith(n.toLowerCase()));
  return trovato ? via.slice(0, via.length - trovato.length).trim() : via;
}
