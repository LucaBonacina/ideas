---
tipo: test-completezza
comune: "Merano/Meran"
provincia: "BZ"
regione: "Provincia autonoma di Bolzano"
codice_istat: "021051"
criterio: "comune 15-100 mila abitanti, non capoluogo di regione, almeno 10 servizi 0-3 ISTAT"
servizi_0_3_istat_2024: 29
scuole_infanzia_mim_2026_27: 0
elenco_vero_0_3: 7
elenco_vero_3_6: null   # non determinato: elenco delle scuole dell'infanzia/Kindergärten di Merano non trovato
verificato_il: 2026-11-20
tags: [test-completezza, nidi]
---
# Test di completezza: Merano/Meran

## In breve
- **Fonte migliore 0-3:** il portale dell'**Agenzia per la famiglia** della Provincia (famiglia.provincia.bz.it). È un'applicazione JavaScript che curl non legge, ma la si legge con WebFetch. Le sue pagine "Gli asili nido" ed "Elenco microstrutture" (aggiornato al 10/09/2026) danno 2 asili nido e 5 microstrutture con indirizzo a Merano. Tolte le voci dubbie, coprono **6/7** delle strutture trovate. [fatto]
- **Tagesmütter:** l'ISTAT conta **23 servizi domiciliari** (112 posti). Nessuna fonte li elenca per comune: la pagina provinciale dà solo i 6 gestori, tutti con sede a Bolzano. Sono il **buco più grande**: 23 servizi su 29, il 79% del totale ISTAT. [fatto]
- **Sito del Comune:** pagina di iscrizione al nido comunale (finestra 10-28/02/2026, riapertura 01/05/2026-31/01/2027), senza nomi né indirizzi delle sedi. Il nome "nido comunale TicoMaia" compare solo nelle ordinanze dell'albo pretorio. [fatto]
- **Solo web:** 1 struttura, il centro bambini "Viva!" di Coopselios, citato nella brochure 2026 del gestore e assente dall'elenco provinciale delle microstrutture. Probabilmente è il nido aziendale dell'Azienda sanitaria [stima].
- **3-6:** il MIM è vuoto e l'elenco nominativo dei Kindergärten tedeschi e delle scuole dell'infanzia italiane di Merano **non è stato trovato**. Si sa solo che il Kindergartensprengel Meran ha 31 Landeskindergärten, compresi quelli di altri comuni (stampa 2026). Denominatore 3-6 **non determinato**.

## Totale atteso
ISTAT, servizi 0-3 attivi (pacchetto del coordinatore):

| Tipologia | 2023 priv/pub/tot | 2024 priv/pub/tot | Posti 2024 priv/pub/tot |
|---|---|---|---|
| Nidi (incl. micronidi) | 0/6/6 | 1/5/6 | 20/152/172 |
| di cui nidi aziendali | 0/1/1 | 1/0/1 | 20/0/20 |
| Sezioni primavera | 0/0/0 | 0/0/0 | 0/0/0 |
| Spazi gioco | 0/0/0 | 0/0/0 | 0/0/0 |
| Servizi domiciliari | 23/0/23 | 23/0/23 | 112/0/112 |
| Centri bambini-genitori | 0/0/0 | 0/0/0 | 0/0/0 |
| **Totale** | 23/6/29 | **24/5/29** | 132/152/284 |

3-6: MIM a.s. 2026/27: **0** (Alto Adige fuori dall'anagrafe nazionale). Elenco provinciale per Merano: **non trovato** (vedi sotto).

## Elenco vero 0-3
Legenda: **R** = elenchi provinciali sul portale dell'Agenzia per la famiglia ("Gli asili nido"; "Elenco microstrutture", 10/09/2026); **C** = sito e albo pretorio del Comune di Merano; **M** = MIM; **U** = USR (non pertinente); **A** = altre fonti istituzionali; **W** = siti dei gestori, stampa.

| n. | Struttura | Tipologia | Gestione | R | C | M | U | A | W | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Nido comunale "TicoMaia" (portale: "Asilo nido", Via Maia 1) | asilo nido | pubblica (comunale) | ✓ | ✓ |  |  |  |  | che la sede di Via Maia 1 sia TicoMaia è una [stima]; il nome è solo nelle ordinanze dell'albo |
| 2 | "Casa Infanzia Merano", Via Marlengo 61/A | microstruttura (Kita) | privata (coop. Casa Bimbo) | ✓ |  |  |  |  | ✓ | |
| 3 | "Kita Algund" (portale: "Microstruttura Lagundo"), Via Goethe 15, Merano | microstruttura | privata (coop. Casa Bimbo) | ✓ |  |  |  |  | ✓ | indirizzo a Merano, ma è probabilmente la Kita del Comune di Lagundo [stima] |
| 4 | Nido aziendale Merano, Via Marlengo 61/F | microstruttura aziendale | privata (coop. Casa Bimbo) | ✓ |  |  |  |  | ✓ | |
| 5 | Microstruttura "Coccinella", Via Haller 40 | microstruttura | privata (coop. Coccinella) | ✓ |  |  |  |  |  | sito del gestore non leggibile in automatico |
| 6 | Kita "Popele", P.zza Vittorio Veneto 9/a-10, Sinigo | microstruttura, 22 posti | privata (coop. Popele), accreditata (decreto 23175/2025) | ✓ |  |  |  |  | ✓ | sito ricco |
| 7 | Centro bambini / Kita "Viva!" (Coopselios) | microstruttura, probabilmente aziendale | privata (coop.) |  |  |  |  |  | ✓ | brochure Coopselios marzo 2026; indirizzo (Via Rossini 14) e legame con l'Azienda sanitaria solo da estratti di ricerca |
| – | "Asilo nido Yosyag", Via Goethe 40/C | asilo nido? | ? | ✓ |  |  |  |  |  | **dubbio, non contato**: allo stesso indirizzo il web trova solo un ristorante "Yosyag" |
| – | 23 Tagesmütter (servizi domiciliari ISTAT) | servizio domiciliare | privata (6 coop. con sede a Bolzano) |  |  |  |  |  |  | **non elencabili**: nessuna fonte per comune |

Confronto con l'ISTAT 2024: "nidi" 6 contro 7 trovati (1 comunale + 6 Kita private, di cui 2 aziendali). L'ISTAT però dichiara 5 nidi **pubblici** e 1 privato: forse conta come pubbliche le Kita accreditate o sedi diverse del nido comunale [stima, non risolto]. Servizi domiciliari: 23 dichiarati, 0 elencati.

## Elenco vero 3-6
Non determinato. Indizi raccolti (nessuno da un elenco ufficiale):

| n. | Scuola | Gestione | R | C | M | U | A | W | Note |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Kindergarten Meran-Untermais | provinciale, lingua tedesca |  |  |  |  |  | ✓ | "il più grande dell'Alto Adige", 7 gruppi (rivista FF n. 19/2026) |
| 2 | Kindergarten Mariä Himmelfahrt | lingua tedesca (gestione non verificata) |  |  |  |  |  | (✓) | solo da estratti di ricerca |
| 3 | Kindergarten Cavourstraße (Obermais) | provinciale, lingua tedesca |  |  |  |  |  | (✓) | solo da estratti di ricerca |
| 4 | Scuola dell'infanzia "Sissi" | provinciale, lingua italiana |  |  |  |  | (✓) |  | citata in un bando provinciale (estratto) |
| 5 | Scuola dell'infanzia "Froebel" | provinciale, lingua italiana |  |  |  |  | (✓) |  | citata in un bando provinciale (estratto) |
| 6 | Freie Waldorfschule "Christian Morgenstern", Schennastraße 47A | privata (Steiner), con scuola dell'infanzia |  |  |  |  |  | ✓ | elenco soci della Federazione Steiner-Waldorf |

Totali noti: Kindergartensprengel Meran (sede Sandplatz 10) con **31 Landeskindergärten** di lingua tedesca nel distretto, che comprende anche comuni vicini [fatto, FF 19/2026]; I Circolo scuole dell'infanzia in lingua italiana di Merano, stessa sede [estratto di ricerca].

## Copertura per fonte
| Fonte | 0-3 n/N | % | 3-6 n/N | % | Note |
|---|---|---|---|---|---|
| R - Portale Agenzia per la famiglia (asili nido + elenco microstrutture) | 6/7 | 86% | – | – | più 1 voce dubbia (Yosyag); niente Tagesmütter per comune, niente posti |
| C - Sito e albo pretorio del Comune | 1/7 | 14% | 0/? | – | pagina di iscrizione senza nomi delle sedi; motore di ricerca interno non funzionante da riga di comando |
| M - Anagrafe MIM | 0/7 | 0% | 0/? | 0% | |
| U - USR | non pertinente | – | – | – | |
| A - Altre fonti istituzionali | 0/7 | 0% | 2 indizi | – | |
| W - Web (gestori, stampa) | 5/7 | 71% | 2 confermati + 2 indizi | – | |

- **Strutture trovate solo con il web:** 1 (Kita "Viva!" Coopselios).
- **Dichiarate dall'ISTAT ma non trovate:** **23 servizi domiciliari** (Tagesmütter). Sui nidi il numero torna (6 ISTAT, 7 trovati), ma la ripartizione pubblico/privato no.
- Se si contano i 23 domiciliari, la migliore fonte copre **6/30 (20%)** del totale 0-3.

## Campi utili ai genitori
| Struttura | Retta | Orari | Età | Posti | Scadenze iscrizioni | Progetto pedagogico | Lingua | Inclusione/disabilità |
|---|---|---|---|---|---|---|---|---|
| Nido comunale TicoMaia (pubblica) | parziale (portale provinciale: tariffa provinciale 7,20-18 €/giorno fino alle 15:30, in base al reddito; agevolazioni al distretto sociale) | no | sì (Comune: fino a 3 anni) | no | sì (Comune: 10-28/02/2026; riapertura 01/05/2026-31/01/2027; esito entro 31/05/2026) | no | no | parziale (Comune: lo stato di salute dei familiari conta nella domanda) |
| Kita Popele (privata, accreditata) | no (rimanda allo schema provinciale) | sì (sito: lun-ven 7:30-17:00) | sì (sito: 3 mesi-3 anni) | sì (sito: 22) | parziale (sito: pre-iscrizione online) | sì (sito: giornata tipo, inserimento, outdoor) | sì (sito: bilingue IT/DE, "una persona, una lingua") | no |
| Casa Infanzia Merano (privata, Casa Bimbo) | no | no | no | no | no | parziale (sito coop.: bilinguismo) | parziale (sito coop.: bilinguismo IT/DE) | no |
| Microstruttura Coccinella (privata) | no | no | no | no | no | no | no | no |
| Tagesmütter (privata) | sì (portale provinciale: 0,90-3,65 €/ora secondo la situazione economica) | no | no | no | no | no | no | no |
| Kindergarten Meran-Untermais (3-6) | no | no | no | no | no | parziale (stampa: progetto di lavoro sociale "Brücke") | sì (lingua tedesca, per ordinamento) | no |

## Problemi e prova contraria
- **API del portale provinciale:** il portale dell'Agenzia per la famiglia legge i dati da un'API pubblica di contenuti (Kontent.ai). Il tentativo di interrogarla direttamente è stato **bloccato dal sistema di permessi** della sessione, come già nella sessione regionale. WebFetch sulle singole pagine funziona. Con l'API si potrebbe avere l'elenco completo e strutturato di tutta la provincia.
- **PDF provinciali storici** ("Prima infanzia enti gestori agosto 2022", "Diensttraeger Kitas und TM"): reindirizzano alla home del portale; la copia d'archivio del 2021 non è scaricabile. [fatto]
- **Sito del Comune:** la ricerca interna (italiana e tedesca) non restituisce risultati da riga di comando; le sezioni "Luoghi > Scuola & formazione" caricano le schede via JavaScript. Le sedi dei nidi comunali non sono nominate in nessuna pagina letta. [fatto]
- **3-6:** tre ricerche web (tedesco e italiano) non trovano un elenco dei Kindergärten o delle scuole dell'infanzia di Merano. Il sito del Kindergartensprengel non è stato individuato e i domini provati non esistono. Restano da provare: la "Schulsuche" del portale provinciale, una richiesta al Sprengel e al Circolo, il servizio rette del Comune (che incassa le rette delle scuole dell'infanzia).
- **Voci dubbie:** "Asilo nido Yosyag" (stesso indirizzo di un ristorante) e la "Microstruttura Lagundo" con indirizzo a Merano.
- INPS "Servizi vicino a me": non verificabile (dietro SPID).

## Dati per la sintesi
```
istat_0_3_2024=29; elenco_vero_0_3=7 (+23 Tagesmütter non elencabili, +1 dubbia); elenco_vero_3_6=non determinato; R_0_3=6/7; C_0_3=1/7; A_0_3=0/7; W_0_3=5/7; solo_web_0_3=1; M_3_6=0/?; C_3_6=0/?; W_3_6=2 confermate (Untermais, Waldorf) su denominatore ignoto; solo_web_3_6=n.d.; non_trovate_vs_istat=23 servizi domiciliari (Tagesmütter); campi_rette=portale provinciale (tariffe provinciali generali, non per struttura); campi_orari=siti dei gestori Kita; campi_posti=siti dei gestori (solo Popele); campi_scadenze=sito comunale (nido comunale); campi_progetto=siti dei gestori; campi_lingua=siti dei gestori (bilinguismo IT/DE); campi_inclusione=nessuna fonte
```

## Fonti
- Agenzia per la famiglia, "Gli asili nido": https://famiglia.provincia.bz.it/it/gli-asili-nido ; "Elenco microstrutture" (aggiornato 10/09/2026): https://famiglia.provincia.bz.it/it/elenco-microstrutture-prima-infanzia ; "Microstrutture aziendali" (15/05/2026): https://famiglia.provincia.bz.it/it/microstrutture-aziendali-infanzia ; "Tagesmütter" (02/12/2025): https://famiglia.provincia.bz.it/it/assistenti-domiciliari-infanzia-tagesmutter (lette con WebFetch, 2026-11-20)
- Comune di Merano, "Asilo nido - iscrizione" (aggiornata 29/09/2026): https://www.comune.merano.bz.it/it/Servizi/Educazione_e_formazione/Asilo_nido_-_iscrizione ; ufficio "Prima infanzia e Scuole dell'infanzia": https://www.comune.merano.bz.it/it/Amministrazione/Uffici/Prima_infanzia_0-3_anni_e_Scuole_dell_infanzia_3-6_anni_ ; ordinanze dell'albo con "nido comunale TicoMaia" (contengono nomi di dipendenti, non riportati): https://albopretorio.gvcc.net/gem2go/amtstafel/document/21051/20c240e8-9206-404a-b0db-82796529dcf9 (accesso 2026-11-20)
- Gestori: https://www.popele.it/en/strutture/kita-popele/ ; https://www.casabimbo.it/c/le-nostre-microstrutture ; https://www.casabimbo.it/c/asilo-nido-aziendale ; brochure Coopselios (marzo 2026): https://www.coopselios.com/uploads/2026/03/Nido_Bolzano_brochure_dopoREV_27.02_DEF.pdf (accesso 2026-11-20)
- Federazione Steiner-Waldorf, soci: https://www.educazionewaldorf.it/federazione/?pagina=soci ; rivista FF 19/2026 sul Kindergarten Meran-Untermais: https://www.forum-p.it/smartedit/documents/inhaltelements/_published/ff_19_26_kindergarten.pdf (accesso 2026-11-20)
- Solo estratti di ricerca, non letti: https://home.asdaa.it/download/Reglement_ViVa_GB_Meran_Regolamento__ViVa_CS_Merano(1).pdf (risponde "Service Unavailable"); https://www.provincia.bz.it/verwaltung/personal/downloads/Adressen_der_Kindergartendirektionen(2).pdf
- Note collegate: [[Provincia autonoma di Bolzano]], [[ASSB Bolzano - Asili nido e microstrutture]], [[Federazione Scuole Steiner-Waldorf soci]], [[ISTAT - Nidi e servizi integrativi per la prima infanzia]], [[MIM - Anagrafe scuole statali e paritarie]], [[INPS - Agenda asili nido e mappa Bonus nido]]
