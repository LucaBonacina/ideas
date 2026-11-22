---
tipo: concorrente
nome: "Cercanido"
paese: "Italia"
attore: "privato"
categoria: "marketplace/directory (catalogo da fonti aperte, progetto personale)"
url: "https://cercanido.it/"
fascia: "0-3 (comprese sezioni primavera e servizi integrativi; nessuna scuola dell'infanzia)"
copertura: "9.560 strutture da 461 fonti e 750 raccolte di dati, catalogo del 21/11/2026, 'copertura parziale' (pagina Fonti)"
modello_ricavo: "Nessuno: progetto personale senza pubblicità né compensi dalle strutture"
stato: "attivo (online dal 9/11/2026, aggiornamenti il 13, 16, 19 e 21/11)"
verificato_il: "2026-11-22"
tags: [concorrente]
---
# Cercanido

## In breve
Catalogo gratuito di nidi e servizi educativi 0-3 in Italia, online dal **9 novembre 2026**, con ricerca, mappa, schede e **API** di sola lettura [fatto]. È gestito da **una persona fisica senza partita IVA** (nome dichiarato nelle condizioni d'uso, non riportato qui), "senza compensi da strutture", senza pubblicità, account o newsletter [fatto]. Il punto notevole è la **tracciabilità**: ogni gruppo di campi della scheda indica fonte, data di acquisizione, data di riferimento e licenza [fatto]. Mostra che il catalogo 0-3 da dati sparsi è realizzabile da una sola persona in poche settimane [stima].

Approfondimento della sessione P11 (22/11/2026): funzioni, copertura, fonti, aggiornamento, gestore, ricavi, segnali d'uso e lacune rispetto a [[Bisogni e funzioni]].

## Funzioni per i genitori
- **Ricerca** per nome, comune o indirizzo, con suggerimenti mentre si digita [fatto, privacy §2].
- **Filtri**: tipologia (nove voci, vedi sotto), gestione (pubblica, privata, convenzionata), regione, provincia, comune [fatto, codice del sito].
- **Mappa** OpenStreetMap con gruppi numerati; **elenchi per regione, provincia e comune** navigabili senza mappa (dal 13/11) [fatto, Novità].
- **Scheda**: nome, indirizzo, tipologia, sito, e-mail, telefono, cellulare, coordinate, "Condividi", "Preferito"; sezione "Fonti e provenienza" per ogni gruppo di dati [fatto, scheda di esempio]. Il codice del sito prevede anche icone per **mensa** e **spazio esterno** e un campo **orari** [fatto, codice; non visti in una scheda, quindi presenza reale da verificare].
- **Capienza autorizzata** quando la fonte la riporta, con l'avvertenza che "non indica posti disponibili" [fatto, condizioni §2].
- **Preferiti** salvati nel browser (localStorage), senza account (dal 19/11) [fatto, Novità e privacy §3].
- **API** pubbliche di sola lettura con documentazione interattiva (/docs, /redoc, framework FastAPI) [fatto, privacy §7]; la documentazione non è su cercanido.it/docs (risponde con pagina di errore) e l'indirizzo del servizio API non è dichiarato: non letta. Per "usi intensivi o riutilizzo sistematico" chiede di contattare il gestore; "la disponibilità tecnica di un endpoint non attribuisce una licenza generale" [fatto, condizioni §4].
- **Assenti per scelta**: rette, posti liberi, recensioni, prenotazioni, iscrizioni, pagamenti, account, newsletter [fatto, condizioni §1].

## Funzioni per i gestori
- Segnalazioni e correzioni via e-mail con collegamento alla scheda e fonte verificabile; "una segnalazione non modifica automaticamente il catalogo e non attribuisce il controllo della scheda" [fatto, condizioni §3].
- **Nessuna rivendicazione della scheda**, nessun pannello, statistiche o contatti dalle famiglie [fatto].

## Copertura
- **9.560 strutture** al 21/11/2026 (9.566 al 16/11: la diminuzione viene dalla deduplicazione) [fatto, pagina Fonti e Novità].
- **Per regione** (pagina Strutture, 22/11): Lombardia 2.754, Lazio 987, Toscana 958, Veneto 912, Campania 690, Emilia-Romagna 637, Piemonte 606, Puglia 591, Sicilia 246, Umbria 225, Friuli-Venezia Giulia 204, Liguria 153, Sardegna 145, Marche 125, Abruzzo 104, Calabria 104, Trentino-Alto Adige 77, Basilicata 19, Valle d'Aosta 15, Molise 8 [fatto]. Milano città: 446 [fatto].
- **Tipologie** (filtro): nido d'infanzia, micronido, nido aziendale, nido in famiglia, servizio domiciliare, sezione primavera, spazio gioco, centro bambini e famiglie, altro servizio integrativo [fatto, codice del sito]. **Il 3-6 non c'è**: nessuna voce "scuola dell'infanzia", il sito si presenta come catalogo "0-3 anni" [fatto].
- **Confronto con ISTAT**: circa 14.570 nidi e servizi integrativi nel 2023/24 (vedi [[ISTAT - Nidi e servizi integrativi per la prima infanzia]]), quindi copertura di circa due terzi [stima]. La distribuzione è molto squilibrata: la Lombardia, che ha un elenco regionale aperto ([[Regione Lombardia - Strutture di offerta sociale prima infanzia]]), pesa il 29% del catalogo; Emilia-Romagna (637) e Marche (125) sembrano sotto la loro offerta reale, Molise e Basilicata quasi assenti [stima, confronto con le note `Regioni/`].

## Fonti usate e come le dichiara
- Pagina **"Fonti, licenze e attribuzioni"**: 461 fonti, 750 raccolte di dati; per ogni fonte sito, documento consultato, licenza, data di verifica e "note di Cercanido" sulle elaborazioni [fatto].
- **Composizione** (conteggio sui domini leggibili nella pagina, 343 su 461): 85 domini comunali, 6 regionali, circa 250 altri, in gran parte **siti delle singole strutture** e dei gestori, più portali open data, Overture Maps, ANNCSU, ISTAT, ARPA FVG (archivio radon del 2016, usato per le sedi dei nidi) [fatto + stima sul conteggio].
- **Licenze**: la dicitura "Non indicata nelle informazioni raccolte" compare 610 volte; licenze aperte dichiarate solo per una cinquantina di fonti (soprattutto CC BY 4.0, IODL 2.0, CC BY 3.0) [fatto, conteggio sulla pagina]. Quindi la maggior parte delle schede si basa su pagine web senza licenza esplicita [stima].
- **Scheda**: per ogni gruppo di campi mostra dominio della fonte, "Acquisito il", "Data di riferimento", "Licenza dichiarata", collegamenti alla fonte e alla licenza [fatto, scheda Campobasso, dato da Overture Maps acquisito il 26/10/2026].
- La privacy (§6) dichiara la base dei dati delle strutture: "elenchi e atti di enti pubblici, dataset pubblici e siti delle strutture", con recapiti "professionali" [fatto].

## Frequenza di aggiornamento
- **Interfaccia**: cinque rilasci in 13 giorni (9, 13, 16, 19, 21 novembre) [fatto, Novità].
- **Catalogo**: data di preparazione cambiata dal 16/11 al 21/11 [fatto]. Le **date di verifica delle fonti** sono però quasi tutte del 25-27 ottobre 2026 (61 su 63 date leggibili), con poche al 2 e 6 novembre [fatto, conteggio sulla pagina Fonti]: finora il catalogo è stato rielaborato (deduplicazione, indirizzi) più che riacquisito [stima]. Nessuna periodicità di aggiornamento dichiarata; le condizioni (§6) escludono "un aggiornamento in tempo reale di tutte le fonti" [fatto].

## Chi c'è dietro
- Una **persona fisica senza partita IVA**, "progetto personale finanziato dal gestore, senza compensi da strutture o altri soggetti e senza promozione di una sua attività professionale o commerciale" [fatto, condizioni §1]. Nessuna società, nessun finanziamento dichiarato.
- **Infrastruttura**: Vercel (sito e statistiche), Railway (API), Neon/Databricks a Francoforte (database), OVHcloud (posta e DNS), tessere OpenStreetMap [fatto, privacy §7]. Sito Next.js, API FastAPI [fatto]. Cura giuridica sopra la media: informativa con art. 14 GDPR per chi compare nel catalogo, versioni dei documenti legali in JSON [fatto].
- Il progetto è indipendente da questo lavoro ([[Decisioni del progetto]], 20/11/2026).

## Modello di ricavo e prezzi
- **Nessuno** [fatto]. Le condizioni (§8) prevedono che "l'introduzione di attività economiche, pagamenti, pubblicità o nuove funzioni richiederà una nuova valutazione": un cambio di modello non è escluso [fatto + stima].

## Traffico e segnali d'uso
- Usa Vercel Web Analytics, ma le statistiche non sono pubbliche [fatto, privacy §3].
- Sito indicizzabile (robots.txt aperto, sitemap con le pagine territoriali) [fatto].
- **Nessuna menzione esterna trovata**: due ricerche web ("cercanido", "cercanido.it asili nido catalogo") non restituiscono il sito né articoli o discussioni [fatto, 22/11/2026]. Nessuna recensione, pagina social o rassegna stampa trovata. Con 13 giorni di vita, l'uso è presumibilmente minimo [stima].

## Storia
- 9/11/2026 "Il punto di partenza"; 13/11 navigazione per territorio; 16/11 mappa a gruppi, deduplicazione, indirizzi uniformi; 19/11 preferiti; 21/11 ricerca su telefono più rapida e altre sei schede doppie riunite [fatto, Novità].

## Cosa manca rispetto a [[Bisogni e funzioni]]
| Funzione | Cercanido |
|---|---|
| F01 Elenco completo 0-6 con fonte per campo | ◐ fonte per campo sì; solo 0-3, circa due terzi dei servizi [stima], nessuna scuola dell'infanzia |
| F02 Scheda con autorizzazione, accreditamento, Bonus nido, età, orari, calendario | ◐ tipologia, contatti, capienza dove nota; nessuno stato di autorizzazione o abilitazione Bonus nido |
| F03 Rette | ✗ per scelta |
| F04 Calcolatore del costo netto | ✗ |
| F05 Calendario delle scadenze | ✗ |
| F06 Posti liberi | ✗ per scelta (solo capienza) |
| F07 "Come si entra" per comune | ✗ |
| F08 Rivendicazione della scheda | ✗ esplicitamente esclusa |
| F09 Filtri per segmento (pedagogia, lingua, inclusione) | ✗ |
| F10 Pagina "2-3 anni" | ◐ le sezioni primavera sono una tipologia filtrabile, senza anticipi e costi |
| F11 Contenuti in altre lingue | ✗ solo italiano |
| F12 Preferiti e confronto | ◐ preferiti sì, confronto no |
| F13 Richiesta di informazioni e visita | ✗ per scelta |
| F14 Pacchetto a pagamento per i gestori | ✗ |
| F15 Guida al Bonus nido | ✗ |
| F16-F20 Recensioni, lista d'attesa unica, gestionali, lavoro, vigilanza | ✗ |
In sintesi copre solo la parte anagrafica di F01-F02, con la migliore tracciabilità delle fonti trovata in Italia.

## Punti di forza e lacune
- Forza: provenienza, data e licenza per ogni gruppo di campi; informativa GDPR curata [fatto].
- Forza: API aperte e navigazione per territorio indicizzabile [fatto].
- Lacuna: solo 0-3; copertura squilibrata tra regioni; molte schede da siti senza licenza; nessun dato su rette, posti, scadenze [fatto + stima].
- [stima] Sostenibilità incerta: progetto individuale senza ricavi e senza segnali d'uso visibili.

## Cosa ci insegna per l'Italia
1. Un catalogo 0-3 nazionale da fonti pubbliche, siti e Overture Maps si costruisce in settimane: **l'anagrafica non è un vantaggio competitivo** [stima].
2. Il modello "fonte, data e licenza per campo" è una buona pratica da copiare per la credibilità e per il GDPR [stima].
3. Cercanido come **fornitore di dati**: le condizioni non danno una licenza generale sulle API e rinviano alle licenze delle singole fonti, gran parte non indicate; un riuso sistematico richiede un accordo con il gestore [fatto + stima].
4. La differenza si fa sui dati che Cercanido esclude per scelta: rette, posti, scadenze, rivendicazione da parte dei gestori, 3-6 [stima].

## Fonti
- https://cercanido.it/ (curl) — 2026-11-20 e 2026-11-22
- https://cercanido.it/fonti (curl, conteggi su fonti, licenze, date) — 2026-11-22
- https://cercanido.it/novita (curl) — 2026-11-22
- https://cercanido.it/strutture, /strutture/lombardia, /strutture/lombardia/MI/milano (curl) — 2026-11-22
- https://cercanido.it/condizioni-uso (curl, versione del 9/11/2026) — 2026-11-22
- https://cercanido.it/privacy (curl, versione del 20/11/2026) — 2026-11-22
- https://cercanido.it/robots.txt e /sitemap.xml (curl) — 2026-11-22
- Codice JavaScript pubblico della pagina iniziale (elenco di tipologie e gestioni) — 2026-11-22
- https://cercanido.it/struttura/asilo-nido-i-pulcini-campobasso (curl, scheda di esempio) — 2026-11-20 e 2026-11-22
