---
tipo: sintesi
tags: [sintesi, classifica]
aggiornato: 2026-11-20
---
# Classifica delle idee

Questa pagina confronta le idee con il **punteggio v2** (0-100, vedi [[Glossario]] e [[Protocollo di discovery]]). Il punteggio misura l'obiettivo **B. business da almeno 50 k€/anno** (soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]].

## Regola unica per la penalità di conflitto con il lavoro
Le sessioni di ricerca avevano applicato questa penalità in modo diverso (da 0 a −8). Qui è applicata a tutte le idee con la stessa regola:
- **−8** se l'idea vende dati o servizi di scraping a terzi (centro della fascia −5/−10 proposta in [[H16 Founder a tempo parziale]]);
- **−2** se lo scraping è uno strumento interno del prodotto (fascia 0/−3 di H16);
- **−1** se lo scraping serve solo a trovare opportunità (es. cosa comprare, partner): fascia aggiunta in questa pagina;
- **0** se lo scraping non c'entra.

Le altre penalità (legali, di piattaforma) restano quelle dei giudici. Il protocollo prevedeva "penalità fino a −10" senza specificare altro: qui si è deciso che il tetto vale per ciascuna categoria di penalità (decisione registrata nel [[Protocollo di discovery]]). Per questo i punteggi qui possono differire di qualche punto da quelli scritti nelle singole note ("v2 della sessione").

## Le 4 idee approfondite (secondo giro)
**Come sono state scelte:** al momento della scelta le prime tre per punteggio erano [[I-H09-1 Sync fornitori senza feed]], [[I-H03-1 Monitoraggio prezzi gestito per cataloghi senza EAN]] e [[I-H05-1 Micro-SaaS B2B trascurato con leva di prezzo]]. La scelta è stata fatta con una prima versione della regola sul conflitto, in cui I-H06-1 non aveva penalità: per il quarto posto erano quindi pari [[I-H06-1 Disdetta digitale per l'Italia]] e [[I-H01-1 Portafoglio di actor su target difficili non personali]] (58). È stata scelta I-H06-1 perché era la migliore idea B2C, mentre I-H01-1 vende scraping a terzi come I-H03-1, già nel gruppo, e avrebbe aggiunto poca informazione nuova. Con la regola definitiva (−2 per I-H06-1) I-H06-1 scende a 56, sotto I-H01-1 (58).

| Idea | Primo giro | **Secondo giro** | Probabilità (giudice) | In una riga |
|---|---|---|---|---|
| [[I-H03-1 Monitoraggio prezzi gestito per cataloghi senza EAN]] | 64 | **52** | ~4% | Ferma senza autorizzazione scritta del datore; NetPricer fa già matching per codice OEM nei ricambi auto, in italiano |
| [[I-H09-1 Sync fornitori senza feed]] | 67 | **50** | ~5% | I portali B2B vietano bot e cessione delle credenziali; regge solo con grossisti che autorizzano |
| [[I-H05-1 Micro-SaaS B2B trascurato con leva di prezzo]] | 59 | **48** | ~7% | Conflitto con il lavoro trascurabile; per l'obiettivo B servono 350-475 k€ di capitale (~165-380 k€ per il reddito extra, vedi [[Raccomandazione]]) |
| [[I-H06-1 Disdetta digitale per l'Italia]] | 56 | **41** | ~3% | Concorrente diventato gratuito; margine nullo con la raccomandata online |

**Perché sono scesi:** sia per due correzioni di metodo (il costo di un operatore pagato a mercato, da [[H16 Founder a tempo parziale]]; il vantaggio dello scraping ricalibrato, da [[H17 Vantaggio dello scraping]]), sia per fatti nuovi verificati (concorrenti, termini d'uso dei portali, vincoli di piattaforma).

**Attenzione al confronto:** i punteggi del secondo giro non sono confrontabili con quelli del primo. Le idee rimaste al primo giro non sono migliori delle 4 approfondite: semplicemente non sono state ricalibrate, e probabilmente scenderebbero anche loro.

Il test pratico previsto in [[I-H17-1 Test di replicabilità dello scraping]] non è stato eseguito: la ricalibrazione del vantaggio dello scraping è stata fatta a tavolino, con la regola di H17.

## Tutte le idee (primo giro, regola unica)
| # | Idea | Lordo | Altre penalità | Conflitto | **Punteggio** | Nella nota | Ore founder/sett | Investimento iniziale [stima] |
|---|---|---|---|---|---|---|---|---|
| 1 | [[I-H09-1 Sync fornitori senza feed]] | 74 | −5 | −2 | **67** | 69 | 4 (10 nei primi 3 mesi) | 25-40 k€ (55-75 k€ dopo il secondo giro) |
| 2 | [[I-H03-1 Monitoraggio prezzi gestito per cataloghi senza EAN]] | 73 | −1 | −8 | **64** | 66 | 4 | 30-50 k€ |
| 3 | [[I-H05-1 Micro-SaaS B2B trascurato con leva di prezzo]] | 66 | −6 | −1 | **59** | 60 | 5 (5-8 durante la ricerca) | 150-300 k€ (350-475 k€ dopo il secondo giro per l'obiettivo B; ~165-380 k€ per l'obiettivo A) |
| 4 | [[I-H01-1 Portafoglio di actor su target difficili non personali]] | 72 | −6 | −8 | **58** | 64 | 4 | 15-30 k€ |
| 5 | [[I-H03-2 Monitoraggio rivenditori e prezzi minimi per brand italiani]] | 65 | −1 | −8 | **56** | 58 | 4 | 25-45 k€ |
| 5 | [[I-H06-1 Disdetta digitale per l'Italia]] | 64 | −6 | −2 | **56** | 58 | 3 | 15-30 k€ |
| 7 | [[I-H05-2 App utility trovate via scraping degli store]] | 64 | −8 | −1 | **55** | 56 | 4 | 10-60 k€ per app |
| 8 | [[I-H11-1 Quiz locali automatici per testate]] | 56 | 0 | −2 | **54** | 56 | 4 | 15-30 k€ |
| 9 | [[I-H07-1 Intelligence OTA per operatori di tour]] | 62 | −5 | −8 | **49** | 57 | 5 | 30-50 k€ |
| 10 | [[I-H07-2 Rate shopper per autonoleggi]] | 61 | −5 | −8 | **48** | 56 | 5 | 30-45 k€ |
| 10 | [[I-H09-2 Schede prodotto da EAN]] | 61 | −5 | −8 | **48** | 56 | 4 | 20-35 k€ |
| 12 | [[I-H01-2 API dati di visibilità nelle risposte AI multilingua]] | 60 | −5 | −8 | **47** | 53 | 5 | 20-40 k€ |
| 13 | [[I-H15-1 Contestazione maxi-bollette a successo]] | 52 | −7 | −1 | **44** | 45 | 4 | 25-40 k€ |
| 14 | [[I-H02-1 Feed Italia in tempo reale per assistenti di viaggio]] | 54 | −3 | −8 | **43** | 49 | 4 | 15-25 k€ |

Perché alcune idee hanno −8 pur non sembrando "vendita di dati": [[I-H07-1 Intelligence OTA per operatori di tour]] vende ranking e prezzi raccolti dalle agenzie online, [[I-H07-2 Rate shopper per autonoleggi]] vende le tariffe dei concorrenti (è monitoraggio prezzi), [[I-H09-2 Schede prodotto da EAN]] vende contenuti raccolti dai siti dei produttori. Per tutte e tre serve quindi l'autorizzazione del datore.

## Come leggere i numeri
- **Nessuna idea supera 67 al primo giro, e nessuna supera 52 dopo il secondo.** Non è emersa un'opportunità evidente per l'obiettivo B.
- Le probabilità di successo delle ipotesi di business stimate dai giudici vanno dal 4% al 12%. Per le singole idee esistono solo le 4 stime del secondo giro (3-7%).
