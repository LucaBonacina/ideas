'use client';

import dynamic from 'next/dynamic';
import type { Struttura } from '@/lib/tipi';

const Mappa = dynamic(() => import('./Mappa'), { ssr: false, loading: () => <div className="mappa" /> });

/** Mappa delle strutture con coordinate; i nidi famiglia non hanno posizione per tutela della privacy. */
export default function MappaStrutture({ strutture, centro }: { strutture: Struttura[]; centro?: [number, number] }) {
  const punti = strutture.filter((s) => s.posizione).map((s) => ({
    lat: s.posizione!.coordinates[1],
    lng: s.posizione!.coordinates[0],
    titolo: s.denominazione,
    href: `/struttura/${encodeURIComponent(s.chiave)}`,
    colore: s.fascia === '3-6' ? '#b4581d' : '#1f6f5c',
  }));
  if (punti.length === 0) return null;
  return <Mappa punti={punti} centro={centro} />;
}
