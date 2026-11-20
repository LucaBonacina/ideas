---
tipo: rapporto
sessione: S1
ipotesi: H01
ruolo: bucatore
data: 2026-11-20
ricerche_web_usate: 19
tags: [rapporto, S1, H01, bucatore]
---
# H01 — Dataset e API da scraping venduti a terzi: rapporto del Bucatore

Collegamenti: [[Registro delle ipotesi]] · [[Protocollo di discovery]] · [[Profilo e vincoli]]

## Sintesi

Ho attaccato l'ipotesi soprattutto con **dati primari**: ho scaricato l'elenco pubblico dell'Apify Store dall'API ufficiale (`api.apify.com/v2/store`, 14.677 actor più popolari con utenti a 30 giorni, prezzi e storico dei prezzi). Poi li ho incrociati con i payout che Apify stessa dichiara. Ho aggiunto fonti su RapidAPI, sui marketplace di dati e sulle cause legali.

1. **La distribuzione è estremamente concentrata.** Tra i 14.677 actor più popolari, i primi 15 raccolgono il 35,6% degli utenti mensili, i primi 100 il 64,9% e i primi 1.000 l'88,5%. Apify da sola fa il 32,5% e i primi 10 account il 61,1%. L'API dichiara circa 124-125 mila actor in totale: oltre 110 mila stanno fuori da questo campione e hanno di fatto zero utenti.
2. **Il ricavo mediano di uno sviluppatore è ben sotto i 500 €/mese.** [stima] Ripartendo i 2 M$/mese di payout dichiarati in proporzione agli utenti, lo sviluppatore mediano *con almeno un actor nel campione* incassa circa 38 $/mese; il 90° percentile circa 1.500 $/mese. Circa 74 sviluppatori su 1.722 superano i ~4.800 $/mese, la soglia che serve per 50 k€/anno. Contando anche chi non entra nel campione, la mediana reale è ~0.
3. **Gran parte della domanda è "lead generation".** Gli actor della categoria LEAD_GENERATION assorbono il 42% degli utenti dello Store e il 51% di quelli degli actor della community. Questo ambito (dati su aziende come lead) è **escluso** dal profilo. Nel mercato dei dati alternativi, dove i dataset da scraping sono una delle voci di spesa principali, chi compra sono soprattutto società d'investimento: anche loro **escluse**.
4. **RapidAPI è il caso del sopravvissuto rovesciato.** Valutata 1 miliardo di dollari, con circa 273 milioni raccolti, è passata da 4 milioni di utenti e circa 40.000 API a utenti "nell'ordine delle migliaia" e API "nell'ordine delle centinaia". L'organico è stato tagliato dell'82% e gli asset sono stati venduti a Nokia nel 2024.
5. **Il rischio legale è concentrato sui target più richiesti** (LinkedIn, Google, Reddit, social). Proxycurl (~10 M$ di fatturato autodichiarato) ha chiuso nel 2025 dopo una causa di LinkedIn; hiQ ha pagato 500 k$ e ha distrutto i dati; KASPR ha preso una multa GDPR di 240 k€ dalla CNIL. Il rischio però **non è uniforme**: Meta ha perso contro Bright Data sullo scraping senza login.
6. **I prezzi dei leader NON sono in calo.** Lo storico mostra prezzi stabili o in aumento: TikTok è passato da 3 a 3,7 $/1.000, Google Maps è fermo a 4 $/1.000, Instagram è passato da 2,3 a 2,7 $/1.000. I cloni invece costano 10-50 volte meno e non scalzano il leader. La guerra di prezzo è sui cloni, non sui leader.

**Verdetto del Bucatore:** il criterio 1 (mediana < 500 €/mese e top concentrati) è **verificato**. I criteri 2, 3 e 4 sono **parziali**. La via "pubblico actor/API su un marketplace e incasso" è statisticamente un biglietto della lotteria: la probabilità di arrivare a ≥ 50 k€/anno di margine con ≤ 5 h/settimana del founder è bassa (stima nella sezione Distribuzione). Restano spiragli solo in nicchie non escluse con target difficili, dove la competenza di scraping avanzato conta davvero.

## Evidenze contro

### A. Distribuzione e bias del sopravvissuto

**E1 [fatto].** L'API pubblica dello Store Apify restituisce `total` ≈ 124.144-125.764 actor. Con la paginazione si ottengono solo i primi 14.677, ordinati per popolarità; oltre questa soglia la risposta è vuota. Fonte: `https://api.apify.com/v2/store?limit=1000&offset=N` (consultata il 2026-11-20). Il campione analizzato sono quindi i ~14,7 mila actor più usati, cioè meno del 12% del catalogo.

**E2 [fatto, mio calcolo sui dati API].** Distribuzione degli utenti a 30 giorni (`totalUsers30Days`) sui 14.677 actor del campione, per un totale di 1.261.635 coppie utente-actor:

| Soglia di utenti/30 gg | Numero di actor |
|---|---|
| ≥ 1 | 13.513 |
| ≥ 10 | 5.007 |
| ≥ 100 | 993 |
| ≥ 1.000 | 147 |
| ≥ 10.000 | 24 |

- La mediana del campione è 4 utenti al mese; per l'intero catalogo, considerando gli oltre 110 mila actor fuori campione, è circa 0.
- Concentrazione: i primi 15 actor hanno il 35,6% degli utenti, i primi 100 il 64,9%, i primi 1.000 l'88,5%.
- Per account: Apify da sola ha il 32,5%, i primi 10 account il 61,1%.

Limite: gli utenti non coincidono con i ricavi, e il conteggio è per coppie utente-actor. I numeri confermano in modo indipendente l'analisi di settembre 2026 pubblicata su Stacker News, che però è di terzi e non verificabile: 66.000 tool, mediana di 2 utenti, top 1% con il 70%, Apify con il 30% (https://stacker.news/items/1581524).

**E3 [stima].** Ricavi per sviluppatore. Il ragionamento:
- Apify dichiara sulla home "**$2M paid out last month. Many developers earn over $3k**" (https://apify.com/, consultata il 2026-11-20). È un numero autodichiarato.
- Gli actor della community (escluso l'account `apify`) contano 851.674 coppie utente-actor/mese, distribuite su 1.722 sviluppatori nel campione.
- Ipotizzando payout proporzionali agli utenti, si ottengono circa 2,35 $ per coppia utente-actor/mese. Il valore è coerente con i 2 $/utente attivo mensile che Apify stessa ha pagato come incentivo nella "$1M Challenge" (https://natlawreview.com/press-releases/apify-bets-1m-independent-developers-building-ais-missing-tools).

Risultato:

| Sviluppatore (payout/mese) | Con 2 M$/mese | Con 1,5 M$/mese |
|---|---|---|
| Mediana | ~38 $ | ~28 $ |
| 75° percentile | ~218 $ | — |
| 90° percentile | ~1.472 $ | — |
| Sviluppatori ≥ 500 $/mese | ~296 | ~255 |
| Sviluppatori ≥ 4.800 $/mese (≈ 50 k€/anno) | ~74 | ~53 |

- I primi 10 sviluppatori della community incasserebbero tra 45 k$ e 200 k$/mese ciascuno.
- La proporzionalità quasi certamente *sottostima* la concentrazione, perché gli utenti pesanti si concentrano sugli actor maggiori.
- Apify parla di 46.000 "sviluppatori attivi" nel comunicato del 3 novembre 2025. Su questa base, chi supera ~4.800 $/mese è circa lo **0,16%** (74/46.000).

**E4 [fatto, autodichiarato da sviluppatore].** Un caso tipico di partenza: 13 scraper di dati coreani, 18 giorni monetizzati, 91 utenti, 12.675 run, **64,80 $ lordi / 47 $ netti** dopo la commissione Apify, prezzo 0,50 $/1.000 elementi. Fonte: https://dev.to/sessionzero_ai/i-built-13-korean-data-scrapers-heres-what-i-actually-made-in-month-1-8ep (consultata il 2026-11-20).

**E5 [fatto, autodichiarato].** Il caso di successo pubblicato da Apify stessa ("98 production Actors in 6 months", 22 luglio 2026):
- 98 actor, 855 utenti mensili attivi.
- L'autore **non rivela i ricavi** ("meaningful but inconsistent").
- Dichiara **15-20 ore/settimana** di lavoro, di cui 5-7 di manutenzione (selettori, parser), 3-4 di supporto e 2-3 di monitoraggio.

È esattamente il carico che il founder non può dare e che, delegato, diventa costo. Fonte: https://blog.apify.com/building-98-actors-on-apify-store/ (consultata il 2026-11-20).

**E6 [fatto].** Crescita dell'offerta molto più rapida della domanda:
- Il 3 novembre 2025 lo Store dichiarava "oltre 8.000" actor; a settembre 2026 il conteggio di terzi era di 66.000; oggi l'API indica `total` ≈ 124 mila.
- I payout mensili dichiarati sono cresciuti da 563 k$ (settembre 2025) a 2 M$ (ottobre 2026), cioè circa 3,5 volte, mentre gli actor elencati sono cresciuti di circa 15 volte.

Fonti: comunicato natlawreview (sopra); Stacker News (sopra); API Apify. Nota: i diversi conteggi potrebbero usare definizioni diverse. [stima] Il ricavo medio per actor elencato è in calo.

### B. Marketplace e venditori morti o ridimensionati

**E7 [fatto].** RapidAPI (Rapid) era valutata circa 1 miliardo di dollari nel 2022 e aveva raccolto circa 273 milioni.
- Nel 2023 ha tagliato l'organico dell'82%, con un "significant decline in its business".
- Nel novembre 2024 Nokia ha comprato gli asset tecnologici, senza termini resi noti; gli analisti stimano circa 100 M$ (congettura).
- Al picco aveva 4 milioni di utenti e circa 40.000 API; all'acquisizione aveva utenti attivi "in the thousands" e API "in the hundreds".

Fonte: https://techcrunch.com/2024/11/13/nokia-acquires-rapid-the-api-company-once-valued-at-1b/ (consultata il 2026-11-20).

**E8 [fatto/aneddotico].** Su RapidAPI la commissione è del 20% secondo la documentazione storica; una recensione Trustpilot riferisce un aumento al 25% (non verificato). La "discovery" interna è debole: "list twenty APIs and realistically most get zero subscribers… one or two carry the whole thing". Fonti: https://docs.rapidapi.com/docs/payouts-and-finance; https://dev.to/donnyautomation/the-honest-economics-of-selling-apis-on-rapidapi-from-a-live-portfolio-13k0 (consultate il 2026-11-20; il secondo è un post di un singolo sviluppatore, senza ricavi reali).

**E9 [fatto].** Microsoft ha chiuso Azure DataMarket nel marzo 2017 "citing a lack of customer interest". Fonte: https://adtmag.com/Articles/2016/11/18/azure-datamarket-shutdown.aspx (consultata il 2026-11-20). Il precedente è vecchio, ma mostra che i marketplace di dati generalisti faticano.

**E10 [fatto, autodichiarato].** Proxycurl, API di dati LinkedIn con "~$10M revenue", ha chiuso il 4 luglio 2025 per rispettare un accordo con LinkedIn dopo la causa di gennaio 2025. Il fondatore: "Regardless of the merits of LinkedIn's lawsuit, there is no winning in fighting this". Fonte: https://nubela.co/blog/goodbye-proxycurl/ (consultata il 2026-11-20).

### C. Economia unitaria

**E11 [fatto].** Apify trattiene il **20%** dei ricavi dell'actor, e in più il payout è al netto dei **costi di piattaforma** ("Your payout is your Actor's revenue minus Apify's commission and platform usage costs"). Con un prezzo troppo basso il profitto può essere negativo. Fonte: https://docs.apify.com/platform/actors/publishing/monetize (consultata il 2026-11-20).

**E12 [fatto].** Prezzi di Apify:
- Compute unit: 0,13-0,20 $/CU.
- Proxy residenziale: 7-8 $/GB.
- Proxy SERP: 1,7-2,5 $ ogni 1.000 SERP.
- Il piano Free include 5 $ di crediti al mese.

Fonte: https://apify.com/pricing (consultata il 2026-11-20).

[stima] Un clone di Google Maps a 0,08 $/1.000 risultati (vedi E15) che usi proxy residenziale non copre il costo del proxy a meno di pagine leggerissime: 1 GB per 0,08 $ significa ~100 k risultati/GB, irrealistico per pagine ricche. Il prezzo basso di un clone è sostenibile solo se il costo dei proxy ricade sull'utente (pay-per-usage) o se il clone non funziona bene.

**E13 [fatto].** Apify impone il pay-per-event: abolisce il modello "rental" a canone fisso (migrazione entro 6 mesi dal 14 aprile 2026). Gli actor non migrati passano a "pay-per-usage", cioè **zero ricavo per lo sviluppatore**. La piattaforma decide unilateralmente il modello di ricavo. Fonte: https://blog.apify.com/standardizing-actor-pricing (consultata il 2026-11-20).

**E14 [fatto, mio calcolo].** Manutenzione e rotture:
- Su 7.161 actor con ≥ 100 run/30 gg, **766 hanno un tasso di successo < 90%** e 219 < 70%.
- 116 actor del campione sono marcati `UNDER_MAINTENANCE`.
- Sul totale delle run, quelle fallite o andate in timeout sono l'1,4%: i leader sono affidabili, ed è proprio quello che serve per restare in classifica.

Fonte: API Apify (sopra). [stima] L'affidabilità dei leader richiede manutenzione continua: E5 indica 5-7 h/settimana solo di manutenzione per 98 actor.

### D. Guerra di prezzo e cloni

**E15 [fatto, dati API].** Dispersione dei prezzi sullo stesso target:

| Actor | Prezzo | Utenti/30 gg |
|---|---|---|
| Google Maps, leader `compass/crawler-google-places` | 0,004 $/luogo (4 $/1.000) | 49.105 |
| Google Maps, cloni | 0,5 $/1.000 (`scraperlink`), 0,08 $/1.000 (`kaix`) | — |
| Recensioni Google, leader | 0,6 $/1.000 | — |
| Recensioni Google, clone | 0,04 $/1.000 | — |

Gli actor con "google maps" nel titolo sono 237, di cui 87 con ≥ 10 utenti. Fonte: API Apify (consultata il 2026-11-20).

**E16 [fatto, dati API, CONTRO la confutazione].** Lo storico dei prezzi dei leader (`pricingInfos`) **non mostra un calo**:
- TikTok (`clockworks`): canone di 45 $/mese nel 2022, poi 3 $/1.000 (marzo 2025), poi **3,7 $/1.000** (giugno 2025-oggi).
- Google Maps (`compass`): 4 $/1.000 stabile da marzo 2025.
- Instagram (`apify`): da 2,3 a 2,7 $/1.000 (dicembre 2025).
- Recensioni Google (`compass`): da 0,5 a 0,6 $/1.000.

Fonte: `https://api.apify.com/v2/acts/{actor}` (consultata il 2026-11-20). Il tentativo di verificare prezzi più vecchi via Wayback Machine è fallito (dominio bloccato).

### E. Dove sta la domanda pagante

**E17 [fatto, mio calcolo].** Quota degli utenti a 30 giorni per categoria dello Store (un actor può avere più categorie):

| Categoria | Quota utenti |
|---|---|
| SOCIAL_MEDIA | 59,6% |
| LEAD_GENERATION | **42,2%** (51,2% esclusa Apify) |
| AUTOMATION | 27,9% |
| ECOMMERCE | 9,9% |
| JOBS | 7,0% |
| TRAVEL | 6,0% |
| SEO_TOOLS | 5,8% |
| NEWS | 1,9% |
| REAL_ESTATE | 1,6% |

La lead generation (contatti di aziende e professionisti) ricade nell'ambito escluso "dati su aziende come lead". Fonte: API Apify.

**E18 [fatto].** Mercato dei dati alternativi:
- Mordor stima 11,70 miliardi di dollari nel 2025, di cui il **BFSI ha il 33,05%** e lo **web scraping/crawling il 30,55%** dei ricavi.
- Mordor prevede che i dati da scraping raggiungano un plateau "as content controls tighten" (https://www.mordorintelligence.com/industry-reports/alternative-data-market, consultata il 2026-11-20).
- Neudata: le società d'investimento hanno speso circa 2,8 miliardi di dollari nel 2025; "web-scraped" e dati transazionali sono le voci di spesa maggiori.
- Sempre Neudata: in media circa **20 clienti per dataset**, in calo da 25 nel 2024; i dataset sono passati da 2.215 a 2.805 (https://www.neudata.co/blog/state-of-the-alternative-data-market-2026, consultata il 2026-11-20).

Il compratore più ricco di dati da scraping, la finanza, è **escluso** dal profilo. Più offerta e meno clienti per dataset.

**E19 [fatto, parziale].** AWS Data Exchange elenca per prima la categoria dei servizi finanziari; tra i fornitori citati ci sono Reuters, Equifax e FactSet. Non ho trovato la ripartizione delle sottoscrizioni per categoria. Fonte: https://aws.amazon.com/data-exchange/ (snippet di ricerca; pagina non letta integralmente). Per Datarade non ho trovato una classifica delle categorie più richieste ("non trovato"; la pagina delle categorie ha risposto 403).

### F. Rischio legale e di piattaforma

**E20 [fatto].** Google contro SerpApi (N.D. Cal., 19 dicembre 2025), per l'aggiramento di SearchGuard con argomenti DMCA; nella stessa ricerca compaiono anche rivendita di dati e query false.
- Secondo un titolo di Search Engine Land (articolo non leggibile, 403), le pretese DMCA sono state respinte a luglio 2026 con facoltà di modificare la domanda.
- Fonti: https://blog.google/technology/safety-security/serpapi-lawsuit/ ; https://searchengineland.com/google-loses-key-dmca-claims-against-serpapi-in-scraping-lawsuit-483185 (consultate il 2026-11-20; il secondo solo dallo snippet).
- Anche quando il convenuto vince in parte, il costo della difesa è a suo carico (American Rule, vedi E10).

**E21 [fatto].** Reddit contro SerpApi, Oxylabs, AWMProxy e Perplexity (S.D.N.Y., ottobre 2025, 25-cv-08736) per scraping di Reddit tramite i risultati Google e rivendita, con claim DMCA. Fonte: https://searchengineland.com/reddit-sues-perplexity-serpapi-scraping-google-463681 (snippet, consultata il 2026-11-20).

**E22 [fatto].** LinkedIn contro ProAPIs (N.D. Cal., ottobre 2025, 3:25-cv-8393): i clienti pagavano "fino a 15.000 $/mese" ed è stato raggiunto un accordo di massima. In precedenza, hiQ contro LinkedIn: violazione dello User Agreement, sentenza consensuale di 500 k$, ingiunzione permanente e distruzione di dati e codice (dicembre 2022). Fonti: https://securityaffairs.com/183001/security/linkedin-sues-proapis-for-15k-month-linkedin-data-scraping-scheme.html ; https://newmedialaw.proskauer.com/2022/12/08/hiq-and-linkedin-reach-proposed-settlement-in-landmark-scraping-case/ (snippet, consultate il 2026-11-20).

**E23 [fatto].** GDPR. La CNIL ha multato KASPR per **240.000 €** (5 dicembre 2024) per la raccolta di contatti LinkedIn (base di circa 160 milioni di contatti) contro le aspettative ragionevoli degli interessati, con violazioni anche su conservazione e trasparenza. Fonte: https://www.cnil.fr/en/data-scraping-kaspr-fined-eu240000 ; https://www.edpb.europa.eu/news/data-scraping-french-supervisory-authority-fined-kaspr-eu240-000_en (consultate il 2026-11-20).

**E24 [fatto].** Diritto *sui generis* UE. La CGUE, CV-Online Latvia c. Melons (C-762/19, 3 giugno 2021), ha stabilito che un motore di ricerca di annunci di lavoro che estrae e riutilizza parti sostanziali di una banca dati viola il diritto *sui generis* se ne minaccia l'investimento. È rilevante per scraper di offerte di lavoro, annunci e cataloghi. Fonte: https://www.lewissilkin.com/insights/2021/06/10/database-battle-between-job-ad-websites-eu-court-of-justice-decision-102h08y (consultata il 2026-11-20; letto il riassunto, non la sentenza).

**E25 [fatto].** Dal 1° luglio 2025 Cloudflare blocca di default i crawler AI per i nuovi clienti e lancia "pay per crawl"; serve circa il 20% del web. Fonte: https://www.technologyreview.com/2025/07/01/1119498/cloudflare-will-now-by-default-block-ai-bots-from-crawling-its-clients-websites/ (snippet, consultata il 2026-11-20). [stima] I costi anti-bot crescono, e i dati da scraping dipendono da fonti che si chiudono.

**E26 [fatto, CONTRO la confutazione].** Meta contro Bright Data: il 23 gennaio 2024 il giudice ha dato ragione a Bright Data, perché i termini di Meta non vietano lo scraping fatto senza login; Meta ha poi rinunciato alla causa. Fonte: https://techcrunch.com/2024/01/24/court-rules-in-favor-of-a-web-scraper-bright-data-which-meta-had-used-and-then-sued (snippet, consultata il 2026-11-20). Il rischio legale non è uniformemente fatale; l'esito di X contro Bright Data non l'ho verificato ("non trovato" in questa sessione).

## Distribuzione dei risultati

| Indicatore | Valore | Tipo |
|---|---|---|
| Actor elencati nello Store | ~124-125 mila | [fatto] API |
| Actor con ≥ 100 utenti/mese | 993 (~0,8% del catalogo) | [fatto] API |
| Actor con ≥ 1.000 utenti/mese | 147 (~0,12%) | [fatto] API |
| Quota utenti dei primi 100 actor | 64,9% (del campione) | [fatto] API |
| Quota dell'account Apify | 32,5% | [fatto] API |
| Payout totali mensili dichiarati | 2 M$ (ottobre 2026) | [fatto, autodichiarato] |
| Payout mediano per sviluppatore con trazione | ~38 $/mese | [stima] |
| Sviluppatori stimati ≥ 4.800 $/mese | ~74 su 1.722 nel campione; ~0,16% dei 46.000 "attivi" | [stima] |
| Primi 10 sviluppatori della community | ~45-200 k$/mese ciascuno | [stima] |
| RapidAPI: dal picco all'exit | 4 M utenti → migliaia; 40 k API → centinaia | [fatto] |
| Dati alternativi: clienti per dataset | ~20 (da 25) | [fatto] Neudata |

[stima] Probabilità per un nuovo entrante su marketplace di arrivare a ≥ 50 k€/anno di margine in 24 mesi con ≤ 5 h/settimana del founder. Il ragionamento:
- La frequenza di base tra chi ha già trazione è circa il 4% (74/1.722); tra tutti gli sviluppatori attivi è sotto lo 0,2%.
- Le competenze del founder (anti-bot avanzato) alzano la probabilità rispetto alla media.
- La delega costa: per la manutenzione servono 5-7 h/settimana per circa 100 actor (E5). Delegata, è un costo che alza la soglia di ricavo lordo necessaria.
- I domini esclusi tolgono circa metà della domanda (E17).

Risultato: **circa 3-8%**, con forte incertezza.

## Criteri di confutazione, uno per uno

| # | Criterio | Esito | Evidenza |
|---|---|---|---|
| 1 | Ricavi mediani degli sviluppatori sui marketplace < 500 €/mese, top pochi e concentrati | **VERIFICATO** | E2, E3, E4, E6. Mediana stimata ~38 $/mese tra chi ha trazione, ~0 sull'intero catalogo; top 10 account con il 61% degli utenti; su RapidAPI "one or two carry the whole thing" (E8). Limite: la mediana dei ricavi non è pubblicata da Apify, quindi è stimata da utenti e payout. Il margine di errore è ampio, ma la distanza dalla soglia (circa 15 volte) rende la conclusione robusta. |
| 2 | Domanda pagante quasi tutta in domini esclusi | **PARZIALE** | Sì per una quota grande: lead generation al 42% su Apify (51% nella community) e compratori di dati alternativi prevalentemente finanziari (E17-E19). No per il "quasi tutta": social media, e-commerce (9,9%), lavoro (7%), viaggi (6%) e news restano fuori dagli ambiti esclusi. |
| 3 | Prezzi in corsa al ribasso | **NON VERIFICATO per i leader / PARZIALE per i cloni** | I leader mantengono o alzano i prezzi (E16). Esistono cloni a prezzi 10-50 volte inferiori (E15), ma non risultano scalzare i leader. Non sono riuscito a ricostruire serie storiche lunghe (Wayback bloccato). |
| 4 | Rischio legale sistematico | **PARZIALE** | Alto e ricorrente sui target più richiesti: LinkedIn (hiQ, Proxycurl, ProAPIs), Google (SerpApi), Reddit, GDPR (KASPR), *sui generis* (CV-Online) (E20-E24). Non sistematico in assoluto: Meta ha perso con Bright Data (E26), e per dati non personali e non protetti (es. prezzi pubblici) non ho trovato cause rilevanti. |

Il criterio 1 è pienamente verificato; gli altri tre sono parziali o non verificati. Spetta al Giudice decidere se il registro richieda tutti e quattro i criteri ("Confutata se: …; …; …; …"). Dal mio lato: l'ipotesi nella forma "vendere actor/API su marketplace" è **gravemente indebolita**; nella forma "vendere dataset" lo è per la dipendenza dalla domanda finanziaria, che è esclusa.

## Attacco alle idee concrete ovvie

1. **Scraper di Google Maps su Apify.**
   - Il leader `compass` ha 49 mila utenti al mese e domina anche la categoria TRAVEL (77,8% degli utenti della categoria).
   - Ci sono 237 concorrenti, con cloni a 0,08 $/1.000.
   - L'uso tipico è creare liste di attività locali da contattare, cioè "dati su aziende come lead": **ambito escluso**.
   - Google fa causa agli scraper delle sue pagine (SerpApi).
   - Morto per questo profilo.
2. **Social media (Instagram, TikTok, LinkedIn).**
   - Instagram: 705 actor; i primi 7 per utenti sono di Apify stessa, e la piattaforma compete con i propri sviluppatori.
   - LinkedIn: 652 actor, leader `harvestapi`. È lead generation (esclusa) ed è il terreno legale peggiore (hiQ, Proxycurl, ProAPIs, KASPR).
   - TikTok: leader `clockworks` con 38 mila utenti.
   - Entrare da secondi significa competere sul prezzo, cioè la coda dei cloni.
3. **E-commerce (Amazon ecc.).**
   - ECOMMERCE: 3.117 actor, solo 174 con ≥ 100 utenti, e una quota di domanda del 9,9%.
   - Più frammentata e meno presidiata, quindi l'attacco qui è più debole.
   - La domanda vera (monitoraggio prezzi) è un servizio (vedi H03), non un actor da pochi dollari.
4. **Recensioni.** Prezzi già bassissimi (0,6 $/1.000 il leader, 0,04 $/1.000 i cloni); il valore per risultato è minimo.
5. **Offerte di lavoro.**
   - 1.347 actor; i primi due sviluppatori hanno il 37,6% della categoria.
   - Rischio *sui generis* esplicito (CV-Online).
   - Attenzione al vincolo del profilo: un prodotto che diventi matching tra candidati e aziende sfiora l'intermediazione di lavoro.
6. **API su RapidAPI.** Il marketplace è in declino documentato (E7), la commissione è del 20-25%, la discovery è nulla. Morto come canale principale.
7. **Dataset su Datarade o AWS Data Exchange.**
   - Il compratore con budget è la finanza (escluso).
   - Il numero medio di clienti per dataset è circa 20 e in calo (E18).
   - Lì la vendita è B2B consultiva e richiede il founder: confligge con ≤ 5 h/settimana e con il lavoro attuale (business information).

## Cosa sopravvive comunque

Onestamente, non tutto è da buttare:
- **La domanda esiste ed è in crescita.** I payout sono passati da 563 k$/mese (settembre 2025) a 2 M$/mese (ottobre 2026), dati autodichiarati, e i prezzi dei leader reggono (E16). Chi diventa leader di una nicchia guadagna: decine di sviluppatori sono stimati oltre i 4.800 $/mese, e alcuni sopra i 100 k$/mese.
- **Le nicchie non escluse e meno presidiate sono il terreno più promettente**, se il target ha difese anti-bot serie, dove la competenza del founder fa da barriera contro i cloni economici. Ci sono già i numeri:
  - e-commerce: solo 174 actor con ≥ 100 utenti;
  - news: 23;
  - viaggi esclusa Google Maps;
  - marketplace locali europei e italiani.
- **La distribuzione è integrata**: lo Store porta utenti senza bisogno di un pubblico proprio. Questo è un punto a favore per il criterio C5.
- **Condizioni per sopravvivere** (da verificare dal Giudice):
  1. portafoglio di target difficili e non personali (niente LinkedIn, niente lead);
  2. affidabilità da leader (successo > 98%), con manutenzione delegata a un team pagato;
  3. obiettivo realistico iniziale di 1-5 k$/mese, non 50 k€/anno, con la soglia di successo raggiungibile solo se uno o due actor diventano leader di categoria.

## Fonti

Tutte consultate il 2026-11-20.

**Dati primari**
- API pubblica Apify Store: https://api.apify.com/v2/store?limit=1000&offset=0 … 14000. Download completo e analisi propria (script in scratchpad, non conservati nel repo).
- API pubblica Apify, dettaglio actor e storico prezzi: https://api.apify.com/v2/acts/compass~crawler-google-places ; https://api.apify.com/v2/acts/compass~Google-Maps-Reviews-Scraper ; https://api.apify.com/v2/acts/apify~instagram-scraper ; https://api.apify.com/v2/acts/clockworks~tiktok-scraper

**Apify (piattaforma, numeri autodichiarati)**
- Home Apify ("$2M paid out last month"): https://apify.com/
- https://apify.com/pricing
- https://docs.apify.com/platform/actors/publishing/monetize
- https://blog.apify.com/standardizing-actor-pricing
- https://blog.apify.com/building-98-actors-on-apify-store/
- https://natlawreview.com/press-releases/apify-bets-1m-independent-developers-building-ais-missing-tools

**Analisi di terzi e casi di sviluppatori**
- https://stacker.news/items/1581524
- https://dev.to/sessionzero_ai/i-built-13-korean-data-scrapers-heres-what-i-actually-made-in-month-1-8ep
- https://dev.to/donnyautomation/the-honest-economics-of-selling-apis-on-rapidapi-from-a-live-portfolio-13k0

**Marketplace chiusi o ridimensionati**
- https://techcrunch.com/2024/11/13/nokia-acquires-rapid-the-api-company-once-valued-at-1b/
- https://docs.rapidapi.com/docs/payouts-and-finance (da snippet di ricerca)
- https://adtmag.com/Articles/2016/11/18/azure-datamarket-shutdown.aspx (da snippet)
- https://nubela.co/blog/goodbye-proxycurl/

**Mercato dei dati**
- https://www.mordorintelligence.com/industry-reports/alternative-data-market
- https://www.neudata.co/blog/state-of-the-alternative-data-market-2026
- https://www.bolsamania.com/nota-de-prensa/mercados/ai-adoption-is-rising-but-alt-data-vendor-spend-hasnt-neudata-report-finds--21827366.html
- https://aws.amazon.com/data-exchange/ (da snippet)

**Cause e rischio legale**
- https://blog.google/technology/safety-security/serpapi-lawsuit/ (da snippet)
- https://searchengineland.com/google-loses-key-dmca-claims-against-serpapi-in-scraping-lawsuit-483185 (403 alla lettura, solo snippet)
- https://searchengineland.com/reddit-sues-perplexity-serpapi-scraping-google-463681 (da snippet)
- https://securityaffairs.com/183001/security/linkedin-sues-proapis-for-15k-month-linkedin-data-scraping-scheme.html (da snippet)
- https://newmedialaw.proskauer.com/2022/12/08/hiq-and-linkedin-reach-proposed-settlement-in-landmark-scraping-case/ (da snippet)
- https://www.cnil.fr/en/data-scraping-kaspr-fined-eu240000 (da snippet)
- https://www.edpb.europa.eu/news/data-scraping-french-supervisory-authority-fined-kaspr-eu240-000_en (da snippet)
- https://www.lewissilkin.com/insights/2021/06/10/database-battle-between-job-ad-websites-eu-court-of-justice-decision-102h08y (da snippet)
- https://www.technologyreview.com/2025/07/01/1119498/cloudflare-will-now-by-default-block-ai-bots-from-crawling-its-clients-websites/ (da snippet)
- https://techcrunch.com/2024/01/24/court-rules-in-favor-of-a-web-scraper-bright-data-which-meta-had-used-and-then-sued (da snippet)

**Fonti non raggiungibili:** web.archive.org (bloccato dalla rete: serie storiche dei prezzi precedenti al 2025 non verificate); datarade.ai (403); lupa.cz (503: totale annuo dei payout Apify 2024 non verificato).
