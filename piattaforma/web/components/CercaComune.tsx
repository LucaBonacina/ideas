'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ComuneSintesi } from '@/lib/tipi';

/** Campo di ricerca del comune con suggerimenti navigabili da tastiera. */
export default function CercaComune({ etichetta = 'Il tuo comune' }: { etichetta?: string }) {
  const router = useRouter();
  const id = useId();
  const [testo, setTesto] = useState('');
  const [suggerimenti, setSuggerimenti] = useState<ComuneSintesi[]>([]);
  const [attivo, setAttivo] = useState(-1);
  const richiesta = useRef(0);

  useEffect(() => {
    if (testo.trim().length < 2) { setSuggerimenti([]); return undefined; }
    const numero = ++richiesta.current;
    const t = setTimeout(async () => {
      const r = await fetch(`/api/comuni?q=${encodeURIComponent(testo.trim())}`);
      if (r.ok && numero === richiesta.current) { setSuggerimenti(await r.json()); setAttivo(-1); }
    }, 180);
    return () => clearTimeout(t);
  }, [testo]);

  const vai = (c: ComuneSintesi) => router.push(`/comune/${c.codiceIstat}`);

  return (
    <div className="ricerca">
      <label htmlFor={id} className="tenue">{etichetta}</label>
      <input
        id={id}
        type="search"
        autoComplete="off"
        placeholder="Es. Bergamo, Napoli, Cagliari…"
        value={testo}
        role="combobox"
        aria-expanded={suggerimenti.length > 0}
        aria-controls={`${id}-lista`}
        aria-activedescendant={attivo >= 0 ? `${id}-${attivo}` : undefined}
        onChange={(e) => setTesto(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') { e.preventDefault(); setAttivo((a) => Math.min(a + 1, suggerimenti.length - 1)); }
          if (e.key === 'ArrowUp') { e.preventDefault(); setAttivo((a) => Math.max(a - 1, 0)); }
          if (e.key === 'Enter' && suggerimenti.length > 0) { e.preventDefault(); vai(suggerimenti[Math.max(attivo, 0)]); }
          if (e.key === 'Escape') setSuggerimenti([]);
        }}
      />
      {suggerimenti.length > 0 && (
        <ul className="suggerimenti" id={`${id}-lista`} role="listbox">
          {suggerimenti.map((c, i) => (
            <li
              key={c.codiceIstat}
              id={`${id}-${i}`}
              role="option"
              aria-selected={i === attivo}
              onMouseDown={(e) => { e.preventDefault(); vai(c); }}
            >
              {c.nome}<small>({c.siglaProvincia}) · {c.regione}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
