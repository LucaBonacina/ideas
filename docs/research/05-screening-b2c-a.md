# 05 — Screening B2C, gruppo A (fase 2)

Mercato: Italia. Candidati: F1, F2, F3, F4, F5, #32, #9, C1, #10, #4+N3, #18+N11 (da `docs/04-b2c-generazione.md`).
Data di accesso alle fonti: 2026-11-20 salvo diversa indicazione.

<!-- TABELLA RIASSUNTIVA: compilata a fine screening -->

## 0. Pre-registrazione (scritta prima di raccogliere evidenze)

### Asticella comune per tutti i candidati
Fissata prima di misurare, uguale per tutti:
- **Soglia di domanda per la SEO long-tail (C2, [stima]).** Il candidato supera la soglia se, nell'autocompletamento di Google, la query principale si declina per luogo (comune/città) in **almeno 10 dei 20 comuni più popolosi** provati, oppure se esistono almeno **3 famiglie di query distinte** con varianti long-tail. Sotto questa soglia la SEO programmatica non è un canale credibile → G4 "incerto" o "no".
- **Concorrenza pubblica.** Si scarta (o si declassa) se un servizio pubblico gratuito copre già **la stessa funzione** (non solo l'informazione) in modo usabile: ricerca + scadenze/notifiche.
- **Pagatore (G3).** Serve almeno un soggetto che **oggi già paga** per qualcosa di simile, con una cifra pubblica (listino, commissione di affiliazione, abbonamento). Senza cifra → "incerto".
- **AI (C6).** Si considera "già soddisfatto" se una risposta AI/chatbot dà, per una query tipica con il nome di un comune, informazioni corrette e aggiornate (date, importi) senza rimandare al sito ufficiale.

### Ipotesi e criteri di scarto per candidato

**F1 — Nidi (iscrizioni, graduatorie, scadenze, rette per comune + bonus nido).** Criteri pre-registrati in `04-b2c-generazione.md`.
Ci aspettiamo: dolore alto e ricorrente; frammentazione alta; long-tail "iscrizione nido [comune] 2027"; monetizzazione debole; stagionalità forte (gennaio-maggio).
Scarto se: app IO/INPS/portali regionali coprono già scadenze e notifiche; volume sommato sotto la soglia comune sopra; nessun pagatore con ricavo per utente plausibile (lead dei nidi privati, affiliazione prima infanzia); le risposte AI rispondono già bene per comune.

**F2 — Calendario burocratico familiare personalizzato.** Criteri pre-registrati in `04-b2c-generazione.md` (gli stessi di F1).
Ipotesi aggiuntiva: la domanda è "latente" (nessuno cerca "calendario burocratico"), quindi la SEO funziona solo sulle singole scadenze, dove competono INPS, CAF e testate. Scarto anche se le query delle singole scadenze sono già presidiate da siti forti e le risposte AI coprono le date nazionali (che sono uguali per tutti).

**F3 — Centri estivi e campus.** Criteri pre-registrati in `04-b2c-generazione.md`.
Ipotesi aggiuntiva: domanda molto stagionale (marzo-giugno); esistono già directory private (es. portali di campus) che vendono visibilità. Scarto anche se un incumbent privato copre già bene la ricerca per città con prezzi.

**F4 — Pediatri con posti liberi per ASL.**
Ci aspettiamo: dolore reale ma episodico (si sceglie il pediatra una o due volte); dati in elenchi ASL eterogenei, spesso senza disponibilità di posti; scelta già fattibile online nei portali regionali/fascicolo sanitario; nessun pagatore (i pediatri di libera scelta convenzionati non pagano per pazienti).
Scarto se: i portali regionali mostrano già i posti disponibili nella procedura di scelta; oppure i dati sui posti liberi non sono pubblici (G2); oppure nessun pagatore con cifra (G3).

**F5 — Attività extrascolastiche per quartiere.**
Ci aspettiamo: domanda alta ma generica ("corsi nuoto bambini [città]"), SERP occupata da Google Maps e dalle singole associazioni; dati poco strutturati (siti di associazioni, pagine social); pagatori con budget piccoli.
Scarto se: Google Maps/directory esistenti coprono già la ricerca; nessuna associazione paga oggi visibilità con cifre pubbliche; dati principalmente su social (non scrapabili in modo sostenibile).

**#32 — Libri scolastici usati.**
Ci aspettiamo: liste adozioni già pubbliche e gratuite (dati aperti MIM); marketplace dell'usato già esistenti e mercatini locali; stagionalità estrema (giugno-settembre); affiliazione con margini bassi.
Scarto se: esistono già servizi gratuiti che fanno lista adozioni → acquisto usato/nuovo in modo usabile; se l'affiliazione sui libri scolastici è assente o con commissioni irrisorie.

**#9 — RSA: rette, confronto, liste d'attesa.**
Ci aspettiamo: dolore forte (costi, rette alte, contenziosi sulla quota sanitaria); dati in carte dei servizi PDF e albi regionali; strutture che pagano già directory/lead.
Scarto se: le rette non sono reperibili in modo sistematico (G2); le directory esistenti coprono già prezzi e disponibilità; i dati sulle liste d'attesa sono solo nei sistemi regionali (non pubblici). Rischio G1: i servizi di rimborso delle rette sono attività legali (avvocati) → solo come lead.

**C1 — Trova-bonus personale.**
Ci aspettiamo: domanda alta e ricorrente ("bonus 2027", "a quali bonus ho diritto"); concorrenza di testate e CAF molto forte; INPS/IO coprono parte delle prestazioni nazionali; i bonus comunali/regionali sono il vero spazio di frammentazione.
Scarto se: esiste già un servizio (pubblico o privato) che fa il matching personale includendo bandi regionali/comunali; se i pagatori (CAF/patronati) non pagano per contatti o lo fanno con cifre irrisorie; se le risposte AI coprono già bene i bonus nazionali e quelli locali sono troppo pochi o troppo sporadici.

**#10 — Tempi di attesa sanitari.**
Ci aspettiamo: dolore fortissimo; dati solo aggregati e in parte dietro SPID; pagatori (strutture private) limitati dalle regole sulla pubblicità sanitaria; concorrenti privati di prenotazione (es. piattaforme di prenotazione visite) già forti.
Scarto se: i dati per singola prestazione e struttura non sono pubblici senza autenticazione (G2); se le piattaforme private già mostrano disponibilità reale; se G1 (pubblicità sanitaria) blocca il modello a lead.

**#4 + N3 — Concorsi pubblici + tracker delle candidature.**
Ci aspettiamo: domanda enorme; fonte unica e pulita (inPA) → vantaggio dati basso; SEO presidiata (Concorsando, testate specializzate); pagatori reali nella preparazione (corsi, manuali). N3 come strumento operativo.
Scarto se: inPA offre già notifiche/salvataggi e un'area personale con lo stato delle candidature; se le testate esistenti coprono già alert e calendari prove gratuitamente; se nessun ente di formazione ha un programma di affiliazione con cifre pubbliche.

**#18 + N11 — Lavoro con dati veri / rilevatore di annunci fantasma.**
Ci aspettiamo: dolore documentato (annunci fantasma, mancanza della retribuzione); mercato dominato da Indeed/LinkedIn/InfoJobs; B2C poco monetizzabile; possibile vincolo di autorizzazione all'intermediazione (G1).
Scarto se: l'aggregazione di annunci richiede autorizzazione ANPAL/ministeriale (G1); se lo scraping dei siti carriere è vietato dai termini e protetto da *sui generis* (G5); se nessun utente/azienda paga per qualcosa di simile in Italia.

