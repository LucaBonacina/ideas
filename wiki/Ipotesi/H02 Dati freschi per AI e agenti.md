---
tipo: ipotesi
id: H02
titolo: "Dati freschi per AI e agenti"
sessione: S1
stato: "parziale"
fiducia: "media"
probabilita_successo: "5%"
tags: [ipotesi, S1]
---
# H02 — Dati freschi per AI e agenti

Rapporti integrali: [[H02 Entusiasta]] · [[H02 Bucatore]]. Metodo: [[Protocollo di discovery]]. Profilo: [[Profilo e vincoli]].

## Ipotesi (pre-registrata)
Vendere accesso a dati freschi e strutturati ad applicazioni AI e agenti: server MCP a pagamento, API per LLM, dataset per addestramento e valutazione. (dal [[Registro delle ipotesi]])

## Criteri di confutazione (pre-registrati)
1. Non esistono meccanismi di pagamento provati con ricavi documentati.
2. I grandi fornitori (motori di ricerca per AI, browser agentici) offrono gli stessi dati a costo marginale.
3. La domanda è solo da startup senza budget.

## Caso a favore — Entusiasta
Sintesi di [[H02 Entusiasta]] (24 ricerche web).
- **I pagamenti esistono [fatto, in parte autodichiarato]:**
  - Apify: 24 M CZK versati ai creatori di actor nel 2024 (https://www.lupa.cz/aktuality/scrapuji-vsichni-na-svete-cesky-obchod-s-roboty-pro-stahovani-dat-loni-vyvojarum-vyplatil-24-milionu/); oggi dichiara 1,4-2 M$ al mese, con cifre incoerenti tra pagine.
  - Bright Data: oltre 300 M$ di ARR (https://brightdata.com/blog/general/data-for-ai-is-fueling-massive-growth-at-bright-data).
  - Reddit: circa 35-43 M$ a trimestre nella voce che contiene le licenze dati.
  - Wiley: 49 M$ di licenze AI nell'anno fiscale 2026.
  - Video per addestramento: 1-4 $ al minuto (Bloomberg, via The Decoder).
- **Domanda con budget [fatto]:**
  - Bright Data serve 14 dei 20 maggiori laboratori LLM;
  - Exa ha HubSpot e oltre 5.000 aziende;
  - Parallel ha Notion e Harvey; Firecrawl ha Zapier e Shopify;
  - Mercor dichiara 2 mld$ di run rate lordo in dati per laboratori (soprattutto lavoro umano, non scraping).
- **I grandi riducono l'offerta di dati grezzi [fatto].** Microsoft ha spento le Bing Search API l'11/08/2025 (https://learn.microsoft.com/en-us/lifecycle/announcements/bing-search-api-retirement). Le policy di Google Places limitano il caching dei contenuti.
- **Uscite e valutazioni:** Tavily acquisita per circa 275 M$, Exa a 2,2 mld$ di valutazione, Parallel a 2 mld$.
- **Concessioni:**
  - x402 ha un volume davvero "agentico" di circa 5-11 k$ al mese (https://www.trmlabs.com/trm-tech-blog/whos-actually-paying-measuring-ai-agent-payments-onchain);
  - Cloudflare Pay Per Crawl/Use è in beta senza numeri;
  - la maggior parte degli actor ha 0-5 utenti.
- **Idee proposte, in ordine:**
  1. Un'API/MCP "Italia in tempo reale" per agenti di viaggio e mobilità: eventi, scioperi, orari e chiusure, traghetti, ZTL.
  2. Un portafoglio di actor/MCP su fonti europee e italiane.
  3. Un feed di cataloghi e prezzi retail europei.
  4. Dataset con diritti chiariti venduti tramite broker.
  5. Set di valutazione freschi in italiano.

## Caso contro — Bucatore di palloncini
Sintesi di [[H02 Bucatore]] (22 ricerche web).
- **x402 è gonfiato [fatto].** Circa 15 M$ di volume rettificato cumulativo contro circa 135 M$ lordi (Visa/Artemis). Lo scontrino medio è di circa 0,14 $, e l'1% dei compratori genera circa il 90% del volume. Su 30 giorni il volume reale è di circa 1,6 M$ al netto del wash trading.
- **Pay-per-crawl di Cloudflare.** Ancora in beta privata, senza dati, riorientato a luglio 2026 verso un "Monetization Gateway" (https://blog.cloudflare.com/monetization-gateway).
- **Server MCP a pagamento:**
  - Smithery ha chiuso il proxy il 31/10/2026 ed è confluito in Arcade;
  - 5 piattaforme MCP su 8 sono solo gratuite;
  - i casi indie vanno da 0 a 345 $ al mese (autodichiarati);
  - OpenAI vieta di vendere beni digitali dentro le app ChatGPT (https://developers.openai.com/apps-sdk/app-submission-guidelines).
- **Costo marginale della ricerca generica [fatto, listini]:** Perplexity 1-5 $ ogni 1.000 chiamate, Exa da 4 $, Brave 5 $, il grounding di Gemini 14 $ dopo 5.000 chiamate gratuite al mese, OpenAI 10 $. A questo si aggiungono crediti per le startup fino a 15 k$. I browser agentici sono gratuiti (Comet).
- **Licenze per l'addestramento.** Vanno ai grandi detentori di contenuti (News Corp, Reddit, NYT, Dotdash); nessun piccolo raccoglitore compare tra i licenzianti. Il 78% degli accordi non dichiara il prezzo (https://www.joinmassive.com/blog/ai-data-licensing-deals).
- **Rischio legale in aumento:**
  - Reddit contro SerpApi, Perplexity e Oxylabs supera la fase di archiviazione (https://www.mediapost.com/publications/article/416950/reddit-can-proceed-with-scraping-claims-against-pe.html);
  - l'accordo da 1,5 mld$ in Bartz contro Anthropic rende la provenienza dei dati cruciale;
  - in Europa pesano l'art. 53 dell'AI Act, il diritto *sui generis* (CV-Online) e le cause GEMA.
- **Esito secondo il Bucatore.** H02 non è confutata secondo i criteri formali, ma lo è nella forma "economia agentica nuova". Sopravvivono i dati verticali storicizzati venduti come API o actor; MCP e x402 restano solo canali accessori.

## Verdetto — Giudice

### Affermazioni decisive ri-verificate
| # | Affermazione | Chi la sostiene | Esito della verifica | Fonte |
|---|---|---|---|---|
| 1 | Exa ha circa 10 M$ di ricavi annualizzati (Entusiasta) oppure circa 100 M$ (Bucatore) | Divergenza | **Hanno ragione entrambi, in momenti diversi.** Sacra stima circa 1,9 M$ a fine 2024, 10 M$ a settembre 2025, 14 M$ a fine 2025 e **100 M$ a settembre 2026**. La domanda pagante di dati web per AI esiste ed è grande, ma è concentrata su un fornitore con 357 M$ raccolti, cioè sulla ricerca generica dove un piccolo entrante non compete. | https://sacra.com/c/exa/ |
| 2 | I pagamenti agentici nativi (x402) sono un canale di ricavo | Entusiasta (come opzione futura); Bucatore (contro) | **Volumi minuscoli confermati.** Al 21/04/2026 x402 aveva circa 15 M$ di volume rettificato su 109,6 M di transazioni (Forkast, che riporta Visa/Artemis). Su 30 giorni circa 1,6 M$ al netto del wash trading, contro i 24 M$ annunciati (StartupHub.ai). Per il criterio 1 x402 non conta come meccanismo provato. | https://forkast.news/visa-artemis-the-0-14-reality-of-agent-commerce/ ; https://www.startuphub.ai/ai-news/startup-news/2026/x402-payments-the-real-numbers |
| 3 | I marketplace MCP a pagamento sono un canale di distribuzione | Entusiasta (MCPize, registri); Bucatore (contro) | **Confermato il caso contro.** La homepage di Smithery dice "MCP servers, now part of Arcade" e "Smithery's MCP Proxy and managed identity shut down on October 31". Non ho trovato evidenze di ricavi rilevanti per i creatori MCP fuori da Apify. | https://smithery.ai/ |

### Applicazione dei criteri di confutazione
1. **Nessun meccanismo di pagamento provato con ricavi documentati: PARZIALE.**
   - Non verificato per API e marketplace classici: Apify paga ogni mese; Exa ha circa 100 M$ di ARR stimati.
   - Verificato per i meccanismi che rendono H02 diversa da H01: x402 ha circa 1,6 M$ reali al mese in tutto il mondo; il pay-per-crawl non ha numeri; i registri MCP non pagano o chiudono.
2. **I grandi offrono gli stessi dati a costo marginale: VERIFICATO per ricerca ed estrazione web generiche** (1-5 $ ogni 1.000 chiamate, grounding integrato nei modelli, browser agentici gratuiti). **Non verificato** per dataset verticali storicizzati e normalizzati.
3. **Domanda solo da startup senza budget: NON VERIFICATO.** Clienti enterprise e laboratori pagano (Exa, Bright Data, Reddit). Quel budget va però a pochi fornitori molto capitalizzati o a detentori di contenuti originali, non a piccoli raccoglitori.

### Verdetto
- **Stato:** parziale. È confutata la parte che rende H02 un'ipotesi distinta: MCP a pagamento, pagamenti agentici, licenze per l'addestramento a piccoli raccoglitori, API di ricerca generica. Ciò che sopravvive, cioè dati verticali freschi venduti come API o actor, si sovrappone quasi del tutto a [[H01 Dataset e API da scraping venduti a terzi]]. L'"AI" cambia il cliente finale, non il modello di ricavo.
- **Fiducia:** media. Le cifre su x402 e Smithery le ho verificate; la domanda per dati verticali italiani da parte di app AI non è stata trovata né da me né dall'Entusiasta.
- **Probabilità di successo: 5%.** Il budget AI esiste ma va a pochi; un piccolo fornitore di dati verticali si ritrova nel modello H01, con in più una domanda specifica non dimostrata.

## Idee concrete che sopravvivono
- [[I-H02-1 Feed Italia in tempo reale per assistenti di viaggio]]: punteggio v2 **49**. È la più debole della sessione; si tiene solo perché è l'unica con dati che i grandi non coprono, e va validata prima con lettere d'intenti.

Scartate:
- **Server MCP a pagamento come business autonomo:** registri chiusi o gratuiti, casi indie a 0-345 $ al mese.
- **API di ricerca o estrazione per agenti:** Exa, Perplexity, Brave e il grounding integrato a 1-5 $ ogni 1.000 chiamate.
- **Dataset per addestramento venduti su Hugging Face o Datarade:** nessun dato sui ricavi dei venditori, provenienza legale critica dopo Bartz.
- **Dataset con diritti chiariti tramite broker:** richiede acquisizione di diritti, cioè lavoro commerciale non delegabile all'inizio, e la domanda per l'italiano non è stata trovata.
- **Set di valutazione in italiano:** nessun prezzo né compratore trovato.
- **Portafoglio actor/MCP:** confluito in [[I-H01-1 Portafoglio di actor su target difficili non personali]].
- **Feed retail europeo:** confluito in [[I-H03-1 Monitoraggio prezzi gestito per cataloghi senza EAN]].

## Fonti
Verifiche del Giudice, accesso 2026-11-20:
- https://sacra.com/c/exa/
- https://forkast.news/visa-artemis-the-0-14-reality-of-agent-commerce/
- https://www.startuphub.ai/ai-news/startup-news/2026/x402-payments-the-real-numbers
- https://smithery.ai/

Le altre fonti sono nei rapporti integrali [[H02 Entusiasta]] e [[H02 Bucatore]].
