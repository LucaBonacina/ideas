---
tipo: rapporto
tags: [progetto, nidi, rapporto, P6]
---
# P6: rapporto del subagente "Italia pubblici"

## Note create
- [[Mappa INPS Bonus nido]] (`wiki/Progetto nidi/Concorrenti/Mappa INPS Bonus nido.md`)
- [[Scuola in Chiaro]] (`wiki/Progetto nidi/Concorrenti/Scuola in Chiaro.md`)
- [[Eduscopio]] (`wiki/Progetto nidi/Concorrenti/Eduscopio.md`)
- [[Openpolis e Con i Bambini]] (`wiki/Progetto nidi/Concorrenti/Openpolis e Con i Bambini.md`)
- [[Portali comunali e regionali]] (`wiki/Progetto nidi/Concorrenti/Portali comunali e regionali.md`): Milano, Torino, Reggio Emilia, Trento, Roma, Lombardia, Toscana, più cenni a Emilia-Romagna e Bologna

## Fatti chiave nuovi rispetto a S11
1. **Circolare INPS 93/2026 letta per intero** (PDF su fiscoetasse; su inps.it il testo si carica via JS).
   - Base normativa: DL 62/2026 art. 6 c. 5-bis, che introduce il c. 355-bis della L. 232/2016.
   - Campi: codice fiscale, gestore, sede operativa, titolo abilitativo, "Rilasciata da (Ente)", "Tipologia", "Modalità di gestione".
   - I dati vanno anche alla Commissione per i fabbisogni standard.
   - Il perimetro è "titolo abilitativo" (tutte le strutture autorizzate), non "convenzionate" come dicono i comunicati.
2. **La mappa è online dal 6/10/2026** (messaggio INPS 3164, PDF letto) in "Servizi vicino a me". Serve SPID ≥ 2, CIE 3.0, CNS o eIDAS. Il Portale è stato presentato il 17/2/2026 (40 prestazioni, 300 servizi di altre PA) e rilasciato con il messaggio 991 del 20/3/2026. È un progetto PNRR.
3. **App INPS mobile:** 2,80/5 su 5.559 voti (App Store IT). La descrizione non cita la mappa dei nidi.
4. **Scuola in Chiaro ha un'API JSON aperta** (`unica.istruzione.gov.it/services/sic/api/v1.0/…`) con coordinate e flag statale/paritaria. Infanzia = codice "AA"; Milano ha 274 scuole (27 statali, 247 paritarie, comprese 162 comunali).
5. **Open data MIM (IODL 2.0), anagrafe 2026/27:** 13.485 infanzia statali e 7.876 paritarie, senza Trento, Bolzano e Aosta. Ci sono anche dataset su alunni per età e tempo scuola. Niente iscrizione online per l'infanzia (FAQ UNICA).
6. **Eduscopio non ha nulla sullo 0-6.** La Fondazione Agnelli ha il programma Zero Sei (rapporto del 14/4/2026, che chiede di "armonizzare i sistemi informativi 0–6") e l'indagine "Prime scelte" a Torino.
7. **Torino** pubblica la graduatoria per nido ogni martedì (76 nidi) e l'accettazione si fa online. **Reggio Emilia** ha schede ricche (posti, retta min-max, orari) per 96 strutture comunali, statali, FISM, convenzionate e private. **Milano Geoschool** include privati e statali.

## Ricerche e letture
**WebSearch: 8 su 20.** Temi:
- circolare 93/2026;
- mappa INPS online a ottobre;
- critiche alla mappa INPS;
- Openpolis e Con i Bambini;
- iscrizioni nidi Roma 2026/27;
- pagine di comune.roma.it;
- Bologna iscrizioni e mappa;
- (nessuna su Scuola in Chiaro o Eduscopio: lettura diretta).

**WebFetch: 7.** QuiFinanza ×3, InformazioneFiscale, newsistruzione, money.it, circolare INPS (fallito, contenuto via JS); OrizzonteScuola 403.

**curl e API: circa 60.**
- INPS: news ×3, circolare, JS, scheda Portale, redirect SPID.
- PDF: circolare 93, messaggio 3164, rapporto Fondazione Agnelli.
- iTunes lookup, search e RSS ×4; Google Play (pacchetto INPS non trovato).
- Scuola in Chiaro: SPA e chunk JS, API ×8, schede ×10.
- dati.istruzione.it: cataloghi e 2 CSV.
- Eduscopio e Fondazione Agnelli ×6; Openpolis ×4 più il file XLS.
- Milano ×5 più il JS di Geoschool; Torino ×4; Reggio Emilia ×3; Trento ×6; Roma ×5 (404); Bologna ×3 (SPA); Informafamiglie ×2.
- API Lombardia ×3; CKAN Toscana ×2 più CSV.

## Cosa non sono riuscito a verificare
- **La mappa INPS dall'interno** (serve SPID): campi visibili in scheda, filtri, numero di strutture, copertura per comune.
- **App INPS su Google Play** (pacchetto non trovato) e recensioni specifiche della mappa: nessuna trovata.
- **Recensioni di Scuola in Chiaro per l'infanzia e dei portali comunali:** non cercate, per il limite di ricerche.
- **Roma** (comune.roma.it risponde 404 a curl: uso fonti secondarie del 2025), **Bologna** (SPA Lepida), **Firenze, Veneto, Piemonte:** non verificati.
- **Messaggi INPS 3166 e 3179** (mappa dei Centri per la famiglia, Osservatori): solo dagli estratti di ricerca.
- **Licenza del dataset lombardo:** non indicata nei metadati.

## Prove contrarie cercate
- "La mappa INPS copre già tutto": la legge impone la copertura di tutte le strutture 0-3 autorizzate. Però il 2026/27 è transitorio, la mappa sta dietro login e non comprende né il 3-6 né rette e posti. Ipotesi confutata solo in parte: l'anagrafe 0-3 c'è, lo strumento di scelta no.
- "Esiste già un portale pubblico che fa da Winnie": Reggio Emilia e Geoschool ci si avvicinano per singola città, ma nessuno esce dal confine comunale e nessuno mostra le rette private o i posti liberi.
- Critiche dei genitori alla mappa INPS: cercate (1 ricerca), non trovate.

## Livello di fiducia
- **Alto** su circolare 93, messaggio 3164, open data e API MIM, Torino, Reggio Emilia, Trento, Milano (fonti primarie lette).
- **Medio** su Roma e Bologna (fonti secondarie) e sui campi visibili nella mappa INPS (dedotti dal tracciato).
- **Basso** sulle opinioni degli utenti (quasi assenti).
