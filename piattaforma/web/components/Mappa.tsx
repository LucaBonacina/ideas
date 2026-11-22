'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

export interface Punto {
  lat: number;
  lng: number;
  titolo: string;
  href?: string;
  colore?: string;
}

/** Mappa OpenStreetMap con un pallino per struttura; carica Leaflet solo nel browser. */
export default function Mappa({ punti, centro, zoom = 13 }: { punti: Punto[]; centro?: [number, number]; zoom?: number }) {
  const elemento = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mappa: import('leaflet').Map | undefined;
    let annullato = false;
    (async () => {
      const L = (await import('leaflet')).default;
      if (annullato || !elemento.current) return;
      const inizio = centro ?? (punti[0] ? [punti[0].lng, punti[0].lat] : [12.5, 42.5]);
      mappa = L.map(elemento.current, { scrollWheelZoom: false }).setView([inizio[1], inizio[0]], punti.length ? zoom : 6);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mappa);
      const gruppo = L.featureGroup();
      for (const p of punti) {
        const m = L.circleMarker([p.lat, p.lng], {
          radius: 7, weight: 2, color: '#ffffff', fillColor: p.colore ?? '#1f6f5c', fillOpacity: 0.95,
        });
        const testo = document.createElement('span');
        if (p.href) {
          const a = document.createElement('a');
          a.href = p.href; a.textContent = p.titolo; testo.appendChild(a);
        } else testo.textContent = p.titolo;
        m.bindPopup(testo);
        gruppo.addLayer(m);
      }
      gruppo.addTo(mappa);
      if (punti.length > 1) mappa.fitBounds(gruppo.getBounds(), { padding: [24, 24], maxZoom: 15 });
    })();
    return () => { annullato = true; mappa?.remove(); };
  }, [punti, centro, zoom]);

  return <div ref={elemento} className="mappa" role="region" aria-label="Mappa delle strutture" />;
}
