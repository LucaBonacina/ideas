---
tipo: fonte
ente: "MIM (amministrazione titolare); dati di progetto da ReGiS / Italia Domani; ripubblicati da OpenPNRR (Openpolis)"
livello: nazionale
territorio: "Italia"
tipologie: [nido (edifici), scuola dell'infanzia (edifici), poli 0-6]
gestione: [pubblico]
campi: [CUP, titolo del progetto (contiene spesso codice edificio, denominazione e indirizzo), natura e tipologia CUP, finanziamenti per fonte, soggetto attuatore (ente locale), territorio, date di inizio e fine previste ed effettive, fase dell'iter, stato di avanzamento, data di estrazione ReGiS]
formato: "API JSON (OpenPNRR); open data Italia Domani (non raggiungibile da qui: 403); PDF di graduatorie e decreti sul sito PNRR del MIM"
aggiornamento: "OpenPNRR: progetti con data di estrazione ReGiS 13/06/2026; scadenza del target al 2026-T2"
licenza: "non trovata per l'API OpenPNRR; open data Italia Domani non verificati (accesso negato)"
dati_personali: "no"
url: "https://openpnrr.it/api/v1/misure/165"
verificato_il: 2026-11-20
affidabilita: "alta come registro degli interventi finanziati (dati ReGiS); bassa come elenco di servizi: un progetto è un cantiere su un edificio pubblico, non un servizio attivo"
tags: [fonte, nazionale, pnrr, nido, scuola-infanzia]
---
# PNRR - Piano asili nido e scuole dell'infanzia

> La misura M4C1 I1.1 del PNRR finanzia la costruzione, la riqualificazione e la messa in sicurezza di asili nido e scuole dell'infanzia **pubblici**. I dati descrivono gli interventi (CUP) su edifici, non i servizi. Servono come segnale di **nuovi nidi pubblici in apertura** e per capire dove l'offerta cambierà.

## La misura (verificato su OpenPNRR)
- Codice M4C1I1.1, "Piano asili nido e scuole dell'infanzia e servizi di educazione e cura per la prima infanzia"; amministrazione titolare: Ministero dell'istruzione e del merito; importo PNRR 3.776.670.078 € (di cui 661.970.078 € progetti in essere e 3.114.700.000 € nuovi progetti) [fatto].
- Obiettivo dichiarato: "raggiungere l'obiettivo europeo del 33%" per i servizi per la prima infanzia, per le fasce 0-3 e 3-6 [fatto].
- Target UE M4C1-18 (2026-T2): "Certificati di completamento dei lavori per almeno 150 480 posti… per bambini di età compresa tra 0 e 6 anni, di cui un massimo di 35 000 posti risultanti dalla demolizione e dalla ricostruzione". La verifica richiede "a list of projects and for each of them… the number of new places created" [fatto]. Questo elenco, se pubblicato, sarebbe utile (posti per progetto): **non trovato** in forma aperta.
- Fonte metodologica indicata: "Registro nazionale degli edifici scolastici e dati derivanti dal monitoraggio GPU" [fatto].
- Milestone M4C1-00-ITA-1 (graduatoria, 2022-T3): decreto direttoriale n. 57 dell'8/9/2022 [fatto, fonte citata da OpenPNRR].

## I progetti (OpenPNRR)
- API pubblica: `https://openpnrr.it/api/v1/progetti?format=json&search=<testo>` (291.387 progetti PNRR in totale). Il filtro per misura non funziona con i parametri provati (`misura`, `misura_id`, `misure`, `misura__id`): ho filtrato a valle sul campo `misura` [fatto].
- Ricerca "asilo nido": 2.849 progetti; nei primi 500, **494 appartengono alla misura M4C1I1.1**; di questi 421 con stato "IC" e 73 "CO" [fatto; il significato dei codici di stato non è documentato nell'API: stima "in corso" e "concluso"].
- Esempio di record: titolo "0300830003 - SCUOLA DELL'INFANZIA DI IPPLIS E PREMARIACCO*PIAZZA DELLA VITTORIA*RIQUALIFICAZIONE FUNZIONALE SCUOLA DELL'INFANZIA DI IPPLIS CON REALIZZAZIONE DI ASILO NIDO", CUP E18I22000170006, natura "REALIZZAZIONE DI LAVORI PUBBLICI", PNRR 155.000 €, fine prevista 30/06/2026, fase "COLLAUDO", data estrazione ReGiS 13/06/2026, fonte "ITDOM" (Italia Domani) [fatto]. Il titolo contiene codice edificio, nome e indirizzo, ma in un testo libero con separatore `*`.

## Altre fonti della stessa misura
- Sito PNRR del MIM, pagina "Asili nido e scuole dell'infanzia – FUTURA": avvisi, decreti, graduatorie e allegati in **PDF e ZIP** (dal 2021 al 2026, ultimi atti del 13/02/2026) [fatto, elenco dei link letto con curl]. https://pnrr.istruzione.it/avviso/asili/
- Italia Domani (catalogo open data dei progetti): `https://www.italiadomani.gov.it/content/sogei-ng/it/it/catalogo-open-data.html` risponde **403 Access Denied** sia a curl sia a un browser automatico da questo ambiente [fatto]. Non verificati campi e licenza.
- dati.gov.it: 7.916 dataset per "PNRR progetti", quasi tutti comunali o regionali (Ferrara, Bari, Lecce, Trento…) [fatto].

## Cosa NON copre
- Nidi e scuole privati (nessuno), servizi integrativi.
- Lo stato del servizio: un intervento concluso non significa nido aperto né gestito dal comune (può essere affidato a terzi).
- Capienza per progetto: non trovata nei campi del progetto.

## Valore come base per l'elenco completo
**Basso come elenco**, **medio come segnale**: indica dove nascono o si ampliano nidi pubblici (posti in arrivo, comuni da ricontrollare). Da incrociare con [[MIM - Anagrafe scuole statali e paritarie]] (per le scuole dell'infanzia) e con le fonti regionali e comunali per i nidi.

## Fonti
- https://openpnrr.it/api/v1/misure/165?format=json (accesso 2026-11-20, curl)
- https://openpnrr.it/api/v1/scadenze/778?format=json (accesso 2026-11-20, curl)
- https://openpnrr.it/api/v1/progetti?format=json&search=asilo%20nido (accesso 2026-11-20, curl e Python, prime 5 pagine da 100)
- https://pnrr.istruzione.it/avviso/asili/ (accesso 2026-11-20, curl)
- https://www.italiadomani.gov.it/content/sogei-ng/it/it/catalogo-open-data.html (accesso 2026-11-20: 403)
- https://www.dati.gov.it/opendata/api/3/action/package_search?q=PNRR%20progetti (accesso 2026-11-20)
