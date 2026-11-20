---
tipo: ipotesi
id: H12
titolo: "Giochi indie su Steam o mobile"
sessione: S4
stato: "confutata"
fiducia: "media-alta"
probabilita_successo: "4%"
tags: [ipotesi, giochi]
---
# H12 — Giochi indie su Steam o mobile

> **Come leggere questa nota.** La probabilità di successo misura l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi, con il founder a non più di 5 ore/settimana; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. Punteggi aggiornati delle idee nella [[Classifica]]; sigle nel [[Glossario]].

## Ipotesi (pre-registrata)
Giochi indie su Steam o mobile (premium o free-to-play), sviluppati da un team delegato. Il [[Registro delle ipotesi]] riporta solo titolo e criteri di confutazione; la descrizione è del giudice.

## Criteri di confutazione (pre-registrati)
Confutata se:
1. i ricavi mediani su Steam e degli indie mobile sono trascurabili;
2. il successo dipende da marketing e fortuna più che da esecuzione;
3. la gestione delegata non è realistica nel game dev.

## Caso a favore — Entusiasta
Rapporto integrale: `wiki/Rapporti/S4/H12 Entusiasta.md`.

**La mediana è il benchmark sbagliato.** Va condizionata su progetti seri:
- **Publisher:** con un publisher la mediana è circa 5 volte quella dei giochi auto-pubblicati, 16.222 $ contro 3.285 $ ([stima di terzi], https://opgamemarketing.substack.com/p/the-2024-indie-and-aa-game-market).
- **Coda alta:** il 90° percentile della coorte 2019 è circa 198 k$ (https://www.steampageanalyzer.com/blog/median-steam-game-2026).
- **Sandbox:** il 27,4% supera i 100 k$ (https://automaton-media.com/en/news/study-of-best-selling-genres-on-steam-shows-sandbox-games-continue-to-stand-out-in-revenue/).
- **Dato Valve:** 5.863 giochi oltre i 100 k$ nel 2025 (https://www.gamesradar.com/platforms/pc-gaming/valve-peels-back-the-curtain-in-rare-steam-presentation-more-games-are-finding-success-than-ever-and-nearly-6-000-made-over-usd100-000-last-year/).

**L'esecuzione si misura prima di spendere.**
- Il rapporto wishlist→vendite della prima settimana è stabile, con mediana 0,10-0,17×.
- I giochi che convertono meglio hanno recensioni al 91%, quelli che convertono peggio al 67% (https://newsletter.gamediscover.co/p/the-state-of-steam-wishlist-conversions).
- PlayWay apre pagine Steam sui concept e sviluppa solo quelli che raccolgono interesse (https://howtomarketagame.com/?p=3553).

**La delega esiste nell'industria.**
- Ultimate Games (gruppo PlayWay) usa piccoli team esterni. Dichiara che "1 gioco su 10 copre i costi degli altri 9" (https://80.lv/articles/ultimate-games-on-creating-simulation-games-the-publishing-process-and-the-video-game-market).
- Nei contratti di publishing l'anticipo mediano è 300 k$ e lo sviluppatore tiene l'IP (https://gamedevreports.substack.com/p/voyer-law-publishing-agreements-in).

**I giochi di dati sono un business.**
- Trophy Games (gestionali F2P di nicchia, "data-driven"): 126,5 M DKK di ricavi nel 2025 (https://www.inderes.dk/en/releases/trophy-games-reports-record-year-for-2025-with-40percent-revenue-growth).
- GeoGuessr AB: 473 MSEK nel 2025 (allabolag.se).

**Idee proposte:**
1. Portafoglio di simulatori di mestiere validati con lo scraping di SteamDB.
2. Gestionale F2P su reti reali.
3. Daily di stima su dati reali.
4. Builder su mappe OpenStreetMap.
5. Tycoon sistemico con vertical slice da proporre a un publisher.

**Ammissioni:**
- Non ha trovato nessun caso documentato di un founder a ≤ 5 h/settimana che arrivi a 50 k€/anno.
- La mediana degli indie mobile non è stata trovata.

## Caso contro — Bucatore di palloncini
Rapporto integrale: `wiki/Rapporti/S4/H12 Bucatore.md`.

**Steam.** Nel 2025 sono usciti 20.282 giochi:
- solo il 2,99% è arrivato a 1.000 recensioni (https://howtomarketagame.com/2026/01/27/what-the-hell-happened-in-2025/);
- il 40% ha incassato meno di 100 $, il 65,9% meno di 1.000 $ (Gamalytic);
- la mediana lorda va da 249 a 2.302 $ secondo il metodo, ed è in calo dal 2019;
- il top 1% prende l'84,5% dei ricavi.

**Mobile:**
- nel 2025 i nuovi lanci hanno fatto circa il 7% dei ricavi;
- solo 2.500 giochi su 190.000 hanno superato 500.000 download;
- nessuno dei 97 Match 3D e dei 91 merge-2 usciti è arrivato a 100 k$/mese;
- un'installazione puzzle costa 9,48 $ (iOS, USA) e la retention mediana a 30 giorni è circa 0,7% (fonti AppMagic, Sensor Tower, AppsFlyer, GameAnalytics nel rapporto).

**Conti della delega:**
- un team minimo costa circa 165-185 k€/anno [stima];
- per lasciare 50 k€ di margine servono circa 330-370 k$ lordi all'anno su Steam, cioè stare nel top 3-5%.

**Esecuzione = game design.**
- Nell'analisi di 155 postmortem il game design (gancio, visione chiara) è il primo fattore di successo, nel 50% dei casi (https://thomas-zimmermann.com/publications/files/washburn-icse-2016.pdf).
- È proprio la competenza che il founder non ha.
- Studi esperti con recensioni positive falliscono comunque (Bramble Royale, Ivy Road).

**Le idee ovvie, attaccate una per una:**
- simulatore di nicchia: dipende dagli streamer;
- tycoon su dati reali: tasso di successo del genere management sceso dal 5,43% al 3,4%;
- deckbuilder: il pubblico è stanco del genere;
- puzzle: 0,34% di successi su Steam;
- idle: 1.566 uscite a settembre 2026, fra i giochi che dichiarano AI il 93% resta sotto 10 k$.

## Verdetto — Giudice

### Affermazioni decisive ri-verificate
| Affermazione | Chi la sostiene | Esito della verifica | Fonte (letta 2026-11-20) |
|---|---|---|---|
| Nel 2025 il 40% delle uscite Steam ha incassato meno di 100 $, il 65,9% meno di 1.000 $, solo l'8% più di 100 k$ | Bucatore (e in parte Entusiasta) | **Confermata** (stima Gamalytic citata nell'articolo) | https://tech4gamers.com/40-of-steam-games-in-2025-didnt-even-earn-100-dollars/ |
| Nel 2025 5.863 giochi hanno fatto almeno 100 k$: la "classe media" è ampia | Entusiasta | **Confermata, ma ridimensionata.** Valve dà il numero senza dire di quale coorte di uscita siano i giochi: sono giochi di tutto il catalogo (oltre 100.000 titoli). Non è un tasso di successo delle nuove uscite | https://www.gamesradar.com/platforms/pc-gaming/valve-peels-back-the-curtain-in-rare-steam-presentation-more-games-are-finding-success-than-ever-and-nearly-6-000-made-over-usd100-000-last-year/ |
| Il modello PlayWay/Ultimate dimostra che la delega funziona | Entusiasta | **Confermata la citazione** ("on average, 1 out of 10 games earns enough to cover the production costs of the other nine"). Però riguarda un publisher strutturato che lavora sul volume, non un founder a 5 h/settimana | https://80.lv/articles/ultimate-games-on-creating-simulation-games-the-publishing-process-and-the-video-game-market |
| I giochi di dati sono un business (Trophy Games) | Entusiasta | **Confermata:** ricavi 126,5 M DKK (+40%), EBT 19,0 M DKK. Però è una società quotata con anni di catalogo e acquisizione utenti a pagamento: non è un riferimento raggiungibile da un nuovo entrante | https://www.inderes.dk/en/releases/trophy-games-reports-record-year-for-2025-with-40percent-revenue-growth |

### Criteri di confutazione, uno per uno
1. **Ricavi mediani trascurabili: soddisfatto.** Su questo sono d'accordo tutti e due i ruoli. Mediana Steam da 249 a 2.302 $ lordi a vita. Sul mobile solo l'1,3% dei giochi supera 500.000 download.
2. **Successo legato a marketing e fortuna più che a esecuzione: soddisfatto in parte.** Le wishlist rendono la domanda misurabile in anticipo, quindi l'esecuzione conta. Ma l'esecuzione decisiva è il game design (gancio), che il profilo non ha e che deve comprare. La dimensione del successo dipende poi dagli streamer, che non si controllano.
3. **Gestione delegata non realistica: soddisfatto per questo profilo.** La delega funziona dove chi delega è un publisher professionale con molti titoli e decine di persone (PlayWay, Hooded Horse), oppure un team con un game director autonomo. Per il founder a ≤ 5 h/settimana significa finanziare per intero un team di 165-185 k€/anno che si prende tutta la scommessa creativa. Nessuno dei due ruoli ha trovato un caso documentato di successo in questa configurazione.

### Verdetto
**Confutata.** Fiducia **media-alta**: i dati di distribuzione concordano fra metodi diversi, ma sono tutti stime di terzi che sulla mediana divergono fino a 10 volte.

**Probabilità di successo: circa 4%.**
- Ragionamento: per gioco, la probabilità di arrivare nel top 3-5% è del 3-6%, e in 24 mesi un team delegato fa uscire 1-2 giochi.
- Il primo euro arriva non prima di 12-18 mesi.
- La variante "portafoglio con kill rule" migliora la distribuzione dei risultati, ma richiede 150-200 k€ di capitale e porta al pareggio nello scenario base dell'Entusiasta stesso.

**Unico elemento da salvare:** i giochi in cui il contenuto è un dato reale. Sono più adatti al canale web e ai daily, e se ne occupano [[H10 Giochi web su portali]] e [[H11 Giochi quotidiani basati su dati]].

## Idee concrete che sopravvivono
Nessuna: l'ipotesi è confutata. Le idee "daily di stima su dati reali" e "gestionale su mappe reali" vengono riassorbite, se sopravvivono, in H10 e H11.

## Fonti
Elenchi completi con data di accesso nei rapporti `wiki/Rapporti/S4/H12 Entusiasta.md` e `wiki/Rapporti/S4/H12 Bucatore.md`. Fonti verificate dal Giudice il 2026-11-20:
- https://tech4gamers.com/40-of-steam-games-in-2025-didnt-even-earn-100-dollars/
- https://www.gamesradar.com/platforms/pc-gaming/valve-peels-back-the-curtain-in-rare-steam-presentation-more-games-are-finding-success-than-ever-and-nearly-6-000-made-over-usd100-000-last-year/
- https://80.lv/articles/ultimate-games-on-creating-simulation-games-the-publishing-process-and-the-video-game-market
- https://www.inderes.dk/en/releases/trophy-games-reports-record-year-for-2025-with-40percent-revenue-growth
