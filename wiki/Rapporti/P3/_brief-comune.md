# Brief comune ai subagenti P3 (registri e fonti regionali 0-6, regioni del Centro)

Repo: /home/user/ideas. Oggi: 2026-11-20. Leggi prima: `wiki/Progetto nidi/Home progetto.md`, `wiki/Progetto nidi/_metodo/Metodo del progetto.md` (frontmatter delle fonti e contenuto delle note regione).

## Compito
Per ciascuna delle tue regioni:
1. **Nota regione** `wiki/Progetto nidi/Regioni/<Regione>.md` (es. `Toscana.md`), frontmatter:
   ```yaml
   tipo: regione
   regione: ""
   capoluogo: ""
   verificato_il: 2026-11-20
   tags: [regione, centro]
   ```
   Sezioni obbligatorie:
   - **Normativa regionale** 0-3 e 0-6: legge e regolamento vigenti (numero, data, link ufficiale), autorizzazione al funzionamento (chi la rilascia: comune? ASL?), accreditamento (chi, requisiti, durata), requisiti principali (rapporto educatori/bambini, mq, capienza max), **tipologie riconosciute** (nido, micronido, nido aziendale, sezione primavera, spazio gioco, centro bambini e famiglie, servizio domiciliare/educatrice familiare/nido famiglia, ecc.) con i nomi esatti usati dalla regione.
   - **Registro o elenco dei servizi:** chi lo tiene (regione, comuni, ambiti), se esiste un elenco regionale pubblico, se è scaricabile (formato, licenza), quanti record, ultimo aggiornamento, quali tipologie e gestioni copre. Se non esiste un elenco pubblico, dillo e indica cosa esiste (es. sistema informativo interno, rilevazione statistica, delibere di accreditamento con elenchi in PDF).
   - **Misure regionali per le famiglie:** bonus/abbattimento rette (nome, anno, importi, requisiti ISEE, chi presenta la domanda, finestre temporali, elenco dei comuni o servizi aderenti se pubblicato).
   - **Comuni capoluogo:** per il capoluogo di regione in dettaglio; per ogni capoluogo di provincia una riga di tabella: elenco nidi/infanzia pubblicato (sì/no, URL, include privati?), rette (sì/no, URL), scadenze iscrizioni 2026/27 o 2027/28 (date se trovate), formato.
   - **Buchi:** tipologie o gestioni non coperte da nessuna fonte, fonti ferme, PDF non strutturati, dati dietro login.
   - **Cosa serve per essere completi** e **stima di completezza** raggiungibile [stima, con ragionamento].
   - **Fonti** (elenco URL con data di accesso).
2. **Nota fonte** in `wiki/Progetto nidi/Fonti/` per ogni fonte regionale (registro/elenco, open data, portale misure) e per le principali fonti comunali del capoluogo di regione (elenco servizi, rette, iscrizioni; se un capoluogo di provincia ha un open data o un elenco notevole, fai una nota anche per quello). Frontmatter esattamente quello del Metodo. Nome file: `<Ente> - <nome breve fonte>.md`, es. `Regione Toscana - Open data servizi educativi prima infanzia.md`, `Comune di Firenze - Elenco nidi e rette.md`. Nessun carattere speciale oltre spazi e trattini (niente apostrofi, punti, parentesi, slash). Corpo: cosa copre e cosa no, come si accede, esempio di record (senza dati personali: i nomi dei servizi e gli indirizzi delle strutture vanno bene, i nomi di persone fisiche no), problemi noti, fonti.
   **Verifica direttamente** copertura (n. record e tipologie), campi, formato, aggiornamento, licenza: scarica il file/apri la pagina con curl, conta le righe, leggi le intestazioni. Se un dataset è dichiarato ma il link è rotto, annotalo.
3. **Rapporto di lavoro** in `wiki/Rapporti/P3/<tuo nome>.md`: cosa hai fatto, ricerche web usate (con le query), letture dirette, dubbi, cosa resta aperto, affermazioni che il coordinatore dovrebbe riverificare.

## Regole
- Le **fonti nazionali** (MIM Scuola in chiaro/anagrafe scuole statali e paritarie, ISTAT, INPS mappa nidi e Bonus nido, Openpolis, ministero, Piano nazionale 0-6) sono coperte da un'altra sessione: **non fare note per esse**; citale solo in testo semplice se servono al confronto.
- Ogni fatto con URL e data di accesso; etichette **[fatto]** e **[stima]**; "non trovato" quando manca l'evidenza; nessuna cifra inventata.
- Lettura diretta delle pagine: `curl -sL` (la rete passa da un proxy già configurato; se TLS fallisce leggi /root/.ccr/README.md) o WebFetch. Per PDF: `pdftotext` se disponibile, altrimenti python. Lavora con i file scaricati in una cartella temporanea dello scratchpad, mai nel repo.
- **Massimo 25 WebSearch** per subagente. Letture dirette libere.
- Nessun dato personale (nomi di persone fisiche, email e telefoni personali).
- Collegamenti Obsidian `[[...]]` con il nome esatto dei file (es. dalla nota regione alle note fonte).
- Cerca attivamente la prova contraria: un tipo di servizio non coperto dal registro, una fonte più completa, un comune che pubblica più della regione.
- Lingua: italiano, frasi brevi e concrete.
- **Non fare commit né push**: lo fa il coordinatore.
