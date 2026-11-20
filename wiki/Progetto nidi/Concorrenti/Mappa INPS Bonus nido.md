---
tipo: concorrente
nome: "Mappa INPS delle strutture educative (Bonus nido), Portale della Famiglia e della Genitorialità"
paese: "Italia"
attore: "pubblico"
categoria: "portale pubblico"
url: "https://serviziweb2.inps.it/AS0207/PortaledelleFamiglie/"
fascia: "0-3 (nidi, micronidi, sezioni primavera, spazi gioco, servizi educativi domiciliari)"
copertura: "tutte le strutture 0-3 pubbliche e private con titolo abilitativo comunicate dagli enti locali (obbligo di legge dal 1/7/2026); numero totale non pubblicato"
modello_ricavo: "nessuno: servizio pubblico gratuito, finanziato con fondi PNRR (Next Generation EU)"
stato: "attivo (mappa online dal 6/10/2026)"
verificato_il: "2026-11-20"
tags: [concorrente]
---
# Mappa INPS delle strutture educative (Bonus nido)

## In breve
Dal 6 ottobre 2026 il **Portale della Famiglia e della Genitorialità** dell'INPS ha, nella sezione "Servizi vicino a me", una mappa geolocalizzata delle strutture educative 0-3 pubbliche e private autorizzate (messaggio INPS 3164/2026). I dati vengono dall'**Agenda Asili Nido**, la banca dati che l'INPS usa per istruire il Bonus nido. Dal 2026 gli enti locali sono obbligati per legge ad alimentarla: nel 2026/27 con un file Excel, dal 2027/28 tramite la PDND (circolare 93/2026). Per vedere la mappa bisogna autenticarsi con SPID livello 2, CIE, CNS o eIDAS, quindi i motori di ricerca non la indicizzano. È un'**anagrafe** delle strutture: niente rette, posti liberi, foto, recensioni o iscrizioni.

## Funzioni per i genitori
Non ho potuto usare la mappa: serve SPID, e `serviziweb2.inps.it/AS0207/PortaledelleFamiglie/` risponde 302 verso `loginSPID.jsp` (curl, 2026-11-20). Le funzioni sono ricostruite da documenti INPS e articoli.

| Funzione | Esito | Fonte |
|---|---|---|
| Ricerca per posizione (geolocalizzazione) | [fatto] "nuovo servizio di geolocalizzazione, che consente di visualizzare le strutture educative pubbliche e private presenti sul territorio nazionale" | messaggio INPS 3164 del 6/10/2026 |
| Ricerca per provincia | [fatto, fonte secondaria] "asili nido pubblici e privati" per provincia o geolocalizzazione | informazionefiscale.it, 8/10/2026 |
| Filtri (tipologia, gestione, età) | non trovato | — |
| Mappa | [fatto] sì, dentro "Servizi vicino a me" | messaggio 3164/2026 |
| Scheda struttura | [stima] probabilmente mostra i campi anagrafici dell'Agenda (vedi tabella dati); i campi effettivamente visibili non sono documentati | circolare 93/2026; quifinanza 29/9/2026 |
| Confronto, preferiti, avvisi | non trovato | — |
| Contatto, richiesta di visita, lista d'attesa, iscrizione | non trovato. La presenza in banca dati "non implica automaticamente che vi siano posti disponibili" | quifinanza, 29/9/2026 |
| Rette, simulatore di costo | non trovato per la retta della struttura. Il Portale rimanda al Bonus nido (fino a 3.600 €/anno) | informazionefiscale.it; circolare 123/2025 via quifinanza |
| Pagamento | non pertinente (si paga la struttura; l'INPS rimborsa col Bonus nido) | — |
| Recensioni | non trovato | — |
| Contenuti | [fatto] percorsi per "eventi della vita" (diventare genitori, crescita, disabilità); "servizi di altri enti", tra cui "scelta dell'asilo nido" e "scelta della scuola dell'infanzia" (schede informative) | news INPS 17/2/2026 |
| Altre mappe | [fatto] Mappa nazionale dei Centri per la famiglia (messaggio 3166/2026); "Servizi vicino a me" anche per centri vaccinali, consultori, farmacie, ospedali | informazionefiscale.it; scheda servizio INPS |
| Account e personalizzazione | [fatto] accesso con SPID ≥ 2, CIE 3.0, CNS, eIDAS; servizi INPS "personalizzati" in base al nucleo | messaggio 3164; news 17/2/2026 |
| App | [fatto] il Portale è dichiarato "accessibile anche da app". L'app **INPS mobile** (App Store) elenca "Bonus Nido" (domanda e stato) e "Portale Prestazioni Welfare", ma la descrizione non cita la mappa dei nidi | news INPS 17/2/2026; iTunes lookup id 433400878 |

## Funzioni per i gestori
- **Rivendicazione o modifica della scheda da parte del gestore:** non prevista. [fatto] Comunicano i dati gli **enti locali** (Comune, Unione di comuni, Ambito, Consorzio o altro ente che rilascia o valida il titolo abilitativo), non i gestori (circolare 93/2026, § 3.1).
- Le Direzioni regionali INPS caricano il file Excel degli enti nel 2026/27 [fatto]. Dal 2027/28 gli enti inseriscono e aggiornano i dati via PDND: nuove strutture, modifiche, cambi di gestore, nuove autorizzazioni o accreditamenti, sospensioni, cessazioni o revoche [fatto, circolare 93/2026, § 3.2].
- Lead, annunci di posti liberi, statistiche, iscrizioni, pagamenti: non trovati.

## Dati mostrati per ogni struttura e da dove li prende
| Campo (tracciato Agenda) | Fonte | Visibile sulla mappa? |
|---|---|---|
| Codice fiscale e "altri elementi identificativi" della struttura | ente locale (art. 1 c. 355-bis L. 232/2016) | non verificato |
| Denominazione, sede operativa (indirizzo, coordinate) | ente locale | [stima] sì (serve alla geolocalizzazione) |
| Tipologia: asilo nido, micronido, sezione primavera, spazio gioco, servizio domiciliare | ente locale | [fatto, secondaria] sì, secondo fiscoetasse |
| Modalità di gestione: pubblica, privata, concessione, appalto, scuola dell'infanzia con progetto | ente locale | non verificato |
| Soggetto gestore | ente locale | non verificato |
| Titolo abilitativo e "Rilasciata da (Ente)" | ente locale | non verificato |
| Rette, posti, orari, foto, progetto educativo, contatti | — | non presenti nel tracciato descritto dalla circolare |

L'Agenda conteneva già i dati 2025/26 "forniti all'Istituto dalle Regioni e dagli Enti territorialmente competenti" [fatto, circolare 93/2026, § 1]. Per la legge i dati servono anche alla **Commissione tecnica per i fabbisogni standard** [fatto]. Questo li lega al finanziamento dei comuni (LEP nidi) e dà agli enti un incentivo a comunicarli.

**Discrepanza di perimetro [fatto].** I comunicati INPS di settembre parlano di strutture "**convenzionate**". La circolare e il messaggio 3164 parlano invece di strutture "**autorizzate**" o "in possesso del titolo abilitativo", pubbliche e private. Non esiste una convenzione con l'INPS: il Bonus nido vale per ogni nido autorizzato. Il secondo perimetro, più ampio, è quello normativo.

## Modello di ricavo e prezzi
Nessuno. Servizio gratuito, progetto PNRR_1 "Creazione di una piattaforma integrata della genitorialità" (messaggio 3164/2026), con la dicitura "Finanziato dall'Unione Europea tramite Next Generation EU" sulla scheda servizio INPS. Costo del progetto: non trovato.

## Storia
- **5/9/2025, circolare INPS 123/2025** (attua il DL 95/2025, convertito dalla L. 118/2025): il Bonus nido si estende a micronidi, sezioni primavera e servizi integrativi (spazi gioco, servizi domiciliari) "abilitati e regolamentati a livello regionale". Restano esclusi centri per bambini e famiglie, servizi ricreativi, pre e post-scuola. Fino a 3.600 € per i nati dal 2024 con ISEE ≤ 40.000 €. Da gennaio 2026 la domanda vale fino all'agosto dei 3 anni del bambino [fatto, quifinanza].
- **17/2/2026:** presentazione del Portale della Famiglia e della Genitorialità a Palazzo Chigi: "40 prestazioni INPS" e "300 servizi di altre pubbliche amministrazioni", accesso con SPID o CIE [fatto, news INPS]. Rilascio con il messaggio 991 del 20/3/2026 [fatto, citato nel messaggio 3164].
- **30/4/2026, DL 62/2026 art. 6 c. 5-bis** (convertito dalla L. 112/2026): introduce il comma 355-bis. Dal 1/7/2026 gli enti locali comunicano all'INPS le strutture 0-3 abilitate, entro il 1/9/2026 la prima volta e poi entro il 1/9 di ogni anno [fatto, circolare 93/2026].
- **9/9/2026, circolare 93/2026:** istruzioni operative, file Excel transitorio, PDND dal 2027/28 [fatto, testo integrale letto in PDF].
- **11/9/2026:** comunicato INPS sulla mappa "nelle prossime settimane"; nel frattempo "gli utenti devono far riferimento agli elenchi comunali delle strutture accreditate" [fatto].
- **6/10/2026, messaggio 3164:** la mappa entra in "Servizi vicino a me". Lo stesso giorno arriva la mappa dei Centri per la famiglia (messaggio 3166) e il 7/10 gli Osservatori statistici (messaggio 3179) [fatto per il 3164; 3166 e 3179 da estratti di ricerca].

## Cosa dicono gli utenti
**Genitori**
- Recensioni o critiche specifiche sulla mappa dei nidi: **non trovate**. Una ricerca mirata (critiche, "non funziona", "incompleta") ha restituito solo articoli descrittivi. [stima] Lo strumento è recente e sta dietro login, e senza indicizzazione se ne parla poco.
- Articoli: tono informativo e positivo (QuiFinanza, InformazioneFiscale, OrizzonteScuola). QuiFinanza avverte che la presenza nella banca dati non significa che ci siano posti liberi e che la qualità dipende dagli enti locali.
- App **INPS mobile** (App Store Italia): **2,80/5 su 5.559 valutazioni**, versione 5.0.2 del 10/11/2026 (iTunes lookup, 2026-11-20). Tra le recensioni recenti l'unica che tocca i temi del Portale è sull'accesso: "se provo con spid mi fa scegliere il portale ma quando lo clicco schermata bianca" (un utente, 31/3/2026, feed RSS App Store).
- Google Play: pagina dell'app non trovata con curl (pacchetto non individuato), voto non verificato.

**Gestori**
- Non trovato. Sugli adempimenti scrivono stampa specializzata per enti locali (IPSOA, ItaliaOggi: "i comuni devono comunicare tutti i dati all'INPS") e la rete dei segretari comunali, non i gestori.

## Punti di forza e lacune
**Punti di forza**
- [fatto] Copertura per legge: ogni ente locale deve comunicare **tutte** le strutture 0-3 abilitate, pubbliche e private, e aggiornarle ogni anno. Comprende sospensioni e revoche.
- [fatto] Dato "di fonte" (titolo abilitativo) con codice fiscale. Dal 2027/28 sarà interoperabile via PDND.
- [stima] Fiducia istituzionale e incentivo forte: la stessa banca dati decide se il Bonus nido viene pagato, quindi gli errori emergono.

**Lacune**
- [fatto] Dietro SPID: niente link condivisibili, niente SEO, niente consultazione rapida.
- [fatto] Solo 0-3: niente scuole dell'infanzia (3-6), né statali né paritarie.
- [fatto] Solo dati anagrafici: niente rette, posti liberi, orari, progetto educativo, foto, recensioni, liste d'attesa o iscrizione.
- [fatto] 2026/27 transitorio con Excel; l'INPS stessa rimanda agli elenchi comunali. [stima] La copertura reale varia da ente a ente fino alla PDND.
- [stima] Non risulta un open data pubblico dell'Agenda. Se arrivasse (via PDND o open data INPS), sarebbe la base anagrafica ideale per un servizio terzo.

## Cosa ci insegna per l'Italia
1. **L'anagrafe nazionale 0-3 la sta già facendo lo Stato.** Conviene non competere sull'elenco ma riusarlo: chiedere l'accesso o una pubblicazione open data dell'Agenda, oppure ricostruire in parallelo dai registri regionali (es. Lombardia).
2. **Lo spazio libero è tutto ciò che l'INPS non mostra:** rette, posti liberi, open day, progetto educativo, foto, esperienze dei genitori, e la fascia 3-6 nello stesso strumento.
3. **La barriera SPID è un vantaggio per chi è indicizzabile.** Chi cerca "asilo nido + comune" su Google non arriva alla mappa INPS.
4. **Il codice fiscale della struttura è la chiave d'unione.** Usarlo per collegare i dati INPS, i registri regionali e i dati dei gestori, e per far rivendicare la scheda solo ai titolari verificati.
5. **Il Bonus nido è un gancio forte per i genitori.** Mostrare per ogni struttura "ammessa al Bonus nido" (sì/no) è un'informazione che oggi solo l'INPS dà, e dietro login.

## Fonti
(accesso 2026-11-20)
- Circolare INPS n. 93 del 9/9/2026, testo integrale PDF: https://www.fiscoetasse.com/files/22412/circolare-n-93-del-09-09-2026.pdf (pagina INPS: https://www.inps.it/it/it/inps-comunica/atti/circolari-messaggi-e-normativa/dettaglio.circolari-e-messaggi.2026.09.circolare-numero-93-del-09-09-2026_15363.html, testo caricato via JS)
- Messaggio INPS n. 3164 del 6/10/2026, PDF: https://ildiritto.it/wp-content/uploads/2026/07/Messaggio-n.-3164-del-06-10-2026.pdf
- INPS, "Bonus nido: una mappa per geolocalizzare le strutture convenzionate", 11/9/2026: https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-una-mappa-per-geolocalizzare-le-strutture-convenzionate.html
- INPS, "Bonus nido: al via la banca dati nazionale delle strutture convenzionate", 9/9/2026: https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-al-via-la-banca-dati-nazionale-delle-strutture-convenzionate.html
- INPS, "Presentato il nuovo Portale della Famiglia e della Genitorialità", 17/2/2026: https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.02.presentato-il-nuovo-portale-della-famiglia-e-della-genitorialit.html
- Scheda servizio INPS: https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.portale-delle-famiglie.portale-delle-famiglie.html
- Redirect SPID: https://serviziweb2.inps.it/AS0207/PortaledelleFamiglie/
- InformazioneFiscale, 8/10/2026: https://www.informazionefiscale.it/bonus-famiglia-servizi-asili-mappa-inps-novita
- QuiFinanza, 29/9/2026: https://quifinanza.it/fisco-tasse/bonus-fiscali/bonus-nido-2026-2027-mappa-strutture-convenzionate/1016716/
- QuiFinanza, 11/10/2026: https://quifinanza.it/info-utili/inps-portale-famiglie-asili-nido-bonus/1019151/
- QuiFinanza sulla circolare 123/2025: https://quifinanza.it/fisco-tasse/bonus-fiscali/bonus-asilo-nido-micronidi-sezioni-primavera/927398/amp/
- FiscoeTasse, campi del tracciato: https://www.fiscoetasse.com/new-rassegna-stampa/4476-asili-nido-i-dati-che-contano-per-il-contributo-inps.html
- App INPS mobile: https://itunes.apple.com/lookup?id=433400878&country=it · https://itunes.apple.com/it/rss/customerreviews/id=433400878/sortBy=mostRecent/json
- Rapporti precedenti: [[H22b Bucatore]], [[H22b Entusiasta]]
