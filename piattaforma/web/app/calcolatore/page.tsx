import type { Metadata } from 'next';
import Calcolatore from '@/components/Calcolatore';
import { api } from '@/lib/api';
import type { Struttura } from '@/lib/tipi';

export const metadata: Metadata = {
  title: 'Quanto costa davvero il nido',
  description: 'Calcola il costo netto del nido: retta meno Bonus nido INPS 2026 e Nidi Gratis Plus in Lombardia.',
};

export default async function PaginaCalcolatore({ searchParams }: { searchParams: Promise<{ struttura?: string }> }) {
  const { struttura } = await searchParams;
  const s = struttura ? await api<Struttura>(`/strutture/${encodeURIComponent(struttura)}`) : null;
  return (
    <>
      <h1>Quanto costa davvero il nido</h1>
      <p className="tenue">
        Inserisci la retta e il tuo ISEE: calcoliamo il Bonus nido INPS 2026 e, in Lombardia, Nidi Gratis Plus. Quello che
        non possiamo sapere (per esempio se il Comune aderisce) lo segnaliamo come da verificare.
      </p>
      <Calcolatore struttura={s ? {
        chiave: s.chiave, denominazione: s.denominazione, regione: s.indirizzo.regione, tipologia: s.tipologia, gestione: s.gestione,
      } : undefined}
      />
    </>
  );
}
