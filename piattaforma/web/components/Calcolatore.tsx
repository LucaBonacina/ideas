'use client';

import { useState } from 'react';
import { TIPOLOGIE, euro } from '@/lib/etichette';
import type { EsitoCostoNetto } from '@/lib/tipi';

interface StrutturaScelta {
  chiave: string; denominazione: string; regione: string; tipologia: string; gestione: string;
}

const REGIONI = ['Abruzzo', 'Basilicata', 'Calabria', 'Campania', 'Emilia-Romagna', 'Friuli-Venezia Giulia', 'Lazio', 'Liguria',
  'Lombardia', 'Marche', 'Molise', 'Piemonte', 'Puglia', 'Sardegna', 'Sicilia', 'Toscana', 'Trentino-Alto Adige', 'Umbria',
  "Valle d'Aosta", 'Veneto'];

const TIPOLOGIE_NIDO = ['NIDO', 'MICRONIDO', 'SEZIONE_PRIMAVERA', 'SPAZIO_GIOCO', 'SERVIZIO_DOMICILIARE', 'CENTRO_BAMBINI_FAMIGLIE'];

type TreStati = 'si' | 'no' | 'nonso';

function treStati(v: TreStati): boolean | null {
  if (v === 'si') return true;
  if (v === 'no') return false;
  return null;
}

function Scelta({ nome, valore, onChange, etichetta, aiuto }: {
  nome: string; valore: TreStati; onChange: (v: TreStati) => void; etichetta: string; aiuto?: string;
}) {
  return (
    <fieldset className="campo" style={{ border: 0, padding: 0, margin: 0 }}>
      <legend style={{ fontWeight: 600, marginBottom: 4 }}>{etichetta}</legend>
      <div className="scelte">
        {(['si', 'no', 'nonso'] as TreStati[]).map((v) => (
          <label key={v}>
            <input type="radio" name={nome} checked={valore === v} onChange={() => onChange(v)} />
            {v === 'si' ? 'Sì' : v === 'no' ? 'No' : 'Non lo so'}
          </label>
        ))}
      </div>
      {aiuto && <small>{aiuto}</small>}
    </fieldset>
  );
}

export default function Calcolatore({ struttura }: { struttura?: StrutturaScelta }) {
  const [dataNascita, setDataNascita] = useState('');
  const [retta, setRetta] = useState('');
  const [mesi, setMesi] = useState('11');
  const [isee, setIsee] = useState('');
  const [senzaIsee, setSenzaIsee] = useState(false);
  const [regione, setRegione] = useState(struttura?.regione ?? 'Lombardia');
  const [tipologia, setTipologia] = useState(struttura?.tipologia ?? 'NIDO');
  const pubblica = struttura && ['COMUNALE', 'PUBBLICA_ALTRA', 'STATALE'].includes(struttura.gestione);
  const [convenzionata, setConvenzionata] = useState<TreStati>(pubblica ? 'si' : 'nonso');
  const [aderente, setAderente] = useState<TreStati>('nonso');
  const [occupato, setOccupato] = useState<TreStati>('nonso');
  const [esito, setEsito] = useState<EsitoCostoNetto | null>(null);
  const [errore, setErrore] = useState('');
  const [inCorso, setInCorso] = useState(false);
  const lombardia = regione === 'Lombardia';

  async function calcola(e: React.FormEvent) {
    e.preventDefault();
    setErrore(''); setInCorso(true);
    const corpo: Record<string, unknown> = {
      dataNascita,
      rettaMensile: Number(retta.replace(',', '.')),
      mesi: Number(mesi),
      iseeNeutralizzato: senzaIsee ? null : Number(isee.replace(/\./g, '').replace(',', '.')),
      pubblicaOConvenzionata: treStati(convenzionata),
      comuneAderenteNidiGratisPlus: treStati(aderente),
      genitoreOccupatoODid: treStati(occupato),
    };
    if (struttura) corpo.struttura = struttura.chiave; else { corpo.regione = regione; corpo.tipologia = tipologia; }
    try {
      const r = await fetch('/api/calcolatore/costo-netto', {
        method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(corpo),
      });
      if (!r.ok) {
        const d = await r.json().catch(() => ({}));
        throw new Error(Array.isArray(d.message) ? d.message.join('; ') : d.message || 'Controlla i dati inseriti');
      }
      setEsito(await r.json());
    } catch (err) {
      setEsito(null);
      setErrore(err instanceof Error ? err.message : 'Errore nel calcolo');
    } finally {
      setInCorso(false);
    }
  }

  return (
    <div className="due-colonne">
      <form className="carta modulo" onSubmit={calcola}>
        {struttura ? (
          <p>Struttura: <strong>{struttura.denominazione}</strong> ({TIPOLOGIE[struttura.tipologia]?.toLowerCase()}, {struttura.regione})</p>
        ) : (
          <>
            <div className="campo">
              <label htmlFor="regione">Regione</label>
              <select id="regione" value={regione} onChange={(e) => setRegione(e.target.value)}>
                {REGIONI.map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
            <div className="campo">
              <label htmlFor="tipologia">Tipo di servizio</label>
              <select id="tipologia" value={tipologia} onChange={(e) => setTipologia(e.target.value)}>
                {TIPOLOGIE_NIDO.map((t) => <option key={t} value={t}>{TIPOLOGIE[t]}</option>)}
              </select>
            </div>
          </>
        )}
        <div className="campo">
          <label htmlFor="nascita">Data di nascita del bambino</label>
          <input id="nascita" type="date" required value={dataNascita} onChange={(e) => setDataNascita(e.target.value)} />
        </div>
        <div className="campo">
          <label htmlFor="retta">Retta mensile (euro)</label>
          <input id="retta" inputMode="decimal" required value={retta} onChange={(e) => setRetta(e.target.value)} placeholder="Es. 550" />
          <small>Retta più pasti, già al netto di eventuali sconti del Comune. Esclusa l&apos;iscrizione.</small>
        </div>
        <div className="campo">
          <label htmlFor="mesi">Mesi di frequenza</label>
          <input id="mesi" type="number" min={1} max={11} required value={mesi} onChange={(e) => setMesi(e.target.value)} />
        </div>
        <div className="campo">
          <label htmlFor="isee">ISEE (euro)</label>
          <input id="isee" inputMode="decimal" disabled={senzaIsee} required={!senzaIsee} value={isee} onChange={(e) => setIsee(e.target.value)} placeholder="Es. 18000" />
          <small>
            Il Bonus nido usa l&apos;ISEE per prestazioni familiari meno l&apos;Assegno unico diviso per la scala di
            equivalenza: se non lo conosci, inserisci il tuo ISEE e il risultato sarà prudente.
          </small>
          <div className="scelte" style={{ marginTop: 6 }}>
            <label><input type="checkbox" checked={senzaIsee} onChange={(e) => setSenzaIsee(e.target.checked)} /> Non ho un ISEE</label>
          </div>
        </div>
        {lombardia && (
          <>
            <Scelta nome="conv" valore={convenzionata} onChange={setConvenzionata} etichetta="Il posto è pubblico o convenzionato con il Comune?" aiuto="Nei nidi privati, chiedilo alla struttura." />
            <Scelta nome="aderente" valore={aderente} onChange={setAderente} etichetta="Il tuo Comune aderisce a Nidi Gratis Plus?" aiuto="L'elenco dei Comuni ammessi non è pubblico: chiedilo al Comune." />
            <Scelta nome="occupato" valore={occupato} onChange={setOccupato} etichetta="Almeno un genitore lavora (o è disoccupato con DID e Patto di servizio)?" />
          </>
        )}
        <button className="bottone" type="submit" disabled={inCorso}>{inCorso ? 'Calcolo…' : 'Calcola'}</button>
        {errore && <p role="alert" style={{ color: 'var(--errore)' }}>{errore}</p>}
      </form>
      <div aria-live="polite">
        {esito && (
          <div className="carta">
            <p className="tenue">Costo certo per la famiglia</p>
            <p className="risultato-grande">{euro(esito.costoNettoAnnuo)} <span className="tenue" style={{ fontSize: '1rem' }}>all&apos;anno</span></p>
            <p className="tenue">circa {euro(esito.costoNettoMensile)} al mese, su una retta di {euro(esito.rettaAnnua)} l&apos;anno</p>
            {esito.costoNettoAnnuoSeVerificate < esito.costoNettoAnnuo && (
              <div className="avviso">
                Se si confermano le condizioni da verificare, il costo scende a <strong>{euro(esito.costoNettoAnnuoSeVerificate)}</strong> l&apos;anno.
              </div>
            )}
            <h3 style={{ marginTop: 16 }}>Come lo calcoliamo</h3>
            {esito.misure.map((m) => (
              <div key={m.misura} style={{ marginBottom: 14 }}>
                <strong>{m.misura}</strong>{' '}
                <span className={`stato-${m.stato.replace(' ', '-')}`}>· {m.stato}{m.annuo > 0 ? ` · ${euro(m.annuo)} l'anno` : ''}</span>
                <ul className="tenue" style={{ margin: '4px 0', paddingLeft: 18 }}>
                  {m.motivi.map((x) => <li key={x}>{x}</li>)}
                </ul>
                <small><a href={m.fonte.url} target="_blank" rel="noopener">{m.fonte.titolo}</a></small>
              </div>
            ))}
            <h3>Da sapere</h3>
            <ul className="tenue" style={{ paddingLeft: 18 }}>
              {esito.avvertenze.map((a) => <li key={a}>{a}</li>)}
            </ul>
            <p className="tenue"><small>Stima informativa sulle regole ufficiali 2026: non sostituisce l&apos;esito della domanda all&apos;INPS e al Comune.</small></p>
          </div>
        )}
      </div>
    </div>
  );
}
