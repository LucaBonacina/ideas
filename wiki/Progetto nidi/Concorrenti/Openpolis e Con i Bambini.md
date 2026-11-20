---
tipo: concorrente
nome: "Openpolis e Con i Bambini (Osservatorio povertà educativa)"
paese: "Italia"
attore: "non profit"
categoria: "osservatorio statistico (dati aggregati per comune, non per struttura)"
url: "https://www.openpolis.it/poverta-educativa/"
fascia: "0-17 (per lo 0-6: asili nido e servizi prima infanzia, aggregati per comune)"
copertura: "7.900 comuni circa (file 2023 con servizi attivi e posti autorizzati per comune, fonte ISTAT); nessuna scheda di singola struttura"
modello_ricavo: "nessuno per gli utenti; progetto finanziato da Con i Bambini (Fondo per il contrasto della povertà educativa minorile)"
stato: "attivo"
verificato_il: "2026-11-20"
tags: [concorrente]
---
# Openpolis e Con i Bambini (Osservatorio povertà educativa)

## In breve
Dal 2018 la Fondazione Openpolis e l'impresa sociale Con i Bambini pubblicano l'osservatorio "#conibambini" sulla povertà educativa. L'indirizzo `conibambini.openpolis.it` reindirizza a `openpolis.it/poverta-educativa/`. Per lo 0-6 pubblica articoli, grafici incorporabili e **file scaricabili con i dati di ogni comune**: servizi attivi, posti autorizzati, posti per 100 bambini di 0-2 anni e classificazione delle aree interne, tutto su dati ISTAT. È uno strumento per **amministratori, giornalisti e ricercatori**, non per scegliere un nido: non elenca le singole strutture.

## Funzioni per i genitori
| Funzione | Esito | Fonte |
|---|---|---|
| Ricerca di strutture, scheda, contatti | **non presenti** | openpolis.it/poverta-educativa, curl |
| Ricerca "il tuo comune" | non trovata come motore. I dati comunali sono in file XLS scaricabili (uno per regione nel 2018, nazionale nel file 2023) | esercizio "L'offerta di asili nido in Italia"; articolo del 5/5/2026 |
| Mappe e grafici | [fatto] grafici e mappe incorporabili ("Incorpora grafico", iframe `embed.openpolis.it`) | articolo del 5/5/2026 |
| Contenuti | [fatto] articoli ed "esercizi" a puntate, newsletter | sito |

## Funzioni per i gestori
Nessuna.

## Dati mostrati e da dove li prende
| Campo (file per comune 2023) | Fonte |
|---|---|
| Comune, provincia, regione, macroarea | ISTAT |
| Servizi attivi (numero) | ISTAT, indagine sui servizi educativi per l'infanzia |
| Posti autorizzati | ISTAT |
| Posti autorizzati per 100 bambini di 0-2 anni (%) | elaborazione Openpolis-Con i Bambini |
| Classificazione delle aree interne | SNAI/ISTAT |

Il file `2023_asili_nido/lombardia.xls` contiene in realtà 7.905 righe: tutta Italia, non solo la Lombardia [fatto, letto con pandas].

Dato nazionale più recente [fatto]: **31,6 posti ogni 100 bambini sotto i 3 anni** nell'a.e. 2023/24 (28 nel 2021, 30 nel 2022). 13 regioni sono sopra il 33% (erano 6 nel 2021). I comuni polo ne hanno 38,7, le aree interne 24,5 (Openpolis, 5/5/2026; aggiornamento del grafico 3/2/2026).

## Modello di ricavo e prezzi
Gratis. Contenuti "liberamente utilizzabili" (newsletter) [fatto]. Finanziamento: partnership con Con i Bambini [fatto: "Partner" nelle pagine]. Importi: non trovati.

## Storia
- Osservatorio attivo almeno dal 2018. Sui nidi: AGI e Openpolis, 17/10/2018; esercizio #36 "Asili nido in Italia", 27/4/2021; articolo "Asili nido, obiettivo 33% più vicino", 5/5/2026 [fatto].

## Cosa dicono gli utenti
Non trovato (strumento per addetti ai lavori; ripreso spesso dalla stampa, per esempio AGI e Il Giorno).

## Punti di forza e lacune
- [fatto] Copertura di tutti i comuni con un indicatore semplice (posti per 100 bambini), dati scaricabili e grafici incorporabili.
- [fatto] Lacuna: niente singole strutture, rette o posti liberi. Dati ISTAT con circa 2 anni di ritardo (2023/24 pubblicato nel 2026).

## Cosa ci insegna per l'Italia
1. **Un indicatore di contesto per comune è utile anche ai genitori:** "nel tuo comune ci sono X posti ogni 100 bambini" spiega perché è difficile entrare e invita a guardare i comuni vicini. Si può riusare citando la fonte.
2. **La distribuzione via grafici incorporabili e stampa locale** è un canale a costo zero che Openpolis usa con successo.
3. **I dati per comune ISTAT confermano le zone senza servizi** (aree interne), dove un servizio di ricerca ha poco da mostrare e serve piuttosto orientare verso i comuni vicini o i servizi integrativi.

## Fonti
(accesso 2026-11-20)
- https://conibambini.openpolis.it/ (redirect a https://www.openpolis.it/poverta-educativa/)
- https://www.openpolis.it/asili-nido-obiettivo-33-piu-vicino-ma-restano-i-divari/ (5/5/2026)
- https://www.openpolis.it/esercizi/lofferta-di-asili-nido-in-italia/ (27/4/2021)
- File per comune: https://s3.eu-central-1.amazonaws.com/minidossier.openpolis.it/comuni/Canale+pov+edu/2023_asili_nido/lombardia.xls
- https://www.agi.it/cronaca/news/2018-10-17/asili_nido_obiettivo_europeo-4489368/ (estratto di ricerca, non letto)
- Collegati: [[Eduscopio]], [[Mappa INPS Bonus nido]]
