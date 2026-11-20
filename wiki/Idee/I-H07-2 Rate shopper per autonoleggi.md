---
tipo: idea
id: I-H07-2
ipotesi: "[[H07 Micro-SaaS B2B verticale]]"
punteggio_v2: 56
modello_ricavo: "abbonamento per sede (149-399 €/mese), piani annuali per ridurre l'abbandono stagionale"
tempo_founder_h_sett: 5
investimento_iniziale_eur: "30-45 k€ [stima]"
tags: [idea, S3]
---
# I-H07-2 — Rate shopper per autonoleggi

> **Come leggere questa nota.** Punteggio e probabilità misurano l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. La [[Classifica]] applica a tutte le idee una regola unica sulla penalità di conflitto con il lavoro, quindi il punteggio lì può differire di qualche punto da quello di questa nota. Sigle nel [[Glossario]].

## In una frase
Strumento che ogni giorno rileva i prezzi della concorrenza sui broker di autonoleggio (Rentalcars, DiscoverCars e simili) per aeroporto, data, durata e categoria. È pensato per autonoleggi indipendenti e in franchising del Sud Europa, con avvisi e suggerimenti di prezzo.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga:** autonoleggi locali presenti negli aeroporti e sulle isole, che devono riallineare i prezzi ogni giorno.
- **Incumbent:** Rate-Highway Rate-Monitor parte da 500 $/mese, è focalizzato sugli USA ed è attivo dal 1998 [fatto, Slashdot, directory e non il sito del venditore].
- **Prezzo proposto:** 149-399 €/mese per sede [stima].

## Distribuzione: come arrivano i primi 100 clienti/utenti
- **Elenco:** i fornitori visibili sui broker per ogni località.
- **Aggancio:** un report gratuito "i tuoi prezzi contro 10 concorrenti nel tuo aeroporto", proposto tra gennaio e aprile, prima della stagione.
- **Contatto:** telefono e moduli di contatto (l'email a freddo è vincolata, vedi [[H07 Micro-SaaS B2B verticale]]).
- **Integrazioni con i gestionali di noleggio:** nessun marketplace trovato.

## Perché queste competenze danno un vantaggio
- Molte richieste geolocalizzate, con prezzi dinamici e difese anti-bot.
- Classificare i veicoli in modo coerente tra broker diversi è un problema di pulizia dei dati.

## Concorrenti
- Rate-Highway.
- Strumenti interni dei grandi noleggiatori.
- Altri non verificati.

## Rischi principali (e quello che la ucciderebbe)
- **Rischio che la ucciderebbe:** il mercato è troppo piccolo. Il numero di autonoleggi italiani attivi non è stato trovato in fonte ufficiale; una directory commerciale ne riporta 7.619, senza distinguere gli attivi (dato debole).
- Termini d'uso dei broker.
- Forte stagionalità.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- Come [[I-H07-1 Intelligence OTA per operatori di tour]]: un ingegnere di scraping e un operatore commerciale e di supporto.
- Le due idee condividono infrastruttura anti-bot e processi.
- Founder circa 5 ore/settimana [stima].

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno/dolore (10) | 3 | Prezzi da riallineare ogni giorno; dolore non misurato | [stima] |
| C2 Domanda (10) | 2 | Numero di imprese non trovato in fonte ufficiale | informazione-aziende.it (debole) |
| C3 Monetizzazione (15) | 4 | Un incumbent vende a ≥ 500 $/mese | Slashdot Rate-Monitor |
| C4 Vantaggio competenze (15) | 4 | Scraping geolocalizzato e anti-bot, abbinamento delle categorie | [stima] |
| C5 Distribuzione senza pubblico (15) | 2 | Solo outbound, con email a freddo vincolata | Garante 10252188 |
| C6 Resistenza all'AI generalista (5) | 4 | Dati freschi | [stima] |
| C7 Difendibilità (5) | 3 | Storico dei prezzi | [stima] |
| C8 Debolezza degli incumbent (5) | 3 | Incumbent USA, presenza nel Sud Europa non verificata | — |
| C9 Tempo al primo euro (5) | 3 | Legato alla stagione | [stima] |
| C10 Delegabilità (10) | 3 | Come I-H07-1 | [stima] |
| C11 Tetto a 24 mesi (5) | 2 | 40 sedi × 250 € ≈ 120 k€/anno, con domanda non misurata | [stima] |
| **Totale lordo** | **61** | | |
| Penalità | −5 | −3 termini d'uso dei broker; −2 rischio legale dell'outbound | |
| **Totale** | **56** | | |

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
1. Censire i noleggiatori presenti sui broker in 5 aeroporti (Catania, Palermo, Cagliari, Olbia, Bari).
2. Produrre 40 report gratuiti e chiamare i noleggiatori.
3. Offrire un preordine della stagione 2027 a 149 €/mese.

**Soglie fissate prima:**
- **Successo:** ≥ 150 noleggiatori distinti censiti nei 5 aeroporti, **e** ≥ 4 preordini o lettere d'intenti pagate.
- **Fallimento:** < 80 noleggiatori oppure 0 preordini → archiviare.

## Fonti
Accesso 2026-11-20.
- https://slashdot.org/software/p/Rate-Monitor/
- https://www.informazione-aziende.it/77-11_NOLEGGIO-E-LEASING-OPERATIVO-DI-AUTOMOBILI-E-AUTOVEICOLI-LEGGERI/
- https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10252188
- [[H07 Entusiasta]] · [[H07 Bucatore]]
