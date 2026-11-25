import type { Metadata } from 'next';
import { NOME_SITO } from '@/lib/etichette';

export const metadata: Metadata = {
  title: 'Informativa privacy',
  description: 'Come trattiamo i dati di chi usa il sito e i dati delle strutture e delle persone presenti nelle fonti pubbliche.',
};

/** BOZZA: le parti tra [quadre] vanno completate dal titolare prima della pubblicazione. */
export default function PaginaPrivacy() {
  return (
    <>
      <h1>Informativa privacy</h1>
      <p className="tenue">Bozza del 25/11/2026, da completare prima della pubblicazione.</p>

      <h2>Chi tratta i dati</h2>
      <p>
        Titolare del trattamento: [nome o ragione sociale, indirizzo, codice fiscale o partita IVA]. Contatto per la privacy:
        [indirizzo email].
      </p>

      <h2>Chi usa il sito</h2>
      <p>
        {NOME_SITO} non chiede registrazione, non usa cookie di profilazione né strumenti di analisi del traffico e non
        salva i dati inseriti nel calcolatore del costo netto (ISEE, retta, data di nascita): il calcolo avviene al momento
        e il risultato non viene conservato.
      </p>
      <p>
        I server che ospitano il sito ([fornitore di hosting, es. Google Cloud, regione europe-west8 Milano]) registrano
        per ragioni tecniche e di sicurezza l&apos;indirizzo IP, la pagina richiesta, la data e l&apos;ora, conservati per
        [30] giorni. La mappa carica le immagini da [OpenStreetMap / fornitore delle mappe], che riceve l&apos;indirizzo IP
        del visitatore secondo la propria informativa.
      </p>
      <p>Base giuridica: legittimo interesse al funzionamento e alla sicurezza del servizio (art. 6.1.f GDPR).</p>

      <h2>Le strutture e le persone citate nelle fonti</h2>
      <p>
        Le schede delle strutture riprendono dati pubblicati da enti pubblici (Ministero, Regioni, Comuni, ISTAT) in
        elenchi, registri e pagine istituzionali, indicati nella <a href="/fonti">pagina delle fonti</a> e su ogni scheda.
        Si tratta soprattutto di dati di enti e servizi (nome, indirizzo, tipologia, gestione, posti, contatti
        istituzionali).
      </p>
      <p>
        Alcune fonti contengono anche dati di persone fisiche, per esempio titolari di ditte individuali, educatrici e
        educatori di servizi domiciliari, coordinatori. Sul sito non pubblichiamo: nomi di persone e di gestori privati,
        email su caselle personali, numeri di cellulare, nome, indirizzo e posizione dei servizi educativi domiciliari, che
        si svolgono in un&apos;abitazione. [Se e come questi dati, conservati nel nostro archivio e non pubblicati,
        vengono usati per contattare i gestori: finalità, base giuridica, tempi di conservazione. Da definire prima di
        qualsiasi contatto, con informativa al primo contatto ai sensi dell&apos;art. 14 GDPR.]
      </p>

      <h2>I tuoi diritti</h2>
      <p>
        Puoi chiedere accesso, rettifica, cancellazione, limitazione e opposizione al trattamento (artt. 15-22 GDPR)
        scrivendo a [indirizzo email]. Se gestisci una struttura e i dati della scheda sono sbagliati o vuoi aggiungerne,
        scrivici allo stesso indirizzo. Puoi proporre reclamo al Garante per la protezione dei dati personali
        (garanteprivacy.it).
      </p>
    </>
  );
}
