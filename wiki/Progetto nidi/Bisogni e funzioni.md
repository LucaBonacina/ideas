---
tipo: progetto
tags: [progetto, nidi, bisogni, funzioni]
aggiornato: 2026-11-20
stato: prima versione, da verificare con le interviste
---
# Bisogni e funzioni

Le funzioni del prodotto si ricavano dai bisogni documentati, non il contrario (decisione del 2026-11-20, vedi [[Decisioni del progetto]]). Questa pagina collega ogni funzione ai bisogni che risolve, alla fonte dei dati che la rende possibile e ai concorrenti che già la offrono.

Basi:
- bisogni dei genitori: [[Bisogni genitori - sintesi]] (37 bisogni, codici G, SD, SB, SP, SO, SS), percorso in [[Percorso del genitore 0-6]];
- bisogni dei gestori: [[Bisogni gestori - sintesi]] (13 bisogni, codici GS), percorso in [[Percorso del gestore]];
- concorrenti: [[Concorrenti - matrice delle funzioni]], con [[Winnie]] e [[Cercanido]];
- fonti dei dati: [[Catalogo delle fonti]].

## In sintesi
1. **Il cuore del prodotto è l'informazione locale che oggi è dispersa o non esiste**: dove sono i servizi 0-6, quanto costano davvero al netto degli aiuti, quando scadono le iscrizioni, come si entra, dove ci sono posti. Sono i bisogni con la priorità più alta per un prodotto di informazione (G03, G06, G10, G07, G09, G04).
2. **Catalogare non basta.** Almeno quattro siti italiani nati nel 2026 catalogano già i nidi ([[Cercanido]] ne ha 9.566 con la fonte per ogni campo); [[MigliorAsilo]] ha quasi 30.000 schede e nessun uso. La differenza la fanno le funzioni che nessuno offre in Italia: **costo netto, scadenze, posti liberi, criteri d'accesso**.
3. **I dati più preziosi li hanno i gestori** (rette dei privati, posti liberi, orari, lingua, inclusione). Il prodotto deve dare ai gestori un motivo per aggiornarli: scheda gratuita, richieste di famiglie, e un pacchetto a pagamento che risolve i loro bisogni GS01, GS11, GS04.
4. **Molti problemi forti non sono di informazione** (malattie, ritardi INPS, sostegno scolastico, nidi serali, personale dei nidi). Il prodotto può renderli visibili prima della scelta, non risolverli: va detto chiaramente per non promettere troppo.

## Elenco delle funzioni
Classificazione: **I** = indispensabile (senza, il prodotto non risolve i bisogni principali) · **M** = importante (seconda fase) · **A** = accessoria o da valutare · **✗** = fuori perimetro.
"In Italia oggi" indica chi la offre già (dalla matrice dei concorrenti).

| ID | Funzione | Classe | Bisogni | Dati necessari e fonte | In Italia oggi |
|---|---|---|---|---|---|
| F01 | **Elenco completo 0-6 per zona**, con mappa, tipo di servizio e gestione, e per ogni campo la fonte e la data | I | G03, G02, G08 | Anagrafe MIM (3-6), registri regionali e comunali, elenchi USR (0-6); vedi [[Catalogo delle fonti]] | Parziale: Cercanido (solo nidi), Scuola in Chiaro (solo 3-6), mappa INPS (dietro SPID) |
| F02 | **Scheda della struttura**: autorizzazione e accreditamento, abilitazione al Bonus nido, età accolte, orari, calendario e chiusure, capienza, contatti | I | G02, G14, G15, G08, GS04, GS10 | Registri regionali e comunali; dati dichiarati dal gestore | Parziale (anagrafica senza orari né abilitazione) |
| F03 | **Rette e costi accessori**: tariffe comunali per fascia ISEE per i servizi pubblici; retta, pasti, iscrizione e condizioni di ritiro per i privati | I | G06, G18 | Avvisi e regolamenti comunali (scraping); dichiarazioni dei gestori | Nessuno (solo tabelle ISEE sparse nei siti comunali) |
| F04 | **Calcolatore del costo netto**: retta meno Bonus nido, misure regionali (es. Nidi Gratis) e comunali, in base a ISEE ed età | I | G04, G06, G07, SS3, GS11 | Regole INPS, misure regionali (note `Regioni/`), regole comunali | Nessuno in Italia; esiste all'estero (monenfant, StartingBlocks) |
| F05 | **Calendario delle scadenze per comune ed età**, con avvisi personali (iscrizioni al nido, scuola dell'infanzia a gennaio, Bonus nido, misure regionali) | I | G10, G21, G07 | Avvisi comunali e albi pretori (scraping), calendario MIM delle iscrizioni, INPS | Nessuno |
| F06 | **Posti liberi dichiarati e datati** dai gestori, con avviso alle famiglie interessate quando si libera un posto | I | G03, G11, G19, GS01, GS02 | Gestori (scheda rivendicata); in seguito gestionali | Nessuno in Italia; Winnie negli USA |
| F07 | **"Come si entra" per comune**: criteri e punteggi delle graduatorie, posti per fascia d'età, date, storico dei punteggi se pubblicato | I | G09, SS1, G11 | Regolamenti comunali e graduatorie pubblicate (scraping) | Nessuno (solo i singoli comuni, per i propri servizi) |
| F08 | **Rivendicazione gratuita della scheda** da parte del gestore, con verifica e aggiornamento | I | GS10, GS11, GS01 | Gestori | Winnie (USA); in Italia nessuno |
| F09 | **Filtri per segmento con bollino "riconosciuto da" contro "dichiarato dal gestore"**: approccio pedagogico (es. Montessori riconosciuto da ONM, Steiner-Waldorf), lingua (quanta e con chi), inclusione (accessibilità, esperienza con disabilità), orari estesi o turni | M | SP1, SP2, SB1, SD1, SO1, SO2 | Elenchi delle reti (note `Segmenti/`), anagrafe MIM (barriere architettoniche delle statali), dichiarazioni dei gestori | Solo Che Scuola (3 città) |
| F10 | **Pagina "2-3 anni"** per comune: sezioni primavera, anticipo alla scuola dell'infanzia, terzo anno di nido, con costi | M | G20 | Elenchi USR delle sezioni primavera, anagrafe MIM, regole comunali | Nessuno |
| F11 | **Contenuti in inglese e nelle lingue più diffuse** tra le famiglie straniere, con la spiegazione del sistema italiano | M | SB2, SS4, SS2 | Contenuti redazionali; normativa | Nessuno |
| F12 | **Preferiti e confronto affiancato** | M | G06, G08 | Dati delle schede | Scuola in Chiaro (3-6), Che Scuola |
| F13 | **Richiesta di informazioni e prenotazione della visita** tracciate | M | G08, GS02 | Calendario dei gestori | Nessuno (Winnie: richiesta libera) |
| F14 | **Pacchetto per i gestori a pagamento**: posti liberi in evidenza, richieste qualificate dalla zona, retta netta mostrata alle famiglie, segnale "abilitato Bonus nido", statistiche | M | GS01, GS11, GS04, GS02 | Funzioni F04, F06, F13 | Nessuno in Italia (riferimento di prezzo dei gestionali: 0-60 €/mese) |
| F15 | **Guida al Bonus nido e ai tempi INPS** (domanda, ricevute, ritardi) | M | G04, G05, GS07 | Normativa e messaggi INPS | Parziale (INPS, siti informativi) |
| F16 | **Recensioni verificate** delle famiglie | A | G08 | Famiglie | MigliorAsilo (circa 10 recensioni in tutta Italia: prova che la massa critica è difficile) |
| F17 | **Lista d'attesa unica su più strutture** (pre-iscrizione) | A | G11 | Accordi con gestori o gestionali | Nessuno in Italia; CareforKids e Little Bird all'estero |
| F18 | **Integrazione con i gestionali** dei nidi per aggiornare in automatico posti e rette | A | GS13, F06 | Accordi con i fornitori (es. [[Kindertap]]) | Nessuno |
| F19 | **Bacheca di lavoro per educatori** | A | GS03 | Gestori | Nessuno specializzato |
| F20 | **Esiti di vigilanza e qualità** | A | G08 | Non pubblici in Italia | Nessuno |
| — | Gestionale operativo (diario, presenze, pasti), pagamento delle rette, iscrizione con graduatoria ai servizi comunali | ✗ | G16, G17, GS09 | — | Già offerti da gestionali e comuni |

## Primo perimetro (proposta)
- **Su tutta Italia, da subito:** F01 ed F02 con i dati pubblici disponibili, dichiarando la copertura per regione (vedi [[Catalogo delle fonti]]), più F08 per far crescere le schede.
- **In una o due regioni pilota, dove i dati locali sono accessibili:** F03, F04, F05, F06 e F07. La Lombardia è la candidata naturale (registro aperto, misura Nidi Gratis Plus, molti nidi privati); la Toscana la seconda (elenco dei servizi Nidi gratis, schede comunali di Firenze). Il perimetro nazionale resta l'obiettivo: le funzioni locali si estendono regione per regione.
- **Da verificare prima di costruire:** che i gestori aggiornino davvero rette e posti (esperimento di [[I-H22b-1 Nidi e agevolazioni per comune pagato dai nidi privati]]) e che le famiglie usino il calcolatore e il calendario (interviste).

## Cosa resta da fare
1. **Interviste**: 15-20 genitori (più 3-5 per segmento) con la [[Traccia di intervista genitori]] e 12-15 gestori con la [[Traccia di intervista gestori]]. Servono a confermare frequenza, gravità e soddisfazione dei bisogni e quindi le classi delle funzioni.
2. **Approfondire [[Cercanido]]**, il concorrente più vicino (rimandato a dopo il 22 novembre per il limite di utilizzo).
3. **Richieste di dati** (accesso civico): INPS, ISTAT, MIM e i registri regionali chiusi, elencate nel [[Catalogo delle fonti]].
