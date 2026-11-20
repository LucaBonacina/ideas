---
tipo: rapporto
sessione: S1
ipotesi: H02
ruolo: bucatore
data: 2026-11-20
ricerche_web_usate: 22
---
# H02 Dati freschi per AI e agenti — Bucatore di palloncini

## Sintesi

L'ipotesi H02 è **parzialmente bucata, non confutata in pieno**.

- **I pagamenti agentici "nativi" (x402, pay-per-crawl, MCP a pagamento) sono soprattutto hype.** x402 ha circa 15 M$ di volume cumulativo *rettificato* da maggio 2025 (contro >135 M$ lordi). Lo scontrino medio è di circa 0,14 $. Il 90% del volume viene dall'1% dei compratori. Il pay-per-crawl di Cloudflare è ancora in beta privata, non pubblica numeri e a luglio 2026 è stato riorientato verso il "pay per use". Il principale registro MCP (Smithery) non ha mai pagato i creatori. A fine ottobre 2026 ha chiuso il proxy ed è confluito in Arcade. Le stime sui server MCP monetizzati parlano di meno del 5%, senza una fonte primaria. I casi indie verificabili valgono da 0 a qualche centinaio di $/mese.
- **Il costo marginale della ricerca web per agenti è crollato.** Perplexity costa 1 $ ogni 1.000 ricerche "fast" e 1 $ ogni 1.000 URL estratti. Exa costa da 4 $ ogni 1.000 ricerche e 1 $ ogni 1.000 pagine. Brave costa 5 $ ogni 1.000 ricerche. A questi listini si aggiungono crediti gratuiti fino a 15.000 $ per le startup. Un'"API di ricerca per agenti" generica è già una commodity, sussidiata da capitale di rischio: Exa ha raccolto 250 M$ a 2,2 mld$ di valutazione.
- **Le licenze di dati per l'addestramento vanno ai grandi detentori di contenuti:** News Corp, Reddit, NYT, Dotdash, Wiley. Non risulta alcun accordo con piccoli raccoglitori di dati.
- **Il rischio legale per chi fa scraping è salito.** Reddit contro SerpApi/Perplexity/Oxylabs supera la fase di archiviazione. In Bartz contro Anthropic c'è un accordo da 1,5 mld$ sui dati di provenienza illecita. In Europa pesano il diritto *sui generis* e le sentenze GEMA a Monaco.
- **Cosa resta in piedi.** Esiste un **meccanismo di pagamento provato con ricavi documentati**: la vendita via API o marketplace a sviluppatori. Apify paga oltre 0,5-1 M$/mese ai creatori (dato autodichiarato). Sacra stima per Exa circa 100 M$ di ricavi annualizzati. La domanda **non** viene solo da startup senza budget: Exa dichiara clienti come HubSpot, Cursor e Vercel. Quindi 1 criterio di confutazione su 3 risulta verificato in pieno, 1 in parte e 1 no.
- **Cosa muore** è la versione "nuova economia agentica" dell'ipotesi: x402, MCP a pagamento, pay-per-crawl, dataset venduti su marketplace. Sopravvive la versione "vecchia": dati verticali difficili da ottenere, venduti come API o Actor a sviluppatori e aziende, con le stesse regole di un normale business di dati.

## Evidenze contro

### A. Pagamenti agentici: volumi reali contro hype
1. **[fatto]** Il rapporto congiunto Visa e Artemis riporta per x402 **circa 15 M$ di volume rettificato** su 109,6 M di transazioni (dati al 21/04/2026), al netto di wash trading e test. Il volume lordo era di circa 135,7 M$ su circa 178 M di transazioni. Quindi l'**89% del volume in dollari** era wash, test o trasferimento interno. Fonti: Cointelegraph, che riporta il rapporto; Forkast; sintesi della ricerca su KuCoin. Il dettaglio dell'89% viene da un aggregatore secondario ed è da verificare sul rapporto originale.
2. **[fatto]** Lo scontrino medio rettificato è di circa **0,14 $** (Forkast, 20/07/2026). Secondo Visa (Sheffield), l'**1% dei compratori, circa 4.000 wallet, genera circa il 90% del volume rettificato** (The Defiant).
3. **[fatto]** Su una finestra di 30 giorni: Bloomberg/x402.org riportavano **24 M$**; Allium misurava **circa 3 M$** on-chain; il filtro anti-wash di Artemis scendeva a **circa 1,6 M$** (StartupHub.ai, aggiornato il 13/08/2026). Lo stesso articolo osserva che i grandi (Coinbase, Stripe, Cloudflare, Vercel, Google) costruiscono infrastruttura *sulla base della domanda futura attesa, non dei volumi attuali*.
4. **[fatto, fonte secondaria]** Un'istantanea del 15/10/2026 (Saylor Innovations, citata da Cryptopolitan): **solo 246 risorse x402 su 37.292** superavano la soglia di 20 compratori, con circa **78 k$ di ricavi in 30 giorni** stimati con un modello e non revisionati. La pagina di Cryptopolitan mi ha restituito 403: il dato arriva dall'estratto del motore di ricerca. Una cifra simile (197 k$ su 523 servizi, 86% a BlockRun) **non è stata trovata** in alcuna fonte verificabile.
5. **[stima]** Confronto con la soglia. 50 k€/anno di margine corrispondono a circa 4,5 k$/mese. Con il volume rettificato x402 di circa 1,6 M$/mese e il 90% in mano all'1% dei compratori, un nuovo venditore dovrebbe prendersi circa lo 0,3% di *tutto* il mercato, e come margine, non come fatturato. Non è impossibile, ma il canale x402 da solo oggi è troppo piccolo e concentrato per contarci.
6. **[fatto]** **Pay-per-crawl di Cloudflare.** L'annuncio è del luglio 2025. Nei changelog del 2026 il prodotto risulta ancora in **beta privata** (changelog del 16/06/2026). Nel post sul blog del 01/07/2026 Cloudflare non pubblica alcun dato di adozione o di volume. Sposta il discorso verso "usage-based pricing" e un nuovo Monetization Gateway basato su x402. Lo stesso post scrive che i crawler AI richiedono contenuti "da cento a decine di migliaia di volte per ogni visitatore che rimandano". **[stima]** La mancanza di numeri dopo un anno e il cambio di prodotto sono segnali deboli di trazione bassa. Blog di terze parti (somethinginc.com) leggono il passaggio come un fallimento del modello per-crawl: è un'opinione, non un dato.

### B. Server MCP a pagamento e marketplace
7. **[fatto]** **Smithery**, uno dei principali registri MCP, mostra in homepage "MCP servers, now part of Arcade" e "Smithery's MCP Proxy and managed identity shut down on October 31" (lettura diretta di smithery.ai, 20/11/2026). Secondo una recensione indipendente citata da SEOSiri (13/09/2026), Smithery non ha mai offerto ricavi ai creatori.
8. **[fatto]** Il confronto di mcp-marketplace.io (03/03/2026), che è un fornitore e quindi parte in causa: su 8 piattaforme MCP **5 sono solo gratuite** (Anthropic Connectors, mcp.so, Smithery, PulseMCP, Glama). La pagina **non riporta alcun dato di ricavo** né per piattaforme né per creatori.
9. **[stima ripetuta senza fonte primaria]** La cifra "meno del 5% dei server MCP è monetizzato" circola su più blog (ChatForest, SEOSiri, DEV), ma **nessuno la riconduce a un dataset**. Va trattata come indicativa.
10. **[fatto, autodichiarato]** I casi indie verificabili sono minuscoli:
    - un'azienda dichiara un primo incasso di **0,21 $**, su un clic di prova (DEV, 08/03/2026);
    - un autore con 61 pacchetti e 26 server MCP riporta **zero ricavi** e 11 download nella prima settimana (DEV, giugno 2026);
    - un altro dichiara **345 $ di ricavi mensili ricorrenti** dopo 3 settimane, sempre autodichiarati.

    Il caso "21st.dev a 10 k$/mese" **non ha fonte primaria** (non trovato).
11. **[fatto]** **ChatGPT, il canale di distribuzione più grande per le app e i plugin degli agenti, vieta di vendere beni digitali.** Le linee guida di OpenAI, §5.1, dicono: "Selling digital products or services—including subscriptions, digital content, tokens, or credits—is not allowed"; "plugins may conduct commerce only for physical goods" (lettura diretta, 20/11/2026). Un abbonamento a dati non si vende dentro ChatGPT: serve un checkout esterno, quindi la distribuzione non è integrata.

### C. Costo marginale dei grandi fornitori
12. **[fatto] Listini letti direttamente il 20/11/2026:**

| Fornitore | Prodotto | Prezzo |
|---|---|---|
| Perplexity | Search API | 5 $ / 1k |
| Perplexity | web_search fast (Agent API) | 1 $ / 1k |
| Perplexity | Context API (URL → contenuto) | 1 $ / 1k URL |
| Exa | Search | da 4 $ / 1k |
| Exa | Contents | 1 $ / 1k pagine |
| Exa | Monitors | 2 $ / 1k |
| Brave | Search | 5 $ / 1k |
| Brave | Answers | 4 $ / 1k + token |
| Google Gemini | Grounding con Google Search | 5.000 richieste/mese gratuite, poi 14 $ / 1k |
| OpenAI | web search | 10 $ / 1k chiamate + token |
| Tavily | pay-as-you-go | 0,008 $ / credito |

    Inoltre Exa offre **fino a 15.000 $ di crediti alle startup**, Tavily 100.000 crediti gratuiti alle startup e Brave fino a 20 $/mese gratuiti.

    **[stima]** Ricerca ed estrazione generiche costano 1-5 $ ogni 1.000 chiamate, e un'API di ricerca nuova parte svantaggiata su prezzo e qualità.
13. **[fatto]** Il settore si consolida e gli operatori hanno molto capitale:
    - Exa ha raccolto **250 M$ a 2,2 mld$** di valutazione (maggio 2026, SiliconANGLE/PYMNTS).
    - Tavily è stata acquistata da Nebius per circa **275 M$** (febbraio 2026), secondo Sacra e il comunicato Nebius. Sacra lo calcola come circa 98 volte i ricavi 2025, quindi circa 2,8 M$ di ricavi: è una **[stima]** mia, derivata dal multiplo di Sacra. Anche un leader di categoria aveva ricavi modesti.
14. **[fatto]** Microsoft ha **ritirato le Bing Search API l'11/08/2025** e indirizza i clienti verso "Grounding with Bing Search" dentro Azure AI Agents (Microsoft Learn). Sacra elenca Responses API di OpenAI, Grounding di Gemini e Azure AI Agents come opzioni integrate che "threaten to commoditize external search APIs". Questo lascia anche un varco ai fornitori indipendenti (vedi la sezione "Cosa sopravvive comunque").
15. **[fatto]** I browser agentici leggono le pagine da soli:
    - **Comet** di Perplexity è **gratuito** da ottobre 2025;
    - l'agente "auto browse" di Chrome/Gemini è incluso negli abbonamenti AI Pro/Ultra;
    - secondo CJR, citato da Digit, Atlas e Comet riescono a **superare i paywall**;
    - **ChatGPT Atlas** risulta chiuso come browser autonomo nell'agosto 2026 (tech-insider.org, fonte secondaria).

    **[stima]** Per i dati *pubblici* l'utente finale ha già un agente che li legge a costo marginale zero. Il valore resta solo sui dati che l'agente non riesce a raccogliere bene, per esempio archivi storici, normalizzazione tra molte fonti o dati dietro interazioni complesse.

### D. Licenze per l'addestramento: concentrazione
16. **[fatto]** Il tracker di Press Gazette conta 49 accordi di licenza con editori. **Solo 9 hanno un prezzo dichiarato**; il 78% non dichiara né prezzo né formula. I più grandi:
    - News Corp e OpenAI: oltre 250 M$ in 5 anni;
    - Reddit e Google: circa 60 M$/anno;
    - News Corp e Meta: fino a 50 M$/anno;
    - NYT e Amazon: 20-25 M$/anno;
    - Dotdash e OpenAI: almeno 16 M$/anno.

    Gli editori indipendenti con Google ottengono "a five-figure annual sum". **Nessun piccolo raccoglitore di dati o scraper** compare tra i licenzianti (Massive, 29/10/2026).
17. **[fatto]** Le licenze dati di Reddit valevano **43 M$ nel Q2 2026** (+24%), con OpenAI e Google come principali clienti (Crypto Briefing/The Verge, 17/08/2026, non verificato sul 10-Q). Gli acquirenti sono pochi laboratori e pagano chi possiede contenuti originali o comunità, non chi li raccoglie da altri.
18. **[fatto]** Il mercato secondario dei dati esiste ma vale poco per unità: archivi di startup fallite venduti per "decine di migliaia di dollari", come una codebase da circa 25 k$; SimpleClosure dichiara circa 10 M$ restituiti in oltre 150 operazioni (Renascence, che riprende MIT Technology Review). Sui dataset in vendita su Hugging Face o Datarade **non ho trovato alcun dato sui guadagni dei venditori**. Un thread sul forum di Hugging Face riporta che vendere è più difficile che costruire, perché i compratori vogliono provare il dataset prima di pagare.

### E. Rischi legali
19. **[fatto]** **Reddit contro SerpApi, Perplexity, Oxylabs e AWMProxy (S.D.N.Y.).** A luglio 2026 il giudice Engelmayer ha in gran parte respinto le istanze di archiviazione: le accuse di elusione delle misure anti-scraping (DMCA §1201) proseguono (MediaPost, 03/08/2026; Law360). È una decisione preliminare, non una condanna. **Google contro SerpApi**: la causa DMCA è stata archiviata il 20/07/2026 con facoltà di ripresentarla; Google l'ha ripresentata ed era ancora pendente a settembre 2026 (TNW; PPC Land). Esito successivo non trovato.
20. **[fatto]** **Bartz contro Anthropic.** Accordo da **1,5 mld$** approvato in via definitiva a luglio 2026, per libri ottenuti da biblioteche pirata (circa 3.000 $ per opera). Il giudice Alsup ha ritenuto lecito (*fair use*) l'addestramento su copie acquisite legalmente, non su copie piratate (Jurist; Bloomberg Law). **[stima]** I laboratori sono diventati molto attenti alla **provenienza** dei dati: un dataset fatto con lo scraping e senza diritti chiari è un passivo per il compratore, non un attivo.
21. **[fatto]** **In Europa:**
    - l'art. 53 dell'AI Act obbliga i fornitori di modelli di uso generale (GPAI) ad adottare una politica sul copyright che rispetti gli opt-out dell'art. 4(3) della direttiva DSM e a pubblicare una sintesi dei dati di addestramento;
    - un tribunale danese (ottobre 2025) ha ritenuto valida come riserva un divieto di scraping scritto in una policy HTML;
    - le cause GEMA contro OpenAI e contro Suno a Monaco sono finite con condanne per i fornitori di AI (Reed Smith, Herzog; commenti secondari).

    **Diritto *sui generis*:** con CV-Online Latvia (C-762/19, 03/06/2021) la Corte di giustizia UE ha stabilito che il riutilizzo da parte di un motore di ricerca specializzato è vietato se priva il costitutore della banca dati del ritorno sul suo investimento (Lewis Silkin; Bird & Bird). **[stima]** Vendere ad agenti un aggregato di banche dati altrui è esattamente il caso in cui si danneggia il ritorno dell'investimento.
22. **[stima]** Il rischio legale cresce con la **rivendita**. Lo scraping per uso interno è una cosa; ripubblicare gli stessi dati come API o MCP a pagamento ne è un'altra, ed è proprio lo schema contestato a SerpApi.

## Distribuzione dei risultati

- **x402:** su 37.292 risorse elencate, circa lo 0,7% (246) superava la soglia di 20 compratori (fonte secondaria). L'1% dei compratori genera circa il 90% del volume.
- **MCP:** meno del 5% dei server è monetizzato (stima senza fonte primaria). I casi indie documentati vanno da 0 a circa 345 $ di ricavi mensili ricorrenti (autodichiarati).
- **Apify Store**, l'unico marketplace con pagamenti consistenti:
  - i creatori migliori superano i 10 k$ di ricavi mensili ricorrenti e "molti altri" superano i 1.000 $/mese (dati autodichiarati, help.apify.com);
  - Apify ha pagato oltre 0,5 M$ in un mese e oltre 1 M$ per le entrate di marzo (dichiarazioni del CEO e del Discord, riprese dai risultati di ricerca);
  - concentrazione **[non verificata]**: top 1% = 70% dei pagamenti, top 10% = 92% (post su Stacker News).

  **Mediana non trovata.**
- **Licenze per l'addestramento:** il 78% degli accordi non dichiara il prezzo; quelli noti sono tutti di grandi gruppi.
- **API di ricerca per agenti:**
  - Exa è passata da circa 14 M$ a circa 100 M$ di ricavi annualizzati (stima di Sacra, settembre 2026, non corroborata da altre fonti);
  - Tavily aveva circa 2,8 M$ di ricavi nel 2025 (stima derivata) ed è stata venduta;
  - i due operatori più capitalizzati prendono la parte del vincitore.

## Criteri di confutazione, uno per uno

| Criterio | Esito | Evidenza |
|---|---|---|
| 1. Non esistono meccanismi di pagamento provati con ricavi documentati | **NON verificato** (per il canale "API/marketplace classico"); **in larga parte verificato** per i canali "nativi agentici" | Apify paga i creatori ogni mese (oltre 0,5-1 M$/mese, autodichiarato); Exa ha circa 10-100 M$ di ricavi annualizzati (stime terze); i listini di Perplexity, Brave ed Exa mostrano un mercato pagante. Invece x402 ha circa 15 M$ cumulativi rettificati, per l'89% wash o test in dollari; il pay-per-crawl non ha numeri pubblici dopo un anno; i registri MCP sono quasi tutti gratuiti e Smithery ha chiuso il proxy. Il meccanismo esiste, ma è il vecchio modello API ad abbonamento o a consumo, non quello agentico. |
| 2. I grandi fornitori offrono gli stessi dati a costo marginale | **Verificato per la ricerca e l'estrazione web generiche**; **non verificato** per dati verticali o strutturati | Ricerca a 1-5 $ ogni 1.000 chiamate, estrazione a 1 $ ogni 1.000 URL, grounding integrato nei modelli (Gemini con 5.000 gratuite/mese, OpenAI), Comet gratuito e superamento dei paywall. Non ho trovato evidenze che i grandi offrano dataset verticali storicizzati e normalizzati (serie storiche, cataloghi strutturati, eventi di nicchia). |
| 3. La domanda viene solo da startup senza budget | **NON verificato** | Exa dichiara come clienti HubSpot, Monday, Vercel, ElevenLabs, Cursor e "Fortune 500" (pricing page, autodichiarato). Tavily dichiara IBM, Cohere e Groq. Exa offre un piano zero-retention da 12 k$/anno di impegno. Reddit e News Corp incassano decine di milioni da OpenAI, Google e Meta. Molta della domanda *dei marketplace MCP e x402* però viene davvero da sviluppatori indie e da trading speculativo (Chainalysis: crescita trainata dal "meme coin farming"). |

**Esito complessivo [stima]:** l'ipotesi **non è confutata secondo i suoi criteri formali**: 1 criterio parziale, 1 verificato in parte, 1 non verificato. È però **confutata nella sua forma "nuova"**, cioè MCP a pagamento, x402, pay-per-crawl e marketplace di dataset come fonte di 50 k€/anno di margine.

## Attacco alle idee concrete ovvie

1. **"Server MCP a pagamento su dati X."**
   - **Distribuzione:** i registri principali non pagano o hanno chiuso (Smithery); ChatGPT vieta la vendita di beni digitali nelle app.
   - **Concorrenza:** il server MCP si copia in un giorno; il valore sta nei dati sottostanti, non nel protocollo.
   - **Economia:** i casi indie verificati arrivano a qualche centinaio di $/mese.

   **[stima]** Il formato MCP aggiunge pochissimo valore come canale di vendita. Va usato come *interfaccia* di un'API venduta altrove.
2. **"Dataset per fine-tuning in vendita su Hugging Face o Datarade."**
   - Nessun dato sui guadagni dei venditori trovato.
   - Chi compra vuole provare prima di pagare.
   - I laboratori comprano da grandi detentori di diritti, e dopo Bartz serve una provenienza dimostrabile.
   - Il mercato secondario paga "decine di migliaia di dollari" per archivi *unici* (dati interni di aziende), non per dati pubblici raccolti con lo scraping, che il compratore può raccogliere da solo.

   **[stima]** È l'idea più debole: vendita una tantum, nessuna ricorrenza, rischio legale sulla provenienza.
3. **"API di ricerca o estrazione per agenti."** Il mercato è dominato da Exa (2,2 mld$ di valutazione), Perplexity, Brave e Parallel, più il grounding integrato di Google, OpenAI e Microsoft. I prezzi vanno da 1 a 5 $ ogni 1.000 chiamate e le startup ricevono migliaia di dollari di crediti gratuiti. Perfino Tavily, con decine di migliaia di sviluppatori, aveva circa 2,8 M$ di ricavi ed è stata venduta. **[stima]** Le probabilità di successo per un nuovo entrante senza capitale sono vicine allo zero.
4. **"Monetizzare con x402 o pay-per-crawl i propri dati."** L'intero mercato rettificato vale circa 1,6 M$ al mese, con lo 0,7% delle risorse sopra i 20 compratori. Cloudflare non pubblica numeri e cambia prodotto. Non regge come fonte primaria di ricavo.
5. **"Scraping di fonti di terzi e rivendita come API ad agenti."** È proprio lo schema di SerpApi, citata in giudizio sia da Google sia da Reddit. Nell'UE si aggiunge il *sui generis* (CV-Online). Il rischio legale cresce con il successo: più si vende, più si danneggia l'investimento del costitutore della banca dati.

## Cosa sopravvive comunque

- **Il canale "Actor/API su marketplace di scraping" (Apify Store).** Ha pagamenti mensili reali e una quota creatore dell'80%. I creatori migliori dichiarano oltre 10 k$/mese, quindi oltre la soglia di 50 k€/anno. Va detto che la distribuzione non è verificata e che la mediana non è stata trovata. È il canale più coerente con il profilo del founder (scraping avanzato) e con la delega: un Actor gira da solo e la manutenzione si affida al team.
- **Dati verticali, storicizzati e normalizzati, che gli agenti non ricostruiscono a ogni chiamata.** Per esempio serie storiche, unioni di molte fonti, dati che richiedono interazioni complesse. Possono essere venduti come API a consumo a sviluppatori e aziende. Il bisogno esiste: Exa ha clienti aziendali e Microsoft ha lasciato un varco ritirando le Bing API. Restano da verificare caso per caso la base legale delle fonti, gli ambiti esclusi del profilo (niente dati su aziende, bilanci, gare, immobili) e il fatto che i grandi non offrano lo stesso dato.
- **[stima]** MCP e x402 possono servire come **canali accessori** per un'API che vende già con metodi tradizionali (carta o abbonamento), non come modello di business autonomo.

## Fonti
(tutte accedute il 2026-11-20)

- Visa/Artemis via Cointelegraph — https://cointelegraph.com/news/autonomous-ai-agent-economy-infrastructure-gaps-visa-artemis
- Forkast, "Visa-Artemis: the $0.14 reality of agent commerce" — https://forkast.news/visa-artemis-the-0-14-reality-of-agent-commerce/
- The Defiant, Sheffield 19 M$ adjusted — https://thedefiant.io/converge/infrastructure/visa-s-sheffield-pegs-adjusted-x402-volume-at-19m
- KuCoin news (Visa-Artemis 15 M$) — https://www.kucoin.com/news/flash/visa-and-artemis-report-on-ai-agent-payments-x402-processes-15m-in-on-chain-volume
- StartupHub.ai, "x402 Payments: The Real Numbers" — https://www.startuphub.ai/ai-news/startup-news/2026/x402-payments-the-real-numbers
- Cryptopolitan (403 alla lettura diretta; dato da estratto di ricerca) — https://cryptopolitan.com/base-logs-138-million-x402-payments-as-ai-agent-revenue-draws-scrutiny
- Chainalysis, "Inside x402" (da estratto di ricerca) — https://www.chainalysis.com/blog/x402-agentic-payments-adoption/
- Cloudflare, Monetization Gateway (01/07/2026) — https://blog.cloudflare.com/monetization-gateway
- Cloudflare changelog Pay Per Crawl (16/06/2026) — https://developers.cloudflare.com/changelog/post/2026-06-16-pay-per-crawl-advanced-configuration/
- somethinginc.com (opinione sul pivot) — https://somethinginc.com/blog/cloudflare-pay-per-crawl-does-it-pay/
- Smithery homepage — https://smithery.ai/
- mcp-marketplace.io, State of MCP Monetization 2026 — https://mcp-marketplace.io/blog/state-of-mcp-monetization-2026
- SEOSiri, MCP Monetization Gap — https://www.seosiri.com/2026/09/mcp-monetization-gap-glama-smithery-developer-losses.html
- eSEOspace, Where to sell or list your MCP server — https://eseospace.com/blog/where-to-sell-or-list-your-mcp-server/
- DEV, kirothebot — https://dev.to/kirothebot/the-state-of-mcp-monetization-in-2026-where-builders-actually-get-paid-34k9
- DEV, primo incasso di 0,21 $ — https://dev.to/nicolas_fainstein/how-i-monetized-my-mcp-server-and-what-the-021-first-commission-means-3o1k
- DEV, 61 server e 0 dipendenti — https://dev.to/rumblingb/the-math-on-61-mcp-servers-0-employees-and-19mo-subscriptions-o4i
- DEV, 345 $ di ricavi mensili ricorrenti (da estratto di ricerca) — https://dev.to/whoffagents/mcp-server-monetization-how-i-turned-claude-tools-into-15mo-recurring-revenue-4lka
- OpenAI Apps SDK submission guidelines — https://developers.openai.com/apps-sdk/app-submission-guidelines
- Apify help, Actor monetization — https://help.apify.com/en/articles/8684010-how-does-actor-monetization-work
- Stacker News (concentrazione Apify, non verificata) — https://stacker.news/items/1581524
- Brave Search API — https://brave.com/search/api/
- Exa pricing — https://exa.ai/pricing
- Perplexity pricing — https://docs.perplexity.ai/getting-started/pricing
- Gemini API pricing — https://ai.google.dev/gemini-api/docs/pricing
- OpenAI pricing — https://platform.openai.com/docs/pricing
- Tavily pricing — https://www.tavily.com/pricing
- Sacra, Tavily — https://sacra.com/c/tavily/
- Nebius, comunicato acquisizione Tavily — https://nebius.com/newsroom/nebius-announces-agreement-to-acquire-tavily-to-add-agentic-search-to-its-ai-cloud-platform
- SiliconANGLE, Exa 250 M$ a 2,2 mld$ — https://siliconangle.com/2026/05/20/exa-labs-raises-250m-2-2b-valuation-ai-search-tools
- Sacra, Exa (stima ricavi annualizzati) — https://sacra.com/c/exa/
- Microsoft Learn, ritiro Bing Search API — https://learn.microsoft.com/en-us/lifecycle/announcements/bing-search-api-retirement
- tech-insider.org, browser agentici — https://tech-insider.org/comet-vs-gemini-agent-vs-chatgpt-atlas-2026/
- Digit/CJR, paywall — https://www.digit.in/features/general/chatgpt-atlas-and-perplexity-comet-can-bypass-online-paywalls-study-finds.html
- Massive, "AI Data Licensing Deals: What 49 Deals Disclose" — https://www.joinmassive.com/blog/ai-data-licensing-deals
- Crypto Briefing, Reddit 43 M$ nel Q2 2026 — https://cryptobriefing.com/reddit-data-licensing-revenue-openai-google/
- Renascence (MIT Tech Review), dati di startup fallite — https://www.renascence.io/news/108523/ai-labs-buy-defunct-startups-data-to-train-models
- Forum Hugging Face, vendere dataset — https://discuss.huggingface.co/t/is-selling-datasets-way-harder-than-building-them-or-is-it-just-me/177440
- MediaPost, Reddit contro Perplexity/SerpApi — https://www.mediapost.com/publications/article/416950/reddit-can-proceed-with-scraping-claims-against-pe.html
- Law360 — https://www.law360.com/articles/2508228/reddit-ai-data-scraping-case-mostly-survives-dismissal
- TNW, Google contro SerpApi — https://thenextweb.com/news/google-serpapi-dmca-scraping-lawsuit-dismissed
- PPC Land, SerpApi — https://ppc.land/serpapi-asks-judge-to-end-googles-scraping-case-over-three-unseen-contracts/
- Jurist, accordo Bartz contro Anthropic — https://www.jurist.org/news/2026/07/judge-approves-record-1-5-billion-settlement-involving-anthropic/
- Bloomberg Law, accordo Anthropic — https://news.bloomberglaw.com/ip-law/anthropic-authors-1-5-billion-deal-receives-final-approval
- Herzog, aggiornamento giurisprudenza AI/IP — https://herzoglaw.co.il/en/news-and-insights/recent-developments-in-ip-case-law-on-generative-ai-8th-update/
- Reed Smith, GEMA — https://www.reedsmith.com/our-insights/blogs/viewpoints/102nfis/gema-notches-a-second-transatlantic-ai-copyright-win-in-germany/
- Reed Smith, TDM nell'UE — https://www.reedsmith.com/articles/entertainment-media-guide-to-ai-three-years-on/text-data-mining-in-the-eu/
- Lewis Silkin, CV-Online Latvia — https://www.lewissilkin.com/insights/2021/06/10/database-battle-between-job-ad-websites-eu-court-of-justice-decision-102h08y
- Bird & Bird, CV-Online Latvia — https://www.twobirds.com/en/insights/2021/uk/cv-online-latvia-cjeu-complicates-the-enforcement-of-database-rights
