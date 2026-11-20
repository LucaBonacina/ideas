---
tipo: rapporto
sessione: S4
ipotesi: H11
ruolo: entusiasta
data: 2026-11-20
---

# H11 — Giochi quotidiani basati su dati, anche venduti a editori (ruolo: Entusiasta)

## 1) Tesi in 5 righe

1. Gli editori europei e italiani stanno aprendo sezioni giochi adesso: Il Messaggero, con una piattaforma unica per 6 testate del gruppo (novembre 2026); Giornale di Brescia, con giochi riservati agli abbonati GdB+; Repubblica, con giochi per abbonati Premium; Tamedia (dicembre 2025, poi aprile 2026). La ragione dichiarata è sempre fidelizzazione e abbonamenti.
2. Il mercato B2B esiste ed è *self-serve e a prezzo basso*: PuzzleMe 99-249 $/mese, Playgent 99 $/mese, News Games (tramite INN) 49 $/mese + 250 $ di setup. Azerion/GameDistribution ha già 20 portali white-label per giornali attraverso una agenzia di syndication. Il prezzo basso significa un ciclo di vendita corto e una decisione presa da una sola persona (redattore digitale o responsabile prodotto). Non servono gare.
3. I fornitori consolidati vendono *strumenti* o *contenuti generici in inglese* (cruciverba, sudoku, cloni di Wordle). In italiano manca un fornitore che consegni ogni giorno, senza lavoro redazionale, giochi locali e su dati freschi (prezzi, carburanti, notizie della settimana della testata). Contexto non ha l'italiano: l'ho verificato nel bundle JS.
4. Per il founder l'angolo giusto è "contenuto auto-generato da dati raccolti via scraping, venduto come feed": costo marginale quasi nullo per testata, multilingua, delegabile a 1 persona operativa. Il B2C (sito proprio) fa da vetrina e da canale SEO, non è la fonte primaria di ricavo.
5. Il caso più forte non è "fare il nuovo Wordle": quello è un lancio di dadi, con mediana degli indie a poche migliaia di $/anno. È fare il **fornitore italiano ed europeo di giochi locali data-driven per le centinaia di testate locali** che oggi hanno solo il sudoku.

## 2) Evidenze

| # | Affermazione | Tipo | Fonte URL | Accesso | Letta direttamente |
|---|---|---|---|---|---|
| E1 | PuzzleMe (Amuse Labs) ha un listino pubblico: Plus 99 $/mese (90 $ annuale), Professional 249 $/mese (229 $), Enterprise "usage-based starting at $500 per month". I limiti di game load vanno da 2.000 a 5.000 al mese, illimitati su Enterprise. Offre un "Puzzle Feed" di giochi pronti ogni giorno | fatto | https://amuselabs.com/pricing/ | 2026-11-20 | sì (curl) |
| E2 | PuzzleMe ha una pagina dedicata ai siti di notizie locali, con due modelli: "Puzzle Feed... Zero ongoing effort" oppure "build your own games from your news articles and local stories". Clienti locali citati: Marietta Daily Journal, cleveland.com, MLive, NJ.com, Oregon Live, Texas Monthly. Dichiarazioni del vendor: i giocatori sono "nearly 6x more likely to register" e "3x more likely to return" | fatto (claim del vendor) | https://amuselabs.com/solutions/local-news/ | 2026-11-20 | sì (curl) |
| E3 | Clienti grandi di PuzzleMe: Washington Post, LA Times, The Atlantic, El País (ad-supported); app abbonamento del Guardian; New York Post (gioco daily sui titoli) | fatto (claim del vendor) | https://amuselabs.com/solutions/publishers/ ; brochure https://amuselabs.com/wp-content/uploads/2022/02/PuzzleMe_Brochure.pdf | 2026-11-20 | sì la pagina publishers; la brochure solo da estratto |
| E4 | Playgent: white-label giochi per editori, 70+ giochi, Team 99 $/mese, Enterprise su misura; AI a consumo ("Forge" crea quiz dagli articoli). Clienti citati: Fox News, TMZ, Ynet, DPG Media (NU.nl) | fatto (claim del vendor) | https://playgent.com/solutions/publishers | 2026-11-20 | sì (WebFetch) |
| E5 | News Games (listino INN): News Crossword, News Word, News Mix e News Quiz a 49 $/mese ciascuno + 250 $ di setup; crossword "fully automated – no human involvement required". Una seconda pagina INN indica 49 $/mese sotto i 10.000 iscritti alla newsletter e 999 $/mese sopra i 500.000. Il vendor dichiara che i clienti generano "thousands of dollars" all'anno da sponsor | fatto (da estratti; le pagine INN rispondono 403) | https://inn.org/resource/news-games/ ; https://inn.org/?p=1063303 | 2026-11-20 | no (403, solo estratti WebSearch) |
| E6 | Azerion/GameDistribution ha lanciato un portale giochi white-label per il Tampa Bay Times (21/10/2026), con pubblicità venduta da Azerion. Tramite Tribune Content Agency la partnership "now powers 20 gaming portals". Altri white-label: spiele.gutefrage.net (DE, 30/6/2026) e Correio (BR) | fatto (claim Azerion via ppc.land) | https://ppc.land/tampa-bay-times-gains-azerion-games-portal-as-tribune-network-hits-20/ | 2026-11-20 | sì |
| E7 | Hearst ha acquisito Puzzmo (dicembre 2023) e lo concede in licenza ad altri editori: Postmedia (oltre 120 testate canadesi), Polygon, Digg, theSkimm. Puzzmo Plus costa 35 $/anno per gli abbonati Postmedia contro 55 $ di listino. Le condizioni economiche della licenza non sono pubbliche | fatto | https://ca.finance.yahoo.com/news/postmedia-launches-puzzmo-hearst-newspapers-150000835.html ; https://www.pocketgamer.biz/zach-gage-and-orta-theroxs-puzzle-platform-puzzmo-acquired-by-hearst-newspapers | 2026-11-20 | no (estratti WebSearch) |
| E8 | Arkadium: "most partnerships share revenue from programmatic ads and micro-transactions"; "requires little investment unless publishers want bespoke games". Partner citati: Mashable, Daily Mail. Altri fornitori citati nello stesso pezzo: Lil Snack (BuzzFeed), Movie Grid (Vulture), Amuse Labs (Vulture) | fatto | https://corporate.arkadium.com/newsroom/publishers-promote-play/ (copia di Axios 27/8/2024) | 2026-11-20 | sì |
| E9 | Lil Snack (giochi daily per editori, BuzzFeed) ha raccolto circa 3,1 M$ nell'aprile 2024 (Lerer Hippeau, a16z Speedrun e altri). Prezzi non trovati | fatto | https://www.pocketgamer.biz/lil-snack-lands-3-million-in-funding-for-ai-gaming-tools | 2026-11-20 | no (estratto) |
| E10 | Keesing ("world leader in Braintainment") ha acquisito CoolGames (HTML5) nel luglio 2023 per offrire ai "B2B media clients... a much broader selection of both puzzles and casual games". Keesing Italia ha comprato Sudoku S.r.l. (novembre 2022). Il gruppo è di BC Partners dal 2021 | fatto | https://www.pocketgamer.biz/keesing-media-group-acquires-casual-games-developer-coolgames ; https://www.squirepattonboggs.com/news/squire-patton-boggs-advises-shareholders-on-the-sale-of-sudoku-to-keesing-media-group/ | 2026-11-20 | sì il primo; il secondo da estratto |
| E11 | Il consolidamento dei puzzle vale cifre importanti: Ergon Capital ha acquisito Keesing da Telegraaf per circa 150 M€ | fatto (solo dal titolo) | https://www.unquote.com/benelux/official-record/3005846/ergon-capital-acquires-keesing-from-telegraaf-for-eur150m | 2026-11-20 | no (titolo nell'estratto) |
| E12 | **Il Messaggero** ha lanciato la sezione Giochi l'11/11/2026: 6 giochi (Cinque Lettere, Cruciverba, Dimmi Quando, Lettere in Disordine, Sallo!, Sudoku), classifiche giornaliere e mensili, archivio riservato agli abbonati. Nel bundle JS di giochi.ilmessaggero.it compaiono anche Il Mattino, Il Gazzettino, Corriere Adriatico, Leggo e Quotidiano di Puglia: è **una piattaforma multi-testata** del gruppo, su infrastruttura cedsdigital (apparentemente interna) | fatto | https://www.ilmessaggero.it/videogames/giochi_messaggero_come_giocare_guida-9883239.html ; https://giochi.ilmessaggero.it/dist/assets/index-DuTKJPhW.js | 2026-11-20 | sì (curl) |
| E13 | **Giornale di Brescia** (editore locale): sezione Giochi con crucipuzzle e sudoku quotidiani; Briscola "con le carte bresciane", "Bis bastuner" (snake con nome dialettale), "Parola nascosta" (5 lettere, 6 tentativi). Una partita di prova gratuita, poi accesso illimitato solo con GdB+. **Il localismo viene usato come leva di abbonamento** | fatto | https://www.giornaledibrescia.it/giochi | 2026-11-20 | sì (curl) |
| E14 | **Repubblica**: giochi (cruciverba di Bartezzaghi, sudoku e altri) "riservato agli abbonati Premium e Quotidiano digitale"; gli abbonati Smart hanno solo "Trova le Coppie" e "Sudoku Mini" | fatto | https://www.repubblica.it/i-giochi-di-repubblica/ | 2026-11-20 | sì (curl) |
| E15 | Corriere Giochi (luglio 2025): 7 giochi, abbonamento solo giochi a 5 € il primo anno, progetto durato almeno un anno e mezzo; l'articolo non indica fornitori | fatto | https://www.ilpost.it/charlie/il-corriere-della-sera-si-prende-wordle-una-specie/ | 2026-11-20 | sì |
| E16 | Tamedia: app di giochi lanciate al Tages-Anzeiger a dicembre 2025, poi estese a Basler Zeitung, Berner Zeitung e 24 heures (aprile 2026). Comprendono un **news quiz quotidiano**. Dati del soft launch: "98% of daily use from returning users", "77% play two or more games per day". Modello freemium. Lo sviluppatore non è indicato | fatto (dato del publisher via stampa) | https://pctipp.ch/themen/news/weitere-spiele-apps-von-tamedia | 2026-11-20 | sì (WebFetch) |
| E17 | Le piattaforme di app per giornali locali (Purple Publish, "60+ customers") offrono "third-party puzzles" e "puzzle integration" come modulo: è un canale di distribuzione per un fornitore di contenuti | fatto | https://purplepublish.com/en/loesungen/lokalzeitungen | 2026-11-20 | sì (curl) |
| E18 | Hearst ha un motore AI interno per i quiz (Emcee) che ha ridotto la produzione "from a full day... to about an hour"; Advance Local genera quiz locali con PuzzleMe AI. Washington Post: "a majority of their quiz players return regularly", fino a 30 volte al mese | fatto (riportato dal vendor) | https://amuselabs.com/resources/guides/ai-news-quiz-for-local-publishers/ | 2026-11-20 | sì (WebFetch) |
| E19 | NYT: nel 10-K 2025 Wordle e Connections sono indicati come contenuti gratuiti per "generate large audiences that we monetize through advertising... or by eventually converting them into subscribers". Abbonati digital-only: 12,21 M a fine 2025 | fatto | https://s23.q4cdn.com/152113917/files/doc_events/2026/Mar/The-New-York-Times-Company-2025-Annual-Report.pdf | 2026-11-20 | sì (pdftotext) |
| E20 | NYT ha comprato Wordle per una cifra "low seven figures" (gennaio 2022); Merriam-Webster ha comprato Quordle e Spotify Heardle (2022), cifre non dichiarate | fatto | https://techcrunch.com/2022/01/31/popular-puzzle-game-wordle-is-being-purchased-by-the-new-york-times ; https://www.tomsguide.com/news/quordle-just-acquired-by-merriam-webster-and-new-features-are-on-the-way | 2026-11-20 | no (estratti) |
| E21 | Waffle (studio indie daily): circa 400k DAU poco dopo il lancio, poi circa 475k DAU; "monetised by ads"; team di circa 10 persone; ha rifiutato 3 offerte di acquisizione nel 2022; ricavi non dichiarati | fatto | https://mobilegamer.biz/daily-word-game-studio-waffle-is-the-latest-small-dev-to-find-a-big-audience | 2026-11-20 | sì (WebFetch) |
| E22 | Actorle: "still generates around $4,000 monthly" con display ads, due anni dopo il lancio (marzo 2022) | fatto, **autodichiarato** | https://hey.gg/blog/actorle | 2026-11-20 | sì |
| E23 | Twofer Goofer: circa 7.000 $/anno, con circa 16 ore al mese di lavoro | fatto, **autodichiarato** | https://starterstory.com/stories/twofer-goofer | 2026-11-20 | no (estratto; fonte che vende contenuti di "side hustle") |
| E24 | **Contexto è disponibile solo in portoghese, inglese e spagnolo**: il selettore lingua nel bundle JS di contexto.me elenca solo questi tre, l'italiano manca | fatto | https://contexto.me/assets/index-p6O9qHBk.js | 2026-11-20 | sì (curl + grep) |
| E25 | Cémantix (FR, 2022): volume di ricerca Semrush indicato a 46.368 per "cemantix"; dati di giocatori e ricavi non trovati | fatto (da estratto) | https://fr.semrush.com/website/cemantix-jeu.fr/overview | 2026-11-20 | no (estratto) |
| E26 | La domanda "contexto italiano" esiste: autocompletamento con 3 varianti (dal lavoro precedente, non ripetuto oggi) | fatto (secondaria) | /home/user/ideas/docs/research/05-screening-b2c-b.md (GN5) | 2026-11-20 | sì (file interno) |
| E27 | Costcodle: daily sul prezzo di prodotti reali (6 tentativi, vittoria entro il 5%). Lo sviluppatore avverte che i prezzi **non sono aggiornati** ("reference rather than current"). Nessun dato di traffico | fatto | https://costcodle.pages.dev/about (estratto) ; https://costcodle.com/ | 2026-11-20 | no (estratto) |
| E28 | Le testate fanno già quiz "indovina il prezzo" sull'inflazione: Quartz (2021, dati BLS), Shields Gazette (2018), Supermarket News ("Price Check Challenge" ricorrente). I dati di engagement non sono pubblicati | fatto | https://qz.com/2088955/us-food-prices-are-rising-take-a-quiz-to-find-out-by-how-much ; https://www.supermarketnews.com/grocery-trends-data/price-check-take-our-price-check-challenge | 2026-11-20 | no (estratti) |
| E29 | ANSO (Associazione Nazionale Stampa Online) dichiara "150 testate associate, 70 editori associati, 22 milioni lettori al mese" e "nuove convenzioni per i soci"; un'altra notizia sullo stesso sito parla di "78 editori e oltre 300 testate" | fatto | https://www.anso.it/ | 2026-11-20 | sì (curl) |
| E30 | Le Figaro: verticale giochi (8 giochi gratuiti) a inizio 2024; Le Monde: piattaforma arcade di kr3m (arcade.lemonde.fr) da febbraio 2024; AS (Prisa): portale co-creato con Gameloft Business Solutions (oltre 200 giochi); El País: sezione con Conexiones, Palabra secreta, Heptagrama e altri | fatto | https://fr.themedialeader.com/?p=84763 ; https://europeangaming.eu/portal/gaming/2024/03/25/155731/kr3m-unveils-new-online-gaming-platform-for-le-monde/ ; https://www.gameloft.com/business-solutions/news/welcome-as-gaming-club-the-gbs-first-online-media-gaming-portal ; https://elpais.com/juegos/ | 2026-11-20 | sì Figaro, Gameloft, El País; kr3m da estratto |
| E31 | Guardian: oltre 1,7 M utenti dell'app Puzzles (2025); chi usa sia news sia giochi disdice "at half the rate" | fatto (da estratto) | https://www.thestar.com.my/news/nation/2025/04/25/puzzles-and-podcasts-power-news-engagement | 2026-11-20 | no (estratto) |
| E32 | Italiadle (daily sui comuni) è ancora online (HTTP 200) | fatto | https://italiadle.pages.dev/ | 2026-11-20 | sì (curl) |

## 3) Distribuzione dei risultati / numeri chiave

**Lato B2C (indie daily).** La distribuzione è a coda lunga e la mediana è bassa.
- Casi alti: Wordle, ceduto per "low seven figures" (E20); Waffle a circa 475k DAU con pubblicità (E21).
- Casi medi autodichiarati: Actorle circa 4.000 $/mese (E22).
- Casi bassi: Twofer Goofer circa 7.000 $/anno (E23).
- Fallimenti dopo l'exit: Heardle, comprato da Spotify (E20) e poi chiuso, cosa che ricordo dal 2023 ma che oggi non ho riverificato; Housle sembra chiuso (lavoro precedente).
- [stima] La mediana di un daily indie è sotto i 1.000 $/mese; una guida secondaria indica 0-20 k$/anno per il dev browser mediano (https://dinogame.gg/blog/how-much-do-browser-game-devs-earn/, estratto, non verificata).
- **Il B2C da solo non è la tesi.**

**Lato B2B (fornitori agli editori).** È qui che l'entusiasta vede il caso.
- Prezzi di riferimento reali: **49 $/mese** (News Games), **99 $/mese** (Playgent, PuzzleMe Plus), **249 $/mese** (PuzzleMe Pro), **500 $+/mese** (Enterprise), **999 $/mese** (News Games tier grande). In alternativa la revenue share pubblicitaria (Arkadium, Azerion).
- Questi prezzi sono pubblici e self-serve, quindi il mercato ha già "educato" i compratori sul fatto che i giochi si comprano da terzi a canone mensile.
- [stima] Per arrivare a 50 k€/anno di margine servono circa 35-45 clienti a 100-120 €/mese, oppure 15-20 gruppi editoriali a 250-300 €/mese con più testate. I costi variabili sono bassi: hosting e LLM per la generazione, circa 5-15 €/cliente/mese con contenuto generato una volta e servito da CDN.

**Lato editori italiani (adozione).**
- Grandi gruppi con giochi: Corriere (luglio 2025), Repubblica e La Stampa (GEDI, la Stampa ha solo sudoku), Messaggero e altre 5 testate del gruppo (novembre 2026), Giornale di Brescia (locale, dietro abbonamento).
- Su circa 20 home page di quotidiani nazionali e regionali controllate con curl **non ho trovato link a sezioni giochi** per: Today/Citynews, Il Resto del Carlino/QN, Unione Sarda, Messaggero Veneto, L'Arena, Eco di Bergamo, Il Sole 24 Ore, Il Post, Il Fatto, Il Giornale, Avvenire, ANSA, L'Adige.
- [stima] La metodologia è grezza (cerco solo link "giochi/sudoku/cruciverba" in home), ma indica che **la maggior parte delle testate regionali e locali italiane non ha ancora un'offerta giochi digitale**. È proprio il segmento che i grandi fornitori in inglese non servono in italiano.

**Engagement documentato.**
- Tamedia: 98% dell'uso giornaliero viene da utenti di ritorno (E16).
- Washington Post: maggioranza dei giocatori dei quiz di ritorno (E18).
- Guardian: chi usa news e giochi disdice a metà del tasso degli altri (E31).
- NYT: news più giochi nella stessa settimana è il segmento con la retention migliore (E18, E19).

## 4) Idee concrete (le 5 migliori, meccaniche di genere, nessuna copia)

### Idea A — "Quiz della settimana locale" auto-generato, venduto come feed a testate locali (IT, poi ES/FR/DE)
- **Cosa.** Ogni lunedì e venerdì ogni testata cliente riceve un quiz di 7-10 domande generato *dai propri articoli della settimana*, recuperati via scraping del sito o del feed RSS. A queste si aggiungono 2-3 domande "dato del territorio": prezzo medio della benzina in provincia questa settimana, temperatura record, popolazione del comune. Il quiz è embeddabile, ha classifica locale e un modulo email per raccogliere lead.
- **La differenza rispetto a PuzzleMe AI e Playgent Forge.** Loro danno lo strumento e la redazione deve usarlo. Qui il servizio è *done-for-you* (nessun click redazionale), in italiano nativo, con i dati locali freschi. La revisione umana la fa l'operatore delegato, una volta per tutte le testate.
- **Chi paga.** La testata locale o il gruppo. Prezzo: 49-99 €/mese per testata, 249 €/mese per un gruppo fino a 10 testate. Ancore reali: 49 $ News Games, 99 $ Playgent e PuzzleMe (E1, E4, E5). Ricavo aggiuntivo possibile: sponsor locale del quiz ("offerto da..."), modello che News Games dichiara redditizio (E5, claim del vendor).
- **Primi 100 clienti.**
  1. Le testate di ANSO (150-300 testate, 70-78 editori), tramite una convenzione per i soci sul modello dello sconto INN del 25% (E5, E29).
  2. Contatto diretto con i responsabili digitali dei gruppi regionali senza sezione giochi (lista in §3).
  3. Partnership con i fornitori di app e CMS per editori locali, che integrano "third-party puzzles" (E17).
  4. Quiz gratuito di prova per 4 settimane. Si misura il ritorno degli utenti e lo si mostra.
- **Delega.** 1 operations e vendite part-time (onboarding, revisione dei quiz, supporto) più 1 sviluppatore a chiamata. Il founder costruisce lo scraper/ETL multi-sito e la pipeline LLM, che sono la sua competenza.
- **Perché ora.** Nel 2025-2026 i grandi gruppi italiani hanno lanciato giochi (E12-E15), i piccoli no. I giochi sono passati da "nice to have" a "dobbiamo averli".

### Idea B — Daily "prezzo vero" su spesa e carburanti, con storico: B2C come vetrina e B2B come widget locale
- **Cosa.** Ogni giorno si indovina il prezzo di un prodotto di largo consumo, con feedback sopra/sotto e soglia di vittoria. La rivelazione è un dato che solo uno scraper continuo può avere: "un anno fa costava X, la confezione è passata da 500 a 450 g", "in provincia di Brescia il gasolio costa Y, 4 cent sopra la media nazionale".
- **Variante B2B.** Widget "Quanto costa da noi?" per la testata locale, con i prezzi dei carburanti per provincia (open data MIMIT; vedi limiti: oggi non ho potuto riverificare l'endpoint) e il paniere della spesa. È una rubrica-gioco settimanale che collega i giochi al tema più sentito dai lettori, il caro vita.
- **Prova che il formato interessa alle testate.** Quartz, Shields Gazette e Supermarket News hanno fatto quiz "indovina il prezzo" sull'inflazione (E28), ma **una tantum, a mano**. Costcodle mostra che il formato daily funziona ma che i suoi prezzi *non sono aggiornati* (E27): lo spazio "prezzo fresco più storico" è libero.
- **Chi paga.** Pubblicità sul sito B2C più canone del widget per le testate (29-79 €/mese, o incluso nel bundle dell'Idea A). Potenziale sponsor: comparatori, app di cashback e volantini. Non ho trovato evidenze di sponsorizzazioni di questo tipo [stima].
- **Primi 100 utenti e clienti.** Lancio con un pezzo stampa "abbiamo tracciato N prodotti per 12 mesi: ecco la shrinkflation", che è una notizia in sé e quindi un canale stampa senza pubblico. Poi offerta del widget alle stesse testate dell'Idea A.
- **Rischi.** Marchi e foto dei prodotti: usare nome generico più formato, niente immagini proprietarie. Termini d'uso degli e-commerce GDO: da verificare caso per caso.
- **Delega.** Lo scraper è il cuore e lo gestisce il founder all'inizio; poi un operatore cura la selezione giornaliera dei prodotti, che può essere semi-automatica.

### Idea C — Daily semantico in italiano (e nelle lingue scoperte), offerto anche in white-label agli editori
- **Cosa.** Meccanica di genere "vicinanza di significato" (rank della parola rispetto a quella segreta), con un'aggiunta: un indizio quotidiano legato all'attualità, preso dai titoli del giorno. Il look e il nome devono essere originali.
- **Perché è forte.**
  - **Contexto non ha l'italiano** (E24, verificato nel codice).
  - Il francese Cémantix mostra che la meccanica funziona in una lingua locale (E25, volume di ricerca alto).
  - In Italia c'è domanda di ricerca esplicita ("contexto italiano", E26).
  - Nessuna delle sezioni giochi italiane viste (Messaggero, Corriere, Repubblica, GdB) ha questa meccanica (E12-E15).
- **Chi paga.** Pubblicità B2C (giochi di parole: circa 7,9 impression per partita su CrazyGames, dal lavoro precedente). B2B: licenza a un gruppo editoriale per inserirlo nella propria sezione giochi, a 300-1.000 €/mese per gruppo [stima, ancorata a PuzzleMe Enterprise ≥ 500 $/mese, E1].
- **Primi 100 utenti.** SEO su "contexto italiano", community di giochi di parole, condivisione del risultato (rank). Primo cliente B2B: un gruppo che ha appena lanciato una sezione giochi e deve allungarne il catalogo, per esempio Caltagirone/cedsdigital con 6 testate (E12).
- **Delega.** Il motore (embedding più lista di parole curata) si costruisce una volta; la parola del giorno si programma con mesi di anticipo. Un operatore controlla le parole sensibili.

### Idea D — Feed di contenuti per giochi in italiano venduto alle *piattaforme* (non solo agli editori)
- **Cosa.** Invece di competere con PuzzleMe, Playgent, Purple o Azerion sulla tecnologia, si vende loro il *contenuto in lingua*: cruciverba mini, parole del giorno, quiz di attualità, higher/lower su dati italiani, generati e verificati in batch.
- **Prova.** PuzzleMe dice che molti clienti "create or purchase their own crosswords" e che fornisce solo mini crossword *in inglese* (E3). Keesing ha comprato CoolGames proprio per servire i "B2B media clients" (E10). Il contenuto localizzato è una risorsa che si compra.
- **Chi paga.** Piattaforme e aggregatori. PressReader ha aggiunto i puzzle a tutte le versioni nel gennaio 2026 (comunicato non letto, 403). Le app per editori locali integrano "third-party puzzles" (E17). Prezzo per titolo e mese o per pacchetto di lingua [stima: 200-1.000 €/mese per lingua e piattaforma; nessun listino trovato].
- **Distribuzione.** Pochi clienti grandi (5-10 piattaforme), quindi vendita B2B classica. È più lenta, ma un solo contratto vale molto.
- **Delega.** Alta: la pipeline produce, un revisore madrelingua per lingua controlla.

### Idea E — "Più o meno, territorio": higher/lower sui dati locali come modulo SEO-plus-gioco per testate locali
- **Cosa.** "Chi ha più abitanti, reddito, prezzo della benzina, iscritti all'università: Bergamo o Brescia?" con dati aggiornati (non statici). Per la testata vengono generate pagine-gioco sul proprio territorio.
- **Nota onesta.** Italiadle copre già i comuni con dati statici ISTAT (E32), quindi qui il valore sta *solo* nel dato fresco e nella distribuzione via testata. **È la più debole delle cinque**; la tengo come modulo del bundle A/B, non come prodotto a sé.

**Pacchetto raccomandato.** Un solo prodotto B2B, "Giochi Locali": quiz della settimana (A) più prezzo vero (B) più semantico (C), a 99 €/mese per testata e sconti di gruppo. Il sito B2C di C e B serve da vetrina e da prova di trazione. D è l'estensione verso le piattaforme una volta che il motore è pronto.

## 5) Criteri di confutazione, uno per uno (punto di vista dell'Entusiasta, onesto)

1. **"Gli editori sviluppano i giochi in casa o li comprano da pochi fornitori consolidati a prezzi bassi."** *Parzialmente vero. È il punto più debole della tesi e va detto.*
   - Contro: i grandi gruppi italiani sembrano fare in casa (Caltagirone con piattaforma interna multi-testata, E12; Corriere con 18 mesi di sviluppo, E15). I fornitori consolidati esistono e sono economici: PuzzleMe 99-249 $, Playgent 99 $, News Games 49 $ (E1, E4, E5).
   - La mia lettura: (a) "fanno in casa" vale per i 3-4 grandi gruppi, mentre le centinaia di testate locali non hanno né sezione giochi né sviluppatori (§3, E29). (b) I fornitori consolidati sono **in inglese e vendono strumenti**, non contenuto locale italiano automatico; nessuno dei vendor letti cita clienti italiani. (c) Il prezzo basso è un vantaggio per chi ha costi marginali quasi nulli, come una pipeline di scraping più LLM: un ciclo di vendita da 99 €/mese è una decisione da carta di credito.
   - Verdetto entusiasta: il criterio **non confuta il segmento locale e regionale in lingua**, ma **confuta il segmento dei grandi editori**. Il prezzo basso pone un tetto: servono volumi (35-45 clienti) o gruppi.
2. **"I casi virali non monetizzano."** *Smentito in parte.*
   - Monetizzano con acquisizione o pubblicità: Wordle a "low seven figures" (E20), Waffle circa 475k DAU con pubblicità (E21), Actorle circa 4.000 $/mese autodichiarato (E22).
   - Ammetto però che la mediana è bassa (E23) e che le acquisizioni recenti (2024-2026) di daily indie **non le ho trovate**: l'ultima ondata documentata è del 2022.
   - Per questo la tesi sposta il ricavo sul B2B ricorrente, che non dipende dalla viralità.
3. **"Il vantaggio dati non è percepito dagli utenti."** *Non dimostrato né in un senso né nell'altro.*
   - A favore: le testate creano spontaneamente quiz su prezzi reali dell'inflazione (E28) e quiz sulle notizie della settimana (E16, E18). Il "dato di attualità" è percepito dalla *testata* come valore editoriale, e nel B2B è lei il cliente.
   - Contro: Costcodle funziona con prezzi vecchi (E27), quindi il giocatore B2C potrebbe non accorgersi della freschezza del dato.
   - Verdetto: nel B2C il vantaggio dati è debole; nel B2B (la testata vuole contenuto *suo e di oggi*) è il cuore dell'offerta. Va testato con l'esperimento descritto sotto.

**Test minimo suggerito** [stima]: 4 settimane, 10 testate locali con il quiz della settimana gratuito.
- Successo se ≥ 3 testate su 10 accettano di pagare ≥ 49 €/mese, oppure se il tasso di ritorno dei giocatori è ≥ 30%.
- Fallimento in caso contrario.

## 6) Cosa non ho trovato / limiti

- **Prezzi e condizioni** delle licenze Puzzmo, Arkadium, Keesing e Azerion: non pubblici. **Volumi e ricavi** di Amuse Labs, Playgent e News Games: non trovati.
- **Chi ha sviluppato** Corriere Giochi, i giochi di Repubblica e quelli di GdB: non trovato. Per Caltagirone si vede solo un dominio interno (cedsdigital); non so se il contenuto, come i cruciverba, sia licenziato da terzi (per esempio Keesing Italia).
- **Clienti italiani** dei vendor internazionali: non trovati.
- **Acquisizioni di daily indie nel 2024-2026**: non trovate.
- **Engagement dei quiz sui prezzi**: non trovato. **Giocatori e ricavi di Cémantix**: non trovati.
- **Endpoint open data carburanti MIMIT**: la connessione è caduta tramite il proxy (ws_closed), quindi non è riverificato oggi.
- Le pagine INN rispondono 403: i prezzi di News Games vengono da estratti dei motori di ricerca e c'è un conflitto tra 49 $ fissi e la scala 49-999 $.
- Il controllo "nessuna sezione giochi" sulle testate regionali è grezzo (link in home page) e può avere falsi negativi, per esempio per giochi solo in app.
- Molti dati di engagement sono **claim di vendor** (Amuse Labs, Azerion, Playgent) o autodichiarati (Actorle, Twofer Goofer).
- Non ho misurato la disponibilità a pagare delle testate italiane: è l'ipotesi chiave non verificata.

## 7) Conteggio

- WebSearch usate: **24** su 25.
- Fetch: circa 14 WebFetch più circa 25 chiamate curl (home e sezioni giochi di circa 40 testate, bundle JS di Messaggero e Contexto, listino PuzzleMe, Playgent, ANSO, PDF NYT 10-K, PDF Nordkurier, Purple Publish).
