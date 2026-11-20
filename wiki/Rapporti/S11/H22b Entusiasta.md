---
tipo: rapporto
sessione: S11
ruolo: Entusiasta
ipotesi: H22b
---
# H22b — Rapporto dell'Entusiasta (S11)

Tutte le fonti hanno data di accesso **2026-11-20**. "Letta" = pagina o file aperto direttamente (curl o WebFetch). Ogni affermazione è etichettata [fatto] o [stima].

## 1) Tesi in 5 righe
1. La frammentazione è reale e misurabile. Nei 5 comuni provati, un genitore di un bambino 0-3 deve consultare **da 6-7 a 11-12 siti o sottoportali distinti**. Nei comuni piccoli l'informazione online semplicemente **manca**: Castel Guelfo ha una pagina "Educazione" ferma all'aprile 2024 con un solo link, e le pagine scuola di Valbrembo oggi danno errore 500.
2. La mappa INPS **non** chiude lo spazio. È dietro SPID (il Portale reindirizza al login), contiene solo i dati anagrafici delle strutture (nome, sede, tipologia, regime) e nel 2026/27 si alimenta con file Excel inviati dai comuni. Non dà rette, posti liberi, scadenze, graduatorie né agevolazioni locali, e non è indicizzabile dai motori di ricerca.
3. Le misure che cambiano davvero il conto della famiglia sono locali e a finestra breve. Nidi Gratis Plus Lombardia 2026/27 era aperto alle famiglie **dal 27/10 al 19/11/2026**, cioè fino a ieri. 38 comuni del Varesotto non hanno aderito. Il buono servizio Puglia era aperto dal 29/6 al 17/7. Nessun aggregatore pubblico o privato le collega al singolo comune.
4. Il canale senza pubblico esiste ed è il nido, non il bonus. "asilo nido [comune]" dà **10 suggerimenti su 10** in tutti gli 11 comuni testati sopra i 20.000 abitanti (anche Vimercate, Seregno, Trani, Castel San Pietro Terme). Le pagine sui bonus locali vanno agganciate a quelle sui nidi.
5. Il miglior pagatore realistico sono i **nidi privati con posti liberi**: il 46% dei privati non ha lista d'attesa. Seguono Ambiti e Centri per le famiglie (SaaS) e il welfare aziendale. BonusX corporate dimostra che le aziende pagano per il "welfare pubblico" dei dipendenti, ma copre il livello nazionale, non quello comunale.

## 2) Evidenze

| # | Affermazione | Etichetta | Fonte (URL) | Accesso | Letta direttamente |
|---|---|---|---|---|---|
| E1 | INPS (11/9/2026): la mappa riguarda le "strutture convenzionate per il Bonus nido", con dati "rilevanti ai fini della gestione del contributo". Nel 2026/27 gli enti locali li trasmettono alle Direzioni regionali INPS; dal 2027/28 passano dalla PDND. "Nelle more… gli utenti devono far riferimento agli elenchi comunali" | fatto | https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-una-mappa-per-geolocalizzare-le-strutture-convenzionate.html | 2026-11-20 | sì (curl) |
| E2 | Campi comunicati: nome, sede operativa, tipologia di servizio, regime gestionale, titolo abilitativo. Tipologie: nidi, micronidi, sezioni primavera, spazi gioco, servizi domiciliari. Fase transitoria con file Excel | fatto (fonte secondaria) | https://www.fiscoetasse.com/new-rassegna-stampa/4476-asili-nido-i-dati-che-contano-per-il-contributo-inps.html | 2026-11-20 | sì (WebFetch) |
| E3 | Mappa online con dati del "censimento di luglio 2026", ricerca per provincia o posizione; l'accesso al Portale richiede SPID, CIE o CNS | fatto (secondaria) | https://www.informazionefiscale.it/bonus-famiglia-servizi-asili-mappa-inps-novita | 2026-11-20 | sì |
| E4 | `serviziweb2.inps.it/AS0207/PortaledelleFamiglie/` reindirizza a `loginSPID.jsp`: senza login non si vede nulla, quindi la mappa non è indicizzabile | fatto | https://serviziweb2.inps.it/AS0207/PortaledelleFamiglie/ | 2026-11-20 | sì (curl, redirect) |
| E5 | Scheda INPS: il Portale si usa "con la propria identità digitale". Comprende "Servizi vicino a me" (centri per le famiglie, centri vaccinali, consultori, farmacie, ospedali) | fatto | https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.portale-delle-famiglie.portale-delle-famiglie.html | 2026-11-20 | sì |
| E6 | Registro open data Lombardia "Strutture di offerta sociale prima infanzia", aggiornato il 14/11/2026: **2.707 unità** e 72.319 posti (2.091 asili nido, 291 nidi famiglia, 261 micronidi, 64 centri prima infanzia), con coordinate e telefono. Milano 391 unità, Bergamo 39, Valbrembo 0. Licenza non indicata nei metadati API | fatto | https://www.dati.lombardia.it/resource/pej5-wp65.json | 2026-11-20 | sì (API) |
| E7 | Il Comune di Milano elenca circa 101 nidi comunali, 30 in appalto e 63 privati accreditati, cioè circa 194 contro le 391 unità del registro regionale. I PDF comunali riportano **i posti disponibili per sede** | fatto (conteggio mio) | https://www.comune.milano.it/servizi/scuola/nidi-d-infanzia-e-sezioni-primavera (allegati n.1 e n.2) | 2026-11-20 | sì |
| E8 | Nidi Gratis Plus 2026/27, adesione famiglie: sportello **27/10/2026–19/11/2026**, dotazione 20 M€ | fatto | https://www.regione.lombardia.it/content/dam/rl/canali-tematici-istituzione/09-attivita-istituzionali/03-lombardia-semplice/red-catalogo-bandi/allegati/GdLBandi_CalendarioBandi2026_31Ottobre.pdf | 2026-11-20 | sì (pdftotext) |
| E9 | 38 comuni della provincia di Varese non hanno aderito a Nidi Gratis Plus. Senza adesione del Comune i residenti sono esclusi (denuncia di CGIL, CISL e UIL, 10/7/2026) | fatto | https://www.saronnonews.it/2026/07/10/nidi-gratis-plus-la-denuncia-dei-sindacati-38-comuni-in-provincia-di-varese-non-hanno-aderito/ | 2026-11-20 | sì (WebFetch) |
| E10 | Castel San Pietro Terme, notizia del 17/11/2026: 213.840 € FSE+ per abbattere le rette 0-3 con ISEE ≤ 26.000 €. La pagina **non dice come fare domanda** | fatto | https://www.comune.castelsanpietroterme.bo.it/notizia/misure-di-sostegno-alla-fruizione-dei-servizi-educativi | 2026-11-20 | sì |
| E11 | Centro per le famiglie di Castel San Pietro Terme: fornisce "informazioni su agevolazioni economiche… (bonus nido…)" solo **il venerdì, 9-12 e 15-18**, in presenza | fatto | https://www.comune.castelsanpietroterme.bo.it/servizio/centro-per-le-famiglie | 2026-11-20 | sì |
| E12 | Castel Guelfo: la pagina "Educazione e formazione" contiene solo un link al portale Urbi ed è aggiornata al 18-04-2024. Nessuna pagina su nidi o contributi trovata | fatto | https://www.comune.castelguelfo.bo.it/servizi/educazione-e-formazione | 2026-11-20 | sì |
| E13 | Valbrembo: sito "in manutenzione" (avviso del 3/11/2026). Le pagine iscrizione nido e infanzia restituiscono HTTP 500 | fatto | https://www.comune.valbrembo.bg.it/servizi/educazione-e-formazione/richiedere-iscrizione-allasilo-nido | 2026-11-20 | sì (curl) |
| E14 | Informafamiglie (Regione Emilia-Romagna) aggrega per distretto, ma **non ha il distretto di Imola**. La pagina "Sostegno economico" di Bologna è aggiornata al 06-05-2025 | fatto | https://www.informafamiglie.it/ · https://www.informafamiglie.it/bologna/sostegno-economico-alle-famiglie | 2026-11-20 | sì |
| E15 | ISTAT 2023/24: 14.570 servizi e 378.500 posti; il 67% delle unità è privato. Liste d'attesa nel 59,5% dei nidi (68,9% nel pubblico, **54% nel privato**). I Comuni sono convenzionati con il 46,3% dei privati | fatto | https://www.istat.it/wp-content/uploads/2026/02/REPORT_OFFERTA-DI-NIDI-E-SERVIZI-INTEGRATIVI-PER-LA-PRIMA-INFANZIA.pdf | 2026-11-20 | sì |
| E16 | Bonus nido 2025: 530.197 bambini beneficiari, 217 €/mese medi per 6,7 mensilità medie; il 62,6% frequenta un nido privato. Lombardia 100.796 | fatto | https://www.inps.it/content/dam/inps-site/pdf/dati-analisi-bilanci/osservatori-statistici/Focus_genitorialit%C3%A0_2025.pdf | 2026-11-20 | sì |
| E17 | Bonus nuovi nati 2025: 259.287 beneficiari su 355.435 nati (ISTAT), cioè **72,9%** (Lombardia 65,7%). Lo scarto comprende anche chi supera la soglia ISEE di 40.000 € | fatto (lettura dello scarto = stima) | stesso PDF INPS | 2026-11-20 | sì |
| E18 | BonusX Corporate: "oltre 100 aziende", "890.000 utenti", "2.950 € l'anno in media per chi ha figli", "10 miliardi di welfare pubblico non riscosso". Il prezzo è su preventivo; implicitamente 1.200 € di valore con 5,6 € per ogni euro speso | fatto (numeri autodichiarati) | https://bonusx.it/corporate/ | 2026-11-20 | sì |
| E19 | Il sito pubblico di BonusX ha 201 articoli e 56 pagine nella sitemap. Le pagine comunali sono solo 1 (bonus affitto Milano), le regionali circa 6 e nessuna riguarda Nidi Gratis Plus | fatto | https://bonusx.it/post-sitemap.xml · https://bonusx.it/page-sitemap.xml | 2026-11-20 | sì |
| E20 | Prezzi consumer di BonusX: 0 / 19,95 / 79,95 / 299,95 €/anno (verificati in S9) | fatto (S9) | https://bonusx.it/prezzi/ | 2026-11-20 | no (S9) |
| E21 | Autocompletamento: "asilo nido [X]" dà 10 suggerimenti su 10 a Milano, Bergamo, Bari, Castel San Pietro, Padova, Lecce, Imola, Cremona, Trani, Seregno e Vimercate (7 a Monza). Castel Guelfo 2, Valbrembo 1. "bonus famiglie [X]" dà 0 ovunque | fatto | suggestqueries.google.com (≈80 chiamate) | 2026-11-20 | sì |
| E22 | Altri suggerimenti: "come sapere a quali bonus ho diritto", "mappa asili nido inps", "nidi gratis plus regione lombardia domanda", "catalogo centri estivi bari 2026", "contributi centri estivi castel san pietro terme" | fatto | suggestqueries.google.com | 2026-11-20 | sì |
| E23 | Puglia: Buono Servizio Minori 2026/27 con domanda online tramite SPID dal 29/6 al 17/7/2026; catalogo delle unità 0-6 accreditate approvato con determine n. 235 e 427/2026 | fatto (estratto di ricerca) | https://www.studioinpuglia.regione.puglia.it/wp-content/uploads/162_DIR_2026_00427_Determina.pdf | 2026-11-20 | no (il PDF restituiva HTML) |
| E24 | Francia: con un decreto del 2021 gli assistenti materni devono registrarsi su monenfant.fr e dichiarare i posti disponibili. Il portale è gestito dalla Cnaf | fatto (secondaria) | https://pedagogie.ac-lille.fr/sbssa/wp-content/uploads/sites/30/2022/12/01_transparence_modes_accueil_article_LOCALTIS_2021_09_01.pdf | 2026-11-20 | no (monenfant.fr blocca i bot con un captcha Radware) |
| E25 | Regno Unito: per legge ogni local authority inglese "must establish and maintain a service providing information" ai genitori (Childcare Act 2006, s.12) | fatto | https://www.legislation.gov.uk/ukpga/2006/21/section/12 | 2026-11-20 | sì |
| E26 | Germania: il Familienportal federale ha calcolatori, ElterngeldDigital, KiZ Digital e "Beratung vor Ort" | fatto | https://familienportal.de/ | 2026-11-20 | sì |
| E27 | findhelp (USA, Aunt Bertha PBC): sito gratis per le persone, ricavi da piattaforme vendute a enti sanitari e pubblici. Un listino di terzi indica 75.000 $/anno per integrazioni e API. Raccolti circa 49 M$; ha acquisito Uno Health (10/2025) | fatto (fonti terze) | https://www.g2.com/products/findhelp/pricing · https://www.cbinsights.com/company/findhelp/financials | 2026-11-20 | no |
| E28 | Indagine Uppa (13/5/2026, circa 3.000 famiglie): il carico mentale e organizzativo è la sfida principale per il 57,6%. Le famiglie chiedono "tempo e strutture", non bonus una tantum | fatto | https://www.quotidiano.net/luce/attualita/genitori-uppa-carico-mentale-63b6ea7e | 2026-11-20 | sì |
| E29 | La stampa consiglia di cercare gli aiuti comunali sul "portale istituzionale del proprio Comune": non esiste un portale unico | fatto | https://quifinanza.it/fisco-tasse/bonus-fiscali/aiuti-comunali-famiglie/927116/ | 2026-11-20 | sì |
| E30 | Bergamo: iscrizione ai nidi comunali solo online (SPID) entro il 30/4/2026. Retta = 60 € fissi più una percentuale dell'ISEE. Open day a febbraio-aprile; centro estivo da chiedere a febbraio 2027 | fatto | https://www.comune.bergamo.it/sites/default/files/2026-01/Informativa_Servizi%20Infanzia_2026-2027.pdf | 2026-11-20 | sì |
| E31 | Bari: 10 nidi comunali; iscrizione e pagamento su egov.comune.bari.it; avviso 2026/27 del 19/05/2026. Il motore di ricerca non trovava l'avviso 2026/27, solo quelli degli anni precedenti | fatto | https://www.comune.bari.it/-/asilo-nido-comunale-iscrizione-e-pagamento | 2026-11-20 | sì |
| E32 | Costi fissi annui di una SRL a basso volume: circa 3.000-5.000 € (commercialista 1.500-3.000 €, diritto camerale, bilancio, PEC) | stima di terzi (siti commerciali) | https://www.partitaiva.it/costi-srl-costituzione-gestione-imposte-commercialista | 2026-11-20 | no |

## 3) Prova sui comuni

Profilo: un figlio di 0-3 anni (in corsivo le aggiunte per un figlio di 3-6). Conto i **domini o sottoportali distinti** che il genitore deve consultare, non le pagine.

### Milano (circa 1,37 M ab. [stima]): 11-12 portali, più i siti dei singoli nidi privati
| Informazione | Portale | URL |
|---|---|---|
| Bonus nido, Assegno unico, bonus nuovi nati, bonus mamme | INPS | https://www.inps.it/it/it/sostegni-sussidi-indennita/per-genitori.html |
| Mappa nidi, Centri per le famiglie, consultori (SPID) | Portale famiglia INPS | https://serviziweb2.inps.it/AS0207/PortaledelleFamiglie/ |
| Nidi Gratis Plus | Bandi Regione Lombardia | https://www.bandi.regione.lombardia.it (calendario: E8) |
| Nidi comunali, rette, centri estivi, open day | Comune | https://www.comune.milano.it/servizi/scuola/nidi-d-infanzia-e-sezioni-primavera |
| Iscrizioni | SUSE | https://suseportale.comune.milano.it/ServiziEducativi/iscrizioneNidiScuolaInfanzia.html?servizio=NI |
| Sezioni primavera, nascituri | CRM comunale | https://servizicrm.comune.milano.it/spec/sezioniprimavera/iscrizioni |
| Graduatorie | Repository | https://repository.comune.milano.it/s/JeaMmkYMHREEYPm |
| Mappa delle sedi | Geoschool | https://www.comune.milano.it/servizi/scuola/geoschool-trova-nidi-e-scuole-dell-infanzia |
| Nidi privati non accreditati (circa 200 su 391) | solo open data regionale | https://www.dati.lombardia.it/resource/pej5-wp65.json |
| Consultori | ATS Milano o Servizi vicino a me | non verificato |
| *3-6: scuole dell'infanzia comunali o statali* | Comune / scuole | https://www.comune.milano.it/argomenti/scuola/3-6-anni |

### Bergamo (circa 120 k ab. [stima]): 9-10 portali
| Informazione | Portale | URL |
|---|---|---|
| Bonus INPS e mappa | INPS e Portale famiglia | come sopra |
| Nidi Gratis Plus | Bandi Regione Lombardia | come sopra |
| Scheda nido, elenco dei 16 nidi e poli comunali | Comune | https://www.comune.bergamo.it/procedure%3Ac_a794%3Aiscrizione.nidi%3Baccessoalservizio |
| Domanda di iscrizione (SPID) | Portale infanzia | https://infanzia-spid.comune.bergamo.it/?comune=bergamo&servizio=iscrizioni_nido |
| Rette ISEE, scadenze, centro estivo | PDF informativa | E30 |
| Spazi gioco e autonomia | Centro Famiglia (email o telefono, in presenza) | centrofamiglia@comune.bergamo.it |
| Privati (39 unità in regione contro i 16 comunali) | open data regionale | E6 |
| Consultori, ATS o ASST | — | non verificato |

### Bari (circa 316 k ab. [stima]): 9-10 portali
| Informazione | Portale | URL |
|---|---|---|
| Bonus INPS e mappa | INPS e Portale famiglia | come sopra |
| Buono Servizio Minori (SPID, 29/6–17/7) | Piattaforma Regione Puglia | bandi.pugliasociale.regione.puglia.it (non raggiungibile oggi: HTTP 000) |
| Catalogo delle strutture 0-6 accreditate | Determine regionali in PDF | E23 |
| Nidi comunali e avviso | Comune | https://www.comune.bari.it/-/asilo-nido-comunale-iscrizione-e-pagamento |
| Iscrizione e pagamento | eGov | https://egov.comune.bari.it/iscrizione-asili-nido-comunali?categoria=2 |
| Welfare comunale | SmartWelfare | https://smartwelfare.comune.bari.it/Portal/ |
| Centri estivi (catalogo comunale, bonus) | Comune | emerso dall'autocompletamento (E22), pagina non aperta |
| Carta "Dedicata a te" | Comune | https://www.comune.bari.it/-/carta-dedicata-a-te |
| Consultori ASL Bari | — | non verificato |

### Castel San Pietro Terme (BO, circa 21 k ab. [stima]): 7-8 portali, e la misura principale senza istruzioni
| Informazione | Portale | URL |
|---|---|---|
| Bonus INPS e mappa | INPS e Portale famiglia | come sopra |
| Abbattimento rette FSE+ (213.840 €) | Notizia del comune, senza modalità di domanda | E10 |
| Nidi comunali, ludoteca, percorsi per genitori | Comune | https://www.comune.castelsanpietroterme.bo.it/unita-organizzativa/ufficio-infanzia-e-sostegno-alla-genitorialita |
| Area personale, domande | Servizi online | https://servizi.comune.castelsanpietroterme.bo.it/login |
| Centro per le famiglie (venerdì, 6 ore) | Comune, in presenza | E11 |
| Portale regionale delle famiglie | Informafamiglie: distretto assente | E14 |
| Servizi sociali (Circondario, ASP) | Nuovo Circondario Imolese | https://www.nuovocircondarioimolese.it/ |
| Nidi privati ("my baby", "mamma oca", "girotondo") | siti propri | emersi dall'autocompletamento (E21) |

### Castel Guelfo di Bologna (circa 4,5 k ab. [stima]): 6-7 portali, **quasi nulla online**
| Informazione | Portale | URL |
|---|---|---|
| Bonus INPS e mappa | INPS e Portale famiglia | come sopra |
| Educazione | Comune: un solo link, fermo al 2024 | E12 |
| Servizi scolastici online | Urbi | link dalla pagina comunale |
| Servizi sociali | Circondario o ASP | come sopra |
| Nido privato ("mamma lea") | sito proprio | E21 |
| Misure FSE+ dell'Emilia-Romagna | non trovate sul sito | — |

### Valbrembo (BG, circa 4,3 k ab. [stima]): sito comunale in errore 500 (E13)
Non è possibile completare il conteggio: nessun nido nel registro regionale (E6), quindi il nido va cercato nei comuni vicini. Questo è il caso tipico del piccolo comune: per trovare il servizio il genitore deve guardare **oltre il confine comunale**.

**Sintesi [fatto per i conteggi, stima per l'interpretazione].** Il numero di portali va da **6-7 nei comuni piccoli a 11-12 a Milano**. Nei grandi comuni il problema è la quantità (sottoportali e PDF). Nei piccoli il problema è l'assenza, che sposta la ricerca sui comuni vicini e sugli uffici fisici. **Nessun portale unico** copre insieme posti, rette, scadenze e agevolazioni regionali e comunali per un dato comune.

## 4) Mappa INPS: cosa copre
- **Perimetro [fatto, E1-E2].** Comprende le strutture con titolo abilitativo rilevanti per il Bonus nido: nidi, micronidi, sezioni primavera, spazi gioco e servizi domiciliari secondo FiscoeTasse. Il comunicato INPS però parla di strutture "convenzionate". Dal titolo di un articolo di OrizzonteScuola risulta che i centri per bambini e famiglie sono esclusi dal Bonus nido (URL nella ricerca, non letto: https://www.orizzontescuola.it/bonus-asilo-nido-2026-conferma-annuale-con-semplice-prenotazione-mensilita-platea-ampliata-a-nidi-micronidi-sezioni-primavera-e-servizi-domiciliari-esclusi-centri-per-bambini-e-famiglie-e-servizi/).
- **Fonte [fatto, E1].** I dati non sono autocertificati: li comunicano gli enti locali. Nel 2026/27 lo fanno con file Excel alle Direzioni regionali INPS, dal 2027/28 tramite la PDND. È l'INPS stesso a rinviare agli "elenchi comunali" finché lo strumento non è completo.
- **Contenuto [fatto, E2].** Nome, sede, tipologia, regime gestionale e titolo abilitativo. **Non ci sono** rette, posti liberi, liste d'attesa, date di iscrizione, open day né agevolazioni regionali o comunali.
- **Accesso [fatto, E3-E4].** Serve SPID, CIE o CNS, quindi la mappa non è visibile ai motori di ricerca né condivisibile con un link pubblico.
- **Confronto con il conteggio [stima].** La mappa non si interroga senza SPID, quindi il confronto diretto non è stato possibile. Il riferimento più completo che ho trovato è il **registro open data della Lombardia** (2.707 unità, aggiornato al 14/11/2026). Il Comune di Milano pubblica solo circa metà delle 391 unità milanesi del registro, perché elenca comunali, appaltate e accreditate. A regime la mappa INPS potrebbe coprire l'elenco dei nidi autorizzati, ma resterà un **elenco anagrafico dietro login**, non uno strumento per scegliere.
- **Consapevolezza [fatto, E22].** "mappa asili nido inps" compare già tra i suggerimenti: una parte dei genitori la conosce.

## 5) Chi aggrega già, in Italia e all'estero
| Attore | Paese | Modello | Copre il livello comunale? | Numeri |
|---|---|---|---|---|
| Portale famiglia INPS | IT | pubblico, gratuito, dietro SPID | mappa dei nidi (dati anagrafici) e Servizi vicino a me; nessuna agevolazione comunale | E1-E5 |
| App IO | IT | pubblica | servizi dei comuni aderenti (circa 1.480 con il modello "Asilo nido", dato dello screening S9) | non riverificato |
| BonusX | IT | privato: freemium da 19,95 a 299,95 €/anno; pratiche con CAF e patronati partner; corporate su preventivo | sito pubblico quasi solo nazionale (1 pagina comunale su 257) | 890.000 utenti e oltre 100 aziende, autodichiarati (E18-E19) |
| Informafamiglie | IT (Emilia-Romagna) | pubblico regionale, per distretto | sì, ma con distretti mancanti (Imola) e pagine vecchie | E14 |
| Centri per le famiglie | IT | pubblici, in presenza | sì, ma con poche ore (6 a settimana a Castel San Pietro) | E11 |
| Open data regionali (Lombardia) | IT | pubblici | elenco delle strutture, senza rette né scadenze | E6 |
| monenfant.fr (Cnaf) | FR | pubblico, obbligo per legge di dichiarare i posti liberi | sì | E24 |
| Family Information Service | UK | pubblico, obbligo per legge per ogni council | sì | E25 |
| Familienportal | DE | pubblico federale, calcolatori e domande digitali | consulenza locale | E26 |
| findhelp | USA | privato (PBC): gratis per le persone, B2B per enti sanitari e PA | sì, oltre 1 M di programmi (autodichiarato) | E27 |
| Winnie, Hoop, Tinybeans | USA, UK | directory | vedi S9: cambio di modello, chiusure | S9 |

**Lettura dell'Entusiasta [stima].** Dove esiste un aggregatore completo per comune (Francia, Regno Unito), lo ha imposto una legge e lo paga lo Stato. In Italia quell'obbligo non c'è: l'INPS ha costruito solo l'anagrafe dei nidi, dietro login. Il caso privato più vicino al "punto unico" che incassa davvero è findhelp, ma vende alle istituzioni e non ai genitori. BonusX dimostra che in Italia le aziende pagano per il welfare pubblico dei dipendenti, ma lascia scoperto il livello comunale e regionale.

## 6) Economia per l'obiettivo A, nei due modelli, e lente di utilità

### Costi
- **Modello leggero [stima].** Società: 0 € se il prodotto sta dentro una delle società software che il founder già gestisce, altrimenti 3-5 k€/anno (E32). Hosting e scraping 30-60 €/mese. LLM per estrarre i dati dai PDF comunali: circa 1.500-3.000 documenti al mese a 0,02-0,05 € l'uno, cioè 30-150 €/mese. Dominio, email e newsletter 20-50 €/mese. **Totale: circa 1,5-3 k€/anno dentro una società esistente, 5-8 k€/anno con una SRL nuova.**
- **Obiettivo A, 1-2 k€/mese netti [stima].** Con imposte al 28% circa (IRES più IRAP) servono 16,7-33,3 k€ di utile, quindi **un ricavo di circa 19-41 k€/anno** nel modello leggero.
- **Modello con collaboratori part-time [stima].** 60-116 k€/anno di costi (dalla Classifica per obiettivo) più l'obiettivo netto: **circa 77-150 k€/anno di ricavo**.

### Quanti paganti servono
| Pagatore | Prezzo di riferimento | Leggero (19-41 k€) | Con collaboratori (77-150 k€) |
|---|---|---|---|
| Nidi privati con posti liberi (scheda verificata, posti liberi, contatti) | 25 €/mese (kidsgo Basic-Plus 15-29 €, BeMyHero 9,90 €: S9) | **63-137 nidi** | 257-500 nidi |
| Ambiti territoriali e Centri per le famiglie (guida 0-6 in white label) | 2.000-3.000 €/anno [stima; canoni SaaS comunali di Trento 4-15 k€/anno, dagli estratti di ricerca, non letti] | **7-20 enti** | 26-75 enti |
| Aziende (modulo "welfare locale" per i dipendenti genitori) | 12-24 €/dipendente/anno [stima, molto sotto i circa 210 € impliciti di BonusX, E18] | 800-3.400 dipendenti | 3.200-12.500 dipendenti |
| Genitori (avvisi sulle scadenze) | 9,90-19,95 €/anno (riferimento BonusX) | 950-4.100 | 3.900-15.000 |
| Pubblicità | RPM 3-8 € (S9) | 2,4-13,7 M di pagine viste l'anno | non realistico |

**Bacino dei nidi paganti [stima].** Le unità private sono circa 9.760 (67% di 14.570, E15). Il 46% non ha lista d'attesa, quindi **circa 4.500 nidi privati hanno posti da riempire**. Per il modello leggero servono 63-137 paganti, cioè l'**1,4-3% di quel bacino**: è nella fascia di conversione freemium che S9 riteneva plausibile.

### Lente di utilità
- **Nati nel 2025: 355.435** [fatto, E17]. **Bambini 0-2: circa 1,2 M** [stima: 378.500 posti / 31,6% di copertura, E15].
- **Bonus nuovi nati [stima].** Circa 96.000 nati del 2025 non risultano beneficiari (27,1%). È un limite superiore del mancato utilizzo, perché comprende chi supera i 40.000 € di ISEE. A 1.000 € per nato vale fino a circa 96 M€ non incassati.
- **Bonus nido** [fatto, E16]: 530.197 beneficiari, con una media di 6,7 mensilità sulle 11 possibili. Ingressi tardivi, frequenza parziale e domande in ritardo non si possono separare [stima].
- **Nidi Gratis Plus** [fatto, E8-E9]: una finestra di 24 giorni; adesione comune per comune, con 38 comuni non aderenti nel solo Varesotto.
- **Valore per famiglia** [stima]. BonusX dichiara 2.950 € l'anno per chi ha figli (dato autodichiarato, E18). Una stima prudente del tempo risparmiato è di 3-6 ore l'anno per famiglia: 6-12 portali da trovare, PDF da leggere, finestre da ricordare.
- **Se il servizio raggiungesse il 5% delle famiglie con figli 0-3** [stima]: circa 60.000 famiglie. Bastano poche centinaia di domande in più all'anno per misure da 500-3.600 € per generare un valore sociale di ordini di grandezza superiore ai ricavi.

## 7) Idee concrete (ordinate dalla migliore)

### I1. "Nido e agevolazioni per comune": directory completa dei nidi con scheda delle agevolazioni locali (idea consigliata)
- **Cosa.** Una pagina per comune e quartiere con:
  - tutti i nidi, dagli open data regionali e dai PDF comunali con i posti disponibili;
  - rette e regole ISEE del comune;
  - finestre di iscrizione, open day e graduatorie;
  - misure regionali e adesione del comune (Nidi Gratis Plus, FSE+ in Emilia-Romagna, Buono Servizio in Puglia);
  - bonus INPS;
  - avvisi gratuiti via email o Telegram per comune ed età del bambino.
- **Chi paga e quanto.** I **nidi privati con posti liberi**: profilo verificato, posti liberi aggiornati, contatti e open day a 19-29 €/mese (riferimenti kidsgo 15-29 €, BeMyHero 9,90 €). A complemento, l'eventuale affiliazione con chi gestisce le pratiche (CAF o BonusX: programma di affiliazione non trovato).
- **Canale per i primi 100 utenti.** SEO su "asilo nido [comune]", con 10 suggerimenti su 10 in tutti i comuni sopra i 20.000 abitanti testati (E21). Si parte dalla Lombardia: 924 comuni con strutture e 2.707 unità geolocalizzate in open data. I primi 100 genitori arrivano dalle pagine di Milano, Brescia, Monza e Bergamo. I primi nidi si contattano per telefono o email partendo dal registro, privilegiando quelli senza convenzione comunale.
- **Vantaggio dello scraping.** Bisogna unire tre fonti eterogenee: open data regionali; PDF comunali (posti disponibili, tabelle ISEE, avvisi) da migliaia di siti costruiti con 4-5 CMS ricorrenti (Municipium, Liferay, Drupal "procedure"); calendari dei bandi regionali. È il lavoro in cui il founder è forte, e l'estrazione con l'LLM rende sostenibile la coda dei comuni piccoli.
- **Numeri per l'obiettivo A.**
  - **Leggero:** 63-137 nidi a 25 €/mese, cioè l'1,4-3% dei circa 4.500 privati con posti liberi.
  - **Con collaboratori:** 257-500 nidi, con un commerciale part-time.
- **Utilità [stima]: alta.** Riguarda la scelta del nido e le misure con finestre brevi; risparmia ore e, in alcuni casi, centinaia di euro.
- **Penalità per conflitto con il lavoro:** −2 (scraping interno al prodotto).

### I2. "Guida 0-6 del territorio" in white label per Ambiti e Centri per le famiglie (SaaS per la PA)
- **Cosa.** Lo stesso database, servito come widget o sottosito sul dominio dell'ente, con newsletter mensile alle famiglie e un report sulle scadenze. Sostituisce le pagine scritte a mano che invecchiano (Informafamiglie Bologna è ferma a maggio 2025) e allunga le 6 ore settimanali di sportello.
- **Chi paga.** Ambiti territoriali, Unioni e Circondari. Il prezzo di 2.000-3.000 €/anno è una stima; rientra nell'affidamento diretto previsto dal D.Lgs. 36/2023 (non riletto in questa sessione).
- **Canale.** Non serve un pubblico: si vende direttamente a enti elencati in modo pubblico (mappa dei Centri per le famiglie, elenco degli Ambiti). Il primo cliente naturale è un distretto che manca su Informafamiglie, come Imola.
- **Numeri.** **Leggero: 7-20 enti.** Con collaboratori: 26-75.
- **Utilità [stima]: alta.** Il servizio pubblico raggiunge le famiglie che non cercano su Google.
- **Rischi.** Cicli di vendita lunghi; la PA tende a farsi il prodotto da sola. Penalità −2.

### I3. Modulo "welfare locale" per aziende e piattaforme di welfare (B2B2C)
- **Cosa.** Per ogni dipendente genitore: comune ed età del figlio, quindi misure, scadenze e nidi vicino a casa. È complementare a BonusX, che lavora sul nazionale e sulle pratiche.
- **Chi paga.** HR o piattaforme di welfare. Il prezzo di 12-24 €/dipendente/anno è una stima; il riferimento è BonusX corporate, che vale circa 210 €/utente in modo implicito (E18).
- **Canale.** Senza pubblico: vendita a 10-20 aziende medie o accordo con una piattaforma. **Attenzione:** se il prodotto diventa un **feed di dati venduto a una piattaforma terza**, scatta la penalità **−8**. Va venduto come servizio all'azienda (−2).
- **Numeri.** Leggero: 800-3.400 dipendenti, cioè 4-15 aziende da 200 dipendenti. Con collaboratori: 3.200-12.500.
- **Utilità [stima]: media.** Raggiunge solo i dipendenti di aziende strutturate.

### I4. Avvisi per comune ed età del bambino (abbonamento per i genitori)
- **Cosa.** "Ti scriviamo quando si apre la finestra che ti riguarda", per esempio Nidi Gratis Plus dal 27/10 al 19/11 o le iscrizioni al nido comunale entro il 30/4.
- **Prezzo.** 9,90 €/anno, oppure gratis come gancio per I1.
- **Numeri.** Leggero: 1.900-4.100 abbonati. È difficile da raggiungere da solo e BonusX vende già gli avvisi (S9).
- **Consiglio.** Tenerlo **gratis** dentro I1: serve a far tornare i genitori e costruire una lista email, non a guadagnare.

### I5. Centri estivi, cataloghi comunali e voucher (modulo stagionale di I1)
- **Domanda [fatto, E22].** "catalogo centri estivi bari 2026", "bonus centri estivi bari", "contributi centri estivi castel san pietro terme".
- **Chi paga.** Centri privati, a 20-200 € a stagione (S9).
- Va bene come estensione di I1 da febbraio a giugno, non come prodotto a sé.

## 8) Criteri di confutazione, uno per uno (punto di vista dell'Entusiasta)
1. **Un servizio esistente aggrega già tutto per comune: NON scattato.**
   - L'INPS copre solo l'anagrafe dei nidi, dietro SPID (E1-E5).
   - BonusX ha 1 pagina comunale su 257 (E19).
   - Informafamiglie copre solo l'Emilia-Romagna, ha buchi (Imola) e pagine ferme al 2025 (E14).
   - La stampa rimanda ancora al sito del proprio comune (E29).
2. **La frammentazione reale è bassa: NON scattato.**
   - Servono 6-12 portali per comune (sezione 3).
   - Nei piccoli comuni l'informazione manca o il sito è in errore (E12-E13).
   - Le misure decisive sono regionali con adesione comune per comune (E8-E10).
3. **La mappa INPS copre già tutti i nidi: NON scattato come criterio di valore. Scattato in parte per il solo elenco, a regime.**
   - La mappa ha 5 campi anagrafici, sta dietro SPID ed è in fase transitoria con file Excel.
   - Non ha rette, posti né scadenze, e i centri per bambini e famiglie sono probabilmente esclusi.
   - Dal 2027/28, con la PDND, l'elenco dei nidi autorizzati sarà probabilmente completo: il valore va cercato **sopra** l'elenco, non nell'elenco.
4. **Non c'è un canale per farsi trovare: NON scattato per i nidi, scattato per i "bonus locali" da soli.**
   - "asilo nido [comune]" dà 10 suggerimenti su 10 anche nei comuni da 25-45 mila abitanti (E21).
   - "bonus famiglie [comune]" e "bonus nido [comune piccolo]" danno 0.
   - Il rischio delle risposte AI è reale: le risposte AI attingono a pagine come queste, ma un dato da un PDF del 2026 su posti e finestre di un comune di 20 mila abitanti oggi non è ricostruibile da un modello generalista senza una fonte aggiornata [stima].
5. **Non si coprono nemmeno i costi più un piccolo margine: NON scattato nel modello leggero, incerto con i collaboratori.**
   - I costi del modello leggero sono 1,5-8 k€/anno.
   - L'obiettivo A richiede circa 63-137 nidi paganti, cioè l'1,4-3% del bacino con posti liberi, oppure 7-20 enti.
   - Manca un benchmark italiano di conversione dei nidi: è il rischio principale (vedi Winnie e Hoop in S9).

**Verdetto dell'Entusiasta: H22b sopravvive nella forma "punto unico per comune centrato sul nido".** Le parti che reggono sono i bonus locali agganciati alle pagine dei nidi, i nidi privati con posti liberi come pagatori e la PA come secondo pagatore. "Bonus" da solo non è un prodotto.

## 9) Cosa non ho trovato / limiti
- **Mappa INPS:** non l'ho interrogata (serve SPID), quindi non posso confrontare il numero di nidi per comune con il registro lombardo. Il testo della circolare 93/2026 viene caricato via JavaScript e non l'ho letto; mi baso sul comunicato INPS e su fonti secondarie.
- **Tassi di mancato utilizzo:** non ho trovato indagini con la percentuale di genitori che non conoscono i bonus (Save the Children, Openpolis e UPB non sono emersi nelle ricerche). Ho usato solo il proxy del bonus nuovi nati (72,9%), che comprende chi è escluso per ISEE.
- **Fonti non raggiungibili:** il portale Puglia sociale (HTTP 000) e il PDF della determina pugliese (restituisce HTML). monenfant.fr blocca i bot con un captcha.
- **Prezzi e numeri mancanti:** i prezzi corporate di BonusX non sono pubblici (il valore implicito è una mia deduzione). Non ho trovato canoni SaaS comunali per prodotti simili (Municipium) né un programma di affiliazione BonusX o CAF.
- **Conteggi da completare:** gli abitanti dei comuni sono stime non verificate. Per Bari non ho aperto la pagina dei centri estivi; i consultori ATS e ASL non sono stati verificati in nessun comune.
- **Licenza dei dati:** quella del dataset lombardo non compare nei metadati; va verificata prima di ripubblicarlo, insieme alle regole del D.Lgs. 36/2006.
- **Perimetro CAF e patronati:** I1-I4 si limitano a informare e non compilano né inviano domande, quindi restano fuori dall'attività riservata. Non ho verificato se un rinvio a pagamento verso i CAF sia ammesso.

## 10) Conteggio
- **WebSearch: 13 su 20.** Mappa INPS; Nidi Gratis Lombardia; Bari e Puglia nidi; Buoni servizio Puglia; findhelp; monenfant; mancato utilizzo del bonus nido; welfare aziendale e servizi per i genitori; costi SRL; Municipium e canoni; directory dei nidi privati; indagine sui genitori; aggregatori di bonus comunali.
- **WebFetch: 7.** informazionefiscale ×2, FiscoeTasse, SaronnoNews, Quotidiano.net, QuiFinanza, Comune di Milano (403, poi letto con curl).
- **curl e letture dirette: circa 45.** INPS ×6 (news, circolare, dossier, scheda Portale, redirect SPID, Focus PDF); Comune di Milano ×4 (più 2 PDF); Bergamo ×4 (più il PDF); Bari ×5; Castel San Pietro ×5; Castel Guelfo ×4; Valbrembo ×4; Informafamiglie ×6; Nuovo Circondario Imolese; open data Lombardia ×4; BonusX ×5 (home, sitemap, corporate, nido); ISTAT PDF; calendario dei bandi lombardi; legislation.gov.uk; familienportal; Jointly ×2; monenfant (captcha).
- **Autocompletamento Google: circa 82 chiamate.**
