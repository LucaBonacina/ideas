---
tipo: progetto
tags: [progetto, nidi, decisioni]
---
# Decisioni del progetto

| Data | Decisione | Chi |
|---|---|---|
| 2026-11-20 | Sviluppare un prodotto simile a Winnie per l'Italia | utente |
| 2026-11-20 | Età 0-6 per tutto (fonti e prodotto) | utente |
| 2026-11-20 | Discovery completa su scala nazionale, test di completezza in tutte le regioni | utente |
| 2026-11-20 | Includere scuole e servizi bilingui o internazionali e servizi per bambini con bisogni speciali | utente |
| 2026-11-20 | Le funzioni del prodotto si derivano dai bisogni documentati degli utenti, non il contrario | utente |
| 2026-11-20 | Cercanido, MigliorAsilo (rilanciato), MyNido e Nidò non sono collegati all'utente né al progetto: vanno trattati come concorrenti indipendenti | utente |
| 2026-11-20 | Analisi aggiuntive (es. approfondimento su Cercanido) rimandate a dopo l'azzeramento del limite settimanale di utilizzo (22 novembre, 23:00 UTC); le sintesi finali scritte senza nuove sessioni | utente |
| 2026-11-21 | Aggiungere al censimento delle fonti una verifica sui SUAP comunali (dopo l'azzeramento del limite settimanale, insieme all'approfondimento su Cercanido); escludere il Registro delle imprese (dati su aziende) | utente |
| 2026-11-22 | Passare alla costruzione della piattaforma. Prima versione: pipeline dei dati, elenco 0-6 con mappa e scheda della struttura su tutta Italia (F01, F02), più il calcolatore del costo netto (F04) in Lombardia. Posti liberi, rivendicazione della scheda e le altre funzioni locali dopo le interviste | utente |
| 2026-11-22 | Il codice va in un repository nuovo, separato dalla wiki; la base tecnica è un template fornito dall'utente | utente |
| 2026-11-22 | Dal template si prendono architettura e regole (NestJS, repository, file grezzi prima del parsing, circuit breaker), non la libreria privata né il Queue Manager esterno: solo pacchetti pubblici | utente |
| 2026-11-22 | Download dalle fonti con richieste semplici, lente e identificabili: niente browser "stealth", proxy residenziali né risoluzione di captcha | utente |
| 2026-11-22 | Il codice sta per ora in `piattaforma/` di questo repository; si sposterà nel repository dedicato quando esisterà | utente |
| 2026-11-22 | Privacy nei dati pubblicati: niente nomi di gestori privati (solo enti pubblici), niente email personali né cellulari, nidi famiglia senza indirizzo né coordinate | Claude, dopo il controllo sui dati reali |
| 2026-11-23 | Le fonti si importano per intero, dati personali compresi (es. nomi, email e PEC delle educatrici dei Nidi in Famiglia del Veneto): cosa mostrare si decide nel prodotto, non nell'import. I dati non pubblici stanno in campi e raccolte che l'API non restituisce (`riservato` sulle strutture, raccolta `referenti`). Sostituisce in parte la decisione del 22/11: quella resta la regola di ciò che il sito mostra | utente |
| 2026-11-23 | Estrazione dalle pagine dei comuni fatta da Claude nella sessione, senza chiave API, per ora | utente |
