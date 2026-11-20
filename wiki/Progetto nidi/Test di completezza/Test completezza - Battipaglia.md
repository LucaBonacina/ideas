---
tipo: test-completezza
comune: "Battipaglia"
provincia: "SA"
regione: "Campania"
popolazione: "49.361 residenti al 1/1/2025 (ISTAT, dataflow 22_289, https://esploradati.istat.it/SDMXWS/rest/data/IT1,22_289,1.0/A.065014+076048+078102.JAN.9.TOTAL.99?startPeriod=2025, accesso 2026-11-20, dato fornito dal coordinatore)"
criterio_scelta: "comune tra 15.000 e 100.000 abitanti, non capoluogo di regione; scelto dal coordinatore come campione campano di media dimensione (motivo specifico non comunicato al subagente)"
data: 2026-11-20
sessione: P10
tags: [test-completezza, nidi, campania]
---
# Test completezza - Battipaglia

Regione: [[Campania]]. Tutte le pagine sono state lette il 2026-11-20 con curl (il sito del Comune risponde bene). [fatto] = letto alla fonte; [stima] = deduzione; "estratto" = solo estratto del motore di ricerca, pagina non letta.

## In breve
- **La fonte che copre di più è un elenco regionale** che non risultava nella nota [[Campania]]: l'**"Elenco nidi e micronidi"** della Regione Campania (allegato all'avviso "Voucher per l'accesso ai nidi" 2023/24, aggiornato al 04/03/2024, 731 righe per tutta la regione), ripubblicato dal Comune. Contiene **11 su 14** servizi 0-3 dell'elenco vero (**79%**): tutti i nidi e micronidi pubblici e privati, con ricettività, indirizzo, autorizzazione o accreditamento e data del provvedimento. Non contiene le sezioni primavera né i servizi integrativi [fatto].
- **Sito del Comune: 5/14 (36%)** per lo 0-3, cioè i servizi pubblici e le 2 sezioni primavera annesse a scuole paritarie, elencate in una pagina del 2024. **Ambito S04_1 (Consorzio Tusciano Solidale): 5/14 (36%)**, cioè i servizi pubblici più i 2 privati aderenti ai voucher di conciliazione 2025.
- **MIM: 0/14 per lo 0-3** (non copre i nidi). Per il 3-6 copre **16/18 (89%)**; il Comune ne elenca 15/18 (83%) in una pagina ferma a febbraio 2024.
- **Ricerche web: nessuna struttura trovata solo con il web.** Il web conferma 4 strutture già note (1 letta sul sito del gestore, 3 solo da estratti di elenchi di imprese).
- **Rispetto all'ISTAT 2024** (12 servizi): elenco vero di 14 unità. Ci sono **3 micronidi privati in più** dei 6 privati ISTAT (forse chiusi dopo il 2024, oppure 2 sedi dello stesso gestore contate come una). **Non trovato 1 spazio gioco privato.**

## Totale atteso
- **ISTAT 2024** ([[ISTAT - Nidi e servizi integrativi per la prima infanzia]], dataflow 47_850, estratto dal coordinatore): **12 servizi** (3 pubblici, 9 privati). Sono 8 nidi o micronidi (2 pubblici, 6 privati), 2 sezioni primavera private e 2 spazi gioco (1 pubblico, 1 privato), per 261 posti autorizzati.
- **MIM 2026/27** ([[MIM - Anagrafe scuole statali e paritarie]]): **16 scuole dell'infanzia**, 12 statali (5 istituti comprensivi) e 4 paritarie.

## Elenco vero 0-3
Legenda delle fonti:
- **Com**: sito del Comune.
- **Amb**: Consorzio Tusciano Solidale (Ambito S04_1), con l'allegato voucher conciliazione 2025.
- **Reg**: "Elenco nidi e micronidi" della Regione Campania, aggiornato al 04/03/2024.
- **MIM**: anagrafe MIM.
- **Web**: ricerche web e siti dei gestori.
- ✓ = presente; (e) = solo estratto di ricerca.

| # | Struttura | Tipologia | Gestione | Indirizzo | Com | Amb | Reg | MIM | Web | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Asilo nido comunale "Il Giardino Incantato" | nido (30 posti) | pubblico, in concessione a un'impresa sociale (convenzione rep. 9/2020) | Via Carmine Turco | ✓ | ✓ (voucher 2025) | ✓ (29 posti, accreditamento 18/10/2022) | – | (e) directory "CresciConNoi" | Il Comune ha ancora una pagina "Asilo Nido Comunale" (aggiornata al 15/02/2024) che indica il vecchio nome "Cresciconnoi" e il vecchio gestore. Nell'elenco regionale c'è anche una riga "Nido d'infanzia", Via C. Turco, 30 posti, autorizzazione del 2013, del gestore precedente: è un record superato [stima]. |
| 2 | Micronido pubblico "Teresa Ricciardi" (nell'elenco regionale: "Asilo Pio XII") | micronido (23 posti) | pubblico (titolarità Ambito S4, gestione esternalizzata a una cooperativa) | Via Indipendenza | ✓ | ✓ | ✓ | – | (e) directory "Asilo infantile Pio XII" | Iscrizioni dal 2025/26 presso il Consorzio |
| 3 | Servizio integrativo al nido pubblico | servizio integrativo, contato dall'ISTAT come spazio gioco [stima] (18 posti) | pubblico (Ambito) | Via Indipendenza, nella stessa sede del n. 2 secondo l'avviso 2024/25 [stima] | ✓ | ✓ | – | – | – | Nel 2026/27 c'erano 12 posti liberi alla riapertura dei termini |
| 4 | Asilo ludoteca "Mary Poppins" | micronido (20) | privato, autorizzato il 01/10/2020 | Via Vanvitelli 13 | – | – | ✓ | – | – | |
| 5 | "I Ranocchi" | micronido (13) | privato, accreditato il 27/08/2015 | Via Belvedere 272 | – | – | ✓ | – | – | |
| 6 | Centro per l'infanzia "Gioconda Rossini", sede di Via Garigliano | micronido (14) | privato, accreditato il 03/09/2015 | Via Garigliano | – | – | ✓ | – | (e) atoka (sede legale) | Forse è la sede precedente del n. 7 [stima] |
| 7 | Centro per l'infanzia "Gioconda Rossini", sede di Via Mons. Vicinanza | micronido (20) | privato, autorizzato il 15/09/2021 | Via Mons. A. Vicinanza 6 | – | – | ✓ | (infanzia paritaria) | – | |
| 8 | "Mano nella mano" | micronido (20) | privato, accreditato il 22/10/2018 | Viale G. Brodolini 36 (nell'elenco regionale: "Viale Giacomo Boldrini") | – | ✓ (voucher 2025) | ✓ | (infanzia paritaria) | ✓ sito del gestore letto | |
| 9 | "Il Treno della vita" | micronido (26) | privato (cooperativa sociale), accreditato il 07/11/2017 | Via Palatucci | – | ✓ (voucher 2025) | ✓ | – | – | |
| 10 | "Il Segreto dell'infanzia" | micronido (29) | privato, autorizzato il 12/09/2017 | Via Ricasoli 67 | – | – | ✓ | (infanzia paritaria, Via Ricasoli 75) | dominio del sito parcheggiato | |
| 11 | Micronido "Liberamente" (ludoteca) | micronido (20) | privato (ditta individuale), accreditato il 05/11/2021 | Via Silvio Pellico 18 | – | – | ✓ | – | – | Nell'elenco regionale la colonna "Denominazione" è vuota |
| 12 | "123 Baby Land" | micronido (22) | privato, autorizzato il 12/06/2018 | SS 18 | – | – | ✓ | – | (e) atoka | |
| 13 | Sezione primavera della scuola dell'infanzia paritaria "M. Montessori" | sezione primavera | privato, "autorizzata con provvedimento comunale" | Via Ricasoli 67/75 | ✓ | – | – | – | – | Stesso indirizzo del n. 10: probabilmente lo stesso gestore [stima] |
| 14 | Sezione primavera della scuola dell'infanzia paritaria "Bimbò" | sezione primavera | privato, "autorizzata con provvedimento comunale" | Via F. Confalonieri 20, Centro Direzionale L'Urbe | ✓ | – | – | – | – | La scuola "Bimbò" non è nell'anagrafe MIM 2026/27 |

Lo stato attuale dei privati (attivi nel 2026/27) **non è verificato**: l'elenco regionale è del 2024 e solo "Mano nella mano" e "Il Treno della vita" compaiono in un documento del 2025.

## Elenco vero 3-6
**MIM: 12 statali.** Il Comune le elenca tutte e 12 nella pagina "Scuole materne" (aggiornata al 15/02/2024), con nomi e indirizzi in parte diversi: "Giovanni XXIII" vi compare come "scuola materna comunale paritaria, Via Cavalcanti", mentre il MIM la elenca come statale in Via Dante Alighieri. Le corrispondenze per via sono plausibili per tutte e 12 [stima]: De Gasperi, Lazio (Serroni Ina Casa), Serroni Alto, Magellano, via Stella/T. Capone, Etruria, Poliziano, Ravenna, L. da Vinci, Aversana/Fasanara, S. Rosa/Jemma e Giovanni XXIII.

| Struttura | Gestione | Indirizzo | MIM | Com | Web | Note |
|---|---|---|---|---|---|---|
| 12 plessi statali (vedi elenco MIM) | statale | vari | ✓ | ✓ | – | |
| S. G. Bosco (associazione) | paritaria | Via Rosa Jemma 2, "Centro direzionale" | ✓ | – | – | Forse coincide con "Bimbò" (anche questa nel Centro Direzionale) [stima debole] |
| Il Segreto dell'infanzia | paritaria | Via Ricasoli 75 | ✓ | ✓ (come "M. Montessori", Via Ricasoli 67/75) | – | Ha una sezione primavera (Comune) |
| Mano nella mano | paritaria | Viale Brodolini 36 | ✓ | – | ✓ | Anche micronido |
| Centro per l'infanzia Gioconda Rossini | paritaria | Via Mons. Vicinanza 6 | ✓ | – | – | Anche micronido |
| Bimbolandia | paritaria secondo il Comune (2024) | Via Salvator Rosa | – | ✓ | (e) directory "Bimbolandya" | Non nell'anagrafe MIM 2026/27: chiusa, non più paritaria o nome diverso? |
| Bimbò | paritaria secondo il Comune (2024) | Via F. Confalonieri 20 | – | ✓ | – | Non nell'anagrafe MIM 2026/27; ha una sezione primavera |

Elenco vero 3-6: **18** (16 MIM e 2 solo comunali, con stato attuale incerto). Scuole dell'infanzia **non paritarie**: elenco USR Campania non cercato; nessuna trovata con il web. Le directory citano "Mister Baby", "Girotondo dei Bimbi" e "Kinder House" come "scuole private materne" (solo estratto, impresaitalia non raggiungibile: errore 523), quindi non verificate e non contate.

## Copertura per fonte
| Fonte | 0-3 trovate / 14 | % | 3-6 trovate / 18 | % | Note |
|---|---|---|---|---|---|
| Elenco nidi e micronidi Regione Campania (2024) | 11 | 79% | – | – | Solo nidi e micronidi; ricettività e titolo; contiene anche email e telefoni dei gestori (dati in parte personali: ditte individuali) |
| Sito del Comune | 5 | 36% | 15 | 83% | Pagine "Asilo Nido Comunale" e "Scuole materne" ferme al 2024; avvisi annuali dei servizi pubblici |
| Ambito S04_1 / Consorzio Tusciano Solidale | 5 | 36% | – | – | Avvisi dei servizi pubblici; allegato voucher conciliazione 2025 con 3 nidi aderenti (1 pubblico, 2 privati). Il modulo del voucher 2026 non elenca più le strutture |
| MIM anagrafe | 0 | 0% | 16 | 89% | 3 gestori di micronidi compaiono come scuole dell'infanzia paritarie |
| Ricerche web e siti dei gestori | 4 (1 letto, 3 da estratti) | 29% | 2 | 11% | WebSearch indicizza male le piccole strutture locali |
| INPS (bonus nido) | non consultata | – | – | – | Citata soltanto ([[INPS - Agenda asili nido e mappa Bonus nido]]) |
| ISTAT | conteggio, non nominativo | – | – | – | 12 servizi attesi |

## Trovate solo con ricerche web
Nessuna. Tutte le strutture confermate dal web erano già nell'elenco regionale.

## Attese ma non trovate
- **1 spazio gioco privato** (ISTAT 2024): non trovato. Forse una ludoteca: "Liberamente" e "Mary Poppins" si chiamano ludoteche ma sono registrate come micronidi [stima].
- **In più rispetto all'ISTAT**: 9 nidi e micronidi privati nell'elenco regionale contro i 6 dell'ISTAT. La differenza (+3) si spiega forse con chiusure tra marzo 2024 e il 2024 ISTAT, con le 2 sedi Rossini contate come una o con le date di riferimento diverse [stima].
- Baby parking e ludoteche non autorizzate: nessuno trovato con il web (le directory citano "baby parking" come servizio aggiuntivo di Mano nella mano e CresciConNoi).

## Campi disponibili
| Struttura | Rette | Orari | Età | Posti | Scadenze iscrizione | Progetto pedagogico | Lingua | Inclusione / disabilità |
|---|---|---|---|---|---|---|---|---|
| Nido comunale "Il Giardino Incantato" | ✓ tabella per 4 fasce ISEE e 3 tempi: da 84,92 a 436,06 euro/mese (22 giorni) (avviso 2025/26, PDF Comune) | ✓ tempo parziale 4,5 h, pieno 8 h, prolungato 10 h (avviso) | ✓ 0-3 anni, in 3 gruppi | ✓ 30 (6+12+12) | ✓ dal 22/05/2025 a inizio anno (pagina Comune) | carta dei servizi PDF sulla pagina comunale, testo non estraibile (PDF danneggiato o scansione) | non trovato | ✓ "accesso a pieno diritto" per i bambini con disabilità, 5 punti in graduatoria (avviso) |
| Micronido e integrativo pubblici (Ambito) | quota ISEE secondo il regolamento di Ambito (Del. CdA 5/2026): importi non nell'avviso | non trovato | ✓ 3-36 mesi | ✓ 23 + 18 (2025/26 e 2026/27) | ✓ 19/06/2026; riapertura 3-10/09/2026 (Consorzio) | non trovato | non trovato | non trovato nell'avviso |
| "Mano nella mano" (privato) | non trovato | non trovato | ✓ nido 0-36 mesi, infanzia 3-5 anni (sito del gestore) | 20 (solo elenco regionale) | non trovato | descrizione generica (sito) | non trovato | non trovato |
| "Il Treno della vita" (privato) | non trovato | fasce "solo pomeriggio 4 ore / 4-10 ore" del modulo voucher (non sono orari della struttura) | 0-36 mesi (voucher) | 26 (regione) | solo voucher 2025 (01/05/2025) | non trovato | non trovato | il modulo voucher chiede l'eventuale disabilità |
| Scuola dell'infanzia statale (es. Rita Levi-Montalcini) | – (statale) | non trovato | 3-6 | non trovato | non cercate (iscrizioni MIM) | sito dell'istituto comprensivo (MIM), non letto | non trovato | non trovato |

## Fonti consultate
| URL | Accesso | Letta | Esito |
|---|---|---|---|
| https://www.comune.battipaglia.sa.it/sitemap.xml | 2026-11-20 | sì | Indice utile: circa 40 pagine con "nido" |
| https://www.comune.battipaglia.sa.it/it/sezione/canali-tematici/page/asilo-nido-comunale | 2026-11-20 | sì | Pagina superata (aggiornata al 15/02/2024) |
| https://www.comune.battipaglia.sa.it/it/sezione/canali-tematici/page/scuole-materne | 2026-11-20 | sì | 12 statali, 3 paritarie, 2 sezioni primavera |
| https://www.comune.battipaglia.sa.it/it/novita/page/asilo-nido-comunale-il-giardino-incantato-apertura-iscrizioni-anno-educativo-2025-2026 e PDF https://www.comune.battipaglia.sa.it/download/2c8a53c8c3af41e7934b0622d8292cdc/schema%20di%20avviso%20completo_signed.pdf | 2026-11-20 | sì | Posti, rette, orari, criteri |
| https://www.comune.battipaglia.sa.it/it/novita/page/servizio-micro-nido-e-servizio-integrativo-al-nido-anno-educativo-2025-2026 e PDF https://www.comune.battipaglia.sa.it/download/0a1fafd8556c4081b7cc37d0afbf0d4b/avviso%20pubblico%20nido%202025-2026%20%281%29.pdf | 2026-11-20 | sì | Servizi pubblici dell'Ambito, capienze |
| https://www.comune.battipaglia.sa.it/it/novita/page/avviso-pubblico-riapertura-dei-termini-per-l-acquisizione-delle-iscrizioni-ai-servizi-di-micro-nido-d-infanzia-e-servizi-integrativi-al-nido-anno-educativo-2026-2027 e PDF https://www.comune.battipaglia.sa.it/download/6d72a7308599454ca9863b70000e4f0b/AVVISO%20RIAPERTURA%20TERMINI%202026%202027_Marcato.pdf | 2026-11-20 | sì | 2026/27: 12 posti integrativo liberi |
| https://www.comune.battipaglia.sa.it/it/novita/page/avviso-pubblico-iscrizioni-micronido-e-servizio-integrativo-al-nido-teresa-ricciardi-anno-educativo-2024-2025-2 | 2026-11-20 | sì | Nome e indirizzo del micronido pubblico |
| https://www.comune.battipaglia.sa.it/it/novita/page/avviso-pubblico-manifestazione-di-interesse-per-richiedere-l-attivazione-del-servizio-nido-micronido-ludoteca-centro-estivo-e-babysitting-mediante-consegna-di-voucher e https://www.comune.battipaglia.sa.it/download/536c13a884dd47aa9fad37525af8d36a/ALLEGATO2%20%282%29.pdf | 2026-11-20 | sì | 3 nidi aderenti ai voucher di conciliazione 2025 |
| https://www.comune.battipaglia.sa.it/it/novita/page/voucher-per-l-accesso-ai-nidi-destinati-a-famiglie-aventi-requisiti-isee-per-l-abbattimento-della-retta-di-iscrizione-anno-educativo-2023-2024-2 e https://www.comune.battipaglia.sa.it/download/ec270586b4914122964f627510ff1df9/elenco_aggiornato_al_04.03.24.pdf | 2026-11-20 | sì | **Elenco regionale nidi e micronidi** (12 pagine, 731 righe in Campania, 12 righe a Battipaglia) |
| https://www.consorziotuscianosolidale.it/Novita/Avvisi | 2026-11-20 | sì | Avvisi dell'Ambito S04_1 (il dominio senza www dà errore di connessione) |
| https://www.consorziotuscianosolidale.it/Novita/Avvisi/SERVIZIO-MICRO-NIDO-E-SERVIZIO-INTEGRATIVO-AL-NIDO-ANNO-EDUCATIVO-2026-2027-PER-IL-CONSORZIO-TUSCIANO-SOLIDALE-AMBITO-TERRITORIALE-S04_1-APPROVAZIONE-AVVISO-PUBBLICO-E-MODELLO-DI-DOMANDA | 2026-11-20 | sì (con PDF) | Capienze 2026/27, scadenza 19/06/2026 |
| Pagina del Consorzio sul voucher conciliazione 2026 (Allegato 1) | 2026-11-20 | sì | Il modulo non elenca le strutture |
| https://www.manonellamano.net/ | 2026-11-20 | sì | Esistenza, età, indirizzo |
| https://ilsegretodellinfanzia.it/ | 2026-11-20 | sì | Dominio parcheggiato |
| https://www.reteimprese.it/93524 | 2026-11-20 | no | Errore di connessione (connection reset); solo estratto |
| https://www.impresaitalia.info/ (scuole private materne) | 2026-11-20 | no | Errore 523; solo estratto |
| Albo pretorio (servizi.comune.battipaglia.sa.it/openweb) | – | no | Non consultato (per tempo): lì sarebbero gli atti di autorizzazione |

## Cosa resta aperto
- Aggiornare la nota [[Campania]]: esiste un **elenco regionale nominativo dei nidi e micronidi** (allegato al voucher 2023/24). Resta da trovare l'URL originale sul sito regionale e verificare se esiste un aggiornamento 2024/25 o 2025/26 (avviso voucher 2025/26 con domande da marzo ad aprile 2026).
- Verificare quali dei 9 micronidi privati sono attivi nel 2026/27 (albo pretorio comunale e graduatoria del voucher regionale 2025/26).
- Spazio gioco privato ISTAT: non identificato.
- Bimbolandia e Bimbò: chiuse, non paritarie o con un altro nome?
- Elenco USR Campania delle scuole non paritarie: non cercato.
