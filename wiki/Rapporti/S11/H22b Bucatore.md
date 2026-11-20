---
tipo: rapporto
sessione: S11
ruolo: Bucatore
ipotesi: H22b
---
# H22b — Bucatore di palloncini

**Ipotesi (pre-registrata, non modificata):** bonus nazionali, regionali e comunali, nidi (non solo quelli della mappa INPS), servizi per l'infanzia e regole locali esistono, ma sono su molti portali diversi, e molti genitori non sanno nemmeno che esistono. Un aggregatore unico, aggiornato con lo scraping e personalizzato per comune ed età del bambino, ha valore anche se ogni singola informazione è già pubblica.

Ruolo: cerco di confutarla. Tutte le fonti hanno data di accesso **2026-11-20**. "Letta direttamente" vuol dire che ho aperto la pagina con curl o WebFetch e non mi sono fermato all'estratto del motore di ricerca.

---

## 1) Tesi in 5 righe

1. **La frammentazione esiste, ma lo Stato la sta già riassorbendo, e gratis.** Il Portale della famiglia INPS raccoglie già in un posto solo i bonus INPS, i "servizi di altri enti", la mappa dei nidi, la mappa dei Centri per la famiglia e "Servizi vicino a me" (consultori, centri vaccinali). Dal 2026/27 i comuni sono **obbligati** a comunicare all'INPS tutte le strutture 0-3 abilitate. Tolto l'INPS, a un genitore restano 2-3 fonti: Regione, Comune ed eventualmente l'Ambito.
2. **Sui nidi la mappa INPS copre per legge quasi tutto ciò che è lecito.** Comprende nidi, micronidi, sezioni primavera, spazi gioco e servizi domiciliari autorizzati. In Lombardia esiste già un solo dataset regionale aperto, aggiornato ogni mese, con 2.707 unità 0-3, posti, e-mail e sito. Fuori restano i centri bambini-famiglie, le ludoteche, le rette e i posti liberi.
3. **La parte che resta davvero frammentata, cioè contributi e scadenze comunali, è quella che nessuno cerca.** L'autocompletamento dà 0 suggerimenti per "bonus bebè / contributi famiglie" a Bergamo, Seriate e Torre de' Roveri, e 0-3 anche a Milano e Bari. Bonusepagamenti.it ha circa 2.000 articoli e 1 solo con "comune" nell'URL. BonusX ha raccolto 4,2 M€ e su 257 URL ha **una** pagina comunale. Chi ha soldi e incentivi SEO evita il livello comunale.
4. **Fuori dall'Italia l'aggregatore per comune lo fa lo Stato, gratis.** In Francia c'è monenfant.fr della CNAF, in Germania il Familienportal con ricerca per CAP, in Inghilterra il Family Information Service è un **obbligo di legge** di ogni council. Gli aggregatori privati o non profit di "benefits" chiudono o vivono di B2B e di grant: Benefits Data Trust ha chiuso nel 2024 con 273 dipendenti e 45 M$ di entrate nel 2022, Benefits.gov è stato chiuso e One-e-App dismesso.
5. **L'economia non torna senza un canale.** Al prezzo di BonusX (19,95 €/anno) servono circa 1.800-3.100 abbonati paganti solo per 1-2 k€/mese netti nel modello leggero. Con la pubblicità servono 0,3-1,2 M di pagine viste al mese, su query che AI Overviews e IO (le notifiche del comune) intercettano già. La manutenzione di 7.896 comuni (siti che bloccano i bot, PDF, bandi con URL nuovi ogni anno) richiede verifica umana e porta una responsabilità per le scadenze sbagliate.

---

## 2) Evidenze

| # | Affermazione | Tipo | Fonte | Accesso | Letta direttamente |
|---|---|---|---|---|---|
| E1 | INPS, 11/9/2026: la mappa riguarda le "strutture convenzionate per il Bonus nido". I dati arrivano dall'"Agenda Asili Nido" e li trasmettono gli **enti locali**. Il 2026/27 è un anno transitorio (invio alle Direzioni regionali INPS), dal 2027/28 i dati passano dalla PDND. Nel frattempo "gli utenti devono far riferimento agli elenchi comunali delle strutture accreditate". | [fatto] | https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-una-mappa-per-geolocalizzare-le-strutture-convenzionate.html | 2026-11-20 | sì (curl) |
| E2 | La circolare INPS 93 del 9/9/2026 obbliga le amministrazioni locali ad alimentare la banca dati. | [fatto] | https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-al-via-la-banca-dati-nazionale-delle-strutture-convenzionate.html | 2026-11-20 | sì (curl). Il testo della circolare è caricato via JS e non sono riuscito a estrarlo |
| E3 | L'Agenda comprende nidi, micronidi, sezioni primavera, spazi gioco e servizi educativi domiciliari autorizzati, pubblici e privati. I dati sono "forniti direttamente dagli enti territoriali e validati alla fonte". | [fatto] (fonte secondaria) | https://bonusepagamenti.it/bonus-asilo-nido-inps-agenda-asili-nido/ | 2026-11-20 | sì (curl) |
| E4 | Dopo il DL 95/2025 (circolare INPS 123/2025) il Bonus nido vale anche per micronidi, sezioni primavera e servizi integrativi "abilitati e regolamentati a livello regionale". Restano esclusi i centri per bambini e famiglie, i servizi ricreativi e pre/post-scuola. | [fatto] (fonte secondaria) | https://quifinanza.it/fisco-tasse/bonus-fiscali/bonus-asilo-nido-micronidi-sezioni-primavera/927398/amp/ | 2026-11-20 | sì (WebFetch) |
| E5 | Mappa online: nidi pubblici e privati per provincia o posizione, dati del censimento di luglio 2026. Il Portale si usa con SPID, CIE o CNS. Ci sono anche la mappa nazionale dei Centri per la famiglia e "Servizi vicino a me". | [fatto] | https://www.informazionefiscale.it/bonus-famiglia-servizi-asili-mappa-inps-novita | 2026-11-20 | sì (WebFetch) |
| E6 | Il Portale della famiglia e della genitorialità INPS "raccoglie, in un'unica piattaforma, prestazioni, servizi e contenuti informativi" con approccio "proattivo". Ha l'area "Servizi di altri enti" (amministrativi, salute, orientamento). "Servizi vicino a me" cerca centri per le famiglie, centri vaccinali, consultori, farmacie, ospedali e strutture sanitarie locali. | [fatto] | https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.portale-delle-famiglie.portale-delle-famiglie.html | 2026-11-20 | sì (curl) |
| E7 | Regione Lombardia pubblica "Strutture di offerta sociale prima infanzia": 2.707 unità (2.091 asili nido, 261 micronidi, 291 nidi famiglia, 64 centri prima infanzia). Contiene posti, indirizzo, telefono, e-mail, sito e coordinate. L'aggiornamento dichiarato è "Mensile", l'ultimo del 14/11/2026. | [fatto] (misura propria via API) | https://www.dati.lombardia.it/resource/pej5-wp65.json · https://www.dati.lombardia.it/api/catalog/v1?ids=pej5-wp65 | 2026-11-20 | sì (API) |
| E8 | Nel dataset lombardo: Milano 391 unità, Bergamo 39, Treviglio 9, Seriate 7, Torre de' Roveri 0. Le unità stanno in 924 comuni su 1.502, quindi circa 578 comuni lombardi (38%) non ne hanno nessuna. | [fatto] (misura propria) | stessa API + https://www.istat.it/storage/codici-unita-amministrative/Elenco-comuni-italiani.csv | 2026-11-20 | sì |
| E9 | Toscana pubblica il dataset regionale "Servizi educativi per la prima infanzia (3-36 mesi) - Toscana" (modificato il 19/09/2025) e "Nidi d'infanzia". Puglia ha solo dataset comunali vecchi (Lecce, 2016-2019). Il Lazio dà 0 risultati. | [fatto] (misura propria via CKAN) | https://dati.toscana.it/api/3/action/package_search?q=nidi%20infanzia · https://dati.puglia.it/ckan/api/3/action/package_search?q=asili%20nido · https://dati.lazio.it | 2026-11-20 | sì (API) |
| E10 | Nidi Gratis Plus 2026/27: 20 M€, ISEE ≤ 25.000 €, contributo pagato ai comuni. Le domande ammissibili dei comuni sono 688, per 1.167 strutture (449 comunali, 718 private). La misura c'è **solo se il comune aderisce**. | [fatto] | https://www.ilgiorno.it/cronaca/nidi-gratis-lombardia-presentazione-domande-chi-ne-ha-diritto-jq8z5vmr | 2026-11-20 | sì (WebFetch) |
| E11 | Comune di Milano: una sola pagina "Nidi d'infanzia e sezioni primavera" con iscrizioni, graduatorie (aggiornate al 12/11/2026), Geoschool, PDF dei nidi comunali e dei "Nidi in Appalto e Nidi Privati Accreditati", quote contributive, centri estivi e rimborsi. Il server risponde 403 a curl/WebFetch senza User-Agent da browser. | [fatto] | https://www.comune.milano.it/servizi/scuola/nidi-d-infanzia-e-sezioni-primavera | 2026-11-20 | sì (curl con UA browser) |
| E12 | BonusX: la sitemap pubblica ha 257 URL, di cui circa 19 regionali o locali e **1** comunale ("bonus-affitto-milano"). Non ci sono pagine su Nidi Gratis Plus. Il modello è "oltre 60 pratiche gestibili in app" affidate a "commercialisti, CAF, patronati e consulenti del lavoro". | [fatto] (misura propria) | https://bonusx.it/sitemap_index.xml · https://bonusx.it/ | 2026-11-20 | sì |
| E13 | BonusX ha raccolto 1 M€ (2022) e 3,2 M€ (2023, Giant Ventures, Exor Ventures). Dichiarava "più di 350mila utenti" (Forbes, 2023). Fatturato e abbonati: non trovati. | [fatto] (fonti secondarie) | https://www.aziendabanca.it/notizie/fintech-insurtech/bonusx-round-finanziamento?lang=it-IT · https://forbes.it/2023/10/12/anche-la-famiglia-agnelli-investe-su-bonusx-la-startup-che-semplifica-laccesso-ai-bonus-statali | 2026-11-20 | no (estratti di ricerca) |
| E14 | Valutazioni sull'App Store italiano: IO 925.219, BonusX 1.793, Bonusepagamenti.it 956. Le altre app su bonus e agevolazioni ne hanno 0-3 (Smart Bonus Italia 0, ISEE Optimizer: Bonus Nido 0, WikiWelfare 2, "Tutti i miei diritti italiani" 2). | [fatto] | https://itunes.apple.com/search?term=bonus&country=it&entity=software | 2026-11-20 | sì (API) |
| E15 | Bonusepagamenti.it ha circa 2.013 articoli in sitemap. Solo 1 ha "comune" nell'URL. | [fatto] (misura propria) | https://bonusepagamenti.it/sitemap_index.xml | 2026-11-20 | sì |
| E16 | Autocompletamento Google, misura propria. "bonus nido": Milano 6, Bari 3, Bergamo 1, Seriate 1, Torre de' Roveri 0. "contributi famiglie [comune]": 0 in tutti e 5. "bonus bebè": Milano 3, gli altri 0. "asilo nido [comune]": 10/10/9/1 (Milano, Bergamo, Seriate, Torre), quasi tutte query di navigazione verso un nido preciso. | [fatto] (misura propria) | https://suggestqueries.google.com/complete/search?client=firefox&hl=it&gl=it&q=… | 2026-11-20 | sì |
| E17 | Francia: monenfant.fr è della CNAF, cerca crèche, assistantes maternelles, relais petite enfance e altri servizi, con simulatori dei costi. Il sito ha un bot manager (Radware) che blocca curl. | [fatto] | https://monenfant.fr/ | 2026-11-20 | sì (WebFetch; curl bloccato) |
| E18 | Germania: il Familienportal federale ha "Beratung vor Ort" con ricerca per tema (Kinderbetreuung, Jugendamt, Familienberatung…) e per **Postleitzahl**. | [fatto] | https://familienportal.de/ | 2026-11-20 | sì (curl) |
| E19 | Inghilterra: il Childcare Act 2006 s.12 dice "An English local authority must establish and maintain a service providing information, advice and assistance" ai genitori sui servizi di childcare dell'area. | [fatto] | https://www.legislation.gov.uk/ukpga/2006/21/section/12 | 2026-11-20 | sì (curl) |
| E20 | USA: Benefits.gov è stato chiuso e il ruolo di "one-stop shop" è passato al benefit finder di USA.gov (oggi benefits.gov reindirizza lì). | [fatto] | https://blog.usa.gov/creating-the-new-benefits-experience-on-usa.gov-and-usagov-en-espa%C3%B1ol · redirect verificato da https://www.benefits.gov/ | 2026-11-20 | sì |
| E21 | Benefits Data Trust (non profit di accesso ai benefit, USA) ha licenziato tutti i 273 dipendenti e chiuso il 24/8/2024. Nel FY2022 aveva 45 M$ di entrate, di cui 32 M$ da grant. | [fatto] | https://whyy.org/articles/philadelphia-benefits-data-trust-closure-employees-laid-off | 2026-11-20 | sì (curl) |
| E22 | One-e-App, piattaforma di eligibility ed enrollment ai benefit attiva da vent'anni, è stata dismessa dopo un "sunset" di un anno. | [fatto] | https://about.1degree.org/one-e-app-farewell/ | 2026-11-20 | sì (curl) |
| E23 | Findhelp (USA) ha acquisito Kiip (2024) e Uno Health (2025): il settore si consolida nel B2B (sanità, enti). | [fatto] (estratto di ricerca) | https://builtin.com/articles/findhelp-acquires-uno-health-to-modernize-public-benefits-20251023 | 2026-11-20 | no (findhelp.org blocca: Cloudflare 403) |
| E24 | Mes Allocs (Francia, dal 2018): 5.500 aiuti "nationaux, régionaux, départementaux et locaux", simulazione gratuita e accompagnamento a pagamento. Oggi spinge anche il risparmio sulle "dépenses contraintes" (luce, gas, internet, assicurazioni) con "offres proposées ou négociées par Mes Allocs et ses partenaires". | [fatto] | https://www.mes-allocs.fr/ai-info | 2026-11-20 | sì (curl) |
| E25 | Sulla società editrice di Mes Allocs (EXPERTAIDE, SIREN 848790689) il registro pubblico mostra, per il 2024, ca 0 € e risultato netto −2.705 €, con 6-9 dipendenti. Interpretazione incerta: può trattarsi di conti depositati in forma confidenziale o di ricavi in un'altra entità. | [fatto] (interpretazione = stima) | https://recherche-entreprises.api.gouv.fr/search?q=EXPERTAIDE | 2026-11-20 | sì (API) |
| E26 | Take-up dell'Assegno unico: 94% nel 2024 e 93% nel 2023, più alto al Sud (97%) che al Centro-Nord. | [fatto] | https://www.famiglia.governo.it/media/h0ulmkmj/relazione-quarta-auu_13022025.pdf | 2026-11-20 | sì (pdftotext) |
| E27 | Nati in Italia nel 2025: 355.772 (−3,8%). Gennaio-luglio 2026: 196.864 (−1,1%). | [fatto] | https://www.istat.it/comunicato-stampa/natalita-e-fecondita-della-popolazione-residente-anno-2025/ | 2026-11-20 | sì (curl) |
| E28 | Comuni italiani: 7.896 (1.502 in Lombardia). | [fatto] | https://www.istat.it/storage/codici-unita-amministrative/Elenco-comuni-italiani.csv | 2026-11-20 | sì |
| E29 | Gli studi su AI Overviews danno un calo del CTR del primo risultato organico del 34,5% (Ahrefs, circa 300.000 keyword) e del 15,49% in media (Amsive). Pew registra il 26% di sessioni chiuse con il riassunto AI contro il 16% senza. | [fatto] (fonti secondarie, metodologie diverse) | https://agendadigitale.eu/mercati-digitali/ai-overviews-google-crollano-i-clic-e-cambia-la-seo-come-reagire · https://www.agi.it/innovazione/news/2025-07-25/google-ai-overviews-calo-traffico-web-32446484/ | 2026-11-20 | no (estratti di ricerca) |
| E30 | Prezzi LLM (Claude Haiku 5.5, prompt sotto 100k token): 0,10 $/MTok in input e 0,50 $/MTok in output. In batch: 0,05 e 0,25 $/MTok. | [fatto] | https://platform.claude.com/docs/en/about-claude/pricing.md | 2026-11-20 | sì (curl) |
| E31 | Patronati (L. 152/2001): fanno "attività di informazione, di assistenza e di tutela". La giurisprudenza li tratta come responsabili contrattualmente verso l'assistito per errori e ritardi (si citano Cass. 34475/2023 e 27330/2026). | [fatto] (estratti di ricerca, sentenze non lette) | https://quifinanza.it/pensioni/pensione-errore-patronato-risarcimento-danni-cassazione-sentenza/1022103/amp/ · https://www.doctrine.it/decisions/ittribgc6ybqmw4n1ckj | 2026-11-20 | no |
| E32 | IO, modello "Asilo nido": il comune manda ai genitori l'avviso di apertura delle iscrizioni e la pubblicazione delle graduatorie, con il link al flusso di iscrizione. | [fatto] | https://docs.pagopa.it/i-modelli-dei-servizi/educazione-e-formazione/asilo-nido | 2026-11-20 | no (estratto di ricerca) |
| E33 | RPM display italiano per siti di informazione o parenting: **non trovato** come dato affidabile. Refinery89 dà solo un esempio illustrativo (RPM di 2 €). | [non trovato] | https://refinery89.com/it/?p=6553 | 2026-11-20 | sì |
| E34 | Bonus nido: dal 2026 non va più richiesto ogni anno, le risorse vanno "prenotate" dal 2027 (circolare INPS 123/2025). Lo Stato sposta la misura verso l'automatismo. | [fatto] (estratto di ricerca) | https://www.ilfattoquotidiano.it/2026/02/17/bonus-asilo-nido-dora-in-poi-non-andra-piu-richiesto-ogni-anno-ma-nel-2026-bisogna-ancora-fare-domanda/8283079/ | 2026-11-20 | no |

---

## 3) Prova sui comuni

Ho scelto cinque comuni: Milano (metropoli), Bergamo (città media), Seriate (circa 25.000 abitanti), Torre de' Roveri (BG, circa 2.500 abitanti) e Bari (città media del Sud, altra Regione). Per ognuno conto le **fonti distinte** che un genitore con un figlio di 0-3 anni e uno di 3-6 dovrebbe consultare. Ho letto le pagine comunali con curl. Le colonne "fonte" sono raggruppate per ente.

### 3.1 Milano
| Tipo di informazione | Portale | URL |
|---|---|---|
| Bonus nazionali (Assegno unico, Bonus nido, mappa dei nidi, centri per la famiglia, consultori) | INPS / Portale famiglia (con SPID) | https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.portale-delle-famiglie.portale-delle-famiglie.html |
| Contributo regionale (Nidi Gratis Plus) | Regione Lombardia (Bandi e Servizi), richiesta tramite il comune aderente | E10 (ilgiorno.it). Pagina regionale non letta |
| Nidi comunali e accreditati, iscrizioni, graduatorie, quote, centri estivi, rimborsi | Comune di Milano (una pagina hub) | https://www.comune.milano.it/servizi/scuola/nidi-d-infanzia-e-sezioni-primavera |
| Iscrizione online | sottodomini del Comune (suseportale, servizicrm) | https://suseportale.comune.milano.it/ServiziEducativi/iscrizioneNidiScuolaInfanzia.html?servizio=NI |
| Nidi privati autorizzati non accreditati | Dataset regionale (non pensato per i genitori) oppure il sito di ciascun nido | https://www.dati.lombardia.it/resource/pej5-wp65.json (391 unità a Milano) |
| Scuola dell'infanzia comunale e statale (3-6) | Comune (Geoschool) e MIM | https://www.comune.milano.it/argomenti/scuola |

**Conteggio:** 4 enti (INPS, Regione, Comune, ATS per i consultori), circa 6 URL. Con il Portale INPS i consultori e i centri per la famiglia rientrano nell'INPS, quindi **3 enti effettivi**.

### 3.2 Bergamo
| Tipo | Portale | URL |
|---|---|---|
| Bonus nazionali, mappa dei nidi, consultori | INPS | come sopra |
| Nidi Gratis Plus | Regione e Comune (se aderisce) | E10 |
| Nidi comunali (elenco, iscrizione; oggi "Servizio non attivo" perché la finestra è chiusa), mensa | Comune (template Drupal/Maggioli) | https://www.comune.bergamo.it/categoria-di-servizio/educazione-e-formazione · https://www.comune.bergamo.it/procedure%3Ac_a794%3Aiscrizione.nidi%3Baccessoalservizio |
| Nidi privati | Dataset regionale (39 unità) o i loro siti | E7 |

**Conteggio:** 3 enti, più i siti dei singoli nidi privati.

### 3.3 Seriate (circa 25.000 abitanti)
| Tipo | Portale | URL |
|---|---|---|
| Bonus nazionali, mappa dei nidi | INPS | come sopra |
| Bandi comunali: voucher per le rette dei nidi (2020/21), Fondo nazionale sistema integrato 0-6 (due edizioni), Dote scuola | Comune (WordPress, template "design comuni") | https://comune.seriate.bg.it/bandi-e-avvisi/graduatoria-per-lassegnazione-di-voucher-a-sostegno-delle-famiglie-finalizzati-alla-riduzione-delle-rette-di-frequenza-di-asili-nido-micronidi-e-nidi-famiglia-per-lanno-educativo-2020-2021/ · https://comune.seriate.bg.it/bandi-e-avvisi/bando-per-lassegnazione-del-contributo-del-fondo-nazionale-per-il-sistema-integrato-di-educazione-e-di-istruzione/ |
| Nidi (7 unità, comunale e privati) | Dataset regionale / INPS | E8 |
| Nidi Gratis Plus | Regione (adesione del comune non verificata) | E10 |

**Conteggio:** 3 enti. La pagina "Educazione e formazione" del comune non elenca nemmeno il nido: le informazioni sono **sparse dentro lo stesso sito** (bandi-e-avvisi con URL nuovi a ogni edizione), più che tra un portale e l'altro.

### 3.4 Torre de' Roveri (circa 2.500 abitanti)
| Tipo | Portale | URL |
|---|---|---|
| Bonus nazionali, nidi dei comuni vicini | INPS | come sopra |
| Scuola dell'infanzia, CRE estivo comunale, borse di studio, contributo generico | Comune (Maggioli) | https://www.comune.torrederoveri.bg.it/servizi/educazione-e-formazione/ |
| Nidi | **Nessuno nel comune** (0 nel dataset regionale): servono i comuni vicini | E8 |

**Conteggio:** 2-3 enti. Il **contenuto locale da aggregare è quasi nullo** (CRE, scuola dell'infanzia).

### 3.5 Bari
| Tipo | Portale | URL |
|---|---|---|
| Bonus nazionali, mappa dei nidi, consultori | INPS | come sopra |
| Nido comunale (iscrizione su egov con SPID/CIE, avviso annuale) | Comune (Liferay) | https://www.comune.bari.it/-/asilo-nido-comunale-iscrizione-e-pagamento |
| Elenco dei centri estivi, servizi per i minori | Comune | https://www.comune.bari.it/-/elenco-centri-estivi-e-relative-sedi-in-cui-si-svolgeranno-le-attivita · https://www.comune.bari.it/argomenti/servizi-sociali-e-welfare/minori |
| Buoni servizio regionali per l'infanzia, nidi privati | Regione Puglia (portali pugliasociale e regione.puglia.it **irraggiungibili** da qui: timeout) | non verificato |
| Open data sui nidi | dati.puglia.it: solo dataset di Lecce 2016-2019 | E9 |

**Conteggio:** 3 enti (INPS, Regione, Comune). Per i nidi privati in Puglia **manca un registro regionale aperto e aggiornato**: qui la frammentazione è reale.

### 3.6 Lettura della prova (contro l'ipotesi, ma onesta)
- **[fatto]** In tutti e cinque i comuni gli enti da consultare sono 2-4, non "molti portali". Sono quasi sempre INPS, Regione e Comune, più l'ATS o ASL se non si usa "Servizi vicino a me" dell'INPS.
- **[fatto]** Nelle due città più grandi la pagina del comune fa già da hub per nidi, graduatorie, quote e centri estivi (Milano, E11).
- **[fatto]** La frammentazione vera sta in tre punti: (a) misure regionali **condizionate all'adesione del comune** (Nidi Gratis Plus: 688 domande su 1.502 comuni, E10); (b) bandi comunali sparsi negli albi con URL nuovi a ogni edizione (Seriate); (c) regioni senza registro aperto dei nidi privati (Puglia).
- **[stima]** Il criterio (2) scatta per i nidi e le misure nazionali, non per i contributi comunali. Quel residuo però è piccolo per valore e per domanda (§6, E16).

---

## 4) Mappa INPS: cosa copre

- **Perimetro [fatto, E1-E4]:** sono le strutture "abilitate" ai fini del Bonus nido. Dopo il DL 95/2025 il Bonus nido include nidi, micronidi, sezioni primavera e servizi integrativi abilitati a livello regionale (spazi gioco, servizi educativi domiciliari), pubblici e privati **autorizzati**. Un nido privato non autorizzato opera fuori norma, quindi "tutti i nidi leciti" coincide di fatto con il perimetro della mappa.
- **Esclusi [fatto, E4]:** centri per bambini e famiglie, servizi ricreativi (ludoteche), pre e post-scuola. Babysitter e tagesmutter non autorizzate non ci sono. **Non trovato:** se i "nidi famiglia" lombardi (291 unità) siano inclusi.
- **Fonte dei dati [fatto, E1, E3]:** non sono autocertificazioni delle strutture. Li trasmettono **gli enti locali** con la collaborazione delle sedi INPS, all'inizio tramite le Direzioni regionali e dal 2027/28 tramite la PDND. Il censimento di riferimento è quello di luglio 2026 (E5).
- **Limiti [fatto]:** il 2026/27 è un anno transitorio e l'INPS stesso rimanda agli elenchi comunali in caso di dubbio (E1). Il portale chiede SPID, CIE o CNS (E5). Non risultano rette, posti liberi, graduatorie né open day (non trovati nelle fonti lette).
- **Prova diretta:** **non eseguita.** Il portale chiede l'identità digitale e da qui non è accessibile. Quindi non ho potuto confrontare il numero di strutture per comune con il dataset lombardo (Milano 391, Bergamo 39) né con l'ISTAT (14.570 servizi 0-3 nel 2023/24, dal rapporto S9).
- **Implicazione per il criterio (3) [stima]:** scatta **in sostanza per i nidi** (per costruzione la mappa contiene tutte le strutture per cui si può chiedere il bonus). Non scatta per ciò che sta intorno: rette, posti, centri bambini-famiglie, ludoteche. Il valore aggiunto residuo di un aggregatore sui nidi si riduce a rette e posti liberi, cioè proprio i dati che le strutture piene (59,5%, S9) non hanno interesse a pubblicare.

---

## 5) Chi aggrega già, in Italia e all'estero

### Italia
| Attore | Cosa copre | Modello | Numeri |
|---|---|---|---|
| INPS, Portale della famiglia | Bonus INPS, servizi di altri enti, mappa dei nidi, centri per la famiglia, consultori e vaccini | Pubblico, gratuito, con SPID | E5, E6 |
| App IO | Messaggi dei comuni: modello "Asilo nido" con avvisi di iscrizione e graduatorie | Pubblico, gratuito, push | 925.219 valutazioni su iOS (E14). Circa 1.480 comuni con il modello nido secondo lo screening (dato S9, non riverificato) |
| Regioni (Lombardia, Toscana) | Registri aperti dei servizi 0-3 | Open data | 2.707 unità in Lombardia, aggiornamento mensile (E7, E9) |
| Comuni | Pagine hub su nidi e scuola (Milano, Bergamo), albi e bandi | Pubblico | E11 |
| BonusX | Bonus nazionali e qualche regionale. 1 pagina comunale | Freemium da 19,95 €/anno, pratiche tramite CAF e patronati | 4,2 M€ raccolti, 1.793 valutazioni (E12-E14) |
| Bonusepagamenti.it | News sui bonus nazionali | Editoriale, pubblicità, app | Circa 2.013 articoli, 1 comunale. 956 valutazioni (E14, E15) |
| Altre app | "Smart Bonus Italia", "ISEE Optimizer: Bonus Nido", "WikiWelfare", "Tutti i miei diritti italiani" | vari | 0-2 valutazioni ciascuna (E14) |

**[fatto]** Nessuno in Italia aggrega in modo completo per comune. Il criterio (1) **non scatta in senso stretto**. Ma il motivo osservabile non è che "nessuno ci ha pensato": chi ha capitale e incentivi SEO (BonusX, Bonusepagamenti) produce contenuti nazionali e salta quelli comunali (E12, E15) **[stima]**.

### Estero
| Paese | Chi | Pubblico o privato | Esito |
|---|---|---|---|
| Francia | monenfant.fr (CNAF) | Pubblico, gratuito | Attivo (E17) |
| Francia | Mes Allocs | Privato: simulazione gratis, accompagnamento a pagamento, poi risparmio su energia e assicurazioni con partner | 5.500 aiuti. Dati finanziari pubblici poco leggibili (CA 2024 = 0 nel registro, E24-E25) |
| Germania | Familienportal (ricerca "vor Ort" per CAP) | Pubblico | Attivo (E18) |
| Inghilterra | Family Information Service di ogni council | **Obbligo di legge** | Childcare Act 2006 s.12 (E19) |
| USA | Benefits.gov | Pubblico | **Chiuso**, assorbito da USA.gov (E20) |
| USA | Benefits Data Trust | Non profit con grant | **Chiusa** il 24/8/2024 nonostante 45 M$ di entrate (E21) |
| USA | One-e-App | Piattaforma di enrollment | **Dismessa** (E22) |
| USA | Findhelp | Gratis per l'utente, pagato da enti e sanità (B2B) | Si consolida acquisendo (Kiip, Uno Health) (E23) |

**Distribuzione [stima]:** dei casi esteri con esito noto, il "one-stop shop" informativo per famiglie sopravvive quando è **pubblico** o finanziato da **B2B o grant**. Non ho trovato nessun caso di aggregatore B2C di informazioni pubbliche per famiglie che si regga sull'abbonamento dei genitori con numeri pubblici. Mes Allocs ha diversificato verso le commissioni su energia e assicurazioni.

---

## 6) Economia per l'obiettivo A e lente di utilità

### 6.1 Costi del modello leggero [stima]
- Società (SRL): commercialista, diritto camerale, PEC, conto. Stima 2.500-4.500 €/anno. Fonte non letta: ordine di grandezza da prassi.
- Hosting e scraping: VPS, proxy residenziali per i siti che bloccano i datacenter (Milano dà 403 a curl, monenfant e findhelp bloccano, la Puglia è irraggiungibile): 50-250 €/mese.
- LLM: con Haiku 5.5 in batch (0,05 $/MTok in input, E30), 7.896 comuni × 30 pagine × 5.000 token al mese fanno circa 1,2 MLD token, cioè **circa 60 $/mese**. **Il costo dell'LLM non è il problema.**
- Verifica umana (il problema vero): con 7.896 comuni × circa 8 misure o scadenze l'anno si arriva a circa 63.000 schede, e a 3 minuti l'una a circa 3.150 ore l'anno, cioè **circa 2 persone a tempo pieno**. Il modello leggero regge solo limitandosi a 100-300 comuni grandi, o pubblicando senza verifica. La seconda strada porta al rischio legale descritto in §6.4.
- Totale del modello leggero: circa 5-8 k€/anno.

### 6.2 Quanto incassare per 1-2 k€/mese netti [stima]
- Con utili distribuiti da una SRL (IRES 24% + IRAP circa 3,9%, poi 26% sul dividendo) restano circa 0,53 € per ogni euro di utile. Per 12-24 k€ netti l'anno servono 22-45 k€ di utile, cioè **circa 29-53 k€ di ricavi** al netto dei costi. Il regime forfettario personale non è un'alternativa probabile, perché chi ha un reddito da lavoro dipendente sopra 30 k€ ne è escluso (da verificare, norma non letta).
- **Abbonamento genitori** al prezzo di BonusX (19,95 € IVA inclusa, cioè 16,35 € netti): servono **circa 1.800-3.200 abbonati paganti**. Con una conversione da gratuito a pagamento del 2-5% (non ho trovato un benchmark per il settore) servono 36.000-160.000 utenti registrati. Riferimento: BonusX, con 4,2 M€ e 350.000 utenti dichiarati, non pubblica quanti paghino (E13).
- **Pubblicità:** con RPM 2-8 € (non trovato, E33) servono **3,6-26 M di pagine viste l'anno, cioè 0,3-2,2 M al mese**. Le query comunali che non sono navigazione verso un nido danno 0-6 suggerimenti nelle città e 0 nei comuni piccoli (E16). AI Overviews riduce il CTR del primo risultato del 15-35% (E29).
- **Modello con collaboratori (60-116 k€/anno):** il fabbisogno cresce di circa 2-4 volte, cioè **circa 4.000-7.500 abbonati** o **circa 1,2-4,8 M di pagine viste al mese**. Coerente con S9: con la pubblicità servono 0,6-1,7 M di pagine viste al mese per 60 k€.
- **Altri pagatori:**
  - Comuni (SaaS): hanno già siti con template PNRR "design comuni" (Seriate) e IO.
  - Welfare aziendale: un servizio informativo non è un bene "spendibile" dal credito welfare. Non ho trovato voci di catalogo "informazione sui bonus" (ricerca senza esito). Jointly ha già "Professione Genitori".
  - Nidi privati: pieni al 59,5% (S9).
  - Pratiche: perimetro CAF e patronati (§6.4).

### 6.3 Lente di utilità [stima, dove indicato]
- Platea [fatto]: 355.772 nati nel 2025 (E27). I bambini 0-5 sono circa 2,1-2,2 M [stima: circa 6 coorti da 355-400 mila].
- Il non take-up delle misure nazionali principali è basso: Assegno unico al 94% (E26), Bonus nido avviato verso l'automatismo (E34). **[stima]** Il "denaro lasciato sul tavolo" a livello nazionale è limitato. Il valore medio dei bonus comunali non richiesti: **non trovato**.
- Ore risparmiate: non ho trovato studi italiani. **[stima]** Per un genitore la ricerca reale è 2-3 siti istituzionali, circa 1-2 ore l'anno concentrate nelle finestre di iscrizione. È un beneficio vero ma piccolo per famiglia, e le notifiche di IO ne coprono parte (E32).

### 6.4 Rischi legali
- **Responsabilità per informazioni sbagliate [stima]:** chi vende un servizio a pagamento che "ti avvisa delle scadenze" assume un'obbligazione contrattuale. Una scadenza sbagliata (iscrizione al nido, bando per le rette) produce un danno quantificabile: un anno di retta privata contro quella comunale, migliaia di euro. Per un servizio gratuito il rischio è minore ma non nullo (art. 2043 c.c.). Le clausole di esonero verso i consumatori sono deboli (norma non letta).
- **CAF e patronati [fatto, E31]:** i patronati informano e assistono, e rispondono contrattualmente dei loro errori. **[stima]** Dare informazioni non è un'attività riservata. Compilare e inviare domande per conto terzi è il loro mestiere: BonusX infatti lo affida a CAF e patronati (E12). Un aggregatore che vuole monetizzare le pratiche diventa un intermediario che porta clienti ai CAF, con margini bassi (circa 4 € per DSU secondo lo screening S9).
- **Riuso dei dati [stima]:** testi e PDF comunali sono documenti pubblici riusabili (D.Lgs. 36/2006). Il rischio legale qui è basso. Il rischio pratico sono i blocchi antibot (Milano, monenfant, findhelp: E11, E17, E23).

### 6.5 Esposizione all'AI
- **[stima]** Domande come "che bonus ci sono a [comune] per un bimbo di 1 anno?" sono il caso d'uso tipico degli assistenti AI con ricerca web. Le fonti sono pagine pubbliche e indicizzabili: ciò che l'aggregatore raccoglie lo raccoglie anche l'assistente. Il vantaggio dell'aggregatore regge solo se i dati sono **più freschi e verificati**, e questo costa la verifica umana di §6.1.
- **[fatto]** I CTR organici calano con AI Overviews (E29). Test diretto su ChatGPT o Gemini per un comune: **non eseguito**.

---

## 7) Idee concrete: le ovvie, attaccate

| Idea ovvia | Cosa la uccide |
|---|---|
| **App o sito "tutti i bonus e i nidi del tuo comune" in abbonamento** | Il concorrente è lo Stato, gratis: Portale INPS, mappa dei nidi, IO (E5, E6, E32). BonusX con 4,2 M€ non ha fatto il livello comunale (E12, E13). Servono circa 1.800-3.200 paganti per 1-2 k€/mese (§6.2). La domanda comunale vale 0 sotto i 100.000 abitanti (E16). Una scadenza sbagliata in un prodotto a pagamento è un danno risarcibile (§6.4). |
| **Newsletter personalizzata per comune ed età** | Non c'è un canale di acquisizione (nessun pubblico, query comunali vuote). IO manda già le notifiche del comune su iscrizioni e graduatorie (E32). La matrice comuni × età (7.896 × 6) va verificata ogni anno (§6.1). La monetizzazione via sponsor locali è debole (S9: 9,90 €/mese per BeMyHero, 20 € per evento per RomaperBambini). |
| **SaaS per i comuni ("portale famiglie" chiavi in mano)** | I comuni hanno appena rifatto i siti con i fondi PNRR su template standard (osservato: "design comuni" a Seriate, Maggioli e Liferay altrove). La PDND e l'Agenda INPS raccolgono già i dati dei nidi (E1). Le vendite alla PA (MEPA, gare) non sono delegabili né compatibili con 5 ore a settimana [stima]. |
| **Canale welfare aziendale (B2B2C)** | Le piattaforme welfare vendono beni e servizi spendibili dal credito welfare. Un servizio informativo non ha un catalogo di riferimento (nessuna evidenza trovata). Jointly offre già contenuti per genitori. Servono vendite B2B lunghe [stima]. |
| **Lead ai nidi privati** | Il 59,5% dei nidi è pieno (S9). Winnie ha abbandonato il modello a lead (S9). Il dataset lombardo dà gratis a chiunque nome, posti, e-mail e sito di 2.707 strutture (E7), quindi la directory è una commodity. Ora c'è anche la mappa INPS (E1). |
| **Pagine SEO per comune + pubblicità** | Servono 0,3-2,2 M di pagine viste al mese (§6.2). Gli editori del settore (Bonusepagamenti: circa 2.000 articoli, 1 comunale) mostrano dove sta il volume, cioè sui bonus nazionali (E15). AI Overviews toglie dal 15 al 35% dei clic (E29). |
| **Upsell "facciamo noi la domanda"** | È il perimetro di CAF e patronati: servono un partner e una responsabilità contrattuale (E31). È la strada già presa da BonusX (E12), con margini bassi per pratica. |

**Cosa resta in piedi [stima]:** una *risorsa gratuita* (per esempio uno strumento open data o un widget per le associazioni di genitori) sui contributi comunali delle 100-300 città maggiori è fattibile e utile. Non ha però un pagatore, ed è in rotta di collisione con il Portale INPS ("Servizi di altri enti"). Va bene come progetto di utilità, non per l'obiettivo A.

---

## 8) Criteri di confutazione, uno per uno

| Criterio | Esito (Bucatore) | Perché |
|---|---|---|
| (1) Un servizio esistente fa già l'aggregazione completa per comune | **Non scatta in senso stretto, ma lo spazio si chiude** | Nessuno aggrega i contributi comunali (BonusX ha 1 pagina comunale, E12). L'INPS però aggrega già bonus, nidi, centri per la famiglia, consultori e "servizi di altri enti" (E6), e IO consegna i messaggi del comune (E32). All'estero questo ruolo è sempre pubblico (E17-E20). |
| (2) Frammentazione reale bassa | **Scatta in parte** | Nei 5 comuni gli enti sono 2-4 (INPS, Regione, Comune). Per i nidi in Lombardia e Toscana basta un dataset regionale (E7, E9). Resta frammentata la coda dei bandi comunali e delle misure regionali condizionate all'adesione del comune (E10), e in Puglia i nidi privati (E9). |
| (3) La mappa INPS copre già tutti i nidi pubblici e privati | **Scatta per i nidi leciti, non per il contorno** | Il perimetro è nidi, micronidi, sezioni primavera e integrativi autorizzati, con dati trasmessi dai comuni per obbligo (E1-E4). Restano fuori i centri bambini-famiglie, le ludoteche, le rette e i posti. Il 2026/27 è un anno transitorio e la verifica diretta non è stata possibile (SPID). |
| (4) Non esiste un canale per farsi trovare dai genitori | **Scatta in sostanza** | Query comunali "bonus/contributi": 0 in 4 comuni su 5 per "contributi famiglie" e 0 sotto i 100.000 abitanti per "bonus bebè" (E16). Le query sui nidi sono di navigazione verso un nido preciso. C'è AI Overviews (E29). Il founder non ha pubblico. IO occupa il canale push. |
| (5) Non c'è modo di coprire i costi più un piccolo margine | **Scatta per il modello a pagamento, in dubbio per il modello leggero gratuito** | I costi del modello leggero sono bassi (5-8 k€/anno) **se** si rinuncia alla copertura nazionale verificata. Ma 1-2 k€/mese netti richiedono circa 1.800-3.200 abbonati o 0,3-2,2 M di pagine viste al mese (§6.2), senza un canale (4). All'estero i casi B2C non hanno numeri pubblici e i non profit chiudono (E21-E22). |

**Verdetto del Bucatore:** H22b è **confutata come business** dai criteri (4) e (5), e **ridimensionata** dai criteri (2) e (3). Il "molti portali" si riduce a 2-4 enti, e sui nidi l'INPS e le Regioni hanno già il dato. Sopravvive il nucleo dell'osservazione: i contributi e le scadenze comunali sono sparsi negli albi e nessuno li raccoglie. Ma è un bene di utilità pubblica con poca domanda di ricerca e nessun pagatore osservato.

---

## 9) Cosa non ho trovato / limiti
- **Mappa INPS:** non provata dal vivo (serve SPID). Non so quante strutture mostri per comune, né se includa i nidi famiglia.
- **Circolare INPS 93/2026:** il testo integrale non è estraibile, perché la pagina carica il contenuto via JS. Ho usato le notizie INPS e fonti secondarie.
- **Regione Puglia:** portali regionali e ASL irraggiungibili da questo ambiente (timeout), quindi i buoni servizio e il catalogo dei nidi privati non sono verificati.
- **Fatturato e abbonati di BonusX:** non trovati. Mes Allocs: dati di registro poco interpretabili.
- **RPM italiano** per l'informazione sui bonus o il parenting: non trovato.
- **Benchmark di conversione** da gratuito a pagamento per servizi informativi B2C in Italia: non trovato.
- **Non take-up dei bonus comunali** e valore medio non richiesto: non trovati. Ho trovato solo il take-up dell'Assegno unico.
- **Numero di comuni con il modello "Asilo nido" su IO:** non riverificato (cifra S9).
- **Test su assistenti AI** (ChatGPT, Gemini) per query comunali: non eseguito.
- **Adesione di Seriate, Bergamo e Torre de' Roveri a Nidi Gratis Plus 2026/27:** non verificata, perché l'elenco dei comuni aderenti non è stato trovato.
- I conteggi dei portali dipendono dalla scelta di contare "enti" o "URL". Ho riportato entrambi.

## 10) Conteggio WebSearch e fetch
- **WebSearch: 13** su 20 (mappa INPS, Nidi Gratis Plus, IO e asilo nido, Mes Allocs, risorse del Bonus nido, AI Overviews, patronati, welfare aziendale, take-up dell'Assegno unico, nati ISTAT, BonusX, RPM, chiusure degli aggregatori di benefit).
- **Letture dirette:** circa 12 WebFetch (2 fallite: INPS troncata, comune di Milano 403) e circa 45 chiamate curl o API: pagine INPS ×5, comune di Milano ×4, Bergamo ×2, Seriate ×3, Torre de' Roveri ×2, Bari ×4, API dati.lombardia ×6, CKAN di Puglia, Toscana e altre ×9, CSV ISTAT, sitemap BonusX ×3, sitemap Bonusepagamenti ×11, iTunes ×4, Mes Allocs, registro FR, Familienportal, legislation.gov.uk, whyy, 1degree, blog USA.gov, ISTAT, relazione AUU (PDF), prezzi Claude, Refinery89. Inoltre circa 25 chiamate di autocompletamento Google.
