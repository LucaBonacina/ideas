import Link from 'next/link';
import { GESTIONI, TIPOLOGIE, fasciaTesto } from '@/lib/etichette';
import type { Struttura } from '@/lib/tipi';

export default function SchedaBreve({ s }: { s: Struttura }) {
  return (
    <li>
      <Link href={`/struttura/${encodeURIComponent(s.chiave)}`}>
        <div className="carta">
          <div className="nome">{s.denominazione}</div>
          <div className="dettagli">
            <span className="etichetta">{fasciaTesto(s.fascia)}</span>
            {TIPOLOGIE[s.tipologia] ?? s.tipologia} · {GESTIONI[s.gestione] ?? s.gestione}
            {s.posti ? ` · ${s.posti} posti` : ''}
          </div>
          <div className="dettagli">{[s.indirizzo.via, s.indirizzo.comune].filter(Boolean).join(', ')}</div>
        </div>
      </Link>
    </li>
  );
}
