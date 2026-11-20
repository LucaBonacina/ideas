---
tipo: idea
id: I-H15-1
ipotesi: "[[H15 AI che contesta e recupera soldi per i consumatori]]"
punteggio_v2: 45
modello_ricavo: "success fee 20-25% sull'importo annullato o rimborsato (struttura legale da validare)"
tempo_founder_h_sett: 4
investimento_iniziale_eur: "25-40 k€ (sviluppo MVP 10-15 k€, parere legale 1-3 k€, acquisizione test 5-10 k€, primo anno di back office part-time)"
tags: [idea]
---
# I-H15-1 — Contestazione maxi-bollette a successo

> **Come leggere questa nota.** Punteggio e probabilità misurano l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. La [[Classifica]] applica a tutte le idee una regola unica sulla penalità di conflitto con il lavoro, quindi il punteggio lì può differire di qualche punto da quello di questa nota. Sigle nel [[Glossario]].

## In una frase
L'utente carica una bolletta di conguaglio (luce, gas, acqua). Il sistema:
1. estrae periodi, letture e date;
2. calcola la quota prescritta (prescrizione biennale) o gli errori di fatturazione;
3. invia il reclamo al venditore;
4. se il reclamo non basta, presenta la domanda alla Conciliazione ARERA come delegato.

Si paga solo in caso di esito positivo.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga:** il consumatore. In un secondo tempo anche micro-imprese e condomìni.
- **Quanto:** 20-25% + IVA sull'importo annullato o rimborsato.
  - Le commissioni delle claim company dei voli vanno dal 24 al 50%: [Finanztip](https://www.finanztip.de/presse/airline-aerger-170000-betroffene-holen-sich-im-ersten-halbjahr-mit-fluggasthelfern-geld-zurueck/), letto.
  - Prezzo dei delegati in Italia: **non trovato**.
- **Valore in gioco:** nel 2025 la Conciliazione ARERA ha concluso positivamente 15.506 procedure, con 25.421.623 € di compensation (sottostimata da ARERA). In media sono circa **1.640 € per esito positivo** [calcolo del Giudice, domestico e non domestico insieme].
  - Al 22% fanno circa 360 € per pratica vinta.
  - L'importo domestico medio è probabilmente più basso [stima]: per prudenza si usano 200-250 €.
- **Perché pagare se ARERA è gratis:**
  - Il 42% delle domande ARERA (12.794) arriva già da "altri delegati", diversi dalle associazioni.
  - Il 14,1% delle domande non viene completato dal cliente.
  - L'utente paga per non dover capire letture e prescrizione e per non dover insistere.
  - La disponibilità a pagare **non è provata in Italia**: è il punto da testare.

## Distribuzione: come arrivano i primi 100 clienti/utenti
1. **Google Ads su intento forte:** "maxi bolletta", "conguaglio luce [venditore]", "prescrizione bolletta rifiutata". Il CPC non è misurato. Con un valore di circa 250 € per pratica vinta si sostiene un costo di acquisizione fino a 60-80 € per pratica firmata.
2. **SEO long-tail per venditore e situazione,** in SERP occupate da comparatori e Altroconsumo: è un canale lento.
3. **Partner elencabili via scraping:** amministratori di condominio per le bollette idriche, CAF, sportelli. Rev-share.

## Perché queste competenze danno un vantaggio
Vantaggio moderato (C4, vantaggio delle competenze: 2):
- parsing delle bollette di centinaia di venditori in formati diversi;
- raccolta di delibere ARERA, provvedimenti AGCM e condizioni contrattuali;
- un **dataset proprietario degli esiti** (quale venditore cede, dopo quanto, con quale argomento) che migliora i template e permette di prezzare le pratiche.

Il nucleo però è un'operazione di back office più un LLM, non lo scraping.

## Concorrenti
- **Conciliazione ARERA:** gratuita, 65% di accordi.
- **Associazioni dei consumatori:** 24% delle domande, a quota associativa.
- **Modelli gratuiti Altroconsumo** e servizio "Reclamare".
- **Avvocati a parcella:** deQuo, consulenze da 79,90 €.
- **Comparatori:** Segugio, Facile.it, Selectra spiegano ma non gestiscono.
- **Servizio online nazionale a successo:** non trovato (2 WebSearch del Giudice, 2026-11-20).

## Rischi principali (e quello che la ucciderebbe)
- **Quello che la ucciderebbe: art. 348 c.p. e L. 247/2012.**
  - Cass. pen. 13341/2024 colloca l'esercizio abusivo nell'attività stragiudiziale "continuativa, sistematica e organizzata" ([massima](https://brocardi.it/massimario/81023.html), letta).
  - Se un parere qualificato considera la delega ADR sistematica a pagamento come assistenza legale riservata, l'idea muore.
  - Una mitigazione possibile: gestire le pratiche con avvocati convenzionati. Riduce però il margine e la delegabilità.
- **Rimborsi di somme già pagate:** fatti "per conto" del cliente richiedono la licenza dell'art. 115 TULPS, esclusa dal profilo. Con la cessione del credito c'è invece il rischio dell'art. 106 TUB. Meglio limitarsi alle contestazioni di importi non ancora pagati.
- **Disponibilità a pagare non provata:** ARERA è gratuita.
- **Pratiche commerciali scorrette:** la commissione va presentata con chiarezza. AGCM è severa nel settore energia.
- **GDPR:** POD, indirizzi e consumi sono dati personali.
- **Tempi di incasso:** 40 giorni per il reclamo, poi una media di 56 giorni per la conciliazione, quindi circa 3-4 mesi.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- **Sviluppatore a contratto:** parser delle bollette, generatore di reclami, gestione delle deleghe e delle PEC.
- **1-2 operatori di back office:** controllo delle pratiche e udienze telematiche di conciliazione.
- **Avvocato convenzionato:** revisione a campione ed eventuale fase giudiziale.
- **Gestore acquisizione:** Google Ads e partner.
- **Founder:** circa 4 h/settimana a regime, su prodotto, dati degli esiti e metriche.

## Punteggio v2
| Criterio | Peso | Punteggio | Evidenza | Fonte |
|---|---|---|---|---|
| C1 Bisogno/dolore | 10 | 4 | Reclami scritti ai venditori nel 2025: 278.336 luce e 178.695 gas. Circa 1.640 € medi per esito positivo in conciliazione. | Comunicato ARERA (via Entusiasta, letto); relazione ARERA 2025 (letta dal Giudice) |
| C2 Domanda | 10 | 3 | 30.235 domande ARERA l'anno, 12.794 da delegati non associativi. Volumi di ricerca non misurati. | Relazione ARERA 2025 |
| C3 Monetizzazione | 15 | 2 | Success fee provata all'estero (voli 24-50%). Nessun prezzo italiano di delegati trovato; canale gratuito efficace. | Finanztip; WebSearch del Giudice |
| C4 Vantaggio competenze | 15 | 2 | Parsing delle bollette e dataset degli esiti utili ma non decisivi: il nucleo è un'operazione con un LLM. | [stima] |
| C5 Distribuzione senza pubblico | 15 | 2 | Google Ads possibili ma CPC non misurato. SERP organica occupata da comparatori e Altroconsumo. Partner elencabili. | SERP del Giudice 2026-11-20 |
| C6 Resistenza all'AI generalista | 5 | 3 | Un chatbot scrive la lettera, ma non gestisce delega, scadenze, udienza e follow-up. | [stima] |
| C7 Difendibilità | 5 | 2 | Il dataset degli esiti si accumula, ma il processo si copia. | [stima] |
| C8 Debolezza degli incumbent | 5 | 3 | Nessun servizio online nazionale a successo trovato. Associazioni e avvocati sono analogici. | WebSearch del Giudice |
| C9 Tempo al primo euro | 5 | 3 | Circa 3-4 mesi (40 giorni di reclamo, poi 56 giorni medi di conciliazione). | ARERA; Entusiasta |
| C10 Delegabilità | 10 | 3 | Back office standardizzabile, ma il rischio legale richiede supervisione. | [stima] |
| C11 Tetto di ricavo a 24 mesi | 5 | 3 | 1.500 pratiche × 65% × 250 € ≈ 245 k€/anno; plausibile tra 100 e 300 k€. | [stima] |

Somma ponderata: 40 + 30 + 30 + 30 + 30 + 15 + 10 + 15 + 15 + 30 + 15 = 260, quindi **52/100**. Penalità **−7**: rischio art. 348 c.p. e riserva forense non risolto, rischio dell'art. 115 TULPS se si scivola verso i rimborsi. **Punteggio finale: 45.**

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
1. **Giorni 1-10:** parere scritto di un avvocato esperto di diritto dei consumatori e di professioni riservate (1-3 k€) sulla struttura "delega ADR a successo per contestazioni di importi non pagati". **Gate:** se il parere è negativo o richiede l'iscrizione all'albo per ogni pratica, stop.
2. **Giorni 5-30 (in parallelo):** *nota: fino all'esito del parere sono ammessi solo test di domanda; i mandati si firmano solo dopo un parere favorevole.*
   - landing page "Hai ricevuto una maxi-bolletta? Analisi gratuita in 24 ore, paghi il 22% solo se annulliamo";
   - 2.000 € di Google Ads sulle query di intento forte;
   - analisi delle bollette fatta a mano da un operatore con il supporto di un LLM.
   - Non si presentano pratiche finché il parere non è positivo; si raccolgono solo bollette e firme del mandato condizionato.
3. **Soglie (decise prima):**
   - almeno 60 bollette caricate;
   - mediana dell'importo contestabile ≥ 400 €;
   - almeno 20 utenti firmano il mandato a successo dopo aver visto la commissione;
   - costo per mandato firmato ≤ 80 €.

   Tutte e quattro devono essere raggiunte. Altrimenti l'idea si archivia.

## Fonti
Tutte con accesso 2026-11-20.
- ARERA, relazione Servizio Conciliazione 2025: https://arera.it/fileadmin/allegati/consumatori/conciliazione/Relazione_annuale_2025/Servizio_Conciliazione_Relazione_annuale_2025_IT_20260618.pdf (letto)
- Finanztip, Fluggasthelfer: https://www.finanztip.de/presse/airline-aerger-170000-betroffene-holen-sich-im-ersten-halbjahr-mit-fluggasthelfern-geld-zurueck/ (letto)
- Cass. pen. 13341/2024, massima: https://brocardi.it/massimario/81023.html (letto)
- ecnews, cessione del credito e art. 115 TULPS: https://www.ecnews.it/legale/diritto-civile/diritto-bancario/cessione-del-credito-e-licenza-ex-art-115-tulps/ (letto)
- deQuo, bollette errate: https://www.dequo.it/articoli/bollette-errate (letto)
- Rapporti integrali: [[H15 Entusiasta]], [[H15 Bucatore]]
