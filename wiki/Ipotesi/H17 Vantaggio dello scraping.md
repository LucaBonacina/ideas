---
tipo: ipotesi
id: H17
titolo: "Le competenze di scraping sono un vantaggio competitivo reale nel 2026"
sessione: S6
stato: parziale
fiducia: media
probabilita_successo: "10%"
tags: [ipotesi, trasversale]
---
# H17 — Lo scraping come vantaggio competitivo nel 2026

> **Come leggere questa nota.** È un'ipotesi trasversale: non descrive un business. La probabilità indicata è un fattore di correzione da applicare alle altre idee, non la probabilità di un business a sé. Sigle nel [[Glossario]].

## Ipotesi (pre-registrata)
Le competenze di scraping sono un vantaggio competitivo reale nel 2026 (dal [[Registro delle ipotesi]]).

## Criteri di confutazione (pre-registrati)
Strumenti AI di estrazione (agenti browser, API di scraping gestite, "web data" as a service) hanno reso lo scraping una commodity, al punto che il vantaggio non si misura più nei casi rilevanti.

## Caso a favore — Entusiasta
Rapporto integrale: [[H17 Entusiasta]] (23 ricerche web).
- **Gli agenti browser sono poco affidabili e costosi.** [fatto] Su Online-Mind2Web (300 task, 136 siti) Operator arriva al 61%, Claude computer use 3.7 al 56%, Browser Use al 30%. Il leaderboard HAL di Princeton ha il massimo al 42%, con run da 171 a 1.610 $.
  - [stima] Circa 0,6-5 $ per task, contro circa 0,0015 $ a pagina con un unlocker gestito.
- **Le API gestite cedono sui siti protetti.** [fatto] Nel benchmark Proxyway 2025 (11 API, 15 siti protetti) solo 4 API superano l'80% di successo. Firecrawl è ultima.
- **L'estrazione LLM dipende dalla preparazione dei dati.** [fatto] Studio NEXT-EVAL: le allucinazioni scendono dal 91% sull'HTML grezzo al 3% su JSON "flat" preparato con cura.
- **Le difese si irrigidiscono.** [fatto] Cloudflare blocca di default i crawler AI da luglio 2025, con AI Labyrinth e Web Bot Auth.
- **La domanda cresce.** Dati dichiarati dalle aziende: Bright Data oltre 300 M$ di ARR; Apify +65% di fatturato nel 2024.
- **Dove sta il vantaggio residuo:**
  - molte fonti piccole ed eterogenee;
  - freschezza e manutenzione continue;
  - matching di prodotti tra cataloghi (EAN/MPN);
  - competenza legale (Ryanair C-30/14, Meta v. Bright Data, hiQ, Garante 2024, art. 70-septies L. 633/1941).
- **Idee proposte:**
  1. monitoraggio di prezzi e assortimento B2B tecnico con matching;
  2. brand protection per le PMI del made in Italy;
  3. Actor di nicchia su Apify;
  4. feed in italiano per agenti AI;
  5. dati sull'usato auto.
- **Controevidenze riportate onestamente:** "Beyond BeautifulSoup" (non esperti che fanno scraping con LLM); Firecrawl a circa 0,003 $ a pagina; il 61% dei siti è senza protezione anti-bot (dato DataDome).

## Caso contro — Bucatore di palloncini
Rapporto integrale: [[H17 Bucatore]] (19 ricerche web).
- **L'accesso si compra.** [fatto, listini 2026-11-20] Prezzi per 1.000 richieste:
  - ScrapingBee da 0,05 $ a 6,3 $;
  - Zyte da 0,06 $ a 16 $;
  - Bright Data Web Unlocker 1,3-1,5 $;
  - Oxylabs 0,25-1,5 $;
  - Firecrawl 3,75-19 $ con output JSON.
  Zyte stessa definisce "economicamente irrazionale" gestire in proprio i proxy.
- **L'estrazione costa pochissimo.** [stima] Circa 0,35 $ ogni 1.000 pagine in batch con un modello LLM economico.
- **I non esperti ce la fanno.** [fatto] "Beyond BeautifulSoup" (gennaio 2026, 35 siti): i workflow LLM permettono ai non esperti di fare scraping di siti complessi. Falliscono solo sui CAPTCHA (5-10%).
- **Il marketplace di Apify è saturo.** [fatto, dati Apify] 126.812 Actor, 7.500 sviluppatori, 2 M$ pagati al mese. [stima] Circa 267 $ al mese in media per sviluppatore. Casi reali: circa 200 $ al mese dopo 90 giorni; un portafoglio di 98 Actor richiede 15-20 h/sett.
- **Il valore si sposta ai detentori dei dati.**
  - Cloudflare con pay-per-crawl;
  - licenze dirette (Reddit-Google, circa 60 M$ l'anno);
  - Reddit contro SerpApi e Oxylabs (DMCA), in gran parte sopravvissuta alla richiesta di archiviazione;
  - codice di condotta GPAI dell'AI Act;
  - L. 132/2025: art. 70-septies e sanzioni penali (art. 171).
- **Dove il vantaggio resiste:** sui target molto protetti, dove però si concentrano il rischio legale (aggiramento delle protezioni) e la manutenzione non delegabile.
- **Idee ovvie attaccate:**
  - Actor su Apify: tetto basso;
  - API di dati per agenti AI: concorrenti con 75-250 M$ di capitale;
  - "aggiro gli anti-bot": rischio legale e incompatibile con 5 h/sett.;
  - aggregazione di fonti frammentate: sopravvive, ma il vantaggio è nella cura dei dati e nel dominio, non nello scraping.

## Verdetto — Giudice

### Affermazioni decisive ri-verificate
| Affermazione | Chi la sostiene | Esito della verifica | Fonte |
|---|---|---|---|
| Sui siti protetti le API gestite falliscono spesso (vantaggio residuo per l'esperto) | Entusiasta; il Bucatore la concede ma la legge come nicchia | **Confermata, ma taglia in due direzioni.** "Four providers (Zyte, Decodo, Oxylabs, and ScrapingBee) managed to open them over 80% of the time"; "Shein, G2, and Hyatt gave our participants the most trouble". Quindi anche i target protetti si aprono per lo più comprando un'API: il vantaggio dell'esperto si riduce a pochi target molto difesi | Proxyway, Web Scraping API Report 2025 (2026-11-20) |
| I non esperti, con gli LLM, fanno scraping di siti complessi | Bucatore (l'Entusiasta la riporta come controevidenza, sottolineando che i siti sono pochi e in parte demo) | **Confermata nel claim degli autori.** Abstract: "current LLM-based workflows allow novice users to scrape complex websites that would otherwise be inaccessible", su 35 siti in cinque livelli di sicurezza (autenticazione, anti-bot, CAPTCHA). Campione piccolo ma direzione chiara | arXiv 2601.06301 (2026-11-20) |
| Quanto paga l'ecosistema Apify agli sviluppatori (domanda e tetto delle idee "marketplace") | Bucatore 2 M$/mese; Entusiasta circa 0,96 M€ nel 2024 | **Entrambe le cifre esistono, e sono incoerenti.** La pagina Apify dichiara "$2M paid out last month", 7.500 sviluppatori e 126.812 Actor. Lupa.cz (26/02/2025) riporta da dati ufficiali 24 M CZK (circa 1 M€) pagati in tutto il **2024**, cioè circa 80 k€ al mese. Passare a 2 M$ al mese vorrebbe dire ×25 in meno di due anni: dato di marketing non verificabile. In entrambi i casi la media per sviluppatore è bassa (da circa 11 a 267 $ al mese) e la distribuzione non è pubblica | apify.com/partners/actor-developers; lupa.cz (2026-11-20) |

### Applicazione del criterio
Il criterio chiede se lo scraping è diventato una commodity "al punto che il vantaggio non si misura più nei casi rilevanti". Il verdetto va dato per strato:

| Strato | Stato nel 2026 | Vantaggio misurabile per l'esperto? |
|---|---|---|
| Accesso a pagine pubbliche semplici | Commodity: un LLM scrive lo scraper in minuti; i non esperti ci riescono | **No** |
| Accesso a siti protetti | Si compra (4 API su 11 oltre l'80%); restano pochi target molto difesi | **Marginale**, e dove c'è coincide con rischio legale (aggiramento) e manutenzione non delegabile |
| Estrazione strutturata | Quasi gratis con LLM economici, ma inaffidabile su HTML grezzo senza preparazione | **Piccolo**: saper preparare l'input e validare l'output conta |
| Pipeline continua su centinaia di fonti eterogenee (freschezza, monitoraggio rotture, deduplica, entity matching, storico) | Non commodity: nessuno strumento gestito la fornisce chiavi in mano per un dominio | **Sì**: è ingegneria dei dati più conoscenza di dominio, di cui lo scraping è una parte |
| Giudizio legale sulle fonti (sui generis, ToS, GDPR, art. 70-septies) | Sempre più rilevante | **Sì**, ma è conoscenza, non tecnica |

**Il criterio è soddisfatto per i primi tre strati e non per gli ultimi due.** Quali sono i "casi rilevanti"? Per i business di questa discovery, il valore difendibile sta quasi sempre negli ultimi due: un prodotto che si regge solo sull'accesso o sull'estrazione è replicabile da un concorrente con Firecrawl e Claude Code in pochi giorni.

### Verdetto
**Parziale.** È confutata la forma forte "so fare scraping, quindi ho un vantaggio": l'accesso e l'estrazione sono commodity o si comprano. Regge una forma ridotta e riformulata: **il vantaggio è saper costruire e mantenere a basso costo una pipeline affidabile su fonti frammentate e mutevoli, con dati puliti, storicizzati e legalmente difendibili.** Due conseguenze:
1. **Il vantaggio è più piccolo di quanto il profilo presuppone.** In C4 (vantaggio delle competenze) non vale più "5 di default".
2. **Il vantaggio residuo coincide in larga parte con ciò che fa il datore attuale.** Questo rafforza il conflitto segnalato in [[H16 Founder a tempo parziale]] per le idee che vendono dati.

**Fiducia: media.** I benchmark (Proxyway, arXiv) sono verificati e i listini sono letti direttamente. Mancano serie storiche dei prezzi, la distribuzione dei guadagni su Apify, e benchmark sugli agenti con modelli di fine 2026, probabilmente migliori di quelli misurati. Il trend va contro l'ipotesi.

**Probabilità di successo: circa 10%** [stima]: probabilità che un'idea il cui vantaggio principale è lo scraping (vendita di dataset, Actor o API generiche) arrivi a 50 k€ di margine in 24 mesi con founder a ≤ 5 h/sett. Ragionamento:
- marketplace con media per sviluppatore sotto 300 $ al mese;
- API gestite e incumbent molto capitalizzati;
- penalità di conflitto (H16).
Per idee in cui lo scraping è un mezzo dentro un prodotto di dominio, la probabilità dipende dall'idea e non da H17.

### Raccomandazioni operative (nel verdetto)
- **Ricalibrare C4** in tutte le sessioni:
  - 5 solo se l'idea richiede una pipeline continua su almeno 100 fonti eterogenee senza API, con matching o storico che si accumula;
  - 3 se le fonti sono poche ma mutevoli o protette;
  - 1-2 se basta una API gestita più un LLM.
  Il test pratico è in [[I-H17-1 Test di replicabilità dello scraping]].
- **Non costruire idee sul "so aggirare gli anti-bot"**: rischio legale (Reddit contro SerpApi e Oxylabs, art. 171 L. 633/1941) e manutenzione non delegabile.
- **Comprare l'accesso, costruire il resto.** Usare Zyte, Bright Data o Oxylabs come fornitori per l'accesso, così il team delegato non deve mantenere l'infrastruttura anti-bot. Il budget va su matching, controllo qualità e prodotto. Questo migliora anche C10 (delegabilità).
- **Apify Store solo come test di domanda a basso costo**, non come business: media per sviluppatore bassa, distribuzione non pubblica, dipendenza dalla piattaforma.
- Le idee concrete proposte dall'Entusiasta (monitoraggio prezzi B2B tecnico con matching EAN/MPN; brand protection per le PMI) non sono idee "di H17": vanno valutate dentro H03 (servizio di scraping a prodotto), con la penalità di conflitto di [[H16 Founder a tempo parziale]].

## Idee concrete che sopravvivono
- [[I-H17-1 Test di replicabilità dello scraping]] — punteggio v2: non applicabile (strumento di calibrazione di C4, non un'idea di ricavo)

## Fonti
Tutte accedute il 2026-11-20. Elenco completo nei rapporti [[H17 Entusiasta]] e [[H17 Bucatore]].
- Proxyway, Web Scraping API Report 2025 (verificato dal Giudice): https://proxyway.com/research/web-scraping-api-report-2025
- Bhardwaj, Diwan, Wang, "Beyond BeautifulSoup", arXiv 2601.06301 (verificato dal Giudice): https://arxiv.org/abs/2601.06301
- Apify, pagina per gli sviluppatori di Actor (verificata dal Giudice): https://apify.com/partners/actor-developers
- Lupa.cz, 26/02/2025, pagamenti Apify 2024 (verificato dal Giudice): https://www.lupa.cz/aktuality/scrapuji-vsichni-na-svete-cesky-obchod-s-roboty-pro-stahovani-dat-loni-vyvojarum-vyplatil-24-milionu/
- Online-Mind2Web, "An Illusion of Progress?": https://arxiv.org/html/2504.01382v4
- HAL Princeton, leaderboard Online Mind2Web: https://hal.cs.princeton.edu/online_mind2web
- Listini: https://apify.com/pricing e quelli citati in [[H17 Bucatore]]
- Apify, case study su 98 Actor: https://blog.apify.com/building-98-actors-on-apify-store/
- dev.to, primo Actor dopo 3 mesi: https://dev.to/boo_n/3-months-shipping-my-first-apify-actor-64-users-200mo-and-everything-i-got-wrong-52i7

## Nota sui numeri di Apify
Le note H01 e H17 citano numeri diversi su Apify, perché misurano cose diverse:
- **Numero di actor:** ~124-127 mila è il totale dichiarato da Apify; ~14 mila (13.948) sono gli actor pubblici restituiti dall'API dello Store, scaricati dal giudice di H01.
- **Numero di sviluppatori:** 1.656 (H01) e ~7.500 (H17) vengono da fonti e definizioni diverse (sviluppatori con actor a pagamento contro tutti i creatori); non sono state riconciliate.
- **Pagamenti agli sviluppatori:** la crescita riportata in H01 (0,5 → 1 → 2 M$/mese) rende plausibili i 2 M$/mese, ma restano un dato dichiarato da Apify e non verificato in modo indipendente (H17). La conclusione non cambia: lo sviluppatore tipico incassa ~30 $/mese.

