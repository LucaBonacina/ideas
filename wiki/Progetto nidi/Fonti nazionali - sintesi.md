---
tipo: progetto
tags: [progetto, nidi, fonti, sintesi]
aggiornato: 2026-11-20
---
# Fonti nazionali - sintesi

> Cosa si ottiene dalle fonti nazionali per un elenco completo dei servizi 0-6, pubblici e privati, e cosa no. Base: [[Normativa nazionale 0-6]] e le note in `Fonti/`. Verifiche del 2026-11-20.

## Conclusione in tre righe
1. **3-6:** l'anagrafe MIM, aperta, dà un elenco nominativo quasi completo delle **scuole dell'infanzia statali e paritarie** (circa 21.400). Mancano le non paritarie (elenchi USR in PDF) e le province di Trento e Bolzano.
2. **0-3:** **nessuna fonte nazionale aperta è nominativa.** Due elenchi nazionali esistono ma sono chiusi: l'Agenda Asili Nido INPS, obbligatoria dal 2026, e la Sezione E del censimento ISTAT. Un terzo, il sistema informativo MIM, è previsto per settembre 2027. Oggi lo 0-3 si costruisce **da registri regionali e comunali**.
3. ISTAT (CC BY) dà però, **per ogni comune**, il numero di servizi e di posti per tipologia e titolarità: è il **metro di completezza** dell'elenco che costruiremo.

## Matrice di copertura: tipologia × fonte nazionale

Legenda: **N** = elenco nominativo aperto · **n** = nominativo ma chiuso o parziale · **A** = solo aggregato · – = assente

| Tipologia | MIM anagrafe / Scuola in Chiaro | USR elenchi | INPS Agenda | ISTAT | OpenCivitas | PNRR |
|---|---|---|---|---|---|---|
| Nido, micronido pubblico | – | – | n | A (comune) | A (solo RSO) | n (edifici) |
| Nido, micronido privato (autorizzato, accreditato, convenzionato) | – | – | n | A (comune) | A (gestione esterna, voucher) | – |
| Nido aziendale | – | – | n [stima] | A | – | – |
| Sezione primavera | – (non distinguibile) | n (decreti di finanziamento in PDF) | n | A | – | – |
| Spazio gioco | – | – | n | A | – | – |
| Centro bambini e famiglie | – | – | – (escluso) | A | – | – |
| Servizio domiciliare (nido famiglia, tagesmutter) | – | – | n | A | – | – |
| Infanzia statale | **N** (13.485; con coordinate in Scuola in Chiaro) | – | – | A (provincia) | – | n (edifici) |
| Infanzia comunale paritaria | **N** (dentro le 7.876 paritarie, senza campo gestore) | – | – | A (provincia: 1.877 "pubbliche non statali") | – | n |
| Infanzia privata paritaria | **N** | parziale (alcuni USR) | – | A (provincia) | – | – |
| Infanzia non paritaria | – | n (20 elenchi PDF) | – | – | – | – |
| Scuole infanzia Trento e Bolzano | – | – | – | A | – | – |
| Scuole straniere o internazionali | – | elenchi USR separati, non nazionali | – | – | – | – |
| Baby parking, ludoteche (fuori dal sistema educativo) | – | – | – | – | – | – |

### Per gestione
- **Pubblico statale (3-6):** completo nell'anagrafe MIM.
- **Pubblico comunale:** completo per le scuole dell'infanzia paritarie, ma non distinguibile dalle private senza incrocio. Per i nidi comunali, nominativi solo nelle fonti comunali e regionali (e nell'Agenda INPS, chiusa).
- **Privato convenzionato o accreditato:** nessuna fonte nazionale nominativa aperta; gli elenchi di accreditamento sono comunali.
- **Privato solo autorizzato:** come sopra. Sono la maggioranza dei servizi 0-3 (10.114 servizi privati su 15.049 nel 2024 secondo ISTAT).
- **Privato non autorizzato e non educativo** (baby parking): in nessun registro.

## Controllo incrociato dei numeri
- Scuole dell'infanzia: MIM 2026/27 conta 13.485 statali e 7.876 paritarie; ISTAT (periodo 2025) conta 13.028 statali e 8.662 non statali (1.877 pubbliche e 6.785 private) [fatto entrambi].
  - Statali: la differenza (circa 450) è compatibile con il fatto che il MIM conta i plessi, 544 dei quali non sono "sede scolastica" [stima].
  - Non statali: le circa 790 in più dell'ISTAT includono presumibilmente non paritarie e province autonome [stima]. Va verificato prima di usare la differenza come stima delle non paritarie.
- Servizi 0-3: ISTAT 15.049 (2024). Come ordine di grandezza degli elenchi regionali, la Lombardia ne pubblica 2.707 in open data (sessione S11), mentre ISTAT per la Lombardia è da estrarre: primo test di completezza da fare.

## Quanto vale ciascuna fonte come base per l'elenco completo

| Fonte | Valore come base | Perché | Uso nel progetto |
|---|---|---|---|
| [[MIM - Anagrafe scuole statali e paritarie]] | **Alto** per il 3-6 | Ufficiale, nominativa, IODL 2.0, annuale, codice univoco | Base del 3-6; unire con i dati alunni ed edifici |
| [[MIM - Scuola in Chiaro]] | **Medio** (complementare) | Stesse scuole, più coordinate e telefono; API non documentata | Geocodifica e contatti; chiedere al MIM un estratto |
| [[USR - Elenchi regionali scuole non paritarie]] | **Medio** (indispensabile ma piccolo) | Unica fonte delle non paritarie e delle sezioni primavera finanziate; PDF | Estrazione annuale regione per regione |
| [[INPS - Agenda asili nido e mappa Bonus nido]] | **Alto in potenza, basso oggi** | Unico elenco nazionale nominativo 0-3 con obbligo di legge; chiuso (SPID) | Richiesta di accesso civico (FOIA); monitorare PDND 2027/28 |
| [[ISTAT - Nidi e servizi integrativi per la prima infanzia]] | **Basso** come elenco, **alto** come controllo | Conteggi per comune, tipologia e titolarità, CC BY; elenco nominativo interno non diffuso | Denominatore del test di completezza; chiedere l'elenco delle unità di offerta |
| [[OpenCivitas - Asili nido indicatori comunali]] | **Basso** (arricchimento) | Utenti e spesa del servizio comunale; solo RSO; licenza non esplicita | Indicatori di contesto per comune |
| [[PNRR - Piano asili nido e scuole dell infanzia]] | **Basso** (segnale) | Interventi su edifici pubblici, non servizi | Segnalare nuovi nidi pubblici in apertura |
| [[Openpolis - Asili nido per comune]] | **Basso** | Derivato ISTAT, licenza NC | Solo riferimento; usare ISTAT |
| [[Dipartimento politiche della famiglia - monitoraggio servizi 0-3]] | **Basso** | Nessun elenco; finanzia l'indagine ISTAT | Contatti, normativa regionale |
| [[dati.gov.it - Catalogo nazionale open data]] | **Alto come indice**, nullo come fonte | 304 dataset pertinenti, quasi tutti regionali o locali | Mappa delle fonti per le note `Regioni/` |

## Prova contraria cercata
- Un registro nazionale 0-6 istituito per legge: **non trovato**. Cercati su Normattiva, ANIST, SIUSS e nelle proposte di legge; il sistema informativo del D.Lgs. 65/2017 non è mai stato attivato fino al DM 204/2026.
- Un open data INPS o ISTAT nominativo: **non trovato**. dati.inps.it non era raggiungibile da questo ambiente: va ricontrollato.
- Un dataset nazionale delle non paritarie o delle sezioni primavera: **non trovato**.
- Italia Domani (open data PNRR) non è stato verificato (403).

## Cosa fare dopo
1. **Richieste di dati**, il passo con il miglior rapporto costo/beneficio:
   - INPS: elenco dell'Agenda Asili Nido senza codici fiscali di persone fisiche, via accesso civico generalizzato;
   - ISTAT: elenco delle unità di offerta (Sezione E);
   - MIM: anagrafe con coordinate e tipo di gestore.
2. **Note regionali** (`Regioni/`): registri di autorizzazione e accreditamento, elenchi USR delle non paritarie e delle sezioni primavera, fonti provinciali di Trento e Bolzano.
3. **Test di completezza:** per ogni comune campione confrontare l'elenco costruito con i conteggi ISTAT 2024 per tipologia e titolarità.
4. **Seguire l'attuazione** del sistema informativo MIM (settembre 2027) e del flusso PDND INPS (2027/28): potrebbero cambiare la strategia dal 2028.
