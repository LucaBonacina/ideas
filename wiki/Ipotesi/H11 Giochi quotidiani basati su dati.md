---
tipo: ipotesi
id: H11
titolo: "Giochi quotidiani basati su dati, anche venduti a editori"
sessione: S4
stato: "parziale"
fiducia: "media"
probabilita_successo: "7%"
tags: [ipotesi, giochi]
---
# H11 — Giochi quotidiani basati su dati, anche venduti a editori

> **Come leggere questa nota.** La probabilità di successo misura l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi, con il founder a non più di 5 ore/settimana; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. Punteggi aggiornati delle idee nella [[Classifica]]; sigle nel [[Glossario]].

## Ipotesi (pre-registrata)
Giochi daily e data-driven (prezzo della spesa, semantico in italiano, giochi su dati reali), monetizzati con pubblicità o abbonamento **oppure in licenza B2B a testate ed editori**. Testo dal [[Registro delle ipotesi]].

## Criteri di confutazione (pre-registrati)
Confutata se:
1. gli editori sviluppano i giochi in casa o li comprano da pochi fornitori consolidati a prezzi bassi;
2. i casi virali non monetizzano;
3. il vantaggio dati non è percepito dagli utenti.

## Contesto riverificato
Riprende `docs/research/03-screening-giochi.md` e la sezione giochi di `docs/research/05-screening-b2c-b.md`. Due conclusioni di quei lavori sono **superate**:
- **"Nessun semantico italiano":** semantle.it esiste ed è attivo, con daily, multigiocatore e AdSense. L'ho verificato io.
- **"Housle, 200.000 utenti":** il dominio non è più servito (verifica DNS del Bucatore).

Due conclusioni sono **confermate**:
- Contexto non ha l'italiano: nel bundle JS ci sono solo `pt`, `en`, `es`, verificato da me.
- Corriere Giochi è l'incumbent B2C, senza giochi su dati.

## Caso a favore — Entusiasta
Rapporto integrale in `wiki/Rapporti/S4/H11 Entusiasta.md`.

**Gli editori italiani ed europei stanno aprendo sezioni giochi adesso.**
- Il Messaggero, l'11/11/2026, con una piattaforma condivisa da 6 testate.
- Il Giornale di Brescia, con giochi locali (briscola con "carte bresciane") come leva dell'abbonamento GdB+.
- Repubblica, con i giochi riservati agli abbonati Premium.
- Tamedia: un news quiz quotidiano; il 98% dell'uso giornaliero viene da utenti di ritorno (dato dell'editore, https://pctipp.ch/themen/news/weitere-spiele-apps-von-tamedia).

**Il mercato B2B esiste ed è self-serve.** Prezzi:
- PuzzleMe da 99 a 249 $/mese, Enterprise da 500 $ (https://amuselabs.com/pricing/);
- Playgent 99 $/mese;
- News Games (INN) 49 $/mese.

Azerion fa funzionare 20 portali white-label per giornali.

**Lo spazio libero indicato dall'Entusiasta:** un fornitore italiano, poi multilingua, che consegni contenuto locale e dati freschi *done-for-you* alle centinaia di testate locali che non hanno una sezione giochi. Su circa 13 home di testate regionali e nazionali non ha trovato link a una sezione giochi; controllo grezzo.

**Idee proposte:**
- A — quiz settimanale locale auto-generato dagli articoli della testata e da dati del territorio, a 49-99 €/mese;
- B — prezzo vero di spesa e carburanti con storico;
- C — semantico italiano;
- D — feed di contenuti in italiano per le piattaforme;
- E — higher/lower su dati locali.

**Ammissioni dell'Entusiasta stesso:**
- il criterio 1 vale per i grandi gruppi;
- nessuna acquisizione di daily indie trovata nel 2024-2026;
- nel B2C il vantaggio dati è debole: Costcodle funziona con prezzi vecchi.

## Caso contro — Bucatore di palloncini
Rapporto integrale in `wiki/Rapporti/S4/H11 Bucatore.md`.

**Il canale italiano è presidiato.**
- Studio Giochi serve da oltre 40 anni La Stampa, i 15 quotidiani locali ex GEDI e Il Sole 24 Ore (https://studiogiochi.com/i-nostri-clienti/).
- Keesing Italia (BC Partners) ha comprato Sudoku srl, che nel 2021 aveva 4,6 M€ di ricavi (https://bebeez.it/private-equity/la-settimana-sudoku-e-stata-acquisita-da-keesing-italia-parte-di-keesing-media-group-bc-partners-che-produce-200-milioni-di-magazine-di-enigmistica-lanno/).
- Keesing vende ai media francesi "via long term contracts".

**I prezzi sono bassi o nulli.**
- INN: 49 $/mese per giochi generati in automatico dalle notizie.
- ParkerSyndication: gratis, con il 50% della pubblicità all'editore.

**L'unico indie distribuito alle testate rende poco.** Twofer Goofer, distribuito via Arkadium su WaPo e USA Today, fa circa 600 $/mese (autodichiarato).

**I daily "a dati" non monetizzano.**
- Housle è spento.
- Costcodle vive di donazioni.
- I daily che fanno soldi (NYT, Corriere, Daydash) sono tutti di parole o logica.
- Il NYT ha chiuso il suo gioco numerico Digits.

**Le idee ovvie non reggono.**
- Il semantico italiano esiste già (semantle.it).
- Il "prezzo della spesa" non ha segnali di domanda. Lo storico costruito via scraping è proprio l'estrazione "sistematica e ripetuta" vietata dall'art. 102-bis LDA (https://portolano.it/newsletter/portolano-cavallo-inform-digital-ip/screen-scraping-to-what-extent-is-it-lawful).

**Conti:**
- B2B Italia: circa 32 k€/anno lordi anche con il 30% delle testate locali come clienti [stima].
- B2C: servono 30-40.000 giocatori italiani al giorno, stabili [stima].

## Verdetto — Giudice

### Affermazioni decisive ri-verificate
| Affermazione | Chi la sostiene | Esito | Fonte (letta 2026-11-20) |
|---|---|---|---|
| I prezzi B2B di riferimento sono 99-249 $/mese, Enterprise da 500 $ | Entrambi (letture opposte) | **Confermata** sul listino. Plus a 90 $/mese con fatturazione annuale | https://amuselabs.com/pricing/ |
| I grandi gruppi italiani fanno i giochi in casa | Bucatore (l'Entusiasta lo ammette) | **Confermata per Caltagirone.** Il bundle di giochi.ilmessaggero.it usa domini del gruppo (cedsdigital.it, cedscdn.it) e include i copyright di Il Messaggero, Il Mattino, Il Gazzettino, Leggo, Quotidiano di Puglia e Corriere Adriatico. Non c'è traccia di fornitori esterni (amuselabs, keesing, arkadium, azerion non compaiono) | https://giochi.ilmessaggero.it/dist/assets/index-DuTKJPhW.js · https://www.ilmessaggero.it/videogames/giochi_messaggero_come_giocare_guida-9883239.html |
| Il canale delle testate italiane è già servito (Studio Giochi, Keesing Italia) | Bucatore | **Confermata, ma riguarda la carta.** Studio Giochi fornisce pagine e inserti (La Stampa, ex GEDI d'estate, Enigmistica24); sul suo sito non trovo un'offerta digitale [stima: è un fornitore di contenuti per la stampa]. Keesing Italia ha comprato Sudoku srl (4,6 M€ di ricavi nel 2021) | https://studiogiochi.com/i-nostri-clienti/ · bebeez.it (sopra) |
| Il daily semantico italiano è uno spazio libero | Entusiasta (Contexto senza italiano) contro Bucatore (semantle.it) | **Il Bucatore ha ragione.** semantle.it è attivo con "Indovinello del giorno", gioco libero e multigiocatore fino a 6. Contexto ha solo pt/en/es | https://www.semantle.it/ · https://contexto.me/assets/index-p6O9qHBk.js |

### Criteri di confutazione, uno per uno
1. **Editori in casa o da pochi fornitori a prezzi bassi: soddisfatto per i grandi editori, non dimostrato per le testate locali digitali.**
   - Grandi editori: NYT, Atlantic, Corriere e Caltagirone fanno in casa (verificato per Caltagirone). Le piattaforme internazionali costano 49-500 $/mese. Studio Giochi e Keesing presidiano la carta.
   - Testate locali digitali: nessuno ha mostrato un fornitore che dia alle testate locali italiane giochi automatici in italiano sulle notizie e sui dati del territorio. Però l'equivalente americano (INN News Games) costa 49 $/mese: il prezzo è comunque basso.
2. **I casi virali non monetizzano: soddisfatto per i daily "a dati", non per quelli di parole.** Housle è spento, Costcodle vive di donazioni. Wordle ha monetizzato solo con l'exit. Daydash/Contexto e Actorle monetizzano, ma sono giochi di parole o di trivia senza alcun vantaggio da scraping.
3. **Il vantaggio dati non è percepito dagli utenti: soddisfatto nel B2C.** Nessuna evidenza che i giocatori premino il dato fresco; i daily di successo sono di parole o logica, e i giochi di stima che girano (Playlin) usano dati statici. Nel B2B il "cliente" è la testata e il valore percepito è il *contenuto suo, locale e di oggi*. È un'ipotesi plausibile, non dimostrata.

### Verdetto
**Parziale (largamente confutata).**
- Il ramo B2C (prezzo della spesa, semantico, higher/lower) è **confutato**: criteri 2 e 3 soddisfatti, semantico già occupato, rischio legale sullo storico prezzi.
- Il ramo B2B verso i grandi editori è **confutato** dal criterio 1.
- Sopravvive solo un **residuo stretto**: un feed di quiz e giochi locali generati in automatico da notizie e dati del territorio per testate locali italiane, poi europee. Lì non ho trovato un fornitore italiano digitale. Il prezzo di mercato (49-99 $/mese) e il numero di clienti (circa 59 quotidiani, 150-300 testate online ANSO) danno però un tetto basso.

**Fiducia: media.** Le verifiche dirette sono solide; mancano la disponibilità a pagare delle testate italiane e il traffico dei daily italiani esistenti.

**Probabilità di successo: circa 7%.**
- Per arrivare a 50 k€ di margine servono circa 60-80 testate paganti a 99 €/mese, oppure l'espansione multilingua in Europa.
- In Europa ci sono incumbent (Keesing, PA Media, Amuse Labs) e il vantaggio di lingua sparisce.

## Idee concrete che sopravvivono
- [[I-H11-1 Quiz locali automatici per testate]] — punteggio v2: **56**

Scartate:
- prezzo della spesa, come prodotto autonomo: nessuna domanda, rischio art. 102-bis, il dato fresco non serve al gioco;
- semantico italiano: semantle.it esiste già;
- higher/lower sui comuni: c'è già Italiadle;
- feed per piattaforme: nessun listino né domanda trovati.

## Fonti
Elenchi completi con data di accesso nei rapporti `wiki/Rapporti/S4/H11 Entusiasta.md` e `wiki/Rapporti/S4/H11 Bucatore.md`.

Fonti lette dal Giudice il 2026-11-20:
- https://amuselabs.com/pricing/
- https://www.ilmessaggero.it/videogames/giochi_messaggero_come_giocare_guida-9883239.html
- https://giochi.ilmessaggero.it/dist/assets/index-DuTKJPhW.js
- https://studiogiochi.com/i-nostri-clienti/
- https://www.semantle.it/
- https://contexto.me/assets/index-p6O9qHBk.js
- https://bebeez.it/private-equity/la-settimana-sudoku-e-stata-acquisita-da-keesing-italia-parte-di-keesing-media-group-bc-partners-che-produce-200-milioni-di-magazine-di-enigmistica-lanno/
