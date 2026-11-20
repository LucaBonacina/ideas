---
tipo: idea
id: I-H01-1
ipotesi: "[[H01 Dataset e API da scraping venduti a terzi]]"
punteggio_v2: 64
modello_ricavo: "pay-per-event su Apify Store (80% allo sviluppatore) + API diretta a crediti per i clienti grandi"
tempo_founder_h_sett: 4
investimento_iniziale_eur: "15-30 k€ il primo anno (sviluppatore part-time, proxy, compute) [stima]"
tags: [idea, S1]
---
# I-H01-1 — Portafoglio di actor su target difficili non personali

> **Come leggere questa nota.** Punteggio e probabilità misurano l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. La [[Classifica]] applica a tutte le idee una regola unica sulla penalità di conflitto con il lavoro, quindi il punteggio lì può differire di qualche punto da quello di questa nota. Sigle nel [[Glossario]].

## In una frase
Un portafoglio di 20-40 actor su Apify Store, mantenuti da un team, su siti con difese anti-bot serie e dati non personali: marketplace ed e-commerce europei, prezzi e cataloghi, annunci di veicoli e usato, viaggi. Lo scopo è essere il leader affidabile di ogni nicchia e non il clone economico. I clienti con volumi alti passano poi a un'API diretta.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga.** Sviluppatori, agenzie, analisti e agenti AI che usano Apify via API o MCP. Pagano a risultato perché costruire e mantenere uno scraper su siti difesi costa più che comprarlo.
- **Prezzi di riferimento [fatto, API dello Store, 2026-11-20]:**
  - TikTok (leader): 3,7 $ ogni 1.000 risultati, che scendono a 0,5 $ ai livelli più alti;
  - Google Maps: 4 $ ogni 1.000;
  - componenti aggiuntivi AI: 3-4 volte il dato base.
  - Apify trattiene il 20% più i costi di piattaforma (https://docs.apify.com/platform/actors/publishing/monetize).
- **Payout per utente [stima del Giudice].** Circa 1,7-2,4 $ per utente mensile, cioè i payout dichiarati divisi per gli utenti della community.
- **Obiettivo [stima].** Per 50 k€ di margine dopo il costo del manutentore servono circa 7 k$ al mese di payout, cioè circa 3.000 utenti mensili sul portafoglio.

## Distribuzione: come arrivano i primi 100 clienti/utenti
- **Canale integrato.** L'Apify Store, con ricerca interna, Google e integrazioni MCP, Make, n8n e Zapier. Dal 19/11/2026 nelle categorie affollate la ricerca dello Store premia l'uso reale (https://blog.apify.com/apify-store-search-update/), quindi conta l'affidabilità.
- **Domanda misurata dal Giudice [fatto, utenti a 30 giorni sommati sugli actor del target, 2026-11-20]:**
  - eBay 2.557, Etsy 2.756, Temu 1.300, TikTok Shop 3.813;
  - leboncoin 681, mobile.de 629, Vinted 588, AutoScout24 371, Allegro 316, Kleinanzeigen 252;
  - idealo 97, Zalando 35, Trovaprezzi 0.
- **[stima]** I target europei valgono singolarmente poche centinaia di utenti: per arrivare a 3.000 servono 8-12 nicchie vinte, oppure l'ingresso in 2-3 categorie globali più grandi, battendo leader esistenti sull'affidabilità.

## Perché queste competenze danno un vantaggio
- I cloni economici costano 10-50 volte meno ma non scalzano i leader ([[H01 Bucatore]] E15-E16): il cliente paga l'affidabilità.
- Su 7.161 actor con almeno 100 run al mese, 766 hanno un tasso di successo sotto il 90% (dato API, [[H01 Bucatore]] E14).
- Un actor Vinted ha perso il 76% degli utenti per problemi anti-bot ([[H01 Entusiasta]], fonte 31).

Lo scraping avanzato è esattamente ciò che separa il leader dal clone.

## Concorrenti
- **Apify stessa:** è il primo account dello Store, con il 32,5% degli utenti.
- **Pubblicatori professionali:** compass, clockworks, harvestapi, memo23, blackfalcondata, epctex, ParseForge (2.000 actor).
- Su ogni target europeo ci sono già da 5 a 33 actor.

## Rischi principali (e quello che la ucciderebbe)
- **Quello che la ucciderebbe: la dipendenza da Apify.** Ha già imposto il pay-per-event, con ricavo zero per gli actor non migrati (https://blog.apify.com/standardizing-actor-pricing). Potrebbe alzare la commissione o lanciare actor propri sui target vincenti.
- **Termini d'uso e *sui generis* dei siti sorgente**, per esempio CV-Online sugli annunci. Mitigazione: niente login, niente dati personali, niente estrazione sostanziale di banche dati come prodotto rivenduto in blocco.
- **Rischio di sconfinare negli ambiti esclusi.** Annunci immobiliari, dati aziendali e lead vanno lasciati fuori.
- **Compatibilità con il lavoro dipendente (art. 2105 c.c.)**, da verificare sul contratto.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- **1 sviluppatore part-time, poi full-time:** costruzione, manutenzione, monitoraggio dei tassi di successo, supporto.
- **Il caso di riferimento** per 98 actor richiede 15-20 ore a settimana di lavoro: è il carico da pagare ([[H01 Bucatore]] E5).
- **Founder, 3-5 ore a settimana:** scelta delle nicchie dai dati dello Store, revisione delle soluzioni anti-bot difficili, prezzi.

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno | 3 | Gli scraper si rompono; affidabilità pagata più del prezzo (i leader tengono i prezzi) | [[H01 Bucatore]] E14-E16 |
| C2 Domanda | 3 | 1,24 M di coppie utente-actor al mese sullo Store, ma i target europei non esclusi valgono poche centinaia di utenti ciascuno | API dello Store (calcolo del Giudice) |
| C3 Monetizzazione | 3 | Pagatori provati (2 M$ al mese dichiarati), prezzi unitari bassi (0,5-4 $ ogni 1.000), mediana per sviluppatore di circa 30 $ al mese | https://apify.com/ ; calcolo del Giudice |
| C4 Vantaggio delle competenze | 4 | I leader vincono sull'affidabilità anti-bot; i cloni economici non li scalzano | [[H01 Bucatore]] E15-E16 |
| C5 Distribuzione senza pubblico | 5 | Marketplace integrato con ricerca che premia l'uso | https://blog.apify.com/apify-store-search-update/ |
| C6 Resistenza all'AI | 4 | Dati freschi su siti difesi; gli agenti chiamano gli actor via MCP | [[H01 Entusiasta]] ev. 8 |
| C7 Difendibilità | 2 | Copiabile; vantaggio solo dalla posizione in classifica e dalle recensioni | API dello Store |
| C8 Debolezza incumbent | 2 | Apify e pubblicatori professionali forti su ogni categoria grande | API dello Store |
| C9 Tempo al primo euro | 5 | Pubblicazione e incasso in meno di un mese (caso: 64,80 $ in 18 giorni) | https://dev.to/sessionzero_ai/i-built-13-korean-data-scrapers-heres-what-i-actually-made-in-month-1-8ep |
| C10 Delegabilità | 4 | Manutenzione affidabile a uno sviluppatore; il founder resta sotto le 5 ore | https://blog.apify.com/building-98-actors-on-apify-store/ |
| C11 Tetto a 24 mesi | 3 | 51-73 sviluppatori stimati oltre 4,8 k$ al mese; pochi oltre 50 k$ al mese | Calcolo del Giudice |

Totale lordo: (30+30+45+60+75+20+10+10+25+40+15)/5 = **72**. Penalità: dipendenza da una sola piattaforma −5, termini d'uso delle fonti −1, conflitto potenziale con il lavoro −2. **Punteggio v2 = 64.**

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
- **Passo 0, prima di tutto.** Il founder rilegge il contratto di lavoro (esclusiva, attività extra, proprietà intellettuale) e chiede un parere di 1 ora a un giuslavorista. Se emerge un divieto, l'esperimento non parte.
- **Giorni 1-5.** Dall'API dello Store si scelgono 6 target europei non esclusi con domanda di almeno 150 utenti al mese sommati e un leader con tasso di successo sotto il 95% o recensioni scarse (es. leboncoin, mobile.de, Vinted, Allegro, Kleinanzeigen, eBay venduti EU).
- **Giorni 5-15.** Uno sviluppatore costruisce e pubblica 6 actor in pay-per-event a prezzo pari al leader, con tasso di successo misurato.
- **Giorni 15-30.** Si misurano utenti, run e ricavi dal pannello Apify.
- **Soglia di successo, decisa ora:** al giorno 30 almeno 60 utenti mensili sommati **e** almeno 1 actor sopra 25 utenti con tasso di successo ≥ 97%.
- **Esiti:**
  - sotto 20 utenti totali: abbandono;
  - tra 20 e 60: un secondo ciclo di 30 giorni con altri 6 target.

## Fonti
Accesso 2026-11-20.
- https://api.apify.com/v2/store (analisi del Giudice)
- https://apify.com/
- https://docs.apify.com/platform/actors/publishing/monetize
- https://blog.apify.com/standardizing-actor-pricing
- https://blog.apify.com/apify-store-search-update/
- https://blog.apify.com/building-98-actors-on-apify-store/
- https://dev.to/sessionzero_ai/i-built-13-korean-data-scrapers-heres-what-i-actually-made-in-month-1-8ep
- Rapporti [[H01 Entusiasta]] e [[H01 Bucatore]]
