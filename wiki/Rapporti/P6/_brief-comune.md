---
tipo: metodo
tags: [progetto, nidi, rapporto, P6]
---
# Brief comune ai subagenti P6 (analisi di Winnie e dei concorrenti)

## Contesto
Progetto: un "Winnie per l'Italia", per trovare, confrontare e scegliere servizi educativi 0-6 (nidi, micronidi, sezioni primavera, servizi integrativi, scuole dell'infanzia statali, comunali, paritarie, private; segmenti bilingui/internazionali e bisogni speciali). Leggi `wiki/Progetto nidi/Home progetto.md` e `wiki/Progetto nidi/_metodo/Metodo del progetto.md` (repo /home/user/ideas). Già noto (da riverificare, non ripartire da zero): `wiki/Ipotesi/H22b Un unico punto di accesso a informazioni disperse.md`, `wiki/Rapporti/S11/H22b Bucatore.md` (mappa INPS dietro SPID, solo dati anagrafici; monenfant.fr blocca curl con Radware; Winnie è passata dai lead all'abbonamento, TechCrunch 2022).

## Cosa scrivere: una nota per concorrente in `wiki/Progetto nidi/Concorrenti/`
Nome file: nome del concorrente, solo lettere, numeri, spazi e trattini (es. `Winnie.md`, `monenfant.md`, `Mappa INPS Bonus nido.md`). Frontmatter:
```yaml
tipo: concorrente
nome: ""
paese: ""            # Italia | Francia | ...
attore: ""           # pubblico | privato | non profit
categoria: ""        # marketplace/directory | portale pubblico | registro ispettivo | gestionale con vetrina | ...
url: ""
fascia: ""           # es. 0-3, 0-6, 0-12
copertura: ""        # n. strutture dichiarate e fonte
modello_ricavo: ""
stato: ""            # attivo | chiuso | pivot
verificato_il: "2026-11-20"
tags: [concorrente]
```
Sezioni obbligatorie, in quest'ordine:
1. **In breve** (3-5 righe).
2. **Funzioni per i genitori** — elenco dettagliato (ricerca, filtri: quali, mappa, scheda, confronto, preferiti, avvisi, contatto, richiesta di visita, lista d'attesa, iscrizione, pagamento, recensioni, contenuti, simulatori di costo, account, app…). Per ogni funzione: [fatto] con fonte, oppure "non trovato".
3. **Funzioni per i gestori** — rivendicazione della scheda, modifica, gestione richieste/lead, CRM, lista d'attesa, iscrizioni, pagamenti, statistiche, annunci di posti liberi, assunzioni, software di gestione, ecc.
4. **Dati mostrati per ogni struttura e da dove li prende** — tabella campo → fonte (registro pubblico, gestore, utenti, scraping, ispezioni…).
5. **Modello di ricavo e prezzi** — listini con cifre, chi paga.
6. **Storia** — fondazione, finanziamenti (importi, investitori, date), cambi di modello, funzioni introdotte e abbandonate e **perché**, numeri dichiarati nel tempo.
7. **Cosa dicono gli utenti** — App Store / Google Play (voto, numero di recensioni), Trustpilot, Reddit, forum (Mumsnet, Netmums, forum italiani, ecc.): citazioni brevi tra virgolette con link. Separare genitori e gestori. Niente nomi di persone fisiche (scrivi "un genitore", "un gestore").
8. **Punti di forza e lacune** — con [stima] dove è giudizio.
9. **Cosa ci insegna per l'Italia** (2-5 punti).
10. **Fonti** — elenco URL con data di accesso 2026-11-20.

## Rigore
- Ogni fatto con URL; [fatto] e [stima] distinti; "non trovato" quando manca l'evidenza.
- Lettura diretta delle pagine (WebFetch o curl con il proxy) invece degli estratti dei motori. Se un sito blocca, annotalo e usa alternative (Wayback Machine `web.archive.org`, store API: `https://itunes.apple.com/lookup?id=...&country=xx`, `https://itunes.apple.com/search?term=...&entity=software&country=xx`, recensioni App Store RSS `https://itunes.apple.com/{cc}/rss/customerreviews/id={id}/sortBy=mostRecent/json`).
- Diffida dei numeri autodichiarati: segnalali come tali.
- Al massimo 25 WebSearch per subagente.
- Nessun dato personale (nomi di persone fisiche, e-mail, telefoni personali). I fondatori si possono nominare per ruolo ("il fondatore").
- Collegamenti Obsidian `[[...]]` col nome esatto dei file.

## Rapporto di lavoro
Alla fine scrivi `wiki/Rapporti/P6/<tuo ambito>.md` con: note create, ricerche web e letture fatte (conteggio ed elenco), cosa non sei riuscito a verificare, prove contrarie cercate, livello di fiducia. Non fare commit: lo fa il coordinatore.
