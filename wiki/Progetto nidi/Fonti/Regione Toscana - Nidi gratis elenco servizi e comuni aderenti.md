---
tipo: fonte
ente: "Regione Toscana - Settore educazione e istruzione (misura Nidi gratis, PR FSE+ 2021-2027)"
livello: regionale
territorio: "Toscana"
tipologie: [nido, spazio gioco, servizio educativo in contesto domiciliare]
gestione: [pubblico, privato convenzionato]
campi: [amministrazione comunale di riferimento, comune sede, tipologia soggetto titolare, tipologia servizio, nome del servizio, indirizzo]
formato: "PDF (allegati ai decreti dirigenziali, tabella estraibile)"
aggiornamento: "più volte l'anno; ultimo verificato: decreto 22561 del 12-10-2026 (Allegato B servizi, Allegato A comuni)"
licenza: "nessuna indicata (atto amministrativo pubblicato nella banca dati atti)"
dati_personali: "alcuni servizi portano il nome di una persona (intitolazione); nessun dato di contatto. Gli altri allegati del decreto (domande ammesse) sono per codice domanda"
url: "https://www.regione.toscana.it/it/-/bando-nidi-gratis-2026-2027-per-i-servizi-educativi-rivolto-alle-famiglie"
verificato_il: 2026-11-20
affidabilita: "alta per i servizi del sistema pubblico dei comuni aderenti; non copre privati solo autorizzati, centri bambini e famiglie, comuni non aderenti"
tags: [fonte, toscana, elenco-servizi, misura-famiglie]
---
# Regione Toscana - Nidi gratis: elenco servizi e comuni aderenti

**È l'elenco nominativo regionale più vicino a un registro** che ho trovato in Toscana [fatto].

**Allegato B (decreto 22561 del 12-10-2026), "Elenco aggiornato Servizi educativi prima infanzia Nidi gratis":** PDF di 29 pagine, una riga per servizio. Estratto con pdfplumber: **900 servizi** in 213 comuni sede.
- Tipologia servizio: Nido d'infanzia 858; Servizio educativo in contesto domiciliare 33; Spazio gioco 9.
- Titolare: Comune 416; Privato accreditato 477 (con varianti: "offerta pubblica/privata", "posti in convenzione con il comune di..."); Soggetto pubblico non comunale 7.
- Capoluoghi: Firenze 123, Prato 48, Livorno 43, Pisa 24, Arezzo 22, Grosseto 21, Pistoia 21, Siena 17, Lucca 11, Massa 8.

**Allegato A:** 189 amministrazioni (comuni o unioni) ammesse, con i comuni della gestione associata.

**Cosa non copre [fatto]:** centri bambini e famiglie (esclusi dall'avviso, nota 1 dell'Allegato A al decreto 9186/2026); servizi privati solo autorizzati e non accreditati; servizi nei comuni che non aderiscono. Nessun campo su capienza, orari, età, rette.

**Esempio di record:** `Arezzo | Arezzo | Privato accreditato | Nido d'infanzia | Melograno | Piazza Andromeda 20a`.

**Come si accede:** link "Elenco aggiornato Servizi educativi prima infanzia Nidi gratis" nella pagina del bando famiglie; file servito da `www301.regione.toscana.it/bancadati/atti/Contenuto.xml?id=...`. Ogni aggiornamento cambia URL (decreti del 30-07, 15-09, 12-10-2026).

**Confronto con la statistica:** 900 servizi del sistema pubblico 2026/27 contro 917 servizi totali 2024/25 di [[Regione Toscana - Open data servizi educativi prima infanzia]]. I numeri sono vicini, ma gli insiemi sono diversi (qui mancano i privati non accreditati, là mancano i servizi nuovi): [stima] l'elenco copre circa l'85-95% dei nidi toscani; da misurare comune per comune.

**Problemi noti:** PDF con celle su più righe (serve estrazione tabellare, non pdftotext); denominazioni con maiuscole incoerenti; nessun identificativo stabile del servizio.

## Fonti
- Pagina bando famiglie 2026-2027: https://www.regione.toscana.it/it/-/bando-nidi-gratis-2026-2027-per-i-servizi-educativi-rivolto-alle-famiglie (accesso 2026-11-20)
- Allegato B: https://www301.regione.toscana.it/bancadati/atti/Contenuto.xml?id=5534458&nomeFile=Decreto+n.22561+del+12-10-2026-+Allegato+B+ (scaricato 2026-11-20)
- Allegato A: https://www301.regione.toscana.it/bancadati/atti/Contenuto.xml?id=5534459&nomeFile=Decreto+n.22561+del+12-10-2026-+Allegato+A+ (scaricato 2026-11-20)
- Avviso famiglie (decreto 9186 del 27-04-2026, Allegato A): https://www301.regione.toscana.it/bancadati/atti/Contenuto.xml?id=5512222&nomeFile=Decreto+n.9186+del+27-04-2026-+Allegato+A+ (2026-11-20)
