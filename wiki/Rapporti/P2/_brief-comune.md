# Brief comune ai subagenti P2 (registri regionali 0-6, regioni del Nord)

Repo: /home/user/ideas, branch `claude/nidi-p2`. NON fare commit né push: lo fa il coordinatore.

## Leggi prima
- `wiki/Progetto nidi/Home progetto.md`, `wiki/Progetto nidi/_metodo/Metodo del progetto.md` (frontmatter delle fonti obbligatorio), `wiki/Progetto nidi/Decisioni del progetto.md`.

## Compito per ogni regione/provincia autonoma assegnata
1. Nota `wiki/Progetto nidi/Regioni/<Nome regione>.md` (es. `Lombardia.md`, `Provincia autonoma di Trento.md`, `Valle d Aosta.md` — niente apostrofi né caratteri speciali nei nomi dei file) con frontmatter `tipo: regione`, `territorio`, `verificato_il: 2026-11-20`, `tags: [regione, nidi]` e sezioni:
   - **Normativa**: legge regionale e delibere su autorizzazione al funzionamento, accreditamento, requisiti; tipologie riconosciute 0-3 e 0-6 (nido, micronido, nido aziendale, sezione primavera, servizi integrativi: spazio gioco, centro bambini e famiglie, nido famiglia / servizi domiciliari / Tagesmutter; poli 0-6; scuole dell'infanzia comunali/paritarie se c'è competenza regionale).
   - **Registro o elenco**: chi lo tiene (Regione, ATS/ASL, comuni, province), se è pubblico, scaricabile, con che campi; quali tipologie copre e quali no (es. privati solo autorizzati vs accreditati, servizi integrativi, sezioni primavera, nidi famiglia).
   - **Misure regionali per le famiglie** legate a nidi/0-6 (es. Nidi Gratis Plus Lombardia, contributi rette, voucher, conciliazione): chi le eroga, finestre, adesione dei comuni pubblicata o no.
   - **Comuni capoluogo** (capoluoghi di provincia della regione; almeno il capoluogo di regione verificato a fondo, gli altri almeno con un controllo rapido): cosa pubblicano (elenco nidi comunali e privati, rette/tariffe ISEE, scadenze iscrizioni, graduatorie, open data).
   - **Buchi**: tipologie o territori non coperti, dati mancanti (rette private, posti liberi, ecc.).
   - **Per essere completi**: quali fonti combinare e copertura stimata [stima] con motivazione.
   - **Fonti**: elenco URL con data di accesso.
2. Una nota per fonte in `wiki/Progetto nidi/Fonti/` per ogni fonte regionale (registro, open data, portale regionale delle misure) e per le principali fonti comunali dei capoluoghi (almeno capoluogo di regione; per gli altri capoluoghi solo se pubblicano un elenco/open data significativo). Nome file: `<Ente> - <oggetto>.md` (es. `Regione Lombardia - Registro unita d offerta prima infanzia.md`). Frontmatter esattamente come nel Metodo. Corpo: cosa copre e cosa no, come si accede, esempio di record (senza dati personali: niente nomi di persone fisiche, telefoni/email personali), numero di record contati, problemi noti, fonti.
   **Verifica direttamente**: scarica il dataset (curl, API CKAN/Socrata/ecc.), conta i record, elenca i campi reali, controlla la data di ultimo aggiornamento nei metadati e la licenza dichiarata. Se non riesci a verificare qualcosa, scrivi "non verificato" / "non trovato".
3. Nota di lavoro `wiki/Rapporti/P2/<gruppo>.md`: cosa hai fatto, ricerche web usate (query), cosa non hai potuto verificare, conteggi grezzi.

## Regole
- Ogni fatto con URL e data di accesso (2026-11-20); marca [fatto] e [stima]; "non trovato" quando manca l'evidenza; leggi direttamente le pagine (curl o WebFetch), non fidarti degli estratti dei motori di ricerca.
- Massimo 25 ricerche web. Preferisci curl diretto ai portali open data (CKAN: `/api/3/action/package_search?q=nidi`; Socrata: `/api/views/metadata/v1/<id>`, `/resource/<id>.json?$select=count(*)`).
- File scaricati in una cartella dedicata sotto /tmp/claude-0/-home-user-ideas/d4cde4f6-0f68-5f92-883c-0fc9a4da18f7/scratchpad/<gruppo>/; usa `python3 -I` per analizzarli.
- Nessun dato personale salvato.
- Fonti NAZIONALI (MIM/anagrafe scuole e scuole paritarie, INPS mappa nidi e Bonus nido, ISTAT, PDND, Ministero, Openpolis nazionali) sono coperte da un'altra sessione: NON creare note fonte per loro; citale solo in testo semplice se servono.
- Collegamenti Obsidian `[[Nome esatto del file senza .md]]` tra note regione e note fonte.
- Stile: italiano chiaro, frasi brevi, tabelle dove utili. Niente ipotesi di prodotto: solo fatti sulle fonti.
- Risposta finale al coordinatore: elenco dei file creati e le 5-10 affermazioni decisive con URL (es. "il registro X ha N record, aggiornato il ..., licenza ...") così che il coordinatore possa ricontrollarle.
