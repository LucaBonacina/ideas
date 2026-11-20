# 05 — Screening B2C, gruppo A (fase 2)

Mercato: Italia. Candidati: F1, F2, F3, F4, F5, #32, #9, C1, #10, #4+N3, #18+N11 (da `docs/04-b2c-generazione.md`).
Data di accesso alle fonti: 2026-11-20. Le ipotesi e i criteri di scarto (§0) sono stati scritti e pubblicati con un commit **prima** di raccogliere le evidenze, e poi non sono stati modificati.

## Sintesi

| Candidato | Verdetto | Motivo in una riga |
|---|---|---|
| F1 Nidi (iscrizioni, graduatorie, rette, bonus nido) | **INCERTO (G3)** | Domanda long-tail forte (circa 20/20 comuni, oltre 170 varianti per query) e risposte AI inaffidabili, ma nessun pagatore con una cifra pubblica. IO (modello "Asilo nido", circa 1.480 comuni) e INPS (mappa dei nidi) stanno chiudendo lo spazio. |
| F2 Calendario burocratico familiare | **FAIL (G4 + criterio di scarto specifico)** | Nessuno cerca il prodotto. Le singole scadenze sono presidiate da testate e coperte dalle risposte AI; avvisi già forniti da IO e BonusX. |
| F3 Centri estivi e campus | **PASS (debole)** | 20/20 comuni, circa 250 varianti, pagatori con cifra (promozione da 20 € a 200 €). Ma la monetizzazione è bassa e la stagionalità estrema (penalità). |
| F4 Pediatri con posti liberi | **FAIL (G3)** | Nessun pagatore. Il dolore è la carenza di pediatri, non di informazione. In Lombardia i portali pubblici mostrano già la disponibilità. |
| F5 Attività extrascolastiche per quartiere | **INCERTO (G2/G3)** | Domanda solo per singola attività; long-tail per quartiere sottile. Nessun listino per la visibilità e nessuna evidenza di dolore. |
| #32 Libri scolastici usati | **FAIL (criterio di scarto pre-registrato)** | Libraccio fa già scuola → classe → carrello nuovo/usato gratis, e lo fanno anche RiAdotta e italiainnumeri. Affiliazione 3,7-5% (circa 7-15 € per famiglia). |
| #9 RSA (rette, confronto, liste d'attesa) + N5 | **INCERTO (G3)** | Dolore e domanda forti (retta media oltre 2.000 €/mese, attesa di 115 giorni), ma nessun listino di directory o di lead. Alcune ATS e la Toscana pubblicano già rette e liste. I lead verso avvocati sono vietati dal codice deontologico. |
| C1 Trova-bonus personale | **FAIL (criterio di scarto pre-registrato n.1)** | BonusX fa già il matching personale su oltre 700 bonus nazionali e locali, con avvisi (0-299,95 €/anno, oltre 850 mila utenti, Trustpilot 4,8). INPS fa già proposte proattive. |
| #10 Tempi di attesa sanitari | **FAIL (G2)** | Il dato pubblico è solo aggregato e a posteriori; la prima disponibilità per struttura si vede solo nel CUP con l'impegnativa. Sul privato, Cup24 copre già 6.637 strutture. |
| #4 + N3 Concorsi + tracker candidature | **PASS (debole)** | inPA non ha alert né stato delle candidature (app 3,29★) e ci sono pagatori con cifra (premium 4,99 €/mese, affiliazione EdiSES 10%). Ma fonte unica (C4 basso), SEO presidiata e un modello IO "Bandi di concorso" in arrivo. |
| #18 + N11 Lavoro con dati veri + annunci fantasma | **INCERTO (G1)** | Art. 6 lett. f) del D.Lgs. 276/2003: esenta solo i siti senza scopo di lucro; serve un parere legale. Inoltre le retribuzioni sono già coperte da Indeed, Jooble e dall'AI, e mancano dati italiani sugli annunci fantasma. |

**Esito del gruppo:** 2 PASS (entrambi deboli), 4 INCERTI, 5 FAIL. Nessun candidato del gruppo famiglia (F1-F5) passa pieno. Il criterio di scarto che è scattato più spesso è **"esiste già un servizio, pubblico o privato, che fa la stessa funzione"** (C1, #32, F2, F4, #10). Il secondo è **l'assenza di un pagatore con cifra pubblica** (F1, F4, F5, #9).

### Punteggi indicativi C1-C9 proposti dagli agenti (da rifare alla cieca nella fase 3)
Sono indicativi: lo scoring vero va fatto da agenti che non conoscono le preferenze, come chiede il protocollo. Attenzione: gli agenti di questo screening hanno letto `01-metodo.md`, che menziona l'interesse dell'utente per la famiglia, quindi **non erano ciechi**. Il dettaglio di ogni punteggio è nelle sezioni.

| Candidato | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | Totale lordo (0-100, senza penalità) |
|---|---|---|---|---|---|---|---|---|---|---|
| #9 RSA | 4 | 4 | 2 | 4 | 4 | 4 | 3 | 4 | 3 | 72 |
| F3 Centri estivi | 3 | 4 | 2 | 4 | 4 | 4 | 2 | 3 | 2 | 66 (stagionalità estrema → penalità) |
| C1 Trova-bonus | 3 | 4 | 3 | 4 | 3 | 3 | 2 | 1-2 | 3 | 63-64 |
| F1 Nidi | 3 | 4 | 2 | 4 | 3 | 4 | 2 | 3 | 2 | 63 (stagionalità forte → penalità) |
| #18 + N11 Lavoro | 3 | 4 | 2 | 4 | 2 | 3 | 3 | 3 | 3 | 60 |
| #4 + N3 Concorsi | 3 | 5 | 3 | 2 | 2 | 3 | 2 | 2 | 4 | 59 |
| F5 Extrascolastiche | 2 | 4 | 2 | 4 | 3 | 3 | 2 | 2 | 3 | 58 |
| #10 Tempi di attesa | 5 | 3 | 3 | 2 | 2 | 3 | 2 | 2 | 2 | 57 |
| F4 Pediatri | 4 | 3 | 1 | 3 | 3 | 3 | 2 | 2 | 3 | 55 |
| #32 Libri usati | 3 | 4 | 2 | 1 | 3 | 4 | 2 | 1 | 2 | 52 |
| F2 Calendario familiare | 2 | 2 | 3 | 3 | 1 | 3 | 3 | 2 | 2 | 46 |

Formula del metodo: Σ(punteggio × peso)/5, con pesi 15 per C1-C5, 10 per C6 e 5 per C7-C9. Due osservazioni:
- **C3 (monetizzazione) non supera 3 per nessun candidato.** È la debolezza strutturale del B2C che `04-b2c-generazione.md` ipotizzava, e qui risulta confermata.
- **I punteggi lordi stanno tutti in un intervallo stretto (46-72).** Ordinarli finemente adesso sarebbe solo rumore.

## Note di metodo e limiti (valgono per tutto il documento)
- **Autocompletamento Google** (`suggestqueries.google.com`, `client=firefox`, `hl=it`) via curl. Per ogni famiglia di query si provano i 20 comuni più popolosi; un comune conta se compare un suggerimento con il suo nome. Poi si espande la long-tail con i suffissi a-z. Controllo: le query inventate (es. "centri estivi qwerty") restituiscono una lista vuota. Tutto è **[stima]**: dice che una query esiste, non quanto volume ha.
  - **Riverifica indipendente** (coordinatore, 2026-11-20, script separato): "iscrizione nido" 19/20 (agente: 20/20), "centri estivi" 20/20 (20), "rsa" 20/20 (20), "tempi di attesa" 3/20 (4), "concorso comune di" 20/20 (20), "pediatri disponibili" 17/20 (17), "attività extrascolastiche" 0/20 (0), "bonus comune" 17/20 (20). Gli scarti sono di 0-3 città, dovuti alla variabilità dei suggerimenti. Nessuno cambia l'esito rispetto alla soglia.
- **Google Trends:** HTTP 429 in tutti i tentativi → **non raggiungibile**. Stagionalità e volumi assoluti **non misurati** per nessun candidato.
- **SERP:** Bing via curl restituisce risultati estranei alla query (anti-bot), Google è solo JS, DuckDuckGo mostra un captcha. Al suo posto si sono usati i risultati di WebSearch (motore diverso da Google Italia) come proxy della SERP, e la sua sintesi AI come proxy della "risposta AI del motore" per il test C6. **Ordine e posizioni delle SERP italiane: non misurati.**
- **Reddit:** curl bloccato (403) e WebSearch non ha restituito nessun thread Reddit pertinente → per Reddit "non trovato" ovunque. Trustpilot non leggibile via curl. Il dolore è documentato con cronaca, reclami pubblici e recensioni di Google Play.
- I fatti che vengono solo dalle sintesi di WebSearch, senza aver aperto la pagina, sono segnalati come tali nelle sezioni.
- **Fonte nuova utile:** il catalogo pubblico dei servizi su app IO (`https://assets.cdn.io.pagopa.it/services-webview/visible-services-extended.json`, 16.084 enti, 383.983 servizi) permette di misurare cosa copre davvero lo Stato, comune per comune.

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

## 1. Famiglia: F1, F2 e C1 (trova-bonus)

### F1 — Nidi: iscrizioni, graduatorie, scadenze, rette per comune + bonus nido INPS
**Verdetto: INCERTO (G3).** Domanda long-tail ampia e verificata (20/20 comuni). Ma non ho trovato nessun pagatore con una cifra pubblica legata ai nidi. Inoltre la concorrenza pubblica avanza: modello "Asilo nido" su IO, oltre 1.480 comuni con servizi nido su IO, mappa INPS delle strutture in arrivo.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | Servizio informativo e di avviso: nessuna attività riservata. Non si presentano domande per conto terzi. | Ragionamento; nessuna norma specifica trovata |
| G2 Dati raggiungibili | sì (eterogenei) | [fatto] Date e regole sono pubblicate dai singoli comuni in pagine HTML e PDF. Esempio: Bologna, domande dal 13/04/2026 al 04/05/2026 e seconda finestra dal 1/06 al 31/12/2026, solo online con SPID/CIE. [fatto] Graduatorie pubblicate in PDF (es. Vidigulfo, Cinisello Balsamo). [fatto] Nessuna fonte unica per date e rette. INPS sta costruendo una banca dati delle strutture abilitate, che dal 2027/28 passerà sulla PDND, ma senza date di iscrizione né rette. | https://www.bolognazerodiciotto.it/lang/it/news-z18/iscrizione-nidi-infanzia-20262027 · https://vidigulfo-api.municipiumapp.it/s3/7815/allegati/graduatoria-asilo-nido-ae-2026-27.pdf · https://www.comune.cinisello-balsamo.mi.it/IMG/pdf/graduatoria_piccoli_nido.pdf · https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-una-mappa-per-geolocalizzare-le-strutture-convenzionate.html |
| G3 Pagatore identificabile | **incerto** | Non trovato nessun listino di directory di nidi privati, né prezzi per lead o visibilità (2 ricerche mirate). [fatto] Amazon.it Associates: commissione standard del 3% per "tutte le altre categorie". Che la prima infanzia ricada lì è una [stima]: la pagina non la nomina. [fatto] La retta media di un nido privato è di 640 €/mese, oltre 800 € a Milano (Altroconsumo): il valore di un lead per un nido privato sarebbe alto, ma nessuno risulta pagarlo con una cifra pubblica. | https://programma-affiliazione.amazon.it/help/node/topic/GRXPHT8U84RAYDXZ · https://www.altroconsumo.it/vita-privata-famiglia/mamme-e-bimbi/news/inchiesta-asili-nido |
| G4 Distribuzione senza pubblico | sì [stima] | Long-tail ampia: "iscrizione nido \<comune\>" 20/20, "graduatoria nido" 20/20, "bonus nido" 19/20. Espansione a-z: 174, 166 e 198 suggerimenti distinti (dettaglio sotto). | suggestqueries.google.com (curl, 2026-11-20) |
| G5 Rischio legale gestibile | sì | Si tratta di informazioni pubbliche di molti enti, cioè fatti (date, regole), non l'estrazione sostanziale di un'unica banca dati. Dati personali minimi: email ed eventualmente comune e anno di nascita del figlio per gli avvisi. | Ragionamento |

**Incumbent e concorrenza pubblica (pagine aperte):**

| Nome | URL | Modello / prezzo | Cosa copre davvero / punti deboli |
|---|---|---|---|
| App IO: modello di servizio "Asilo nido" | https://docs.pagopa.it/i-modelli-dei-servizi/educazione-e-formazione/asilo-nido | Gratis (PA) | [fatto] Prevede messaggi per apertura iscrizioni, domanda inviata/accolta, graduatorie provvisorie e definitive, rette agevolate, avvisi e promemoria di pagamento. È **opzionale**: l'ente "può valutare quali e quanti messaggi inviare". |
| App IO: adozione reale | catalogo `visible-services-extended.json` | Gratis | [fatto] 1.474 comuni (su 7.663 voci "Comune…") hanno almeno un servizio IO che cita nido/nidi; 1.086 citano anche "iscrizione". Tra i 20 comuni maggiori, 16 hanno un servizio nido esplicito (Roma, Milano, Napoli, Torino "Iscrizione nidi d'infanzia", Bologna, Firenze, Bari, Catania, Verona, Venezia, Messina, Padova, Trieste, Brescia, Taranto, Modena). [fatto] Il servizio di Bologna serve a "ricevere comunicazioni e aggiornamenti sullo stato della domanda presentata": raggiunge **chi ha già presentato domanda**, non chi deve ancora scoprire le date. Nessuna ricerca trasversale tra comuni. |
| INPS: Portale della Famiglia e della Genitorialità | https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.portale-delle-famiglie.portale-delle-famiglie.html | Gratis, SPID/CIE | [fatto] Contiene il simulatore del Bonus asilo nido 2026, servizi proattivi che suggeriscono prestazioni INPS (aggiornamento dell'8/07/2026) e "Servizi vicino a me". [fatto] La mappa geolocalizzata dei nidi abilitati al bonus è annunciata "nelle prossime settimane" (circolare 93 del 9/09/2026). **Non** copre date di iscrizione comunali, graduatorie né rette. |
| Siti dei comuni e testate locali | es. bolognazerodiciotto.it, ilrestodelcarlino.it | Gratis | Si posizionano per "iscrizioni nido Bologna". Le date sono corrette sul sito del comune ma disperse. |
| Directory private di nidi | non trovate | — | Nessuna directory privata compare nei risultati per "asili nido privati Milano" (WebSearch). Vincono Altroconsumo, Il Giorno, carte dei servizi in PDF. È uno spazio vuoto oppure un segnale che nessuno ci guadagna. |

**Segnali di domanda [stima]:**
- **Asticella dei 20 comuni:**
  - "iscrizione nido": **20/20**
  - "graduatoria nido": **20/20**
  - "iscrizioni asilo nido": 19/20 (manca Messina)
  - "bonus nido": 19/20 (manca Taranto)
  - "rette nido": 12/20
  - **Soglia superata ampiamente.**
- **Long-tail a-z:**
  - "iscrizione nido …": **174** suggerimenti distinti. Oltre 100 comuni, compresi piccoli comuni e unioni (Zola Predosa, Unione Terre di Castelli, Valdera), più varianti temporali ("gennaio 2027", "settembre 2027", "fuori termine").
  - "graduatoria nido …": **166**
  - "bonus nido …": **198**. Molte varianti sono di stato pratica: "non arriva", "pagamento in attesa di essere contabilizzato", "entro quando caricare fatture", "domanda accolta quando pagano".
- **Query già sul 2027 a novembre 2026:** "iscrizione nido 2027", "iscrizione nido 2027/2028", "iscrizione nido bologna 2027", "iscrizione nido milano 2027".
- **Simulatori:** "simulatore bonus nido 2026", "simulatore bonus nido inps".
- Trends: non raggiungibile, quindi stagionalità non misurata. È verosimilmente forte (le finestre sono in primavera, es. Bologna aprile-maggio): [stima].

**Segnali di dolore:**
- [fatto] Il dolore più documentato è la **scarsità di posti**, non la mancanza di informazioni. Esempi: Pisa, circa 150 famiglie escluse (https://www.lanazione.it/pisa/cronaca/graduatoria-asili-nido-escluse-150-famiglie-lassessore-replica-numeri-sparati-a-caso-7845466c); Fano, 122 bambini esclusi (https://www.ilrestodelcarlino.it/fano/cronaca/nidi-e-liste-dattesa-1b079989); Empoli (https://www.lanazione.it/empoli/cronaca/nido-figlio-non-ammesso-mia-44962123). Un prodotto informativo non crea posti.
- [fatto] Bonus nido INPS, rimborsi bloccati o in ritardo: reclamo del 24/09/2026 per una mensilità di dicembre 2025 non pagata (https://www.altroconsumo.it/reclamare/bacheca-dei-reclami/bonus-asilo-nido-mensilit-C3-A0-di-/4dab7083bb53477c9e); articoli su pagamenti bloccati (https://www.money.it/bonus-nido-il-rimborso-non-arriva-ecco-perche-e-bloccato, https://www.informazionefiscale.it/bonus-nido-inps-2026-ritardo-istruzioni-pagamenti). Le varianti dell'autocompletamento sopra lo confermano.
- [fatto] Le regole sulle domande "fuori termine" cambiano da comune a comune: Cagliari le accetta in lista d'attesa, il regolamento di Cormano le esclude (https://www.comune.cagliari.it/portale/protected/63413/0/def/ref/DOC63408/, https://cormano-api.municipiumapp.it/s3/2345/allegati/regolamento-asili-nido.pdf). Esiste anche la variante "iscrizione nido roma fuori termine".
- **Non trovato:** thread Reddit o di forum di genitori che lamentano di aver perso la scadenza (2 ricerche; Reddit non restituito dal motore). Store: app IO 4,7★ su 976K recensioni, 10 Mln+ download (https://play.google.com/store/apps/details?id=it.pagopa.io.app&hl=it&gl=IT). Una recensione visibile dice che IO "ti rimanda sempre al sito di origine". App INPS Mobile: pagina Play non trovata (id non individuato).

**Pagatori con cifre:**
- Amazon.it: 3% (categoria residuale) [fatto]. Per la prima infanzia è una [stima].
- Nidi privati (lead/visibilità): **non trovato**.
- Programmi Awin per la prima infanzia: **non trovato** (le pagine Awin richiedono login, la ricerca non ha dato risultati).
- CAF: non pertinenti per F1.
- Ricavo per utente [stima]: con affiliazione al 3% su acquisti occasionali, pochi euro per famiglia l'anno.

**Test chatbot (C6):**
- Query "iscrizioni nido Bologna 2026 2027 quando": la risposta AI ha riportato **due versioni in conflitto**. Ha dato correttamente 13 aprile-4 maggio 2026 da Zerodiciotto, ma ha anche scritto "fino al 31 marzo" da Il Resto del Carlino. Ha concluso con "conviene verificare sul sito del Comune". Ho verificato sulla fonte comunale: la data giusta è 13/04-04/05/2026.
- Per il 2027/28 la risposta AI "non ha trovato date" e ha ipotizzato "primavera 2027".
- Secondo l'asticella pre-registrata, il bisogno **non** è già soddisfatto: la risposta non è corretta né completa e rimanda al sito ufficiale. Un servizio di **avviso all'apertura** (dato futuro, non ancora pubblicato) è per costruzione fuori dalla portata di un chatbot.

**Verifica dei criteri di scarto pre-registrati (F1):**
1. *IO/INPS/portali regionali coprono già scadenze e notifiche*: **non scattato, ma da sorvegliare.** Il modello IO "Asilo nido" prevede proprio l'avviso "Sono aperte le iscrizioni" ed è adottato in qualche forma da circa 1.480 comuni, ma è opzionale e quasi sempre limitato allo stato della domanda. Non esiste ricerca trasversale né confronto delle rette. INPS copre solo bonus e strutture.
2. *Volume sotto la soglia comune*: **non scattato** (20/20).
3. *Nessun pagatore con ricavo per utente plausibile*: **incerto, tendente a scattato.** Nessuna cifra trovata per lead o visibilità dei nidi privati; l'unica cifra è l'affiliazione Amazon al 3%.
4. *Le risposte AI rispondono già bene per comune*: **non scattato** (test Bologna).

**Motivo più forte per scartarlo:** il valore è stagionale e di breve durata (una famiglia ha bisogno di queste informazioni 1-3 volte in tutto). Il dolore vero è la mancanza di posti, che un sito non risolve. Non risulta nessun soggetto che paghi oggi con una cifra pubblica. Intanto lo Stato sta chiudendo lo spazio: modello IO "Asilo nido" con avviso di apertura iscrizioni, mappa INPS dei nidi abilitati, banca dati PDND dal 2027/28.

**Note per lo scoring (indicative):**

| Criterio | Punteggio | Perché |
|---|---|---|
| C1 Dolore | 3 | Dolore reale ma soprattutto di scarsità e di ritardi INPS. Il dolore puramente informativo è documentato poco: nessun thread trovato. |
| C2 Domanda | 4 | 20/20 e circa 170 varianti long-tail per famiglia di query. Volumi assoluti e stagionalità non misurati, quindi non 5. |
| C3 Monetizzazione | 2 | Senza evidenza di pagatori specifici per i nidi (regola "senza evidenza ≤2"). |
| C4 Vantaggio dei dati | 4 | Circa 7.900 comuni, HTML e PDF eterogenei, date che cambiano ogni anno. Lo Stato centralizza solo l'anagrafica delle strutture. |
| C5 Distribuzione | 3 | Long-tail reale, ma per "iscrizione nido \<comune\>" il sito del comune è la risposta naturale e le testate locali sono forti. Le pagine "rette per comune" sono meno presidiate. |
| C6 Resistenza all'AI | 4 | Dato futuro, avvisi, conflitti tra fonti osservati nella risposta AI. |
| C7 Difendibilità | 2 | Lo storico delle date e delle graduatorie si accumula, ma è replicabile. |
| C8 Debolezza degli incumbent | 3 | Comuni lenti, ma IO e INPS in miglioramento attivo nel 2026. |
| C9 Tempo alla prima evidenza | 2 | A novembre le finestre sono chiuse quasi ovunque; un test di domanda via SEO convincente richiede la stagione gennaio-maggio. |

Penalità suggerite: stagionalità forte e dipendenza dalla piattaforma (Google).

---

### F2 — Calendario burocratico familiare personalizzato
**Verdetto: FAIL (G4 + criterio di scarto pre-registrato specifico di F2).** Nessuno cerca il prodotto ("calendario burocratico", "scadenze famiglie", "promemoria isee" danno 0 suggerimenti). Le query sulle singole scadenze sono presidiate da testate forti e le date nazionali sono già coperte dalle risposte AI. Le notifiche arrivano già da IO e dagli enti, e un incumbent privato (BonusX) vende proprio "avvisi per non perdere scadenze".

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | Solo promemoria e informazioni. Presentare pratiche per conto terzi richiederebbe CAF o patronato; BonusX lo fa tramite partner. | https://bonusx.it/operatori/ |
| G2 Dati raggiungibili | sì | Le date nazionali sono pubbliche (INPS, MIM). Quelle locali (mensa, iscrizioni) sono sui siti dei comuni. I dati personali li fornisce l'utente. | INPS, comuni (vedi F1/C1) |
| G3 Pagatore identificabile | sì | [fatto] BonusX: piano Base 19,95 €/anno ("Notifiche personalizzate… per non perdere scadenze e nuove opportunità"), Premium 79,95 €/anno, Gold 299,95 €/anno. [fatto] Cozi Gold (organizer familiare generico): 39 $/anno. | https://bonusx.it/prezzi/ · https://bonusx.it/ · https://www.cozi.com/gold/ |
| G4 Distribuzione senza pubblico | **no / incerto** [stima] | La domanda del prodotto è latente: autocompletamento vuoto per "calendario burocratico", "scadenze famiglie 2027", "promemoria isee", "scadenze genitori"; "scadenze bonus \<comune\>" 0/20. Le query sulle singole scadenze esistono, ma sono presidiate (vedi SERP). | suggestqueries (2026-11-20) |
| G5 Rischio legale gestibile | incerto | Il calendario vaccinale personale di un minore è un dato sanitario (art. 9 GDPR), e il prodotto tratterrebbe anche dati ISEE e la composizione del nucleo. È gestibile con consenso esplicito e minimizzazione, ma il rischio residuo è più alto di F1 e C1. | Ragionamento (GDPR art. 9) |

**Incumbent e concorrenza pubblica:**

| Nome | URL | Modello / prezzo | Cosa copre davvero / punti deboli |
|---|---|---|---|
| App IO | https://ioapp.it/ · catalogo servizi | Gratis | [fatto] Circa 30 Mln di download, oltre 6 Mln di utenti attivi al mese, oltre 15 mila enti e più di 340 mila servizi (pagine IO). [fatto, catalogo] 7.300 voci comunali hanno almeno un servizio che cita "scadenza" o "promemoria", 3.353 un servizio mensa, 1.483 un servizio nido; 32 dei 48 enti sanitari presenti hanno servizi sui vaccini. Il limite: arriva solo ciò che ogni ente decide di inviare, senza una vista "calendario". |
| INPS: Portale della Famiglia | https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.07.portale-della-famiglia-online-le-nuove-funzionalit-personalizzate.html | Gratis, SPID | [fatto] Card personalizzate per ogni componente del nucleo, servizi proattivi che segnalano le prestazioni potenzialmente spettanti, simulatori AUU e bonus nido 2026 (messaggio 2295 dell'8/07/2026). Nella notizia **non** compaiono notifiche di scadenza né un calendario. Solo prestazioni INPS. |
| BonusX (SimplifAI TED Srl) | https://bonusx.it/ | 0 / 19,95 / 79,95 / 299,95 €/anno | [fatto] "Ti ricordiamo cosa fare, quando farlo e ti aiutiamo a completarlo"; "850.000+ utenti registrati", "190 M€+ ottenuti in bonus"; Trustpilot 4,8 su 7.629 recensioni. È un incumbent moderno e ben valutato. |
| Organizer familiari generici | Cozi, FamilyWall | Cozi Gold 39 $/anno | Cozi 122K recensioni e FamilyWall 114K su Google Play. Nessun contenuto burocratico italiano. |

**Segnali di domanda [stima]:**
- **Query del prodotto:** assenti. "calendario burocratico" → nessun suggerimento; "scadenze famiglia" → solo "calcolo scadenze famiglia"; "promemoria scadenze" → solo promemoria di pagamenti e auto; "app scadenze" a-z → 20 suggerimenti, tutti su cibo, auto, bollette e documenti, nessuno su famiglia o bonus.
- **Query delle singole scadenze** (soddisfano formalmente la regola delle "3 famiglie di query"):
  - "mensa scolastica \<comune\>" 20/20
  - "iscrizione mensa \<comune\>" 20/20
  - "iscrizioni scuola infanzia \<comune\>" 16/20
  - "scadenza isee …" a-z 48, di cui circa 15 per ateneo (unibo, unimi, polimi, …)
  - "calendario vaccini" declinato per regione
  - "assegno unico \<comune\>" 14/20, ma con un solo suggerimento in quasi tutti i comuni (debole)

**Segnali di dolore:**
- [fatto] Circa il 23% dei figli con AUU pagato a giugno 2025 ha ricevuto l'importo minimo perché il nucleo non ha presentato l'ISEE **oppure** ha un ISEE sopra 45.939,56 €. Il dato è misto e non isola chi ha dimenticato la scadenza. Fonte: INPS, Osservatorio AUU luglio 2025, p. 7 (https://www.inps.it/content/dam/inps-site/pdf/dati-analisi-bilanci/osservatori-statistici/osservatorio-auu/Osservatorio_AUU_luglio2025.pdf).
- [fatto] Le testate pubblicano ogni anno "ultima chiamata ISEE" (es. https://www.orizzontescuola.it/assegno-unico-universale-2026-scatta-lultima-chiamata-per-lisee-senza-aggiornamento-si-perde-limporto-pieno/): il bisogno esiste, ma è già servito da contenuti gratuiti.
- **Non trovato:** lamentele dirette su "non so quali scadenze ho" in forum o su Reddit.

**Pagatori con cifre:** BonusX 19,95-299,95 €/anno [fatto]; Cozi Gold 39 $/anno [fatto]. Affiliazione: non pertinente.

**Test chatbot (C6):**
- Query "scadenza ISEE 2027 assegno unico rinnovo entro quando": la risposta AI ha riportato correttamente il meccanismo 2026 (28 febbraio per evitare l'importo minimo, 30 giugno per gli arretrati) e ha detto che per il 2027 la data non è ancora confermata, ipotizzando una finestra analoga.
- Le date nazionali sono uguali per tutti e la risposta AI le copre bene. Il valore residuo sta solo nella **personalizzazione e negli avvisi push** (workflow), che però IO e BonusX offrono già.
- SERP osservata: informazionefiscale.it, money.it, orizzontescuola.it, tg24.sky.it, pmi.it, quifinanza.it, investireoggi.it, fiscomania.com, lazio.cgil.it. Tutti domini editoriali forti.

**Verifica dei criteri di scarto pre-registrati (F2):**
1. *IO/INPS/portali coprono già scadenze e notifiche*: **in parte scattato.** IO è il canale di notifica di migliaia di enti (mensa, nido, TARI); INPS suggerisce le prestazioni. Manca un calendario unico.
2. *Volume sotto soglia*: formalmente **non scattato** grazie alle singole scadenze, ma la query del prodotto ha volume zero.
3. *Nessun pagatore*: **non scattato** (BonusX, Cozi).
4. *AI risponde già bene*: **scattato per le date nazionali.**
5. *Specifico di F2 — query delle singole scadenze presidiate da siti forti e AI che copre le date nazionali*: **scattato.**

**Motivo più forte per scartarlo:** è un prodotto da costruire con un pubblico (app con retention), non da trovare cercando su Google. In più il posto è già occupato: BonusX vende esattamente "avvisi sulle scadenze più gestione delle pratiche" a 19,95-299,95 €/anno con 850 mila utenti, e IO è già sul telefono di 6 milioni di utenti al mese.

**Note per lo scoring (indicative):**

| Criterio | Punteggio | Perché |
|---|---|---|
| C1 Dolore | 2 | Nessuna evidenza diretta; il dato AUU è ambiguo. |
| C2 Domanda | 2 | Domanda latente. |
| C3 Monetizzazione | 3 | Abbonamenti esistenti con cifre. |
| C4 Vantaggio dei dati | 3 | Mix di date nazionali uniformi e date locali frammentate. |
| C5 Distribuzione | 1 | Nessuna SEO sul prodotto; le singole scadenze sono presidiate da testate. |
| C6 Resistenza all'AI | 3 | Avvisi e workflow sono resistenti, le date no. |
| C7 Difendibilità | 3 | Il profilo familiare salvato crea costi di uscita. |
| C8 Debolezza degli incumbent | 2 | BonusX moderno e ben valutato, IO molto diffusa. |
| C9 Tempo alla prima evidenza | 2 | Serve un'app e misurare la retention. |

Penalità: dati sanitari dei minori (rischio legale residuo).

---

### C1 — Trova-bonus personale (nazionali, regionali, comunali)
**Verdetto: FAIL (criterio di scarto pre-registrato n.1: esiste già un servizio privato di matching personale che dichiara di includere i bonus locali).** I gate G1-G5 non sono bloccanti e la domanda è alta. Però BonusX dichiara "700+ bonus e agevolazioni — bonus nazionali e locali adatti al tuo profilo", con notifiche, 850 mila utenti e 4,8★. Quanto sia profonda la copertura locale **non è verificato**: servirebbe registrarsi. Se una prova d'uso mostrasse che i bonus comunali mancano quasi del tutto, il verdetto tornerebbe INCERTO.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | Il matching informativo non richiede licenze. Le pratiche (ISEE, 730) vanno a CAF e commercialisti, come fa BonusX con i partner. | https://bonusx.it/operatori/ |
| G2 Dati raggiungibili | sì (locali costosi) | [fatto] 4.089 voci comunali su IO hanno servizi che citano bonus, contributo, agevolazione o sostegno. I bandi comunali sono PDF su siti diversi (es. Firenze: buoni scuola infanzia paritaria, "Ti Porta Firenze", soggiorni per persone con disabilità, buono sport). Regioni con portali propri (Lombardia "Bandi e Servizi"). | catalogo IO · https://www.comune.firenze.it/riscossioneonline/system/files/2026-08/avviso-contributi-soggiorni-vacanza-per-persone-con-disabilita-anno-2026_signed_signed.pdf · https://educazione.comune.fi.it/system/files/2026-07/Avviso_comunale_3.pdf · https://www.regione.lombardia.it/diritti-e-tutele/red-bandi-servizi |
| G3 Pagatore identificabile | sì | [fatto] BonusX, abbonamenti a 19,95 / 79,95 / 299,95 €/anno. [fatto, fonte commerciale] Compenso statale ai CAF di circa 4,00 € per DSU e circa 16,50 € per 730 nel 2025, in calo dai 6,50 € e 26 € del 2019 secondo centrofiscale.com. Se ne deduce [stima] che un CAF può pagare poco per un contatto ISEE. Un listino pubblico di CPL dei CAF non è stato trovato. | https://bonusx.it/prezzi/ · https://centrofiscale.com/meno-soldi-caf-assistenza-fiscale-dsu-730/ |
| G4 Distribuzione senza pubblico | sì [stima] | "bonus comune \<comune\>" **20/20**, a-z 138 suggerimenti con decine di comuni anche piccoli; "bonus isee …" a-z 133 (soglie, regioni, categorie); "bonus nido \<comune\>" 19/20. Però "a quali bonus ho diritto \<comune\>" è 0/20 e la query generica ha solo 6 varianti. | suggestqueries (2026-11-20) |
| G5 Rischio legale gestibile | sì | ISEE e nucleo inseriti volontariamente dall'utente: GDPR ordinario. I bandi sono atti pubblici. | Ragionamento |

**Incumbent e concorrenza pubblica:**

| Nome | URL | Modello / prezzo | Cosa copre davvero / punti deboli |
|---|---|---|---|
| BonusX | https://bonusx.it/ · https://bonusx.it/prezzi/ | Free (65 bonus), Base 19,95 €/anno (700+ bonus "nazionali e locali", notifiche), Premium 79,95 €, Gold 299,95 € | [fatto] 850.000+ utenti, 190 M€+ di bonus ottenuti, Trustpilot 4,8 su 7.629 recensioni (91% a 5★). Nel 2023 contava oltre 250 mila iscritti (https://www.quotidiano.net/economia/made-in-italy/bonusx-la-startup-antiburocrazia-2c19e740). Punto debole possibile e **non verificato**: 700 voci contro migliaia di bandi comunali. Una recensione recente (5★) dice "Ancora non ho ricevuto nulla". |
| INPS: Portale della Famiglia | (vedi F2) | Gratis | Suggerisce in modo proattivo solo le prestazioni **INPS** (AUU, bonus nido, nuovi nati, bonus mamme, Carta Dedicata a te). Un articolo di BusinessOnline parla di "circa 300 servizi pubblici offerti da Comuni, scuole, ASL", ma come collegamenti, senza matching (https://www.businessonline.it/news/come-conoscere-i-bonus-in-automatico-di-cui-si-ha-diritto-grazie-ai-nuovi-servizi-del-portale-della-famiglia-online_n85993.html). |
| App IO / piattaforma PARI | https://ioapp.it/ | Gratis | [fatto] Gestisce **l'erogazione** di singoli bonus nazionali (Bonus Elettrodomestici tramite PARI, in passato Bonus Vacanze). Non ha una funzione "trova i bonus a cui hai diritto". |
| Portali regionali | es. Lombardia "Bandi e Servizi" | Gratis | Catalogo con ricerca per parole chiave, solo regionale, senza profilo. |
| "Trova il tuo bonus" (CGIL / regioni, da autocompletamento) | non trovato | — | La query esiste nell'autocompletamento ("trova il tuo bonus cgil/lombardia/piemonte/lazio/campania"), ma 2 ricerche non hanno trovato lo strumento. Esistenza **non verificata**. Stesso esito per "bonus finder italia isee". |
| CAF | es. https://lazio.cgil.it/isee/ | ISEE gratuito la prima volta, poi fino a 25 € (https://www.money.it/isee-pagamento-gratuito-caf-ecco-quando-costa-fino-25-euro) | Consulenza di persona. NostroFiglio consiglia "rivolgersi al CAF della tua zona" (https://www.nostrofiglio.it/famiglia/soldi-e-lavoro/come-faccio-a-sapere-a-che-bonus-ho-diritto). |
| Testate | money.it, informazionefiscale.it, facile.it, altroconsumo.it | Pubblicità e affiliazione | Liste per fascia ISEE, presidiate e aggiornate. |

**Segnali di domanda [stima]:**
- "bonus comune \<comune\>" 20/20, a-z 138.
- "bonus isee" a-z 133, comprese le varianti per soglia "sotto 15000/20000/25000/30000/35000/40000".
- "bonus 2027": già 10 varianti a novembre 2026.
- "a quali bonus ho diritto": 6 varianti ("…con isee basso", "…2026", "come sapere…").
- "quali bonus mi spettano": "sono incinta quali bonus mi spettano".
- "agevolazioni \<comune\>": 20/20, ma spesso su TARI e trasporti.
- La domanda è alta e soprattutto **per categoria e soglia**. La domanda per comune esiste ("bonus comune X"); quella personale per comune è assente.

**Segnali di dolore:**
- La trazione di BonusX (850 mila utenti, 7.629 recensioni) dimostra che molti pagano o si registrano per farsi guidare. Il dolore c'è, ma oggi è **servito bene** (4,8★).
- [fatto] Il dato AUU sul 23% di figli all'importo minimo è ambiguo (vedi F2).
- Reddit e forum: **non trovato** (2 ricerche).

**Pagatori con cifre:**
- Abbonamento B2C: 19,95-299,95 €/anno (BonusX) [fatto].
- CAF: compenso statale di circa 4 € per DSU e 16,50 € per 730 [fatto da fonte commerciale, valori 2025]. Un CPL pagato dai CAF a terzi: **non trovato**.
- Affiliazione bancaria e assicurativa su bonus specifici: non verificata.

**Test chatbot (C6):**
- (a) "a quali bonus ho diritto con ISEE 15000 e un figlio di 1 anno a Torino 2026": la risposta AI ha elencato correttamente le misure **nazionali** (AUU con indicazione degli importi, bonus nido fino a 3.600 €, bonus nuovi nati 1.000 € e relativa nota sull'anno, esclusione dal bonus bollette per soglia). Sui bonus locali: "Non ho trovato nulla di specifico per Torino… conviene controllare… il Comune di Torino". L'autocompletamento però mostra "bonus comune torino" e "bonus torino 2026", quindi qualcosa esiste.
- (b) "bonus comune di Firenze 2026 famiglie": la risposta AI ha messo insieme **5 misure comunali** reali da PDF del comune e da La Nazione (buoni scuola infanzia paritaria, "Ti Porta Firenze" dal 25/08/2026, soggiorni per persone con disabilità con 85.000 €, incentivi mobilità, buono sport), avvertendo che alcune erano del 2025.
- Conclusione: i bonus nazionali sono già soddisfatti dall'AI. Quelli locali lo sono in parte, con esiti irregolari tra un comune e l'altro e sempre con rinvio al sito ufficiale. Vantaggio residuo: avvisi su nuovi bandi e scadenze locali (che BonusX dichiara di offrire).

**Verifica dei criteri di scarto pre-registrati (C1):**
1. *Esiste già un servizio (pubblico o privato) che fa matching personale includendo bandi regionali/comunali*: **scattato** sulla base della dichiarazione pubblica di BonusX ("Scopri bonus nazionali e locali adatti al tuo profilo"; "Ricevi avvisi per non perdere scadenze e nuove opportunità"). Profondità locale non verificata.
2. *CAF/patronati non pagano per contatti o con cifre irrisorie*: **incerto, tendente a scattato.** Nessun CPL pubblico; i compensi statali di circa 4 € per DSU rendono improbabile un CPL alto. BonusX funziona al contrario: incassa dall'utente e porta pratiche ai CAF.
3. *AI copre i nazionali e i locali sono pochi o sporadici*: **non scattato del tutto.** L'AI copre i nazionali; i locali sono numerosi (4.089 voci comunali con servizi IO pertinenti), quindi non sporadici.

**Motivo più forte per scartarlo:** un incumbent privato in crescita (da 250 mila iscritti nel 2023 a oltre 850 mila nel 2026), con abbonamento, rete di CAF, AI e 4,8★, ha già fatto proprio questo prodotto. INPS, dal luglio 2026, suggerisce in modo proattivo le prestazioni nazionali. Rimane solo la nicchia "solo bonus comunali", con pagatori deboli.

**Note per lo scoring (indicative):**

| Criterio | Punteggio | Perché |
|---|---|---|
| C1 Dolore | 3 | Dolore reale ma ben servito. |
| C2 Domanda | 4 | Long-tail per comune e per soglia ISEE molto ampia; volumi assoluti ignoti. |
| C3 Monetizzazione | 3 | Abbonamenti provati; lead ai CAF deboli. |
| C4 Vantaggio dei dati | 4 | Bandi comunali frammentati in PDF, che cambiano di continuo. |
| C5 Distribuzione | 3 | "bonus comune X" è fattibile; le query nazionali sono presidiate da testate forti. |
| C6 Resistenza all'AI | 3 | Nazionali coperti dall'AI, locali in parte. |
| C7 Difendibilità | 2 | Senza vantaggi strutturali evidenti. |
| C8 Debolezza degli incumbent | 1-2 | BonusX forte e moderno; INPS in miglioramento. |
| C9 Tempo alla prima evidenza | 3 | Pagine "bonus comune X" per 20 comuni più un modulo d'interesse si fanno in 2 settimane. |

## 2. Famiglia: F3, F4, F5

### F3 — Centri estivi e campus 3-14 (ricerca, prezzi, iscrizioni)
**Verdetto:** **PASS** (con penalità di stagionalità forte). La domanda per città è la più ampia del gruppo (20/20) e il servizio pubblico copre solo l'offerta comunale o convenzionata, non la ricerca tra i privati. Il pagatore esiste ma paga poco.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | Directory e informazione: nessun albo richiesto. [fatto] Per confronto, testate e portali vendono già visibilità ai campi estivi senza autorizzazioni. | https://www.varesenews.it/2025/04/promuovi-il-tuo-campo-estivo-con-varesenews/1335165/ |
| G2 Dati raggiungibili | sì | [fatto] I comuni pubblicano offerta, date e tariffe. Torino: Estate Ragazzi in 50 centri, tariffa massima 95 €/settimana, Bimbi Estate 37-143 € per turno di due settimane in base all'ISEE (riportato da Viaggiapiccoli). Bologna: elenco gestori 2025-27, 110 sedi, 40 gestori, tetto di 180 €. I privati hanno siti e volantini PDF. Dati frammentati ma pubblici. | https://www.viaggiapiccoli.com/centri-estivi-e-campi-estivi-a-torino-e-dintorni/ ; https://www.ilrestodelcarlino.it/bologna/cronaca/la-corsa-ai-centri-estivi-21b34254 ; https://estateragazzitorino.it/wp-content/uploads/2026/03/Criteri-di-accesso-e-indirizzi-per-la-gestione-del-servizio-ER2026_sito.pdf |
| G3 Pagatore identificabile | sì (cifre basse) | [fatto] VareseNews: pacchetto "promuovi il tuo campo estivo" a **200 € + IVA** (redazionale, homepage per 24 ore, social). RomaperBambini: **20 € a evento, 75 € per 5, 120 € per 10** (dichiara 80.000 pagine viste al mese). | VareseNews (link sopra) ; https://www.romaperbambini.it/pubblicita |
| G4 Distribuzione senza pubblico | sì | [stima] "centri estivi [città]" compare in **20/20** comuni (in 15 casi con 10 suggerimenti su 10). Il a-z di "centri estivi" dà 250 varianti; quello di "centri estivi roma" dà 115 varianti, con quartieri e municipi. | autocompletamento, vedi sotto |
| G5 Rischio legale gestibile | sì | Dati di imprese e associazioni, non di persone fisiche. Rischio *sui generis* basso se si estraggono i fatti (date, prezzi) da molte fonti diverse e non si copia in blocco una directory. I PDF comunali sono atti pubblici. | ragionamento |

**Incumbent e concorrenza pubblica**
| Nome | URL | Cosa copre davvero | Modello / cifre | Punti deboli osservati |
|---|---|---|---|---|
| INPS – Centri estivi diurni 2026 | https://www.newsistruzione.it/2026/06/04/centri-estivi-2026-bando-inps-domande-4-25-giugno | [fatto] Solo un **contributo** (fino a 100 €/settimana per max 4 settimane), **3.000** posti in graduatoria, solo per gli iscritti alla Gestione Unitaria (dipendenti pubblici). Domande dal 4 al 25 giugno 2026. **Nessun elenco né ricerca di strutture.** | gratuito | Platea minima. Non è una funzione di ricerca. |
| INPS – Estate INPSieme 2026 | https://inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.01.estate-inpsieme-in-italia-e-all-estero-pubblicati-i-bandi-2026.html | Soggiorni con pernottamento per i figli dei dipendenti pubblici (domande 20 gennaio-10 febbraio 2026, secondo la sintesi WebSearch). Non riguarda i centri diurni. | gratuito | Fuori target |
| App IO | – | Non ho trovato un servizio IO per la ricerca dei centri estivi (non verificato a fondo) → **non trovato** | – | – |
| Comune di Bologna (contributo regionale Emilia-Romagna) | Carlino (link sopra) ; https://assets.culturabologna.it/272dd102-19ed-40f1-9525-5431a868514c-faq-contributi-centri-estivi-2026.pdf | [fatto] Pre-iscrizione centralizzata online (Iperbole) a **110 sedi di 40 gestori**, tetto tariffario di 180 €, 40.026 posti nel 2026. Contributo di 100 €/settimana fino a 3 settimane con ISEE sotto 35.000 €. | gratuito | **Copre la ricerca, le scadenze e l'iscrizione per l'offerta convenzionata**: a Bologna (e verosimilmente in altri comuni emiliani) la funzione è già pubblica. |
| Comune di Torino – Estate Ragazzi | https://www.newsistruzione.it/2026/04/27/estate-ragazzi-2026-a-torino-aperte-le-iscrizioni-per-i-centri-estivi | 50 centri comunali, iscrizioni dal 13 aprile (sintesi WebSearch) | gratuito | Solo offerta comunale (scuola primaria) |
| Viaggiapiccoli | https://www.viaggiapiccoli.com/centri-estivi-e-campi-estivi-a-torino-e-dintorni/ | [fatto] Articolo editoriale per città, con prezzi di alcuni campi privati (es. CH4 135-160 €/settimana, Polismile 110 € + 25 € pasti) | affiliazione + "collabora con noi" (cifre non pubbliche) | Lista redazionale, non strutturata e non completa, senza filtri per età, zona e settimana |
| RomaperBambini / MilanoperiBambini / KidPass | link sopra ; https://www.milanoperibambini.it ; https://kidpass.it/pubblicita/ | Portali locali per famiglie con una sezione "Campus" | 20 € a evento (RomaperBambini); KidPass senza listino pubblico | Locali, editoriali |
| Testate (VareseNews, Sky TG24, Il Giorno…) | – | Articoli stagionali su prezzi medi e bandi | redazionali a pagamento (200 € + IVA) | Generici, non per quartiere |

**Segnali di domanda [stima]**
- "centri estivi [città]": **20/20** (Roma, Milano, Torino, Genova, Bologna, Firenze, Bari, Verona, Venezia, Padova, Trieste, Parma, Brescia, Prato e Modena con 10/10 suggerimenti; Napoli, Catania e Messina con 1; Palermo con 3; Taranto con 6). Esempi: "centri estivi bologna 2026 posti disponibili", "centri estivi genova 2026 3 anni", "centri estivi parma 0 3 anni".
- "campus estivi [città]": 13/20.
- Famiglie di query distinte (soglia: ≥3): "centri estivi", "campus estivi", "centro estivo" (con "detraibile 730", "in inglese", "bioparco roma"), "centri estivi inps/bonus/graduatoria" → **almeno 4 famiglie**: soglia superata due volte.
- Long-tail a-z su "centri estivi": 250 varianti uniche. Tra quelle con intento: "centri estivi aperti ad agosto roma", "centri estivi settembre 2026 firenze", "centri estivi privati bologna 2026", "centri estivi inps idoneo non vincitore".
- Granularità per quartiere: "centri estivi roma" a-z → 115 varianti, tra cui "roma eur", "prati", "montesacro", "monteverde", "talenti", "tuscolana", "terzo municipio", "vii municipio". "centri estivi milano" a-z → 78.
- Stagionalità: Trends **non raggiungibile**. Le varianti "settembre 2026" e "agosto" indicano un uso che va da marzo (iscrizioni) a settembre.

**Segnali di dolore**
- [fatto] Prezzi in aumento: privati a tempo pieno 186 €/settimana (+5,7% sul 2025), spesa mensile per figlio di 744 € nel privato, contro 99 €/settimana nel comunale (ONF-Federconsumatori, riportato da Sky TG24 il 4 giugno 2026). https://tg24.sky.it/economia/2026/06/04/centri-estivi-prezzi-2026
- [fatto] Posti comunali limitati: a Bologna 29.072 posti occupati nel 2025, con negli anni passati "intoppi tecnici" che avevano reso le iscrizioni "una corsa a ostacoli telematica". https://www.ilrestodelcarlino.it/bologna/cronaca/centri-estivi-pre-iscrizioni-al-via-40a30a98
- Il dolore documentato riguarda **il costo e i posti**, non la difficoltà di trovare o confrontare le offerte. L'articolo di Sky non parla di difficoltà a confrontare. Reddit: non trovato. Il dolore di "ricerca" è quindi **plausibile ma non provato**.

**Test chatbot C6** (sintesi AI di WebSearch, criterio pre-registrato)
- "centri estivi Torino 2026 prezzi": dà le medie Eures-Adoc e ONF e le date di Estate Ragazzi, ma scrive "**non ho trovato le tariffe ufficiali esatte** di Estate Ragazzi 2026… conviene verificare il sito del Comune". Dà inoltre come fine attività il 31 luglio, mentre Viaggiapiccoli indica il 30 luglio: incongruenza → **non soddisfatto**.
- "centri estivi comunali Milano 2026 quanto costano iscrizioni date": le fonti "non concordano sulla data di avvio" (19 marzo o 18 marzo) e la sintesi scrive "Non ho trovato la tariffa ufficiale 2026" → **non soddisfatto**.
- Ragionamento: l'AI ripete le medie nazionali delle testate e non ha dati per singolo centro (prezzo, età, settimane, posti). Il vantaggio C6 è reale, ma l'AI coprirà presto anche i bandi comunali più noti.

**Verifica dei criteri di scarto pre-registrati**
| Criterio (da 04 e 05 §0) | Esito | Evidenza |
|---|---|---|
| IO/INPS/portali regionali coprono già scadenze e notifiche | **non scattato a livello nazionale; scattato in parte localmente** | INPS dà solo un contributo per 3.000 dipendenti pubblici, senza ricerca. Il Comune di Bologna copre ricerca e iscrizione per 110 sedi convenzionate: lì la "stessa funzione" esiste già per l'offerta convenzionata. Nessuna notifica pubblica trovata. |
| Volume sotto la soglia comune | **non scattato** | 20/20 comuni, ≥4 famiglie di query |
| Nessun pagatore con ricavo per utente plausibile | **non scattato (debole)** | 200 € + IVA (VareseNews) e 20 € a evento (RomaperBambini) a campagna: prezzi bassi, stagionali |
| Le risposte AI rispondono già bene per comune | **non scattato** | 2 test su 2 rimandano al sito o sono incongruenti |
| Un incumbent privato copre già bene la ricerca per città con prezzi | **non scattato (parziale)** | Viaggiapiccoli ha pagine per città con alcuni prezzi, ma redazionali e incomplete. Non ho trovato una directory strutturata con filtri. I domini centriestivi.it e campusestivi.it non rispondono o sono vuoti; summercamp.it è in vendita. |

**Motivo più forte per scartarlo:** la monetizzazione è **stagionale e a basso prezzo**. I pagatori osservati spendono 20-200 € a stagione e i centri comunali o convenzionati (la fascia più grande per numero di posti, es. 40.026 posti a Bologna) non hanno bisogno di visibilità. Inoltre in Emilia-Romagna il comune centralizza già ricerca e iscrizione. Il traffico si concentra in circa 4-6 mesi l'anno.

**Note per lo scoring C1-C9 (indicative)**
| Criterio | Punteggio | Perché |
|---|---|---|
| C1 Dolore | 3 | Dolore di costo e posti documentato (Sky, Carlino). Dolore di ricerca e confronto non provato, Reddit non trovato. |
| C2 Domanda | 4 | 20/20 comuni, 250 varianti a-z, 115 per Roma. Trends non disponibile, volumi assoluti ignoti. |
| C3 Monetizzazione | 2 | Listini reali ma bassi (20-200 €), stagionali. Affiliazione non trovata. |
| C4 Vantaggio dati | 4 | Fonti frammentate (bandi e PDF comunali, siti privati), da riaggiornare ogni anno. |
| C5 Distribuzione | 4 | Long-tail per città e quartiere molto ampia. SERP occupata da testate e comuni, nessuna directory dominante trovata. |
| C6 Resistenza AI | 4 | L'AI non dà tariffe per centro e rimanda ai siti ufficiali. |
| C7 Difendibilità | 2 | Lo storico prezzi anno su anno ha un certo valore, ma il prodotto è copiabile. |
| C8 Debolezza incumbent | 3 | Blog e portali locali editoriali; il comune di Bologna però è forte. |
| C9 Tempo alla prima evidenza | 2 | A novembre le ricerche sono fuori stagione: un test SEO o di conversione credibile si può fare solo tra febbraio e aprile 2027. |
| Penalità | stagionalità −5/−8 | ragionamento sopra |

---

### F4 — Pediatri con posti liberi per ASL
**Verdetto:** **FAIL (G3)**. Nessun pagatore con cifra. Inoltre il criterio pre-registrato "i portali regionali mostrano già i posti disponibili" scatta proprio in Lombardia, la regione con la carenza più alta.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | Informazione su elenchi pubblici, senza intermediazione sanitaria | ragionamento |
| G2 Dati raggiungibili | sì/incerto | [fatto] ATS Milano offre una pagina pubblica "Trova Medico" con una colonna "Disponibilità", ma "i dati non sono aggiornati in tempo reale". Nel Fascicolo Sanitario Lombardia la disponibilità è in tempo reale, ma dietro SPID. Veneto: ricerca regionale di medici e pediatri, ma la pagina non mostra la disponibilità. Lazio: ricerca nel FSE (con login) o elenco richiesto all'ASL. Altrove ci sono PDF ULSS o ASL eterogenei (deduzione dall'autocompletamento "pediatri disponibili ulss 2-9"). | https://www.ats-milano.it/trova-medico ; https://salute.regione.veneto.it/servizi/cerca-medici-e-pediatri ; https://www.aslroma1.it/scelta-medico-o-pediatra |
| G3 Pagatore identificabile | **no/incerto** | Nessuno paga oggi per far trovare a un pediatra convenzionato nuovi assistiti del SSN: i posti scarseggiano, quindi il pediatra non ha bisogno di pazienti. [fatto] Su MioDottore esistono profili "Pediatra di libera scelta", ordinati anche in base al "piano di abbonamento", ma servono a vendere **visite private** e il listino è "Prezzo personalizzato" (nessuna cifra). Secondo l'asticella comune ("senza cifra → incerto") e il criterio pre-registrato → di fatto **no**. | https://www.miodottore.it/pediatra-di-libera-scelta/milano ; https://pro.miodottore.it/prezzi |
| G4 Distribuzione senza pubblico | sì | [stima] "pediatri disponibili [città]" in 17/20 comuni, circa 130 località o ASL nel a-z. "scelta pediatra [città]" 20/20, "elenco pediatri [città]" 19/20. | autocompletamento, vedi sotto |
| G5 Rischio legale gestibile | sì (con cautela) | Nomi, indirizzi degli ambulatori e disponibilità dei pediatri convenzionati sono dati di professionisti pubblicati dalle ASL per l'esercizio della libera scelta. Il riuso a fini informativi ha una base di interesse legittimo plausibile (GDPR art. 6.1.f), con obbligo di informativa (art. 14), aggiornamento e diritto di opposizione. Rischio *sui generis* basso: elenchi pubblici, ma con molte fonti diverse. Rischio di **inesattezza**: ATS stessa avverte che i dati non sono in tempo reale. | ragionamento + ATS Milano |

**Incumbent e concorrenza pubblica**
| Nome | URL | Cosa copre davvero | Punti deboli |
|---|---|---|---|
| Fascicolo Sanitario Lombardia | https://www.regione.lombardia.it/sanita/prenotazioni-e-tempi-d-attesa/cambio-medico | [fatto] "Il Fascicolo Sanitario mostra solo i medici disponibili online." I medici oltre il massimale non sono visibili. **La prima scelta va fatta allo sportello ASST**, i cambi successivi online. Pagina aggiornata il 21 ottobre 2026. | Login. Non serve per il neonato (prima scelta). |
| ATS Milano – Trova Medico | https://www.ats-milano.it/trova-medico | [fatto] Ricerca pubblica per comune, ASST e distretto, con colonna "Disponibilità" (modificata il 16/11/2026), più portale ASST e farmacie "con disponibilità aggiornata" | Dati non in tempo reale (avviso esplicito) |
| Veneto – Cerca medici e pediatri | https://salute.regione.veneto.it/servizi/cerca-medici-e-pediatri | Ricerca per provincia, comune e tipo di medico. Disponibilità non indicata nella pagina. | Senza posti |
| ASL Roma 1 / FSE Lazio | https://www.aslroma1.it/scelta-medico-o-pediatra | Si "entra nel FSE ed effettua la ricerca" oppure si chiede l'elenco all'ASL. La scelta del pediatra avviene allo sportello. | Frammentato |
| MioDottore | https://www.miodottore.it/pediatra-di-libera-scelta/muggio | Pagine "Pediatri di Libera Scelta [comune]" con recensioni e visite private | Non mostra i posti SSN |

**Segnali di domanda [stima]**
- "pediatri disponibili [città]": **17/20** (assenti Genova, Bologna, Venezia). Roma ha 9 varianti per ASL ("asl roma 1/2/3/6"), Napoli 4 ("asl napoli 1/2 nord/3 sud").
- "scelta pediatra [città]": **20/20**, con varianti come "milano zona 8/9", "online", "neonato", "asp".
- "elenco pediatri [città]": **19/20**, con varianti come "firenze quartiere 2/4/5", "napoli asl 1 distretto 27".
- Long-tail a-z "pediatri disponibili": **137 varianti**, circa 130 località o aziende sanitarie (es. ulss 2-9, ast fermo, asl vco, molti comuni medi delle Marche, della Puglia e della Lombardia).
- Famiglie distinte: ≥3 → soglia superata. Domanda **reale ma episodica**: si sceglie alla nascita, al cambio di residenza o al pensionamento del pediatra.

**Segnali di dolore**
- [fatto] Gimbe (giugno 2026): mancano **almeno 497** pediatri di libera scelta, l'80% in Lombardia (186), Piemonte (109) e Veneto (96). 1.547 pensionamenti previsti tra il 2025 e il 2029. Massimale confermato a 1.000 assistiti. https://www.lapresse.it/salute/sanita/2026/06/04/pediatri-di-famiglia-introvabili-ne-mancano-quasi-500-l80-in-3-regioni-del-nord/
- [fatto] Cagliari: una madre scrive "mia figlia è senza pediatra… la mia situazione è comune a tanti". https://www.unionesarda.it/news-sardegna/cagliari/allarme-pediatri-a-cagliari-lasl-pochi-ma-nessun-bimbo-e-rimasto-senza-vu283ipn
- [fatto, ma datato 2020] Sesto San Giovanni: online "non risultano pediatri disponibili", allo sportello invece sì, dopo due ore di coda. https://www.ilgiorno.it/sesto/cronaca/scelta-pediatra-ats-coda-1.5463301
- [fatto] Pontedera: un bambino cancellato dall'elenco del pediatra senza preavviso. https://www.lanazione.it/pontedera/cronaca/mio-figlio-senza-pediatra-per-colpa-della-asl-non-siamo-stati-avvertiti-10eb1c56
- Recensioni Play: le app FSE Lombardia (`it.lispa.app.mobile.appfse`) e Lazio (`it.lazio.regione.lazioperlasalute`) hanno lamentele generiche su login e funzionamento. Nelle recensioni visibili nessuna parla della scelta del pediatra → non trovato.
- **Nota critica:** il dolore nasce dalla **mancanza di posti**, non dalla mancanza di informazioni. Uno strumento informativo non crea posti.

**Test chatbot C6**
- "pediatri con posti disponibili Milano ATS elenco" (sintesi WebSearch): "didn't turn up a current, official ATS Milano list". Rimanda a "Trova Medico" di ATS e allo sportello → **non soddisfatto** secondo il criterio pre-registrato. Il rimando però porta a uno strumento pubblico che funziona.
- "ASL Roma 2 elenco pediatri disponibili": "I didn't find a current list" → non soddisfatto.
- Ragionamento: l'AI non ha dati di disponibilità in tempo reale, ma neanche un aggregatore li avrebbe affidabili, visto che ATS avverte che non sono in tempo reale.

**Verifica dei criteri di scarto pre-registrati**
| Criterio | Esito | Evidenza |
|---|---|---|
| I portali regionali mostrano già i posti disponibili nella procedura di scelta | **scattato (Lombardia), incerto altrove** | FSE Lombardia mostra solo i medici disponibili; ATS Milano ha una ricerca pubblica con la disponibilità. Lazio: ricerca nel FSE. Veneto: senza disponibilità. |
| I dati sui posti liberi non sono pubblici (G2) | **non scattato in Lombardia, incerto altrove** | ATS Milano pubblico; altrove PDF ULSS (non aperti uno per uno) |
| Nessun pagatore con cifra (G3) | **scattato** | Nessun listino trovato; MioDottore "prezzo personalizzato" e per visite private |

**Motivo più forte per scartarlo:** non c'è **nessun pagatore** e il problema è di offerta (mancano i pediatri), non di informazione. Dove la carenza è più grave (Lombardia) esiste già lo strumento pubblico con la disponibilità.

**Note per lo scoring C1-C9 (indicative)**
| Criterio | Punteggio | Perché |
|---|---|---|
| C1 | 4 | Carenza documentata con numeri (Gimbe 2026) e casi di cronaca |
| C2 | 3 | 17-20/20 comuni, circa 130 località, ma domanda episodica |
| C3 | 1 | Nessun pagatore con cifra |
| C4 | 3 | Fonti eterogenee (portali, PDF), ma in Lombardia già unificate |
| C5 | 3 | Long-tail per ASL o comune buona, SERP dominata da ASL e testate |
| C6 | 3 | L'AI non risponde, ma lo strumento pubblico sì |
| C7 | 2 | Nessun effetto rete |
| C8 | 2 | Gli strumenti pubblici funzionano dove serve di più |
| C9 | 3 | Una pagina per ASL è testabile in fretta, ma senza ricavi da misurare |

---

### F5 — Attività extrascolastiche (sport, musica) per quartiere
**Verdetto:** **INCERTO (G2, G3)**. La domanda esiste ma **per singola attività** ("corsi nuoto bambini [città]"), non per la categoria "attività extrascolastiche". I pagatori esistono (le ASD pagano software di gestione con cifre pubbliche), ma non ho trovato listini di visibilità specifici per i corsi. Dati in gran parte su siti e PDF di singole associazioni; la quota sui social non è stata misurata.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | Directory e informazione | ragionamento |
| G2 Dati raggiungibili | incerto | [fatto] Alcuni gestori pubblicano orari e corsi in modo strutturato (Milanosport: elenco corsi per impianto). Altri solo in PDF stagionali (CUS Bologna: calendari dal 2020-21 al 2025-26). La quota di associazioni presenti solo su Facebook o Instagram **non misurata** → incerto. | https://www.milanosport.it ; https://cusb.unibo.it/it/servizi-e-impianti/calendario-attivita/calendario-attivita-2024_25-nuoto-record-2.pdf/@@download/file/Calendario%20attivit%C3%A0%202025-26.pdf |
| G3 Pagatore identificabile | sì/incerto | [fatto] Le ASD pagano già software di iscrizione online: TeamSystem Sportivi in Cloud da **26 € a 69 € + IVA al mese**, più il modulo "Iscrizioni online ad attività, corsi e camp" a **9 €/mese**. Visibilità: RomaperBambini **20 € a evento** (eventi, non corsi). Nessun listino trovato per comparire in una directory di corsi per bambini → la visibilità resta incerta. | https://www.teamsystem.com/sport/sportivi-in-cloud/prezzi/ ; https://www.romaperbambini.it/pubblicita |
| G4 Distribuzione senza pubblico | sì (per attività) | [stima] "corsi nuoto bambini [città]" 18/20, "danza bambini [città]" 18/20, "scuola di musica bambini [città]" 20/20, "corsi per bambini [città]" 17/20. **"attività extrascolastiche bambini [città]" 0/20.** | autocompletamento |
| G5 Rischio legale gestibile | sì | Dati di associazioni ed enti. Attenzione ai nomi degli istruttori (persone fisiche) e alle foto: escluderli. Scraping dei social da evitare (termini d'uso). | ragionamento |

**Incumbent e concorrenza pubblica**
| Nome | URL | Cosa copre | Modello / cifre | Punti deboli |
|---|---|---|---|---|
| Google Maps / Local | – | **Non verificato** (SERP via curl non disponibile) | pubblicità locale | non verificato |
| Milanosport (pubblico, Comune di Milano) | https://www.milanosport.it | [fatto] Catalogo corsi e campus per impianto, iscrizioni | servizio pubblico a pagamento | Solo i propri impianti |
| CUS Bologna e altre strutture | link sopra | Calendari in PDF | – | Dati sparsi, PDF |
| Superprof / Emagister | https://www.superprof.it/lezione/percussioni/torino/bambini/ ; https://www.emagister.it/corso_di_pianoforte_tastiera-ec2542537.htm | Compaiono nella SERP per "corsi di musica per bambini Torino": lezioni private ed elenchi di corsi con fasce di prezzo (Emagister: pianoforte 151-300 €) | Superprof: abbonamento studente; Emagister: lead (cifre **non verificate**, pagina Superprof non leggibile via curl) | Lezioni private, non attività di gruppo per quartiere |
| Sportclubby | https://www.sportclubby.com/it/sportclubby-business | App di prenotazione per centri sportivi; mostra i posti disponibili (recensione Play) | prezzi non pubblici ("Richiedi una consulenza") | Orientata a fitness e palestre |
| TeamSystem Sportivi in Cloud / Golee | link sopra | Gestionali per ASD con iscrizioni online | 26-69 €/mese + 9 €/mese | Non sono directory: sono possibili fonti dati o partner |
| KidPass, MilanoperiBambini, RomaperBambini | link sopra | Sezioni "Corsi" e "Eventi" | 20 € a evento (RomaperBambini) | Editoriali |

**Segnali di domanda [stima]**
- "scuola di musica bambini [città]": **20/20**, con varianti di quartiere: "napoli vomero", "torino crocetta", "genova sampierdarena", "padova arcella", "roma nord".
- "corsi nuoto bambini [città]": **18/20** (assenti Venezia e Taranto). Molte varianti sono **navigazionali** verso un impianto preciso ("sciorba genova", "stadio bologna", "record bologna", "milanosport", "san filippo brescia").
- "danza bambini [città]": 18/20. "corsi per bambini [città]": 17/20, con sottotipi (inglese, cucina, teatro, robotica, disegno, STEM).
- "attività extrascolastiche bambini [città]": **0/20**. La categoria "extrascolastiche" ha solo varianti fiscali e legali ("730", "detrazione", "genitori separati", "crediti formativi").
- A-z "corsi nuoto bambini": 163 varianti. Ma "corsi nuoto bambini roma" a-z dà solo **8** varianti: la long-tail per quartiere è sottile.
- ≥3 famiglie distinte → soglia superata, ma per attività, non per "quartiere".

**Segnali di dolore**
- **Non trovato:** nessun thread Reddit, nessun articolo sulla difficoltà di trovare corsi per bambini nel quartiere. La sintesi AI per "corsi di musica per bambini Torino San Salvario" indica un vuoto informativo ("Non ho trovato risultati specifici per San Salvario, né prezzi"), ma questo non è una prova che gli utenti soffrano.
- Recensioni Play di Sportclubby (`com.sportclubby.app`, 12.339 recensioni): lamentele sulla prenotazione ("una corsa ad ostacoli"), che riguardano le palestre per adulti, non i corsi per bambini.

**Test chatbot C6**
- "corsi di nuoto bambini Bologna San Donato": la sintesi AI individua l'impianto CUS Record (via del Pilastro 8, uscita tangenziale 9 San Donato), il corso Acquamica 3-6 anni e i contatti, ma avverte che "alcuni calendari sono vecchi" → **parzialmente soddisfatto** (luogo e contatti sì, prezzi e date aggiornate no).
- "corsi di musica per bambini Torino San Salvario prezzi": nessun risultato specifico per quartiere, solo medie Superprof → **non soddisfatto**.

**Verifica dei criteri di scarto pre-registrati**
| Criterio | Esito | Evidenza |
|---|---|---|
| Google Maps o directory esistenti coprono già la ricerca | **incerto** | Google Maps non osservabile (SERP via curl bloccata). Directory esistenti parziali (Superprof per le lezioni private, portali editoriali). |
| Nessuna associazione paga oggi visibilità con cifre pubbliche | **incerto (tendente a scattato)** | Cifre pubbliche solo per i gestionali (26-69 €/mese) e per gli eventi (20 €), non per la visibilità dei corsi |
| Dati principalmente su social (non scrapabili in modo sostenibile) | **incerto** | Strutture grandi con siti e PDF (Milanosport, CUS); quota social non misurata |

**Motivo più forte per scartarlo:** la ricerca reale è per **attività e impianto** (spesso navigazionale verso la piscina nota), non per "quartiere". Google Maps la serve già bene (non verificato). Le associazioni spendono in gestionali, non in visibilità, e non ho trovato un listino di visibilità per i corsi.

**Note per lo scoring C1-C9 (indicative)**
| Criterio | Punteggio | Perché |
|---|---|---|
| C1 | 2 | Nessuna evidenza di dolore (regola: senza evidenza ≤2) |
| C2 | 4 | 17-20/20 per attività; 0/20 per la categoria |
| C3 | 2 | Pagatori con cifre solo indirette (software) |
| C4 | 4 | Molto frammentato (siti, PDF, impianti pubblici e privati) |
| C5 | 3 | Long-tail per attività sì, per quartiere sottile (8 varianti per Roma), parte navigazionale |
| C6 | 3 | AI parziale: trova l'impianto, non prezzi e date aggiornate |
| C7 | 2 | Copiabile |
| C8 | 2 | Incumbent forte presunto (Google Maps), non verificato |
| C9 | 3 | La stagione dei corsi è settembre-ottobre; un test SEO o di contatto sui corsi estivi o di gennaio è possibile |

## 3. Scuola, anziani, salute: #32, #9, #10

### #32 — Libri scolastici usati (liste adozioni open data MIM + compravendita usato)
**Verdetto:** **FAIL (criterio di scarto pre-registrato "servizi gratuiti che fanno già lista adozioni → acquisto usato/nuovo": scattato).** I gate G1-G5 sono formalmente superati. Però Libraccio fa già, gratis e bene, il percorso scuola → classe → carrello nuovo/usato, e almeno altri due servizi gratuiti coprono la lista per classe con il valore dell'usato.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | [fatto] Libraccio, Amazon, Subito, Vinted e RiAdotta operano nella compravendita senza albi. | https://www.altroconsumo.it/vita-privata-famiglia/mamme-e-bimbi/news/acquisto-libri-scolastici |
| G2 Dati raggiungibili | sì | [fatto] Il catalogo open data MIM ha un dataset "Adozioni libri di testo" per ogni regione (primaria, secondaria di I e II grado). [fatto] libri.italiainnumeri.it lo usa già: 30.529 scuole, 347.924 classi, 30.472 libri per l'anno 2026/27. | https://dati.istruzione.it/opendata/opendata/catalogo/elements1/?area=Adozioni%20libri%20di%20testo · https://libri.italiainnumeri.it/ |
| G3 Pagatore identificabile | sì (debole) | [fatto, fonte secondaria] Affiliazione Libraccio: Awin, cookie di 30 giorni, payout "fino al 3,7%" (Shopper.com). Amazon.it, categoria Libri: 5% (trend-online, data non indicata). La tabella ufficiale di Amazon è dietro login. [stima] Su una spesa di 200-300 € per famiglia restano circa 7-15 € per ogni famiglia che converte, e i libri usati costano meno, quindi la commissione scende. | https://ui.awin.com/merchant-profile/9442 · https://www.libraccio.it/pg/partnership · https://shopper.com/partnerships/libraccio-it-affiliate-program · https://www.trend-online.com/tecnologia/affiliazioni-amazon-guadagno-soldi/ |
| G4 Distribuzione senza pubblico | sì (contesa) | [stima] "libri scolastici usati [città]" compare in 20 città su 20 e ci sono 175 suggerimenti a-z. Nella SERP però sono già presenti skuola.net e studenti.it con guide per città, Wallapop e libreriauniversitaria.it con pagine per scuola. | sotto, Segnali di domanda |
| G5 Rischio legale gestibile | sì | [stima] Open data senza dati personali. Lo scraping dei prezzi dei marketplace richiede di rispettare le CGU. | — |

**Incumbent e concorrenza pubblica/gratuita**
| Nome | URL | Modello / cifre | Cosa copre davvero (pagina aperta) | Punti deboli |
|---|---|---|---|---|
| Libraccio.it (gruppo IBS) | https://www.libraccio.it/scolastici | Retail nuovo + usato, ritiro dell'usato. [fatto] Ha oltre il 50% degli acquisti online di libri usati (sondaggio Altroconsumo, 27/08/2025). | [fatto] "seleziona la regione, la città e segui il percorso fino alla tua classe… potrai inserire nel carrello con un solo click tutti i libri in lista, scegliendo tra nuovo o usato"; prenotazione dei titoli non disponibili; banca dati adozioni in collaborazione con AIE | Ritardi a settembre. Le guide riportano una valutazione minima di 15 € per vendere (fonte secondaria). |
| libri.italiainnumeri.it | https://libri.italiainnumeri.it/ | Gratis | [fatto] Lista per classe con titoli, ISBN, prezzo di copertina e "dove comprarli"; pagine per regione e per scuola | Niente scambio tra privati |
| RiAdotta | https://www.riadotta.it/ | Gratis, nessuna spedizione | [fatto] Liste ufficiali MIM per oltre 18.000 scuole medie e superiori, "quanto valgono" i libri, scambio davanti a scuola con riserva di 3 giorni, **avviso quando arriva una copia vicino a scuola**, osservatorio dei costi per comune | Liquidità locale ancora da costruire |
| Amazon (usato), Subito, Vinted, Facebook, Comprovendolibri | (da sondaggio Altroconsumo) | Marketplace | Quote dell'usato online: Amazon 17%, Subito 5%, Facebook 5%, Comprovendolibri 3%, Vinted 2% | Ricerca per ISBN, non per classe |
| MIM open data (pubblico) | link G2 | Gratis | Solo il dato grezzo per regione, nessuna funzione d'acquisto | — |

**Segnali di domanda [stima]**
- "libri scolastici usati [città]": **20/20** città. Suggerimenti per città: Roma 10, Torino 10, Milano 6, Bologna 6. "mercatino libri usati [città]": 20/20. "libri di testo [città]": 14/20. "adozioni libri di testo [città]": 0/20.
- Long-tail a-z su "libri scolastici usati": **175** suggerimenti unici, raggruppabili in più di 3 famiglie distinte:
  1. per città, anche minori (Busto Arsizio, Bassano, Civitanova…);
  2. vendita ("dove venderli", "a quanto si vendono", "quanto valgono", "al kg", "in blocco");
  3. per canale ("amazon", "libraccio", "vinted", "subito it", "coop", "ibs");
  4. per ordine di scuola ("elementari", "alberghiero").
- **La soglia pre-registrata è superata.** Stagionalità: Trends non raggiungibile. [fatto] La scadenza per la comunicazione delle adozioni era l'8 giugno 2026 (fonte già citata in 03-screening-consumer.md), quindi la domanda si concentra tra giugno e settembre [stima].

**Segnali di dolore**
- [fatto] Altroconsumo (27/08/2025): più del 90% dei genitori ha avuto almeno un problema nell'anno. Libri introvabili/fuori produzione: 41% almeno una volta. Libri arrivati dopo mesi: 60%. "Alcuni docenti sconsigliano l'usato": 41%. Il 31% dei genitori delle medie compra solo usato. https://www.altroconsumo.it/vita-privata-famiglia/mamme-e-bimbi/news/acquisto-libri-scolastici
- Reddit: non trovato. Trustpilot: non leggibile (blocco).
- Il dolore riguarda la reperibilità e i tempi, cioè la logistica dei retailer. Non riguarda il "non so cosa comprare", che è già risolto gratis.

**Pagatori (G3/C3):** Libraccio fino al 3,7% (Awin/TradeDoubler/TradeTracker), Amazon Libri 5% (fonte secondaria). Per IBS ho trovato solo il profilo Awin (9777), con i termini dietro login. Commissioni dei marketplace dell'usato: non trovate.

**Test chatbot (C6):** query "libri di testo liceo classico Parini Milano 2026/2027 classe 1A". La risposta AI di WebSearch ha trovato solo il PDF della scuola del **2024** e ha detto esplicitamente di non avere l'elenco 2026/27. Per "libri scolastici usati liceo Milano" ha elencato negozi e mercatini generici (Libraccio, viale Papiniano, TheBanco). → **Non "già soddisfatto"** secondo la definizione pre-registrata. Il dato per classe resiste all'AI, ma lo forniscono già gratis tre servizi specializzati.

**Verifica dei criteri di scarto pre-registrati**
| Criterio | Stato | Evidenza |
|---|---|---|
| Esistono già servizi gratuiti che fanno lista adozioni → acquisto usato/nuovo in modo usabile | **scattato** | Libraccio: classe → carrello nuovo/usato in un click. RiAdotta: lista + valore + scambio + avviso. italiainnumeri: lista + dove comprare. |
| Affiliazione assente o con commissioni irrisorie | **incerto** (non assente, bassa) | 3,7% Libraccio / 5% Amazon, circa 7-15 €/famiglia [stima] |
| (asticella) Servizio **pubblico** che copre la funzione | non scattato | MIM pubblica solo i dati grezzi |

**Motivo più forte per scartarlo:** il leader di mercato (oltre il 50% dell'usato online) offre già gratis esattamente il flusso dell'idea, e paga agli affiliati il 3,7% su quel flusso. Un nuovo entrante gli porterebbe traffico in cambio di pochi euro a famiglia, concentrati in circa 3 mesi l'anno.

**Note per lo scoring (indicative)**
| Criterio | Punteggio | Perché |
|---|---|---|
| C1 | 3 | Problemi diffusi (oltre il 90%), ma su logistica e reperibilità; lo strumento per trovare la lista esiste già |
| C2 | 4 | 20/20 città e 4 famiglie long-tail [stima]; stagionalità non misurata (Trends 429) |
| C3 | 2 | 3,7-5% su un carrello di circa 200-300 €; nessun pagatore più ricco trovato |
| C4 | 1 | Fonte unica e pulita (MIM), già replicata da almeno 3 attori |
| C5 | 3 | Long-tail ampia ma contesa (skuola.net, studenti.it, Wallapop, libreriauniversitaria) |
| C6 | 4 | L'AI non conosce la lista per classe dell'anno in corso |
| C7 | 2 | Effetto rete locale possibile (RiAdotta lo sta già costruendo) |
| C8 | 1 | Libraccio è forte e già integrato con AIE |
| C9 | 2 | Oggi (novembre) si è fuori stagione: prima evidenza utile a giugno 2027 |
| Penalità | stagionalità estrema (-5 indicativo) | |

---

### #9 — RSA: rette, confronto, liste d'attesa (variante N5: lead per i rimborsi delle rette)
**Verdetto:** **INCERTO (G3).**
- Lato confronto RSA: domanda e dolore forti, dati raggiungibili. Però non ho trovato **nessun listino pubblico** di directory RSA o di lead per strutture, e l'asticella richiede una cifra.
- In Lombardia e in Toscana gli enti pubblici pubblicano già per struttura rette, liste e posti liberi.
- **N5 (lead legali):** il modello "lead a pagamento verso avvocati" urta l'art. 37 c. 2 del Codice deontologico forense. L'unica cifra trovata è un servizio B2C a 149 €.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì (confronto); **incerto (N5)** | [stima] Informazione e confronto sulle strutture: nessuna licenza. N5: [fatto] art. 37 CDF c. 2, "L'avvocato non deve offrire o corrispondere a colleghi o a terzi provvigioni o altri compensi quale corrispettivo per la presentazione di un cliente"; c. 1 vieta di acquisire clienti "a mezzo di agenzie o procacciatori". Il pay-per-lead verso avvocati è quindi deontologicamente vietato per l'avvocato che paga. Una consulenza diretta sul diritto al rimborso fatta da non avvocati: rischio da verificare. | https://miolegale.it/codici/codice-deontologico-forense/art-37/ |
| G2 Dati raggiungibili | sì (eterogenei) | [fatto] Regione Lombardia: "È qui possibile ricercare informazioni sui posti disponibili, le liste di attesa e le rette delle RSA in Lombardia", con rinvio alle 8 ATS. [fatto] ATS Brescia: pagina HTML con, per ogni RSA, lista d'attesa (uomini/donne) e retta min-max, "dati aggiornati al 30/09/2026". [fatto] ATS Bergamo: XLSX "RSA_LISTA_ATTESA_102026" con il numero di persone in lista per struttura al 30/10/2026 (totale 3.099). [fatto] Toscana: il portale rsa.regione.toscana.it permette di "vedere quali hanno posti liberi, trovare informazioni su servizi e costi". [fatto] Open data Lombardia "Elenco RSA" aggiornato al 14/11/2026, con posti accreditati e autorizzati ma senza rette. Altre regioni: carte dei servizi in PDF (non verificato in modo sistematico). | https://www.regione.lombardia.it/sanita/strutture-sanitarie-e-sociosanitarie/residenze-sanitarie-assistenziali-rsa · https://www.ats-brescia.it/liste-attesa-e-rette-rsa · https://www.ats-bg.it/residenza-sanitaria-anziani-rsa-provincia-bergamo · https://www.regione.toscana.it/-/residenze-sanitarie-assistenziali · https://hub.dati.lombardia.it/Sanità/Elenco-Residenze-Sanitarie-Assistenziali-RSA-/jyyh-hybn |
| G3 Pagatore identificabile | **incerto** | [fatto] Le strutture pagano già Italiaonline/Virgilio per comparire prima (screening 03), ma **senza cifra pubblica**. Ricerca di listini di portali RSA ("inserisci la tua struttura", abbonamento): **non trovato**. [fatto] N5: Soluzione RSA (Consulcesi & Partners) vende alle famiglie l'analisi del caso a **149 €** (3 prodotti Shopify, tutti a 149,00 €). Percentuale a successo: non trovata. | https://www.soluzione-rsa.it/products.json · https://www.soluzione-rsa.it/ |
| G4 Distribuzione senza pubblico | sì | [stima] "rsa [città]" in 20/20 città, "case di riposo [città]" 20/20, "costo rsa [città]" 18/20. Nella SERP per "retta RSA Brescia" escono PDF di delibere e carte dei servizi e articoli di cronaca, nessuna directory con prezzi. | sotto |
| G5 Rischio legale gestibile | sì | [stima] Dati di persone giuridiche e dati pubblicati dalle ATS. Le recensioni dei familiari possono contenere dati sanitari: serve moderazione. | — |

**Incumbent e concorrenza pubblica**
| Nome | URL | Modello | Cosa copre davvero | Punti deboli |
|---|---|---|---|---|
| ATS lombarde (8) | link G2 | Pubblico | Brescia: liste (M/F) + rette min-max per RSA. Bergamo: numero in lista per RSA, mensile. Le altre ATS rimandano a elenchi e carte. | Formati diversi (HTML, XLSX, PDF); numero di persone in lista, non tempo d'attesa; nessuna notifica |
| RSA della Toscana | https://rsa.regione.toscana.it/ (da pagina regionale) | Pubblico | Ricerca per zona, **posti liberi**, servizi e costi | Solo Toscana; notifiche non verificate |
| Virgilio/PagineBianche | https://www.virgilio.it/italia/elenco/cat/CASE_DI_RIPOSO_(3).html | Visibilità a pagamento, cifra non pubblica | Schede anagrafiche | Niente rette né liste |
| Peranziani.it | https://www.avvenire.it/economia/lavoro/un-portale-di-servizi-per-la-terza-eta_30966 | Non chiaro | Network di strutture | Recensioni scarse (screening 03) |
| Soluzione RSA (C&P) | https://www.soluzione-rsa.it/ | 149 € per l'analisi del caso | Solo rimborsi, nessun confronto | Comunicazione autopromozionale |

**Segnali di domanda [stima]**
- Città (20 più popolose): "rsa [città]" **20/20**. "case di riposo [città]" **20/20**. "costo rsa [città]" **18/20** (mancano Venezia e Messina). "retta rsa [città]" 5/20. Esempio: "rsa brescia" → "rsa brescia prezzi", "rsa brescia lista attesa", "rsa brescia private".
- Long-tail a-z:
  - "retta rsa" **130** suggerimenti: detrazione/730, invalido 100%, Alzheimer, regioni, singole strutture, "chi paga se la pensione non basta", "a carico del comune";
  - "lista attesa rsa" **50**: quasi solo Lombardia (ATS) e Toscana;
  - "rimborso retta rsa" **8**;
  - "rsa" **260**, molto rumore ("rsa philadelphia", sindacato).
- Almeno 3 famiglie distinte → **soglia superata**.
- [fatto] Cassazione: 5 ordinanze del 27-28 maggio 2026 (tra cui n. 16601/2026), rette a carico del SSN per Alzheimer avanzato e patologie neurodegenerative gravi. È un picco di domanda per N5. https://www.businessonline.it/news/malati-di-alzheimer-e-rsa-come-avere-soldi-arretrati-delle-rette-dopo-sentenza-cassazione-n166012026_n85575.html

**Segnali di dolore**
- [fatto] Altroconsumo (28/04/2026, 594 famiglie): soddisfazione 6,8/10; **115 giorni** di attesa media per un posto (oltre 4 mesi nel pubblico); retta media oltre 2.000 €/mese; nel 77% dei casi il reddito dell'anziano non basta. https://www.altroconsumo.it/vita-privata-famiglia/servizi-e-contratti/news/inchiesta-rsa-2026
- [fatto] Testimonianza: pensione + accompagnamento coprono meno di metà della retta, ISEE "di poco" sopra la soglia comunale. https://www.nostrofiglio.it/famiglia/mia-madre-ha-l-alzheimer-e-vive-con-noi-e-con-i-miei-due-figli-piccoli-la-rsa-costa-troppo
- [fatto] Contenziosi lunghi: "A Roma l'ultimo procedimento è durato cinque anni". La Corte d'Appello di Milano ha respinto un ricorso di un erede. https://www.quotidiano.net/cronaca/inchieste/rette-rsa-alzheimer-cause-per-i-rimborsi-cosa-sapere-rjt8bedt · https://www.ilgiorno.it/milano/cronaca/caos-rette-rsa-malati-alzheimer-sentenza-corte-appello-drtzf4lb
- Reddit: non trovato.

**Pagatori con cifre:** 149 € (B2C, Soluzione RSA). Directory e lead per strutture: cifra non trovata. Lead verso avvocati: vietati dal lato dell'avvocato (art. 37 c. 2 CDF).

**Test chatbot (C6):** query "retta RSA Brescia quanto costa". La risposta AI ha dato medie per ATS (59,51 €/giorno "alberghiera" ATS Brescia, data non chiara), un dato regionale di 76,02 €/giorno e 17.265 persone in lista, poi ha rimandato a "una struttura specifica o ATS Brescia". Non ha trovato la pagina ATS con la retta per struttura. → **Non soddisfatto** (dati per struttura assenti, date incerte). [stima] Un motore AI che indicizza la pagina ATS Brescia potrebbe però rispondere bene per quella provincia.

**Verifica dei criteri di scarto pre-registrati**
| Criterio | Stato | Evidenza |
|---|---|---|
| Rette non reperibili in modo sistematico (G2) | **non scattato** (eterogeneo) | ATS Brescia HTML min-max per RSA; Toscana portale costi; altrove carte dei servizi PDF |
| Le directory esistenti coprono già prezzi e disponibilità | **non scattato** per i privati; **parzialmente** per il pubblico | Nessuna directory privata con prezzi trovata; portali pubblici solo in Toscana e in 2 ATS lombarde |
| Liste d'attesa solo nei sistemi regionali, non pubbliche | **non scattato** in Lombardia/Toscana, **incerto** altrove | XLSX ATS Bergamo, HTML ATS Brescia, posti liberi Toscana; altre regioni non verificate |
| G1: rimborsi = attività legale → solo come lead | **scattato (aggravato)** per N5 | Il pay-per-lead verso avvocati è vietato dall'art. 37 c. 2 CDF |
| (asticella) Servizio pubblico con ricerca + notifiche | non scattato | Nessuna notifica trovata nei portali pubblici |

**Motivo più forte per scartarlo:** non c'è un pagatore con cifra. Le strutture con lista d'attesa (proprio dove la domanda è più forte, in Lombardia: 3.099 persone in lista solo a Bergamo) non hanno bisogno di lead. Il modello a lead legali (N5) è vietato dal lato dell'avvocato. Resta la pubblicità sulle strutture private non convenzionate, senza listino trovato.

**Note per lo scoring (indicative)**
| Criterio | Punteggio | Perché |
|---|---|---|
| C1 | 4 | Altroconsumo: 115 giorni di attesa, rette oltre 2.000 €, 6,8/10 |
| C2 | 4 | 20/20 e 18/20 città; 3+ famiglie [stima] |
| C3 | 2 | Nessun listino directory/lead; N5 limitato da deontologia; 149 € B2C da verificare come affiliazione |
| C4 | 4 | 8 ATS × formati diversi + 20 regioni + carte dei servizi PDF |
| C5 | 4 | SERP senza directory con prezzi; pagine per comune e per struttura |
| C6 | 4 | L'AI dà solo medie e rimanda all'ente |
| C7 | 3 | Lo storico di rette e liste si accumula |
| C8 | 4 | Nessun privato forte; il pubblico è frammentato |
| C9 | 3 | Pagine per 1-2 province lombarde da dati ATS in 2 settimane; misurare le richieste delle strutture |
| Penalità | rischio legale N5 (-3 indicativo) | |

---

### #10 — Tempi di attesa sanitari (CUP per prestazione/struttura; N6 = censimento delle regioni)
**Verdetto:** **FAIL (G2), più il criterio pre-registrato "le piattaforme private mostrano già disponibilità reale": scattato.**
- Il dato pubblico è aggregato o ex-post (percentuali per azienda/regione, medie settimanali in PDF). La prima disponibilità per struttura si vede solo dentro il CUP con impegnativa.
- Sul privato, Cup24 (ex CupSolidale) e MioDottore mostrano già prima disponibilità e prezzi per città.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | [stima] Mostrare i tempi non è un atto sanitario. [fatto] Cup24 e MioDottore operano con prenotazione e commissione/abbonamento. [fatto] L. 145/2018 c. 525: le comunicazioni delle strutture private e dei professionisti "shall not contain any promotional or suggestive elements". Il vincolo è sui contenuti, non vieta il modello. | https://portolano.it/newsletter/portolano-cavallo-inform-life-sciences/the-2019-budget-law-restricts-the-scope-of-health-services-advertising |
| G2 Dati raggiungibili | **no** (per la funzione chiave) | [fatto] PNLA/Agenas: trend e dati "delle singole regioni per classi di priorità"; il ministro dice che "non nasce per fare classifiche"; pagina della piattaforma "in fase di aggiornamento" (aggiornata al 12/11/2026). [fatto] Emilia-Romagna (TdAER): percentuale di prime disponibilità entro lo standard **per azienda sanitaria**, aggiornamento mensile. [fatto] Lazio: monitoraggio quotidiano delle **percentuali** ex ante, rinvio alle pagine delle ASL. [fatto] ASL Nuoro: PDF settimanale per azienda con media e mediana in giorni per prestazione e priorità. [stima] La prima disponibilità per struttura è visibile solo nel CUP con NRE e codice fiscale: non scrapabile in modo sostenibile. | https://www.dire.it/29-05-2026/1244374-liste-di-attesa-in-italia-i-dati-agenas-mostrano-un-miglioramento-presentata-la-piattaforma-per-monitorarle/ · https://www.portaletrasparenzaservizisanitari.it/pnla/ · https://www.tdaer.it/ · https://salutelazio.it/it/servizi/monitoraggio-liste-di-attesa · https://asl3nuoro.it/wp-content/uploads/2024/10/Tempi-di-attesa-aziendali-per-priorita_settimana-indice-07-11-Ottobre-2024.pdf |
| G3 Pagatore identificabile | sì | [fatto] MioDottore per specialisti da **69 €/mese** (Capterra); una recensione del 15/10/2026 parla di "€180 con IVA". [fatto] Cup24: commissioni alle strutture non pubbliche. | https://www.capterra.it/software/1031131/doctoralia-pro · https://cup24.it/entra-nel-network.html |
| G4 Distribuzione senza pubblico | incerto | [stima] La declinazione per città è debole: "tempi di attesa [città]" 4/20, "tempi di attesa risonanza magnetica [città]" 3/20. Le famiglie di query però ci sono (per prestazione, per regione, per ospedale/ASL). La SERP è dominata da cronaca, PDF ASL e pagine di Cup24 per zona. | sotto |
| G5 Rischio legale gestibile | incerto | [stima] Scraping dei CUP dietro autenticazione o NRE non sostenibile; vincolo c. 525 sui contenuti delle strutture paganti. | link G1 |

**Incumbent e concorrenza pubblica**
| Nome | URL | Modello / cifre | Cosa copre davvero | Punti deboli |
|---|---|---|---|---|
| Cup24 (ex CupSolidale) | https://cup24.it/ · https://cup24.it/prezzi.html | Gratis per l'utente, commissioni alle strutture non pubbliche | [fatto] "Confronta in tempo reale disponibilità, prezzi e distanze di 6.637 strutture mediche private"; 117.688 medici; 4,8 su 158.606 recensioni (dichiarato); osservatorio prezzi con "1° appuntamento disponibile" per prestazione (es. Rmn ginocchio da 60 € a Roma, 18-19 novembre); pagine per zona di Roma | Solo privato/solvente, non mostra l'attesa SSN |
| MioDottore (Docplanner) | https://pro.miodottore.it/ | Da 69 €/mese (Capterra) | [fatto] "20 milioni di visite al mese" (dichiarato) | Solo privato; recensioni negative sui prezzi IVA esclusa |
| PNLA Agenas | https://www.portaletrasparenzaservizisanitari.it/pnla/ | Pubblico | Dati regionali per priorità, bollettino trimestrale | Niente strutture; "in fase di aggiornamento" |
| Portali regionali (TdAER, Salute Lazio, ATS/ASL) | link G2 | Pubblico | Percentuali per azienda; app SaluteLazio con prenotazione e notifiche | Non confrontabili tra regioni, nessuna prima disponibilità pubblica |

**Segnali di domanda [stima]**
- Città: "tempi di attesa [città]" **4/20** (Roma, Milano, Torino, Messina). "tempi di attesa risonanza magnetica [città]" 3/20. "liste di attesa [città]" 6/20. "tempi di attesa visite [città]" 0/20. Navigazionali: "cup [città]" **20/20** e "prenotare visita [città]" 19/20.
- Long-tail a-z su "tempi di attesa": 244 suggerimenti, molto rumore (Gardaland, bus Atac, 14 su pronto soccorso). Famiglie sanitarie:
  1. per prestazione (visita oculistica, cardiologica, dermatologica, ortopedica, ecografia, mammografia, colonscopia, TAC, risonanza);
  2. per regione (Lombardia, Emilia-Romagna, Puglia, FVG);
  3. per ospedale/ASL (Ospedale Maggiore Bologna, ASL TO4, Humanitas).
- **Soglia superata per famiglie (3), non per città (4/20).**
- [fatto] Quasi 2 milioni di visite ed esami in ritardo nel primo quadrimestre 2026 (Agenas). https://www.avvenire.it/sanita-in-ritardo-quasi-2-milioni-di-esami-e-visite-mediche-nei-primi-quattro-mesi-del-2026_109030

**Segnali di dolore**
- [fatto] Federconsumatori: 748 giorni per una visita ginecologica in classe P (massimo 120). https://federconsumatori.it/wp-content/uploads/2025/02/report-liste-attesa-nov.2024-gen2025.pdf (citato anche nella sintesi WebSearch)
- [fatto] "Liste d'attesa fantasma": slot visibili online che al telefono non esistono. https://www.businessonline.it/news/ospedali-italiani-e-liste-dattesa-fantasma-prenotazioni-che-risultano-disponibili-online-ma-che-al-telefono-non-esistono_n85656.html
- [fatto] OCPI: i nuovi dati rischiano di sovrastimare la qualità del servizio. https://osservatoriocpi.unicatt.it/pubblicazioni/2026/liste-d-attesa-perche-i-nuovi-dati-rischiano-di-sovrastimare-la-qualita-del-servizio.html
- Reddit: non trovato.

**Pagatori con cifre:** MioDottore 69 €/mese (Capterra); Cup24 non pubblico. Le strutture private pagano, ma pagano gli incumbent che mostrano già la disponibilità reale.

**Test chatbot (C6):** query "tempi di attesa risonanza magnetica Bologna". La risposta AI ha detto di non aver trovato dati attuali e ufficiali, ha citato casi di cronaca (dato 2022, lista chiusa, appuntamento nel 2029 a Ravenna) e ha rimandato al CUP/AUSL. → **Non soddisfatto.** Il motivo però è che il dato non è pubblico nemmeno per noi (G2), non che l'AI sia debole.

**Verifica dei criteri di scarto pre-registrati**
| Criterio | Stato | Evidenza |
|---|---|---|
| Dati per prestazione e struttura non pubblici senza autenticazione (G2) | **scattato** (parziale: esistono medie ex-post per azienda in PDF) | PNLA regionale, TdAER per azienda, Lazio percentuali, ASL Nuoro per azienda |
| Le piattaforme private mostrano già disponibilità reale | **scattato** | Cup24: 6.637 strutture, prima disponibilità e prezzi per città/zona |
| G1 (pubblicità sanitaria) blocca il modello a lead | **non scattato** | Cup24/MioDottore operano; c. 525 vincola i contenuti |

**Motivo più forte per scartarlo:** la parte utile e fresca (quando posso fare l'esame e dove) è privata e già servita da Cup24/MioDottore, oppure pubblica ma chiusa nel CUP dietro impegnativa. Con i dati pubblici si costruirebbe solo un osservatorio di percentuali e medie ex-post, cioè informazione e non funzione. Inoltre sarebbe un osservatorio senza pagatore, perché le strutture private pagano già chi mostra la loro disponibilità.

**Note per lo scoring (indicative)**
| Criterio | Punteggio | Perché |
|---|---|---|
| C1 | 5 | 2 milioni di prestazioni in ritardo, 748 giorni, liste fantasma |
| C2 | 3 | Famiglie sì, città 4/20 [stima]; la query transazionale ("prenotare visita [città]") è presidiata |
| C3 | 3 | Disponibilità a pagare dimostrata (69 €/mese) ma intercettata dagli incumbent |
| C4 | 2 | Il pubblico è aggregato/ex-post, il fresco è dietro CUP; nessun vantaggio dai dati |
| C5 | 2 | SERP con cronaca, PDF ASL e Cup24 per zona |
| C6 | 3 | Resistente solo se i dati sono freschi, e non lo sono |
| C7 | 2 | Copiabile; lo storico ex-post è pubblico |
| C8 | 2 | Cup24/MioDottore forti e moderni |
| C9 | 2 | Serve il censimento N6 di 21 regioni prima di sapere |
| Penalità | dipendenza da portali regionali + c. 525 (-3 indicativo) | |

## 4. Lavoro: #4 + N3, #18 + N11

### #4 + N3 — Concorsi pubblici + tracker delle candidature, scadenze e prove

**Verdetto:** **PASS (debole)**. Tutti i gate passano: domanda enorme, pagatori con cifre pubbliche e nessun alert sul portale pubblico. Il vantaggio dati è però basso (fonte unica inPA), la SEO è presidiata da incumbent forti e app IO ha già pronto un modello di servizio "Bandi di concorso" con convocazioni e graduatorie.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | sì | [fatto] Portali privati di concorsi, alert e corsi operano senza albi: Concorsando, ConcorsiPubblici.com con alert a pagamento, Ticonsiglio. Nessuna norma di autorizzazione trovata per l'informazione sui concorsi. | https://www.concorsipubblici.com/abbonamenti-premium ; https://www.concorsando.it/blog/corsi-online/ |
| G2 Dati raggiungibili | sì | [fatto] Le pagine dei bandi su inPA sono pubbliche e renderizzate lato server (data di apertura e chiusura, numero di posti, ente, PDF del bando). La sitemap pubblica `sitemap-bandi.xml` elenca **1.902 URL di bandi**. robots.txt vieta solo wp-admin e wp-json. La 4ª Serie Speciale della GU è consultabile gratis. Le comunicazioni (calendari delle prove, graduatorie) sono pubblicate per categoria su inPA. **Limite:** secondo il Garante, esiti intermedi e graduatorie di merito vanno **solo ai partecipanti, in area riservata**. Lo stato personale (ammesso, esito) quindi non è pubblico: per N3 deve inserirlo l'utente. | https://www.inpa.gov.it/sitemap-bandi.xml ; https://www.inpa.gov.it/robots.txt ; https://www.gazzettaufficiale.it/30giorni/concorsi ; https://www.garanteprivacy.it/temi/lavoro/concorsi-pubblici |
| G3 Pagatore identificabile | sì | [fatto] (1) **ConcorsiPubblici.com Premium**, cioè alert personalizzati e quiz: 4,99 €/mese; 12,90 €/3 mesi; 24,90 €/6 mesi; 39,90 €/anno. (2) **Affiliazione EdiSES "fino al 10%"** sul carrello; manuali a 33-48 €, corso annuale a 599 €, EdiPASS a 1.299 €. (3) **Concorsando Academy** a 39,99 €/mese (34,99 € senza simulatore). | https://www.concorsipubblici.com/abbonamenti-premium ; https://contenuti.edises.it/landing/programma-affiliazione-edises.html ; https://www.edises.it/ ; https://www.concorsando.it/blog/corsi-online/ |
| G4 Distribuzione senza pubblico | sì (difficile) | [stima] La long-tail supera la soglia pre-registrata (vedi sotto), ma la SEO è occupata: per "concorsi comune di Torino 2026 scadenza" compaiono solo Concorsando, ConcorsiPubblici, Leggioggi e Simone. Canale alternativo: comunità per singolo concorso. Ticonsiglio gestisce 73 gruppi Telegram, uno per concorso, con 184-9.267 membri. | WebSearch 2026-11-20 ; https://www.ticonsiglio.com/gruppi-telegram-concorsi-pubblici/ |
| G5 Rischio legale gestibile | sì (con un vincolo) | [fatto] FAQ del Garante (dic. 2025): online va pubblicata solo la graduatoria dei **vincitori** (nome, cognome, posizione). Idonei non vincitori, esiti intermedi e prove orali non si pubblicano online. Il Garante avverte che i dati online "possono essere indicizzati e riutilizzati da terzi". **Ripubblicare graduatorie con nomi = da escludere.** I bandi in sé non contengono dati personali rilevanti. I contenuti di inPA sono di una PA: rischio *sui generis* [stima] basso; termini d'uso specifici non trovati. | https://www.garanteprivacy.it/temi/lavoro/concorsi-pubblici ; https://www.inpa.gov.it/faq-del-garante-per-la-protezione-dei-dati-personali/ |

**Concorrenza pubblica gratuita (pagine aperte)**

| Servizio | Cosa offre davvero | Cosa manca | Fonte |
|---|---|---|---|
| **inPA** (portale web) | [fatto] Ricerca per testo, categoria, regione, stato, settore, periodo e salario. Area personale con SPID/CIE: CV, sezione "Le mie domande" con candidature **inviate o in compilazione**, ricevuta via email all'invio. Assistente AI "Camilla" per le selezioni. Pagina "Comunicazioni" con categorie: calendario prove preselettive/scritte/orali, commissione, proroga termini, graduatoria finale. | [fatto, da codice] Nelle stringhe del frontend del portale (versione 9.43.20-GA, 101 file JS scaricati) l'area candidato ha solo gli stati "DOMANDA INVIATA / NON INVIATA". Mancano alert sui nuovi bandi, ricerche salvate e preferiti lato candidato. "Notifiche" e "preferiti" esistono solo nelle aree delle amministrazioni ("Notifiche attività", "SALVA RICERCA FABBISOGNO NEI PREFERITI"). La FAQ non cita alert. | https://www.inpa.gov.it/ ; https://www.inpa.gov.it/faq-domande-e-risposte ; https://portale.inpa.gov.it/ui/public-area/login ; bundle https://cdn.inpa.gov.it/versions/9.43.20-GA/main-EDGM72WJ.js |
| **App inPA** (Android) | [fatto] 100K+ download, voto **3,29 su 174 valutazioni**. Registrazione, CV, candidatura. | [fatto] Recensioni: "**Non è possibile impostare delle notifiche o alert**", "manca il comune" tra i filtri, ricerca a testo libero "restituisce cose a caso"; "**Non si possono vedere le comunicazioni ma solo la domanda compilata**"; problemi col pagamento del contributo. | https://play.google.com/store/apps/details?id=it.gov.inpa.app&hl=it&gl=IT |
| **App IO** | [fatto] Il catalogo dei modelli di servizio PagoPA ha la scheda "Bandi di concorso" con questi messaggi: pubblicazione e aggiornamento del bando, presa in carico della domanda, convocazioni alle prove, esiti delle preselettive, pubblicazione della graduatoria. Il promemoria delle convocazioni è "Premium", secondo il contratto dell'ente. | [stima] La scheda sta sotto ".../in-arrivo": probabilmente non è ancora attiva. Nessun ente che la usa è citato. Se inPA la attivasse, **N3 perderebbe la parte "notifiche"**. | https://docs.pagopa.it/i-modelli-dei-servizi/vita-lavorativa/in-arrivo |
| **Gazzetta Ufficiale, 4ª Serie Speciale** | [fatto] Elenco dei fascicoli degli ultimi 30 giorni (PDF), ricerca testuale. | Alert non trovati. È un elenco di PDF, non un servizio. | https://www.gazzettaufficiale.it/30giorni/concorsi |
| **Cliclavoro** | [fatto] Sezione "Concorsi" nel menu. | Alert per i concorsi: non verificati. | https://www.cliclavoro.gov.it/ |

**Incumbent privati**

| Nome | URL | Modello di prezzo | Punti deboli osservati |
|---|---|---|---|
| Concorsando.it | https://www.concorsando.it/ | Academy a 34,99-39,99 €/mese; simulatore di quiz. **1,6 M utenti in 28 giorni, 750k+ visite al mese da Google; simulatore con 1,4 M utenti nel 2026** (dati dichiarati dall'azienda). App con 1 Mln+ download e voto **4,65 su 20.604**. | Forte. Tracker personale delle candidature: non trovato. Lamentele nei commenti su accessi all'Academy. https://www.concorsando.it/blog/progetto-per-enti-corsi-di-formazione-concorsando-soluzione-di-crescita/ ; https://play.google.com/store/apps/details?id=com.app.concorsando |
| ConcorsiPubblici.com | https://www.concorsipubblici.com/abbonamenti-premium | **Premium a 4,99 €/mese, 39,90 €/anno**: alert per professione, titolo di studio, zona ed ente; email il martedì e il venerdì; ricerche salvate; niente pubblicità. | Alert solo due volte a settimana. Tracker di candidature e prove: non offerto. |
| Ticonsiglio | https://www.ticonsiglio.com/cerco-lavoro/ | Gratuito con pubblicità. Servizio "Cerco lavoro con l'AI": esplora il web ogni giorno per offerte e **concorsi**, filtra le proposte "di dubbia affidabilità" e manda un'email ogni 2-3 giorni. 73 gruppi Telegram, uno per concorso. | Alert gratuito ma generico. |
| EdiSES (Infoconcorsi), Simone, Leggioggi | https://play.google.com/store/apps/details?id=me.pushapp.infoconcorsi | Libri e corsi | App Infoconcorsi: 3,78 su 94 voti. |

**Segnali di domanda [stima]** (autocompletamento Google, hl=it, 2026-11-20)
- **Soglia "comuni": SUPERATA.** Per "concorso comune di [città]" **20 città su 20** hanno almeno 2 varianti proprie: Roma, Milano, Napoli, Torino, Genova e Firenze 10 su 10; Venezia e Padova 8; Brescia 7; Catania 6; Bari, Trieste, Parma, Taranto e Modena 5; Palermo, Verona e Messina 4; Prato 3; Bologna 2. Molte includono anno e numero di posti ("concorso comune di roma 808 posti", "concorso comune di genova 91 posti").
- **Soglia "famiglie": SUPERATA (≥7 famiglie).** "calendario prove concorso [ente]" (inps, mic, ripam 3997…); "graduatoria concorso [ente/profilo]"; "bando concorso [ente] 2026"; "esito prova scritta concorso [x]"; "convocazione prova scritta concorso [x]" (anche "…pnrr 3 dove vedere"); "concorso asl [x]"; "concorso polizia locale [città]". Le espansioni a-z di "concorso [lettera]" danno 200 suggerimenti unici.
- **Segnali specifici per N3:** esistono le query "**inpa notifiche concorsi**", "concorsi a cui ho partecipato", "come sapere se ho superato un concorso pubblico", "codice candidatura inpa dove si trova", "riepilogo candidatura inpa". Sono pochi suggerimenti: la domanda esplicita per un "tracker" è **piccola**. Il bisogno si esprime come "dove vedo la convocazione o l'esito", non come "tracker".
- [fatto, da screening precedente] inPA ha circa 3,2 M di iscritti. https://www.astrid-online.it/static/upload/foru/forum-pa-2025_ricerca.pdf
- Google Trends: non raggiungibile (429).

**Segnali di dolore**
- [fatto] Recensioni dell'app inPA (3,29 su 174): niente alert, niente filtro per comune, comunicazioni non visibili nell'app (link sopra).
- [fatto] I candidati si organizzano da soli per seguire ogni concorso: gruppi Telegram per singola procedura con 475 membri (OSS Campania), 1.014 (RIPAM Coesione Sud 2026), 824 (MEF 548 funzionari), 9.267 (Personale ATA). https://www.ticonsiglio.com/gruppi-telegram-concorsi-pubblici/
- [fatto] Una recensione di un abbonato ConcorsiPubblici: "Gli alert mi aiutano a trovare quelli che mi interessano senza rifare ogni volta la ricerca" (testimonianza pubblicata dal venditore, quindi debole). https://www.concorsipubblici.com/abbonamenti-premium
- [fatto] Confusione documentata sui messaggi inPA ("invia la tua candidatura" non significa che i termini siano stati riaperti). https://www.orizzontescuola.it/concorso-docenti-pnrr2-su-inpa-date-prova-scritta-e-il-messaggio-invia-la-tua-candidatura-non-sono-state-riaperte-le-domande/
- Contro: l'app di Concorsando ha **4,65 su 20.604** voti. Sulla preparazione gli utenti sono soddisfatti; il dolore riguarda il "seguire le procedure", non lo studio.
- Reddit: non trovato.

**Pagatori (cifre)**
- Alert B2C: 4,99 €/mese o 39,90 €/anno (ConcorsiPubblici).
- Affiliazione: EdiSES fino al 10%. Su un manuale da 33-48 € fanno circa 3,3-4,8 €; su un corso da 599 € circa 60 €; su EdiPASS da 1.299 € circa 130 €. Amazon Associates sui libri: percentuale **non verificata** (la pagina richiede login).
- Corsi: Concorsando 34,99-39,99 €/mese (concorrente, ma anche possibile partner).

**Test chatbot (C6)**
- "concorsi comune di Torino 2026 scadenza" → la risposta AI di WebSearch ha dato **scadenza corretta e aggiornata**: 20/11/2026 ore 13:00, 13 funzionari tecnici + 7 istruttori geometri, tassa di 10 €. L'ho verificata su Leggioggi (https://www.leggioggi.it/concorso-comune-di-torino-2026-20-posti-per-tecnici/). La risposta però segnala date di pubblicazione contrastanti e **chiude rimandando a inPA**. Secondo la regola pre-registrata è "**non del tutto soddisfatto**": i dati sono corretti, ma la risposta rimanda al sito ufficiale.
- "quando esce la graduatoria concorso RIPAM 3997 posti" → nessuna data. La risposta riassume lo stato della procedura (esiti della prova scritta AMM, idonei minori dei posti in 9 territori) e rimanda a inPA e Formez. **Non soddisfatto.**
- [stima] La parte informativa (quali bandi, quale scadenza) è già coperta dalle risposte AI, che pescano dalle testate. Resistono il **monitoraggio nel tempo** (avvisami quando esce il calendario o la graduatoria del *mio* concorso), lo stato personale e le scadenze personali (pagamenti, documenti). inPA ha inoltre un proprio assistente AI ("Camilla").

**Criteri di scarto pre-registrati**

| Criterio | Esito | Evidenza |
|---|---|---|
| inPA offre già notifiche/salvataggi e un'area personale con lo stato delle candidature | **Non scattato (parziale)** | L'area personale c'è, ma con soli stati inviata/non inviata. Alert e salvataggi lato candidato non ci sono (codice del frontend + recensioni). Rischio futuro: modello IO "Bandi di concorso" "in arrivo". |
| Le testate coprono già alert e calendari delle prove gratuitamente | **Scattato in parte** | Calendari e esiti sono coperti gratis come articoli (Concorsando, Simone, Leggioggi, ConcorsiPubblici). Alert gratuiti generici esistono (email AI di Ticonsiglio ogni 2-3 giorni, gruppi Telegram). Alert mirati sono **a pagamento** (ConcorsiPubblici). Un tracker personale delle proprie candidature e prove: **non trovato**. |
| Nessun ente di formazione ha un programma di affiliazione con cifre pubbliche | **Non scattato** | EdiSES fino al 10%. |
| Concorrenza pubblica gratuita che copre la stessa funzione (ricerca + notifiche) | **Non scattato oggi** | inPA non ha notifiche. Incerto nel medio periodo (app IO). |
| Soglia C2 | **Superata** | 20 comuni su 20 e ≥7 famiglie. |

**Motivo più forte per scartarlo:** il bisogno informativo è servito gratis da incumbent con milioni di utenti (Concorsando 1,6 M al mese) e dalle risposte AI. L'unica parte scoperta, cioè alert e tracking personale, (a) si monetizza a circa 5 €/mese, e il mercato lo mostra già con ConcorsiPubblici; (b) dipende da dati che per legge stanno in **area riservata** (esiti intermedi), quindi l'utente deve inserirli a mano; (c) può essere annullata se inPA attiva i messaggi su app IO (il modello di servizio esiste già). Il vantaggio dati è minimo: una sola fonte con sitemap pubblica, replicabile in un giorno.

**Note per lo scoring (indicative)**

| Criterio | Punteggio | Perché |
|---|---|---|
| C1 Dolore | 3 | Lamentele concrete sull'app inPA (3,29/174, "nessun alert"), gruppi Telegram per concorso. Ma gli strumenti privati sono apprezzati (Concorsando 4,65/20k) e su Reddit non è emerso nulla. |
| C2 Domanda | 5 | 20 comuni su 20, ≥7 famiglie long-tail, 3,2 M iscritti a inPA. |
| C3 Monetizzazione | 3 | Affiliazione fino al 10% su un carrello che arriva a 599-1.299 € per i corsi; alert a 4,99 €/mese. B2C a prezzo basso. |
| C4 Vantaggio dati | 2 | inPA è fonte unica con sitemap pubblica. Un po' di valore viene dalle comunicazioni (calendari) e dagli enti esterni a inPA, ma è poco. |
| C5 Distribuzione | 2 | Le SERP osservate sono occupate da 4-5 testate specializzate. Telegram/community come canale secondario [stima]. |
| C6 Resistenza AI | 3 | Bando e scadenza ricevono già una risposta corretta; il monitoraggio personale e gli alert resistono. |
| C7 Difendibilità | 2 | Lo storico delle procedure (tempi medi da bando a graduatoria per ente) si accumula, ma è copiabile. |
| C8 Debolezza incumbent | 2 | inPA è debole, ma gli incumbent privati sono forti e attivi (Academy, app, AI di Ticonsiglio). |
| C9 Tempo alla prima evidenza | 4 | Landing page + bot Telegram "segui il tuo concorso" su 3-5 procedure grandi, misurabile in meno di 2 settimane. |

Penalità suggerite: dipendenza da una sola piattaforma (inPA/IO), −3.

---

### #18 + N11 — Lavoro con dati veri (annunci dai siti carriere, retribuzioni) + rilevatore di annunci fantasma

**Verdetto:** **INCERTO (G1)**. La norma non esclude esplicitamente un motore di ricerca a scopo di lucro dalla nozione di "intermediazione", e lo status autorizzativo degli aggregatori attivi in Italia non è stato trovato. Il verdetto tende a PASS solo per un modello "motore di ricerca + rimando al sito dell'azienda", senza raccolta di CV né candidature. Il resto è debole: la SEO per città e stipendi è già programmatica (Indeed, Jooble), la parte "stipendi" ha già una risposta AI e il B2C non ha pagatori diretti.

| Gate | Esito | Evidenza | Fonte |
|---|---|---|---|
| G1 Nessuna licenza | **incerto** | [fatto] Art. 2, c.1, lett. b) D.Lgs. 276/2003: per "intermediazione" si intende "l'attività di mediazione tra domanda e offerta di lavoro… comprensiva tra l'altro: della raccolta dei curricula…; della preselezione e costituzione di relativa banca dati; della promozione e gestione dell'incontro tra domanda e offerta". Art. 6, c.1, lett. f): regime particolare per "i gestori di siti internet a condizione che svolgano la predetta attività **senza finalità di lucro**" e pubblichino i dati del legale rappresentante. Art. 6, c.3: l'autorizzazione è subordinata all'interconnessione con la borsa lavoro (ClicLavoro); se i dati non vengono conferiti, sanzione da 2.000 a 12.000 € (c.4). Art. 9: vietati gli annunci "in forma anonima" e quelli di soggetti non autorizzati, **salvo che l'annuncio indichi in modo esplicito il datore di lavoro**. Una fonte secondaria (Money.it, 15/10/2022) sostiene che l'obbligo di autorizzazione vale "per tutti i portali online"; non cita norme specifiche per i siti a scopo di lucro. Un interpello del Ministero (12/2013, crowdsourcing) richiede l'autorizzazione ex art. 4 quando si promuove un rapporto di lavoro (sintesi di PMI.it, non letta in originale). [stima] Un motore che **non** raccoglie CV, **non** preseleziona e rimanda all'annuncio sul sito dell'azienda (che ne è il datore di lavoro dichiarato) ha buoni argomenti per non essere "intermediazione". Jobrapido si definisce "un motore di ricerca di annunci di lavoro" e opera in Italia, ma il suo status autorizzativo **non è stato trovato**; nemmeno quello di Indeed. → Senza un parere legale resta incerto. | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-09-10;276~art2 ; https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-09-10;276~art6 ; https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-09-10;276~art9 ; https://www.money.it/come-richiedere-autorizzazione-ministeriale-annunci-lavoro ; https://www.pmi.it/?p=63847 ; https://it.jobrapido.com/info/general-terms |
| G2 Dati raggiungibili | sì | [fatto] Gli ATS espongono i dati pubblicamente: la Job Board API di Greenhouse dà accesso JSON a uffici, reparti e "published jobs" per costruire pagine carriere; l'autenticazione serve solo per l'invio delle candidature. HiringCafe dimostra all'estero che la scansione dei siti carriere funziona (screening precedente). **Mappa degli ATS usati dalle aziende italiane: non fatta** (Zucchetti InRecruiting, SuccessFactors, Workday non verificati). | https://developers.greenhouse.io/job-board.html |
| G3 Pagatore identificabile | sì (B2B) / incerto (B2C) | [fatto] **Jooble** vende agli employer italiani piani da **50 €/mese** (1 annuncio), 105 € (3 annunci), 150 € (5 annunci), Premium da 60 €, oppure il pagamento per candidato; dichiara 1,4 M di utenti attivi al mese. **Indeed:** costo per candidatura avviata, budget giornaliero, nessun listino fisso, credito di benvenuto di 100 €. **Subito:** sponsorizzazione da 4,90 € (fonte terza, Betterteam). **LinkedIn Premium Career:** circa 29,90 €/mese (fonti secondarie discordanti). B2C per il rilevatore di annunci fantasma: **nessun pagatore trovato**. | https://it.jooble.org/partner/ppc ; https://it.indeed.com/recruiting/prezzi ; https://it.indeed.com/recruiting/offerta100 ; https://www.betterteam.com/it/subito ; https://metricool.com/it/quanto-costa-linkedin-premium/ |
| G4 Distribuzione senza pubblico | sì (difficile) | [stima] La long-tail è enorme (vedi sotto), ma è già occupata da pagine programmatiche: per "stipendio sviluppatore junior Milano" compaiono **solo pagine di Jooble e Indeed** (Indeed: "24.505 €/anno" per junior software developer a Milano). Canale alternativo: le famiglie "lavora con noi [azienda]" e "[azienda] assume", dove si posizionano anche testate come Ticonsiglio e Concorsando. | WebSearch 2026-11-20 |
| G5 Rischio legale gestibile | sì per i siti carriere / no per i portali | [fatto] CGUE C-762/19 CV-Online (proprio su un motore di annunci di lavoro): l'estrazione è vietata se lede l'investimento del costitutore (quadro in 03-screening-mercato.md). Le API pubbliche degli ATS sono pensate per diffondere gli annunci. [stima] Indicizzare i siti carriere delle singole aziende con rimando all'annuncio originale = rischio basso-medio. Fare scraping di Indeed, LinkedIn o Subito = zona rossa. GDPR: escludere i nomi dei recruiter. Per N11, etichettare un annuncio di un'azienda **nominata** come "fantasma" comporta un **rischio di diffamazione o concorrenza sleale** [stima, nessuna fonte specifica trovata]: si possono mostrare solo fatti misurati (es. "online da 140 giorni, ripubblicato 6 volte"), non giudizi. | https://www.scl.org/12290-cjeu-search-engine-copying-of-databases-infringes-sui-generis-right-where-it-adversely-affects-database-maker-investment/ ; https://developers.greenhouse.io/job-board.html |

**Concorrenza pubblica gratuita**

| Servizio | Cosa offre | Fonte |
|---|---|---|
| **SIISL** (Ministero del Lavoro) | [fatto, dal codice del frontend] Pubblicazione delle offerte da parte delle aziende ("Accedi per pubblicare offerte di lavoro"), "matching con offerte di lavoro" sulla base delle competenze, notifiche e preferiti nell'area utente. Dal 1/4/2026 accoglie anche le Comunicazioni Obbligatorie, in via sperimentale. Pubblicare le vacancy **non** è un obbligo. | https://siisl.lavoro.gov.it/ ; https://www.lavoro.gov.it/stampa-e-media/comunicati/pagine/dal-primo-aprile-2026-comunicazioni-obbligatorie-anche-su-siisl |
| **Cliclavoro** | Portale informativo del Ministero (guide, concorsi, servizi con SPID). È anche il nodo di interconnessione previsto dall'art. 6, c.3. | https://www.cliclavoro.gov.it/ |
| MyANPAL | Non raggiungibile da curl (nessuna risposta). | — |
| Portali regionali del lavoro | **Non verificati.** | — |

**Incumbent privati**

| Nome | URL | Modello | Punti deboli osservati |
|---|---|---|---|
| Indeed | https://it.indeed.com/recruiting/prezzi | Costo per candidatura avviata (asta) | App con **4,61 su 14,4 M** voti (globale). Recensioni: "sono anni che la uso e MAI ho ricevuto risposta", alert inutili, "riempiono messaggi con soliti annunci per lungo periodo". https://play.google.com/store/apps/details?id=com.indeed.android.jobsearch |
| Jooble (aggregatore) | https://it.jooble.org/partner/ppc | 50-150 €/mese per l'employer, oppure pagamento per candidato | Medie salariali poco credibili negli snippet (es. "Stipendio medio: €9.485/annuale" per junior front-end a Milano). |
| Jobrapido (aggregatore) | https://it.jobrapido.com/ | "Pubblica un annuncio", alert via email | Status autorizzativo non trovato. |
| Glassdoor | https://play.google.com/store/apps/details?id=com.glassdoor.app | Recensioni e stipendi | 4,58 su 748k voti. Un utente apprezza di poter vedere "da quanto tempo è attiva la ricerca", cioè proprio il segnale di N11. |
| Ticonsiglio "Cerco lavoro con l'AI" | https://www.ticonsiglio.com/cerco-lavoro/ | Gratis, email ogni 2-3 giorni | **Filtra già le proposte "di dubbia affidabilità"**: copre in parte N11, gratis. |
| **InfoJobs Italia** | https://www.infojobs.it/ | — | [fatto] **Chiuso**. La homepage dice "Questa piattaforma è ufficialmente chiusa e non più disponibile". La chiusura era annunciata entro il 31/12/2025, nel contesto della strategia Adevinta. https://www.ilfattoquotidiano.it/2025/11/12/infojobs-chiusura-italia-lavoro-notizie/8190997/ |

**Segnali di domanda [stima]**
- **Soglia "comuni": SUPERATA.** "offerte di lavoro [città]": **20 città su 20 con 10 suggerimenti su 10**. Le varianti sono rivelatrici: "da privati", "**no agenzie**", "**contatto diretto**", "negli ultimi 3 giorni", "da ieri", "1200 euro". C'è domanda di annunci *diretti* e *freschi*, cioè quello che darebbero i siti carriere.
- **Famiglie: SUPERATA.** "lavora con noi [azienda]" (rai, poste, ferrovie, lidl, eurospin, conad; espansioni a-z con **200** suggerimenti unici); "[x] assume" (**182** suggerimenti a-z); "stipendio [ruolo]" (sviluppatore junior, java, full stack…); "offerte di lavoro con stipendio [alto / 2000 euro / autista]".
- **N11:** "annunci fantasma" ha solo 4 varianti ("…linkedin", "lavoro fantasma", "di lavoro fantasma"); "annunci di lavoro falsi" ne ha 7 (inclusa "perché le aziende pubblicano annunci di lavoro falsi"); "ghost job" compare soprattutto in inglese. **La domanda esplicita per N11 è piccola**: è un attributo del prodotto, non un prodotto a sé.
- [fatto, screening precedente] Indeed Italia: quota di annunci con retribuzione passata dal 26% (lug. 2025) al 61% (lug. 2026). https://www.euronews.com/business/2026/09/08/eu-pay-transparency-are-job-ads-finally-getting-honest-about-salaries
- Google Trends: non raggiungibile.

**Segnali di dolore**
- [fatto] Greenhouse: fino al **22%** degli annunci del 2024 (USA, Regno Unito, Germania) non aveva una reale finalità di assunzione. Studio sul Regno Unito: **34% di oltre 91.000** annunci falsi. Ontario: dall'1/1/2026 le aziende con più di 25 dipendenti devono dichiarare se la posizione è davvero aperta (Il Post, 18/2/2026). **Dati italiani sugli annunci fantasma: non trovati.** https://www.ilpost.it/2026/02/18/annunci-di-lavoro-falsi/
- [fatto] Sondaggio ilCVperfetto su oltre 1.000 persone in cerca di lavoro: il **58-59%** ritiene che un recruiter veda meno del 25% delle candidature online (Avvenire, 19/3/2026). https://www.avvenire.it/economia/lavoro/cresce-la-frustrazione-tra-i-candidati_105888
- [fatto] Fanpage: candidature di prova "tutte rimaste senza risposta"; consiglio di verificare l'annuncio sul sito aziendale. https://www.fanpage.it/innovazione/tecnologia/mandi-il-curriculum-e-nessuno-ti-risponde-siamo-entrati-nella-trappola-dei-ghost-job/
- [fatto] Recensioni Indeed citate sopra ("MAI ho ricevuto risposta", annunci riproposti a lungo).
- Contro: i voti medi delle app sono alti (Indeed 4,61, Glassdoor 4,58). Reddit: non trovato.

**Test chatbot (C6)**
- "stipendio sviluppatore junior Milano annunci" → la risposta AI di WebSearch dà **cifre concrete**: circa 24-28k € lordi; Indeed 24.505 €; esempi di RAL da annunci (24-26k, 27-31k, 26-28k). Secondo la regola pre-registrata, per la parte "retribuzioni" il bisogno è **già soddisfatto**.
- [stima] "quali annunci per [ruolo] a [città] sono ancora veri e aperti oggi" non è risolvibile da un chatbot senza un indice fresco e uno storico. Su questo N11 è resistente. Ticonsiglio però dichiara già un filtro AI sulle offerte dubbie.

**Criteri di scarto pre-registrati**

| Criterio | Esito | Evidenza |
|---|---|---|
| L'aggregazione di annunci richiede autorizzazione ANPAL/ministeriale (G1) | **Incerto** | La norma colpisce la raccolta di CV, la preselezione e la "gestione dell'incontro". L'esenzione per i siti vale solo senza lucro. Per un motore puro con rimando all'annuncio non c'è una norma esplicita, e lo status di Jobrapido e Indeed non è stato trovato. Va chiesto un parere legale. |
| Lo scraping dei siti carriere è vietato dai termini e protetto dal *sui generis* (G5) | **Non scattato per i siti carriere/ATS** (API pubbliche Greenhouse); **scattato per i portali** (Indeed/LinkedIn: da non toccare). Termini di Workday e SuccessFactors non verificati. |
| Nessun utente o azienda paga per qualcosa di simile in Italia | **Non scattato per il B2B** (Jooble 50 €/mese, Indeed, Subito); **scattato per il B2C N11** (nessun pagatore trovato). |
| Concorrenza pubblica che copre la stessa funzione | **Non scattato.** SIISL ha offerte e matching, ma non indicizza i siti carriere e non segnala annunci fantasma [stima, dal codice]. |
| Soglia C2 | **Superata** per "lavoro [città]" e "lavora con noi [azienda]"; **non superata per N11** da solo. |

**Motivo più forte per scartarlo:** **InfoJobs, con dietro Adevinta, ha chiuso in Italia a fine 2025.** Il mercato italiano degli annunci di lavoro è difficile anche per un operatore storico. Per monetizzare bisogna vendere agli employer (Jooble a 50 €/mese, Indeed a costo per candidatura), cioè entrare proprio nella zona grigia di G1 e in concorrenza diretta con Indeed. Inoltre: le retribuzioni sono sempre più dichiarate (61% su Indeed) e i chatbot le rispondono già; le pagine programmatiche ruolo × città sono già di Jooble e Indeed; il rilevatore di annunci fantasma ha domanda esplicita minima e un rischio reputazionale/legale quando "accusa" un'azienda nominata.

**Note per lo scoring (indicative)**

| Criterio | Punteggio | Perché |
|---|---|---|
| C1 Dolore | 3 | Dolore documentato all'estero (22-34% di annunci fantasma) e in Italia (59% pensa che le candidature non siano lette); recensioni Indeed. Ma le app hanno voti alti e mancano dati italiani sugli annunci fantasma. |
| C2 Domanda | 4 | 20 città su 20 con 10 suggerimenti, "lavora con noi" con 200 e "assume" con 182. Domanda generica e presidiata; N11 da solo è piccolo. |
| C3 Monetizzazione | 2 | B2B esistente (50-150 €/mese) ma con G1 incerto e Indeed dominante. B2C non provato in Italia. |
| C4 Vantaggio dati | 4 | Migliaia di siti carriere con ATS diversi, deduplicazione, storico per rilevare annunci fantasma: lavoro continuo, difficile da copiare. Mappa degli ATS italiani non fatta, quindi non arriva a 5. |
| C5 Distribuzione | 2 | Le SERP osservate su stipendi e città sono già di Indeed e Jooble. "lavora con noi [azienda]" è più aperta [stima]. |
| C6 Resistenza AI | 3 | Gli stipendi hanno già una risposta AI; "annuncio aperto/vero oggi" no. |
| C7 Difendibilità | 3 | Lo storico degli annunci per azienda (durata, ripubblicazioni) si accumula ed è il cuore di N11. |
| C8 Debolezza incumbent | 3 | InfoJobs chiuso, quindi c'è un vuoto. Ma Indeed è fortissimo (14 M voti) e Ticonsiglio offre già un alert AI gratuito. |
| C9 Tempo alla prima evidenza | 3 | Bastano pochi giorni per indicizzare 200-500 siti carriere via API ATS. Misurare il traffico organico richiede però mesi, e prima va chiarito G1. |

Penalità suggerite: rischio legale residuo (G1 e affermazioni su aziende nominate), da −3 a −5.

## Nuovi candidati emersi
Massimo 3, solo B2C, scelti tra gli 8 proposti dagli agenti. Criterio di scelta: segnale di domanda misurato + frammentazione delle fonti + nessun ambito escluso.

| ID | Candidato | Perché | Da verificare |
|---|---|---|---|
| N16 | **Calcolatore della quota RSA**: quanto paga la famiglia, quanto il Comune (integrazione ISEE) e quanto il SSN, comune per comune, con detrazioni e casi Alzheimer | Unisce il dolore più forte del gruppo (#9: retta media oltre 2.000 €/mese) a regole comunali frammentate. È uno strumento, non un elenco, quindi regge contro l'AI. "costo rsa [città]" compare in 18 città su 20 [stima]. | Pagatore: stesso problema di #9. Lead legali vietati (art. 37 del Codice deontologico forense). |
| N17 | **Tasse universitarie, fasce ISEE e scadenze per ateneo** | 199 varianti nell'autocompletamento a-z, declinate per ateneo [stima]. Le regole di ogni ateneo stanno in PDF diversi e cambiano ogni anno. Il target sono i genitori e gli studenti. | Pagatori (affiliazione alloggi e servizi agli studenti?); concorrenza di testate e siti degli atenei. |
| N18 | **Interpelli e supplenze scolastiche per provincia** | Le query si declinano per provincia; il gruppo Telegram "Personale ATA" ha 9.267 membri. Le fonti sono frammentate (oltre 100 uffici scolastici provinciali e migliaia di scuole). Servono alert, cioè dati freschi. | Pagatori (corsi per docenti/ATA, premium); termini d'uso dei siti delle scuole. |

Proposte non promosse: agevolazioni TARI per comune (pagatore debole, bonus sociale nazionale ARERA), detraibilità nel 730 delle spese per i figli (contenuto statico, coperto da testate e AI), bacheca per animatori dei centri estivi (G1 da verificare, stagionale), "percorso di tutela" quando il CUP non rispetta i tempi (pagatore assente), selezioni di aziende partecipate (al confine con #18).
