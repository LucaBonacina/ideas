---
tipo: idea
id: I-H01-2
ipotesi: "[[H01 Dataset e API da scraping venduti a terzi]]"
punteggio_v2: 53
modello_ricavo: "API a consumo e abbonamento B2B per strumenti GEO e agenzie SEO; actor su Apify come vetrina"
tempo_founder_h_sett: 5
investimento_iniziale_eur: "20-40 k€ il primo anno (sviluppo, proxy geolocalizzati, account e chiamate ai modelli) [stima]"
tags: [idea, S1]
---
# I-H01-2 — API di dati sulla visibilità nelle risposte AI, in più lingue

> **Gate aggiornato.** Questa idea vende dati raccolti con lo scraping: serve l'**autorizzazione scritta del datore prima di qualunque esperimento**, anche preparatorio (vedi [[Raccomandazione]], punto 4, e [[I-H16-1 Autorizzazione scritta e veicolo societario]]). Prevale su eventuali passi più leggeri indicati sotto.

> **Come leggere questa nota.** Punteggio e probabilità misurano l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. La [[Classifica]] applica a tutte le idee una regola unica sulla penalità di conflitto con il lavoro, quindi il punteggio lì può differire di qualche punto da quello di questa nota. Sigle nel [[Glossario]].

## In una frase
Raccogliere in modo sistematico, per insiemi di domande in italiano, spagnolo, francese e tedesco e per paese, cosa rispondono ChatGPT, Perplexity, Gemini e le AI Overview/AI Mode di Google: marchi citati, fonti, posizione, sentiment. I dati si vendono come API e dataset agli strumenti GEO e alle agenzie SEO europee.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga.** Gli strumenti di "generative engine optimization" e le agenzie SEO, che devono misurare la presenza dei clienti nelle risposte AI paese per paese.
- **Domanda [fatto].** Peec AI è arrivata a oltre 4 M$ di ARR in 10 mesi con 1.300 aziende e agenzie clienti (TechCrunch, verificato dal Giudice). Profound ha raccolto 180 M$ secondo Dealroom ([[H01 Entusiasta]], fonte 16, dal riepilogo della ricerca).
- **Prezzi di riferimento:**
  - DataForSEO LLM Mentions: 0,02-0,1 $ a richiesta, con un minimo mensile ([[H01 Entusiasta]], fonte 17);
  - actor Apify per ChatGPT, Perplexity e AI Overview: a evento.
  - [stima] Abbonamenti B2B a 300-1.500 €/mese per cliente.

## Distribuzione: come arrivano i primi 100 clienti/utenti
- **Outbound.** Verso una lista finita: strumenti GEO, SEO suite europee e agenzie SEO dei 4 mercati.
- **Vetrina self-service su Apify [fatto, dati Giudice 2026-11-20].** Gli actor che contengono "chatgpt" nel nome raccolgono 1.025 utenti al mese sommati, "perplexity" 692, "ai overview" 1.184. Il leader è sempre Apify (386, 351 e 352 utenti).

## Perché queste competenze danno un vantaggio
- Raccogliere risposte dalle interfacce AI su larga scala, con geolocalizzazione e sessioni per paese e lingua, è scraping difficile: anti-bot, login, interfacce che cambiano spesso.
- La copertura multilingua è dichiarata scarsa negli incumbent: secondo l'Entusiasta, DataForSEO copre ChatGPT solo per USA e inglese. **Il Giudice non l'ha potuto confermare**: la pagina prodotto non lo dice e la pagina di help risponde 404.

## Concorrenti
- DataForSEO, con 27,8 M di prompt ChatGPT e 398 M di prompt AI Overview in archivio (https://dataforseo.com/apis/ai-optimization-api/llm-mentions-api).
- Apify, con i suoi actor.
- Gli stessi strumenti GEO (Peec, Profound), che raccolgono i dati in casa: il cliente potenziale è anche un concorrente.

## Rischi principali (e quello che la ucciderebbe)
- **Quello che la ucciderebbe: i termini d'uso dei fornitori AI** e i blocchi tecnici sulla raccolta automatica dalle interfacce. In alternativa, le API ufficiali con ricerca web, che però non danno le stesse risposte dell'interfaccia.
- **Clienti che si fanno i dati da sé:** gli strumenti GEO maggiori internalizzano la raccolta.
- **DataForSEO o Apify estendono la copertura linguistica** e annullano il vantaggio.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- **1 sviluppatore:** raccolta e manutenzione.
- **1 persona commerciale part-time:** outbound verso la lista.
- **Founder, 5 ore a settimana:** soprattutto nei primi mesi (architettura di raccolta, qualità).

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno | 3 | Misurare la visibilità nelle risposte AI è il prodotto di una categoria in crescita | https://techcrunch.com/2025/11/17/as-ai-search-upends-brand-discovery-peec-ai-hits-4m-arr-and-raises-21m |
| C2 Domanda | 3 | Peec 1.300 clienti; actor di settore su Apify circa 3.000 utenti al mese sommati | TechCrunch; API dello Store |
| C3 Monetizzazione | 3 | Prezzi a richiesta e minimi mensili esistenti (DataForSEO); prezzi B2B diretti non provati | [[H01 Entusiasta]] fonte 17 |
| C4 Vantaggio delle competenze | 3 | Raccolta difficile, ma l'incumbent ha già centinaia di milioni di prompt | https://dataforseo.com/apis/ai-optimization-api/llm-mentions-api |
| C5 Distribuzione senza pubblico | 3 | Lista finita per outbound più vetrina Apify | API dello Store |
| C6 Resistenza all'AI | 4 | È un dato sull'AI stessa, che va raccolto di continuo | — (stima strutturale) |
| C7 Difendibilità | 2 | Storico delle risposte accumulabile, ma copiabile da chi ha già la pipeline | — |
| C8 Debolezza incumbent | 2 | DataForSEO e Apify presenti e forti | Fonti sopra |
| C9 Tempo al primo euro | 4 | Actor pubblicabile in 2-4 settimane | — |
| C10 Delegabilità | 3 | Vendita B2B iniziale con il founder coinvolto | — |
| C11 Tetto a 24 mesi | 3 | Mercato GEO finanziato, ma clienti concentrati | Dealroom (da rapporto) |

Totale lordo: (30+30+45+45+45+20+10+10+20+30+15)/5 = **60**. Penalità: termini d'uso dei fornitori AI e dipendenza dalle loro interfacce −5, conflitto potenziale con il lavoro −2. **Punteggio v2 = 53.**

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
- **Passo 0.** Verifica del contratto di lavoro, come in [[I-H01-1 Portafoglio di actor su target difficili non personali]]. Lettura dei termini d'uso di OpenAI, Perplexity e Google sulla raccolta automatica: se vietano esplicitamente quello che serve, si passa solo alle API ufficiali o si abbandona.
- **Giorni 1-10.** Campione di 500 domande × 4 lingue × 3 motori, con un report di esempio su 5 marchi per paese.
- **Giorni 10-30.** Outbound verso 40 destinatari: strumenti GEO e SEO suite europee, agenzie SEO in Italia, Spagna, Francia e Germania. Si offre il campione gratis e un pilota a pagamento.
- **Soglia di successo, decisa ora:** almeno 3 piloti pagati o lettere d'intenti da almeno 300 €/mese ciascuno entro il giorno 30. Sotto 1: abbandono.

## Fonti
Accesso 2026-11-20.
- https://techcrunch.com/2025/11/17/as-ai-search-upends-brand-discovery-peec-ai-hits-4m-arr-and-raises-21m (letta dal Giudice)
- https://dataforseo.com/apis/ai-optimization-api/llm-mentions-api (letta dal Giudice)
- https://api.apify.com/v2/store (analisi del Giudice)
- Rapporto [[H01 Entusiasta]] (fonti 15-17)
