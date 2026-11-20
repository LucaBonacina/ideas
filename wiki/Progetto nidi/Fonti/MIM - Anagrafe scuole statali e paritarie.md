---
tipo: fonte
ente: "Ministero dell'Istruzione e del Merito (MIM), Portale unico dei dati della scuola"
livello: nazionale
territorio: "Italia (con eccezioni: Trento e Bolzano quasi assenti, Valle d'Aosta in file separati)"
tipologie: [infanzia statale, infanzia paritaria (anche comunale e di altri enti locali)]
gestione: [pubblico statale, pubblico comunale paritario, privato paritario]
campi: [anno scolastico, regione, provincia, codice meccanografico, denominazione, istituto di riferimento (solo statali), indirizzo, CAP, codice catastale comune, comune, caratteristica (montagna, ospedaliera, lingua slovena…), tipo di grado, email, PEC, sito web, sede scolastica sì/no]
formato: "open data CSV, JSON, XML, RDF; un file per anno scolastico"
aggiornamento: "annuale; ultimo file a.s. 2026/27 con data di riferimento 01/09/2026; serie dal 2015/16"
licenza: "IODL 2.0 (indicata nella pagina del catalogo)"
dati_personali: "sì, in parte: nel file delle paritarie il campo email contiene a volte indirizzi nominativi di persone (es. nome.cognome@comune…) e circa 2.981 indirizzi su domini di posta personale (gmail, libero…). Non vanno ripubblicati senza filtro."
url: "https://dati.istruzione.it/opendata/opendata/catalogo/elements1/?area=Scuole"
verificato_il: 2026-11-20
affidabilita: "alta per statali e paritarie (fonte amministrativa ufficiale, codice univoco); nulla per nidi, servizi integrativi, sezioni primavera e scuole non paritarie, che non contiene"
tags: [fonte, nazionale, mim, scuola-infanzia, open-data]
---
# MIM - Anagrafe scuole statali e paritarie

> Anagrafe ufficiale delle scuole statali e paritarie, in open data. È la base migliore per la fascia 3-6 (scuole dell'infanzia), ma non contiene nulla della fascia 0-3 né le scuole non paritarie.

## Cosa contiene (misura propria sui file del 2026/27)
Quattro dataset nell'area "Scuole" del catalogo, un file per anno scolastico in CSV, JSON, XML e RDF [fatto]:

| Codice dataset | Descrizione dal catalogo | Righe 2026/27 | Di cui scuole dell'infanzia |
|---|---|---|---|
| `SCUANAGRAFESTAT` | "anagrafe delle scuole. Scuola statale" | 50.273 | **13.485** (`SCUOLA INFANZIA`) |
| `SCUANAGRAFEPAR` | "anagrafe delle scuole. Scuola paritaria" | 11.331 | **7.876** (`SCUOLA INFANZIA NON STATALE`) |
| `SCUANAAUTSTAT` | scuole "delle province autonome di Aosta, Trento e Bolzano equiparate a scuole statali" | 1.178 | 75 (tutte Valle d'Aosta) |
| `SCUANAAUTPAR` | idem, "Scuole paritarie" | 68 | 9 (8 Valle d'Aosta, 1 Bolzano) |

- File usati: `SCUANAGRAFESTAT20262720260901.csv` (13 MB), `SCUANAGRAFEPAR20262720260901.csv` (2,5 MB), `SCUANAAUTSTAT20262720260901.csv`, `SCUANAAUTPAR20262720260901.csv`, scaricati da `https://dati.istruzione.it/opendata/opendata/catalogo/elements1/<nome file>` [fatto].
- Andamento delle paritarie dell'infanzia: 7.960 (2024/25), 7.877 (2025/26), 7.876 (2026/27). Statali dell'infanzia: 13.504 (2025/26), 13.485 (2026/27) [fatto, conteggio delle righe per tipo di grado].
- **Le statali sono "plessi"** (punti di erogazione) collegati a un istituto di riferimento (di solito un istituto comprensivo); 544 righe hanno `SEDESCOLASTICA = NO` [fatto].
- Caratteristiche delle statali dell'infanzia: 13.296 normali, 65 di montagna, 53 presso istituti ospedalieri, 32 con lingua d'insegnamento slovena, 24 isolane, 12 annesse a convitto, 1 speciale per ciechi, 1 per sordi [fatto]. Utile per i segmenti (bisogni speciali, lingua).
- Le paritarie dell'infanzia comprendono le **scuole comunali paritarie**: 364 hanno "COMUNALE" nel nome (stima per difetto: molte comunali non lo dicono nel nome). Il file **non ha un campo che distingua il gestore** (comune, ente religioso, cooperativa, privato) [fatto].
- Parole chiave nei nomi delle paritarie dell'infanzia: Montessori 48, International 16, Bilingu- 11, Steiner 9, English 7, Internazionale 4, Waldorf 4, Primavera 18 [fatto, misura propria]. È solo un indizio: il segmento bilingue o internazionale va cercato altrove.
- Copertura territoriale: statali dell'infanzia in 5.580 comuni, paritarie in 2.771, unione 6.517 comuni (su circa 7.896) [fatto, conteggio dei codici catastali].

### Esempio di record (statale, dati istituzionali)
`202627, NORD OVEST, LOMBARDIA, CREMONA, CRIC80100E, IC CASALMAGGIORE "DIOTTI", CRAA80104E, VICOMOSCANO, VIA MANZONI 98, 26041, B898, CASALMAGGIORE, NORMALE, SCUOLA INFANZIA, NO, Non Disponibile, CRIC80100E@istruzione.it, Non Disponibile, www.icdiotti.edu.it, SI`

Campi delle paritarie: come sopra ma senza istituto di riferimento, caratteristica, sede direttivo e sede scolastica.

### Dati collegati: alunni per scuola (area "Studenti")
Nell'area Studenti dello stesso portale ci sono dataset per singola scuola dell'infanzia, uniti all'anagrafe dal codice meccanografico [fatto]:
- `INFANZIACLASTA` / `INFANZIACLAPAR`: numero di sezioni e bambini (maschi, femmine) per scuola;
- `INFANZIAETASTA` / `INFANZIAETAPAR`: bambini per fascia d'età (`< di 3 anni`, 3, 4, 5, `> di 5 anni`): il dato `< di 3 anni` (anticipatari) compare in 9.860 righe delle statali;
- `INFANZIATEMPOSTA` / `INFANZIATEMPOPAR`: bambini per tempo scuola (orario normale, ridotto, prolungato).
L'ultimo anno pubblicato è il **2024/25** (file `…20242520250831.csv`), quindi due anni indietro rispetto all'anagrafe [fatto].

### Dati collegati: edifici delle scuole statali (area "Edilizia Scolastica")
13 dataset sugli edifici delle sole scuole **statali** (e della Valle d'Aosta), "forniti dagli Enti locali proprietari o gestori degli edifici… ai sensi della legge 11 gennaio 1996, n. 23", uniti dal codice scuola: anagrafica e indirizzo dell'edificio, barriere architettoniche (rampe, ascensore, servizi igienici per disabili…), riscaldamento, vincoli, trasporti, età dell'edificio. Ultimo file: a.s. 2024/25 (`EDIANAGRAFESTA202120242520250806.csv`, `EDISUPBARARCSTA202120242520250806.csv`) [fatto]. Utile per il segmento inclusione (accessibilità fisica), solo per le statali.

## Cosa NON copre
- **Nidi, micronidi, servizi integrativi**: assenti (sono competenza di Regioni e Comuni) [fatto].
- **Sezioni primavera**: non hanno un codice né un dataset proprio; possono esistere dentro scuole statali o paritarie senza essere distinguibili [fatto per l'assenza del campo; il numero di sezioni primavera va cercato altrove].
- **Scuole dell'infanzia non paritarie** (private iscritte agli elenchi regionali degli Uffici scolastici regionali): assenti [fatto].
- **Province autonome di Trento e Bolzano**: le loro scuole dell'infanzia (provinciali e "equiparate") non ci sono, salvo una paritaria a Bolzano [fatto]. Servono le fonti provinciali.
- **Valle d'Aosta**: presente solo nei file `SCUANAAUT…` [fatto].
- Gestore, capienza, rette, orari, progetto pedagogico, posti liberi: assenti.

## Come si accede
Download diretto senza registrazione da `https://dati.istruzione.it/opendata/opendata/catalogo/elements1/`; i nomi dei file seguono lo schema `<CODICE><anni><data di riferimento>.csv`. Nessuna API di interrogazione, ma i file sono piccoli.

## Problemi noti
- Email e siti mancanti spesso nelle paritarie dell'infanzia: email "Non Disponibile" in 2.566 su 7.876, sito in 5.180, PEC in 3.220 [fatto].
- Indirizzo "Non Disponibile" in 298 statali dell'infanzia [fatto].
- La regione Friuli è scritta `FRIULI-VENEZIA G.`, la Valle d'Aosta `VALLE D' AOSTA`: normalizzare.
- Nessuna coordinata geografica (le coordinate ci sono in [[MIM - Scuola in Chiaro]]).

## Valore come base per l'elenco completo
**Alto per il segmento 3-6 statale e paritario** (circa 21.400 scuole dell'infanzia con codice univoco, licenza aperta, aggiornamento annuale). **Nullo per lo 0-3** e per le non paritarie. Va completato con le fonti provinciali di Trento e Bolzano e con gli elenchi delle non paritarie degli USR (vedi [[Normativa nazionale 0-6]]).

## Fonti
- Catalogo "Scuole" con licenza IODL 2.0 e descrizioni dei dataset: https://dati.istruzione.it/opendata/opendata/catalogo/elements1/?area=Scuole (accesso 2026-11-20, letto con curl)
- Catalogo "Studenti": https://dati.istruzione.it/opendata/opendata/catalogo/elements1/?area=Studenti (accesso 2026-11-20)
- File CSV scaricati e analizzati il 2026-11-20 (conteggi propri con Python).
