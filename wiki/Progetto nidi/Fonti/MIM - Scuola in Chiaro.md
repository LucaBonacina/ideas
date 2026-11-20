---
tipo: fonte
ente: "Ministero dell'Istruzione e del Merito (MIM), piattaforma Unica"
livello: nazionale
territorio: "Italia (stesse lacune dell'anagrafe MIM: Trento e Bolzano senza scuole dell'infanzia)"
tipologie: [infanzia statale, infanzia paritaria]
gestione: [pubblico statale, pubblico comunale paritario, privato paritario]
campi: [codice meccanografico, denominazione, istituto, email, telefono, indirizzo, comune, provincia, CAP, latitudine, longitudine, statale/paritaria, tipo di istruzione, numero alunni, numero classi, tempi scuola, bacheca, RAV e sezioni didattica/servizi quando compilati]
formato: "pagina web (app Next.js) con API JSON pubblica non documentata"
aggiornamento: "allineato all'anno scolastico corrente (scheda vista: tempi scuola a.s. 2026/2027)"
licenza: "nessuna licenza indicata per l'API; i dati anagrafici sono gli stessi dell'open data IODL 2.0"
dati_personali: "sì, in parte: alcune schede di scuole comunali riportano email nominative di dipendenti (anche nel campo sito web)"
url: "https://unica.istruzione.gov.it/sic/"
verificato_il: 2026-11-20
affidabilita: "alta per i dati anagrafici e le coordinate; media per i contenuti compilati dalle scuole (spesso vuoti per l'infanzia)"
tags: [fonte, nazionale, mim, scuola-infanzia]
---
# MIM - Scuola in Chiaro

> Il motore di ricerca delle scuole del MIM, oggi dentro Unica. Mostra le stesse scuole dell'anagrafe open data ([[MIM - Anagrafe scuole statali e paritarie]]) aggiungendo **coordinate e telefono**. Per la scuola dell'infanzia i contenuti oltre l'anagrafica sono scarsi.

## Come si accede (verificato)
- Il vecchio indirizzo `https://cercalatuascuola.istruzione.it/cercalatuascuola/` reindirizza a `https://unica.istruzione.gov.it/sic` [fatto, curl].
- La ricerca chiama un'API JSON pubblica, senza login: `https://unica.istruzione.gov.it/services/sic/api/v1.0/ricerche/ricercaRapida?chiaviDiRicerca=<testo>&numeroElementiPagina=30&numeroPagina=1` [fatto: individuata intercettando le richieste con Playwright e poi chiamata con curl].
- La scheda di dettaglio è una pagina server-side: `https://unica.istruzione.gov.it/cercalatuascuola/istituti/<codice>/<nome>` [fatto].
- Non trovata una licenza né condizioni d'uso specifiche per l'API; non è documentata, quindi può cambiare.

## Esempio di record (scuola dell'infanzia comunale paritaria, Milano)
Risposta dell'API per `MI1A161006`: `codiceDebole`, `denominazione` ("SCUOLA DELL'INFANZIA COMUNALE VIA VAL LAGARINA,26/A"), `email` (istituzionale del Comune), `telefono`, `indirizzo`, `comune`, `provincia`, `cap`, `latitudine` 45.5203, `longitudine` 9.13196, `scuolaStatale` "0", `scuolaParitaria` "1", `tipoDiIstruzione` "AA" [fatto].
La scheda mostra inoltre "SCUOLA PARITARIA - SCUOLA DELL'INFANZIA", alunni 82, classi 0, tempi scuola "Fino a 50 ORE SETTIMANALI" per il 2026/2027 [fatto]. Nel campo "Sito web" compare l'email nominativa di una persona: dato personale, non salvato.

## Copertura (prova su comuni campione)
| Comune | Scuole dell'infanzia in Scuola in Chiaro | Nell'anagrafe open data | Note |
|---|---|---|---|
| Seriate (BG) | 7 (5 paritarie, 2 statali) | 7 | coincide [fatto] |
| Bergamo | 17 paritarie nella prima pagina di 100 risultati | – | ricerca per testo, va paginata [fatto] |
| Trento | 0 scuole dell'infanzia (solo primarie e medie paritarie, centri di formazione) | 0 | conferma la lacuna delle province autonome [fatto] |
| Bolzano | 0 risultati con comune = BOLZANO nella prima pagina | 0 | idem [fatto] |

La ricerca per testo restituisce anche "CF" (né statali né paritarie, presumibilmente centri di formazione professionale) [fatto; significato del codice: stima].

## Cosa NON copre
Come l'anagrafe: niente nidi, micronidi, servizi integrativi, sezioni primavera come tali, scuole non paritarie; niente scuole dell'infanzia di Trento e Bolzano. Niente rette, posti liberi, progetto pedagogico strutturato. Le sezioni "Didattica" e "Servizi e attività" esistono ma per le scuole dell'infanzia sono spesso vuote [stima su una sola scheda vista].

## Valore come base per l'elenco completo
**Complementare**: non aggiunge scuole rispetto all'open data, ma aggiunge **coordinate e telefono** (utili per mappa e contatto) e alcuni numeri (alunni, tempi scuola). Da usare con richieste lente e rispettose, essendo un'API non documentata; meglio chiedere al MIM un estratto con coordinate.

## Fonti
- https://unica.istruzione.gov.it/sic/ e https://unica.istruzione.gov.it/sic/ricerca (accesso 2026-11-20, Playwright)
- https://unica.istruzione.gov.it/services/sic/api/v1.0/ricerche/ricercaRapida?chiaviDiRicerca=MI1A161006&numeroElementiPagina=30&numeroPagina=1 (accesso 2026-11-20, curl)
- https://unica.istruzione.gov.it/cercalatuascuola/istituti/MI1A161006/ (accesso 2026-11-20, Playwright)
