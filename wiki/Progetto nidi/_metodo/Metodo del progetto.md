---
tipo: metodo
tags: [progetto, nidi, metodo]
---
# Metodo del progetto

Valgono le regole di rigore della discovery ([[Protocollo di discovery]]): ogni fatto con fonte (URL e data di accesso), distinzione tra **[fatto]** e **[stima]**, "non trovato" quando manca l'evidenza, lettura diretta delle pagine invece degli estratti dei motori di ricerca, nessuna cifra inventata.

## Filone 1: fonti
**Domanda:** quali fonti servono per conoscere *tutti* i servizi educativi 0-6 in Italia, pubblici e privati, con i dati utili ai genitori?

Per ogni fonte una nota in `Progetto nidi/Fonti/` con questo frontmatter:
```yaml
tipo: fonte
ente: ""            # chi la pubblica
livello: ""         # nazionale | regionale | provinciale | comunale | privato
territorio: ""      # es. "Italia", "Lombardia", "Comune di Bari"
tipologie: []       # quali servizi 0-6 copre (nido, micronido, sezione primavera, servizi integrativi, infanzia statale, infanzia paritaria, infanzia non paritaria, …)
gestione: []        # pubblico | privato convenzionato | privato
campi: []           # es. denominazione, indirizzo, capienza, gestore, rette, orari, età, posti liberi, scadenze, progetto pedagogico, lingua, inclusione
formato: ""         # open data (CSV/JSON) | API | pagina web | PDF | dietro SPID | su richiesta
aggiornamento: ""   # frequenza, data dell'ultimo aggiornamento verificato
licenza: ""         # es. CC-BY 4.0, IODL, nessuna indicata, termini d'uso restrittivi
dati_personali: ""  # se contiene dati di persone fisiche e quali
url: ""
verificato_il: ""
affidabilita: ""    # alta | media | bassa, con motivazione
tags: [fonte]
```
Corpo: cosa copre e cosa no, come si accede, esempio di record, problemi noti, fonti.

Per ogni regione una nota in `Progetto nidi/Regioni/` con: normativa regionale sui servizi 0-3 e 0-6 (autorizzazione al funzionamento, accreditamento, requisiti), chi tiene il registro o l'elenco, fonti regionali e comunali principali (collegamenti alle note fonte), buchi noti, cosa serve per essere completi.

**Test di completezza:** in un comune campione per regione (dimensioni diverse), costruire a mano l'elenco "vero" incrociando tutte le fonti (registri, sito del comune, ricerche web, mappe) e misurare la copertura di ogni fonte. Risultato: percentuale di copertura per fonte e per regione.

## Filone 2: bisogni → funzioni
1. **Percorso dell'utente**, dalla gravidanza all'ingresso alla scuola primaria, per i genitori; e il percorso del gestore (farsi trovare, gestire richieste, iscrizioni, lista d'attesa, comunicazione con le famiglie).
2. **Catalogo dei bisogni** in `Progetto nidi/Bisogni/`: una nota per bisogno con frontmatter `tipo: bisogno`, `utente` (genitore | gestore | ente), `fase`, `frequenza` (quante fonti indipendenti lo citano), `gravita` (1-5), `soddisfazione_attuale` (1-5, quanto è risolto oggi in Italia), `segmenti` (es. bilingue, bisogni speciali), e nel corpo le citazioni con link.
3. **Priorità:** punteggio di opportunità = importanza × (6 − soddisfazione attuale), con importanza da frequenza e gravità; si dichiarano le formule.
4. **Funzioni:** ogni funzione collegata ad almeno un bisogno documentato; classificata come indispensabile, importante o accessoria; con la fonte dei dati che la rende possibile (collegamento al filone 1).
5. **Concorrenti** in `Progetto nidi/Concorrenti/`: funzioni, modello di ricavo, storia (anche cambi di modello e funzioni abbandonate), recensioni degli utenti.
6. **Interviste:** traccia per genitori e gestori, da usare dopo la ricerca desk per verificare i bisogni.

## Regole operative per le sessioni
- Al massimo 2 subagenti attivi alla volta; al massimo 25 ricerche web per subagente; preferire la lettura diretta (curl, WebFetch).
- Nessun dato personale raccolto o salvato (niente nomi di persone fisiche, email, telefoni personali).
- Note con collegamenti Obsidian `[[...]]` usando il nome esatto dei file.
