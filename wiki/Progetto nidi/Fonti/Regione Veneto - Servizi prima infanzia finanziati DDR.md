---
tipo: fonte
ente: "Regione del Veneto (Direzione Servizi sociali) - liquidazione tramite Azienda Zero"
livello: regionale
territorio: "Veneto"
tipologie: [asilo nido, micronido, nido integrato, centro infanzia, nido aziendale]
gestione: [pubblico, privato]
campi: [provincia, comune, codice meccanografico regionale, codice fiscale beneficiario, ente beneficiario (gestore), denominazione del servizio, contributo]
formato: "PDF (allegati a decreto sul BUR)"
aggiornamento: "annuale; ultimo verificato DDR n. 58 del 19-06-2024 (BUR n. 96 del 19-07-2024)"
licenza: "atto pubblico, nessuna licenza indicata"
dati_personali: "sì: il codice fiscale del beneficiario è di una persona fisica per le ditte individuali, e il nome della titolare compare nella denominazione"
url: "https://bur.regione.veneto.it/BurvServices/Pubblica/DettaglioDecreto.aspx?id=534140"
verificato_il: "2026-11-20"
affidabilita: "alta per i servizi finanziati; non copre autorizzati non accreditati o non finanziati"
tags: [fonte, nidi, veneto]
---
# Regione Veneto - Servizi prima infanzia finanziati (DDR riparto contributi)

## Cosa è
La Regione **non pubblica un registro** dei servizi autorizzati/accreditati (non trovato su regione.veneto.it né su dati.veneto.it). L'elenco più completo è indiretto: gli allegati del decreto annuale che ripartisce il contributo in conto gestione ai servizi prima infanzia **accreditati** (L.R. 22/2002, DGR 84/2007) e riconosciuti (L.R. 32/1990) [fatto].

## Conteggi verificati (DDR 58/2024, contributi 2024) [fatto]
- Allegato C (gestori privati): **544** servizi. Per provincia: VR 131, TV 102, VI 99, PD 93, VE 76, RO 26, BL 17.
- Allegato D (gestori pubblici): **258** servizi. VR 64, PD 63, VI 41, VE 38, TV 25, RO 19, BL 8.
- **Totale 802**, uguale al dato regionale "802 servizi, 25.263 posti" del 2024 [fatto] (pagina regionale servizi 0-3).
- Tipologia ricavata dal nome (approssimata) [stima]: privati: nido integrato 225, micronido 147, asilo nido 60, centro infanzia 47, aziendale 3, altro 62; pubblici: asilo nido 167, nido integrato 26, micronido 24, centro infanzia 8, aziendale 7, altro 26.
- Capoluoghi (privati/pubblici): Verona 36/22, Padova 25/17, Venezia 10/20, Vicenza 14/7, Treviso 11/0, Belluno 5/3, Rovigo 5/5.

## Esempio di record (persona giuridica)
`2 | BL | ALPAGO | BL00029 | <CF società> | KAIROS SOCIETA' COOPERATIVA SOCIALE ONLUS | MICRONIDO MON PETIT | 12.487,01 €`

## Cosa non copre
- Servizi autorizzati ma non accreditati, accreditati che non hanno chiesto il contributo, Nidi in Famiglia (elenco separato: [[Regione Veneto - Elenco Nidi in Famiglia]]), servizi integrativi, scuole dell'infanzia (contributi in allegati separati, non contati).
- Nessun indirizzo, capienza, età, rette.

## Problemi noti
- PDF con impaginazione a colonne: estrazione con `pdftotext -layout` funziona ma alcune righe vanno a capo.
- Il "codice meccanografico" regionale (es. BL00029) è un identificativo stabile utile per il collegamento tra anni [stima].
- Dati 2025: decreto non cercato in questa sessione.

## Fonti
- https://www.regione.veneto.it/web/sociale/servizi-educativi-0-3-anni (2026-11-20)
- https://bur.regione.veneto.it/BurvServices/Pubblica/DettaglioDecreto.aspx?id=534140 e allegati C e D `Download.aspx?name=58_Allegato_C_DDR_58_19-06-2024_534140.pdf&type=7&storico=False` (2026-11-20)
- https://dati.veneto.it/SpodCkanApi/api/3/action/package_search?q=nidi (0 risultati, 2026-11-20)
