---
tipo: rapporto
sessione: S4
ipotesi: H10
ruolo: bucatore
data: 2026-11-20
---

# H10 — Giochi web su portali: rapporto del Bucatore

## 1) Tesi in 5 righe

1. I portali pagano la quota di ricavo per partita, non per gioco, e la resa per partita è bassa: le poche misure pubbliche danno all'incirca 1–1,5 € ogni 1.000 partite netti allo sviluppatore. Per arrivare a 50 k€/anno di margine servono decine di milioni di partite all'anno.
2. Ho scaricato i dati pubblici di CrazyGames. I 700 giochi più recenti hanno una mediana di circa 57 mila partite totali, quindi una mediana di ricavo di qualche centinaio di euro a vita. Solo il 4% supera 1 milione di partite.
3. Il portale migliore (Poki) è curato a mano: ha pubblicato 227 giochi in tutto il 2025, con un contratto preferito in esclusiva web per 5 anni e una ripartizione 50/50. CrazyGames ammette i giochi con una prova a imbuto su metriche messe a confronto con gli altri giochi della piattaforma.
4. Entrambi i portali rifiutano esplicitamente cloni, template e produzioni AI "grezze". Il criterio decisivo è la qualità del ciclo di gioco, cioè proprio la competenza di game design che il founder non ha. Il vantaggio scraping/dati non conta quasi nulla.
5. Verdetto del Bucatore: il primo criterio di confutazione è **sostanzialmente soddisfatto** (ricavi mediani trascurabili, distribuzione a legge di potenza). Il secondo (pochissimi titoli accettati) è **soddisfatto per Poki e parzialmente per CrazyGames**. Il terzo (servono competenze di game design) è **soddisfatto**. Il modello sopravvive solo come "studio di game design delegato", cioè un'altra ipotesi.

## 2) Evidenze

| # | Affermazione | Tipo | Fonte (URL) | Accesso | Letta direttamente |
|---|---|---|---|---|---|
| 1 | Poki: 50/50 sul traffico che porta Poki, 100% allo sviluppatore sul traffico diretto | [fatto] | https://developers.poki.com/guide/working-with-poki | 2026-11-20 | sì |
| 2 | Poki preferisce l'esclusiva web (browser, Discord, YouTube Playables) per 5 anni "indicativi". L'alternativa è una licenza una tantum senza revenue share né marketing | [fatto] | https://developers.poki.com/guide/revenue-deal-types | 2026-11-20 | sì |
| 3 | Poki: 227 nuove uscite in tutto il 2025; 1.018 giochi oltre 1 milione di partite; 11,1 miliardi di partite; 65 dipendenti | [fatto] | https://poki.com/blog/2025-at-poki-a-year-in-review | 2026-11-20 | sì |
| 4 | Poki: >600 sviluppatori partner, uscite finalizzate "dopo innumerevoli revisioni"; alcuni studi arrivano a circa 1 M$/anno (solo il dato di vertice, nessuna mediana) | [fatto] (il dato di vertice è autodichiarato) | https://www.pocketgamer.biz/inside-pokis-vision-for-the-future-of-browser-gaming/ (15/07/2026) | 2026-11-20 | sì |
| 5 | Imbuto Poki: candidatura → Web Fit Test (circa 10.000 giocatori, CTR / tempo sulla pagina / conversione a partita, confrontati con la media di categoria) → revisione finale di 1–2 settimane su originalità e unicità nella categoria → rilascio in 2–3 mesi | [fatto] | https://developers.poki.com/guide/web-fit-test ; https://developers.poki.com/guide/final-review | 2026-11-20 | sì |
| 6 | Soglie minime indicate da Poki: ≥65% di conversione a partita e ≥5 min di gioco medio (≥10 min per gestionali e simulazioni) | [fatto] | https://developers.poki.com/guide/reading-results | 2026-11-20 | sì |
| 7 | Poki: "I cloni di hit esistenti non vengono promossi"; template e asset flip non contano come originali; "l'arte AI non rende originale un clone"; motivi di rifiuto: bug, peso eccessivo, "UX confusa, grafica scarsa o incoerente" | [fatto] | https://developers.poki.com/guide/what-we-look-for ; https://developers.poki.com/guide/content-player-safety | 2026-11-20 | sì |
| 8 | Poki non pubblica tassi di accettazione né volumi di candidature. Il form avverte che non risponde a tutte le candidature | [fatto] (assenza del dato) | https://developers.poki.com/guide/share ; ricerca web | 2026-11-20 | sì |
| 9 | CrazyGames: Basic Launch su pubblico limitato per 7–21 giorni senza monetizzazione. Se la maggior parte delle metriche è sotto benchmark il gioco "non può procedere" e va ripresentato come gioco nuovo. Il revenue share parte solo con la Full Launch | [fatto] | https://docs.crazygames.com/ | 2026-11-20 | sì |
| 10 | CrazyGames: nessuna percentuale di revenue share nella documentazione; "non forniamo stime di guadagno"; rifiuta i "contenuti non originali (cloni, asset flip)"; payout minimo 100 € | [fatto] | https://docs.crazygames.com/faq/ | 2026-11-20 | sì |
| 11 | Nel termini della jam GameMaker 2026 CrazyGames indica 60% della pubblicità e 70% degli acquisti in-game; GameDistribution 33% del netto; Y8 50%; GameMonetize 45% | [fatto] di fonte secondaria (Cinevva vende un tool per creare giochi) | https://app.cinevva.com/guides/web-game-monetization | 2026-11-20 | sì |
| 12 | Unico dato pubblico ricavo/partite su CrazyGames: 451.327 partite → 556,92 € (circa 1,23 €/1.000 partite netti); Kongregate 104.444 partite → 163,79 $ | [fatto] (dato vecchio, giochi 2018) | stessa pagina Cinevva, che riporta il blog dello sviluppatore | 2026-11-20 | sì |
| 13 | Post-mortem di 8 giochi (2018): CrazyGames 238,68 $ su 164.599 partite (circa 1,45 $/1.000); totale per 8 giochi 625,78 $ su tutte le piattaforme | [fatto] | https://gamedev.net/blogs/entry/2265795-earning-and-statistics-from-my-8-games-android-webgl-some%20thoughts/ | 2026-11-20 | sì |
| 14 | Forum html5gamedevs (2019): "~$1 eCPM è la normalità per i giochi web"; "un paio di centinaia di dollari al mese" con un catalogo di giochi di qualità | [fatto] (aneddotico) | https://html5gamedevs.com/topic/43993-real-talk%3F-does-anyone-make-a-decent-amount-of-%3F-money-through-ad-revenue%3F | 2026-11-20 | sì |
| 15 | Portale Lagged.com: gCPM mediano da 1,65 $ a 3,11 $ dopo l'integrazione con Playgama (fine 2025) | [fatto] (case study del fornitore, quindi di parte) | https://playgama.com/blog/?p=13588 | 2026-11-20 | sì |
| 16 | **Mio scraping**: 700 giochi più recenti su CrazyGames (/new, pagine 1–10, cover caricate tra giugno e novembre 2026). Partite totali: mediana 57.156, p25 23.216, p75 161.449, p90 478.531, p99 circa 3,0 M. Il 4,1% supera 1 M. Il top 10% raccoglie il 65,4% delle partite | [fatto] (dato raccolto) + età variabile | https://www.crazygames.com/new … /new/10 (JSON `__NEXT_DATA__`) | 2026-11-20 | sì |
| 17 | **Mio scraping**: campione casuale di 298 giochi dal sitemap EN (4.774 giochi). 108 con partite osservate, gli altri stimati dai voti positivi (rapporto mediano like/partite 0,0153 su 1.922 giochi). Partite a vita: mediana circa 0,6 M, p90 circa 4 M; il 3% supera 10 M; il top 10% raccoglie circa il 72%. Età mediana: aggiunti intorno al 2022–2023. Campione **solo di superstiti** | [stima] su dati raccolti | https://www.crazygames.com/en/sitemap + pagine /game/* | 2026-11-20 | sì |
| 18 | Studio CrazyGames mag 2025–mag 2026: hypercasual 78,8% del tempo di gioco, puzzle 20,6%, tutti gli altri generi 0,5% | [fatto] (dato di piattaforma riportato dalla stampa) | https://respawn.outlookindia.com/gaming/gaming-news/hypercasual-and-puzzle-titles-dominate-99-of-web-browser-gaming | 2026-11-20 | sì |
| 19 | Rapporto Poki 2026: il 36% degli sviluppatori indica i ricavi insufficienti come barriera al web; nessun dato su ricavi, eCPM o concentrazione | [fatto] | https://poki.com/blog/state-of-web-gaming-report-2026 | 2026-11-20 | sì |
| 20 | I casi di successo citati da Poki (Blumgi, Emolingo) non dichiarano ricavi. Blumgi ha circa 15 anni di animazione e game dev (Madbox, co-autore di Stickman Hook). Emolingo ha 5 persone full-time con game designer e artista 3D, e circa 3 mesi per titolo | [fatto] | https://poki.com/blog/blumgi-my-journey-on-the-web-how-i-reached-100m-players-in-2-years-as-an-indie-game-developer ; https://poki.com/blog/how-emolingo-games-built-business-html5-web-games-poki | 2026-11-20 | sì |
| 21 | Kongregate (portale storico) ha smesso di accettare nuovi giochi web e ha licenziato (luglio 2020) | [fatto] | https://www.pocketgamer.biz/kongregate-layoffs-no-new-game-submissions | 2026-11-20 | sì (titolo e data) |
| 22 | Ondata di giochi AI: su itch.io le nuove pagine di gioco al giorno sono raddoppiate in 2 mesi, mentre "download e acquisti non sono raddoppiati"; itch ha cancellato "un paio di terabyte di AI slop" | [fatto] | https://www.pcgamer.com/gaming-industry/game-development/its-not-just-steam-new-game-pages-created-per-day-on-itch-io-has-doubled-in-the-last-two-months-with-ai-slop-the-likely-culprit/ (01/11/2026) | 2026-11-20 | parziale (articolo troncato) |
| 23 | Sito web di giochi a 130k MAU: AdSense limitato due volte per traffico non valido; 1.279,55 $ in 3 mesi con Venatus | [fatto] (autodichiarato) | https://dev.to/yitao/post-mortem-how-my-web-game-hit-130k-mau-with-0-marketing-and-survived-an-adsense-ban-883 | 2026-11-20 | sì |
| 24 | Nell'HTML di CrazyGames compaiono esperimenti attivi di abbonamento "ad-free" (`czyExpClientAdFreeSubscription`, `czyExpClientAdFree_CZY_21530`) e una pagina "Ad-free options" | [fatto]; l'impatto sui ricavi degli sviluppatori è [stima] | https://www.crazygames.com/ (sorgente della pagina) | 2026-11-20 | sì |
| 25 | Le stime di terzi del tipo "200–2.000 $/mese per un buon gioco casual" o "500–3.000 $/mese per il primo gioco su Poki" arrivano da guide di venditori di tool (Cinevva) o di concorrenti (Playgama), senza dati a supporto | [fatto] (che sono non verificate) | risultati di ricerca; app.cinevva.com/guides/publish-game-poki | 2026-11-20 | no (solo estratti) |

## 3) Distribuzione dei risultati e numeri chiave

**Resa per partita (ricavo netto allo sviluppatore).** Tutte le misure pubbliche indipendenti stanno tra **1 e 1,5 €/$ ogni 1.000 partite** (evidenze 12, 13, 14). Sono dati vecchi. Gli eCPM attuali potrebbero essere 2–3 volte più alti, come suggerisce il caso Lagged (15, di parte). Uso quindi un intervallo di lavoro di **1–5 € per 1.000 partite** [stima, prudenzialmente generosa verso l'alto].

**Distribuzione delle partite [fatto, dal mio scraping].**

| Gruppo | Mediana partite | p90 | p99 | Quota del top 10% |
|---|---|---|---|---|
| 700 giochi recenti su CrazyGames (età 0–5 mesi) | 57 k | 479 k | 3,0 M | 65% |
| Catalogo superstite (sitemap, età mediana circa 3 anni) | circa 0,6 M a vita | circa 4 M | >10 M (3%) | circa 72% |

**Traduzione in euro [stima].**
- Gioco recente mediano: 57 k partite × 1–5 €/1.000 = **circa 60–290 € incassati finora**.
- Gioco superstite mediano: 0,6 M partite a vita × 1–5 €/1.000 = **600–3.000 € in circa 3 anni**, cioè **200–1.000 €/anno**.
- Il p90 del catalogo superstite: 4 M partite → **4–20 k€ a vita**.
- Obiettivo 50 k€/anno di **margine**. Con costi di produzione delegata stimati a 15–40 k€/anno, servono circa 65–90 k€ di ricavo, cioè **13–90 milioni di partite all'anno** a seconda della resa. Questo corrisponde al top 1–3% dei giochi di CrazyGames. In pratica serve un portafoglio con almeno 1–2 hit, oppure 30–100 giochi mediani, cosa che non scala con un team delegato.
- Bias del sopravvissuto: il sitemap contiene solo i giochi pubblicati. Quelli bocciati al Basic Launch (senza monetizzazione) o mai accettati da Poki non compaiono, quindi la mediana vera **per gioco tentato** è inferiore a quella mostrata.

**Selettività.**
- Poki: 227 uscite in un anno su 600+ partner [fatto]. Il tasso di accettazione non è pubblicato: **non trovato**.
- CrazyGames: circa 140 nuovi giochi al mese nella lista /new [stima, dalle date delle cover]. Il tasso di passaggio Basic → Full Launch non è pubblicato: **non trovato**.

## 4) Idee concrete attaccate

1. **Clone di genere hyper-casual** (runner, merge, "stack", fisica casual).
   - È il genere che domina il tempo di gioco (78,8%), quindi è il più affollato.
   - Poki e CrazyGames bocciano esplicitamente cloni e asset flip, e giudicano l'"unicità nella categoria".
   - La metrica decisiva è il CTR della miniatura contro la media di categoria (evidenza 5), cioè arte e marketing visivo.
   - Il vantaggio del founder (dati) è nullo.
   - Il ricavo mediano è nell'ordine delle centinaia di euro.
2. **Io-game multiplayer.**
   - Costi server continui, pagati con eCPM web bassi. Il caso 1047 Games (Splitgate) mostra giochi online chiusi perché non coprivano i server (risultato di ricerca; gamedev.net, lettura non diretta).
   - Servono netcode, anti-cheat e moderazione, che sono operazioni continue e difficili da delegare a basso costo.
   - Nella categoria .io i vincitori storici prendono quasi tutto: sulla pagina /t/io la mediana dei 15 titoli in vetrina è 17 M di partite e il massimo 500 M [fatto, dal mio scraping].
   - Un nuovo io-game senza massa critica di giocatori concorrenti è vuoto, quindi trattiene peggio, quindi fallisce il Basic Launch.
3. **Idle/clicker.**
   - Funziona solo con una progressione bilanciata a lungo termine: puro game design economico.
   - Poki chiede ≥10 min di sessione per i gestionali.
   - Il genere è ultra-saturo: 78 su 700 nuovi giochi CrazyGames sono "Clicker", l'11% [fatto, dal mio scraping].
   - Gli idle hanno pochi stacchi naturali per gli interstiziali (CrazyGames limita a un interstiziale ogni 3 minuti) e dipendono dai rewarded.
4. **Quiz/trivia generati da dati.** È l'idea che più userebbe lo scraping, ma:
   - i dati estratti dal web vanno resi PEGI-12, accurati e localizzati (l'inglese è obbligatorio su CrazyGames);
   - un trivia è testo, e un modello AI generalista lo produce in pochi secondi (C6 debole);
   - tutti i generi diversi da hypercasual e puzzle valgono lo 0,5% del tempo di gioco CrazyGames (se il trivia ricade lì: **non verificato** come viene classificato);
   - le sessioni brevi danno poche impression;
   - il vantaggio dei dati è facilmente replicabile.
5. **Puzzle quotidiano (stile "daily").**
   - Il valore sta nella ritenzione giornaliera, che sui portali va a beneficio del portale (il giocatore torna su Poki/CrazyGames, non sul tuo gioco).
   - Il 100% del ricavo Poki vale solo sul traffico diretto, ma senza un pubblico proprio quel traffico non c'è.
   - Il "daily" funziona come marchio proprio (Wordle), cioè fuori dai portali, e quindi è un'altra ipotesi.
   - Su CrazyGames la vetrina /t/daily ha una mediana di circa 0,4 M partite per i 15 titoli in vetrina, molto meno di puzzle (6,2 M) [fatto, dal mio scraping].
6. **Fabbrica di giochi assistita da AI (volume).**
   - Poki e CrazyGames vietano template e asset flip e chiedono che l'output AI sia "pesantemente editato" (evidenza 7).
   - itch.io è sommerso di giochi AI con download fermi (evidenza 22).
   - Il volume aumenta i rifiuti, non i ricavi. Su CrazyGames un gioco bocciato "va ripresentato come gioco nuovo" con "miglioramenti significativi".

## 5) Criteri di confutazione, uno per uno

| Criterio | Esito dal punto di vista del Bucatore | Perché |
|---|---|---|
| Ricavi mediani per gioco trascurabili | **Soddisfatto** | Mediana stimata di 60–290 € per i giochi recenti e 200–1.000 €/anno per i superstiti (sezione 3). Concentrazione: il top 10% fa il 65–72% delle partite. Nessun portale pubblica mediane; i casi pubblicizzati non riportano ricavi. Incertezza: la resa per 1.000 partite è ricostruita da dati 2018–2019 (possibile errore ×2–×3), ma anche ×5 lascia la mediana sotto i 5 k€/anno. |
| I portali accettano o promuovono pochissimi titoli | **Soddisfatto per Poki, parziale per CrazyGames** | Poki: 227 uscite in un anno, curatela a mano, esclusiva web di 5 anni come contratto preferito. CrazyGames pubblica circa 140 giochi al mese, ma attraverso una prova con benchmark relativi e senza monetizzazione fino alla Full Launch. Tassi esatti: non trovati. |
| Servono competenze di game design che il team non ha | **Soddisfatto** | Tutte le porte d'accesso (CTR della miniatura, conversione a partita ≥65%, gioco ≥5 min, originalità, "grafica coerente") misurano game design e arte. I casi di successo hanno game designer e artisti dedicati (Emolingo) o 15 anni di mestiere (Blumgi). La competenza distintiva del founder (scraping/dati) non entra in nessuna metrica. |

**Delegabilità.** Delegare richiede di assumere un game designer e un artista, a un costo di decine di k€/anno [stima], contro un ricavo atteso per gioco di centinaia o migliaia di euro. Il founder a ≤5 h/settimana non ha strumenti per giudicare la qualità del gioco, che è il fattore decisivo.

**Dipendenza dalla piattaforma.**
- L'esclusiva Poki di 5 anni blocca gli altri canali web.
- I portali cambiano le metriche unilateralmente (CrazyGames aggiunge il CTR dal 23/11/2026).
- Esperimenti di abbonamento ad-free su CrazyGames.
- Precedente di Kongregate (chiusura agli invii nel 2020).
- Il rischio AdSense (traffico non valido) vale se si usa un sito proprio.

## 6) Cosa non ho trovato / limiti

- **Tassi di accettazione** di Poki, CrazyGames e GameDistribution: non pubblicati, non trovati.
- **Percentuale ufficiale** di revenue share CrazyGames (solo la cifra della jam, fonte secondaria) e di GameDistribution (33% da fonte secondaria).
- **eCPM o ricavo per 1.000 partite recente e indipendente** sui portali: non trovato. Uso dati 2018–2019 più un case study di parte.
- **Fatturato di Poki B.V.**: non trovato. Un aggregatore del registro olandese riporta un utile 2024 di circa 3,0 M€ con circa 40 FTE, ma l'etichetta della voce è ambigua e la fonte non è stata letta direttamente.
- **Il mio scraping** misura le partite totali, non i ricavi. L'età dei giochi non è uniforme, e per il campione di catalogo 190 giochi su 298 sono stimati dai like (rapporto like/partite tra 0,011 e 0,021 nell'intervallo interquartile, quindi ±40% sulla singola stima).
- **Siti bloccati**: Reddit (HTTP 403 su r/gamedev search.json) e Indie Hackers (Cloudflare, 403) bloccati, quindi i post-mortem lì non sono stati letti. HN via Algolia non ha dato risultati pertinenti. L'articolo di PC Gamer è troncato (nessuna cifra assoluta).
- I dataset grezzi sono in `/tmp/claude-0/-home-user-ideas/41c20cf9-f4a6-54b2-8f06-aa78ca7d4c80/scratchpad/h10/` (new.json, cat2.jsonl, tagrows.jsonl), una cartella temporanea che può essere cancellata.

## 7) Conteggio

- WebSearch usate: **15 su 25**.
- WebFetch: circa 27.
- curl/scraping: circa 1.300 richieste a crazygames.com con pausa tra una e l'altra (sitemap, 10 pagine /new, 674 pagine tag e categoria, 2×300 pagine gioco), più sitemap e pagine guida di developers.poki.com e docs.crazygames.com, gamedistribution.com, partners.gamepix.com, pocketgamer.biz, reddit.com (bloccato) e indiehackers.com (bloccato).
