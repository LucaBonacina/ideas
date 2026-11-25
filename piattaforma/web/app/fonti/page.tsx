import type { Metadata } from 'next';
import { api, catalogoFonti } from '@/lib/api';
import { TIPOLOGIE, dataBreve } from '@/lib/etichette';
import type { CompletezzaRegione, RigaCopertura } from '@/lib/tipi';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Fonti e copertura',
  description: 'Da dove vengono i dati, con quali licenze, quanto sono completi per regione e come tuteliamo la privacy.',
};

export default async function PaginaFonti() {
  const righe = (await api<RigaCopertura[]>('/strutture/copertura', 300)) ?? [];
  const regioni = [...new Set(righe.map((r) => r.regione))].sort();
  const tipologie = [...new Set(righe.map((r) => r.tipologia))];
  const valore = (reg: string, tip: string) => righe.filter((r) => r.regione === reg && r.tipologia === tip)
    .reduce((t, r) => t + r.strutture, 0);
  const { fonti, ausiliarie } = await catalogoFonti();
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
        pubblici. Qui diciamo da dove viene ogni dato, con quale licenza, e cosa manca.
      </p>

      <h2>Quanto è completo l&apos;elenco dei servizi 0-3</h2>
      <p className="tenue">
        Confronto con il censimento ISTAT 2024 dei servizi per la prima infanzia, comune per comune (in ogni comune contiamo
        al massimo quanti servizi conta ISTAT): in Italia ne copriamo {totNostri.toLocaleString('it-IT')} su{' '}
        {totIstat.toLocaleString('it-IT')} ({perc(totNostri, totIstat)}%). Le scuole dell&apos;infanzia statali e
        paritarie ci sono tutte.
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

      <h2>Fonti delle schede</h2>
      <p className="tenue">
        Ogni scheda indica la sua fonte, la data a cui il dato si riferisce e il link all&apos;originale. Quando più fonti
        descrivono la stessa struttura la scheda è una sola e cita anche le altre.
      </p>
      <div className="tabella-scorrevole">
        <table>
          <thead><tr><th>Fonte</th><th>Schede</th><th>Dato al</th><th>Licenza</th></tr></thead>
          <tbody>
            {fonti.map((f) => (
              <tr key={f.codice}>
                <td>
                  {f.url ? <a href={f.url} rel="noopener" target="_blank">{f.nome}</a> : f.nome}
                  {f.descrizione && <><br /><span className="tenue">{f.descrizione}</span></>}
                </td>
                <td>{f.strutture.toLocaleString('it-IT')}</td>
                <td>{f.dataRiferimento ? dataBreve(f.dataRiferimento) : '-'}</td>
                <td>{f.licenza ?? 'non indicata'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Altre fonti e attribuzioni</h2>
      <ul>
        {ausiliarie.map((f) => (
          <li key={f.nome}>
            <a href={f.url} rel="noopener" target="_blank">{f.nome}</a>, licenza {f.licenza}.{' '}
            <span className="tenue">{f.descrizione} Uso: {f.uso}</span>
          </li>
        ))}
      </ul>
      <p className="tenue">
        Dove la fonte non dichiara una licenza, riprendiamo solo dati pubblicati da enti pubblici in atti e pagine
        istituzionali (nome, indirizzo, tipologia del servizio) e rimandiamo sempre all&apos;originale. Se gestisci una
        fonte e vuoi indicarci una licenza o un aggiornamento, scrivici.
      </p>

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
        Un trattino significa che non abbiamo strutture di quel tipo nella regione, non necessariamente che non ce ne siano.
      </p>

      <h2>Privacy</h2>
      <p className="tenue">
        Le fonti pubbliche contengono a volte dati di persone. Sul sito non pubblichiamo: nomi di gestori privati (spesso
        contengono nomi di persone), email su caselle personali, numeri di cellulare, nome, indirizzo e posizione dei servizi
        educativi domiciliari, che si svolgono in un&apos;abitazione. I dettagli sono nell&apos;
        <a href="/privacy">informativa privacy</a>.
      </p>
    </>
  );
}
