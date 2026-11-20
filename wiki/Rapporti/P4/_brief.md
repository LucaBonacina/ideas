# Brief comune ai subagenti P4 (registri e fonti regionali 0-6, Sud e isole)

Progetto: [[Home progetto]] (wiki/Progetto nidi/). Metodo vincolante: `wiki/Progetto nidi/_metodo/Metodo del progetto.md` (leggilo: frontmatter delle note fonte, contenuto delle note regione). Oggi è 2026-11-20.

## Compito per ciascuna regione assegnata
1. **Nota regione** `wiki/Progetto nidi/Regioni/<Regione>.md` (es. `Campania.md`) con frontmatter:
   ```yaml
   tipo: regione
   regione: ""
   tags: [regione, nidi]
   aggiornato: 2026-11-20
   ```
   e sezioni:
   - **Normativa regionale**: legge regionale sui servizi 0-3/0-6, regolamento attuativo, autorizzazione al funzionamento (chi la rilascia: comune/ambito/ASL), accreditamento, requisiti (rapporto educatori/bambini, mq, capienza), **tipologie riconosciute** (nido, micronido, nido aziendale, sezione primavera, spazio gioco, centro bambini e famiglie, nido famiglia/servizio domiciliare/"tagesmutter", ludoteca…). Riporta atti con numero e data e link.
   - **Registro o elenco dei servizi**: chi lo tiene (regione, ambiti territoriali sociali/piani di zona, comuni, ASL), se è pubblico, se è scaricabile, formato, campi, data di aggiornamento. Cerca anche sui portali open data regionali (es. dati.regione.campania.it, dati.puglia.it, dati.regione.sicilia.it, dati.regione.sardegna.it, dati.regione.basilicata.it, dati.regione.calabria.it) e su eventuali sistemi informativi (es. in Puglia il "Registro regionale delle strutture e dei servizi" / catalogo dell'offerta; in Sardegna SIPSO; in Campania registro dei servizi autorizzati per ambito). Prova a contare i record e confrontali con il numero di servizi ISTAT della regione se lo trovi (cita la fonte).
   - **Misure regionali per le famiglie**: es. "Nidi gratis", buoni servizio/voucher, contributi rette, abbattimento rette (con anno, importi, chi è ammesso, se esiste un elenco delle strutture aderenti e se è pubblico: spesso è il miglior elenco dei privati!).
   - **Comune capoluogo di regione** (Napoli, Bari, Potenza, Catanzaro, Palermo, Cagliari) e, se il tempo lo consente, un secondo capoluogo di provincia grande: cosa pubblica (elenco nidi comunali, elenco privati autorizzati/accreditati, rette e tariffe ISEE, scadenze iscrizioni 2026/27 o 2027/28, graduatorie, scuole dell'infanzia comunali), formato, URL.
   - **Fonti** (collegamenti `[[...]]` alle note fonte create).
   - **Buchi**: quali tipologie o gestioni non sono coperte da nessuna fonte trovata (es. privati non accreditati, spazi gioco, infanzia non paritaria), cosa servirebbe per essere completi.
   - **Valutazione di completezza** [stima] motivata: quota approssimativa dei servizi 0-3 della regione raggiungibile con le fonti regionali+comunali trovate.
2. **Note fonte** in `wiki/Progetto nidi/Fonti/`, una per ogni fonte regionale (registro, open data, elenco aderenti a misura regionale) e per le principali fonti comunali dei capoluoghi. Nome file: `<Ente> - <oggetto breve>.md`, solo lettere, numeri, spazi e trattini (es. `Regione Puglia - Registro strutture e servizi.md`, `Comune di Bari - Asili nido comunali.md`). Frontmatter ESATTAMENTE come nel Metodo (tipo, ente, livello, territorio, tipologie, gestione, campi, formato, aggiornamento, licenza, dati_personali, url, verificato_il, affidabilita, tags). Per ciascuna **verifica direttamente**: apri la pagina o scarica il file (curl funziona), conta i record, elenca i campi reali, data dell'ultimo aggiornamento, licenza dichiarata (o "nessuna indicata"). Corpo: cosa copre e cosa no, come si accede, **esempio di record** (senza dati personali: niente nomi di persone fisiche, email o telefoni personali; i nomi delle strutture vanno bene), problemi noti, fonti con URL e data di accesso.
3. **Rapporto di lavoro** in `wiki/Rapporti/P4/<nome indicato>.md`: cosa hai fatto, tabella delle evidenze (affermazione, [fatto]/[stima], URL, data accesso, letta direttamente sì/no), cosa non hai trovato, conteggio di WebSearch e fetch.

## Non fare
- **Non** creare note sulle fonti nazionali (ISTAT, MIM/Scuola in chiaro/anagrafe scuole, INPS mappa nidi, Openpolis, Con i Bambini, ecc.): le copre un'altra sessione. Puoi citarle nel testo come confronto, senza nota e senza link `[[...]]`.
- Non inventare: se una cosa non si trova scrivi "non trovato" e cosa hai cercato. Distingui [fatto] e [stima].
- Nessun dato personale salvato.
- Non fare commit né push: lo fa il coordinatore.
- File scaricati: mettili in una directory nuova sotto il tuo scratchpad, non nel repo; per leggerli usa python -I o strumenti da riga di comando.

## Regole
- Al massimo **25 WebSearch**; letture dirette (WebFetch/curl) libere e preferite. Molti siti regionali del Sud sono lenti o bloccano: annota e prova alternative (Wayback, BURC/BURP/GURS/BURAS per le leggi, Normattiva regionale).
- Italiano, frasi chiare. Collegamenti Obsidian con nome esatto dei file.
- Risposta finale al coordinatore: 20-30 righe con, per regione, le 3 affermazioni più decisive (registro sì/no, scaricabile sì/no, misura regionale con elenco strutture sì/no) con gli URL esatti, così che il coordinatore possa verificarle.
