import type { Metadata } from 'next';
import { api } from '@/lib/api';
import { FONTI, TIPOLOGIE } from '@/lib/etichette';
import type { RigaCopertura } from '@/lib/tipi';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Fonti e copertura',
  description: 'Da dove vengono i dati, quanto sono completi per regione e come tuteliamo la privacy.',
};

export default async function PaginaFonti() {
  const righe = (await api<RigaCopertura[]>('/strutture/copertura', 300)) ?? [];
  const regioni = [...new Set(righe.map((r) => r.regione))].sort();
  const tipologie = [...new Set(righe.map((r) => r.tipologia))];
  const valore = (reg: string, tip: string) => righe.filter((r) => r.regione === reg && r.tipologia === tip).reduce((t, r) => t + r.strutture, 0);
  const fontiUsate = [...new Set(righe.map((r) => r.fonte))];
  return (
    <>
      <h1>Fonti e copertura</h1>
      <p className="tenue">
        In Italia non esiste un registro unico dei servizi 0-6. Le scuole dell&apos;infanzia sono nell&apos;anagrafe del
        Ministero; i nidi e i servizi 0-3 sono autorizzati dai Comuni e censiti in registri regionali diversi, non sempre
        pubblici. Qui diciamo cosa abbiamo e cosa manca.
      </p>
      <h2>Fonti usate</h2>
      <ul>
        {[...new Set([...fontiUsate.sort(), 'mim-scuola-in-chiaro'])].map((f) => (
          <li key={f}><strong>{FONTI[f]?.nome ?? f}</strong>: <span className="tenue">{FONTI[f]?.descrizione}</span></li>
        ))}
      </ul>
      <h2>Strutture per regione</h2>
      <div className="tabella-scorrevole">
        <table>
          <thead>
            <tr><th>Regione</th>{tipologie.map((t) => <th key={t}>{TIPOLOGIE[t] ?? t}</th>)}</tr>
          </thead>
          <tbody>
            {regioni.map((reg) => (
              <tr key={reg}>
                <td>{reg}</td>
                {tipologie.map((t) => <td key={t}>{valore(reg, t) || '-'}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="tenue">
        Un trattino nelle colonne dei nidi significa che per quella regione non abbiamo ancora un elenco 0-3, non che non ci
        siano servizi. Le sezioni primavera ci sono per ora solo dove le elenca il registro regionale (Piemonte); mancano ancora i nidi
        aziendali non autorizzati come nidi e le scuole dell&apos;infanzia non paritarie.
      </p>
      <h2>Privacy</h2>
      <p className="tenue">
        Le fonti pubbliche contengono a volte dati di persone. Non pubblichiamo: nomi di gestori privati (spesso contengono
        nomi di persone), email su caselle personali, numeri di cellulare, indirizzo e posizione dei nidi famiglia che si
        svolgono in un&apos;abitazione.
      </p>
    </>
  );
}
