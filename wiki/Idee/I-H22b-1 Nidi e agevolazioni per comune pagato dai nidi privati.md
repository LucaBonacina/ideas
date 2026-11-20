---
tipo: idea
id: I-H22b-1
ipotesi: "[[H22b Un unico punto di accesso a informazioni disperse]]"
punteggio_v2: 54
modello_ricavo: "gratis per i genitori; abbonamento dei nidi privati per scheda verificata, posti liberi e open day (19-29 €/mese)"
tempo_founder_h_sett: 3
investimento_iniziale_eur: "3-10 k€ nel modello leggero (sviluppo con AI, scraping, LLM, dominio), 30-50 k€ con un commerciale part-time [stima]"
obiettivo_A: "bassa (~4% modello leggero; ~2% con collaboratori)"
obiettivo_B: "2%"
obiettivo_C: "bassa"
utilita: "media"
tags: [idea, famiglia, S11]
---
# I-H22b-1 — Nidi e agevolazioni per comune, pagato dai nidi privati

> Idea sopravvissuta a [[H22b Un unico punto di accesso a informazioni disperse]]. Obiettivo A per primo; sigle nel [[Glossario]].

## In una frase
Una pagina pubblica per ogni comune, partendo da una o due regioni, con tutto ciò che serve a un genitore di un bambino 0-3 anni:
- tutti i nidi (pubblici, privati, micronidi, nidi famiglia);
- rette e regole ISEE del comune;
- finestre di iscrizione e graduatorie;
- adesione del comune alle misure regionali (es. Nidi Gratis Plus);
- agevolazioni locali e bonus INPS.

La pagina è costruita con open data e scraping dei siti comunali, e offre avvisi gratuiti per comune ed età. A pagare sono i nidi privati con posti da riempire.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga.** I nidi privati senza lista d'attesa. Il 54% dei nidi privati ha bambini in lista d'attesa, quindi il 46% no: circa 4.500 strutture [stima su 14.570 servizi, di cui circa il 67% privati, dato ISTAT 2023/24]. Comprano una scheda verificata, posti liberi aggiornati, open day ed evidenza nella pagina del comune.
- **Prezzi di riferimento:**
  - kidsgo (Germania): 15-29 €/mese più IVA nei livelli intermedi [fatto, verificato in S9];
  - BeMyHero PRO (Italia): da 9,90 €/mese [fatto, S9];
  - RomaperBambini: 20 € per evento [fatto, S9].
- **Prezzo ipotizzato:** 19-29 €/mese, con prova gratuita.
- **Perché pagherebbero.** Un nido privato con posti vuoti perde circa 500-700 €/mese di retta per ogni posto [stima]. La pagina intercetta il genitore nel momento della scelta, che è anche il momento in cui guarda rette e agevolazioni.
- **Obiettivo A, modello leggero [stima].** Costi di circa 2-8 k€/anno: società (0 € dentro una società già esistente, 3-5 k€ se nuova), hosting e scraping, LLM per i PDF. Per 1-2 k€/mese netti servono circa 20-50 k€/anno di ricavo, cioè **circa 70-170 nidi a 25 €/mese** (circa 1,5-4% del bacino).
- **Obiettivo A, modello con collaboratori part-time [stima].** 60-116 k€ di costi da coprire più il netto: **circa 257-500 nidi**.
- **Ricavi secondari (non contati):** affiliazione verso chi gestisce le pratiche (programma non trovato) e un modulo stagionale per i centri estivi (F3).

## Distribuzione: come arrivano i primi 100 clienti/utenti
- **Genitori:** SEO long-tail su "asilo nido [comune]", con varianti "prezzi", "bando", "graduatoria". Ho verificato 7-10 suggerimenti per Seriate, Vimercate e Castel San Pietro Terme, e 1 per Torre de' Roveri. Per i bonus comunali la domanda di ricerca è nulla (0 suggerimenti): le agevolazioni vanno appese alle pagine dei nidi. Le misure regionali hanno domanda propria ("nidi gratis plus": 10 suggerimenti).
- **Nidi:** outbound su un elenco pubblico. In Lombardia il registro aperto dà denominazione, indirizzo, telefono e posti di 2.707 unità. Si contattano per primi i privati non convenzionati.
- **Limite:** la SEO richiede 6-12 mesi. L'esperimento testa quindi prima il pagatore, poi il traffico.

## Perché queste competenze danno un vantaggio
- Bisogna unire tre fonti eterogenee:
  - open data regionali, dove esistono;
  - PDF e pagine comunali (rette, avvisi, graduatorie) su migliaia di siti costruiti con pochi CMS ricorrenti (Maggioli, Municipium, Liferay, template "design comuni");
  - calendari dei bandi regionali e adesioni dei comuni.
- Gli URL dei bandi cambiano a ogni edizione: serve rilevare le novità, non uno scraping una tantum.
- L'estrazione con un LLM rende sostenibile la coda dei comuni piccoli: circa 60 $/mese per tutta Italia secondo il Bucatore.
- **Il vantaggio non sta nell'elenco dei nidi**, che in Lombardia è aperto e che l'INPS completerà. Sta nel **contorno**: rette, finestre e adesioni.

## Concorrenti
- **Mappa INPS dei nidi.** Elenco anagrafico, dietro SPID, transitorio nel 2026/27, senza rette né scadenze. Non è indicizzabile.
- **Siti comunali.** A Milano la pagina del comune fa da hub, ma elenca circa metà delle 391 unità del registro. Nei comuni piccoli l'informazione manca o il sito è in errore.
- **Informafamiglie (Emilia-Romagna).** Pubblico, con buchi e pagine ferme.
- **BonusX.** Solo bonus nazionali, 1 pagina comunale.
- **Google Maps, Ask Maps, risposte AI.** Rischio sulle query di navigazione.
- **Directory private di nidi.** Nessuna con rette e agevolazioni per comune trovata in Italia.

## Rischi principali (e quello che la ucciderebbe)
- **Quello che la ucciderebbe:** i nidi privati non pagano. In Italia il prezzo reale osservato è 9,90 €/mese, Hoop (Regno Unito) non incassa e Winnie ha abbandonato i lead (S9). "Senza lista d'attesa" può voler dire semplicemente pieno.
- **Responsabilità sulle scadenze.** Una finestra sbagliata danneggia la famiglia. Mitigazioni: servizio gratuito per i genitori, link alla fonte ufficiale e data di verifica su ogni scheda, avvisi formulati come promemoria.
- **Costo della verifica.** Coprire tutta Italia richiede verifica umana (circa 2 persone a tempo pieno, stima del Bucatore). Nel modello leggero ci si limita a 1-2 regioni.
- **Risposte AI e INPS.** Quando la PDND sarà a regime (2027/28) l'elenco dei nidi diventerà una commodity, e il valore dovrà stare nel contorno.
- **Licenza dei dati.** Quella del dataset lombardo non compare nei metadati: va verificata prima di ripubblicarlo (D.Lgs. 36/2006).
- **Conflitto con il lavoro:** scraping interno al prodotto, penalità −2. Gate: lettura del contratto e regole di separazione.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- **Modello leggero.** Il founder costruisce con l'AI la pipeline (open data, scraping, LLM, pagine) in 4-6 settimane. Poi dedica circa 3 ore a settimana a controllo qualità e correzioni. Un collaboratore occasionale chiama i nidi nei periodi di vendita, a provvigione.
- **Modello con collaboratori.** Un commerciale part-time per i nidi e un redattore part-time che verifica rette e scadenze nei periodi di iscrizione (gennaio-maggio).

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno (10) | 3 | Misure decisive a finestra breve (Nidi Gratis Plus: 24 giorni) con adesione comune per comune (38 comuni non aderenti nel Varesotto). Informazioni assenti nei comuni piccoli. Beneficio per famiglia da 1-2 a 3-6 ore l'anno, con picchi di centinaia di euro | [[H22b Entusiasta]] E8-E13; [[H22b Bucatore]] §6.3 |
| C2 Domanda (10) | 3 | "asilo nido [comune]": 7-10 suggerimenti nei comuni di circa 20-50 mila abitanti, ma molte query cercano un nido preciso. 0 sui bonus comunali | autocompletamento, verifica del Giudice |
| C3 Monetizzazione (15) | 2 | Listino estero pubblico (kidsgo). In Italia 9,90 €/mese. Nessun dato di conversione | S9; [[I-H22-1 Directory feste e corsi per bambini con abbonamento strutture]] |
| C4 Vantaggio competenze (15) | 4 | Rette, avvisi e adesioni sono sparsi in PDF e albi su migliaia di siti, con URL nuovi a ogni edizione. L'elenco dei nidi invece è aperto | prova sui comuni in entrambi i rapporti |
| C5 Distribuzione senza pubblico (15) | 3 | SEO long-tail elencabile per comune e outbound su un registro pubblico dei nidi. La SEO però è lenta e i nidi sono un pubblico difficile | registro lombardo; autocompletamento |
| C6 Resistenza all'AI (5) | 3 | Dati locali freschi (posti, finestre) che un modello generalista non ha senza una fonte aggiornata. Le query di navigazione invece sono esposte | [[H22b Bucatore]] §6.5 |
| C7 Difendibilità (5) | 2 | Schede rivendicate dai nidi e storico delle rette; copiabile da chi ha le stesse competenze. Nessuna evidenza di effetto rete | — |
| C8 Debolezza incumbent (5) | 3 | INPS dietro SPID e con soli dati anagrafici; siti comunali incompleti. La PDND però rafforzerà l'INPS dal 2027/28 | news INPS 11/9/2026 |
| C9 Tempo al primo euro (5) | 2 | Si può vendere ai nidi prima del traffico, ma la proposta regge solo con traffico (6-12 mesi) | [stima] |
| C10 Delegabilità (10) | 3 | Pipeline automatizzabile; vendita ai nidi e verifica stagionale delegabili; serve controllo qualità | [stima] |
| C11 Tetto a 24 mesi (5) | 2 | Teorico circa 1,3 M€ (4.500 nidi × 300 €), realistico sotto 100 k€/anno con conversioni di pochi punti percentuali | [stima] |

Calcolo: (3×10 + 3×10 + 2×15 + 4×15 + 3×15 + 3×5 + 2×5 + 3×5 + 2×5 + 3×10 + 2×5) / 5 = 285 / 5 = **57**.

Penalità:
- conflitto con il lavoro: −2 (scraping interno);
- rischio legale residuo sulle scadenze: −1.

**Punteggio finale: 54.**

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
1. **Settimane 1-2.** Costruire le pagine dei comuni di una provincia lombarda (es. Bergamo o Monza e Brianza) dal registro aperto e dai siti comunali: rette, finestre 2027/28 e adesione a Nidi Gratis Plus. Misurare quanti comuni hanno dati estraibili e quante ore servono per la verifica.
2. **Settimane 2-4.** Contattare per telefono o email **150 nidi privati** della provincia. Offerta: scheda verificata, posti liberi ed evidenza nella pagina del comune per le iscrizioni 2027/28, a **19 €/mese con il primo mese gratis**. Il pagamento si attiva dal secondo mese, con la carta registrata subito.

**Soglie decise ora:**
- **successo:** almeno **8 nidi** registrano la carta o pagano un anno anticipato (circa 5%);
- **zona grigia:** 3-7 nidi. In questo caso si ripete su un'altra provincia prima di decidere;
- **stop:** meno di 3 nidi.

**Soglia secondaria (fattibilità):** almeno il 70% dei comuni della provincia con rette e finestre estraibili, in meno di 10 minuti di verifica umana per comune. Sotto questa soglia il modello leggero non regge.

## Fonti
Accesso 2026-11-20. Dettaglio nei rapporti [[H22b Entusiasta]] e [[H22b Bucatore]].
- ISTAT, nidi 2023/24: https://www.istat.it/wp-content/uploads/2026/02/REPORT_OFFERTA-DI-NIDI-E-SERVIZI-INTEGRATIVI-PER-LA-PRIMA-INFANZIA.pdf
- Registro lombardo delle unità 0-3: https://www.dati.lombardia.it/resource/pej5-wp65.json
- Mappa INPS: https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.09.bonus-nido-una-mappa-per-geolocalizzare-le-strutture-convenzionate.html
- kidsgo: https://www.kidsgo.de/familienmitgliedschaft
- BeMyHero PRO: https://bemyheropro.com/
- Comune di Milano, nidi: https://www.comune.milano.it/servizi/scuola/nidi-d-infanzia-e-sezioni-primavera
- Autocompletamento: https://suggestqueries.google.com/complete/search?client=firefox&hl=it&q=asilo+nido+seriate
