import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { NOME_SITO } from '@/lib/etichette';

export const metadata: Metadata = {
  title: { default: `${NOME_SITO}: nidi e scuole dell'infanzia in Italia`, template: `%s | ${NOME_SITO}` },
  description: "Trova nidi, micronidi e scuole dell'infanzia vicino a te, con fonti ufficiali, e calcola quanto paghi davvero al netto di Bonus nido e misure regionali.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <header className="testata">
          <div className="contenitore">
            <Link href="/" className="marchio">{NOME_SITO.split(' ')[0]} <span>{NOME_SITO.split(' ').slice(1).join(' ')}</span></Link>
            <nav className="menu" aria-label="Principale">
              <Link href="/">Cerca</Link>
              <Link href="/calcolatore">Calcola il costo</Link>
              <Link href="/fonti">Fonti e copertura</Link>
            </nav>
          </div>
        </header>
        <main className="contenitore">{children}</main>
        <footer className="piede">
          <div className="contenitore">
            <p>
              Dati da fonti pubbliche ufficiali, con la fonte e la data indicate su ogni scheda. Possono contenere errori o
              essere incompleti: prima di iscriverti, verifica sempre con la struttura e con il tuo Comune.
            </p>
            <p>
              Versione di prova. Mappe © OpenStreetMap contributors.{' '}
              <a href="/fonti">Fonti e licenze</a> · <a href="/privacy">Privacy</a> · <a href="/note-legali">Note legali</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
