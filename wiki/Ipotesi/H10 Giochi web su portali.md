---
tipo: ipotesi
id: H10
titolo: "Giochi web su portali"
sessione: S4
stato: "confutata"
fiducia: "media"
probabilita_successo: "5%"
tags: [ipotesi, giochi]
---
# H10 — Giochi web su portali

> **Come leggere questa nota.** La probabilità di successo misura l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi, con il founder a non più di 5 ore/settimana; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. Punteggi aggiornati delle idee nella [[Classifica]]; sigle nel [[Glossario]].

## Ipotesi (pre-registrata)
Giochi HTML5 distribuiti su portali (Poki, CrazyGames e simili) con ricavi da revenue share pubblicitaria. Testo dal [[Registro delle ipotesi]].

## Criteri di confutazione (pre-registrati)
Confutata se:
1. i ricavi mediani per gioco sono trascurabili e i portali accettano/promuovono pochissimi titoli;
2. servono competenze di game design che il team non ha.

## Caso a favore — Entusiasta
Rapporto integrale: [[H10 Entusiasta]].

**Pubblico grande.** Poki dichiara:
- 100 M di giocatori al mese;
- 227 nuovi giochi e 1.018 giochi oltre 1 M di partite nel 2025 (https://poki.com/blog/2025-at-poki-a-year-in-review);
- un catalogo curato di circa 1.500 titoli;
- studi che arrivano fino a circa 1 M€ l'anno (autodichiarato, https://mobidictum.com/pokis-web-gaming-interview-michiel-van-amerongen).

**Condizioni:** 50/50 sul traffico portato da Poki, 100% su quello portato dallo sviluppatore, esclusiva web (https://developers.poki.com/guide/working-with-poki).

**Il modello che funziona è il portafoglio di titoli semplici costruiti su template:**
- Emolingo: 5 persone, 8 giochi oltre 10 M di partite ciascuno;
- Unico: più di 25 giochi, 500 M di partite;
- Blumgi: uno sviluppatore solo, 12 giochi.

Tutti e tre i casi sono raccontati sul blog di Poki.

**L'accesso a CrazyGames è per metriche, con soglie pubbliche:**
- Basic Launch, poi Full Launch;
- almeno 10 minuti di gioco, retention al giorno 1 del 10-15%, almeno l'80% di chi apre la pagina inizia a giocare (https://docs.crazygames.com/resources/basic-launch-metrics/);
- i puzzle sono la categoria più grande nella top 100 per guadagni (https://docs.crazygames.com/resources/monetizing-puzzle/).

**Altri canali:**
- Arkadium: 75% allo sviluppatore;
- Playgama: non esclusivo;
- YouTube Playables: in pilota.

**Resa stimata [stima]:** 1-5 € ogni 1.000 partite. Per 50 k€ di margine servono 40-80 M di partite all'anno.

**Idee proposte:**
1. Daily puzzle da dati reali.
2. Fabbrica di logic puzzle procedurali.
3. Idle/tycoon su mappe OpenStreetMap.
4. Quiz multilingua da Wikidata.
5. Market intelligence sui cataloghi dei portali.

**Ammissioni dell'Entusiasta:**
- per singolo gioco la mediana è probabilmente vicina a zero;
- la competenza di game design va comprata.

## Caso contro — Bucatore di palloncini
Rapporto integrale: [[H10 Bucatore]].

**Scraping di CrazyGames (700 giochi recenti):**
- mediana: 57.156 partite;
- solo il 4,1% supera 1 M;
- il top 10% raccoglie il 65% delle partite.

**Catalogo dei giochi sopravvissuti:** mediana circa 0,6 M di partite a vita in circa 3 anni.

**Resa per partita.** Le uniche misure pubbliche sono del 2018-19:
- circa 1,2 € ogni 1.000 partite: 556,92 € su 451.327 partite, citato da https://app.cinevva.com/guides/web-game-monetization;
- circa 1,45 $ ogni 1.000 partite (gamedev.net).

Il gioco mediano incassa quindi poche centinaia di euro.

**Poki è curato a mano:**
- 227 uscite in un anno;
- esclusiva web di 5 anni come contratto preferito (https://developers.poki.com/guide/revenue-deal-types).

**Le barriere d'ingresso misurano game design e grafica:**
- almeno il 65% dei visitatori deve iniziare a giocare;
- almeno 5 minuti di gioco medio (https://developers.poki.com/guide/reading-results);
- rifiuto di cloni, template, "poor and inconsistent graphics" (https://developers.poki.com/guide/content-player-safety).

**Le idee ovvie, una per una:**
- hyper-casual: 78,8% del tempo di gioco, genere saturo;
- io-game: costo dei server, pochi vincitori prendono tutto;
- idle/clicker: 11% dei nuovi giochi;
- quiz da dati: sostituibile da un'AI generalista;
- daily: la fidelizzazione va al portale;
- fabbrica di giochi con AI: rifiutata dai portali.

## Verdetto — Giudice

### Affermazioni decisive ri-verificate
| Affermazione | Chi la sostiene | Esito | Fonte (letta 2026-11-20) |
|---|---|---|---|
| Il gioco mediano sui portali ha volumi minimi (mediana circa 57 mila partite, 4% oltre 1 M) | Bucatore | **Confermata con un mio campione indipendente.** Pagine 1, 3, 6 e 10 di crazygames.com/new, 280 giochi, campo `totalPlays` nel JSON della pagina: mediana 43.974 partite, 11 giochi su 280 (3,9%) oltre 1 M. Più il gioco è vecchio più la mediana sale (pagina 1: 16 mila; pagina 6: 123 mila), ma resta sotto le 150 mila | https://www.crazygames.com/new, /new/3, /new/6, /new/10 |
| Un gioco accettato su Poki ha alta probabilità di superare 1 M di partite (227 nuovi, 1.018 oltre 1 M) | Entusiasta | **Confermati i numeri, la lettura no.** Il blog dice "227 new game releases" e "1,018 games hit the 1 million+ plays milestone this year". I 1.018 riguardano tutto il catalogo, non le uscite dell'anno, e 227 uscite all'anno confermano un ingresso stretto. Anche 1 M di partite vale circa 1-5 k€ | https://poki.com/blog/2025-at-poki-a-year-in-review |
| L'ingresso misura game design e grafica | Bucatore | **Confermata.** "65%+ conversion to play and 5+ minutes average playtime (10+ for management and simulation games)"; tra i motivi di rifiuto "Confusing UX, or poor and inconsistent graphics" e "Take special care with AI-heavy production" | https://developers.poki.com/guide/reading-results · https://developers.poki.com/guide/content-player-safety |
| La resa è circa 1-1,5 € ogni 1.000 partite | Bucatore (l'Entusiasta stima 1-5) | **Non verificabile direttamente.** Il post su gamedev.net risponde 403. Resta un dato vecchio (2018-19) e indiretto. Lo tratto come ordine di grandezza: anche moltiplicandolo per 5 il ricavo mediano resta trascurabile | https://gamedev.net/blogs/entry/2265795-earning-and-statistics-from-my-8-games-android-webgl-some%20thoughts/ (403) |

### Criteri di confutazione, uno per uno
1. **Ricavi mediani trascurabili e pochi titoli accettati o promossi: soddisfatto.**
   - Ricavi: la mediana delle partite (circa 44-57 mila per i giochi recenti, circa 0,6 M a vita per i sopravvissuti) a 1-5 € ogni 1.000 partite dà da decine a poche migliaia di euro per gioco.
   - Accesso: Poki fa uscire 227 titoli all'anno ed è curato a mano. CrazyGames ammette molti giochi, ma promuove con revenue share solo quelli che superano benchmark relativi; il tasso di passaggio non è pubblicato. La concentrazione è forte (top 10% = 65-72% delle partite).
2. **Servono competenze di game design che il team non ha: soddisfatto.**
   - Ogni filtro (CTR della copertina, conversione a partita, tempo di gioco, grafica coerente, originalità) misura design e arte.
   - I casi di successo citati dall'Entusiasta hanno game designer e artisti dedicati (Emolingo) o 15 anni di mestiere (Blumgi), e nessuno dichiara i ricavi.
   - L'unica mitigazione è assumere un designer di web game, che trasforma l'ipotesi in "finanziare uno studio": è un'altra scommessa, con un costo di 70-110 k€/anno contro 40-80 M di partite necessarie, cioè il livello degli studi migliori.

### Verdetto
**Confutata.** Fiducia **media**: la distribuzione delle partite è verificata, la resa per partita poggia su dati vecchi e su stime.

**Probabilità di successo: circa 5%.** La soglia richiede di entrare nel top 1-3% dei produttori per volume, con un team delegato e senza competenza di design del founder.

**Residuo utile.** La "fabbrica di puzzle procedurali da dati" non regge come business autonomo. Può servire come **canale secondario** di distribuzione per i contenuti dell'idea [[I-H11-1 Quiz locali automatici per testate]] (vedi [[H11 Giochi quotidiani basati su dati]]): costa poco e misura l'engagement.

## Idee concrete che sopravvivono
Nessuna: l'ipotesi è confutata.

## Fonti
Elenchi completi nei rapporti [[H10 Entusiasta]] e [[H10 Bucatore]].

Lette dal Giudice il 2026-11-20:
- https://poki.com/blog/2025-at-poki-a-year-in-review
- https://developers.poki.com/guide/reading-results
- https://developers.poki.com/guide/content-player-safety
- https://www.crazygames.com/new (pagine 1, 3, 6, 10)
- gamedev.net (403, non letto)
