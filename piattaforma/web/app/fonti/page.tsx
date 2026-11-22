import type { Metadata } from 'next';
import { api } from '@/lib/api';
import { FONTI, TIPOLOGIE } from '@/lib/etichette';
import type { CompletezzaRegione, RigaCopertura } from '@/lib/tipi';

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
  const completezza = (await api<CompletezzaRegione[]>('/comuni/completezza', 300)) ?? [];
  const totIstat = completezza.reduce((t, r) => t + r.istat, 0);
  const totNostri = completezza.reduce((t, r) => t + r.nostri, 0);
  const perc = (a: number, b: number) => (b ? Math.min(100, Math.round((100 * a) / b)) : 0);
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
      <h2>Quanto è completo l&apos;elenco dei servizi 0-3</h2>
      <p className="tenue">
        Confronto con il censimento ISTAT 2024 dei servizi per la prima infanzia, comune per comune (in ogni comune contiamo al massimo quanti servizi conta ISTAT): in Italia ne copriamo
        {' '}{totNostri.toLocaleString('it-IT')} su {totIstat.toLocaleString('it-IT')} ({perc(totNostri, totIstat)}%).
      </p>
      <div className="tabella-scorrevole">
        <table>
          <thead><tr><th>Regione</th><th>ISTAT 2024</th><th>Coperti</th><th>Copertura</th><th>Comuni completi</th></tr></thead>
          <tbody>
            {completezza.map((r) => (
              <tr key={r.regione}>
                <td>{r.regione}</td>
                <td>{r.istat.toLocaleString('it-IT')}</td>
                <td>{r.nostri.toLocaleString('it-IT')}</td>
                <td>{perc(r.nostri, r.istat)}%</td>
                <td>{r.comuniCompleti} su {r.comuniConServizi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Strutture per regione e tipologia</h2>
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
