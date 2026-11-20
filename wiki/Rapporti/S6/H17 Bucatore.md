---
tipo: rapporto
sessione: S6
ipotesi: "H17 - Le competenze di scraping sono un vantaggio competitivo reale nel 2026"
ruolo: Bucatore di palloncini (tentativo di confutazione)
data: 2026-11-20
ricerche_web_usate: 19
esito: "H17 confutata nel caso generale; resiste solo in nicchie strette (target fortemente protetti, pipeline di lunga durata con qualità/compliance), dove però il vantaggio è operativo e spesso legalmente rischioso"
---

# H17: lo scraping è ancora un vantaggio competitivo nel 2026? (Bucatore)

Criterio di confutazione pre-registrato: strumenti AI di estrazione (agenti browser, API di scraping gestite, "web data as a service") hanno reso lo scraping una commodity, al punto che il vantaggio non si misura più nei casi rilevanti.

## Sintesi

1. **[fatto] Accedere a una pagina e convertirla in dati costa ormai pochi centesimi o pochi dollari ogni 1.000 pagine, e lo vendono decine di fornitori.** ScrapingBee va da 0,05 a 0,25 $ per 1.000 richieste base e da 1,2 a 6,3 $ con proxy premium e rendering JS. Zyte parte da 0,06 $ (sito semplice) e arriva a 16 $ (sito "Advanced" renderizzato nel browser). Bright Data Web Unlocker costa 1,3–1,5 $. Firecrawl costa 0,6–3,8 $ a pagina e 3,75–19 $ ogni 1.000 pagine estratte direttamente in JSON. Oxylabs costa 0,25–1,50 $. Zyte, che è un fornitore, scrive che gestire in proprio l'infrastruttura di proxy "inizia a sembrare economicamente irrazionale" e che il mercato dei proxy è in "commoditizzazione controllata", con oltre 250 fornitori.
2. **[stima] Anche convertire l'HTML in dati strutturati con un LLM ha un costo trascurabile.** Gemini 2.5 Flash-Lite in modalità batch costa 0,05 $ per milione di token in input e 0,20 $ in output [fatto]. Con circa 5.000 token in ingresso e 500 in uscita per pagina, la spesa è di circa 0,35 $ ogni 1.000 pagine. Il parser scritto a mano, che prima era la competenza dell'esperto, oggi conta poco come vantaggio sui siti non protetti.
3. **[fatto] Chi non è esperto ottiene risultati comparabili sui siti semplici, ma non su quelli protetti.** Lo studio arXiv 2601.06301 (gennaio 2026) ha testato 35 siti. Sull'HTML semplice gli agenti LLM riescono nel 100% dei casi. Con login complessi riescono tra il 12% (Claude) e il 70% (Simular.ai), con CAPTCHA tra il 5% e il 10%. Su Online-Mind2Web, il miglior agente generico (Operator) completa il 61% dei compiti sul web reale.
4. **[fatto] Il marketplace di Apify è saturo e la torta divisa è piccola.** Apify dichiara 126.812 Actor, 7.500 sviluppatori della community e pagamenti per 2 M$ al mese. [stima] Fanno in media circa 267 $ al mese per sviluppatore, cioè circa 3.200 $ l'anno, e la mediana è quasi certamente più bassa. Un caso documentato guadagna circa 200 $ al mese dopo 90 giorni. Un altro gestisce 98 Actor con 15–20 ore di lavoro a settimana.
5. **[fatto] Il valore si sposta verso chi detiene i dati.** Dal 2025 Cloudflare blocca di default i crawler AI, e dal 15 settembre 2026 blocca i crawler di training e degli agenti sulle pagine con pubblicità per i nuovi domini. Il programma "Pay Per Crawl" sta diventando "Pay Per Use". Ci sono licenze dirette, come Reddit–Google per circa 60 M$ l'anno, e cause basate sull'aggiramento delle misure anti-bot: Reddit contro SerpApi e Oxylabs è in gran parte sopravvissuta al ricorso per l'archiviazione nel luglio 2026.
6. **[fatto] Il vantaggio resiste in modo misurabile solo sui target più protetti.** Nel benchmark Proxyway di ottobre 2025 sulle API gestite, il tasso medio di successo su Shein è del 21,9%, su G2 del 36,6% e su Hyatt del 43,8%. Su questi siti 4–5 API su 11 falliscono più dell'80% delle volte. Il sondaggio Apify 2026 conferma che i costi crescono: il 58,3% degli intervistati ha speso di più in proxy e oltre il 62% di più in infrastruttura, per via degli anti-bot. Quindi l'"arte" non è morta, ma oggi vive dove il rischio legale è più alto (aggiramento delle protezioni) e dove i margini se li prendono le API che spalmano il costo su migliaia di clienti.
7. **Verdetto: H17 è confutata nella sua forma generale.** "So fare scraping" non è più un vantaggio competitivo misurabile nella maggior parte dei casi d'uso rilevanti per un prodotto. Restano vantaggi più stretti, e conviene ridefinire l'ipotesi intorno a questi:
   - sapere quali dati servono e quanto valgono (conoscenza di dominio);
   - qualità e manutenzione di pipeline di lunga durata (deduplicazione, entity resolution, controllo delle derive);
   - provenienza documentata e compliance.

## Evidenze per criterio di confutazione

### 1. Commoditizzazione: prezzi delle API gestite (novembre 2026)

Tutti i prezzi sono letti dalle pagine ufficiali il 2026-11-20 [fatto]. I costi per 1.000 richieste sono ricavati dividendo il prezzo del piano per i crediti inclusi.

| Fornitore | Caso base (per 1.000) | Caso difficile (per 1.000) | Note |
|---|---|---|---|
| ScrapingBee | 0,05–0,25 $ (1 credito) | 1,21–6,33 $ (premium+JS, 25 crediti) | si pagano solo le richieste riuscite |
| ScraperAPI | 0,083–0,49 $ | +10 crediti sui siti protetti da Cloudflare/Datadome/PerimeterX; Google 25 crediti, LinkedIn 30 | |
| Zyte API | da 0,06 $ (HTTP, livello 1, impegno da 500 $) | fino a 16,08 $ (browser, livello 5, a consumo) | prezzo per livello di difficoltà del sito |
| Bright Data Web Unlocker | 1,50 $ a consumo; 1,30 $ nel piano Scale (499 $/mese) | stesso prezzo | |
| Oxylabs Web Scraper API | 0,25–0,50 $ (standard) | 1,22–1,50 $ (dominio custom con JS) | |
| Firecrawl | 0,60–3,80 $ a pagina | 3,75–19 $ per 1.000 pagine JSON (estrazione LLM inclusa) | |
| Apify | 0,13–0,20 $ per unità di calcolo; proxy residenziale 7–8 $/GB | n/d | |
| Jina Reader | 10 M di token gratis per chiave; limite di 500 RPM | prezzo per milione di token non mostrato sulla pagina letta | non trovato |
| Proxy residenziali (indice Proxidize, settembre 2026) | da ≤1 $/GB (Evomi a consumo, 0,99 $) fino a 8 $/GB (Bright Data a consumo) | | |

**Andamento dei prezzi:**
- [fatto, fonte secondaria] Secondo la ricerca Proxyway 2025, ripresa da fonti terze, il prezzo mediano dei proxy residenziali nel taglio da 5 GB è sceso del 53% in un anno, a circa 4 $/GB. Un fornitore (NodeMaven) segnala una stabilizzazione dei prezzi a inizio 2026.
- [fatto, dichiarazione del venditore] Zyte scrive: "Price wars have gutted margins across the proxy market. Since mid-2023…". Riporta anche che nel 2025 il volume di richieste su Zyte API è cresciuto di oltre il 130% anno su anno.
- Le serie storiche dei prezzi delle API su Wayback Machine non sono verificabili: il proxy di sessione ha bloccato web.archive.org.

**Estrazione strutturata con LLM:**
- [fatto] Gemini 2.5 Flash-Lite costa 0,10 / 0,40 $ per milione di token (input/output) in modalità standard e 0,05 / 0,20 $ in batch. Gemini 3.1 Flash-Lite costa 0,25 / 1,50 $.
- [stima] Ipotesi: 5.000 token in input per pagina, cioè una pagina già ripulita in markdown, e 500 token di JSON in output. Il costo viene circa 0,35 $ ogni 1.000 pagine in batch e circa 0,70 $ in modalità standard, quindi meno del costo di accesso delle API qui sopra.
- [fatto, venditore] Zyte, nel report 2026, consiglia di usare l'estrazione via LLM per volumi bassi su siti volatili e la generazione di codice (selettori deterministici) per i volumi alti. Riporta anche che l'uso della sua "AI-driven discovery" per gli annunci di lavoro è cresciuto di oltre 50 volte nel 2025.

**Agenti browser:**
- [fatto] Cloudflare ha creato la categoria "signed agents" (Web Bot Auth). Il primo gruppo comprende ChatGPT agent, Goose, Browserbase e Anchor Browser. OpenAI documenta che le richieste del suo browser cloud sono firmate e quindi riconoscibili, e bloccabili, dai siti.
- [fatto] Il report Zyte 2026 cita Deloitte 2025: il 30% delle organizzazioni esplora approcci ad agenti, il 38% è in fase pilota e solo l'11% è in produzione.

**Strumenti no-code:** [fatto, ma da fonti di parte] Thunderbit dichiara oltre 100.000 utenti sul Chrome Web Store. Lo stesso blog di Thunderbit, concorrente di Browse AI, attribuisce a Browse AI oltre 500.000 utenti, con un dato non datato. Non ho trovato dati di adozione indipendenti.

**Capitali in ingresso:** [fatto] Firecrawl ha raccolto una Series B da 75 M$ (82,1 M$ secondo il Form D) nel settembre 2026. Exa ha raccolto una Series C da 250 M$ con valutazione di 2,2 miliardi $ (maggio 2026). Parallel ha raccolto una Series A da 100 M$, dato riportato da Crustdata. [stima] Il segmento "dati web per agenti" è presidiato da aziende con centinaia di milioni di capitale: non è uno spazio vuoto.

### 2. Chi non è esperto ottiene risultati comparabili?

**Benchmark accademico (arXiv 2601.06301, gennaio 2026)** [fatto]. Il tasso di successo nell'estrazione, in media su 3 prove, è questo:

| Livello del sito | BeautifulSoup (codice scritto da LLM) | Scrapy (codice scritto da LLM) | Claude (agente) | Simular.ai (agente) |
|---|---|---|---|---|
| HTML semplice | 0,93 | 0,82 | 1,00 | 1,00 |
| HTML complesso | 0,80 | 0,20 | 0,57 | 1,00 |
| Login semplice | non supportato | non supportato | 0,20 | 0,63 |
| Login complesso | non supportato | non supportato | 0,12 | 0,70 |
| CAPTCHA | non supportato | non supportato | 0,05 | 0,10 |

- Conclusione degli autori: gli agenti end-to-end "have made complex scraping accessible", a volte con un solo prompt.
- Limiti dello studio: un solo hardware, 35 siti in tutto, e un modello datato (Claude 3.5 Sonnet). [stima] Con i modelli del 2026 i valori su HTML e login sono probabilmente più alti.

**Agenti sul web reale (Online-Mind2Web, 300 compiti su 136 siti)** [fatto]:
- Con valutazione manuale, Operator arriva al 61%.
- I punteggi dichiarati su WebVoyager (85–90%) si ridimensionano nelle verifiche indipendenti: un audit di marzo 2026 porta Operator dall'87% al 68,6%.
- Lettura: gli agenti non sono affidabili quanto una pipeline costruita da un esperto per compiti ripetuti e su larga scala. Però, per estrazioni occasionali, chi non è esperto ottiene oggi risultati che due anni fa richiedevano uno sviluppatore.

**Sondaggi di settore** [fatto, pubblicati da venditori]:
- Apify "State of web scraping 2026": il 45,8% usa l'AI nello scraping e il 54,2% no. Tra chi la usa, il 72,7% dichiara vantaggi di produttività. Il 35,8% degli intervistati sono freelance. Il campione è descritto come "centinaia" di professionisti, senza un numero esatto.
- Zyte 2026 riporta la testimonianza di un professionista: "customers do not care how good my scraping skills are. They care about getting the data… reliably". Zyte sostiene anche che passare a un'API full-stack riduce lo sforzo di ingegneria sull'accesso a circa il 10%. È un dato del venditore, non verificato.

**Mercato freelance** [fatto]:
- Non ho trovato dati specifici sullo scraping.
- In generale, Upwork scrive che "the lowest-value, most transactional jobs are being… substituted".
- Gli studi accademici stimano per i freelance esposti all'AI un calo dei contratti di circa il 2% e dei guadagni di circa il 5%.
- [stima] I lavori di scraping "una tantum" (estrai questa tabella, prendi questa lista) rientrano proprio nella fascia transazionale che viene sostituita.

### 3. Saturazione dei marketplace (Apify Store)

Dati del marketplace [fatto]:
- La pagina partner di Apify, letta il 2026-11-20, dichiara 126.812 Actor, 7.500 sviluppatori della community, 2 M$ pagati al mese e "many developers earn over $3k". Un'altra pagina Apify riporta "1,4 M$ pagati il mese scorso": i numeri dichiarati non sono coerenti tra loro.
- Analisi di terzi su 10.000 Actor (maggio 2026): il 92,1% è a pagamento. Nella categoria social media ci sono 1.811 Actor, nella lead generation 1.666, tra AI e MCP 546.
- La commissione della piattaforma è del 20%, secondo un caso riportato su dev.to.

Stime sulla distribuzione dei guadagni [stima]:
- 2 M$ al mese divisi per 7.500 sviluppatori fanno circa 267 $ al mese in media. Con una distribuzione a coda lunga, tipica dei marketplace, la mediana sarà molto più bassa.
- Per arrivare a 50 k€ di margine l'anno (circa 4.500 $ al mese al netto della commissione) bisogna stare nella fascia alta. Dalla dichiarazione "molti sopra 3.000 $" ricavo che sia la frazione più alta, probabilmente nell'ordine dell'1–3% degli sviluppatori. Questo intervallo è una stima e non ho trovato dati pubblici di concentrazione.

Casi reali [fatto, autodichiarati]:
- Un Actor dopo 90 giorni: circa 200 $ al mese netti, 64 utenti in totale, 13 utenti attivi al mese. Ha richiesto 3 settimane di MVP, spese soprattutto sugli anti-bot. Gli utenti attivi sono scesi da 30 a 12 per errori silenziosi.
- Un portafoglio di 98 Actor: 855 utenti attivi al mese dopo 6 mesi e 15–20 ore di lavoro a settimana (manutenzione, supporto, monitoraggio). Il ricavo non è dichiarato, viene descritto come "meaningful but inconsistent".
- I prezzi di mercato citati per job comparabili sono 0,50–3,50 $ ogni 1.000 elementi.

### 4. Fattori che riducono il valore dello scraping

**Detentori dei dati e infrastruttura** [fatto]:
- Cloudflare dal 1° luglio 2025 blocca di default i crawler AI. Dichiara di proteggere circa il 20% del web.
- Dal 15 settembre 2026, per i nuovi domini, i crawler di training e degli agenti sono bloccati di default sulle pagine con pubblicità. Pay Per Crawl è ancora in beta chiusa e sta diventando "Pay Per Use".
- Il report Zyte cita Cloudflare Radar 2025: i bot AI generano il 4,2% delle richieste HTML, i bot non-AI il 47,9%, gli umani il 43,5%.
- Zyte scrive anche che un fornitore di anti-bot ha rilasciato oltre 25 cambi di versione in 10 mesi e che gli anti-bot "now change faster than human teams can respond".

**Licenze dirette** [fatto, cifre riportate dalla stampa]:
- Reddit–Google: circa 60 M$ l'anno, con rinnovo in difficoltà secondo il WSJ (luglio 2026).
- OpenAI–News Corp: oltre 250 M$ in 5 anni.
- Meta–News Corp: fino a 50 M$ l'anno.
- Accordi tra AI e editori: circa 2,9 miliardi $ impegnati in totale (stima di settore).
- [stima] Chi ha bisogno di grandi volumi di dati "puliti" e documentati compra la licenza: il valore va al detentore, non a chi raccoglie.

**Cause** [fatto]:
- Reddit contro SerpApi, Oxylabs, AWMProxy e Perplexity (SDNY, ottobre 2025): a fine luglio 2026 il giudice ha in gran parte respinto la richiesta di archiviazione di SerpApi, e le pretese basate sul DMCA (aggiramento delle misure tecniche) proseguono. La fonte è Law360 tramite un aggregatore: il dettaglio va verificato.
- Google contro SerpApi (N.D. Cal., dicembre 2025): le pretese DMCA sono state respinte il 20 luglio 2026, con possibilità di modificare l'atto.
- Controesempio: in Meta contro Bright Data (gennaio 2024) il giudice ha stabilito che lo scraping da utente non loggato di dati pubblici non viola i ToS di Meta, e Meta ha rinunciato all'appello. Ma è una decisione di tribunale distrettuale statunitense e non tocca i dati dietro login.
- [stima] Il quadro legale USA è misto. Il rischio però si concentra proprio sull'attività in cui l'esperto ha ancora un vantaggio, cioè aggirare protezioni come SearchGuard o gli anti-bot.

**UE e Italia** [fatto]:
- AI Act, Codice di condotta GPAI (versione finale del 10 luglio 2025): chi lo firma si impegna a usare solo crawler che rispettano robots.txt e gli altri protocolli leggibili dalle macchine.
- Il report Zyte nota che regole come l'AI Act e la californiana AB 2013 rendono la provenienza dei dati un requisito negli acquisti: per l'AI Act le sanzioni arrivano a 35 M€ o al 7% del fatturato.
- Legge italiana 132/2025, in vigore dal 10 ottobre 2025:
  - ha introdotto l'art. 70-septies della legge sul diritto d'autore, che ammette il TDM con sistemi AI solo su materiale "legittimamente acquisito" e nel rispetto degli artt. 70-ter e 70-quater, quindi delle riserve di opt-out;
  - ha introdotto l'art. 171, lett. a-ter, con una sanzione penale per il TDM non conforme.
- Garante privacy:
  - nota informativa del 20 maggio 2024 sulle difese contro lo scraping;
  - sanzione da 60.000 € a Trovanumeri.com (2023), un elenco telefonico costruito con lo scraping;
  - sanzione da 15 M€ a OpenAI.
  - Non ho trovato sanzioni specifiche sullo scraping nel 2025-2026.
- Il diritto sui generis sulle banche dati UE e l'art. 2105 c.c. restano vincoli del profilo. Non li ho approfonditi qui.

### 5. Dove il vantaggio non si misura più e dove forse resiste

**Dove non si misura più** [stima, basata sulle evidenze sopra]:
- Siti pubblici statici o semi-dinamici senza anti-bot serio: le API costano 0,05–1 $ per 1.000 pagine, l'estrazione LLM circa 0,35–5 $ per 1.000, e gli agenti riescono quasi sempre.
- Estrazioni occasionali richieste da utenti non tecnici, coperte da agenti, no-code e assistenti di codice.
- La "plumbing" di proxy e rotazione: è commoditizzata e la gestiscono meglio le API, che spalmano il costo su migliaia di clienti.
- Parsing e normalizzazione di fonti eterogenee su volumi bassi o medi: con un LLM economico costa poco.

**Dove forse resiste, quantificato:**
- **Target fortemente protetti.** [fatto] Nel benchmark Proxyway 2025 il successo medio su Shein è del 21,9%, su G2 del 36,6%, su Hyatt del 43,8%, su Lowe's del 52,6%, su Instagram del 59,5%, e 4–5 API su 11 falliscono più dell'80% delle volte. Su Leboncoin un fornitore ha speso oltre 60 $ per circa un decimo dei risultati attesi. [stima] Qui un esperto può fare meglio delle API, ma:
  - si tratta di pochi target, soprattutto e-commerce e social;
  - il costo e l'aggiornamento continuo sono alti;
  - il vantaggio coincide con l'aggiramento delle misure tecniche, cioè l'attività più esposta a DMCA, ToS e art. 171 a-ter;
  - per il profilo, è anche l'attività meno delegabile, perché richiede intervento esperto continuo.
- **Pipeline ricorrenti e di lunga durata ad alta affidabilità.** [fatto] Lo dicono sia Zyte, che consiglia il codice deterministico per i volumi alti, sia i casi su Apify, dove gli errori silenziosi hanno fatto perdere il 60% degli utenti attivi. [stima] Il vantaggio è nell'operatività (monitoraggio, QA, schema stabile), che è una competenza reale ma replicabile da team con budget. Fino al 90% dei costi di accesso e parsing si compra a commodity, quindi il differenziale si riduce alla parte di qualità dei dati.
- **Provenienza e compliance documentate.** [stima] Con l'AI Act e il codice GPAI, la capacità di dimostrare una raccolta lecita (robots.txt, opt-out TDM, nessun aggiramento) diventa un requisito per vendere ad aziende. Questo però premia la disciplina legale e di processo, non l'abilità tecnica di aggirare le protezioni: è quasi l'opposto del vantaggio "da scraper".
- **Conoscenza di dominio.** Sapere quali fonti esistono, come cambiano e quanto valgono i dati per un settore è il vantaggio più difendibile. Ma non è "competenza di scraping", e per il profilo i domini dove questa conoscenza è più forte sono esclusi (finanza, aziende, aste, immobili, gare).

## Idee concrete: attacco alle raccomandazioni ovvie

| Idea "ovvia" | Pro | Contro (evidenze) | Verdetto del Bucatore |
|---|---|---|---|
| **A. Vendo Actor o dataset su Apify Store** | Distribuzione inclusa, senza bisogno di un pubblico [fatto]; tempo al primo euro breve; prezzo a risultato | 126.812 Actor e 7.500 sviluppatori per 2 M$ al mese: circa 267 $ al mese in media [stima]; commissione del 20%; un caso reale fa 200 $ al mese dopo 90 giorni; un portafoglio di 98 Actor richiede 15–20 ore a settimana; le categorie forti (social, lead) sono sature (1.811 e 1.666 Actor) e la lead generation tocca gli ambiti esclusi; dipendenza totale dalla piattaforma | Non arriva a 50 k€ con meno di 5 ore a settimana salvo essere nell'1–3% più alto [stima]. Va bene come test di mercato, non come business |
| **B. API di "dati freschi per agenti AI"** | La domanda cresce [fatto: Firecrawl dichiara ARR a otto cifre, Exa vale 2,2 miliardi $] | Concorrenti con 75–250 M$ di capitale; prezzi tra 1 e 7 $ ogni 1.000 ricerche; Cloudflare blocca gli agenti e sposta il valore verso Pay Per Use; OpenAI e Google hanno la ricerca web integrata a 10–25 $ ogni 1.000 chiamate; nessun vantaggio di distribuzione | Bocciata: è il segmento con più capitale e meno differenziazione. Lo scraping generico è esattamente ciò che questi venditori offrono |
| **C. Aggrego fonti frammentate in un dataset verticale** | Il valore sta nella copertura, nella deduplicazione e nell'entity resolution; resiste meglio all'AI generalista se le fonti sono molte e piccole | Il costo per strutturare fonti eterogenee è crollato (LLM a circa 0,35–5 $ ogni 1.000 pagine), quindi la barriera tecnica che proteggeva questo modello si abbassa per tutti; resta il rischio sui generis se l'estrazione è sostanziale; i domini dove il profilo ha un vantaggio sono esclusi | È l'unica delle quattro che sopravvive, ma il fossato è la curation e il dominio, non lo scraping. Va valutata con C4 abbassato |
| **D. "Il mio vantaggio è aggirare gli anti-bot"** | Misurabile: le API falliscono più dell'80% delle volte su 4–5 target su 15 [fatto] | Corsa agli armamenti a velocità sovra-umana (oltre 25 versioni in 10 mesi); spesa in proxy e infrastruttura in crescita (58–62% degli intervistati); è il bersaglio delle cause DMCA (Reddit contro SerpApi e Oxylabs prosegue); art. 171 a-ter in Italia per il TDM AI; manutenzione continua non delegabile; rischio reputazionale con un datore di lavoro che opera nel settore (art. 2105 c.c.) | Bocciata per questo profilo: è un vantaggio reale ma il più costoso, legalmente esposto e incompatibile con un founder che lavora 5 ore a settimana |

Raccomandazioni operative:
1. Riformulare H17 in un'ipotesi del tipo "conoscenza di dominio più pipeline di qualità e provenienza documentata". Nella scala v2, abbassare C4 per tutte le idee il cui vantaggio dichiarato è "so scrapare".
2. Per ogni idea, costruire il caso base comprando l'accesso (API) e l'estrazione (LLM) e misurare quanto aggiunge l'esperto. Se il margine aggiunto è sotto il 20–30% dei costi, il vantaggio è trascurabile. È una soglia proposta [stima], non un dato.
3. Scartare le idee che dipendono da target del tipo "Shein/Instagram": sono rischiosi e non delegabili.

## Lacune e incertezze

- Non ho una serie storica verificata dei prezzi delle API (2022→2026): Wayback Machine è bloccata dal proxy. Il calo è documentato solo per i proxy residenziali e da fonti secondarie.
- Mancano dati indipendenti sulla distribuzione dei guadagni nello Store di Apify (mediana, percentili). I numeri dichiarati da Apify non sono coerenti tra loro (1,4 M$ contro 2 M$ al mese).
- Il benchmark arXiv usa modelli datati (Claude 3.5 Sonnet) e copre solo 35 siti. Non ho trovato un benchmark 2026 su agenti recenti contro anti-bot commerciali.
- Il report Zyte e il sondaggio Apify vengono da venditori che hanno interesse a dichiarare lo scraping "fai-da-te" irrazionale.
- Lo stato delle cause USA è ricostruito da fonti secondarie (Law360 tramite aggregatore, Search Engine Land). Nessuna lettura diretta degli atti.
- Prezzo di Jina Reader per milione di token: non trovato sulla pagina letta.
- I dati di adozione dei no-code vengono da un concorrente (Thunderbit): poco affidabili.
- Non ho trovato dati freelance specifici sullo scraping.

## Fonti (tutte consultate il 2026-11-20)

- Firecrawl, prezzi: https://www.firecrawl.dev/pricing
- ScrapingBee, prezzi: https://www.scrapingbee.com/pricing/
- ScraperAPI, prezzi: https://www.scraperapi.com/pricing/
- Zyte, prezzi: https://www.zyte.com/pricing/
- Bright Data Web Unlocker, prezzi: https://brightdata.com/pricing/web-unlocker
- Oxylabs Web Scraper API, prezzi: https://www.oxylabs.io/products/scraper-api/web/pricing
- Apify, prezzi: https://apify.com/pricing
- Jina Reader: https://jina.ai/reader/
- Gemini API, prezzi: https://aistudio.google.com/docs/pricing
- Proxidize, Proxy Pricing Index 2026: https://www.proxidize.com/research/proxy-pricing-index-2026/
- Sintesi secondaria della ricerca Proxyway 2025 sui proxy: risultati di ricerca che citano joinmassive.com/blog/residential-proxy-pricing e nodemaven.com (non letti direttamente; trattarli come secondari)
- Zyte, 2026 Web Scraping Industry Report (PDF): https://email.zyte.com/hubfs/White%20Papers/2026%20web%20scraping%20industry%20report/ZYTE%202026%20REPORT.pdf
- Zyte, blog sul report 2026: https://www.zyte.com/blog/future-of-web-scraping-2026-industry-report/
- Apify, State of web scraping report 2026: https://blog.apify.com/web-scraping-report-2026/
- Apify, pagina per gli sviluppatori di Actor: https://apify.com/partners/actor-developers
- Apify blog, 98 Actor in 6 mesi: https://blog.apify.com/building-98-actors-on-apify-store/
- dev.to, primo Actor dopo 3 mesi: https://dev.to/boo_n/3-months-shipping-my-first-apify-actor-64-users-200mo-and-everything-i-got-wrong-52i7
- The Scraping Report (analisi di 10.000 Actor): https://liaichi.substack.com/p/the-scraping-report-761
- arXiv 2601.06301, "Beyond BeautifulSoup": https://arxiv.org/html/2601.06301v1
- Online-Mind2Web / "An Illusion of Progress?": https://arxiv.org/html/2504.01382v4 ; audit WebVoyager 2026: https://arxiv.org/html/2603.29020 (dai risultati di ricerca)
- Proxyway, Web Scraping API Report 2025: https://proxyway.com/research/web-scraping-api-report-2025
- Cloudflare, comunicato del 1° luglio 2025: https://www.cloudflare.com/press/press-releases/2025/cloudflare-just-changed-how-ai-crawlers-scrape-the-internet-at-large/
- Cloudflare, signed agents: https://blog.cloudflare.com/signed-agents/ ; OpenAI, allowlisting del browser cloud: https://help.openai.com/en/articles/11845367-chatgpt-works-cloud-browser-allowlisting (dai risultati di ricerca)
- Cloudflare 2026, Pay Per Use e default del 15 settembre: https://thenextweb.com/news/cloudflare-block-ai-crawlers-pay-publishers ; https://pressgazette.co.uk/platforms/cloudflare-says-bot-blocking-is-fueling-publisher-ai-deals/ (dai risultati di ricerca)
- Google contro SerpApi: https://blog.google/technology/safety-security/serpapi-lawsuit/ ; https://searchengineland.com/google-loses-key-dmca-claims-against-serpapi-in-scraping-lawsuit-483185 (dai risultati di ricerca)
- Reddit contro SerpApi e altri: https://www.law360.com/articles/2508228 ; https://www.pbs.org/newshour/nation/reddit-sues-ai-company-over-alleged-industrial-scale-scraping-of-its-users-comments (dai risultati di ricerca)
- Meta contro Bright Data: https://techcrunch.com/2024/01/24/court-rules-in-favor-of-a-web-scraper-bright-data-which-meta-had-used-and-then-sued ; https://techcrunch.com/2024/02/26/meta-drops-lawsuit-against-web-scraping-firm-bright-data-that-sold-millions-of-instagram-records/ (dai risultati di ricerca)
- Codice di condotta GPAI, capitolo copyright: https://www.lw.com/en/insights/2025/09/eu-ai-act-gpai-model-obligations-in-force-and-final-gpai-code-of-practice-in-place ; https://www.cliffordchance.com/insights/resources/blogs/ip-insights/2025/10/copyright-compliance-under-the-eu-ai-act-for-gpai-model-providers.html (dai risultati di ricerca)
- L. 132/2025, art. 70-septies LdA: https://brocardi.it/legge-diritto-autore/titolo-i/capo-v/sezione-i/art70septies.html ; https://www.hoganlovells.com/en/publications/copyright-provisions-in-the-new-italian-ailaw-reinforcing-human-authorship-and-text-and-data-mining (dai risultati di ricerca)
- Garante privacy, nota del 20 maggio 2024 sullo scraping: https://www.garanteprivacy.it/garante/doc.jsp?ID=10020316 ; Trovanumeri: https://www.cybersecurity360.it/news/garante-privacy-web-scraping-vietato-serve-idonea-base-di-legittimita/ (dai risultati di ricerca)
- Licenze dati: https://www.engadget.com/reddit-is-licensing-its-content-to-google-to-help-train-its-ai-models-200013007.html ; https://cryptobriefing.com/reddit-stock-google-ai-deal-non-renewal/ ; https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/ (dai risultati di ricerca)
- Firecrawl, finanziamento: https://siliconangle.com/2026/09/22/web-scraping-startup-firecrawl-closes-75m-investment/ ; https://runtimewire.com/article/scoop-firecrawl-raises-82m-after-its-14-5m-series-a-warm-up (dai risultati di ricerca)
- Exa, Series C: https://exa.ai/blog/announcing-series-c ; prezzi delle API di ricerca: https://parallel.ai/articles/openai-web-search-vs-parallel-vs-exa-vs-tavily-how-to-choose (fonte di parte, dai risultati di ricerca)
- Browse AI e Thunderbit (fonte di parte): https://thunderbit.com/blog/thunderbit-vs-browse-ai-review (dai risultati di ricerca)
- Freelance e AI: https://upwork.com/research/ai-impact-work-categories ; https://www.brookings.edu/articles/is-generative-ai-a-job-killer-evidence-from-the-freelance-market (dai risultati di ricerca)

Nota di metodo: le voci segnate "dai risultati di ricerca" non sono state lette direttamente. I relativi fatti vengono dagli estratti del motore di ricerca e vanno verificati prima di qualunque uso decisionale. Tutti i prezzi e le pagine Apify, Zyte (incluso il PDF), Proxyway e arXiv sono stati letti direttamente.
