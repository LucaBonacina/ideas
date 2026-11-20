---
tipo: idea
id: I-H02-1
ipotesi: "[[H02 Dati freschi per AI e agenti]]"
punteggio_v2: 49
modello_ricavo: "abbonamento B2B (API) per app di viaggio e assistenti AI + piano a consumo via Apify/MCP"
tempo_founder_h_sett: 4
investimento_iniziale_eur: "15-25 k€ il primo anno [stima]"
tags: [idea, S1]
---
# I-H02-1 — Feed "Italia in tempo reale" per assistenti di viaggio

> **Come leggere questa nota.** Punteggio e probabilità misurano l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. La [[Classifica]] applica a tutte le idee una regola unica sulla penalità di conflitto con il lavoro, quindi il punteggio lì può differire di qualche punto da quello di questa nota. Sigle nel [[Glossario]].

## In una frase
Un feed strutturato e storicizzato, con livelli di servizio, di informazioni operative italiane che cambiano spesso e sono sparse su centinaia di siti: scioperi dei trasporti, eventi locali, chiusure e aperture straordinarie di musei e siti, orari dei traghetti, ZTL. È venduto come API o MCP ad app di viaggio, tour operator digitali e costruttori di assistenti AI.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga.** OTA e app di viaggio, assistenti AI di viaggio, piattaforme di agenti che usano modelli non Google.
- **Perché.** Le policy di Google Places vietano di tenere in cache i contenuti oltre le eccezioni, e il grounding con Google Maps è legato a Vertex ([[H02 Entusiasta]] ev. 15).
- **Prezzi di riferimento:**
  - [fatto] chiamate generiche a 5 $ ogni 1.000 (Parallel); dati gestiti da 1.500 $/mese (Bright Data);
  - [stima] 300-2.000 €/mese per cliente B2B.
  - **Compratori reali per questo tipo di dato: non trovati.**

## Distribuzione: come arrivano i primi 100 clienti/utenti
- **Outbound** verso una lista finita: OTA, app di viaggio italiane ed europee, tour operator digitali, startup di assistenti di viaggio.
- **Actor e MCP su Apify** come vetrina a consumo.
- **Sinergia possibile** con il prodotto B2C di [[H13 Regole e disponibilità locali per chi si muove]] (regole locali per chi si muove in Italia), che usa gli stessi dati. Nota: H13 è stata poi smentita.

## Perché queste competenze danno un vantaggio
Le fonti sono frammentate: sui portali open data solo 6 dataset regionali di eventi trovati, mentre gli avvisi dei musei (per esempio gli scioperi agli Uffizi) stanno solo sulle home page (`docs/research/05-screening-b2c-b.md`). Servono raccolta multi-fonte, normalizzazione e storicizzazione continue, cioè il lavoro del founder.

## Concorrenti
- La ricerca generica per AI (Exa, Perplexity) e i browser agentici, che leggono la pagina al momento della domanda.
- Google Maps e Places per orari e chiusure.
- Per scioperi ed eventi in forma strutturata via API: **non trovati concorrenti**. Va confermato.

## Rischi principali (e quello che la ucciderebbe)
- **Quello che la ucciderebbe:** le app e gli assistenti preferiscono la ricerca al momento della domanda (1-5 $ ogni 1.000 chiamate) a un abbonamento. Il criterio 2 di H02 è verificato per la ricerca generica.
- **Diritto *sui generis*** su aggregatori di eventi e termini d'uso delle fonti. Mitigazione: usare fonti ufficiali e fatti non protetti.
- **Domanda non dimostrata.**
- **Compatibilità con il lavoro dipendente**, da verificare.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- 1 sviluppatore od operatore di fiducia per le fonti e il controllo qualità.
- Commerciale part-time per l'outbound.
- Founder 3-5 ore a settimana su architettura e qualità.

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno | 2 | Dolore dei compratori non documentato | — |
| C2 Domanda | 2 | Compratori non trovati | — |
| C3 Monetizzazione | 2 | Solo prezzi di riferimento generici, nessun prezzo provato per questo dato | [[H02 Entusiasta]] ev. 5, 9 |
| C4 Vantaggio delle competenze | 4 | Fonti frammentate e senza API; serve raccolta multi-fonte continua | `docs/research/05-screening-b2c-b.md` |
| C5 Distribuzione senza pubblico | 3 | Lista finita per l'outbound più Apify/MCP | — |
| C6 Resistenza all'AI | 4 | Dati operativi freschi; limiti al caching di Google Places | https://developers.google.com/maps/documentation/places/web-service/policies |
| C7 Difendibilità | 2 | Lo storico si accumula, ma senza evidenza di valore | — |
| C8 Debolezza incumbent | 2 | Nessuna evidenza | — |
| C9 Tempo al primo euro | 3 | 1-3 mesi [stima] | — |
| C10 Delegabilità | 3 | Manutenzione di molte fonti delegabile; vendita B2B iniziale col founder | — |
| C11 Tetto a 24 mesi | 2 | Nessuna evidenza di un mercato ampio | — |

Totale lordo: (20+20+30+60+45+20+10+10+15+30+10)/5 = **54**. Penalità: diritto *sui generis* e termini d'uso delle fonti −3, conflitto potenziale con il lavoro −2. **Punteggio v2 = 49.**

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
- **Passo 0.** Verifica del contratto di lavoro.
- **Giorni 1-10.** Prototipo di API e MCP su 3 città (Roma, Firenze, Milano) con scioperi, eventi e chiusure; schema dati e documentazione pubblica.
- **Giorni 10-30.** Outbound verso 30 destinatari tra app di viaggio, OTA, tour operator digitali e startup di assistenti AI, con un periodo di prova gratuito. In parallelo, l'actor pubblicato su Apify.
- **Soglia di successo, decisa ora:** almeno 2 lettere d'intenti o piloti pagati da almeno 200 €/mese, **oppure** almeno 30 utenti mensili sull'actor entro il giorno 30. Se nessuna delle due condizioni si verifica, l'idea è abbandonata.

## Fonti
Accesso 2026-11-20.
- [[H02 Entusiasta]] (evidenze 5, 9, 15; idea 2)
- [[H02 Bucatore]] (listini della ricerca generica, evidenza 12)
- https://developers.google.com/maps/documentation/places/web-service/policies (dal rapporto dell'Entusiasta)
- `docs/research/05-screening-b2c-b.md` (frammentazione delle fonti di eventi e musei, da riverificare)
