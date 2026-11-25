import type { Metadata } from 'next';
import Link from 'next/link';
import { NOME_SITO } from '@/lib/etichette';

export const metadata: Metadata = {
  title: 'Note legali',
  description: 'Natura delle informazioni, limiti di responsabilità e licenze dei dati.',
};

/** BOZZA: le parti tra [quadre] vanno completate dal titolare prima della pubblicazione. */
export default function PaginaNoteLegali() {
  return (
    <>
      <h1>Note legali</h1>
      <p className="tenue">Bozza del 25/11/2026, da completare prima della pubblicazione.</p>

      <h2>Chi pubblica il sito</h2>
      <p>[Nome o ragione sociale, sede, partita IVA o codice fiscale, email di contatto.]</p>

      <h2>Natura delle informazioni</h2>
      <p>
        {NOME_SITO} raccoglie in un unico elenco i servizi educativi 0-6 pubblicati da fonti pubbliche ufficiali. Ogni
        scheda indica la fonte, la data a cui il dato si riferisce e il link all&apos;originale. Le informazioni possono
        essere incomplete, superate o contenere errori presenti nelle fonti: prima di scegliere o iscriversi, verifica
        sempre con la struttura e con il tuo Comune.
      </p>
      <p>
        Il calcolatore del costo netto è una stima basata sulle regole pubblicate (bonus nido INPS, misure regionali) e
        sui dati che inserisci. Non sostituisce le comunicazioni ufficiali di INPS, Regione e Comune, che decidono
        importi e requisiti.
      </p>
      <p>
        La presenza di una struttura nel sito non è una valutazione né una raccomandazione; l&apos;assenza non significa
        che la struttura non esista o non sia autorizzata. La completezza dell&apos;elenco, regione per regione, è indicata
        nella <Link href="/fonti">pagina delle fonti</Link>.
      </p>

      <h2>Licenze dei dati</h2>
      <p>
        I dati restano soggetti alle licenze delle fonti originali, elencate con le relative attribuzioni nella{' '}
        <Link href="/fonti">pagina delle fonti</Link>. Mappe e alcune coordinate: © OpenStreetMap contributors, licenza
        ODbL. [Licenza con cui si mettono a disposizione i dati elaborati, se si decide di farlo.]
      </p>

      <h2>Segnalazioni</h2>
      <p>
        Per correggere una scheda o chiederne la rimozione scrivi a [indirizzo email], indicando la struttura e cosa va
        cambiato.
      </p>
    </>
  );
}
