---
tipo: idea
id: I-H17-1
ipotesi: "[[H17 Vantaggio dello scraping]]"
punteggio_v2: "n.a."
modello_ricavo: "nessuno: strumento di calibrazione del criterio C4"
tempo_founder_h_sett: 1
investimento_iniziale_eur: "50-200 per idea testata (crediti API e LLM) [stima]"
tags: [idea, raccomandazione-operativa]
---
# I-H17-1 — Test di replicabilità dello scraping

> Raccomandazione operativa emersa da [[H17 Vantaggio dello scraping]]. Serve a dare a C4 (vantaggio delle competenze) un valore misurato invece che presunto, per ogni idea che arriva allo scoring finale.

## In una frase
Per ogni idea finalista, una persona non esperta di scraping prova per un giorno a riprodurre la pipeline dati dell'idea con strumenti gestiti (Firecrawl, Zyte o Bright Data, Claude Code); il risultato fissa C4.

## Chi paga, quanto, perché
Non applicabile: costo interno di crediti API e LLM e di una giornata di lavoro.

## Procedura
1. Per l'idea, scrivere la **specifica dei dati**: fonti (numero e tipo), campi, frequenza di aggiornamento, qualità richiesta (es. matching corretto oltre il 95%).
2. Un membro del team non specialista (o un freelance junior) ha **8 ore** e un budget di 100 $ in API gestite e LLM per riprodurre un campione: 10% delle fonti, un ciclo di aggiornamento.
3. Misurare tre cose: copertura delle fonti, accuratezza dei campi su 100 record controllati a mano, e costo stimato per un anno a regime.
4. Fissare C4 in base al risultato:
   - **≥ 80% di copertura e accuratezza ≥ 95%:** C4 = 1-2, nessun vantaggio;
   - **50-80%, oppure accuratezza bassa per problemi di matching o normalizzazione:** C4 = 3;
   - **< 50%, oppure servono storico e manutenzione su fonti che cambiano spesso:** C4 = 4-5.

## Perché queste competenze danno un vantaggio
È proprio ciò che il test misura. Le verifiche di [[H17 Vantaggio dello scraping]] indicano che l'accesso e l'estrazione si comprano (Proxyway: 4 API su 11 aprono i siti protetti oltre l'80% delle volte) e che i non esperti con LLM fanno scraping di siti complessi (arXiv 2601.06301).

## Rischi principali
- Gli agenti e le API migliorano in fretta: un test fatto oggi vale per qualche mese. Va ripetuto prima di investire.
- Un campione del 10% può sottostimare la difficoltà della coda lunga delle fonti.
- Il test non misura il rischio legale, che va valutato a parte (vedi [[I-H16-1 Autorizzazione scritta e veicolo societario]]).

## Come si delega
Interamente: lo esegue il team su una specifica scritta dal founder (1 ora per idea) e il founder legge l'esito.

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1-C11 | n.a. | Strumento di calibrazione di C4 per le idee delle altre sessioni, non un'idea di ricavo | [[H17 Vantaggio dello scraping]] |

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
- **Azione:** applicare il test alle 3 idee finaliste con il C4 più alto nelle altre sessioni.
- **Ipotesi da validare:** il test discrimina, cioè dà esiti diversi tra idee.
- **Soglia di successo (decisa ora):** almeno 1 delle 3 idee scende di 2 o più punti di C4 rispetto alla stima a tavolino, oppure almeno 1 resta ≥ 4 con evidenza misurata. Se tutte e 3 restano invariate entro ±1, il test non aggiunge informazione e si torna alla stima a tavolino.

## Fonti
Accedute il 2026-11-20.
- Proxyway, Web Scraping API Report 2025: https://proxyway.com/research/web-scraping-api-report-2025
- arXiv 2601.06301, "Beyond BeautifulSoup": https://arxiv.org/abs/2601.06301
- Listini Firecrawl, Zyte e Bright Data: citati in [[H17 Bucatore]]
