---
tipo: idea
id: I-H22b-2
ipotesi: "[[H22b Un unico punto di accesso a informazioni disperse]]"
punteggio_v2: 48
modello_ricavo: "canone annuo per ente pubblico (Ambito territoriale, Unione di comuni, Centro per le famiglie), 2-3 k€/anno [stima non verificata]"
tempo_founder_h_sett: 4
investimento_iniziale_eur: "stesso motore di dati di I-H22b-1; +2-5 k€ per widget, newsletter e iter di affidamento [stima]"
obiettivo_A: "bassa"
obiettivo_B: "1%"
obiettivo_C: "bassa"
utilita: "alta per le famiglie raggiunte"
tags: [idea, famiglia, S11]
---
# I-H22b-2 — Guida 0-6 in white label per Ambiti e Centri per le famiglie

> Variante della stessa ipotesi con un altro pagatore. Condivide il motore di dati con [[I-H22b-1 Nidi e agevolazioni per comune pagato dai nidi privati]]. Sigle nel [[Glossario]].

## In una frase
Lo stesso database per comune (nidi, rette, finestre, misure regionali e comunali, centri per le famiglie), servito come sottosito o widget sul dominio di un Ambito territoriale o di un Centro per le famiglie. Include una newsletter mensile alle famiglie del territorio e un calendario delle scadenze.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga.** Ambiti territoriali, Unioni di comuni, Circondari, Centri per le famiglie.
- **Prezzo ipotizzato:** 2.000-3.000 €/anno. È una **stima non verificata**: l'Entusiasta cita canoni SaaS comunali di 4-15 k€/anno visti solo negli estratti di ricerca, senza leggerli. Sotto le soglie del D.Lgs. 36/2023 si può usare l'affidamento diretto (norma non riletta in S11).
- **Perché pagherebbero [stima].** Le pagine scritte a mano invecchiano: Informafamiglie Bologna è ferma al 6/5/2025, il distretto di Imola manca. Gli sportelli hanno poche ore: il Centro per le famiglie di Castel San Pietro dà informazioni 6 ore a settimana. In più gli enti hanno obblighi di informazione alle famiglie.
- **Obiettivo A, modello leggero [stima]:** servono circa 7-20 enti. **Con collaboratori:** 26-75 enti.

## Distribuzione: come arrivano i primi 100 clienti/utenti
- Vendita diretta a enti elencati pubblicamente: la mappa dei Centri per la famiglia e l'elenco degli Ambiti. Non serve un pubblico.
- Primo cliente naturale: un distretto che manca o è fermo su un portale regionale (es. Imola su Informafamiglie).
- Le famiglie arrivano dai canali dell'ente: sito, sportello, pediatri, nidi.

## Perché queste competenze danno un vantaggio
È lo stesso motore di I-H22b-1: scraping e rilevamento delle novità su albi e PDF comunali, estrazione con LLM, open data regionali. Per un ente, mantenere aggiornata a mano una guida su 10-30 comuni costa più del canone [stima].

## Concorrenti
- Portali regionali pubblici (Informafamiglie in Emilia-Romagna).
- Il Portale della famiglia INPS ("servizi di altri enti").
- I siti dei comuni rifatti con i fondi PNRR sui template "design comuni".
- Fornitori di software per la PA (Maggioli e altri), che potrebbero aggiungere un modulo simile.

## Rischi principali (e quello che la ucciderebbe)
- **Quello che la ucciderebbe:** gli enti non hanno budget o non comprano senza gara, oppure la Regione o l'INPS centralizzano la guida.
- **Cicli di vendita lunghi** (6-12 mesi) e poco compatibili con 5 ore a settimana del founder. Serve un commerciale con esperienza di PA.
- **Responsabilità sulle informazioni.** Si mitiga perché l'ente approva i contenuti.
- **Conflitto con il lavoro:** −2 (scraping interno). Non vende dati a terzi, ma un servizio a un ente pubblico. Gate: lettura del contratto e regole di separazione.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- Il founder mantiene il motore di dati (circa 2-4 ore a settimana).
- Un commerciale part-time o a provvigione con esperienza di PA segue enti e affidamenti.
- La redazione dei contenuti locali la può fare l'operatore dell'ente stesso, con un pannello di approvazione.

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno (10) | 2 | Pagine pubbliche ferme e distretti mancanti. Nessuna evidenza diretta che gli enti sentano il problema | [[H22b Entusiasta]] E11, E14 |
| C2 Domanda (10) | 2 | Nessuna misura della domanda degli enti; potenziali clienti nell'ordine delle centinaia (Ambiti e Centri per le famiglie) [stima] | — |
| C3 Monetizzazione (15) | 2 | Prezzo stimato, non verificato | — |
| C4 Vantaggio competenze (15) | 4 | Come I-H22b-1: dati sparsi in PDF e albi comunali | prova sui comuni |
| C5 Distribuzione senza pubblico (15) | 3 | Enti elencabili, vendita diretta; ma la PA compra lentamente | [stima] |
| C6 Resistenza all'AI (5) | 3 | Contenuto locale approvato dall'ente, canale istituzionale | [stima] |
| C7 Difendibilità (5) | 2 | Contratti annuali; nessuna evidenza di costi di uscita | — |
| C8 Debolezza incumbent (5) | 3 | Portali regionali incompleti; l'INPS copre solo l'anagrafe dei nidi | [[H22b Entusiasta]] E14; news INPS |
| C9 Tempo al primo euro (5) | 1 | Affidamenti PA: oltre 6 mesi [stima] | — |
| C10 Delegabilità (10) | 2 | Serve un commerciale PA; il founder è coinvolto nelle prime vendite | [stima] |
| C11 Tetto a 24 mesi (5) | 2 | 20-40 enti a 2-3 k€: 40-120 k€/anno nel caso buono | [stima] |

Calcolo: (2×10 + 2×10 + 2×15 + 4×15 + 3×15 + 3×5 + 2×5 + 3×5 + 1×5 + 2×10 + 2×5) / 5 = 250 / 5 = **50**. Penalità di conflitto −2. **Punteggio finale: 48.**

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
1. Preparare una demo funzionante per un territorio reale (es. il Circondario Imolese), riusando il motore di I-H22b-1.
2. Contattare **30 enti**, tra Ambiti, Unioni e Centri per le famiglie di Emilia-Romagna e Lombardia, con la demo del loro territorio.

**Soglie decise ora:**
- **successo:** almeno **2 enti** chiedono un preventivo formale o firmano una lettera di intenti con un budget indicato di almeno 1.500 €/anno;
- **zona grigia:** 1 ente;
- **stop:** nessuno.

## Fonti
Accesso 2026-11-20. Dettaglio in [[H22b Entusiasta]] (sezioni 5 e 7) e [[H22b Bucatore]] (sezione 7).
- Informafamiglie: https://www.informafamiglie.it/
- Mappa INPS: https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-una-mappa-per-geolocalizzare-le-strutture-convenzionate.html
