---
tipo: rapporto
sessione: S1
ipotesi: H02
ruolo: entusiasta
data: 2026-11-20
ricerche_web_usate: 24
tags: [rapporto, S1, H02]
---
# H02 Dati freschi per AI e agenti — Entusiasta

Ipotesi: [[Registro delle ipotesi#H02 Dati freschi per AI e agenti]]. Profilo: [[Profilo e vincoli]]. Metodo: [[Protocollo di discovery]].

## Sintesi

Il caso più forte per H02 non è la vendita di "ricerca web per AI" generica (mercato già preso da Exa, Parallel, Tavily, Firecrawl, Bright Data con centinaia di milioni raccolti), ma la vendita di **dati verticali, freschi e strutturati** attraverso **canali di pagamento già funzionanti**: marketplace (Apify Store con pay-per-event e MCP, MCPize), API a consumo e licenze di dataset.

1. **I pagamenti esistono e sono documentati.** Apify ha pagato agli sviluppatori dello Store 24 milioni di corone (circa 1 M€) nel 2024 secondo dati ufficiali riportati dalla stampa ceca, e il suo sito dichiara oggi 1,4-2 M$ di pagamenti al mese. Bright Data dichiara oltre 300 M$ di ricavi annualizzati, trainati dai dati per AI. Reddit incassa circa 35-43 M$ a trimestre nella voce che contiene le licenze dati. Wiley ha 49 M$ di ricavi da licenze AI nell'anno fiscale 2026.
2. **Chi compra ha budget.** Tra i clienti ci sono 14 dei 20 maggiori laboratori LLM (secondo Bright Data), HubSpot e Cursor (Exa), Notion, Harvey e Opendoor (Parallel), Zapier, Shopify e Replit (Firecrawl), Google e OpenAI (Reddit). Mercor dichiara un run rate lordo di 2 miliardi di dollari dalla vendita di dati a laboratori.
3. **I grandi riducono l'offerta di dati grezzi invece di aumentarla.** Microsoft ha spento le Bing Search API l'11/08/2025. Google limita il caching dei contenuti Places. Questo lascia spazio ai fornitori indipendenti, come dimostrano gli exit e le valutazioni: Tavily acquisita per circa 275 M$, Exa valutata 2,2 miliardi, Parallel 2 miliardi.
4. **Il punto debole va ammesso.** I micro-pagamenti nativi per agenti (x402) hanno ancora volumi agentici minuscoli, circa 5-11 k$ al mese secondo TRM Labs. La distribuzione sui marketplace segue una legge di potenza: la maggior parte degli Actor ha 0-5 utenti. Il successo va quindi costruito come portafoglio verticale con domanda verificata, non come singolo server MCP.

Le mie idee migliori per questo profilo, sviluppate più sotto:
- (1) un portafoglio di Actor/MCP a consumo su fonti europee e italiane poco coperte;
- (2) un'API/MCP "Italia in tempo reale" per agenti di viaggio e mobilità;
- (3) un feed di cataloghi e prezzi retail EU per agenti di acquisto e app di confronto;
- (4) dataset con diritti chiariti e metadati ricchi da vendere tramite broker di dati per addestramento;
- (5) set di valutazione "freschi" per RAG e agenti in italiano.

**Valutazione complessiva dell'Entusiasta [stima]:** il traguardo di 50 k€/anno di margine in 24 mesi è plausibile combinando un portafoglio marketplace (idea 1) con 3-10 clienti B2B in abbonamento (idee 2 o 3). Il founder potrebbe restare sotto le 5 h/settimana se la manutenzione degli scraper è affidata a una persona di fiducia.

## Evidenze a favore

1. **[fatto]** Apify Store paga gli sviluppatori terzi. Secondo dati ufficiali riportati da Lupa.cz (26/02/2025), nel 2024 Apify ha versato ai creatori di Actor **24 milioni di corone ceche**, contro 15 milioni nel 2023. Il fatturato è cresciuto del 65% a 298 milioni di corone. La commissione della piattaforma è del 20%. — Lupa.cz.
2. **[fatto, autodichiarato]** La navigazione del sito Apify dichiara "**$2M paid out last month. Many developers earn over $3k**" (pagina MCP developers). Un'altra pagina dice "$1.4M paid out last month" (cache diverse). La pagina MCP indica anche "$500k+ payouts to developers every month", "36K+ monthly developers" e "130k+ signups every month". I numeri sono **incoerenti tra pagine** e vanno trattati come promozionali. — apify.com/mcp/developers; blog.apify.com/programmer-passive-income-web-scraping.
3. **[fatto]** Il modello economico di Apify è documentato:
   - pay-per-result o pay-per-event: Apify trattiene i costi di piattaforma più il 20%;
   - abbonamento mensile "tipicamente 20-50 $";
   - esempio a risultato: "5 $ per 1.000";
   - il 75% dei 20 Actor più usati applica pay-per-event a 0,002-0,005 $ per risultato (analisi di terzi su dati API dello Store).

   Il distributore integrato propaga i server MCP verso Make, n8n, Zapier e Gumloop. — apify.com/mcp/developers; dev.to (agenthustler).
4. **[fatto, autodichiarato]** Secondo il blog Apify, il creatore indipendente di maggior successo supera i 4.000 $ di ricavi ricorrenti mensili e "diversi altri" superano i 1.000 $. Gli Actor gestiti da Apify stessa fanno "centinaia di migliaia di dollari" di ricavi ricorrenti al mese. La manutenzione stimata da Apify è di "5-10 ore ogni 3 mesi" per scraper. Un testimonial (Guillaume Lancrenon) dichiara oltre 2.000 $ al mese. — blog.apify.com; apify.com/mcp/developers.
5. **[fatto, autodichiarato]** Bright Data è "highly profitable", con ricavi annualizzati oltre **300 M$**, crescita superiore al 50% annuo e obiettivo di 400 M$ a metà 2026. Serve 14 dei 20 maggiori laboratori LLM e oltre 100 milioni di interazioni di agenti al giorno. I prezzi di listino sono pubblici:
   - dataset da 250 $ per 100k record;
   - Retail Insights da 2.000 $/mese;
   - Managed Data Acquisition da 1.500 $/mese.

   — brightdata.com (blog del CEO).
6. **[fatto]** Exa ha raccolto 250 M$ a una valutazione di 2,2 miliardi (maggio 2026). Dichiara oltre 400.000 sviluppatori; tra i clienti citati c'è HubSpot. Ricavi **[stima Sacra]** di circa 10 M$ annualizzati a settembre 2025, 11 volte l'anno precedente. — SiliconANGLE 20/05/2026; Sacra.
7. **[fatto]** Firecrawl: Series A da 14,5 M$ (agosto 2025), oltre 350.000 sviluppatori, crescita di 15 volte in un anno; tra i clienti Zapier, Shopify e Replit. Si riporta che fosse profittevole **[non verificato direttamente]**. — firecrawl.dev blog.
8. **[fatto]** Tavily è stata acquisita da Nebius (febbraio 2026) per circa **275 M$** secondo Bloomberg; il prezzo non è confermato dalle società. Il multiplo è di circa 98 volte i ricavi 2025 **[stima Sacra]**. — PYMNTS; Globes; Sacra.
9. **[fatto]** Parallel Web Systems: Series B da 100 M$ a una valutazione di 2 miliardi (aprile 2026), oltre 100.000 sviluppatori, tra i clienti Notion, Clay, Harvey e Opendoor. Prezzi: Search 5 $ per 1.000 richieste, Task 5-25 $ per 1.000. — SiliconANGLE 28/04/2026.
10. **[fatto]** Reddit: la voce "other revenue", che contiene le licenze dati, vale circa 35 M$ nel 2° trimestre 2025 (+24%) e circa 43 M$ nel 2° trimestre 2026. Gli accordi con Google (circa 60 M$/anno) e con OpenAI (circa 70 M$/anno) sono **[stime di stampa]**. — Dataconomy; Motley Fool.
11. **[fatto]** Wiley ha registrato 49 M$ di ricavi da licenze AI nell'anno fiscale 2026 e oltre 110 M$ complessivi. Il tracker Outsell conta più di 90 accordi pubblici di licenza AI (giugno 2026). Google avrebbe firmato licenze con oltre 400 testate **[da fonte secondaria]**. — CASRAI; Outsell; Digiday.
12. **[fatto]** Il prezzo dei dati video per addestramento è di **1-4 $ al minuto** (Bloomberg, gennaio 2025). Troveo dichiara di aver pagato oltre 20 M$ ai titolari dei diritti **[autodichiarato]**. Veritone indica 1-1.000 $ per ora di video a seconda dei metadati **[autodichiarato]**. Conta che **i metadati e la pulizia aumentano il prezzo**, cioè proprio la competenza del founder. — The Decoder; Bloomberg via PetaPixel; IT Brief.
13. **[fatto]** I laboratori spendono molto in dati. Mercor ha un run rate lordo di circa 2 miliardi di dollari a giugno 2026 (The Information via RuntimeWire, Sacra). Surge AI supera il miliardo di ricavi nel 2024 **[stima riportata da SiliconANGLE]**. Questi soldi vanno soprattutto a dati umani esperti, non a scraping, ma mostrano che il budget c'è.
14. **[fatto]** Microsoft ha ritirato le Bing Search API l'11/08/2025 e ha indirizzato verso "Grounding with Bing" dentro Azure Agents, che non dà accesso ai contenuti grezzi. — Microsoft Learn; The Register; Neowin.
15. **[fatto]** Le policy di Google Places vietano di pre-caricare, memorizzare o tenere in cache i contenuti Places oltre le eccezioni (il place_id è esente). Il "Grounding with Google Maps" è legato all'ecosistema Google/Vertex. **[stima]** Chi costruisce agenti su modelli non-Google ha quindi un incentivo a cercare fonti alternative di dati locali e di punti di interesse. Non ho trovato una clausola che vieti esplicitamente l'uso con LLM terzi. — developers.google.com; cloud.google.com.
16. **[fatto]** Le infrastrutture di pagamento per agenti stanno arrivando dagli incumbent dei pagamenti. Stripe ha lanciato "machine payments" in anteprima (10/02/2026), con x402 su Base e MPP; CoinGecko ha aperto endpoint x402 a pagamento lo stesso giorno. Cloudflare ha lanciato Pay Per Crawl (2025) e ora Pay Per Use in beta, con partner buyer come You.com e Ceramic.ai. — The Block; docs.stripe.com; blog.cloudflare.com.
17. **[fatto]** SerpApi è bootstrapped e "highly profitable" secondo la pagina carriere dell'azienda. Ricavi **[stime discordanti]** tra 3 e 8,4 M$; circa il 40% viene da startup AI e circa il 40% da aziende SEO e marketing (Sacra). È un modello piccolo e profittevole per rivendere dati web ad applicazioni AI, ma ha un contenzioso con Google (vedi rischi).
18. **[fatto]** I dataset si vendono anche a record. Su Datarade si va da 7 $ per 10k record (prezzi e-commerce) a 0,10 $ per riga (recensioni per addestramento). Bright Data vende 0,0025 $ per record.

## Casi di successo con numeri

| Caso | Numeri | Tipo dato | Note |
|---|---|---|---|
| Bright Data | >300 M$ ARR, >50% di crescita, profittevole | autodichiarato | Infrastruttura e dataset, 14/20 laboratori LLM |
| Apify (piattaforma) | Fatturato 298 M CZK nel 2024 (+65%); 24 M CZK pagati ai creatori | ufficiale via stampa | ARR 25-40 M$ [stime non verificate] |
| Creatori Apify indipendenti | top >4 k$/mese; "diversi" >1 k$/mese; testimonial >2 k$/mese | autodichiarato | Il caso più vicino al profilo (scraping a prodotto, delegabile) |
| Exa | ~10 M$ ARR (set. 2025); valutazione 2,2 miliardi | stima Sacra + fatto (round) | Ricerca per AI |
| Tavily | exit ~275 M$ (fino a 400 M$ con earn-out) | stampa (Bloomberg, Calcalist) | Ricerca per agenti |
| Firecrawl | 350k sviluppatori, 15 volte in un anno; "otto cifre di ARR" [non verificato] | autodichiarato | Scraping per AI, open source |
| Reddit | ~35-43 M$ a trimestre nella voce licenze | da bilanci via stampa | Licenza dati a laboratori |
| Wiley | 49 M$ di licenze AI nell'anno fiscale 2026 | da comunicazioni dell'azienda via CASRAI | Editore |
| Troveo | >20 M$ pagati ai titolari di video | autodichiarato | Intermediario di dati di addestramento |
| SerpApi | 3-8,4 M$ di ricavi, bootstrapped, profittevole | stime terze + pagina aziendale | ~40% dei clienti sono AI |

**Distribuzione dei risultati, da riportare onestamente:**
- Sullo Store Apify "la maggior parte degli Actor pubblicati ha 0-5 utenti", mentre i primi 20 ne hanno 45.000-324.000 (dev.to, analisi di terzi sui dati API).
- Un costruttore di 98 Actor riporta che "most weeks, most Actors get zero" (blog Apify).
- Tra i server MCP, meno dello 0,5% guadagnerebbe oltre 1.000 $/mese (dev.to, **non verificato**).
- Su x402 la quota agentica del commercio filtrato è tra lo 0,6% e il 7,5%, cioè circa 5-11 k$/mese di volume agentico (TRM Labs).

La lettura dell'Entusiasta è che **il denaro si concentra su chi ha dati verticali con domanda, affidabilità e posizionamento**. Il profilo del founder (scraping avanzato, pulizia dati, team delegabile) è proprio quello che serve per stare nella coda alta della distribuzione. Resta comunque una distribuzione a legge di potenza.

## Risposta preventiva ai criteri di confutazione

### Criterio 1 — "Non esistono meccanismi di pagamento provati con ricavi documentati"
**Non soddisfatto: i meccanismi esistono e hanno ricavi documentati.**
- Marketplace con pagamento ai creatori: 24 M CZK nel 2024 su Apify, dato ufficiale riportato dalla stampa.
- API a consumo: Bright Data >300 M$ autodichiarati, Exa ~10 M$ stimati, Parallel e Firecrawl con clienti enterprise.
- Licenze di dataset: Reddit e Wiley con ricavi nei bilanci, Troveo con pagamenti dichiarati.

**Concessione:** il pagamento *nativo agente-agente* (x402) **non** è ancora un canale di ricavo rilevante, con volume agentico di circa 5-11 k$/mese (TRM Labs). Va trattato come opzione futura, non come base del business. Anche Cloudflare Pay Per Crawl/Use è in beta e non ha numeri pubblici.

### Criterio 2 — "I grandi fornitori offrono gli stessi dati a costo marginale"
**Vero per la ricerca web generica, falso per i dati verticali strutturati.**
- Microsoft ha **tolto** le API Bing.
- Google limita il caching di Places e lega il grounding Maps a Vertex.
- I motori AI (Exa, Parallel, Tavily) vendono ricerca e estrazione **generica a pagamento** (5 $ per 1.000 chiamate), non dataset verticali curati, normalizzati e storicizzati come orari, cataloghi, disponibilità o regole locali.
- Exa stessa afferma che gli altri fornitori "wrap other search engines".

**[stima]** Il rischio vero è che un agente con browser rifaccia lo scraping al volo. Però costa in latenza, token e blocchi anti-bot. Il valore di un feed già pulito, storicizzato e con SLA rimane per chi deve fare migliaia di chiamate o deve avere dati storici.

### Criterio 3 — "La domanda è solo da startup senza budget"
**Non soddisfatto.**
- Bright Data: 14/20 laboratori LLM e 7/10 aziende AI-first.
- Exa: HubSpot e oltre 5.000 aziende (PYMNTS).
- Parallel: Notion, Harvey, Opendoor.
- Firecrawl: Zapier, Shopify, Replit.
- Licenze Reddit: Google e OpenAI.
- Mercor e Surge: spesa dei laboratori nell'ordine dei miliardi.
- SerpApi: circa il 40% dei ricavi da agenzie SEO e marketing, non da startup AI.

**Concessione:** nei marketplace (Apify, MCPize) gli acquirenti sono spesso piccoli sviluppatori. Per arrivare a 50 k€ di margine conviene affiancare clienti B2B in abbonamento (idee 2-4).

## Idee concrete

> Tutte fuori dagli ambiti esclusi: niente finanza, aziende o bilanci, immobili, aste, gare o bandi, lead aziendali. Da verificare sempre la compatibilità con l'art. 2105 c.c. e con i termini d'uso delle fonti.

### Idea 1 — Portafoglio di Actor/MCP a consumo su fonti EU/IT poco coperte (Apify Store + MCPize)
- **Cosa:** 15-30 Actor e server MCP pay-per-event su fonti europee e italiane dove lo Store è scoperto. Esempi:
  - siti di e-commerce e marketplace EU non anglofoni;
  - piattaforme di eventi e biglietteria locali;
  - siti di annunci auto e usato;
  - portali di recensioni locali;
  - orari di trasporti regionali.

  Si sceglie in base alla domanda (strumenti di analytics MCP di Apify, ricerche nello Store) prima di costruire.
- **Chi paga:** sviluppatori, agenzie e team di automazione che usano Apify, Make, n8n, Zapier o client MCP.
- **Prezzi di riferimento [fatto]:** 0,002-0,005 $ per risultato (top 20 Actor); abbonamenti 20-50 $/mese; Apify trattiene il 20% più i costi di calcolo; MCPize lascia l'85% al creatore [da blog].
- **Distribuzione:** integrata nello Store, nella SEO interna, nei registri MCP e nei partner Apify. Non serve un pubblico proprio (criterio C5 forte).
- **Vantaggio:** saper superare i sistemi anti-bot e mantenere l'affidabilità; il ranking dello Store premia affidabilità e recensioni.
- **Delegabilità:** alta. Apify stima 5-10 h ogni 3 mesi per scraper [autodichiarato]; un tecnico di fiducia gestisce la manutenzione.
- **Ricavo [stima]:** un buon creatore fa 1-4 k$/mese. Con 20 Actor, di cui 3-5 vincenti, servono circa 4,2 k€/mese di margine netto per arrivare a 50 k€/anno: è nella coda alta. Da solo è ambizioso, quindi va usato anche come **canale di validazione** per le idee 2-3.

### Idea 2 — "Italia in tempo reale" API/MCP per agenti di viaggio e mobilità
- **Cosa:** feed strutturato e storicizzato, con SLA, di:
  - eventi (concerti, sagre, mostre);
  - orari e chiusure di musei e siti;
  - scioperi dei trasporti;
  - orari di traghetti e trasporti regionali;
  - ZTL e regole locali;
  - condizioni neve e mare;
  - in Italia e poi in Europa meridionale.
- **Chi paga:** OTA e app di viaggio, tour operator, assistenti di viaggio AI, piattaforme di agenti che fanno grounding su modelli non-Google.
- **Prezzi di riferimento:**
  - [fatto] chiamate generiche Parallel a 5 $ per 1.000; Bright Data Managed Data da 1.500 $/mese e Retail Insights da 2.000 $/mese;
  - [stima] abbonamenti B2B a 300-2.000 €/mese più un piano a consumo via MCP o x402.
- **Distribuzione:** marketplace (Apify, MCPize, RapidAPI), registri MCP, outbound a una lista finita di OTA e app di viaggio (elencabili). [stima] Bastano 5-10 clienti B2B.
- **Vantaggio:** i dati sono frammentati su centinaia di siti locali in italiano; Google Places limita il caching (fatto); la ricerca generica non dà dati normalizzati né storici.
- **Delegabilità:** media-alta. Un operatore o sviluppatore di fiducia gestisce le fonti; il founder dà architettura e qualità.
- **Rischi:** termini d'uso delle fonti e diritto *sui generis* sulle banche dati; preferire fonti aperte o fatti non protetti.

### Idea 3 — Feed di cataloghi e prezzi retail EU per agenti di acquisto e app di confronto
- **Cosa:** dati normalizzati e freschi su prodotti, disponibilità e prezzi da retailer EU (prima Italia: GDO, elettronica, parafarmacia, bricolage), con storico. Si vende come dataset (snapshot) e come API/MCP.
- **Chi paga:** startup e aziende di agentic commerce, app di confronto prezzi, brand che monitorano la propria presenza, team AI che addestrano o valutano modelli di raccomandazione. Non finanza.
- **Prezzi di riferimento [fatto]:** Bright Data dataset e-commerce da 250 $ per 100k record e Retail Insights da 2.000 $/mese; su Datarade da 7 $ per 10k record fino a 0,10 $ per riga per dati di addestramento.
- **Distribuzione:** Datarade, AWS Data Exchange e Snowflake Marketplace (canali esistenti, ma ricavi per piccoli fornitori **non trovati**), Apify Store, outbound.
- **Vantaggio:** scraping difficile e su larga scala, qualità nell'abbinamento dei prodotti tra retailer (product matching).
- **Delegabilità:** alta, perché è un servizio "a prodotto" con pipeline.
- **Nota:** confina con H03; va differenziato per il cliente AI/agentico e il formato pronto per LLM.

### Idea 4 — Dataset con diritti chiariti e metadati ricchi per l'addestramento (tramite broker)
- **Cosa:** non vendere contenuti altrui raccolti con scraping. Lo scraping serve a **trovare e catalogare titolari di diritti** (creatori video, fotografi, archivi locali, piccoli editori italiani) e a **arricchire i metadati** (trascrizioni, tag, segmentazione). Si costruiscono pacchetti licenziati da vendere tramite broker come Troveo, Protege, Defined.ai o Datarade, o direttamente ai laboratori.
- **Chi paga:** laboratori di modelli video e multimodali, laboratori europei che cercano dati non inglesi.
- **Prezzi di riferimento [fatto]:** video 1-4 $/minuto (Bloomberg); 1-1.000 $/ora a seconda dei metadati (Veritone, autodichiarato); Troveo dichiara oltre 20 M$ pagati.
- **Distribuzione:** broker esistenti (canale integrato); vendita diretta difficile senza rete.
- **Vantaggio:** pipeline di raccolta, pulizia e metadati, che è ciò che fa salire il prezzo.
- **Delegabilità:** media; la parte di acquisizione dei diritti richiede una persona commerciale.
- **Rischi:** legali alti se si scivola verso contenuti non licenziati; domanda per l'italiano **non trovata** con evidenze dirette (ricerca sul corpus Minerva senza risultati sui compratori).

### Idea 5 — Set di valutazione "freschi" per RAG e agenti in italiano, aggiornati ogni mese
- **Cosa:** benchmark rigenerati ogni mese da eventi e dati freschi (domande la cui risposta è cambiata nell'ultimo mese, in italiano e altre lingue UE), con risposte verificate, venduti in abbonamento a chi valuta assistenti, motori di ricerca AI e RAG aziendali.
- **Chi paga:** fornitori di ricerca AI (che competono su "qualità e freschezza"), integratori enterprise, laboratori europei.
- **Prezzi:** **non trovati** prezzi pubblici di eval-set commerciali. [stima] 1-5 k€ per licenza annuale per cliente.
- **Distribuzione:** outbound verso una lista finita (fornitori di ricerca e RAG, laboratori UE) e Hugging Face con accesso a pagamento [canale non verificato].
- **Vantaggio:** pipeline di dati freschi più verifica; difficile da replicare senza infrastruttura di scraping.
- **Delegabilità:** media.
- **Evidenza:** è l'idea più speculativa; il budget dei laboratori per i dati è provato (Mercor, Surge), quello per eval-set di piccoli fornitori no.

**Ordine di preferenza dell'Entusiasta:** 2 > 1 > 3 > 4 > 5. La 1 è il canale di validazione e di primo euro (meno di 1 mese); la 2 è il motore di margine B2B.

**Rischi residui da segnalare al Giudice:**
- Google ha fatto causa a SerpApi per lo scraping (contenzioso in corso, da Sacra e stampa): segnale di rischio per chi rivende dati di grandi piattaforme. Evitare le fonti di Google e Meta.
- GDPR sui dati personali: evitare persone fisiche.
- Diritto *sui generis* UE sulle banche dati.
- Dipendenza da piattaforma (Apify).
- Art. 2105 c.c.: gli ambiti scelti non toccano finanza né business information, ma la compatibilità va verificata.

## Fonti
Tutte consultate il 2026-11-20.

1. Apify — Build and monetize MCP servers: https://apify.com/mcp/developers (letta direttamente)
2. Apify blog — Programmer passive income: https://blog.apify.com/programmer-passive-income-web-scraping/ (letta direttamente)
3. Apify blog — How I built 98 production Actors: https://blog.apify.com/building-98-actors-on-apify-store/ (solo estratto del motore)
4. Apify Help — How does Actor monetization work: https://help.apify.com/en/articles/8684010-how-does-actor-monetization-work (estratto)
5. Lupa.cz — "Český obchod s roboty… vyplatil 24 milionů" (26/02/2025): https://www.lupa.cz/aktuality/scrapuji-vsichni-na-svete-cesky-obchod-s-roboty-pro-stahovani-dat-loni-vyvojarum-vyplatil-24-milionu/ (letta direttamente)
6. dev.to — Apify Actor Survival Guide: https://dev.to/agenthustler/the-apify-actor-survival-guide-why-99-of-scrapers-get-zero-users-and-how-to-fix-it-5eoh (letta direttamente; analisi di terzi)
7. Everydev — Apify: https://www.everydev.ai/developers/apify (estratto; ARR non verificato)
8. Bright Data — Data for AI is fueling massive growth: https://brightdata.com/blog/general/data-for-ai-is-fueling-massive-growth-at-bright-data (letta direttamente; autodichiarato)
9. SiliconANGLE — Exa raises $250M at $2.2B (20/05/2026): https://siliconangle.com/2026/05/20/exa-labs-raises-250m-2-2b-valuation-ai-search-tools (letta direttamente)
10. Sacra — Exa at $10M growing 11x: https://sacra.com/research/exa-at-10m-growing-11x-yoy (estratto)
11. PYMNTS — Exa raises $250M: https://www.pymnts.com/artificial-intelligence-2/2026/exa-raises-250-million-for-ai-powered-search-infrastructure/ (estratto)
12. Firecrawl — Series A and /v2: https://www.firecrawl.dev/blog/firecrawl-v2-series-a-announcement.md (letta direttamente)
13. TechCrunch — Firecrawl raises $14.5M: https://techcrunch.com/2025/08/19/ai-crawler-firecrawl-raises-14-5m-is-still-looking-to-hire-agents-as-employees (estratto)
14. PYMNTS — Nebius acquires Tavily: https://www.pymnts.com/acquisitions/2026/nebius-acquires-tavily-to-bolster-agentic-ai-search-capabilities/ (estratto)
15. Globes — Nebius buys Tavily: https://en.globes.co.il/en/article-1001534602 (estratto)
16. Sacra — Tavily: https://sacra.com/c/tavily/ (estratto)
17. SiliconANGLE — Parallel raises $100M (28/04/2026): https://siliconangle.com/2026/04/28/parag-agrawals-startup-raises-100m-build-parallel-web-ai-agents (estratto)
18. Dataconomy — Reddit earns $35M from AI licensing in Q2: https://dataconomy.com/2025/08/01/reddit-earns-35m-from-ai-licensing-deals-in-q2/ (estratto)
19. Motley Fool — Reddit's data revenue (17/08/2026): https://www.fool.com/investing/2026/08/17/reddits-data-revenue-openai-google-buyers/ (estratto)
20. CASRAI — Scholarly publisher AI licensing deals 2026: https://casrai.org/news/scholarly-publisher-ai-licensing-deals-2026 (estratto)
21. Outsell — AI Licensing Deal Tracker June 2026: https://outsellinc.com/?p=30783 (estratto)
22. Digiday — Timeline of publisher-AI deals 2025: https://digiday.com/media/a-timeline-of-the-major-deals-between-publishers-and-ai-tech-companies-in-2025 (estratto)
23. The Decoder — OpenAI and Google buying YouTubers' unpublished videos: https://the-decoder.com/openai-and-google-are-buying-youtubers-unpublished-videos-for-up-to-4-per-minute/ (estratto)
24. PetaPixel — AI companies paying creators for unpublished videos: https://petapixel.com/2025/01/13/ai-companies-are-paying-content-creators-for-their-unpublished-videos (estratto)
25. IT Brief — Troveo expands: https://itbrief.com.au/story/troveo-expands-ai-data-platform-into-five-categories (estratto)
26. Dealroom — Mercor doubles to $2B gross run rate: https://dealroom.co/news/137121-mercor-doubles-to-2b-gross-revenue-run-rate-as-ai-labs-buy-expert-data/ (estratto)
27. Contrary Research — Surge AI: https://research.contrary.com/report/surge-ai (estratto)
28. Microsoft Learn — Bing Search API retirement: https://learn.microsoft.com/en-us/lifecycle/announcements/bing-search-api-retirement (estratto)
29. The Register — Bing Search APIs retired: https://www.theregister.com/2025/05/15/bing_search_apis_retired/ (estratto)
30. Google — Places API policies: https://developers.google.com/maps/documentation/places/web-service/policies (estratto)
31. Google Cloud — Grounding with Google Maps: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps (estratto)
32. TRM Labs — Who's actually paying? Measuring AI agent payments onchain: https://www.trmlabs.com/trm-tech-blog/whos-actually-paying-measuring-ai-agent-payments-onchain (letta direttamente)
33. The Block — Stripe adds x402 integration: https://www.theblock.co/post/389352/stripe-adds-x402-integration-usdc-agent-payments (estratto; lettura diretta bloccata, pagina vuota)
34. Stripe Docs — Machine payments: https://docs.stripe.com/payments/machine (estratto)
35. Cloudflare blog — Pay Per Use: https://blog.cloudflare.com/pay-per-use/ (letta direttamente)
36. Press Gazette — Cloudflare says bot blocking is fueling publisher AI deals: https://pressgazette.co.uk/platforms/cloudflare-says-bot-blocking-is-fueling-publisher-ai-deals/ (estratto)
37. Sacra — SerpApi: https://sacra.com/research/serpapi (estratto)
38. SerpApi careers: https://serpapi.com/careers (estratto)
39. Datarade — Ecommerce product datasets: https://datarade.ai/data-categories/ecommerce-product-data/datasets (estratto)
40. Bright Data — UpTrade dataset: https://brightdata.com/products/datasets/uptrade (estratto)
41. dev.to — MCP monetization (vari post autodichiarati): https://dev.to/kirothebot/the-state-of-mcp-monetization-in-2026-where-builders-actually-get-paid-34k9 (estratto; non verificato)
42. dev.to — MCPize real numbers: https://dev.to/sai_93caeceb4f6a4d9969910/i-monetized-my-mcp-server-on-mcpize-tier-structure-stripe-connect-real-numbers-4jhf (estratto; split 85/15 non verificato sul sito ufficiale)
43. Minerva (Sapienza) — Tech page: https://nlp.uniroma1.it/minerva/blog (estratto; nessuna evidenza sui compratori di corpora italiani)
44. AWS Data Exchange — Provider financials: https://docs.aws.amazon.com/data-exchange/latest/userguide/provider-financials.html (estratto; ricavi dei piccoli fornitori: non trovato)
