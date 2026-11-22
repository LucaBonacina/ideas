import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MappaStrutture from '@/components/MappaStrutture';
import { api } from '@/lib/api';
import {
  FONTI, GESTIONI, TIPOLOGIE, dataBreve, fasciaTesto,
} from '@/lib/etichette';
import type { Struttura } from '@/lib/tipi';

type Parametri = { params: Promise<{ chiave: string }> };

async function carica(chiave: string): Promise<Struttura | null> {
  return api<Struttura>(`/strutture/${encodeURIComponent(decodeURIComponent(chiave))}`);
}

export async function generateMetadata({ params }: Parametri): Promise<Metadata> {
  const s = await carica((await params).chiave);
  if (!s) return {};
  return {
    title: `${s.denominazione}, ${s.indirizzo.comune}`,
    description: `${TIPOLOGIE[s.tipologia] ?? s.tipologia} a ${s.indirizzo.comune}: dati ufficiali, fonte e contatti.`,
  };
}

export default async function PaginaStruttura({ params }: Parametri) {
  const s = await carica((await params).chiave);
  if (!s) notFound();
  const fonte = FONTI[s.provenienza.fonte];
  const nido = s.fascia !== '3-6';
  const domiciliare = s.tipologia === 'SERVIZIO_DOMICILIARE';
  return (
    <>
      <p className="tenue">
        <Link href="/">Cerca</Link> › <Link href={`/comune/${s.indirizzo.codiceIstat}`}>{s.indirizzo.comune}</Link>
      </p>
      <h1>{s.denominazione}</h1>
      <p>
        <span className="etichetta">{fasciaTesto(s.fascia)}</span>
        {TIPOLOGIE[s.tipologia] ?? s.tipologia} · {GESTIONI[s.gestione] ?? s.gestione}
      </p>
      <div className="due-colonne">
        <div>
          <div className="carta">
            <dl className="scheda">
              <dt>Indirizzo</dt>
              <dd>
                {domiciliare
                  ? `Nel comune di ${s.indirizzo.comune} (indirizzo non pubblicato: servizio in abitazione privata)`
                  : [s.indirizzo.via, [s.indirizzo.cap, s.indirizzo.comune].filter(Boolean).join(' '), `(${s.indirizzo.siglaProvincia})`].filter(Boolean).join(', ')}
              </dd>
              <dt>Tipologia nella fonte</dt>
              <dd>{s.tipologiaOriginale.toLowerCase()}</dd>
              {s.gestore && (<><dt>{s.gestione === 'STATALE' ? 'Istituto di riferimento' : 'Ente gestore'}</dt><dd>{s.gestore}</dd></>)}
              {s.posti && (<><dt>Posti autorizzati</dt><dd>{s.posti}</dd></>)}
              {s.caratteristiche.length > 0 && (<><dt>Caratteristiche</dt><dd>{s.caratteristiche.join(', ')}</dd></>)}
              {s.contatti.telefono && (<><dt>Telefono</dt><dd><a href={`tel:${s.contatti.telefono}`}>{s.contatti.telefono}</a></dd></>)}
              {s.contatti.email && (<><dt>Email</dt><dd><a href={`mailto:${s.contatti.email}`}>{s.contatti.email}</a></dd></>)}
              {s.contatti.pec && (<><dt>PEC</dt><dd>{s.contatti.pec}</dd></>)}
              {s.contatti.sito && (<><dt>Sito</dt><dd><a href={s.contatti.sito} rel="nofollow noopener" target="_blank">{s.contatti.sito.replace(/^https?:\/\//, '')}</a></dd></>)}
            </dl>
          </div>
          <h2>Cosa non sappiamo ancora</h2>
          <p className="tenue">
            Rette, orari, età di ingresso, posti liberi e scadenze di iscrizione non sono nelle fonti pubbliche: chiedili
            direttamente alla struttura{s.gestione === 'COMUNALE' || s.gestione === 'STATALE' ? ' o al Comune' : ''}.
          </p>
          {nido && (
            <p>
              <Link className="bottone" href={`/calcolatore?struttura=${encodeURIComponent(s.chiave)}`}>Calcola quanto pagheresti qui</Link>
            </p>
          )}
        </div>
        <div>
          <MappaStrutture strutture={[s]} />
          <div className="carta">
            <h3>Da dove vengono questi dati</h3>
            <p className="tenue">
              {fonte?.nome ?? s.provenienza.fonte}.{' '}
              {s.provenienza.url && <a href={s.provenienza.url} rel="noopener" target="_blank">Vai alla fonte</a>}
            </p>
            <p className="tenue">
              Codice nella fonte: {s.provenienza.idNellaFonte}<br />
              {s.provenienza.dataRiferimento && <>Dato riferito al {dataBreve(s.provenienza.dataRiferimento)}<br /></>}
              Scaricato il {dataBreve(s.provenienza.scaricatoIl)}<br />
              Licenza: {s.provenienza.licenza ?? 'non indicata'}
              {s.posizioneFonte && <><br />Posizione: {FONTI[s.posizioneFonte]?.nome ?? s.posizioneFonte}</>}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
