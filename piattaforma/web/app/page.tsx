import Link from 'next/link';
import CercaComune from '@/components/CercaComune';
import { NOME_SITO } from '@/lib/etichette';

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Nidi e scuole dell&apos;infanzia vicino a te</h1>
        <p>
          Cerca nidi, micronidi, nidi famiglia e scuole dell&apos;infanzia del tuo comune, con i dati delle fonti ufficiali.
          Poi calcola quanto pagheresti davvero, al netto di Bonus nido e misure regionali.
        </p>
        <CercaComune />
      </section>
      <div className="griglia">
        <div className="carta">
          <h3>Fonti ufficiali, sempre citate</h3>
          <p className="tenue">
            Ogni scheda dice da quale registro viene e di quando è il dato. Le scuole dell&apos;infanzia ci sono per tutta
            Italia; i nidi e gli altri servizi 0-3 per ora in Lombardia, Piemonte e Friuli-Venezia Giulia, e stiamo
            aggiungendo le altre regioni.
          </p>
          <Link href="/fonti">Vedi fonti e copertura</Link>
        </div>
        <div className="carta">
          <h3>Il costo reale del nido</h3>
          <p className="tenue">
            Retta meno Bonus nido INPS 2026 e, in Lombardia, Nidi Gratis Plus. Ti diciamo cosa è certo e cosa va verificato
            con il Comune.
          </p>
          <Link href="/calcolatore">Calcola il costo</Link>
        </div>
        <div className="carta">
          <h3>Rispetto della privacy</h3>
          <p className="tenue">
            {NOME_SITO} non pubblica nomi di persone, cellulari o email personali presenti nelle fonti, né l&apos;indirizzo dei
            nidi famiglia che si svolgono in casa.
          </p>
        </div>
      </div>
    </>
  );
}
