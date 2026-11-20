# Brief comune ai subagenti P9 (test di completezza delle fonti, Nord e Centro)

Progetto: [[Home progetto]] (cartella `wiki/Progetto nidi/`). Valgono `wiki/Progetto nidi/_metodo/Metodo del progetto.md`, `wiki/Progetto nidi/_metodo/Istruzioni sessioni progetto.md` e la sezione "Test di completezza" di `wiki/Progetto nidi/_metodo/Istruzioni blocco 2.md`: leggile. Oggi è 2026-11-20.

## Comuni campione e criterio (deciso dal coordinatore)
**Criterio:** per ogni regione un comune tra 15.000 e 100.000 abitanti, **non capoluogo di regione**, con almeno 10 servizi 0-3 attesi dall'ISTAT, così che il confronto tra fonti abbia senso. Eccezione: in Valle d'Aosta l'unico comune sopra i 15.000 abitanti è Aosta, il capoluogo, quindi si usa Aosta.

| Regione | Comune | Codice ISTAT |
|---|---|---|
| Valle d'Aosta | Aosta | 007003 |
| Piemonte | Alba (CN) | 004003 |
| Liguria | Rapallo (GE) | 010046 |
| Lombardia | Legnano (MI) | 015118 |
| P.A. Trento | Rovereto | 022161 |
| P.A. Bolzano | Merano/Meran | 021051 |
| Veneto | Bassano del Grappa (VI) | 024012 |
| Friuli-Venezia Giulia | Pordenone | 093033 |
| Emilia-Romagna | Imola (BO) | 037032 |
| Toscana | Empoli (FI) | 048014 |
| Umbria | Foligno (PG) | 054018 |
| Marche | Fano (PU) | 041013 |
| Lazio | Viterbo | 056059 |
| Abruzzo | Lanciano (CH) | 069046 |
| Molise | Termoli (CB) | 070078 |

## Cosa ti dà il coordinatore
Per ogni comune un **pacchetto dati** già verificato in `/tmp/claude-0/-home-user-ideas/65ad3d1e-7b96-5706-bfd9-a1766591df7e/scratchpad/pacchetti/<Comune>.md`:
- conteggi ISTAT dei servizi 0-3 per tipologia e titolarità (2023 e 2024) e posti autorizzati;
- elenco MIM delle scuole dell'infanzia statali e paritarie (a.s. 2026/27);
- dove esiste, le righe del registro o elenco regionale/provinciale (Piemonte, Lombardia, Trento, Veneto, FVG, Toscana, Lazio).

Non riscaricare questi dati: usali. Le note regione sono in `wiki/Progetto nidi/Regioni/` e le note fonte in `wiki/Progetto nidi/Fonti/`: leggi la nota della regione del tuo comune e le note fonte che cita (soprattutto per Emilia-Romagna: SPI-ER tavole per comune; Toscana: open data per comune; Bolzano: ASSB; Liguria: Nidi Gratis FILSE; scuole non paritarie: `USR - Elenchi regionali scuole non paritarie.md`).

## Compito per ogni comune
1. **Totale atteso:** riporta i conteggi ISTAT (0-3) e MIM (3-6) dal pacchetto. Per Trento e Bolzano il MIM non contiene le scuole dell'infanzia: cerca l'elenco provinciale (scuole dell'infanzia provinciali ed equiparate a Trento; Kindergärten e scuole dell'infanzia in lingua italiana, tedesca e ladina a Bolzano) e usalo come denominatore 3-6.
2. **Elenco "vero":** costruiscilo incrociando:
   - **R** = registro o elenco regionale/provinciale (dal pacchetto, o "non esiste" per la regione);
   - **C** = sito del comune (pagine nidi, scuole dell'infanzia comunali, elenco privati autorizzati o accreditati, convenzioni, bandi voucher, open data comunali);
   - **M** = anagrafe MIM;
   - **U** = elenco USR delle scuole non paritarie, se esiste per la regione;
   - **A** = altre fonti istituzionali trovate (ambito sociale, ASL, misure regionali tipo Nidi Gratis, decreti di contributo, PNRR, SPI-ER);
   - **W** = ricerche web: siti dei gestori, cooperative, parrocchie/FISM, Google Maps tramite risultati di ricerca, portali privati di annunci o guide.
   Per **ogni struttura** indica in quali fonti compare. Distingui 0-3 e 3-6. Le sezioni primavera vanno nello 0-3. Segnala le strutture chiuse o dubbie (per esempio sito fermo, notizia di chiusura) invece di contarle.
3. **Copertura:** per ogni fonte la quota dell'elenco vero 0-3 e 3-6 che contiene (n/N e %); le strutture trovate **solo** con le ricerche web; le strutture dichiarate dall'ISTAT ma non trovate (differenza per tipologia).
4. **Campi disponibili:** per un campione di 4-6 strutture (almeno una pubblica, una privata, una scuola dell'infanzia), dove si trovano: retta, orari, età accolte, posti, scadenze delle iscrizioni, progetto pedagogico, lingua, inclusione/disabilità. Tabella struttura × campo con "sì (dove)" / "no".

## Nota da scrivere: `wiki/Progetto nidi/Test di completezza/<Comune>.md`
Nome file = nome del comune (es. `Bassano del Grappa.md`, `Merano.md`). Frontmatter:
```yaml
tipo: test-completezza
comune: ""
provincia: ""
regione: ""
codice_istat: ""
criterio: "comune 15-100 mila abitanti, non capoluogo di regione, almeno 10 servizi 0-3 ISTAT"
servizi_0_3_istat_2024: 0
scuole_infanzia_mim_2026_27: 0
elenco_vero_0_3: 0
elenco_vero_3_6: 0
verificato_il: 2026-11-20
tags: [test-completezza, nidi]
```
Sezioni:
1. **In breve** (5-8 righe: quanto copre la migliore fonte, cosa si trova solo sul web, cosa manca).
2. **Totale atteso** (tabella ISTAT per tipologia, MIM o elenco provinciale per il 3-6).
3. **Elenco vero 0-3** (tabella: n., struttura, tipologia, gestione pubblica/privata, R, C, M, U, A, W con ✓ o vuoto, note) e **Elenco vero 3-6** (stessa tabella).
4. **Copertura per fonte** (tabella: fonte, 0-3 n/N e %, 3-6 n/N e %, note) + strutture solo web + dichiarate ISTAT ma non trovate.
5. **Campi utili ai genitori** (tabella del campione).
6. **Problemi e prova contraria** (cosa hai cercato e non trovato; tipologie non coperte da nessuna fonte).
7. **Dati per la sintesi** (blocco fisso, uno per riga, per il coordinatore):
   `istat_0_3_2024=..; elenco_vero_0_3=..; elenco_vero_3_6=..; R_0_3=n/N; C_0_3=n/N; A_0_3=n/N; W_0_3=n/N; solo_web_0_3=..; M_3_6=n/N; C_3_6=n/N; W_3_6=n/N; solo_web_3_6=..; non_trovate_vs_istat=..; campi_rette=dove; campi_orari=dove; campi_posti=dove; campi_scadenze=dove; campi_progetto=dove; campi_lingua=dove; campi_inclusione=dove`
8. **Fonti** (URL e data di accesso; collegamenti `[[...]]` alle note regione e fonte esistenti con il nome esatto del file, per esempio `[[Piemonte]]`, `[[Regione Piemonte - Anagrafe servizi prima infanzia]]`, `[[MIM - Anagrafe scuole statali e paritarie]]`, `[[ISTAT - Nidi e servizi integrativi per la prima infanzia]]`). Non creare nuove note fonte; se trovi una fonte comunale importante descrivila nella nota del comune.

## Rapporto di lavoro
Uno per subagente: `wiki/Rapporti/P9/<nome indicato nel prompt>.md`: cosa hai fatto, tabella delle evidenze decisive (affermazione, [fatto]/[stima], URL, data, letta direttamente sì/no), cosa non hai trovato, conteggio di WebSearch e fetch.

## Regole
- Al massimo **25 WebSearch** in totale per subagente (circa 8 per comune); letture dirette (curl, WebFetch) libere e preferite. Molti siti comunali usano il modello AGID "Comuni" (`/servizi/`, `/vivere-il-comune/luoghi/`, `/amministrazione/documenti-dati/`): prova anche quelle pagine e i motori di ricerca interni.
- [fatto] solo per quello che hai letto direttamente; [stima] per le deduzioni; "non trovato" con la ricerca fatta.
- **Nessun dato personale:** niente nomi di persone fisiche (titolari, coordinatrici, educatrici), email o telefoni personali. Se il nome di una struttura contiene il nome e cognome di una persona (es. nido famiglia o ditta individuale), scrivi solo la parte non personale o "nido famiglia [nome di persona omesso]".
- Mappa INPS "Servizi vicino a me": è dietro SPID, non usarla; scrivi "non verificabile".
- File scaricati: solo in una cartella nuova sotto lo scratchpad (`/tmp/claude-0/-home-user-ideas/65ad3d1e-7b96-5706-bfd9-a1766591df7e/scratchpad/sub/<tuo nome>/`), mai nel repository; leggili con `python3 -I`, `pdftotext` o strumenti da riga di comando.
- **Non fare commit né push:** lo fa il coordinatore. Non modificare note esistenti.
- Italiano, frasi chiare, tabelle Markdown.
- Risposta finale al coordinatore (20-30 righe): per comune, i numeri chiave (elenco vero 0-3 e 3-6, copertura della migliore fonte, strutture solo web) e le 3 affermazioni più decisive con l'URL esatto, così che il coordinatore possa verificarle.
