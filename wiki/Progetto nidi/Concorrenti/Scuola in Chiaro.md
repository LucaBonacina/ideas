---
tipo: concorrente
nome: "Scuola in Chiaro (MIM, piattaforma UNICA)"
paese: "Italia"
attore: "pubblico"
categoria: "portale pubblico"
url: "https://unica.istruzione.gov.it/sic"
fascia: "3-19 (per la fascia 0-6 solo la scuola dell'infanzia 3-6; nessun servizio 0-3)"
copertura: "scuole dell'infanzia statali (13.485 plessi) e paritarie, comprese le comunali (7.876), a.s. 2026/27, open data MIM; escluse le province autonome di Trento e Bolzano e la Valle d'Aosta"
modello_ricavo: "nessuno: servizio pubblico gratuito"
stato: "attivo"
verificato_il: "2026-11-20"
tags: [concorrente]
---
# Scuola in Chiaro (MIM)

## In breve
Scuola in Chiaro è il motore di ricerca del Ministero dell'Istruzione e del Merito (MIM) per le scuole statali e paritarie. Oggi sta dentro UNICA (`unica.istruzione.gov.it/sic`); la vecchia `cercalatuascuola.istruzione.it` reindirizza alle stesse schede. Per la fascia 0-6 copre **solo la scuola dell'infanzia** (codice "AA"), statale e paritaria; le scuole comunali paritarie compaiono come paritarie. Ha ricerca per comune o raggio, mappa, confronto e preferiti. La scheda di un'infanzia è povera: contatti, alunni per età, sezioni per tempo scuola e, solo per le statali, PTOF, RAV e bilancio **dell'istituto comprensivo**. Non si consulta senza login, ma il motore è una SPA JavaScript con API JSON aperte. L'iscrizione all'infanzia **non** è online: si fa in segreteria su modulo cartaceo.

## Funzioni per i genitori
Fonti: lettura diretta dell'app Next.js (`/sic/_next/static/...`), chiamate alle API `https://unica.istruzione.gov.it/services/sic/api/v1.0/...` e lettura delle schede HTML (curl, 2026-11-20).

| Funzione | Esito | Fonte |
|---|---|---|
| Ricerca rapida (nome, codice meccanografico, comune) | [fatto] endpoint `ricerche/ricercaRapida` | JS dell'app |
| Ricerca avanzata | [fatto] filtri `tipoDiIstruzione` (AA = infanzia), `regione`, `provincia`, `comune`, `scuolaStatale`, `scuolaParitaria`, `denominazione`, `tempiScuola` (solo primaria e secondaria di I grado: per AA l'API risponde "must match ^(EE\|MM)$"), `indirizzo` + `raggio` (5 km di default) con geocodifica Google | JS; API `tipologiche/tempiScuola/AA` |
| Risultati | [fatto] esempio: Milano, infanzia → **274** scuole, 27 statali e 247 paritarie. Ogni risultato ha codice, nome, istituto, e-mail, telefono, indirizzo, coordinate, flag statale/paritaria | API `ricercaAvanzata?tipoDiIstruzione=AA&comune=F205` |
| Mappa | [fatto] marcatori distinti "Statale" e "Paritaria" (asset `mapMarkerStatale.svg`, `mapMarkerParitaria.svg`) | JS |
| Confronto tra scuole | [fatto] pagina `/confronta` ed endpoint `ricerche/confronto` | build manifest |
| Preferiti | [fatto] "Aggiungi ai preferiti" in scheda e pagina `/cercalatuascuola/preferiti/` | scheda HTML |
| Scheda | [fatto] vedi tabella dei dati | schede MIAA8F201G e MI1ADH500U |
| Avvisi, contatto via piattaforma, richiesta di visita, lista d'attesa | non trovati | — |
| Iscrizione online | [fatto] **no** per l'infanzia: "non è prevista l'iscrizione online… devono essere effettuate direttamente presso la segreteria della scuola prescelta" (modello cartaceo) | FAQ UNICA Iscrizioni |
| Rette e costi | non trovati (per le paritarie nessuna retta) | — |
| Recensioni | non trovate | — |
| App | [fatto] la scheda propone una "Mobile WebApp" via QR code. L'app **Unica Istruzione** (App Store, id 6467015205) è per gli studenti delle secondarie: **1,24/5 su 1.228 voti** e non comprende Scuola in Chiaro | scheda HTML; iTunes lookup |
| Account | [fatto] non serve né per consultare né per i preferiti: la pagina preferiti, aperta senza login, mostra "Hai 0 scuole preferite" ([stima] salvati nella sessione o nel browser) | pagina /cercalatuascuola/preferiti/ |

## Funzioni per i gestori
- La scheda si compone dalle banche dati MIM (Anagrafe scuole, Anagrafe nazionale studenti, RAV/PTOF sulla piattaforma SNV, Osservatorio Scuola Digitale). La scuola "gestisce" la scheda solo compilando questi adempimenti [fatto, dalle note "Dato aggiornato al 09/02/2026" e "Rilevazione… Osservatorio Scuola Digitale"].
- Il filtro sugli alunni viene disattivato dall'1 al 30 settembre "per le attività di aggiornamento dell'Anagrafe Studenti da parte delle scuole" [fatto, API `tipologiche/datiAbilitazioneFiltriRicerca`].
- Lead, annunci, posti liberi, statistiche: non trovati.

## Dati mostrati per ogni struttura e da dove li prende
| Campo (scuola dell'infanzia) | Statale | Paritaria | Fonte |
|---|---|---|---|
| Nome, codice meccanografico, indirizzo, e-mail, PEC, telefono, sito | sì (e-mail e sito sono dell'**istituto comprensivo**) | sì | Anagrafe scuole MIM |
| Dirigente scolastico | sì (nome) | no | Anagrafe |
| Alunni per fascia d'età (fino a 3 anni / 4 / 5+) | sì | sì | Anagrafe nazionale studenti, a.s. 2025/26 "aggiornato al 09/02/2026" |
| Sezioni per tempo scuola (es. "40 ORE SETTIMANALI": 2) | sì | sì | idem |
| Tempi scuola per l'a.s. 2026/27 | sì | sì | idem |
| Documenti, servizi, ambienti | "Dati non disponibili per la scuola" su entrambe le schede provate; per la statale le dotazioni digitali dell'intero istituto (5 plessi) | — | Osservatorio Scuola Digitale 2024/25 |
| PTOF 2025-2028, RAV, Rendicontazione sociale, Personale, Finanza, Edilizia | sì, **a livello d'istituto** | solo RAV ("Naviga il RAV" e PDF degli indicatori) | piattaforma SNV / PTOF |
| Rette, posti liberi, mensa, orari d'ingresso, foto, progetto pedagogico specifico | no | no | — |

Esempi letti: statale "Infanzia Mantegna" (MIAA8F201G, IC Via Linneo, Milano): 49 alunni, 2 sezioni a 40 ore. Paritaria "Asilo Rudolf Steiner" (MI1ADH500U, Milano): 56 alunni, 3 sezioni a 40 ore.

**Open data MIM** (`dati.istruzione.it`, licenza **IODL 2.0**, pubblicazione 18/06/2026 per l'anagrafe e 23/02/2026 per gli alunni) [fatto]:
- **Anagrafe scuole statali** (DS0400SCUANAGRAFESTAT), campi: AnnoScolastico, AreaGeografica, Regione, Provincia, CodiceIstitutoRiferimento, DenominazioneIstitutoRiferimento, CodiceScuola, DenominazioneScuola, IndirizzoScuola, CAPScuola, CodiceComuneScuola (catastale), DescrizioneComune, DescrizioneCaratteristicaScuola, DescrizioneTipologiaGradoIstruzioneScuola, IndicazioneSedeDirettivo, IndicazioneSedeOmnicomprensivo, e-mail, PEC, SitoWeb, SedeScolastica. File 2026/27: 50.273 plessi, di cui **13.485 "SCUOLA INFANZIA"** (conteggio mio).
- **Anagrafe scuole paritarie** (DS0410SCUANAGRAFEPAR): stessi campi senza istituto di riferimento. File 2026/27: 11.331 scuole, di cui **7.876 "SCUOLA INFANZIA NON STATALE"**; 5.310 con e-mail, 2.696 con sito. A Milano 248 paritarie, 162 delle quali hanno "COMUNALE" nel nome.
- **Alunni infanzia**: per classe e genere (DS1114 statali, DS1115 paritarie), per età (DS1116/1117), per cittadinanza (DS1118/1119), per tempo scuola (DS1120/1121). Ultimo anno: 2024/25.
- Copertura: "Dati nazionali con esclusione delle province autonome di Trento, Bolzano ed Aosta" (anagrafe).
- Formati: CSV, JSON, XML, RDF. Non contengono coordinate (le coordinate ci sono nell'API di Scuola in Chiaro).

## Modello di ricavo e prezzi
Nessuno. Servizio pubblico gratuito del MIM, con infrastruttura Sogei (analytics `nmws-analytics.sogei.it` nel codice) [fatto].

## Storia
- Scuola in Chiaro nasce dal portale `cercalatuascuola.istruzione.it` del MIUR [fatto: l'URL è ancora citato nel codice ed è un alias delle schede]. Anno di lancio: non verificato.
- Dal 2023 confluisce in **UNICA**, la piattaforma unica del MIM (footer "©2023"; l'app Unica esce il 21/11/2023) [fatto].
- La versione corrente della ricerca è una SPA Next.js ("0.0.1-rc.1" nel runtimeConfig) [fatto]. Le schede restano pagine Java server-side (jsessionid).

## Cosa dicono gli utenti
**Genitori**
- Recensioni specifiche su Scuola in Chiaro per l'infanzia: **non trovate** (nessuna ricerca dedicata, per il limite di ricerche; [stima] il dibattito pubblico su Scuola in Chiaro riguarda le superiori e l'orientamento).
- L'app Unica Istruzione (1,24/5, 1.228 voti) raccoglie lamentele di studenti sull'accesso ("ogni volta che devo effettuare l'accesso mi chiede le credenziali", un utente, 26/5/2026), ma non riguarda Scuola in Chiaro.

**Gestori**
- Non trovato.

## Punti di forza e lacune
**Punti di forza**
- [fatto] Copertura nazionale di statali **e paritarie**, comprese le comunali, con codice meccanografico stabile, coordinate e API JSON aperte e senza login.
- [fatto] Open data IODL 2.0 dell'anagrafe e degli alunni per età e tempo scuola: si possono riusare liberamente con attribuzione.
- [fatto] Confronto e preferiti già presenti.

**Lacune**
- [fatto] Niente 0-3: nidi e sezioni primavera non ci sono (le sezioni primavera sono aggregate a scuole dell'infanzia, ma non si possono cercare come tali, non trovato).
- [fatto] La scheda dell'infanzia è minima. PTOF, RAV e risorse sono dell'istituto comprensivo, non del plesso; per le paritarie mancano quasi del tutto.
- [fatto] Niente iscrizione online per l'infanzia, niente rette delle paritarie, niente posti liberi né liste d'attesa.
- [fatto] Trento, Bolzano e Aosta sono esclusi dagli open data dell'anagrafe.
- [stima] La "media alunni/classi" mostra 0 nelle schede dell'infanzia ("Classi 0"): un dato rotto che riduce la fiducia.

## Cosa ci insegna per l'Italia
1. **Il 3-6 ha già un'anagrafe nazionale aperta e geolocalizzata.** Per le scuole dell'infanzia statali e paritarie si può partire subito dagli open data MIM (IODL 2.0) e dall'API di Scuola in Chiaro, con il codice meccanografico come chiave.
2. **Il vuoto è l'unione 0-3 + 3-6.** INPS (0-3, dietro SPID) e MIM (3-6, aperto) non si parlano. Un servizio unico per il percorso 0-6, nido e poi infanzia nello stesso quartiere, oggi non esiste.
3. **Il dato del plesso manca.** Orari, mensa, giardino, pre e post-scuola, rette delle paritarie e posti si possono raccogliere solo dalle scuole o dai genitori: è lì che si crea valore.
4. **Anche lo Stato ha scelto il confronto:** "confronta" e "preferiti" sono funzioni attese dai genitori.

## Fonti
(accesso 2026-11-20)
- Scuola in Chiaro (UNICA): https://unica.istruzione.gov.it/sic · build manifest https://unica.istruzione.gov.it/sic/_next/static/5sqZbFrgHSmIxApbPFtbq/_buildManifest.js
- API: https://unica.istruzione.gov.it/services/sic/api/v1.0/ricerche/ricercaAvanzata?tipoDiIstruzione=AA&comune=F205&numeroPagina=1&numeroElementiPagina=3 · https://unica.istruzione.gov.it/services/sic/api/v1.0/tipologiche/datiAbilitazioneFiltriRicerca
- Scheda statale: https://unica.istruzione.gov.it/cercalatuascuola/istituti/MIAA8F201G/infanzia-mantegna/ (e /alunni/, /servizi/, /valutazione/, /didattica/)
- Scheda paritaria: https://unica.istruzione.gov.it/cercalatuascuola/istituti/MI1ADH500U/asilo-rudolf-steiner/ (e sottopagine)
- Alias storico: https://cercalatuascuola.istruzione.it/cercalatuascuola/
- FAQ iscrizioni: https://unica.istruzione.gov.it/it/orientamento/iscrizioni
- Open data MIM, Scuole: https://dati.istruzione.it/opendata/opendata/catalogo/elements1/?area=Scuole · anagrafe statali https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Scuole&datasetId=DS0400SCUANAGRAFESTAT · paritarie https://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?area=Scuole&datasetId=DS0410SCUANAGRAFEPAR · CSV https://dati.istruzione.it/opendata/opendata/catalogo/elements1/SCUANAGRAFESTAT20262720260901.csv · https://dati.istruzione.it/opendata/opendata/catalogo/elements1/SCUANAGRAFEPAR20262720260901.csv
- Open data MIM, Studenti (infanzia): https://dati.istruzione.it/opendata/opendata/catalogo/elements1/?area=Studenti
- App Unica Istruzione: https://itunes.apple.com/lookup?id=6467015205&country=it · https://itunes.apple.com/it/rss/customerreviews/id=6467015205/sortBy=mostRecent/json
- Collegati: [[Mappa INPS Bonus nido]], [[Eduscopio]]
