---
tipo: fonte
ente: "Comuni (SUAP o SUEAP), piattaforme SUAP regionali, portale nazionale impresainungiorno.gov.it"
livello: "comunale"
territorio: "Italia (campione: Lombardia, Toscana, Sardegna, Emilia-Romagna, Calabria, Campania, Marche, Veneto, Umbria)"
tipologie: [nido, micronido, nido aziendale, nido famiglia, sezione primavera, servizi integrativi, servizi domiciliari]
gestione: [privato, privato convenzionato]
campi: [nel fascicolo: titolare, sede, tipologia, capienza, requisiti dichiarati, esito; nei rari open data: anno, codice pratica, protocollo, oggetto, data]
formato: "su richiesta (pratiche); open data solo in pochi comuni (CSV di elenchi o di conteggi); albo pretorio per 15 giorni dove c'è un provvedimento espresso"
aggiornamento: "a evento; i pochi dataset trovati sono annuali o fermi al 2018-2020 (Cremona aggiornato al 2025)"
licenza: "CC BY 4.0 nei dataset trovati (Marche, Lombardia); nessuna per le pratiche"
dati_personali: "sì: legali rappresentanti, ditte individuali; per nidi famiglia e servizi domiciliari l'indirizzo è un'abitazione"
url: "https://www.impresainungiorno.gov.it/web/l-impresa-e-il-comune/elenco-nazionale-suap"
verificato_il: "2026-11-22"
affidabilita: "alta come titolare del dato (il procedimento che fa nascere il servizio), bassa come fonte consultabile: le pratiche non sono pubblicate e non c'è obbligo di pubblicarle"
tags: [fonte, suap, autorizzazione, accesso-civico]
---
# SUAP comunali e regionali

> Verifica della sessione P11 (22/11/2026), chiesta in "Verifiche aperte" del [[Catalogo delle fonti]]. Il Registro delle imprese è escluso dal progetto ([[Decisioni del progetto]], 21/11/2026) e non è stato usato.

## In breve
- **Le pratiche SUAP dei servizi 0-3 non sono pubbliche** in nessun comune e in nessuna piattaforma del campione [fatto]. Dal 2016 nessuna norma obbliga a pubblicare autorizzazioni o SCIA: il d.lgs. 97/2016 ha tolto i provvedimenti di autorizzazione dall'art. 23 del d.lgs. 33/2013 [fatto].
- **Il SUAP non è sempre il canale.** In Toscana, Calabria, Sardegna e Lombardia sì; in Emilia-Romagna (Piacenza) la domanda va al protocollo del comune; in Sicilia autorizza la Regione; in Campania e Marche autorizza il comune tramite i servizi sociali o educativi [fatto, note `Regioni/`].
- **Dove c'è un registro regionale, il dato SUAP finisce già lì** (Lombardia: elenco delle unità d'offerta da CPE, aggiornato ogni mese; Sardegna: SIWE; Toscana: SIRIA; Puglia: registro): il SUAP aggiunge solo tempestività [stima].
- **Dove il registro manca** (Calabria, Campania, Marche, Abruzzo, Basilicata, Molise, Veneto per i non accreditati) il comune è l'unico a sapere chi è autorizzato. Alcuni comuni pubblicano un elenco degli autorizzati (Napoli, Fano, Prato), la maggior parte no [fatto].
- **Open data SUAP:** rari. Il caso migliore è **Cremona** (elenco di 8.698 pratiche 2018-2025 con oggetto, 18 righe su nidi e infanzia); Mira (Veneto, 2018) ha voci per asilo nido e micronido; le Marche pubblicano solo conteggi, con una voce "servizi per l'infanzia" [fatto].
- **Nessun SUAP regionale o nazionale espone dati consultabili** sulle pratiche [fatto]. impresainungiorno.gov.it offre l'anagrafe dei SUAP e indicatori di adeguamento tecnico, non pratiche.
- **L'accesso civico è praticabile** per l'elenco dei titoli attivi, chiedendo di oscurare persone fisiche e ditte individuali; i rischi sono il rifiuto di "creare un elenco" e i tempi (30 giorni, più 10 se ci sono controinteressati) [fatto + stima].

## 1. Pubblicazione delle pratiche nei comuni del campione
| Comune (regione) | Registro regionale | Canale dell'autorizzazione | Cosa è pubblico | Esito |
|---|---|---|---|---|
| Cremona (Lombardia) | sì (UdOS da CPE) | CPE tramite SUAP | **Open data**: elenco pratiche SUAP 2018-2025 (anno, codice, protocollo, oggetto, data, link; richiedente vuoto), 18 righe su nidi e infanzia: nuova apertura di micronido, CPE, cambio di gestore, trasferimento di sede [fatto] | unico elenco di pratiche trovato |
| Milano (Lombardia) | sì | CPE su piattaforma comunale | pagina "Autorizzazioni e concessioni SUAP" in Amministrazione trasparente: **non letta** (403 a richieste automatiche) | non verificato |
| Bergamo (Lombardia) | sì | CPE tramite SUAP | albo pretorio su piattaforma JCityGov, risultati caricati via JavaScript: non interrogabile da riga di comando | non verificato |
| Prato (Toscana) | sì (SIRIA, open data regionale) | SUEAP, domanda su STAR (codice 85.10.00R), autorizzazione triennale [fatto] | open data comunale con tipologia "nido_autorizzato" ([[Comune di Prato - Open data asili nido]]) | elenco degli autorizzati sì, pratiche no |
| Firenze (Toscana) | sì | SUAP (L.R. 32/2002, art. 50) | elenco dei servizi 0-3 con privati ([[Comune di Firenze - Elenco servizi educativi 0-3]]); nel registro degli accessi un'istanza "indagine civica sui nidi comunali" del 2025 **non accolta** [fatto] | elenco sì, pratiche no |
| Sassari, Cagliari (Sardegna) | sì (SIWE, non pubblico) | SUAPE | Sassari: albo caricato via JavaScript, non interrogabile; Cagliari: PDF con soli nidi comunali e convenzionati (maggio 2025) [fatto] | pratiche no; privati non convenzionati no |
| Piacenza (Emilia-Romagna) | no (solo tavole SPI-ER) | **protocollo generale del comune**, non SUAP; validità 7 anni [fatto] | nessun elenco degli autorizzati trovato | no |
| Cosenza, Rende (Calabria) | no | Calabria SUAP (modulo E43.02) | albi Openweb: 403 (Cosenza 22/11, Rende in P10); nessun elenco dei privati [fatto] | no |
| Napoli, Battipaglia (Campania) | no | comune (servizi sociali) | Napoli: PDF dei privati autorizzati aggiornato al 03/11/2026 ([[Comune di Napoli - Nidi privati autorizzati]]); Battipaglia: albo 403 | Napoli sì |
| Fano (Marche) | no | comune, parere d'ambito | PDF "Servizi privati autorizzati 2025/26" (Test di completezza Fano) | sì |
| Civitanova Marche (Marche) | no | comune / SUAP | open data con **conteggi** SUAP per settore (2020: 1 pratica "servizi per l'infanzia") [fatto] | solo numeri |
| Mira (Veneto) | no per i non accreditati | comune | open data 2018 con voci "rinnovo autorizzazione asilo nido (D.1)", "micronido (D.2)", "nido integrato (D.4)", senza titolare [fatto, rapporto del subagente] | solo 2018 |

**Albo pretorio.** Ci finiscono solo i provvedimenti espressi (autorizzazioni rilasciate con determina), non le SCIA e le CPE, che non sono provvedimenti [stima]. Le delibere restano 15 giorni (art. 124 TUEL; art. 32 L. 69/2009) e, secondo le Linee guida del Garante del 2014, dopo quel periodo i dati personali non possono restare diffusi [fatto]. Nel campione gli albi sono quasi tutti su piattaforme che caricano i dati via JavaScript (JCityGov, Halley, Openweb dietro un firewall che risponde 403): non sono interrogabili in modo automatico e non sono indicizzati dai motori di ricerca; sette ricerche web mirate non hanno trovato nessuna determina comunale di autorizzazione di un nido [fatto]. Come fonte sistematica l'albo è inutilizzabile [stima].

**Amministrazione trasparente.** L'art. 23 vigente chiede solo gli elenchi dei provvedimenti su scelta del contraente e accordi; la lettera a) (autorizzazioni e concessioni) è stata soppressa dal d.lgs. 97/2016 [fatto, Normattiva]. Alcuni comuni continuano a pubblicare elenchi SUAP per scelta (Milano, Verona per gli impianti di telecomunicazione) [fatto].

## 2. SUAP regionali unici
- **SUAPE Sardegna** (sardegnaimpresa.eu, `/suape-fe/`): l'elenco delle pratiche richiede l'autenticazione; il codice prevede una vista "trasparenza" con data, oggetto, stato e protocollo, attiva solo per gli enti che la abilitano (non verificato se qualcuno lo fa). Nessun open data, statistica o ricerca pubblica per procedimento; nessun dataset SUAPE su dati.gov.it [fatto, subagente]. Le strutture per la prima infanzia seguono la DUA al SUAPE e poi il SIWE (DGR 53/7/2018) [fatto].
- **Calabria SUAP** (calabriasuap.it): non raggiungibile dall'ambiente di ricerca (connessione resettata, 503). Il procedimento nidi passa da lì (modulo E43.02 del 28/08/2024; FAQ 0-6 regionali). Nessuna statistica o open data trovati [fatto].
- **Altre regioni:** Umbria pubblica "Statistiche dai SUAPE" per comune, mese e categoria, senza voce infanzia nella parte letta; Emilia-Romagna (Accesso Unitario, 314 comuni su 330) solo volumi aggregati nei documenti di monitoraggio [stima, letto in sintesi]; Toscana STAR, Lombardia, Puglia, FVG: nessun dataset di pratiche trovato [fatto]. Su dati.gov.it la ricerca "SUAP" dà 836 dataset, 747 dei quali di comuni marchigiani (conteggi mensili, CC BY 4.0, quasi tutti fermi al 2019-2020) [fatto, subagente].

## 3. impresainungiorno.gov.it
- **Pubblico:** "Elenco nazionale SUAP" (quale SUAP serve ogni comune, aggiornato al 16/09/2026) e indicatori PNRR di adeguamento: 6.438 SUAP su 6.811 (94,5%) "pronti con le nuove regole", con CSV scaricabili di comuni, SUAP ed enti terzi [fatto, letto il 22/11/2026]. Sono dati tecnici, non pratiche.
- **Dietro login o riservato alle PA:** download, Catalogo SSU dei procedimenti (SPID, e-service PDND) [fatto].
- **Non presenti:** statistiche delle pratiche per tipo di attività, open data, consultazione delle pratiche [fatto]. Le funzioni che portano al Registro delle imprese non sono state usate.

## 4. Accesso civico ai comuni
- **Regole** (art. 5 e 5-bis d.lgs. 33/2013): nessuna motivazione; risposta in 30 giorni; i controinteressati hanno 10 giorni per opporsi (termine sospeso); riesame del RPCT, poi difensore civico o TAR; gratuito salvo riproduzione [fatto].
- **Limiti noti:**
  - ANAC (delibera 1309/2016): l'ente "non ha l'obbligo di rielaborare i dati"; TAR Lazio 7105/2024 (letto nel commento di lentepubblica.it): non deve creare elenchi nuovi [fatto]. Quindi va chiesto un elenco o un'estrazione che il comune già ha (registro dei titoli, estrazione dal gestionale SUAP, elenco trasmesso al SIWE o alla rilevazione ISTAT) [stima].
  - Circolare FOIA 2/2017: una richiesta si respinge solo se manifestamente irragionevole, dopo un dialogo con il richiedente [fatto].
  - Garante privacy: per gli elenchi di SCIA edilizie (2018-2019) sì all'elenco, no ai dati delle persone fisiche; per le autorizzazioni NCC (pareri del 2026) i dati di società ed enti non sono dati personali, quelli di persone fisiche e ditte individuali sì [fatto].
- **Casi simili sui nidi:** non trovati richieste FOIA pubblicate per l'elenco dei nidi autorizzati (FOIA4Journalists, Ondata, Openpolis). Firenze ha respinto nel 2025 un'istanza per un'indagine civica sui nidi comunali; Brescia ne avrebbe accolte alcune sui nidi pubblici e convenzionati (solo da estratto di ricerca) [fatto + stima].
- **Praticabilità [stima]:** buona su un comune per volta, debole come metodo nazionale (circa 7.900 comuni, risposte in tempi e formati diversi). Conviene partire dalle regioni senza registro e dai comuni capofila degli ambiti, chiedendo: tipo di servizio, indirizzo della sede, ente gestore, estremi e data del titolo, capienza, con oscuramento dei dati di persone fisiche e ditte individuali (che esclude anche i nidi famiglia in abitazione, con meno controinteressati).

## Cosa ne ricava il progetto
1. Il SUAP **non è una fonte da usare in massa**: niente dati pubblici, niente portale unico [fatto].
2. È utile **in modo mirato**: accesso civico nelle regioni senza registro (Calabria, Campania, Marche, Abruzzo, Basilicata, Molise, Veneto per i non accreditati) e per verificare i servizi "solo web" emersi nei [[Test di completezza - Sud e isole]] e [[Test di completezza - Nord e Centro]] [stima].
3. Alternativa con meno attrito: chiedere alle **regioni** l'esito delle loro rilevazioni (che raccolgono i dati dai comuni) o agli **ambiti territoriali** che danno i pareri sulle autorizzazioni [stima].
4. Gli open data SUAP comunali (Cremona) vanno aggiunti al catalogo come **segnale di aperture e cambi di gestore**, non come anagrafica [stima].

## Fonti (accesso 2026-11-22)
- Comune di Prato, "Nido d'infanzia - Autorizzazione all'apertura e al funzionamento": https://www.comune.prato.it/it/servizi/imprese-commercio/servizi-educativi-prima-infanzia/nido-infanzia-autorizzazione/archivio6_0_263.html (curl)
- Comune di Piacenza, "Servizi educativi per la prima infanzia: autorizzazione al funzionamento e controllo": https://www.comune.piacenza.it/it/servizi/servizi-educativi-per-la-prima-infanzia-autorizzazione-al-funzionamento-e-controllo (curl)
- Comune di Cagliari, "Elenco nidi privati e convenzionati" (PDF creato il 07/05/2025): https://www.comune.cagliari.it/portale/protected/217509/0/def/ref/DOC217502/ (curl)
- Comune di Cremona, elenco pratiche SUAP (dati.lombardia.it): https://www.dati.lombardia.it/api/views/vpjm-ywne/rows.csv?accessType=DOWNLOAD (curl; contati righe e oggetti, nessun nome salvato)
- Comune di Civitanova Marche, SuapClassificazione 2020: https://www.comune.civitanova.mc.it/wp-content/blogs.dir/9/files/csv/C_C770_dataset_SuapClassificazione_2020_1601311935.csv (curl)
- impresainungiorno, indicatori: https://www.impresainungiorno.gov.it/web/l-impresa-e-la-pa-centrale/indicatori (curl); elenco nazionale SUAP: url nel frontmatter (subagente)
- Albi pretori non interrogabili: https://servizi.comune.cosenza.it/openweb/albo/albo_pretorio.php (403), https://servizi.comune.battipaglia.sa.it/openweb/albo/albo_pretorio.php (403), https://www.comune.sassari.it/it/amministrazione/documenti-dati/albo-pretorio/ (JavaScript), https://bergamo.trasparenza-valutazione-merito.it/web/trasparenza/albo-pretorio (JavaScript); Comune di Milano, trasparenza SUAP e pagina CPE (403)
- Verificate dal subagente (letture dirette, elenco completo nel rapporto P11): SUAPE https://www.sardegnaimpresa.eu/suape-fe/ ; DGR 53/7/2018 https://lara.viva.cnr.it/sites/default/files/2021-07/Sardegna%20DGR%2053_7_2018%20Allegato.pdf ; modulo Calabria SUAP https://www.regione.calabria.it/wp-content/uploads/2024/10/Modulistica-SUAP-Nido-Micronido.pdf ; FAQ 0-6 Calabria https://www.regione.calabria.it/wp-content/uploads/2025/06/FAQ-0-6.pdf ; dati.gov.it https://www.dati.gov.it/opendata/api/3/action/package_search?q=SUAP ; Mira https://dati.veneto.it/SpodCkanApi/api/2/rest/dataset/3288e322-76f0-40ba-8c5e-450071a9d5f2.csv ; art. 5 e art. 23 d.lgs. 33/2013 su Normattiva ; Garante docweb 9050702, 9080951, 10264747, 10269773, 3134436 ; ANAC delibera 1309/2016 ; circolare FOIA 2/2017 ; registro degli accessi di Firenze https://amministrazionetrasparente.comune.fi.it/system/files/2026-01/2026.01.28-REGISTRO-ACCESSI.pdf ; TAR Lazio 7105/2024 (commento) https://lentepubblica.it/?p=377588
