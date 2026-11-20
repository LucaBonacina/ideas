# H22 — Bucatore di palloncini

**Ipotesi (pre-registrata, non modificata):** "Ricerca avanzata di luoghi, servizi, norme e bonus per genitori. Manca una ricerca avanzata di punti di interesse, servizi, regole e bonus per genitori (luoghi family-friendly, servizi per l'infanzia, norme e agevolazioni locali), e i dati frammentati si possono raccogliere con lo scraping."

**Criteri di confutazione:** confutata se il bisogno è già coperto (mappe generaliste, app family-friendly, BonusX, app IO); se i dati non sono raccoglibili in modo affidabile; se non c'è un pagatore (genitori, strutture, brand) con cifre reali; se gli scarti dello screening B2C (F1, F2, F4, C1) si confermano.

Ruolo: Bucatore (cerco di confutare). Data di accesso di tutte le fonti: **2026-11-20**.

---

## 1) Tesi in 5 righe

1. Il **pagatore** è il punto che cede. Nella categoria "trova cose per bambini vicino a te", i casi esteri meglio finanziati non sono riusciti a far pagare le strutture in modo stabile. Hoop (UK, 2 milioni di installazioni, 13.000 organizzatori) ha chiuso nel 2020, è ripartito e nel 2026 ancora **non fa pagare nessuno**. La società che lo gestisce deposita bilanci **dormienti**. Winnie (USA) ha abbandonato il pay-per-lead perché i nidi erano pieni. Tinybeans ha svalutato del tutto l'avviamento di Red Tricycle.
2. In Italia le app "mappa family-friendly" sono **un cimitero di progetti amatoriali**: KidooMap 4 valutazioni, Bimbo Map 6, Babyspot 5 in 10 anni, Famitica 2. Il dominio di BabyInItaly ("il TripAdvisor per mamme e papà") è in vendita. Kid Pass esiste dal 2014 e non pubblica né un listino né il proprio traffico.
3. La **copertura** si è chiusa ancora nel 2026. A ottobre la mappa INPS dei nidi (pubblici e privati, ricerca per provincia o per posizione) è online, insieme alla mappa dei Centri per la famiglia e a "Servizi vicino a me". Google Maps ha l'attributo "Good for kids" e, dal 16/11/2026, Ask Maps con Gemini disponibile anche in Italia. BonusX vende i bonus già da 19,95 €/anno.
4. Il **lato offerta non ha bisogno di visibilità**. Secondo il dato ISTAT 2023/24 riportato da LentePubblica, il 59,5% di nidi e sezioni primavera non riesce ad accogliere tutte le domande. I centri estivi comunali e convenzionati, cioè la maggior parte dei posti, hanno già un canale pubblico. Restano i privati piccoli, che oggi pagano 20-200 € a stagione.
5. I **dati migliori sono quelli vietati**. I luoghi family-friendly (ristoranti, parchi, fasciatoi) stanno su Google Maps e TripAdvisor, e i termini d'uso di entrambi vietano lo scraping in modo esplicito. Lo scraping lecito (PDF comunali, bandi) produce dati utili ma stagionali, che lo Stato sta già centralizzando (Agenda Asili Nido, PDND).

---

## 2) Evidenze

| # | Affermazione | Tipo | Fonte (URL) | Accesso | Letta direttamente |
|---|---|---|---|---|---|
| E1 | Hoop (UK) ha chiuso a luglio 2020 ("we had to close our doors in July 2020"). È stato rilevato e rilanciato da "a new team of parents" con un annuncio dell'1/10/2022. | fatto | https://hoop.co.uk/articles/general/hoop-development/hoop-is-back-were-rebuilding-the-uks-favourite-kids-activity-app/ | 2026-11-20 | sì |
| E2 | Hoop nel 2026 dichiara "2M+ App Installs" e "13,000 Organisers", ma "Hoop does not currently charge a booking fee… we plan to charge a subscription to list". L'iscrizione per gli organizzatori è gratuita ("List for Free"). | fatto | https://hoop.co.uk/about · https://hoop.co.uk/organisers · https://hoop.co.uk/articles/hoop/is-hoop-app-free/ | 2026-11-20 | sì (curl) |
| E3 | HOOP HEALTH LTD (14225820, costituita l'11/07/2022, nome della società nel footer di hoop.co.uk) ha depositato "Accounts for a dormant company" per gli esercizi chiusi a luglio 2023, aprile 2024 e aprile 2025. Questo implica nessun ricavo significativo nella società. | fatto (deduzione = stima) | https://find-and-update.company-information.service.gov.uk/company/14225820/filing-history | 2026-11-20 | sì (curl) |
| E4 | HOOPAPP LIMITED (10884024) risulta sciolta il 07/12/2021. Che sia la società originale di Hoop è **non verificato**. | fatto / stima | https://find-and-update.company-information.service.gov.uk/search/companies?q=hoop+app | 2026-11-20 | sì (curl) |
| E5 | Winnie (USA) guadagnava con il pay-per-lead e lo ha abbandonato per un canone mensile, perché i ricavi "varies every month" e la carenza di personale impediva ai nidi di accettare altri lead. Ha 250.000 strutture in elenco, più della metà senza un sito proprio. | fatto | https://techcrunch.com/2022/03/04/winnie-has-a-new-plan-to-help-childcare-centers-scale-care | 2026-11-20 | sì |
| E6 | Winnie ha raccolto 2,5 M$ di seed (2016) e 9 M$ di Serie A (2019). Nel 2022 ha lanciato Winnie Pro (SaaS per le strutture) e un job board. Ha meno di 25 dipendenti. | fatto | https://en.wikipedia.org/wiki/Winnie_(website) | 2026-11-20 | sì |
| E7 | Winnie è ancora attiva: app iOS USA con 756 valutazioni, media 4,57, ultimo aggiornamento il 9/11/2026. | fatto | https://itunes.apple.com/lookup?id=1066620030&country=us | 2026-11-20 | sì (API) |
| E8 | Tinybeans (ASX: TNY), che ha comprato Red Tricycle (directory e contenuti "cosa fare con i bambini") a marzo 2020, ha svalutato l'avviamento di Red Tricycle per 3,73 M$ nel FY2023. Ricavi: 10,9 M$ (FY22), 8,44 (FY23), 5,41 (FY24), 4,82 (FY25), 7,08 (FY26, dopo l'acquisizione di Qeepsake, abbonamenti). | fatto (svalutazione da sintesi di ricerca dell'annual report ASX; ricavi letti) | https://stockanalysis.com/quote/asx/TNY/revenue/ · https://announcements.asx.com.au/asxpdf/20230824/pdf/05t0dr3vghq79t.pdf | 2026-11-20 | ricavi sì; annual report no |
| E9 | Disney ha comprato Babble (parenting, 4 M di utenti unici) per circa 40 M$ nel 2011 e ha smesso di aggiornarlo il 14/12/2018. | fatto | https://techcrunch.com/?p=1766001 | 2026-11-20 | sì |
| E10 | KidPass (USA, "ClassPass per bambini", Y Combinator, 5,1 M$ raccolti, oltre 900 partner nel 2017): l'unico segnale trovato è una scheda Groupon che la indica come "Closed". Data e causa **non trovate**. | fatto parziale | https://venturebeat.com/2017/05/23/yc-backed-kidpass-raises-5-1-million-to-provide-a-variety-of-fun-activities · https://www.groupon.com/biz/manhattan/kidpass | 2026-11-20 | no (estratti di ricerca) |
| E11 | App italiane "luoghi per bambini": KidooMap 4 valutazioni (uscita 02/2026); Bimbo Map 6 (05/2025); Babyspot (itConcept Srl) 5 valutazioni dal 2016; Famitica (Oinova Srl) 2. Tutte gratuite. | fatto | iTunes lookup id 6756926973, 6743993585, 1106026720, 6476620356 (country=it) | 2026-11-20 | sì (API) |
| E12 | babyinitaly.it, la startup presentata come "il nostro TripAdvisor per mamme e papà", oggi è una pagina Sedo "This website is for sale!". babyspot.it non risponde. | fatto | https://www.babyinitaly.it/ · https://startupitalia.eu/economy/economia-digitale/vi-racconto-come-e-nato-babyinitaly-il-nostro-tripadvisor-per-mamme-e-papa/ (403) | 2026-11-20 | sì (curl) |
| E13 | Kid Pass (Italia) contava 800 strutture family-friendly e oltre 1.000 eventi già nel 2014. Oggi la pagina pubblicità elenca banner, contenuti sponsorizzati e newsletter **senza prezzi né traffico** ("migliaia di genitori"). | fatto | https://www.macitynet.it/kid-pass-portale-family-friendly-con-eventi-e-luoghi-a-misura-di-bambino/ · https://kidpass.it/pubblicita/ | 2026-11-20 | sì |
| E14 | RomaperBambini, attivo dal 2011: 80.000 pagine viste al mese, 4.000 iscritti alla newsletter, 26 mila fan su Facebook. Listino: 20 € per evento, 75 € per 5, 120 € per 10 (IVA inclusa). | fatto (autodichiarato) | https://www.romaperbambini.it/pubblicita | 2026-11-20 | sì (curl) |
| E15 | La mappa INPS dei nidi pubblici e privati è online sul Portale della famiglia, con ricerca per provincia o per posizione e dati del censimento di luglio 2026. Sono online anche la mappa nazionale dei Centri per la famiglia ("in fase di progressivo aggiornamento") e "Servizi vicino a me" (centri vaccinali, consultori, farmacie). | fatto | https://www.informazionefiscale.it/bonus-famiglia-servizi-asili-mappa-inps-novita (articolo dell'8/10/2026) | 2026-11-20 | sì |
| E16 | Dall'anno 2026/27 gli enti locali hanno l'obbligo di comunicare all'INPS le strutture abilitate (Agenda Asili Nido, circolare 93 del 9/09/2026). | fatto (da sintesi di ricerca) | https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-una-mappa-per-geolocalizzare-le-strutture-convenzionate.html | 2026-11-20 | parziale (pagina troppo lunga, corpo non estratto) |
| E17 | ISTAT 2023/24: 14.570 nidi e servizi integrativi, circa 378.500 posti autorizzati, 31,6 posti ogni 100 bambini tra 0 e 2 anni. Il 78,4% dei nuovi posti viene dai privati. | fatto | https://www.istat.it/comunicato-stampa/offerta-di-nidi-e-servizi-integrativi-per-la-prima-infanzia-anno-educativo-2023-2024/ | 2026-11-20 | sì |
| E18 | Il 59,5% dei nidi e delle sezioni primavera non riesce ad accogliere tutte le domande per mancanza di posti (49,1% nel 2021/22). | fatto (fonte secondaria su dati ISTAT) | https://lentepubblica.it/scuola/asili-nido-piu-posti-ma-non-basta-ecco-dove-litalia-resta-indietro/ | 2026-11-20 | sì (curl) |
| E19 | Google Business Profile ha attributi per bambini ("children allowed", fasciatoio, sconti famiglia, settembre 2023) e un'icona "Good for Kids" vista a marzo 2025. Il filtro "good for kids" esiste su Android. | fatto (stampa di settore, non documentazione Google) | https://seroundtable.com/google-business-profiles-attributes-nursing-children-allowed-35990.html · https://seroundtable.com/google-business-profile-good-for-kids-39058.html | 2026-11-20 | no |
| E20 | Ask Maps (Gemini) "analyzes information from over 300 million places" e usa le recensioni di "more than 500 million contributors" (12/03/2026). Dal 16/11/2026 è esteso a oltre 200 Paesi, Italia compresa (itinerari e ricerca nelle liste salvate). | fatto | https://blog.google/products-and-platforms/products/maps/ask-maps-immersive-navigation/ · https://smartworld.it/news/google-maps-ask-maps-itinerari-liste-salvate.html | 2026-11-20 | sì |
| E21 | I termini di Google Maps Platform, sezione "No Scraping", dicono: "Customer will not export, extract, or otherwise scrape Google Maps Content… (i) pre-fetch, index, store… places information". | fatto | https://cloud.google.com/maps-platform/terms | 2026-11-20 | sì (curl) |
| E22 | I termini di TripAdvisor Italia vietano l'uso di "robot, spider, sistema basato sull'intelligenza artificiale… per… estrarre mediante scraping, aggregare… qualsiasi parte dei Servizi o dei Contenuti". | fatto | https://tripadvisor.mediaroom.com/it-terms-of-use | 2026-11-20 | sì (curl) |
| E23 | Prezzi BonusX: 0 € / 19,95 € / 79,95 € / 299,95 € l'anno. La homepage oggi dice "+600 bonus pubblici" (lo screening citava 700+) e "migliaia di persone" al giorno. | fatto | https://bonusx.it/prezzi/ · https://bonusx.it/ | 2026-11-20 | sì |
| E24 | Il marchio pubblico "Family in Trentino" certifica strutture family-friendly (musei, alberghi, comuni, farmacie…) secondo disciplinari, con oltre 300 organizzazioni certificate (dato forse non aggiornato). | fatto | https://www.provincia.tn.it/Servizi/Richiesta-assegnazione-certificazione-Family-in-Trentino | 2026-11-20 | no |
| E25 | Kinderly (UK), uno dei nomi del brief, **non è una directory per genitori** ma un software di gestione per nidi (diario, fatture, CPD). | fatto | https://kinderly.co.uk/ | 2026-11-20 | sì |
| E26 | RPM pubblicitario stimato per siti di parenting USA su Mediavine: 16-23 $. Fonte secondaria, dichiarata "ballpark… not verified". | stima di terzi | https://www.earnifyhub.com/blog/blogging/blog-display-ad-rpm-by-niche-2026 | 2026-11-20 | no |
| E27 | Su Yoopies Italia non risulta nessuna autorizzazione all'intermediazione trovata; Trustpilot 2,8 su 197 recensioni, con lamentele sulla quota d'iscrizione di 25 €. Altre piattaforme (Vicker, 4MyFamily) dichiarano un'autorizzazione ministeriale. | fatto parziale | https://ca.trustpilot.com/review/yoopies.it · https://bollettinoadapt.it/servizi-alla-persona-il-caso-dei-lavori-domestici-e-della-assistenza-domiciliare-via-app/ | 2026-11-20 | no |

---

## 3) Distribuzione dei risultati e numeri chiave

### Concorrenti esteri e italiani: che fine hanno fatto

| Nome | Paese | Cosa faceva | Esito | Soldi |
|---|---|---|---|---|
| Hoop | UK | App "cosa fare con i bambini" | Chiusa a luglio 2020; rilevata e rilanciata nel 2022; società con bilanci dormienti 2023-25 | 2,4 M£ raccolti (TechCrunch 2017, estratto di ricerca). Dopo 10 anni nessun ricavo dagli organizzatori (E1-E3) |
| Winnie | USA | Ricerca di nidi e asili | Viva, ma ha cambiato modello (da pay-per-lead a SaaS e job board) | Oltre 11,5 M$ di VC (E5-E7) |
| Red Tricycle → Tinybeans | USA/AU | "What's on" per famiglie | Avviamento svalutato del tutto nel FY23; ricavi del gruppo da 10,9 a 4,8 M$ in 3 anni | E8 |
| KidPass | USA | Abbonamento ad attività per bambini | Scheda "Closed"; data non trovata | 5,1 M$ raccolti (E10) |
| Babble | USA | Parenting editoriale | Chiuso nel 2018 dopo un acquisto da 40 M$ | E9 |
| Hulafrog | USA | Directory locali di attività per bambini | Assorbita da CertifiKid (2023); dettagli non letti (Axios 403) | non trovato |
| BabyInItaly | IT | "TripAdvisor per genitori" | Dominio in vendita | E12 |
| Babyspot | IT | Fasciatoi e locali family-friendly | 5 valutazioni in 10 anni, dominio irraggiungibile | E11 |
| KidooMap, Bimbo Map, Famitica | IT | Mappe family-friendly | 2-6 valutazioni ciascuna | E11 |
| Kid Pass | IT | Portale family-friendly dal 2014 | Vivo, nessun listino né traffico pubblico | E13 |
| RomaperBambini | IT | Portale locale dal 2011 | Vivo, 80.000 pagine viste al mese dopo 15 anni | E14 |

**Bias del sopravvissuto [stima].** Dei casi che sopravvivono con numeri pubblici, nessuno lo fa grazie alla visibilità pagata dalle strutture. Winnie è passata al SaaS. Tinybeans si è salvata con gli abbonamenti al diario fotografico (Qeepsake), non con Red Tricycle. Mumsnet vive di pubblicità sulla community, ma i bilanci non li ho letti (Companies House 03951486, cifre non trovate). La mediana in Italia è "app con meno di 10 valutazioni".

### Economia unitaria della visibilità [stima]
- **Listini reali:** 20 € per evento (RomaperBambini), 200 € + IVA per campagna (VareseNews, dallo screening). Hoop, con 13.000 organizzatori, non riesce a far pagare nemmeno un abbonamento.
- **Conto per arrivare all'obiettivo A (60-116 k€/anno):** servono **400-780 strutture paganti a 150 €/anno**. I privati di centri estivi, ludoteche e corsi nelle 20 città principali possono essere [stima] 5.000-15.000. Con una conversione dell'1-3% tipica delle directory freemium [stima, nessun benchmark trovato] si arriva a 50-450 paganti, cioè **7,5-67 k€/anno**. È sotto o al limite dell'obiettivo A, con abbandono stagionale e vendite che richiedono persone (in contrasto con C10).
- **Pubblicità:** con un RPM italiano per il parenting di 3-8 € [stima: l'RPM italiano è molto sotto quello USA di 16-23 $, E26], 60 k€/anno richiedono 7,5-20 M di pagine viste l'anno, cioè **0,6-1,7 M al mese**. RomaperBambini, dopo 15 anni, ne fa 80.000 (≈3-8 k€/anno teorici).
- **Nidi:** il 59,5% non ha posti liberi (E18), quindi la visibilità vale poco. Il valore di un lead è alto in teoria (retta privata di circa 640 €/mese, dallo screening), ma Winnie mostra che il lead non si vende quando c'è carenza (E5).

### Stagionalità
- Centri estivi: ricerche concentrate tra febbraio e luglio. Nidi: finestre di iscrizione in primavera. Bonus: picchi intorno alle scadenze ISEE e alle leggi di bilancio. Un prodotto "luoghi family-friendly" è meno stagionale, ma è proprio quello che non ha pagatore e si scontra con Google Maps. [stima, Trends non disponibile]

---

## 4) Attacco alle idee concrete più ovvie

### 4.1 Directory di centri estivi e ludoteche per comune, con visibilità a pagamento
- **Pagatore debole e stagionale.** I listini osservati vanno da 20 € a 200 € a stagione (E14, F3). Hoop, il caso estero più grande con 13.000 organizzatori e 2 milioni di installazioni, dopo un rilancio non riesce ancora a far pagare un abbonamento e la sua società ha bilanci dormienti (E2, E3).
- **L'offerta più grande non compra visibilità.** I centri comunali e convenzionati (Bologna 110 sedi e 40.026 posti con iscrizione centralizzata, dallo screening) hanno già il proprio canale. Paga solo la coda dei privati piccoli.
- **Vendita e assistenza ai gestori richiedono persone,** in contraddizione con "≤5 h/settimana" e con C10. Con 400-780 clienti da rinnovare ogni anno, l'abbandono è stagionale per costruzione [stima].
- **Il fossato non esiste:** RomaperBambini, MilanoperiBambini, Kid Pass e Viaggiapiccoli coprono già la parte redazionale. I dati estratti dai PDF comunali sono replicabili.
- **Cosa resta in piedi:** la long-tail SEO (250 varianti, F3) è vera. È il punto più forte dell'ipotesi, ma come sito a contenuto e non come piattaforma di visibilità.

### 4.2 Mappa dei luoghi family-friendly (ristoranti, parchi, fasciatoi, musei)
- **Già coperta da Google.** Attributi per bambini e "Good for kids" (E19); Ask Maps con Gemini su 300 milioni di luoghi e 500 milioni di contributori, in Italia dal 16/11/2026 (E20).
- **I dati non sono raccoglibili lecitamente:** Google Maps e TripAdvisor vietano esplicitamente lo scraping (E21, E22). Il diritto *sui generis* (Dir. 96/9/CE art. 7; L. 633/1941 art. 102-bis) protegge le banche dati con investimento sostanziale, e la Corte UE (C-30/14 Ryanair) consente di far valere i termini contrattuali anche dove il *sui generis* non si applica [fatto giuridico non riletto oggi, letta: no]. La competenza distintiva del founder qui si scontra con il diritto.
- **Sono dati crowdsourced, non dati da raccogliere:** "ha il fasciatoio" o "accetta i passeggini" non sta in nessuna fonte strutturata. Serve una community, cioè un pubblico, che il founder non ha. Lo confermano i fallimenti italiani (E11, E12).
- **Pagatore:** i ristoranti non pagano per un badge "family" con cifre pubbliche (non trovato). Il marchio pubblico "Family in Trentino" (E24) certifica gratis.

### 4.3 Motore di ricerca dei bonus locali per famiglie
- **Già scartato in C1 e confermato:** BonusX a 19,95-299,95 €/anno con oltre 600 bonus (E23). INPS è proattiva con le card per il nucleo (screening).
- **Nota per l'Entusiasta:** BonusX oggi dichiara "+600" e non più "700+". Questo potrebbe indicare una copertura locale più sottile di quanto dichiarato prima [stima]. Non basta però a riaprire C1: la nicchia "solo bonus comunali" ha pagatori deboli (CAF compensati con circa 4 € per DSU, dallo screening) e la ricerca personale per comune vale 0/20 nell'autocompletamento.
- **ChatGPT e AI generaliste** coprono già i bonus nazionali (test dello screening). I locali sono coperti solo in parte, ma con rinvio al sito ufficiale.

### 4.4 App per nidi e graduatorie
- **Lo spazio si è chiuso ancora dopo lo screening.** La mappa INPS dei nidi pubblici e privati è online da ottobre 2026 (E15). I comuni hanno l'obbligo di comunicare le strutture all'INPS (E16). IO ha il modello "Asilo nido" su circa 1.480 comuni (screening).
- **Il problema è la scarsità, non l'informazione:** il 59,5% dei nidi ha più domande che posti (E18). Una directory non crea posti e i nidi non pagano per lead che non possono accogliere, come ha imparato Winnie (E5).
- **I soldi stanno nel SaaS per le strutture** (Kinderly, Winnie Pro, Famly, Kinderpedia: E6, E25 e Capterra), cioè fuori dall'ipotesi "ricerca per genitori" e in un mercato affollato.
- **Graduatorie:** sono PDF nominativi o con codici. Ripubblicarle tocca il GDPR (dati di minori) senza un beneficio chiaro [stima].

### 4.5 Calendario di norme e agevolazioni comunali
- **Già scartato in F2:** nessuno cerca il prodotto (0 suggerimenti), IO consegna già le notifiche degli enti e BonusX vende "avvisi per non perdere scadenze".
- È un prodotto che richiede retention senza un canale di acquisizione: senza pubblico non si avvia.

---

## 5) Criteri di confutazione, uno per uno

| Criterio | Esito (Bucatore) | Perché |
|---|---|---|
| Bisogno già coperto (mappe, app family-friendly, BonusX, IO) | **Scattato per luoghi, nidi e bonus; non scattato per centri estivi privati e bandi comunali minori** | Google Maps e Ask Maps (E19, E20), mappa INPS dei nidi online (E15), BonusX (E23), IO (screening). Resta scoperta la ricerca strutturata tra privati con prezzi e date (F3). |
| Dati non raccoglibili in modo affidabile | **Scattato per i luoghi family-friendly; non scattato per bandi e PDF comunali** | I ToS di Google e TripAdvisor vietano lo scraping (E21, E22); gli attributi family sono crowdsourced. I PDF comunali sono raccoglibili ma da rifare ogni anno. |
| Nessun pagatore con cifre reali | **Scattato in sostanza** | Le uniche cifre sono 20-200 € a stagione (E14). Hoop con 13.000 organizzatori non incassa (E2, E3). Winnie ha abbandonato il pay-per-lead (E5). Red Tricycle svalutata (E8). Abbonamenti B2C solo per BonusX (già incumbent). |
| Scarti F1, F2, F4, C1 confermati | **Confermati; F1 peggiorato** | F1: la mappa INPS dei nidi annunciata è ora online (E15), e i nidi sono pieni (E18). C1: BonusX vivo con lo stesso listino (E23). F2 e F4: nessuna evidenza nuova contraria. |

**Verdetto del Bucatore: ipotesi CONFUTATA nella sua forma ampia** ("ricerca avanzata di luoghi, servizi, norme e bonus"). Sopravvive solo un frammento già noto: la **long-tail SEO dei centri estivi** (F3, PASS debole), con il pagatore debole e stagionale descritto sopra.

---

## 6) Cosa non ho trovato / limiti

- **Bilanci di Mumsnet, Kidadl e Yoopies:** cifre non lette. Mumsnet: un aggregatore indica 2,7 M di utile, ma è una cifra non verificata e non utilizzata.
- **Hoop:** non ho verificato che HOOPAPP LIMITED (sciolta nel 2021) sia la società originale. Raccolta 2017 (2,4 M£) letta solo nell'estratto TechCrunch.
- **KidPass USA:** data e causa della chiusura non trovate. **Hulafrog:** dettagli non letti (Axios 403, WTOP 404).
- **"Family Welcome":** non ho trovato un'app con questo nome. **Kinderly** non è una directory ma un software per nidi.
- **Tasso di conversione delle directory freemium per piccole strutture:** nessun benchmark trovato, uso una stima dell'1-3%.
- **RPM italiano del parenting:** non trovato; stima mia, non verificata.
- **ChatGPT:** non testato direttamente in questa sessione; mi affido ai test dello screening (sintesi AI).
- **Mappa INPS:** l'ho verificata tramite informazionefiscale.it (8/10/2026), non aprendo il Portale della famiglia, che richiede SPID per alcune funzioni.
- **Profondità di BonusX sui bonus comunali:** non verificata (richiede la registrazione).
- **Google Trends e Reddit:** non usati (bloccati, come nello screening).

## 7) Conteggio
- **WebSearch usate: 18 su 20.**
- **Letture dirette:** circa 14 WebFetch (Hoop ×2, Wikipedia Winnie, TechCrunch ×2, Macitynet, Kid Pass, Kinderly, Babble, Tinybeans/stockanalysis, informazionefiscale, BonusX, Smartworld, blog Google, ISTAT; 4 falliti per 403/404) e circa 10 chiamate curl/API (iTunes lookup ×10 app, Companies House ×3, Google Maps Platform ToS, ToS TripAdvisor, RomaperBambini, Hoop about/organisers, BonusX prezzi, BabyInItaly, LentePubblica).
