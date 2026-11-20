---
tipo: sintesi
tags: [progetto, nidi, regioni, fonti, P4]
aggiornato: 2026-11-20
---
# Regioni Sud e isole: sintesi delle fonti 0-6

Sessione P4. Regioni: [[Campania]], [[Puglia]], [[Basilicata]], [[Calabria]], [[Sicilia]], [[Sardegna]]. Rapporti di lavoro: [[P4 Campania Puglia Basilicata]], [[P4 Calabria Sicilia Sardegna]]. Le fonti nazionali (ISTAT, MIM, INPS) sono trattate da un'altra sessione e qui non sono ripetute.

## In breve
- **Solo la Puglia ha un registro regionale dei servizi 0-3 pubblico e scaricabile**, in CSV con licenza CC-BY 4.0. È però fermo al 2023. Va affiancato al catalogo dei servizi che aderiscono al Buono educativo, aggiornato al 2026/27 ed esportabile.
- **Sicilia e Sardegna hanno un registro, ma non è consultabile come elenco.**
  - In Sicilia l'albo regionale (art. 26 L.R. 22/1986) esiste solo come singoli decreti in PDF.
  - In Sardegna il SIWE ha un'area riservata: la consultazione pubblica non è verificata.
- **Campania, Basilicata e Calabria non hanno un registro regionale pubblico.** L'autorizzazione è comunale. In Calabria il "portale regionale" previsto dal Reg. 7/2024 non è stato trovato. A luglio 2026 la Regione ha dovuto avviare una rilevazione presso tutti i comuni, e questo indica che oggi non ha un elenco completo.
- **I migliori elenchi dei privati sono comunali**, e quasi sempre in PDF:
  - Napoli: privati autorizzati, aggiornato al 03/11/2026;
  - Palermo: catalogo dei nidi convenzionati 2026/27, con 51 strutture.
- **Le scuole dell'infanzia (3-6) non compaiono in nessuna fonte regionale trovata.** Restano affidate alle fonti nazionali. Per gli spazi gioco e i servizi domiciliari esiste una fonte solo in Puglia (registro) e in Sardegna (SIWE, non accessibile).

## Quanto si arriva vicino alla completezza (servizi 0-3)

| Regione | Registro regionale | Scaricabile | Misura famiglie con elenco strutture | Migliore fonte comunale | Completezza raggiungibile oggi [stima] |
|---|---|---|---|---|---|
| Puglia | sì (Comune autorizza, Regione iscrive) | sì, CSV CC-BY 4.0, fermo al 24/05/2023 | sì: Catalogo zerosei 2026/27, export Excel senza login | Lecce open data; Bari solo nidi comunali | **80-90%** |
| Sicilia | sì, albo art. 26 L.R. 22/86 (autorizza la Regione) | no, solo decreti singoli | no (contributo ai comuni: 93 nidi comunali, 4 M€) | Palermo: catalogo convenzionati PDF (51) + 28 comunali | **20-30%** |
| Campania | no (autorizza il Comune, R.R. 4/2014) | no | no, voucher gestiti dagli ambiti con elenchi propri | Napoli: privati autorizzati PDF + circa 80 comunali | **25-35%** (concentrata su Napoli) |
| Sardegna | sì, SIWE (autorizzazione comunale, accreditamento regionale) | non verificato (area riservata) | Nidi gratis sì, elenco strutture no | Cagliari: avvisi, nessun elenco | **sotto il 15%**; oltre l'80% se il SIWE fosse accessibile |
| Basilicata | no (autorizza il Comune, DGR 194/2017) | no | no; c'è un contributo ai privati (DGR 211/2026) con graduatoria non ancora uscita | Potenza non leggibile (403); Matera senza nomi | **sotto il 20%** |
| Calabria | previsto (Reg. 7/2024), non trovato | no | Voucher Infanzia (DGR 581/2025) con catalogo futuro | Catanzaro: 1 nido comunale | **sotto il 10%** |

Come ho stimato: ho contato i servizi raggiungibili per nome con le fonti trovate (regionali e comunali, solo quelle verificate) e li ho confrontati in modo qualitativo con il peso del capoluogo e con la presenza di elenchi d'ambito. Il confronto numerico con il totale ISTAT per regione **non è stato fatto**: è il primo passo per trasformare queste stime in misure.

## Verifiche fatte dal coordinatore (2026-11-20)
- [fatto] Ho scaricato il registro della Puglia via API CKAN di dati.puglia.it.
  - Licenza CC-BY-4.0. CSV con 4.923 righe; ultimo file caricato il 05/10/2023.
  - Righe 0-3: 355 nidi, 277 sezioni primavera, 137 centri ludici prima infanzia, 130 micronidi, 30 servizi domiciliari.
  - Contiene i campi COGNOME_LEGALE e NOME_LEGALE (dati personali, da escludere nel riuso).
  - URL: https://dati.puglia.it/ckan/dataset/registri-regionali-delle-strutture-e-dei-servizi-socio-assistenziali-pubblici-e-privati-autorizzati
- [fatto] Il PDF dei nidi privati autorizzati di Napoli (aggiornato al 03/11/2026) si scarica e contiene circa 55 righe con "nido" o "ludoteca".
  - URL: https://static-www.comune.napoli.it/wp-content/uploads/2011/11/elenco-nidi-autorizzati-agg_03-11-2026.pdf
- [fatto] Il catalogo dei nidi convenzionati di Palermo 2026/27 è un PDF di 2 pagine con 51 righe numerate, con posti per fascia d'età e orario.
  - URL: https://portalescuola.comune.palermo.it/wp-content/uploads/2026/11/Catalogo-nidi-convenzionati-2026-27.pdf
- [fatto] L'allegato A al D.D.G. 715/2026 della Sicilia è l'elenco dei nidi comunali finanziati, con un totale di 4.000.000 €.
  - URL: https://www.regione.sicilia.it/system/files/2026-03/000715%20-%20Allegato%20A.pdf
- [fatto] Su dati.gov.it, l'organizzazione Regione Siciliana restituisce per "minori" solo l'"Elenco comunità per minori", non i nidi.
- [fatto] Il sito del Comune di Potenza risponde 403. sardegnaewelfare.it non risponde (connessione chiusa) e il SIWE resta non verificato.
- Non verificato da me: il numero di 564 unità del Catalogo zerosei. La pagina è dinamica e il contatore non si legge con curl. Il dato viene dal subagente.

## Cosa serve per essere completi
1. **Puglia:** unire il registro 2023 e il catalogo zerosei, poi chiedere alla Regione l'aggiornamento del CSV.
2. **Sicilia:** chiedere l'estrazione dell'albo, sezione Minori, tipologia asilo nido, con un accesso civico generalizzato (FOIA) all'Assessorato della famiglia. In alternativa, raccogliere i decreti di iscrizione pubblicati.
3. **Sardegna:** chiedere alla Regione l'elenco SIWE delle strutture E.1-E.8, sempre con accesso civico.
4. **Campania, Basilicata, Calabria:** non esiste un punto unico. Servono gli elenchi comunali o d'ambito, i cataloghi delle misure (il Voucher Infanzia in Calabria, la graduatoria della DGR 211/2026 in Basilicata) oppure le richieste di accesso civico ai comuni capoluogo.
5. **In tutte le regioni:**
   - per le scuole dell'infanzia, le fonti nazionali;
   - per i privati non autorizzati o non convenzionati, le ricerche web e le mappe;
   - un test di completezza su un comune campione per regione, come previsto dal [[Metodo del progetto]].

## Cosa resta aperto
- I secondi capoluoghi non sono stati esaminati: Salerno, Taranto, Reggio Calabria, Catania, Sassari.
- Non è stato fatto il confronto con i totali ISTAT per regione.
- I requisiti numerici di Basilicata (PDF scansionati) e Sicilia (D.P.Reg. 16/05/2013) non sono stati letti.
- Non ho trovato l'avviso ufficiale del voucher rette 2025/26 in Campania: c'è solo una notizia di stampa, non leggibile.

## Test di completezza (P10, 2026-11-20)
Misure su un comune campione per regione: [[Test di completezza - Sud e isole]]. Correzione principale: in Campania esiste un elenco regionale dei nidi e micronidi (2024), vedi [[Campania]].
