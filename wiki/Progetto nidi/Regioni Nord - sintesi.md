---
tipo: sintesi
territorio: "Valle d'Aosta, Piemonte, Liguria, Lombardia, P.A. Trento, P.A. Bolzano, Veneto, Friuli-Venezia Giulia, Emilia-Romagna"
verificato_il: 2026-11-20
tags: [progetto, nidi, fonti, regioni, sintesi]
---
# Regioni del Nord: quanto si arriva vicino alla completezza

Sintesi della sessione P2 sui registri e sulle fonti regionali e comunali dei servizi educativi 0-6. Il dettaglio è nelle note per regione e per fonte. Rapporti di lavoro: [[Nord-Ovest]] e [[Nord-Est]] (cartella `Rapporti/P2`). Le fonti nazionali (anagrafe scuole MIM, mappa INPS, ISTAT) sono di un'altra sessione: qui ISTAT serve solo come **denominatore indipendente**.

## Metodo della misura
- **Denominatore:** servizi educativi 0-3 attivi al 31/12/2023 per regione (nidi, micronidi, nidi aziendali, sezioni primavera e servizi integrativi), dalle tavole ISTAT 1.7 segue (b), 1.8 e 1.9: https://www.istat.it/wp-content/uploads/2026/02/tavole_nidi_2023.xlsx (accesso 2026-11-20) [fatto].
- **Numeratore:** record contati direttamente nella migliore fonte aperta per singola struttura (2025-2026) [fatto per i conteggi].
- **Limiti:** gli anni sono diversi (ISTAT 2023, fonti 2025-26). Nessuna corrispondenza record per record è stata fatta: è un confronto di totali, quindi la copertura è una **[stima]**. Il test di completezza su un comune campione, previsto dal Metodo, **resta da fare**.
- **Fuori misura:** lo 0-6. Le scuole dell'infanzia (3-6) passano dalle fonti nazionali MIM e in nessuna regione del Nord stanno nel registro regionale. Le sezioni primavera stanno nel registro solo in Piemonte; in Veneto non è verificato.

## Tabella di sintesi

| Territorio | Servizi 0-3 ISTAT 2023 (di cui primavera) | Migliore fonte aperta per struttura | Record | Formato, licenza | Copertura 0-3 [stima] |
|---|---|---|---|---|---|
| [[Lombardia]] | 3.040 (688) | [[Regione Lombardia - Strutture di offerta sociale prima infanzia]] | 2.707 (nov. 2026) | open data Socrata, mensile; licenza non indicata | ~100% senza le sezioni primavera; **~80%** con esse |
| [[Friuli-Venezia Giulia]] | 362 (68) | [[Regione FVG - Registro servizi prima infanzia attivi]] | 341 (6/11/2026) | XLSX mensile; licenza non indicata; senza indirizzo | ~100% senza le sezioni primavera; **~83%** con esse |
| [[Piemonte]] | 1.051 (166) | [[Regione Piemonte - Anagrafe servizi prima infanzia]] | 1.149 (31/12/2025) | PDF annuale "a fini conoscitivi"; licenza non indicata | **85-100%** (include primavera e nidi in famiglia; la Regione lo dichiara non esaustivo) |
| [[Provincia autonoma di Trento]] | 215 (0) | [[Provincia autonoma di Trento - Elenco nidi d infanzia]] + [[Provincia autonoma di Trento - Elenco nidi familiari Tagesmutter]] | 107 + 76 = 183 | 2 PDF annuali | **~85%**; mancano i nidi privati fuori dal sistema provinciale |
| [[Veneto]] | 1.384 (393) | [[Regione Veneto - Servizi prima infanzia finanziati DDR]] + [[Regione Veneto - Elenco Nidi in Famiglia]] | 802 + 213 = 1.015 | allegati PDF a decreti; dati personali nei file | **~70-75%**; mancano autorizzati non accreditati e integrativi; primavera non verificate |
| [[Liguria]] | 345 (86) | [[Comune di Genova - Anagrafica scuole e nidi open data]] (solo Genova) | circa 130-150 voci 0-3 su 749 [stima, tipi non normalizzati] | JSON-LD dic. 2024, CC BY 4.0 sulla risorsa | **30-40%**; nessun registro regionale pubblico |
| [[Emilia-Romagna]] | 1.233 (155) | open data comunali: [[Comune di Bologna - Elenco delle scuole open data]], [[Comune di Ferrara - Nidi e spazi bambini open data]], [[Comune di Reggio Emilia - Nidi d infanzia open data]] | 88 + 37 + 25 = 150 | CC BY 4.0 (Bologna); Ferrara e Reggio datati 2021-22 | **~12%** con le fonti aperte; ~100% se la Regione rilascia l'anagrafe SPI-ER (1.207 servizi) |
| [[Provincia autonoma di Bolzano]] | 375 (0) | [[ASSB Bolzano - Asili nido e microstrutture]] (solo la città) | 10 + 12 = 22 | pagina web e PDF | **~6%** |
| [[Valle d Aosta]] | 51 (0) | [[Regione Valle d Aosta - Annuario statistico posti prima infanzia]] | 0 (solo totali per distretto) | PDF statistico | **0%** per struttura |

Rapporti: Lombardia 2.707/3.395, FVG 341/409, Trento 183/215, Veneto 1.015/1.384, Emilia-Romagna 150/1.233, Bolzano 22/375. I denominatori di Lombardia e FVG sommano il registro e le sezioni primavera ISTAT.

## Cosa emerge
1. **Solo due registri veri, aperti e aggiornati ogni mese: Lombardia e FVG** [fatto]. Nessuno dei due indica la licenza nei metadati. La Lombardia contiene 249 gestori persone fisiche con codice fiscale. Il FVG è l'unico che dice pubblico/privato, accreditamento, età e adesione all'abbattimento rette.
2. **Due regioni hanno l'anagrafe ma non la pubblicano come dati:** il Piemonte la pubblica in PDF; l'Emilia-Romagna ha SPI-ER, ma pubblica solo tavole per comune. Per l'Emilia-Romagna la strada più efficiente è una richiesta formale di riuso o di accesso civico [stima].
3. **Veneto e Trento: elenchi indiretti** (decreti di contributo, PDF provinciali). Sono usabili, ma vanno estratti dai PDF ogni anno e contengono dati personali (Veneto).
4. **Liguria, Bolzano e Valle d'Aosta: nessun elenco regionale pubblico per struttura** [non trovato]. Servono richieste agli enti e la raccolta comune per comune (siti comunali e delle cooperative).
5. **Le sezioni primavera sono il buco trasversale.** In ISTAT sono 1.556 nelle regioni del Nord; i registri di Lombardia e FVG non le hanno. Si recuperano probabilmente dall'anagrafe scuole MIM (paritarie e statali), da verificare con la sessione sulle fonti nazionali.
6. **Mancano ovunque, in forma strutturata, i campi utili ai genitori:** rette dei privati, posti liberi, orari, progetto pedagogico, lingua, inclusione. Le rette comunali e le finestre di iscrizione stanno sui siti dei comuni (es. Torino 5/3-16/4/2026, Genova 24/3-19/4/2026, Bologna 13/4-4/5/2026), in pagine e PDF che cambiano a ogni edizione.
7. **Misure regionali per le famiglie:**
   - Nidi Gratis Plus in Lombardia (ISEE fino a 25.000 €, fondi ai Comuni) → [[Regione Lombardia - Nidi Gratis Plus]];
   - Nidi Gratis in Liguria, gestito da FILSE (domande 21/5-22/6/2026) → [[Regione Liguria - Nidi Gratis FILSE]];
   - abbattimento rette in FVG, solo nei servizi accreditati → [[Regione FVG - Abbattimento rette servizi prima infanzia]];
   - misura FSE+ in Emilia-Romagna, ai Comuni → [[Regione Emilia-Romagna - Misure riduzione rette nidi FSE]];
   - Bonus nidi a Trento (ICEF fino a 0,70) → [[Provincia autonoma di Trento - Bonus nidi d infanzia]].

   L'elenco dei comuni aderenti alle misure regionali **non è stato trovato** in forma consolidata (Lombardia, Emilia-Romagna).

## Ordine di lavoro suggerito per la completezza [stima]
1. **Subito, con dati aperti:** Lombardia e FVG (registri), Piemonte (estrazione dal PDF), Trento (2 PDF), Veneto (allegati DDR e Nidi in Famiglia, togliendo i dati personali).
2. **Richieste formali agli enti:**
   - Emilia-Romagna: anagrafe SPI-ER;
   - Liguria: Albo dei nidi accreditati;
   - Bolzano: Agenzia per la famiglia;
   - Valle d'Aosta: Assessorato alle politiche sociali;
   - Veneto: elenco completo degli autorizzati.
3. **Sezioni primavera e 3-6** dalle fonti nazionali (altra sessione).
4. **Test di completezza** su un comune campione per regione, con incrocio manuale, per passare dalle stime sui totali a percentuali misurate.

## Prova contraria cercata
- **Emilia-Romagna, Informafamiglie:** non espone un elenco leggibile (pagina in JavaScript) [fatto]. Il portale open data regionale non era raggiungibile (blocco del proxy, HTTP 503).
- **Veneto, dati.gov.it:** la ricerca "nidi veneto" restituisce un solo dataset, della P.A. di Trento [fatto, https://www.dati.gov.it/opendata/api/3/action/package_search?q=nidi+veneto, accesso 2026-11-20].
- **Non verificabili:**
  - comune.milano.it: HTTP 403;
  - open data di Torino: timeout;
  - portale famiglia di Bolzano: app JavaScript;
  - portale open data della Valle d'Aosta: non raggiungibile.

  In queste regioni l'assenza di un elenco resta **non trovato**, non "inesistente".

## Affidabilità di questa sintesi
- **Alta** sui conteggi dei registri lombardo e friulano, del PDF piemontese, del dataset di Bologna e delle tavole ISTAT: il coordinatore li ha riscaricati e contati il 2026-11-20.
- **Media** sulle coperture: confronto di totali con anni diversi.
- **Bassa** sui capoluoghi minori, controllati solo in parte.
