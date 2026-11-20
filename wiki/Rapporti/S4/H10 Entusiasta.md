---
tipo: rapporto
sessione: S4
ipotesi: H10
ruolo: entusiasta
data: 2026-11-20
---

# H10 — Giochi web su portali (revenue share pubblicitaria): il caso più forte

## 1) Tesi in 5 righe

1. I portali web hanno pubblici molto grandi e in crescita: Poki dichiara 100 M di giocatori al mese e 1.018 giochi oltre 1 M di partite nel 2025. Il catalogo curato conta circa 1.500 titoli, quindi un gioco accettato su Poki ha buone probabilità di avere un volume di partite che si vede nei ricavi. Questo è il dato più forte a favore.
2. Il ricavo è un'economia di portafoglio, non del singolo titolo. Gli studi che vivono di portali (Unico: 25+ giochi e 500 M di partite in circa 2 anni; Emolingo: 5 persone, 8 giochi da più di 10 M di partite ciascuno; Blumgi: un solo sviluppatore, 12 giochi) pubblicano molti titoli semplici con un "motore" riusabile. Questo si può delegare.
3. L'accesso non è chiuso. CrazyGames mette in Basic Launch qualsiasi gioco conforme e decide in base alle metriche. GameDistribution, Playgama e Arkadium (75% allo sviluppatore) offrono altri canali. Poki è selettivo, ma ha un percorso di playtest.
4. L'angolo per questo founder sono i generi puzzle, word e quiz, che su CrazyGames sono la categoria più rappresentata nella top 100 per guadagni. In questi generi il "contenuto" (livelli, domande, sfide quotidiane) si può generare da dati pubblici con pipeline di scraping, pulizia e generazione procedurale. Così si sostituisce in parte il game design con dati, telemetria e iterazione.
5. Il rischio vero resta la distribuzione dei risultati: per singolo gioco la mediana è bassa e i 50 k€ di margine richiedono un portafoglio di decine di milioni di partite all'anno. La competenza di game design mancante si compra (un web game dev con esperienza di portali) e si misura con i playtest.

## 2) Evidenze

| # | Affermazione | Tipo | Fonte | Accesso | Letta direttamente |
|---|---|---|---|---|---|
| E1 | Poki: 100 M di giocatori al mese, più di 1 B di partite al mese, >5 M di giocatori al mese per un gioco ad alte prestazioni | [fatto, autodichiarato] | https://developers.poki.com/ | 2026-11-20 | sì |
| E2 | Poki 2025: 625 M di giocatori, 11,1 B di partite, 227 nuovi giochi, 1.018 giochi con più di 1 M di partite, sviluppatori da 89 paesi | [fatto, autodichiarato] | https://poki.com/blog/2025-at-poki-a-year-in-review | 2026-11-20 | sì |
| E3 | Poki: oltre 1.500 titoli curati, più di 600 sviluppatori, ricavi pubblicitari "fino a 1 M€ l'anno" per gioco/studio | [fatto, autodichiarato] | https://mobidictum.com/pokis-web-gaming-interview-michiel-van-amerongen | 2026-11-20 | sì |
| E4 | Poki revenue share: 100% sul traffico portato dallo sviluppatore, 50/50 sul traffico Poki; esclusiva web (Steam e store esclusi); giochi "hand-picked"; playtest in poche ore | [fatto] | https://developers.poki.com/guide/working-with-poki | 2026-11-20 | sì |
| E5 | Candidatura a Poki: form con build giocabile o video; nessuna soglia pubblica né tasso di accettazione | [fatto] | https://developers.poki.com/guide/share | 2026-11-20 | sì |
| E6 | Emolingo: da 2 a 5 persone; 8 giochi su Poki, ciascuno con più di 10 M di partite; ~800 k partite al giorno; ~3 mesi per gioco a partire da un template di character controller; Poki è il loro unico canale | [fatto, autodichiarato su blog Poki] | https://poki.com/blog/how-emolingo-games-built-business-html5-web-games-poki | 2026-11-20 | sì |
| E7 | Unico Studio: team HTML5 interno, 25+ giochi, 500 M di partite su Poki in circa 2 anni | [fatto, autodichiarato] | https://poki.com/blog/beyond-the-app-stores-unico-studio-reaches-new-heights-on-web | 2026-11-20 | sì |
| E8 | Blumgi Games: sviluppatore solista, 12 giochi su Poki in Construct 3; "i giochi più semplici guadagnano di più", "i più veloci da fare sono spesso i più riusciti"; playtest Poki su circa 500 giocatori | [fatto, autodichiarato] | https://poki.com/blog/developer-spotlight-blumgi-games-part-1 | 2026-11-20 | sì |
| E9 | CrazyGames: Basic Launch da 7 a 21 giorni (minimo 500 partite) senza ads; promozione in Full Launch con revenue share in base a playtime, retention, conversione e CTR rispetto ai benchmark | [fatto] | https://docs.crazygames.com/ | 2026-11-20 | sì |
| E10 | Benchmark CrazyGames per il successo: playtime ≥10 min, D1 retention 10–15%, conversione ≥80%, build <20 MB, CTR nel top 20% della categoria | [fatto] | https://docs.crazygames.com/resources/basic-launch-metrics/ | 2026-11-20 | sì (curl) |
| E11 | CrazyGames: nessuna esclusiva richiesta; payout mensile da 100 €; NET 60 sulla carta, in pratica entro il 10 del mese | [fatto] | https://docs.crazygames.com/faq/ ; https://docs.crazygames.com/payouts/ | 2026-11-20 | sì |
| E12 | CrazyGames: i puzzle sono "la categoria più grande nella top 100 per guadagni totali", con 8,9 impression ads per partita e 21 min di playtime medio; i word game della top 100 sono "tra i top earner", con conversione al 71% | [fatto, dati di piattaforma senza campione dichiarato] | https://docs.crazygames.com/resources/monetizing-puzzle/ ; https://docs.crazygames.com/resources/monetizing-word/ | 2026-11-20 | sì |
| E13 | Strategy della top 100 su CrazyGames: 21 impression per partita, di cui 14 rewarded; clicker: ~5; driving: 7 | [fatto] | https://docs.crazygames.com/resources/monetizing-midcore-idle/ (e pagine sorelle) | 2026-11-20 | sì (curl) |
| E14 | CrazyGames paga "milioni di euro" l'anno agli sviluppatori; il 99% dei ricavi viene dalla pubblicità; crescita >100% l'anno per 3 anni (data non indicata) | [fatto, autodichiarato] | https://www.google.com/ads/publisher/stories/crazy_games/ | 2026-11-20 | sì |
| E15 | Revenue share CrazyGames: termini del jam 2026 al 60% ads e 70% IAP; un forum riporta 40% di base e 60% con esclusiva (2024) | [fatto per il forum; jam riportato da terzi] | https://www.html5gamedevs.com/topic/40362-monetising-html5-games/ | 2026-11-20 | sì (forum); jam no |
| E16 | Arkadium for Developers: 75% allo sviluppatore, distribuzione su 300+ partner (anche siti di quotidiani), fondo da 1 M$, esclusiva richiesta | [fatto] | https://gamesbeat.com/arkadium-confirms-record-year-for-its-browser-games-library/ ; https://gamesbeat.com/arkadium-opens-platform-for-developers-with-75-revenue-share/ | 2026-11-20 | sì il primo; il secondo solo da estratto |
| E17 | Playgama: dichiara 70% fino a 1.000 $, 80% fino a 3.000 $, 90% oltre (sui siti partner); 50% su playgama.com; non esclusivo; review in 24 h; 100+ partner tra cui YouTube Playables, MSN, Facebook, Discord. Riporta GameDistribution al 33% (§3.1 del contratto) | [fatto autodichiarato da un concorrente: diffidare] | https://playgama.com/blog/business-faqs/poki-vs-crazygames-vs-gamedistribution-revenue-share/ | 2026-11-20 | sì |
| E18 | YouTube Playables: revenue share in pilota con creator selezionati; ads interstitial e rewarded via SDK | [fatto] | https://developers.google.com/youtube/gaming/playables/reference/monetization | 2026-11-20 | sì |
| E19 | Twofer Goofer (word game quotidiano, 3 founder, ~4 h a settimana): ~600 $/mese di revenue share pubblicitaria tramite Arkadium (iframe su AARP, Washington Post, USA Today) | [fatto, autodichiarato] | https://starterstory.com/stories/twofer-goofer | 2026-11-20 | sì |
| E20 | Sporcle (quiz web): ~100 M di pagine viste al mese; "senza programmatic non esisteremmo"; 1,4 M di quiz creati dagli utenti | [fatto, autodichiarato, non datato] | https://www.google.co.uk/ads/publisher/stories/sporcle/ | 2026-11-20 | sì |
| E21 | Giochi per testate: News Crossword/Word/Quiz di INN a 49 $/mese più 250 $ di setup; PuzzleMe da 99 $/mese; ParkerSyndication in revenue share | [fatto, solo da estratto] | https://inn.org/resource/news-games/ (403) ; https://amuselabs.com/solutions/local-news/ | 2026-11-20 | no (INN ha bloccato con 403) |
| E22 | fly.pieter.com (gioco web "vibe-coded" con AI): il founder dichiara 1 M$ di ARR in 17 giorni, da sponsorizzazioni e ads in gioco; aveva però un grande pubblico su X e oggi forse è a ~0 | [fatto autodichiarato, non verificato] | https://levels.io/full-multiplayer-python-websockets-game-ai ; https://404media.co/this-game-created-by-ai-vibe-coding-makes-50-000-a-month-yours-probably-wont | 2026-11-20 | sì |
| E23 | Survey Poki 2026 (400 sviluppatori USA/UK): il 36% indica ricavi insufficienti come barriera principale; il 74% trova facile pubblicare sul web | [fatto, survey commissionata da Poki] | https://poki.com/blog/state-of-web-gaming-report-2026 | 2026-11-20 | sì |
| E24 | Distribuzione dei risultati: "un gioco casual decente fa ~50–1.500 $/mese, la maggior parte in basso"; un gioco CrazyGames scende da 50 $/giorno a 5 $/giorno; un caso fa ~400 $ totali; un caso fa €556,92 su 451.327 partite (~1,2 € ogni 1.000) | [fatto riportato da aggregatori SEO, debole] | https://pixelgamecraft.com/blog/html5-game-income/ (cita partnerkin.com, gamezdev.com) | 2026-11-20 | sì l'aggregatore; fonti primarie no |
| E25 | Forum 2018–19: "real numbers ~1–2 $ per gioco" contro "devs >4 k$/mese per gioco" | [fatto, aneddotico] | https://www.html5gamedevs.com/topic/40362-monetising-html5-games/ | 2026-11-20 | sì |

Nota sulle fonti: diverse pagine "benchmark 2026" (cinevva, abratabia, playfox, bountyboard, impulsemediahub) sono contenuti SEO senza dati di prima mano. Abratabia, letta, non cita nessuna fonte e ha link di affiliazione. Non le uso come evidenza.

## 3) Distribuzione dei risultati e numeri chiave

**Ricavo per 1.000 partite (RPM netto per lo sviluppatore): triangolazione [stima]**
- Dall'alto: Poki dichiara studi fino a ~1 M€/anno (E3). Emolingo fa circa 800 k partite al giorno, cioè ~290 M l'anno (E6). Se Emolingo è vicino al tetto dichiarato, l'RPM netto è circa 1 M€ / 290 M ≈ **3–3,5 € ogni 1.000 partite**. È un'inferenza: non sappiamo se Emolingo arrivi davvero a 1 M€.
- Dal basso: un singolo caso storico riporta circa **1,2 € ogni 1.000** su CrazyGames (E24, non verificato alla fonte primaria).
- Dalla meccanica: i top puzzle su CrazyGames fanno 8,9 impression per partita (E12). Con un eCPM lordo misto ipotetico di 1–3 $ (molte impression sono di paesi tier-2/3) e una quota sviluppatore del 50–60%, si ottengono **4–16 $ ogni 1.000 partite** per i giochi migliori. È un'ipotesi: gli eCPM non sono pubblici.
- **Intervallo di lavoro: 1–5 € ogni 1.000 partite** per un buon gioco casual, più alto per i generi con molte rewarded (strategy, idle).

**Volumi**
- Poki: 1.018 giochi oltre 1 M di partite in un anno, su un catalogo di circa 1.500 titoli (E2, E3). Una volta accettato, un gioco Poki ha probabilità alta, a occhio più del 50%, di superare 1 M di partite l'anno. [stima: il catalogo cambia nel tempo, quindi il rapporto è approssimativo]
- Studi di riferimento: Unico ~250 M di partite l'anno con 25+ titoli, cioè ~10 M per titolo l'anno; Emolingo ~290 M l'anno con 8 titoli (E6, E7).
- Ricavo per gioco [stima]: 1 M di partite l'anno porta circa 1–5 k€; 10 M circa 10–50 k€; un hit da 50–100 M circa 50–500 k€.

**Distribuzione (onestà)**
- Mediana su tutti i giochi inviati ai portali: probabilmente vicina a zero. Lo dicono aggregatori e forum (E24, E25), ma nessun dato ufficiale. "Non trovato": nessun portale pubblica una mediana.
- Mediana condizionata all'accettazione o al Full Launch: significativa ma modesta, nell'ordine di migliaia di €/anno per gioco su Poki [stima].
- Code lunghe: pochi titoli fanno decine di milioni di partite. Il modello vincente pubblica molti titoli, scopre i pochi che funzionano e li aggiorna.

**Cosa serve per 50 k€ di margine [stima]**
- Con un team delegato da ~70–110 k€/anno (uno sviluppatore web game, un artista freelance part-time con asset AI, un producer part-time) servono circa 120–160 k€ di ricavi. Con RPM 2–4 € servono **40–80 M di partite l'anno**: per esempio 2–3 titoli da 15–25 M più una coda di 10–15 titoli minori.
- È il livello che Unico ed Emolingo hanno raggiunto in circa 2 anni. È ambizioso ma documentato come possibile (E6, E7).

## 4) Idee concrete (generi e meccaniche originali, nessuna copia)

Logica comune: costruire un **"motore di contenuti"** (pipeline dati più generatore procedurale più telemetria) e pubblicare sopra di esso famiglie di titoli brevi su più portali. CrazyGames e Playgama sono non esclusivi; Poki chiede l'esclusiva web ma porta il pubblico più grande, quindi si decide titolo per titolo.

### Idea 1 — Famiglia di daily puzzle "da dati reali" (geografia, quantità, tempo)
- **Meccanica**: sfide quotidiane e infinite in cui il giocatore deduce, ordina o stima entità reali da indizi numerici: popolazioni, distanze, altitudini, anni, prezzi storici, statistiche sportive pubbliche. Varianti: ordinare per quantità, catene di deduzione su mappe, "più vicino a…". Streak giornaliera e archivio sbloccabile con rewarded, come raccomanda CrazyGames per i word game (E12).
- **Chi paga**: inserzionisti tramite i portali (CrazyGames, Poki, Arkadium al 75%, Playgama). In più licenze B2B a testate e siti, come riferimento da 49 $/mese più setup (E21) o in revenue share. Per l'Italia: quotidiani locali con quiz sulla propria provincia.
- **Ricavo [stima]**: per titolo da 2 a 10 M di partite l'anno, se raggiunge il Full Launch, con l'alta conversione dei word/puzzle (68–71%) e il pubblico fedele. Fanno ~5–30 k€/anno per titolo. Con 4–6 varianti tematiche e localizzazioni: 30–100 k€. Il B2B aggiunge circa 20 testate × 600–1.200 €/anno = 12–24 k€.
- **Delega**: uno sviluppatore web (Phaser o vanilla JS) mantiene il template. Un "data editor" part-time cura dataset e QA. Il founder progetta la pipeline una volta.
- **Perché il founder**: la difficoltà vera è avere contenuti freschi, corretti e localizzati ogni giorno. Scraping, pulizia, deduplicazione e validazione da Wikidata, OSM e fonti statistiche sono esattamente la sua competenza. L'AI generalista sbaglia i fatti, la pipeline verificata no (C4, C6).

### Idea 2 — "Fabbrica di logic puzzle" procedurali con difficoltà calibrata dalla telemetria
- **Meccanica**: generi di logica di pubblico dominio (griglie a vincoli, percorsi, riempimenti numerici, puzzle di spostamento). Un generatore produce livelli con soluzione unica e un solver stima la difficoltà. I dati di gioco (abbandoni per livello) ricalibrano la curva. Ogni gioco ha un tema visivo e un piccolo meta-gioco diverso: collezione, giardino, città (E12 suggerisce meta-game e rewarded per suggerimenti).
- **Chi paga**: inserzionisti tramite portali. I puzzle sono la categoria più rappresentata nella top 100 per guadagni di CrazyGames (E12).
- **Ricavo [stima]**: con il modello Blumgi/Unico (molti titoli semplici), 10–15 titoli in 18 mesi da 1–5 M di partite ciascuno, più 1–2 da oltre 10 M, fanno ~30–80 M di partite. Ai 2–4 € RPM: 60–250 k€/anno.
- **Delega**: uno sviluppatore costruisce un'unica codebase "engine più skin". Un artista freelance o asset AI fa le skin. Un producer gestisce invii, playtest Poki e Basic Launch CrazyGames.
- **Perché il founder**: generatori, solver e pipeline di analisi sono sviluppo software e dati puri. Il game design si riduce alla scelta della meccanica, guidata dai dati di playtest (E8, E10).

### Idea 3 — Idle/tycoon su mappe reali (logistica, reti di trasporto) da OpenStreetMap
- **Meccanica**: il giocatore sceglie una città reale qualsiasi e costruisce una rete (consegne, linee di trasporto, impianti) sulle strade e sui punti di interesse veri. Progressione idle con moltiplicatori "welcome back" in rewarded (E13: strategy fa 21 impression per partita, di cui 14 rewarded). Il motivo per tornare è "la tua città".
- **Chi paga**: inserzionisti tramite i portali. Eventuali IAP cosmetiche dove ammesse (CrazyGames ha IAP su invito, E15).
- **Ricavo [stima]**: è il genere con l'RPM per partita più alto (molte rewarded e sessioni lunghe). Un titolo da 5–15 M di partite, con RPM 6–10 €, fa ~30–150 k€/anno. Rischio di esecuzione più alto rispetto alle idee 1 e 2.
- **Delega**: uno sviluppatore senior web/canvas. Il founder progetta l'ETL delle mappe: tiling, semplificazione, pre-calcolo dei grafi stradali, build sotto 20 MB (E10).
- **Perché il founder**: trasformare dati OSM grezzi in contenuto giocabile, leggero e affidabile per migliaia di città è un problema di dati, e crea una barriera che un concorrente "solo design" non ha (C4, C7).

### Idea 4 — Quiz e trivia multilingua a lunga coda, con domande generate da dati strutturati
- **Meccanica**: quiz a tempo, tematici e verticali (bandiere, capitali, fiumi, monumenti, chimica, sport), con duelli asincroni e classifiche. Le domande vengono da Wikidata e da altre fonti, verificate e localizzate in 20–30 lingue. Molte lingue sono poco servite dai portali.
- **Chi paga**: inserzionisti tramite i portali e Playgama (100+ partner, inclusi YouTube Playables e MSN, E17). Il precedente di Sporcle (~100 M di pagine viste al mese con programmatic, E20) mostra che il genere quiz regge un business pubblicitario.
- **Ricavo [stima]**: per singolo titolo RPM più basso (sessioni corte), ma la localizzazione moltiplica le superfici. 10 verticali × 20 lingue × 1–3 portali dà molte "slot" di scoperta. 20–60 k€/anno se 3–4 verticali superano i 5 M di partite.
- **Delega**: uno sviluppatore più un QA linguistico part-time (spot-check su campioni).
- **Perché il founder**: generazione e verifica fattuale scalabile, deduplicazione e controllo dell'ambiguità delle domande sono lavoro da dati, non da designer.

### Idea 5 (trasversale) — Studio "data-driven" di portafoglio: market intelligence sui cataloghi pubblici dei portali
- **Cosa**: non è un gioco ma il metodo con cui scegliere i giochi. Si monitorano nel tempo i cataloghi pubblici di portali e aggregatori: categorie, nuove uscite, rating e numero di voti dove visibili, posizioni in home e nei tag. Lo scopo è trovare nicchie di genere poco servite rispetto alla domanda e decidere cosa produrre e quali copertine testare. Il CTR è una metrica di promozione su CrazyGames (E9, E10).
- **Chi paga**: indirettamente i portali, tramite più titoli che passano i benchmark.
- **Ricavo**: aumenta il tasso di successo delle idee 1–4. Non è stimabile a parte.
- **Perché il founder**: è la sua competenza distintiva applicata al problema principale del modello, cioè scegliere cosa produrre. Bisogna rispettare termini d'uso e rate limit dei portali.

## 5) Criteri di confutazione, uno per uno (punto di vista dell'Entusiasta)

1. **"Ricavi mediani per gioco trascurabili"**: *parzialmente vero, ma riguarda l'unità di analisi sbagliata*. Sulla popolazione di tutti i giochi inviati la mediana è probabilmente vicina a zero (E24, E25: aneddotico, nessun dato ufficiale). Per i giochi che passano la selezione Poki, la maggioranza del catalogo ha superato 1 M di partite in un anno (E2, E3), cioè ~1–5 k€ per gioco [stima]: non trascurabile ma piccolo. Gli studi di riferimento lavorano a portafoglio (E6, E7, E8) e il criterio va letto a livello di studio. A quel livello ci sono studi da centinaia di milioni di partite e fino a ~1 M€/anno (E3). Verdetto dell'Entusiasta: **non confutata, ma la tesi regge solo con un modello a portafoglio**.
2. **"I portali accettano o promuovono pochissimi titoli"**: *in gran parte falso*. Poki è selettivo (227 nuovi giochi nel 2025, E2), ma 1.018 giochi hanno superato 1 M di partite. CrazyGames mette ogni gioco conforme in Basic Launch e promuove in base alle metriche, con benchmark pubblici (E9, E10). Arkadium (E16), Playgama (E17) e GameDistribution offrono canali aggiuntivi non esclusivi o a quota alta. Verdetto: **non confutata**. La promozione è meritocratica e misurabile, non una lotteria opaca.
3. **"Servono competenze di game design che il team non ha"**: *rischio reale, ma mitigabile*. I portali danno strumenti di feedback quantitativo: playtest Poki su circa 500 giocatori con funnel (E8), KPI di Basic Launch con soglie pubbliche (E10), guide per genere su come monetizzare (E12, E13). Gli sviluppatori di successo dicono che i giochi più semplici e veloci da fare sono spesso i migliori (E8). Emolingo parte da template (E6). Nei generi puzzle, word e quiz il contenuto si genera da dati. La competenza mancante si compra assumendo uno sviluppatore che ha già pubblicato su portali. Verdetto: **non confutata, a condizione di assumere quella persona e di limitarsi a generi data/puzzle**. È il criterio più vicino a scattare.

## 6) Cosa non ho trovato / limiti

- **Revenue share ufficiale di CrazyGames**: non pubblicato. Ci sono solo il jam (60/70) e un forum (40%, 60% con esclusiva).
- **GameDistribution**: il sito developers non è stato letto (pagina vuota via fetch). Il 33% viene da Playgama, cioè da un concorrente.
- **RPM o eCPM ufficiali** di qualunque portale: non trovati. Le cifre sono stime o aneddoti.
- **Mediana dei ricavi per gioco e tasso di accettazione di Poki**: non trovati. Nessun portale li pubblica.
- **Ricavi reali di Emolingo, Unico e Blumgi**: non dichiarati. La stima "1 M€ per circa 290 M di partite" è un'inferenza.
- **Il caso "€556,92 su 451.327 partite"**: non trovato alla fonte primaria (anche una ricerca mirata non lo trova).
- **Reddit**: bloccato (HTTP 403 su www e old.reddit). Hacker News (API Algolia): nessun post-mortem utile con numeri.
- **INN News Games**: 403, prezzi presi solo dall'estratto del motore di ricerca.
- **YouTube Playables, Telegram, Facebook Instant**: ricavi per sviluppatore non trovati. Playables è in pilota con creator selezionati.
- **Politica sui giochi fatti con AI**: nessuna regola specifica trovata su CrazyGames (solo una fonte di terzi). Requisiti generali di qualità e originalità: https://docs.crazygames.com/requirements/quality/ (letta).
- **Costi del team delegato**: stime mie senza fonte.

## 7) Conteggio

- **WebSearch usate**: 19 su 25.
- **WebFetch**: ~24 (di cui 3 falliti: bebeez 503, inn.org 403, gamedistribution vuoto).
- **curl**: docs CrazyGames (sitemap e ~15 pagine), test Reddit (403), API HN Algolia (4 query).
