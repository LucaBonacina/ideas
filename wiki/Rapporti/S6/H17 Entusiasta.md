---
tipo: rapporto
sessione: S6
ipotesi: "H17 - Le competenze di scraping sono un vantaggio competitivo reale nel 2026"
ruolo: Entusiasta
data: 2026-11-20
ricerche_web_usate: 23
---

# H17: il vantaggio dello scraping nel 2026 (ruolo: Entusiasta)

> Ruolo: costruire il caso più forte possibile **a favore** di H17. Le controevidenze che ho incontrato le riporto comunque, nella sezione "Lacune e incertezze" e nel testo dove servono, per non falsare il quadro.
>
> Criterio di confutazione pre-registrato: gli strumenti AI di estrazione (agenti browser, API di scraping gestite, "web data as a service") hanno reso lo scraping una commodity, al punto che il vantaggio non si misura più nei casi rilevanti.

## Sintesi

1. **[fatto] Gli agenti browser restano lontani dall'affidabilità di produzione.** Su Online-Mind2Web (300 task reali, 136 siti) Operator raggiunge il 61,3%, Claude Computer Use 3.7 il 56,3%, Browser Use il 30,0%. Il miglior risultato sul leaderboard indipendente HAL di Princeton è 42,3%, e ogni run completo costa da 171 a 1.610 $. **[stima]** Questo equivale a 0,6-5 $ per task e a 1,4-13 $ per task riuscito. Una richiesta di scraping tradizionale tramite unblocker commerciale costa invece circa 0,0013-0,0015 $. Il divario va da 3 a 4 ordini di grandezza.
2. **[fatto] Le API gestite non hanno risolto le fonti protette.** Nel benchmark Proxyway (ottobre 2025, 11 API, 15 siti protetti, circa 6.000 URL per sito) solo 4 API su 11 superano l'80% di successo. Su Shein la media è del 21,9%, su G2 del 36,6%, su Hyatt del 43,8%. Firecrawl, la più "AI-native", è ultima nel successo aggregato. Proxyway giudica il parsing via LLM "hardly enterprise-ready".
3. **[fatto] La difesa anti-bot si sta irrigidendo e diventando infrastruttura.** Lo dimostrano più passaggi:
   - Cloudflare blocca di default i crawler AI sui nuovi domini da luglio 2025 e ha lanciato AI Labyrinth (marzo 2025).
   - Ha introdotto Web Bot Auth e la categoria "signed agents" (agosto 2025).
   - Ha de-listato Perplexity per crawling "stealth" (agosto 2025).
   - Annuncia per il 15/09/2026 il blocco di default anche della categoria "Agent" sui nuovi domini.
   - Il traffico automatizzato ha superato quello umano: 51% nel 2024 secondo Imperva, oltre il 50% secondo Cloudflare a luglio 2026.
4. **[stima] L'escalation premia chi sa gestire fonti difficili in modo continuativo e lecito.** Gli strumenti generici "punta e chiedi" vengono riconosciuti e trattati come classe (firma, user-agent, honeypot). Una pipeline progettata caso per caso (ritmo, sessioni, API nascoste, fallback, monitoraggio) resta invece un'abilità artigianale. La difesa però è disomogenea: per DataDome il 61,2% di 16.900 siti testati è non protetto. Lo scraping "facile" quindi esiste ed è commoditizzato.
5. **[fatto] La domanda di dati web cresce in modo misurabile.** Bright Data dichiara un ARR di oltre 300 M$ con crescita superiore al 50% annuo (dato aziendale, novembre 2025). Apify ha un fatturato di 298 M CZK nel 2024 (+65%) e ha versato circa 24 M CZK agli sviluppatori del suo Store. Le stime di mercato "web scraping" vanno da circa 1 a 1,3 mld$ nel 2025, con una CAGR del 13-18%. Sono numeri di istituti con metodologia opaca e divergente.
6. **[stima] Il vantaggio residuo non sta più nel "saper scaricare una pagina".** Sta in quattro capacità:
   - copertura di fonti frammentate ed eterogenee;
   - freschezza continua con manutenzione, dato che le fonti cambiano struttura circa 2,6 volte l'anno (stima di un vendor);
   - normalizzazione ed entity resolution;
   - conoscenza giuridica: Ryanair C-30/14, sui generis, GDPR e nota del Garante 2024, Meta v. Bright Data, hiQ v. LinkedIn, art. 70-septies LdA.
7. **[stima] Il prodotto in cui il vantaggio è massimo per questo profilo è un dato verticale ricorrente.** Riguarda prodotti, prezzi e assortimenti presso molti siti eterogenei e almeno qualche fonte protetta. Il cliente è un'azienda non finanziaria e paga per freschezza e qualità del matching, non per le singole pagine. Le idee concrete sono nella sezione dedicata, con pro e contro.

---

## Evidenze per criterio di confutazione

Il criterio ha più parti: (a) gli agenti browser, (b) le API di estrazione LLM e gli unblocker, (c) il "web data as a service". Per ciascuna verifico se il vantaggio "non si misura più nei casi rilevanti".

### A. Agenti browser (Operator/ChatGPT Agent, Claude computer use, Browser Use, Comet)

**Tassi di successo**

- **[fatto]** *An Illusion of Progress? Assessing the Current State of Web Agents* (Xue et al., OSU e UC Berkeley, COLM 2025, arXiv v4 dell'8/10/2025) ha introdotto Online-Mind2Web: 300 task, 136 siti, valutazione umana. Gli autori scrivono che i risultati "depict a very different picture of the competency of current agents, suggesting over-optimism in previously reported results". I tassi di successo complessivi sono:

  | Agente | Successo |
  |---|---|
  | Operator | 61,3% |
  | Claude Computer Use 3.7 | 56,3% |
  | SeeAct | 30,7% |
  | Browser Use | 30,0% |
  | Claude Computer Use 3.5 | 29,0% |
  | Agent-E | 28,0% |

  Il successo cala del 31,6% passando dai task facili ai medi e di un altro 15,4% dai medi ai difficili. Operator usa 2,6 volte i passi di un umano, impiega fino a 44 minuti su task difficili e spesso supera i 100 screenshot per traiettoria. Fonte: arxiv.org/abs/2504.01382, arxiv.org/html/2504.01382v4.
- **[fatto]** Il leaderboard HAL (Princeton) su Online-Mind2Web mostra i risultati migliori in termini di accuratezza e costo del run completo:

  | Configurazione | Accuratezza | Costo del run |
  |---|---|---|
  | SeeAct + GPT-5 Medium | 42,33% | 171 $ |
  | Browser-Use + Claude Sonnet 4 | 40,00% | 1.577 $ |
  | Browser-Use + Claude 3.7 Sonnet High | 39,33% | 1.152 $ |

  La pagina avverte che alcuni costi sono sovrastimati fino a 2 volte. Fonte: hal.cs.princeton.edu/online_mind2web.
- **[stima]** Il costo per task riuscito deriva dai dati HAL: 1.577 $ / 300 task = 5,26 $ per task; al 40% di successo fanno circa 13 $ per task riuscito, oppure circa 6,5 $ se il costo è sovrastimato di 2 volte. Per SeeAct + GPT-5: 0,57 $ per task e 1,35 $ per task riuscito.
- **[fatto]** Browser Use dichiara costi per task da 0,70 a 1,64 $ con Claude Opus 4.7 nei suoi test interni (dato del vendor, solo task riusciti, senza hosting del browser). La sua v4 promette "3 centesimi per successo" (comunicato del vendor, non verificato). CostBench, sito terzo, stima 0,10-0,30 $ per task su modelli frontier. Fonti: docs.browser-use.com/cloud/pricing; runtimewire.com; costbench.com.

**Confronto con lo scraping tradizionale**

- **[fatto]** Bright Data Web Unlocker costa 1,5 $ ogni 1.000 richieste a consumo e 1,3 $ ogni 1.000 sul piano Scale, pagando solo le richieste riuscite. Fonte: brightdata.com/pricing/web-unlocker.
- **[stima]** Un agente costa da 0,03 a 5 $ per task, una pagina via unblocker 0,0013-0,0015 $: da 20 a 3.800 volte di più, a seconda dello scenario. Questo vale prima ancora dei costi di infrastruttura propria, che per siti non protetti sono ancora più bassi. A scala, da 1 a 10 milioni di pagine al mese, l'agente browser non è un'alternativa economica. È uno strumento per task singoli o poco frequenti.

**Latenza e allucinazioni**

- **[fatto]** Nel paper *Beyond BeautifulSoup* (Bhardwaj, Diwan, Wang; arXiv 2601.06301, gennaio 2026, AAAI) BeautifulSoup e Scrapy completano i task su siti statici in meno di 2 secondi, con il 93% e l'82% di successo. Gli agenti arrivano al 100% ma impiegano 10-20 secondi. Testualmente: "For static content, the 15–20× runtime cost of agents provides no meaningful benefit." Sui CAPTCHA dinamici Claude ottiene il 5% di successo.
- **[fatto]** Nel system card di ChatGPT agent (17/07/2025) il tasso di allucinazione con navigazione è del 7,9% su SimpleQA e del 4,3% su PersonQA, peggiore di o3 con browsing (4,6% e 2,4%). Fonte: deploymentsafety.openai.com/chatgpt-agent. Non ho trovato e verificato i punteggi WebArena e BrowseComp di ChatGPT agent: la pagina openai.com ha risposto 403 alla lettura automatica.

**Verdetto sulla parte (a):** **[stima]** per raccolta ricorrente, a scala, con qualità controllata, gli agenti browser non commoditizzano lo scraping. Lo commoditizzano per task singoli e occasionali di utenti non tecnici.

### B. API di estrazione LLM e unblocker (Firecrawl, Jina, ScrapeGraphAI, Diffbot, Apify, Bright Data, Zyte)

**Costo**

- **[fatto]** Firecrawl costa 1 credito per pagina e 5 crediti con estrazione JSON via LLM. Il piano Scale offre 1 M di crediti a 749 $ al mese, pari a circa 0,00075 $ per credito. Fonte: firecrawl.dev/pricing.
- **[stima]** L'estrazione strutturata via LLM costa quindi circa 0,003-0,004 $ per pagina. Su pagine non protette è economica e accessibile: questa parte dello scraping è effettivamente commoditizzata (vedi "Lacune e incertezze").

**Successo su fonti protette**

- **[fatto]** Il Proxyway Web Scraping API Report 2025 (pubblicato il 4/12/2025, test di ottobre 2025) ha messo alla prova 11 API: Apify, Crawlbase, Decodo, Firecrawl, NetNut, Nimble, Oxylabs, ScraperAPI, ScrapingBee, ZenRows e Zyte. I bersagli erano 15 siti protetti (Amazon, Shein, G2, Hyatt, Walmart, ChatGPT…), con circa 6.000 URL per sito.
  - Solo Zyte, Decodo, Oxylabs e ScrapingBee superano l'80% di successo.
  - Il successo medio è del 21,88% su Shein, del 36,63% su G2 e del 43,75% su Hyatt.
  - Firecrawl è ultima nel successo aggregato: "fallisce in fretta" e scarica sull'utente il lavoro di retry.
  - Su Apify il costo varia per singolo scraper; uno scraper Leboncoin è costato oltre 60 $ per circa un decimo dei risultati attesi.
  - Sull'AI: il parsing LLM è "hardly enterprise-ready" per affidabilità e costo.

  Fonte: proxyway.com/research/web-scraping-api-report-2025.

**Accuratezza dell'estrazione**

- **[fatto]** NEXT-EVAL (arXiv 2505.17125, maggio 2025) misura l'estrazione di record su 164 pagine reali con oltre 12.278 record annotati. Con Gemini 2.5 Pro il risultato dipende molto dal formato di input:

  | Input | F1 | Allucinazioni |
  |---|---|---|
  | HTML semplificato | 0,10 | 91,5% |
  | JSON gerarchico | 0,40 | 59,8% |
  | JSON "flat" | 0,957 | 3,05% |

  Il metodo tradizionale MDR ha zero allucinazioni ma F1 di 0,08. **[stima]** L'estrazione LLM funziona bene solo con un pre-processing esperto dell'input. Questo è proprio il saper fare dello scraper: senza, le allucinazioni sono massicce.
- **[fatto]** Firecrawl dichiara un'accuratezza (exact match) dell'87,5% nel suo CrawlBench (dicembre 2024) e un F1 di 0,638 in un benchmark interno del gennaio 2026. Sono numeri del vendor. Fonti: firecrawl.dev/blog/crawlbench-llm-extraction; firecrawl.dev/alternatives/firecrawl-vs-scrapegraphai.
- Non ho trovato benchmark indipendenti di accuratezza ed allucinazione testa a testa fra Firecrawl, Jina, ScrapeGraphAI e Diffbot.

**Verdetto sulla parte (b):** **[stima]** la commoditizzazione è reale per pagine pubbliche non protette e per schemi semplici. Non lo è per fonti protette a volumi sostenuti, né per estrazioni a schema rigido dove l'1-5% di errori silenziosi conta.

### C. Escalation anti-bot: aumenta il valore di chi sa gestire fonti difficili?

**Quota di traffico bot**

- **[fatto]** Imperva 2025 Bad Bot Report (dati 2024): il traffico automatizzato è al 51%, i bad bot al 37%, i good bot al 14% e il traffico umano al 49%. Esiste un'edizione 2026 che non ho letto. Fonte: cpl.thalesgroup.com, imperva.com.
- **[fatto]** Cloudflare Radar Year in Review 2025:
  - i crawler AI pesano in media il 4,2% delle richieste HTML;
  - la crawling "user-action" (per esempio ChatGPT-User) è cresciuta di oltre 15 volte (21 volte nel corpo del testo);
  - GPTBot, ClaudeBot e CCBot sono gli user-agent più spesso esclusi totalmente nei robots.txt.

  Fonte: blog.cloudflare.com/radar-2025-year-in-review/.
- **[fatto]** Cloudflare, "Content Independence Day, one year on" (1/7/2026):
  - il traffico di agenti ha superato il 50% del traffico Internet;
  - l'addestramento AI pesa il 52% delle richieste dei crawler a giugno 2026, contro il 22% della primavera 2025;
  - Cloudflare serve oltre il 20% del web e il 36% dei siti più visitati;
  - dal 15/09/2026 le categorie "Training" e "Agent" sono bloccate di default sui nuovi domini.

  Il post non riporta numeri di adozione di pay-per-crawl. Fonte: blog.cloudflare.com/agentic-internet-bot-report/.

**Strumenti di difesa di Cloudflare**

- **[fatto]** Il 1/7/2025 Cloudflare ha introdotto il blocco di default dei crawler AI per i nuovi clienti e Pay Per Crawl in beta privata. OpenAI ha rifiutato di partecipare. Fonti: technologyreview.com (1/7/2025), theregister.com (1/7/2025).
- **[fatto]** AI Labyrinth (19/3/2025) attira i crawler che ignorano i divieti in labirinti di pagine generate e usa queste visite come honeypot per il fingerprinting. Allora i crawler AI generavano più di 50 mld di richieste al giorno, poco meno dell'1% del traffico Cloudflare. Fonte: blog.cloudflare.com/ai-labyrinth/.
- **[fatto]** Web Bot Auth e "signed agents" (28/8/2025): richieste firmate crittograficamente. Partecipano ChatGPT agent, Goose (Block), Browserbase, Anchor Browser e Cloudflare Browser Rendering. Gli "scraper di prezzi di massa" sono citati come esempio di bot malevolo. Fonte: blog.cloudflare.com/signed-agents/.
- **[fatto]** Cloudflare accusa Perplexity di crawling stealth: rotazione di user-agent, IP e ASN. Il bot è stato de-listato dai verified bot e sono state aggiunte regole di blocco. Perplexity contesta. Fonte: blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/ (4/8/2025).

**Copertura disomogenea della difesa**

- **[fatto]** DataDome Global Bot Security Report 2025 (30/9/2025, 16.900+ siti testati con bot di prova):
  - il 61,2% dei siti è non protetto, il 36% parzialmente, il 2,8% completamente (era l'8,4% nel 2024);
  - il traffico dei crawler LLM è quadruplicato tra gennaio e agosto 2025;
  - i finti bot Chrome e Curl evadono le difese nel 79% dei casi.

  È un vendor che vende protezione. La pagina diretta ha risposto 403, quindi i numeri vengono dai comunicati riportati in ricerca. Fonte: datadome.co/press/...; businesswire.com (30/9/2025).
- **[fatto, ironico ma pertinente]** Durante questa ricerca openai.com, datadome.co e businesswire.com hanno restituito 403 al fetch automatico. Anche un agente AI generalista viene fermato sulle fonti "difese".

**[stima] Effetto sul vantaggio.** L'escalation produce una biforcazione:

1. Gli agenti AI "dichiarati", cioè firmati e identificabili, diventano gestibili e tariffabili dai siti. Per l'utente generico significa che il suo agente verrà sempre più spesso bloccato o fatto pagare su fonti di valore.
2. Sui siti protetti l'accesso richiede competenza specifica: ritmo, sessioni, API interne, scelta della fonte alternativa, uso delle API ufficiali o di dataset licenziati quando esistono.
3. Per il profilo in esame, il valore non sta nell'"aggirare" protezioni: aggirare misure tecniche è legalmente rischioso, vedi sezione E. Sta nel saper scegliere e combinare fonti, endpoint e frequenze, ottenendo lo stesso dato in modo sostenibile, e nel saper distinguere in anticipo le fonti percorribili da quelle no.

Questo aumenta il valore del giudizio esperto, non della forza bruta.

### D. Domanda di mercato per dati web

**Fornitori e marketplace**

- **[fatto]** Bright Data: ARR oltre 300 M$ e crescita superiore al 50% annuo, con un target di 400 M$ a metà 2026. Supporta 14 dei primi 20 laboratori LLM. La fonte è un post del CEO riportato da Calcalist/CTech il 23/11/2025: è un **dato dichiarato dall'azienda**, non certificato. Nel 2021 aveva annunciato 100 M$. Fonti: calcalistech.com/ctechnews/article/sjeyg2ezwe; brightdata.com/blog/general/data-for-ai-is-fueling-massive-growth-at-bright-data.
- **[fatto]** Apify, secondo Lupa.cz (26/2/2025):
  - fatturato 2024 di 298 M CZK, +65% annuo;
  - circa 24 M CZK versati agli sviluppatori di Actor nello Store nel 2024, contro circa 15 M CZK nel 2023;
  - commissione di Apify del 20%, oltre 3.000 Actor.

  **[stima]** Al cambio di circa 25 CZK/€ fanno circa 11,9 M€ di fatturato e circa 0,96 M€ agli sviluppatori. Altre stime di terzi sull'ARR vanno da 13 a 50 M$ (GetLatka, ai.engineer): non verificabili. Dal report Apify "State of web scraping" (30/1/2025), su dati di piattaforma:
  - utenti mensili attivi da 20.843 a 50.543 nel 2024 (+142%);
  - chiamate API da 3,6 a 6,8 mld;
  - run schedulati +156%.

  Sono dati dell'azienda.
- **[fatto]** Zyte: nessun ricavo pubblicato; Similarweb stima 15-25 M$. È una stima di terzi.

**Dimensione del mercato**

- **[fatto]** Le stime di mercato "web scraping" divergono:
  - The Business Research Company: 0,99 mld$ nel 2025, 2,28 mld$ nel 2030;
  - Mordor: 1,03 mld$ nel 2024, 2 mld$ nel 2030;
  - Research and Markets: 1,34 mld$ nel 2025.

  ScrapeOps nota che "la mancanza di consenso dice molto". Le metodologie sono proprietarie e a pagamento, quindi questi numeri vanno usati solo come ordine di grandezza. **[stima]** I ricavi dichiarati dalla sola Bright Data, oltre 300 M$, rendono quasi certamente sottostimate le cifre intorno a 1 mld$, oppure queste usano un perimetro diverso (software contro servizi, proxy esclusi).

**Dati per l'AI**

- **[fatto]** Neudata ha censito 52 accordi di licenza dati AI fino a maggio 2025:
  - il 77% è per retrieval o RAG in tempo reale, solo il 31% per addestramento;
  - il prezzo dipende da volume, competenza di dominio e **dinamicità**, cioè la frequenza di nuovi dati;
  - le lingue coperte sono solo inglese, francese, tedesco, giapponese e spagnolo: **l'italiano non compare**.

  Fonte: neudata.co/blog/ai-data-licensing-market-analysis (10/6/2025). Cloudflare segnala oltre 50 accordi editori-AI dal 2023. Le stime del mercato "AI training dataset" (3,6-4,8 mld$ nel 2025) sono di istituti con metodologia non verificabile.

**Lavoro**

- **[fatto]** Esistono offerte dedicate "Data Engineer - Web Scraping" (per esempio YipitData, Cyble, 10a Labs) e ZipRecruiter indica una paga media di 59 $/ora per "web scraping engineer" negli USA (maggio 2026). **Non ho trovato** serie storiche affidabili sul numero di offerte (Indeed Hiring Lab, LinkedIn Economic Graph).

**[stima] Lettura.** I ricavi dei fornitori di infrastruttura crescono del 50-65% annuo mentre gli strumenti AI di estrazione si diffondono. Gli strumenti AI aumentano la domanda di dati web (RAG, agenti, training) più di quanto riducano il valore di chi li sa produrre. La crescita più forte sta nel "dato fresco", che è proprio la parte che richiede manutenzione continua.

### E. Dove sta il vantaggio residuo

**1. Fonti frammentate**

**[stima]** Gli unblocker e le API sono ottimizzati sui grandi siti (Amazon, Google, Walmart: lo dicono i target Proxyway). Le lunghe code (centinaia di e-shop, distributori, siti di marchi, cataloghi PDF, portali di settore italiani) restano un problema di ingegneria su misura: ogni sito ha struttura, paginazione, varianti e unità di misura proprie. Nessun Actor preconfezionato copre "i 400 distributori italiani di materiale elettrico".

**2. Freschezza e manutenzione**

- **[fatto]** Phyllo, un vendor con un campione piccolo, stima circa 2,6 cambi di struttura per fonte all'anno, cioè circa 1 rottura a settimana su 20 fonti, contando solo i cambi di struttura. Fonte: getphyllo.com/post/why-scrapers-break.
- **[stima]** Su 300 fonti significherebbero circa 15 rotture a settimana. La capacità di rilevarle (monitoraggio di volumi e campi, controlli di coerenza) e ripararle in fretta, oggi anche con parser rigenerati via LLM e validati, è il cuore del vantaggio e anche ciò che rende il servizio ricorrente.

**3. Pulizia, normalizzazione, entity resolution**

**[stima]** È il collo di bottiglia del dato B2B, per esempio capire che "Bosch GSR 18V-55 2x2Ah" su 40 siti è lo stesso articolo. NEXT-EVAL mostra che anche l'estrazione LLM richiede un pre-processing esperto. Gli LLM aiutano chi sa già impostare la pipeline, non sostituiscono chi la imposta.

**4. Conoscenza legale**

- **[fatto] Ryanair c. PR Aviation (CGUE C-30/14, 15/1/2015).** Se una banca dati non è protetta né da diritto d'autore né da diritto sui generis, il suo creatore può imporre limitazioni contrattuali d'uso (ToS), fatto salvo il diritto nazionale. In UE quindi i ToS contano anche dove manca il diritto sui generis. Fonte: eur-lex CELEX 62014CJ0030.
- **[fatto] Meta v. Bright Data (N.D. Cal., 23/1/2024).** I ToS di Meta non vietano lo scraping di dati pubblici **da sloggati**: Bright Data non era "utente" ma visitatore. Meta ha poi rinunciato alla causa (febbraio 2024). È una decisione di primo grado, non vincolante. Fonti: techcrunch.com (24/1/2024 e 26/2/2024); fbm.com.
- **[fatto] hiQ v. LinkedIn (2022).** Il tribunale ha ritenuto hiQ inadempiente allo User Agreement per scraping automatizzato e profili falsi. Il consent judgment prevede 500.000 $, un'ingiunzione permanente e la distruzione di dati, codice e algoritmi derivati (dicembre 2022). Fonti: newmedialaw.proskauer.com (8/12/2022); natlawreview.com.
- **[fatto] Garante privacy, provvedimento n. 329 del 20/5/2024** (nota informativa sul web scraping per addestramento di IA, GU n. 132 del 7/6/2024). Suggerisce ai gestori aree riservate, clausole anti-scraping nei ToS e monitoraggio del traffico. Fonte: garanteprivacy.it doc. web 10019984.
- **[fatto] Legge 132/2025, art. 25, nuovo art. 70-septies LdA** (in vigore dal 10/10/2025). Estende le eccezioni TDM (70-ter e 70-quater) alle estrazioni tramite sistemi di IA su contenuti legittimamente accessibili, nel rispetto dell'opt-out. Fonti: hoganlovells.com; legalblogs.wolterskluwer.com.
- **[fatto]** Non ho trovato una sentenza italiana del periodo 2024-2026 specifica su scraping e diritto sui generis. Ho trovato solo precedenti più vecchi (Bologna 2017) e il caso Trenitalia, riportato da Portolano Cavallo senza data verificata.

**[stima] Implicazione legale.** Il quadro è navigabile per chi ne ha esperienza: dati non personali, accesso da sloggati, estrazioni non sostanziali o di fonti senza banca dati protetta, rispetto di robots.txt e opt-out, niente elusione di misure tecniche. Un concorrente nuovo, che "chiede all'agente", tende a ignorare tutto questo e si espone. La competenza legale-operativa è parte del vantaggio e anche una barriera per i clienti seri, che chiedono garanzie di provenienza del dato.

---

## Idee concrete

Tutte le idee:

- escludono aste, procedure concorsuali, aziende e bilanci, immobili, gare e bandi, finanziamenti, lead aziendali e clienti finanziari o business information provider;
- hanno per oggetto dati di **prodotto, prezzo, disponibilità e assortimento**, prevalentemente non personali;
- vanno verificate rispetto al contratto di lavoro (art. 2105 c.c.: obbligo di fedeltà e non concorrenza). Il cliente-tipo dell'attuale datore di lavoro non deve mai essere il cliente di queste idee.

### Idea 1 (la più forte): intelligence su assortimento e prezzi "long tail" per produttori e distributori B2B tecnici

- **Cosa è.** Un feed ricorrente, settimanale o giornaliero, con prezzi, disponibilità e assortimento di un set di articoli (codici EAN/MPN) presso 100-500 e-shop e distributori di una filiera, per esempio:
  - materiale elettrico;
  - idraulica e termoidraulica;
  - ferramenta e utensileria;
  - ricambi auto e moto aftermarket;
  - cosmetica professionale.

  Il cuore è il **matching di prodotto** tra cataloghi eterogenei. Si consegna come dashboard e export, con alert su violazioni di prezzo minimo consigliato e rotture di stock.
- **Perché qui il vantaggio è massimo.**
  - **[stima]** I tool di price monitoring generalisti sono pensati per pochi concorrenti e URL inserite a mano. Prisync, per esempio, costa da 99 a 799 $ al mese per 100-5.000 prodotti. Le lunghe code di siti B2B italiani, con listini, login per rivenditori, PDF e varianti, sono scomode per loro e impossibili per un agente browser a costi ragionevoli.
  - Il valore per il cliente cresce con la copertura e la qualità del matching, entrambe opere di scraping e normalizzazione.
- **Pro.**
  - Il bisogno è chiaro (pricing, canale, controllo del prezzo minimo consigliato).
  - Il ricavo è ricorrente.
  - Il dato è non personale.
  - La difendibilità sta nel set di fonti e nelle tabelle di matching accumulate.
  - Delegabile a un piccolo team (1 sviluppatore/ops più 1 commerciale part-time).
  - **[stima]** 20-30 clienti a 300-600 €/mese danno circa 72-216 k€ di ricavo annuo; il margine può superare i 50 k€ nella fascia alta.
- **Contro.**
  - Senza pubblico serve vendita diretta, cioè outbound verso direttori commerciali di produttori. È lento.
  - Esistono incumbent italiani ed europei del price monitoring: da mappare, non verificato qui.
  - Alcuni siti B2B hanno listini dietro login: escluderli per i ToS (lezione hiQ).
  - Rischio sui generis se si estrae una "parte sostanziale" di un catalogo: limitarsi agli articoli del cliente.

### Idea 2: Actor e API di nicchia su marketplace (Apify Store e simili) per fonti difficili non coperte

- **Cosa è.** Pubblicare e mantenere 5-15 scraper "premium" su fonti europee o italiane eterogenee o protette, non finanziarie e non immobiliari: e-commerce di nicchia, marketplace locali, cataloghi produttori, siti di eventi e turismo. Si monetizzano a uso o in abbonamento.
- **Perché qui il vantaggio è massimo.** **[fatto]** Lo Store di Apify ha versato circa 24 M CZK (circa 0,96 M€) agli sviluppatori nel 2024, con una crescita del 60% sul 2023 e una commissione del 20%. **[fatto]** Proxyway segnala che su Apify alcuni scraper restituiscono pochi risultati a costo alto: la qualità e la manutenzione sono il vero differenziale.
- **Pro.**
  - La distribuzione è già presente: risolve il "nessun pubblico", criterio C5.
  - Il primo euro arriva in settimane.
  - È delegabile (un manutentore).
  - Funziona anche come laboratorio per scoprire quali fonti hanno domanda, da cui poi far nascere l'Idea 1 o la 4.
- **Contro.**
  - Il tetto è basso. **[stima]** Circa 0,96 M€ distribuiti su migliaia di Actor implicano una mediana per sviluppatore molto bassa (la distribuzione non è pubblicata, quindi non trovata). Raggiungere da soli 50 k€ di margine è incerto.
  - C'è dipendenza dalla piattaforma e una concorrenza facile da copiare.
  - Il rischio ToS sulle fonti resta a carico dello sviluppatore.

  Va vista come canale e trampolino, non come prodotto finale.

### Idea 3: monitoraggio dei rivenditori non autorizzati e della brand protection per PMI del made in Italy sui marketplace UE

- **Cosa è.** Scansione continua di marketplace (Amazon UE, eBay, ManoMano, Allegro, Cdiscount, Zalando) ed e-shop indipendenti per conto di marchi PMI (moda, food premium, cosmetica, design). Restituisce:
  - venditori che vendono il marchio;
  - prezzi sotto il minimo consigliato;
  - sospetti falsi e contenuti non conformi;
  - un pacchetto di evidenze pronto per le procedure di segnalazione dei marketplace.
- **Perché qui il vantaggio è massimo.** **[fatto]** Questi siti sono tra i più protetti: nel benchmark Proxyway, Shein al 21,9% di successo medio e Allegro su DataDome. **[stima]** Raccogliere con continuità e pochi errori su questi siti è proprio ciò che le API generiche e gli agenti fanno male. Le soluzioni enterprise di brand protection sono pensate per grandi marchi: prezzi non verificati qui, da mappare.
- **Pro.**
  - Il bisogno è chiaro: la perdita di margine e reputazione è tangibile.
  - Il ricavo è ricorrente.
  - Si integra con l'Idea 1, stessa tecnologia di matching.
  - Il dato raccolto è su prodotti e offerte pubbliche.
- **Contro.**
  - I nomi dei venditori possono essere dati personali (ditte individuali): servono una base giuridica GDPR (legittimo interesse del marchio) e la minimizzazione.
  - Scraping di marketplace con ToS restrittivi (Ryanair C-30/14): restare su pagine pubbliche da sloggati e volumi limitati agli articoli del cliente.
  - La vendita a PMI è frammentata.

### Idea 4: feed "freschi" verticali in lingua italiana per app e agenti AI (RAG), venduti come API con SLA

- **Cosa è.** Dataset aggiornati e normalizzati su domini non esclusi, per esempio:
  - schede tecniche e compatibilità di prodotti;
  - orari, eventi e offerte di strutture turistiche;
  - cataloghi di corsi e formazione;
  - listini di servizi pubblici al consumo.

  Si offrono come API e MCP server con garanzia di freschezza e provenienza.
- **Perché qui il vantaggio è massimo.** **[fatto]** Neudata: il 77% degli accordi di licenza dati AI riguarda retrieval in tempo reale, il prezzo cresce con la "dinamicità" dei dati e l'italiano è assente dalle lingue coperte. **[fatto]** Il blocco di default dei crawler AI e degli agenti su Cloudflare rende più difficile per le app AI raccogliere da sé. Chi consegna un feed pulito, lecito e fresco sostituisce un loro problema.
- **Pro.** È coerente con il trend di domanda: Bright Data cresce sui laboratori AI.
- **Contro.**
  - **[stima]** La domanda per l'italiano di nicchia non è dimostrata.
  - Il rischio diritto d'autore e TDM è alto se i contenuti sono testi creativi: limitarsi a dati fattuali e strutturati, rispettare l'opt-out (art. 70-septies) e le licenze.
  - I clienti AI sono pochi e trattano duro sul prezzo.

  È più speculativa delle Idee 1 e 3.

### Idea 5 (opzionale, da verificare): dati di mercato dell'usato auto e moto per concessionari indipendenti

- **Cosa è.** Prezzi medi, tempi di permanenza degli annunci e stock dei concorrenti locali, ricavati da portali più siti di singoli concessionari: un pricing tool per i commercianti di usato.
- **Pro.** Il vantaggio dello scraping è alto: portali protetti più una lunga coda di siti dealer. Il bisogno quotidiano di pricing è concreto e il dato riguarda veicoli, non persone.
- **Contro.**
  - **[stima]** I portali stessi vendono già strumenti ai dealer, quindi l'incumbent controlla la fonte.
  - Il rischio ToS e sui generis sui portali è alto: il portale è il costitutore della banca dati e l'estrazione sistematica è il caso tipico.
  - Gli annunci di privati contengono dati personali.

  Va valutata solo se si riesce a lavorare su fonti a basso rischio, cioè i siti dei concessionari stessi.

**Ordine di priorità consigliato:** 1 > 3 > 2 (come canale di scoperta) > 4 > 5. Le Idee 1 e 3 possono condividere la stessa piattaforma (raccolta, matching, monitoraggio rotture), che è l'asset difendibile.

---

## Lacune e incertezze

Le prime tre voci sono **controevidenze rilevanti**.

1. *Beyond BeautifulSoup* (gennaio 2026) conclude che gli agenti end-to-end hanno reso accessibile lo scraping di siti complessi ai non esperti con "un singolo prompt e meno di 5 modifiche". Il campione però è di 35 siti, in gran parte demo, senza scala né continuità.
2. Firecrawl offre estrazione JSON a circa 0,003-0,004 $ per pagina.
3. Il 61% dei siti non ha protezione anti-bot (DataDome).

Su pagine pubbliche semplici, in sintesi, lo scraping È commodity. Il vantaggio sopravvive solo nei casi con almeno uno di questi tratti: scala, fonti protette, molte fonti eterogenee, continuità, normalizzazione, rischio legale. Lo sostengo come Entusiasta, ma non è dimostrato da uno studio che misuri direttamente il "vantaggio competitivo" degli esperti contro i non esperti a scala.

Le altre lacune:

- **Benchmark datati.** I dati di Online-Mind2Web e HAL riguardano modelli del 2025. A novembre 2026 i modelli più recenti potrebbero aver migliorato sensibilmente successo e costo: il trend del costo per token è in calo. Non ho trovato risultati Online-Mind2Web su modelli 2026.
- **Punteggi ChatGPT agent non verificati.** Non ho verificato i punteggi WebArena e BrowseComp di ChatGPT agent (pagina bloccata, 403).
- **Ricavi dei fornitori.** Quelli di Bright Data, Apify e Zyte sono dichiarati o stimati, non certificati.
- **Stime di mercato.** Divergono e hanno metodologia non verificabile.
- **Domanda di lavoro.** Non ho trovato serie storiche sulle offerte di lavoro di scraping.
- **Giurisprudenza italiana.** Non ho trovato sentenze italiane 2024-2026 specifiche su scraping e sui generis.
- **Rotture degli scraper.** Il tasso di rottura (2,6 cambi l'anno per fonte) viene da un vendor con un campione piccolo.
- **Idee non validate.** Non ho verificato i concorrenti italiani del price monitoring e della brand protection né i loro prezzi, salvo Prisync. Va fatto prima di scegliere.
- **Distribuzione dei guadagni.** La distribuzione degli incassi degli sviluppatori su Apify Store, cioè mediana e tasso di Actor a zero, non è pubblica: non trovata.
- **Accesso alle fonti.** Il proxy dell'ambiente ha bloccato alcune letture (openai.com, datadome.co, businesswire.com: 403). Per quei dati ho usato estratti di ricerca o fonti secondarie, segnalandolo.

---

## Fonti

Tutte accedute il 2026-11-20.

- Xue et al., "An Illusion of Progress? Assessing the Current State of Web Agents": https://arxiv.org/abs/2504.01382 ; https://arxiv.org/html/2504.01382v4
- HAL Princeton, Online Mind2Web leaderboard: https://hal.cs.princeton.edu/online_mind2web
- Bhardwaj, Diwan, Wang, "Beyond BeautifulSoup" (arXiv 2601.06301): https://arxiv.org/pdf/2601.06301
- NEXT-EVAL (arXiv 2505.17125): https://arxiv.org/html/2505.17125v1
- OpenAI, ChatGPT agent system card: https://deploymentsafety.openai.com/chatgpt-agent
- Browser Use pricing: https://docs.browser-use.com/cloud/pricing ; https://runtimewire.com/article/browser-use-cloud-v4-luna-web-agent-cost ; https://www.costbench.com/software/browser-automation/browser-use/hidden-costs/ (solo estratti di ricerca)
- Firecrawl pricing: https://www.firecrawl.dev/pricing ; CrawlBench: https://firecrawl.dev/blog/crawlbench-llm-extraction ; confronto: https://www.firecrawl.dev/alternatives/firecrawl-vs-scrapegraphai (solo estratti di ricerca)
- Bright Data Web Unlocker pricing: https://brightdata.com/pricing/web-unlocker
- Proxyway, Web Scraping API Report 2025: https://proxyway.com/research/web-scraping-api-report-2025
- Cloudflare, Content Independence Day: https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/ ; MIT Technology Review: https://www.technologyreview.com/2025/07/01/1119498/cloudflare-will-now-by-default-block-ai-bots-from-crawling-its-clients-websites/ ; The Register: https://www.theregister.com/2025/07/01/cloudflare_creates_ai_crawler_toll/
- Cloudflare, AI Labyrinth: https://blog.cloudflare.com/ai-labyrinth/
- Cloudflare, Signed agents / Web Bot Auth: https://blog.cloudflare.com/signed-agents/
- Cloudflare, Perplexity stealth crawlers: https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/ (contenuto tramite estratti di ricerca)
- Cloudflare Radar 2025 Year in Review: https://blog.cloudflare.com/radar-2025-year-in-review/
- Cloudflare, "Content Independence Day, one year on": https://blog.cloudflare.com/agentic-internet-bot-report/
- Cloudflare crawl-to-referral: https://blog.cloudflare.com/crawlers-click-ai-bots-training/ (solo estratti di ricerca)
- Imperva 2025 Bad Bot Report: https://cpl.thalesgroup.com/about-us/newsroom/2025-imperva-bad-bot-report-ai-internet-traffic ; https://www.imperva.com/resources/lp/2025-Bad-Bot-Report.pdf (solo estratti di ricerca)
- DataDome 2025 Global Bot Security Report: https://datadome.co/press/datadomes-2025-global-bot-security-report-exposes-the-ai-traffic-crisis/ ; https://www.businesswire.com/news/home/20250930054275/en/ (403 al fetch, dati da estratti di ricerca)
- Bright Data ARR: https://www.calcalistech.com/ctechnews/article/sjeyg2ezwe ; https://brightdata.com/blog/general/data-for-ai-is-fueling-massive-growth-at-bright-data
- Apify, fatturato e pagamenti agli sviluppatori: https://www.lupa.cz/aktuality/scrapuji-vsichni-na-svete-cesky-obchod-s-roboty-pro-stahovani-dat-loni-vyvojarum-vyplatil-24-milionu/
- Apify, State of web scraping 2025: https://blog.apify.com/state-of-web-scraping/
- Stime su Apify e Zyte: https://getlatka.com/companies/apify.com ; https://www.similarweb.com/company/zyte.com (solo estratti di ricerca)
- Stime del mercato web scraping: https://www.thebusinessresearchcompany.com/report/web-scraping-market-report ; https://mordorintelligence.com/industry-reports/web-scraping-market ; https://www.researchandmarkets.com/reports/6227084/web-scraping-market-report ; https://scrapeops.io/web-scraping-playbook/web-scraping-market-report-2025/ (solo estratti di ricerca)
- Neudata, AI data licensing: https://www.neudata.co/blog/ai-data-licensing-market-analysis
- Offerte di lavoro: https://www.ziprecruiter.com/Jobs/Web-Scraping-Engineer ; https://www.themuse.com/jobs/yipitdata/data-engineer-web-scraping (solo estratti di ricerca)
- Phyllo, rotture degli scraper: https://www.getphyllo.com/post/why-scrapers-break (solo estratti di ricerca)
- Prisync pricing: https://prisync.com/pricing/
- CGUE C-30/14 Ryanair c. PR Aviation: https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:62014CJ0030
- Meta v. Bright Data: https://techcrunch.com/2024/01/24/court-rules-in-favor-of-a-web-scraper-bright-data-which-meta-had-used-and-then-sued ; https://techcrunch.com/2024/02/26/meta-drops-lawsuit-against-web-scraping-firm-bright-data-that-sold-millions-of-instagram-records/ ; https://www.fbm.com/post/102kqw7/ (solo estratti di ricerca)
- hiQ v. LinkedIn: https://newmedialaw.proskauer.com/2022/12/08/hiq-and-linkedin-reach-proposed-settlement-in-landmark-scraping-case/ ; https://natlawreview.com/article/linkedin-s-data-scraping-battle-hiq-labs-ends-proposed-judgment (solo estratti di ricerca)
- Garante privacy, nota sul web scraping del 20/5/2024: https://www.garanteprivacy.it/garante/doc.jsp?ID=10019984 (solo estratti di ricerca)
- L. 132/2025, art. 70-septies LdA: https://www.hoganlovells.com/en/publications/copyright-provisions-in-the-new-italian-ailaw-reinforcing-human-authorship-and-text-and-data-mining ; https://legalblogs.wolterskluwer.com/copyright-blog/new-italian-law-on-ai-a-general-framework/ (solo estratti di ricerca)
- Scraping e sui generis in Italia: https://portolano.it/newsletter/portolano-cavallo-inform-digital-ip/screen-scraping-to-what-extent-is-it-lawful ; https://www.cybersecurity360.it/?p=46081 (solo estratti di ricerca)

Ricerche web usate: 23 su 25.
