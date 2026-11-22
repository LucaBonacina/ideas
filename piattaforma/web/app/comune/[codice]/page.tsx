import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MappaStrutture from '@/components/MappaStrutture';
import SchedaBreve from '@/components/SchedaBreve';
import CercaComune from '@/components/CercaComune';
import { api } from '@/lib/api';
import { regioniCon03 } from '@/lib/copertura';
import { conteggio as testoConteggio } from '@/lib/etichette';
import type { ComuneDettaglio, Pagina, Struttura } from '@/lib/tipi';

type Parametri = { params: Promise<{ codice: string }>; searchParams: Promise<{ fascia?: string; pagina?: string }> };

const PER_PAGINA = 50;

export async function generateMetadata({ params }: Parametri): Promise<Metadata> {
  const { codice } = await params;
  const comune = await api<ComuneDettaglio>(`/comuni/${codice}`);
  if (!comune) return {};
  return {
    title: `Nidi e scuole dell'infanzia a ${comune.nome}`,
    description: `Elenco di nidi, micronidi e scuole dell'infanzia a ${comune.nome} (${comune.siglaProvincia}) da fonti ufficiali, con mappa.`,
  };
}

export default async function PaginaComune({ params, searchParams }: Parametri) {
  const { codice } = await params;
  const { fascia: f, pagina: p } = await searchParams;
  const fascia = f === '0-3' || f === '3-6' ? f : undefined;
  const pagina = Math.max(1, Number.parseInt(p ?? '1', 10) || 1);
  const comune = await api<ComuneDettaglio>(`/comuni/${codice}`);
  if (!comune) notFound();
  const query = new URLSearchParams({ comune: codice, perPagina: String(PER_PAGINA), pagina: String(pagina) });
  if (fascia) query.set('fascia', fascia);
  const [elenco, con03] = await Promise.all([
    api<Pagina<Struttura>>(`/strutture?${query.toString()}`, 600),
    regioniCon03(),
  ]);
  const risultati = elenco?.risultati ?? [];
  const totale = elenco?.totale ?? 0;
  const pagine = Math.ceil(totale / PER_PAGINA);
  const link = (nuovaFascia?: string, nuovaPagina = 1) => {
    const q = new URLSearchParams();
    if (nuovaFascia) q.set('fascia', nuovaFascia);
    if (nuovaPagina > 1) q.set('pagina', String(nuovaPagina));
    const s = q.toString();
    return `/comune/${codice}${s ? `?${s}` : ''}`;
  };
  const conteggio = (fx?: string) => comune.conteggi.filter((c) => !fx || c.fascia === fx).reduce((t, c) => t + c.strutture, 0);
  const senzaPosizione = risultati.filter((s) => !s.posizione).length;

  return (
    <>
      <p className="tenue"><Link href="/">Cerca</Link> › {comune.regione} › {comune.siglaProvincia}</p>
      <h1>Nidi e scuole dell&apos;infanzia a {comune.nome}</h1>
      <p className="tenue">
        {conteggio() === 1 ? '1 struttura trovata' : `${conteggio()} strutture trovate`}
        {conteggio() > 0 ? `: ${comune.conteggi.map((c) => testoConteggio(c.strutture, c.tipologia)).join(', ')}.` : '.'}
      </p>
      {!con03.has(comune.regione) && (
        <div className="avviso">
          <strong>Nidi (0-3 anni): elenco non ancora disponibile per {comune.regione}.</strong> Per ora mostriamo solo le scuole
          dell&apos;infanzia. Stiamo aggiungendo i registri regionali e comunali: intanto consulta il sito del tuo Comune.{' '}
          <Link href="/fonti">Copertura per regione</Link>
        </div>
      )}
      <nav className="filtri" aria-label="Fascia d'età">
        <Link href={link()} aria-current={!fascia}>Tutte ({conteggio()})</Link>
        <Link href={link('0-3')} aria-current={fascia === '0-3'}>Nidi 0-3 ({conteggio('0-3')})</Link>
        <Link href={link('3-6')} aria-current={fascia === '3-6'}>Infanzia 3-6 ({conteggio('3-6')})</Link>
      </nav>
      <MappaStrutture strutture={risultati} centro={comune.centro} />
      {senzaPosizione > 0 && (
        <p className="tenue">
          {senzaPosizione === 1 ? '1 struttura in questa pagina non è' : `${senzaPosizione} strutture in questa pagina non sono`} sulla mappa: i nidi famiglia si svolgono in un&apos;abitazione
          privata e non ne mostriamo l&apos;indirizzo; per altre la fonte non dà la posizione.
        </p>
      )}
      <ul className="elenco">
        {risultati.map((s) => <SchedaBreve key={s.chiave} s={s} />)}
      </ul>
      {pagine > 1 && (
        <nav className="paginazione" aria-label="Pagine">
          {pagina > 1 && <Link className="bottone secondario" href={link(fascia, pagina - 1)}>← Precedenti</Link>}
          <span className="tenue">Pagina {pagina} di {pagine}</span>
          {pagina < pagine && <Link className="bottone secondario" href={link(fascia, pagina + 1)}>Successive →</Link>}
        </nav>
      )}
      <h2>Cerca un altro comune</h2>
      <CercaComune etichetta="Comune" />
    </>
  );
}
