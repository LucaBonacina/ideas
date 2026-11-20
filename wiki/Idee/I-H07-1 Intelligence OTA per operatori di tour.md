---
tipo: idea
id: I-H07-1
ipotesi: "[[H07 Micro-SaaS B2B verticale]]"
punteggio_v2: 57
modello_ricavo: "abbonamento mensile per operatore (100-199 €/mese)"
tempo_founder_h_sett: 5
investimento_iniziale_eur: "30-50 k€ [stima]"
tags: [idea, S3]
---
# I-H07-1 — Intelligence OTA per operatori di tour

> **Gate aggiornato.** Questa idea vende dati raccolti con lo scraping: serve l'**autorizzazione scritta del datore prima di qualunque esperimento**, anche preparatorio, con parere di un avvocato del lavoro (vedi [[Raccomandazione]], punto 4, e [[I-H16-1 Autorizzazione scritta e veicolo societario]]). Prevale su eventuali passi più leggeri indicati sotto.

> **Prezzo.** Il giudice di [[H07 Micro-SaaS B2B verticale]] fa sopravvivere solo i verticali con prezzo di almeno 100 €/mese: il prezzo di 79 € proposto sotto (anche nell'esperimento) va portato ad almeno 100 €.

> **Come leggere questa nota.** Punteggio e probabilità misurano l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. La [[Classifica]] applica a tutte le idee una regola unica sulla penalità di conflitto con il lavoro, quindi il punteggio lì può differire di qualche punto da quello di questa nota. Sigle nel [[Glossario]].

## In una frase
Cruscotto per tour operator e attività (guide, attrazioni, esperienze) che vendono su GetYourGuide, Viator, Tiqets e Klook. Mostra la posizione nella ricerca per parola chiave e città, i prezzi e la disponibilità dei concorrenti e le loro nuove recensioni, con avvisi e un report settimanale.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga:** operatori di esperienze in Italia, Spagna e Grecia, che dipendono dal posizionamento sulle OTA (portali di vendita online).
- **Dimensione del mercato:** GetYourGuide dichiarava 18 mila fornitori nel 2023 [fatto, Skift].
- **Prezzi di riferimento:**
  - OTAlytics è l'unico concorrente dedicato trovato; il prezzo non è stato trovato;
  - l'analogo più vicino sono i rilevatori di tariffe per hotel, da 100 $/mese (Hotel Tech Report) [fatto].
- **Prezzo proposto:** 79-199 €/mese [stima].

## Distribuzione: come arrivano i primi 100 clienti/utenti
- **Elenco degli operatori:** si ricava dalle schede pubbliche delle OTA.
- **Aggancio:** un audit gratuito automatico ("sei sceso dal 3° al 9° posto per 'Colosseo'").
- **Primo contatto:**
  - **non** via email a freddo verso persone fisiche in Italia (Garante, 17/04/2026);
  - sì via moduli di contatto pubblici, telefono e social, oppure via email solo dove la legge locale lo consente.
- **App nel marketplace di Bókun:** canale da verificare.
- **Pagine SEO** "come salire nella ricerca di GetYourGuide a [città]" [stima].

## Perché queste competenze danno un vantaggio
- Le OTA sono protette da anti-bot (Cloudflare su GetYourGuide, secondo le pagine degli scraper Apify).
- I risultati cambiano per lingua, valuta e data.
- Lo stesso tour va riconosciuto e collegato tra più OTA.
- È un lavoro di scraping avanzato che non si copia in una settimana.

## Concorrenti
- OTAlytics.
- Servizi di scraping su commissione.
- Possibili strumenti nativi delle OTA (analisi per i fornitori).

## Rischi principali (e quello che la ucciderebbe)
- **Il rischio che la ucciderebbe:** le OTA bloccano lo scraping in modo efficace o lanciano analisi gratuite equivalenti per i fornitori.
- Termini d'uso delle OTA: serve una verifica legale.
- Clienti piccoli con abbandono stagionale.
- Il canale di acquisizione non è provato senza email a freddo.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- **Ingegnere di scraping part-time:** manutenzione degli estrattori.
- **Operatore per acquisizione e supporto:** audit e contatti, multilingue con AI.
- **Founder:** architettura anti-bot e priorità, circa 5 ore/settimana dopo l'avvio [stima].

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno/dolore (10) | 3 | Dipendenza dal ranking OTA plausibile, ma dolore non misurato | [stima] |
| C2 Domanda (10) | 3 | 18 mila fornitori su GetYourGuide (2023) | Skift 13/11/2023 |
| C3 Monetizzazione (15) | 3 | Analoghi per hotel a 100 $/mese; prezzo del concorrente diretto non trovato | Hotel Tech Report |
| C4 Vantaggio competenze (15) | 4 | Anti-bot, più OTA, abbinamento dei tour | Apify (nota Cloudflare) |
| C5 Distribuzione senza pubblico (15) | 2 | Email a freddo vincolata in Italia; marketplace Bókun non provato | Garante 10252188 |
| C6 Resistenza all'AI generalista (5) | 4 | Dati freschi su ranking e prezzi | [stima] |
| C7 Difendibilità (5) | 3 | Storico dei ranking che si accumula | [stima] |
| C8 Debolezza degli incumbent (5) | 4 | Un solo concorrente dedicato trovato | rapporto Entusiasta |
| C9 Tempo al primo euro (5) | 3 | 2-3 mesi; la stagione parte in primavera | [stima] |
| C10 Delegabilità (10) | 3 | L'acquisizione richiede un operatore capace | [stima] |
| C11 Tetto a 24 mesi (5) | 3 | 120 clienti × 120 € ≈ 170 k€/anno | [stima] |
| **Totale lordo** | **62** | | |
| Penalità | −5 | −3 termini d'uso e dipendenza dalle OTA; −2 rischio legale dell'outbound | |
| **Totale** | **57** | | |

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
1. Estrarre gli operatori di Roma, Firenze e Venezia da GetYourGuide e Viator (stima: 500-1.000).
2. Generare 150 audit automatici.
3. Proporli tramite moduli di contatto, telefono e messaggi LinkedIn, gestiti da un operatore.
4. Offrire una prova di 14 giorni e poi 79 €/mese.

**Soglie fissate prima:**
- **Successo:** ≥ 20 operatori che aprono l'audit e chiedono la prova, **e** ≥ 5 che pagano il primo mese.
- **Fallimento:** < 2 paganti → archiviare.

## Fonti
Accesso 2026-11-20.
- https://skift.com/2023/11/13/getyourguide-cfo-latest-experience-trends-and-cracking-the-u-s/
- https://hoteltechreport.com/compare/lighthouse-rate-insight-vs-ratemate-rate-shopper
- https://www.capterra.in/software/1326529/OTAlytics (403, non letta)
- https://apify.com/memo23/tours-activities-scraper
- https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10252188
- [[H07 Entusiasta]] · [[H07 Bucatore]]
