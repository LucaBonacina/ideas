---
tipo: idea
id: I-H11-1
ipotesi: "[[H11 Giochi quotidiani basati su dati]]"
punteggio_v2: 56
modello_ricavo: "canone B2B mensile per testata o gruppo editoriale (eventuale sponsor locale del quiz)"
tempo_founder_h_sett: 4
investimento_iniziale_eur: "15-30 k€ (stima: pipeline, 1 sviluppatore per 2-3 mesi, operatore part-time per 6 mesi)"
tags: [idea, giochi, b2b, editoria]
---
# I-H11-1 — Quiz locali automatici per testate

> **Come leggere questa nota.** Punteggio e probabilità misurano l'obiettivo B (business da almeno 50 k€/anno entro 24 mesi; soglia fissata da Claude, non dall'utente). Per reddito extra e "costruisci e vendi" vedi [[Classifica per obiettivo]]. La [[Classifica]] applica a tutte le idee una regola unica sulla penalità di conflitto con il lavoro, quindi il punteggio lì può differire di qualche punto da quello di questa nota. Sigle nel [[Glossario]].

## In una frase
Ogni settimana, per ogni testata locale cliente, un feed *done-for-you* di quiz e mini-giochi in italiano generati in automatico dagli articoli della testata e da dati freschi del territorio (prezzi dei carburanti per provincia, meteo, dati comunali). È embeddabile, ha classifica locale e raccoglie registrazioni.

## Chi paga, quanto, perché (con prezzi reali di riferimento)
- **Chi paga:** testate locali e gruppi editoriali regionali italiani. Più avanti, testate locali in Spagna, Francia e Germania.
- **Perché:**
  - gli editori usano i giochi per far tornare i lettori e vendere abbonamenti. Tamedia dichiara il 98% di uso giornaliero da utenti di ritorno con un news quiz quotidiano (https://pctipp.ch/themen/news/weitere-spiele-apps-von-tamedia);
  - Il Giornale di Brescia usa giochi locali come leva dell'abbonamento GdB+ (https://www.giornaledibrescia.it/giochi);
  - i grandi gruppi italiani hanno lanciato le loro sezioni nel 2025-2026 (Corriere, Il Messaggero con altre 5 testate).
- **Prezzi di riferimento reali:**
  - PuzzleMe Plus 99 $/mese, Pro 249 $/mese, Enterprise da 500 $/mese (https://amuselabs.com/pricing/, letto);
  - INN News Games 49 $/mese più 250 $ di setup (solo estratti, pagina in 403);
  - ParkerSyndication gratuito con il 50% della pubblicità (estratto).
- **Prezzo ipotizzato:** 79-99 €/mese per testata, 249-490 €/mese per gruppo.
- **Conti [stima]:**
  - per 50 k€ di margine servono circa 60-80 testate equivalenti paganti;
  - è più del numero di quotidiani italiani (59, di cui 43 locali), quindi servono testate online (ANSO dichiara 150-300 testate) e poi l'estero.

## Distribuzione: come arrivano i primi 100 clienti/utenti
1. **Lista elencabile:** le testate locali e regionali senza sezione giochi. L'Entusiasta ne ha individuate circa 13 con un controllo grezzo delle home page; la lista va completata con lo scraping delle home di tutte le testate.
2. **Convenzione ANSO** per i soci (https://www.anso.it/).
3. **Fornitori di app e CMS per testate locali** che integrano "third-party puzzles" (Purple Publish, https://purplepublish.com/en/loesungen/lokalzeitungen).
4. **Prova gratuita di 4 settimane** con dati di ritorno dei lettori mostrati alla redazione.
5. **Secondario:** gli stessi quiz, in versione generica nazionale, sui portali (CrazyGames) per misurare l'engagement a costo basso. Vedi il residuo di [[H10 Giochi web su portali]].

## Perché queste competenze danno un vantaggio
- Lo scraping multi-sito degli articoli di decine di testate (CMS diversi, senza integrazione da parte loro) e la normalizzazione di dati locali freschi sono il cuore del prodotto. In più serve la verifica fattuale automatica delle domande.
- I tool esistenti (PuzzleMe AI, Playgent Forge) danno lo strumento, ma la redazione deve usarlo. Qui il servizio è a zero click e in italiano nativo.
- **Limite onesto:** un LLM con accesso agli articoli fa gran parte del lavoro, e INN offre già giochi generati dalle notizie a 49 $/mese negli USA. Il vantaggio è di esecuzione e di lingua, non di dati esclusivi.

## Concorrenti
- **Strumenti internazionali:**
  - Amuse Labs/PuzzleMe, con pagina dedicata alle testate locali e 57 loghi di clienti;
  - Playgent;
  - INN News Games;
  - Arkadium;
  - Azerion/GameDistribution, con 20 portali white-label.
- **In Italia:**
  - Studio Giochi: stampa, La Stampa, i locali ex GEDI d'estate, Il Sole 24 Ore (https://studiogiochi.com/i-nostri-clienti/);
  - Keesing Italia (gruppo BC Partners);
  - piattaforme interne dei grandi gruppi (Caltagirone, verificato; Corriere).
- **Fornitore italiano di quiz locali automatici in digitale:** non trovato.

## Rischi principali (e quello che la ucciderebbe)
- **Quello che la ucciderebbe:** le testate locali non pagano, o pagano meno di 50 €/mese. Hanno ricavi pubblicitari in calo previsto (PwC, da 431 a 354 M€ nel 2024-2029, da estratto) e alternative gratuite (ParkerSyndication) o già in uso (Studio Giochi, Keesing).
- **Tetto di mercato basso in Italia.** L'espansione all'estero toglie il vantaggio della lingua e porta di fronte a incumbent locali (Keesing, PA Media).
- **Errori fattuali in quiz automatici** con il marchio della testata: serve revisione umana.
- **Legale:** si fa scraping solo dei siti dei clienti, con il loro consenso contrattuale. I dati di terzi devono essere open data (es. carburanti MIMIT). Niente storico prezzi dalla GDO, per il rischio legato all'art. 102-bis LDA.

## Come si delega (ruoli, chi fa cosa, ore del founder)
- **Founder, circa 4 h/settimana dopo l'avvio:** architettura della pipeline di scraping, ETL e LLM; decisioni sui prezzi; poi solo revisione dei KPI.
- **Uno sviluppatore part-time:** widget embeddabile, manutenzione degli scraper per CMS.
- **Un operatore editoriale e commerciale part-time:** revisione dei quiz (pochi minuti per testata), onboarding, vendita outbound su lista.
- Il rapporto è B2B a canone: nessuna community da gestire.

## Punteggio v2
| Criterio | Punteggio | Evidenza | Fonte |
|---|---|---|---|
| C1 Bisogno (10) | 3 | Gli editori lanciano giochi per fidelizzare e vendere abbonamenti (Messaggero novembre 2026, GdB+, Tamedia con 98% di utenti di ritorno). Il bisogno delle testate *locali* non è documentato direttamente | ilmessaggero.it; giornaledibrescia.it/giochi; pctipp.ch |
| C2 Domanda (10) | 2 | 59 quotidiani (43 locali), ANSO 150-300 testate online; budget in calo | anso.it; leliosimi.substack.com (estratto) |
| C3 Monetizzazione (15) | 2 | Ci sono pagatori, ma a prezzi bassi (49-249 $/mese) e con alternative gratuite in revenue share | amuselabs.com/pricing; estratti INN/Parker |
| C4 Vantaggio competenze (15) | 3 | Scraping multi-CMS e dati locali freschi sono il cuore del prodotto, ma un LLM più RSS ne copre gran parte; INN lo fa già negli USA | rapporto H11 Bucatore E6 |
| C5 Distribuzione senza pubblico (15) | 3 | Outbound su una lista elencabile (testate, ANSO, fornitori di app); la vendita a piccoli editori è lenta | anso.it; purplepublish.com |
| C6 Resistenza all'AI (5) | 3 | Dati locali freschi e un flusso di lavoro a zero click; ma il contenuto in sé è generabile | — (ragionamento) |
| C7 Difendibilità (5) | 2 | Scraper e integrazioni per testata creano piccoli costi di uscita; copiabile in poche settimane | — |
| C8 Debolezza degli incumbent (5) | 3 | Nessun fornitore digitale italiano trovato; Studio Giochi e Keesing sono forti sulla stampa; gli strumenti esteri non localizzano | studiogiochi.com; amuselabs.com |
| C9 Tempo al primo euro (5) | 4 | Prototipo in 4-6 settimane; vendita a canone mensile senza gara | stima |
| C10 Delegabilità (10) | 4 | Pipeline automatica più operatore part-time; il founder è necessario solo all'avvio | stima |
| C11 Tetto a 24 mesi (5) | 2 | Italia circa 30-90 k€/anno anche con buona penetrazione; oltre serve l'estero | stima del rapporto H11 Bucatore |

Calcolo: (3·10 + 2·10 + 2·15 + 3·15 + 3·15 + 3·5 + 2·5 + 3·5 + 4·5 + 4·10 + 2·5) / 5 = 280 / 5 = **56**. Nessuna penalità: niente conflitto con il lavoro attuale (editoria locale, non finanza né business information), rischio legale gestito con il consenso dei clienti, nessuna piattaforma unica.

## Esperimento di validazione (≤ 30 giorni, soglia di successo decisa prima)
1. **Settimane 1-2.** Pipeline minima sugli articoli di 3 testate locali, scelte tra quelle senza sezione giochi: RSS/scraping, generazione di 8 domande, revisione umana, widget embeddabile. Più una domanda "dato del territorio" (carburanti per provincia da open data MIMIT).
2. **Settimane 1-4.** Outreach a 30 testate locali e regionali (direttori, responsabili digitali) con una demo sulla *loro* testata, generata dagli articoli della settimana prima. Offerta: 4 settimane gratis, poi 79 €/mese.
3. **Soglie decise ora:**
   - **Successo:** almeno 3 testate su 30 firmano un impegno a pagare almeno 79 €/mese dopo la prova (lettera d'intenti o primo pagamento), **e** almeno 6 su 30 accettano la prova gratuita.
   - **Fallimento:** meno di 2 impegni a pagare, oppure la risposta prevalente è "abbiamo già Studio Giochi/Keesing" o "lo facciamo gratis con tool esteri".
   - **Zona grigia (2 impegni):** ripetere con 30 testate in un secondo paese (Spagna) prima di investire.

## Fonti
Tutte con accesso il 2026-11-20.
- https://amuselabs.com/pricing/ (letto dal Giudice)
- https://www.ilmessaggero.it/videogames/giochi_messaggero_come_giocare_guida-9883239.html e https://giochi.ilmessaggero.it/dist/assets/index-DuTKJPhW.js (letti dal Giudice)
- https://studiogiochi.com/i-nostri-clienti/ (letto dal Giudice)
- https://www.giornaledibrescia.it/giochi
- https://pctipp.ch/themen/news/weitere-spiele-apps-von-tamedia
- https://www.anso.it/
- https://purplepublish.com/en/loesungen/lokalzeitungen
- https://inn.org/resource/news-games/ (403, solo estratti)
- Rapporti `wiki/Rapporti/S4/H11 Entusiasta.md` e `wiki/Rapporti/S4/H11 Bucatore.md`
