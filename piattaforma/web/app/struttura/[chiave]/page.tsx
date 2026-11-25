import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MappaStrutture from '@/components/MappaStrutture';
import { api, catalogoFonti, nomeFonte } from '@/lib/api';
import {
  GESTIONI, TIPOLOGIE, dataBreve, fasciaTesto,
} from '@/lib/etichette';
import type { Struttura } from '@/lib/tipi';

type Parametri = { params: Promise<{ chiave: string }> };

function etaTesto(da?: number, a?: number): string {
  const mesi = (m: number) => (m % 12 === 0 && m > 0 ? `${m / 12} ${m === 12 ? 'anno' : 'anni'}` : `${m} mesi`);
  if (da !== undefined && a !== undefined) return `da ${mesi(da)} a ${mesi(a)}`;
  if (da !== undefined) return `da ${mesi(da)}`;
  return `fino a ${mesi(a as number)}`;
}

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
  const contatti = s.contatti ?? {};
  const caratteristiche = s.caratteristiche ?? [];
  const catalogo = await catalogoFonti();
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
                {domiciliare || !s.indirizzo.via
                  ? domiciliare ? `Nel comune di ${s.indirizzo.comune} (indirizzo non pubblicato: servizio in abitazione privata)` : `${s.indirizzo.comune} (${s.indirizzo.siglaProvincia}); la fonte non riporta l'indirizzo`
                  : [s.indirizzo.via, [s.indirizzo.cap, s.indirizzo.comune].filter(Boolean).join(' '), `(${s.indirizzo.siglaProvincia})`].filter(Boolean).join(', ')}
              </dd>
              <dt>Tipologia nella fonte</dt>
              <dd>{s.tipologiaOriginale.toLowerCase()}</dd>
              {s.gestore && (<><dt>{s.gestione === 'STATALE' ? 'Istituto di riferimento' : 'Ente gestore'}</dt><dd>{s.gestore}</dd></>)}
              {s.posti && (<><dt>Posti autorizzati</dt><dd>{s.posti}</dd></>)}
              {(s.etaMinimaMesi !== undefined || s.etaMassimaMesi !== undefined) && (
                <><dt>Età accolte</dt><dd>{etaTesto(s.etaMinimaMesi, s.etaMassimaMesi)}</dd></>
              )}
              {s.accreditamento && (<><dt>Accreditamento</dt><dd>{{ si: 'Accreditata', no: 'Non accreditata', 'in corso': 'In corso di accreditamento' }[s.accreditamento]}</dd></>)}
              {s.orari && s.orari.length > 0 && (<><dt>Orari settimanali</dt><dd>{s.orari.join('; ')}</dd></>)}
              {s.bambiniIscritti !== undefined && (<><dt>Bambini iscritti</dt><dd>{s.bambiniIscritti}{s.annoIscritti ? ` (a.s. ${s.annoIscritti})` : ''}</dd></>)}
              {s.anticipatari !== undefined && (<><dt>Bambini sotto i 3 anni</dt><dd>{s.anticipatari ? 'Sì, nell\'ultimo anno ha accolto anche anticipatari' : 'No, nell\'ultimo anno nessun anticipatario'}</dd></>)}
              {s.misureAderite && s.misureAderite.length > 0 && (<><dt>Aderisce a</dt><dd>{s.misureAderite.join(', ')}</dd></>)}
              {caratteristiche.length > 0 && (<><dt>Caratteristiche</dt><dd>{caratteristiche.join(', ')}</dd></>)}
              {contatti.telefono && (<><dt>Telefono</dt><dd><a href={`tel:${contatti.telefono}`}>{contatti.telefono}</a></dd></>)}
              {contatti.email && (<><dt>Email</dt><dd><a href={`mailto:${contatti.email}`}>{contatti.email}</a></dd></>)}
              {contatti.pec && (<><dt>PEC</dt><dd>{contatti.pec}</dd></>)}
              {contatti.sito && (<><dt>Sito</dt><dd><a href={contatti.sito} rel="nofollow noopener" target="_blank">{contatti.sito.replace(/^https?:\/\//, '')}</a></dd></>)}
            </dl>
          </div>
          <h2>Cosa non sappiamo ancora</h2>
          <p className="tenue">
            {nido ? 'Rette, orari, età di ingresso, posti liberi e scadenze di iscrizione' : 'Costo della mensa, posti liberi e criteri di accesso'} non sono nelle fonti pubbliche: chiedili
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
              {nomeFonte(catalogo, s.provenienza.fonte)}.{' '}
              {s.provenienza.url && <a href={s.provenienza.url} rel="noopener" target="_blank">Vai alla fonte</a>}
            </p>
            <p className="tenue">
              Codice nella fonte: {s.provenienza.idNellaFonte}<br />
              {s.provenienza.dataRiferimento && <>Dato riferito al {dataBreve(s.provenienza.dataRiferimento)}<br /></>}
              Scaricato il {dataBreve(s.provenienza.scaricatoIl)}<br />
              Licenza: {s.provenienza.licenza ?? 'non indicata'}
              {s.posizioneFonte && <><br />Posizione: {nomeFonte(catalogo, s.posizioneFonte)}{s.posizionePrecisione === 'via' ? ' (punto approssimato sulla via)' : ''}</>}
              {s.altreFonti && s.altreFonti.length > 0 && (
                <><br />Confermata anche da: {[...new Set(s.altreFonti.map((c) => nomeFonte(catalogo, c.split(':')[0])))].join('; ')}</>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
