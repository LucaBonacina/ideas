---
tipo: fonte
ente: "ISTAT (indagine IST-02647, con Dipartimento per le politiche della famiglia, Università Ca' Foscari, RGS e Regioni)"
livello: nazionale
territorio: "Italia"
tipologie: [nido, micronido, nido aziendale, sezione primavera, spazio gioco, centro bambini e famiglie, servizio domiciliare, infanzia statale, infanzia paritaria (solo conteggi provinciali)]
gestione: [pubblico, privato]
campi: [servizi attivi, posti autorizzati, posti per 100 bambini 0-2, utenti, spesa, compartecipazione delle famiglie; per tipologia, titolarità pubblica o privata e tipo di gestione]
formato: "API SDMX (CSV, XML) e IstatData; report PDF. Nessun elenco nominativo diffuso"
aggiornamento: "annuale; report del 2/2/2026 su a.e. 2023/24; IstatData ha già il periodo 2024"
licenza: "CC BY 4.0 (riuso commerciale consentito con attribuzione)"
dati_personali: "no nei dati diffusi"
url: "https://esploradati.istat.it/SDMXWS/rest/data/IT1,47_850,1.0/"
verificato_il: 2026-11-20
affidabilita: "alta come statistica ufficiale (con quota stimata per i non rispondenti e per gli ambiti associati); nulla come elenco nominativo"
tags: [fonte, nazionale, istat, nido, servizi-integrativi, open-data]
---
# ISTAT - Nidi e servizi integrativi per la prima infanzia

> La statistica ufficiale sull'offerta 0-3, pubblica e privata, con **dati per comune**. Non dà nomi né indirizzi, ma dice **quante strutture e quanti posti aspettarsi in ogni comune**: è il metro per misurare la completezza di qualunque elenco.

## Come funziona la rilevazione
- Rispondono i Comuni e gli ambiti territoriali (circa 8.600 enti). Dal 2012/13 c'è un "censimento annuale delle unità di offerta": il Comune, "in qualità di ente che autorizza", aggiorna l'elenco dei servizi attivi pubblici e privati. Tasso di risposta 2023/24: 79,9%; per chi non risponde ISTAT stima dai dati dell'anno precedente [fatto, nota metodologica del report].
- Il questionario 2025 ha una **Sezione E "elenco strutture"** con ID struttura, indirizzo, denominazione, servizio, titolarità, numero di posti, accreditamento, polo infanzia, stato e contatti [fatto: https://www.istat.it/fascicoloSidi/2073/QuestionarioAsiliNido2025.pdf]. **Quindi ISTAT ha un elenco nominativo nazionale**, ma non lo diffonde [fatto per la non diffusione: non trovato alcun file; l'accesso andrebbe chiesto all'ISTAT, con il possibile limite del segreto statistico (D.Lgs. 322/1989)].

## Dati diffusi (verificati con l'API SDMX)
- Dataflow `47_850` "Servizi socio-educativi per la prima infanzia" (struttura DCIS_SERVSOCEDU1). Dimensioni [fatto]:
  - territorio: Italia, regione, provincia, comune, ambito;
  - tipo di dato: servizi attivi, posti autorizzati, utenti, spesa…;
  - tipologia: nidi, nidi aziendali, sezioni primavera, spazi gioco, servizi domiciliari, centri bambini-genitori;
  - tipo di gestione;
  - titolarità: 1 privato, 2 pubblico, 9 totale.
- Totali Italia verificati dal coordinatore [fatto]:

| Periodo | Servizi | di cui privati | di cui pubblici | Posti autorizzati |
|---|---|---|---|---|
| 2023 (= a.e. 2023/24 del report) | 14.570 | 9.765 | 4.805 | 378.496 |
| 2024 | **15.049** | 10.114 | 4.935 | **388.251** |

  Il periodo 2024 corrisponde presumibilmente all'a.e. 2024/25 [stima]: è più recente del report di febbraio 2026.
- Nel periodo 2024 i comuni con almeno un servizio sono 4.924 [fatto, conteggio del subagente].
- Esempio di record: `IT1:47_850(1.0),A,015146,SERV,CDNUR,ALL,1,2024,234` = Milano, nidi a titolarità privata attivi, 234. Totale Milano 2024: 460 servizi (284 privati, 176 pubblici), 14.024 posti [fatto].
- Copertura 2023/24: 31,6% dei bambini sotto i 3 anni [fatto].
- Chiamata usata: `https://esploradati.istat.it/SDMXWS/rest/data/IT1,47_850,1.0/A.IT.SERV+AUTP.ALL.ALL.?startPeriod=2023` con header `Accept: application/vnd.sdmx.data+csv`.

## Scuola dell'infanzia in ISTAT
Il dataflow `52_1045_DF_DCIS_SCUOLE1_2` ("Infanzia - scuole, classi, bambini"), periodo 2025, conta 21.690 scuole: 13.028 statali, **1.877 pubbliche non statali (comunali)**, 6.785 private; 1.217.844 iscritti. Il dettaglio massimo è la **provincia** [fatto, verificato dal subagente]. Utile come controllo della quota comunale, che l'anagrafe MIM non distingue (vedi [[MIM - Anagrafe scuole statali e paritarie]]).

## Cosa NON copre
- Nessun nome, indirizzo o contatto delle strutture.
- Strutture non autorizzate, baby parking, ludoteche.
- Nei comuni che rispondono tramite un ambito, i dati sono in parte ripartiti per stima sulla popolazione 0-2 [fatto].
- Rette, orari, posti liberi.

## Valore come base per l'elenco completo
- **Basso come fonte diretta.**
- **Alto come denominatore di controllo**: numero atteso di servizi e posti per comune, tipologia e titolarità, con licenza aperta.
- Se l'ISTAT concedesse l'elenco delle unità di offerta (Sezione E), sarebbe la migliore base nazionale dello 0-3: è una **richiesta da fare**.

## Fonti (accesso 2026-11-20)
- Report: https://www.istat.it/wp-content/uploads/2026/02/REPORT_OFFERTA-DI-NIDI-E-SERVIZI-INTEGRATIVI-PER-LA-PRIMA-INFANZIA.pdf (letto dal subagente con pdftotext)
- API SDMX: https://esploradati.istat.it/SDMXWS/rest/data/IT1,47_850,1.0/A.IT.SERV+AUTP.ALL.ALL.?startPeriod=2023 (verificato dal coordinatore)
- Struttura: https://esploradati.istat.it/SDMXWS/rest/datastructure/IT1/DCIS_SERVSOCEDU1/latest?references=children
- Questionario e guida 2025: https://www.istat.it/fascicoloSidi/2073/QuestionarioAsiliNido2025.pdf · https://www.istat.it/fascicoloSidi/2073/GuidaCompilazioneAsiliNido2025.pdf
- Licenza: https://www.istat.it/note-legali/
- Dettaglio: [[Fonti ISTAT INPS Openpolis famiglia - subagente]] (E1-E10)
