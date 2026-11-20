---
tipo: fonte
ente: "Regione Puglia (Sezione Istruzione e Università), portale Studio in Puglia"
livello: "regionale"
territorio: "Puglia"
tipologie: [nido, micronido, nido aziendale, sezione primavera, centro ludico prima infanzia, servizio educativo domiciliare, piccolo gruppo educativo o nido in famiglia]
gestione: [pubblico, privato convenzionato, privato]
campi: [avviso, provincia, comune, gestore, codice pratica, denominazione, tipo, info, indirizzo, CAP, telefono, email, sito web]
formato: "pagina web con ricerca + esportazione Excel (XLS) senza autenticazione"
aggiornamento: "annuale (catalogo per anno educativo); catalogo 2026/27 con elenchi approvati da determina n. 542 del 23/07/2026; esportazione scaricata il 20/11/2026"
licenza: "nessuna indicata"
dati_personali: "possibili: telefoni ed email della struttura, a volte nominativi; gestore talvolta ditta individuale con nome della persona"
url: "https://www.studioinpuglia.regione.puglia.it/bs/udo_tevlist.php?cmd=search&t=udo_tev&z_cas_avv=%3D&x_cas_avv=10001"
verificato_il: "2026-11-20"
affidabilita: "alta per le strutture aderenti al Buono educativo zerotre (elenco ufficiale, aggiornato per il 2026/27); copre solo chi aderisce"
tags: [fonte, puglia, catalogo, buono-servizio, privati]
---
# Regione Puglia - Catalogo telematico zerosei

## Cosa copre
[fatto] È l'elenco delle **unità di offerta per la prima infanzia accreditate dalla Regione** per l'anno educativo, presso le quali le famiglie possono usare il **Buono educativo zerotre** (fondi europei del PR Puglia). Per il 2026/27:
- gestori: prima finestra dal 31/03/2026 al 05/05/2026 (Avviso approvato con determina n. 235 del 26/03/2026), seconda finestra dal 18/06/2026 al 02/07/2026 (determina n. 427 del 16/06/2026); elenchi approvati con determina n. 542 del 23/07/2026;
- famiglie: avviso con determina n. 567 del 30/07/2026, domande dal 30/07/2026 al 28/08/2026, ISEE fino a 75.000 euro; graduatorie degli Ambiti territoriali sociali.
(Fonte: pagina https://www.studioinpuglia.regione.puglia.it/zerosei/ letta con WebFetch il 2026-11-20; importi del buono non indicati nella pagina.)

[fatto] Conteggio dall'esportazione Excel del 2026-11-20 (filtro "Catalogo ZEROSEI 26/27"): **564 unità di offerta**.
- Per tipo: asilo nido 270, micronido 113, sezione primavera 100, centro ludico prima infanzia 75, servizio educativo familiare o a domicilio 5, piccoli gruppi educativi o nido in famiglia 1.
- Per provincia: LE 146, BA 144, FG 91, TA 80, BR 59, BT 44.
- Nei capoluoghi: Bari 18, Lecce 21, Foggia 41, Taranto 4.

Rispetto al registro ([[Regione Puglia - Registro strutture e servizi]], 935 servizi 0-3 al 2023) il catalogo è più recente e ha i contatti, ma copre solo chi ha chiesto l'accreditamento per il buono: [stima] circa 6 servizi su 10 del registro. Bari città, ad esempio, ha 18 unità nel catalogo contro 54 nel registro e circa 10 nidi comunali propri.

**Non copre:** strutture che non aderiscono (molti nidi comunali a gestione diretta, privati che non vogliono il buono), scuole dell'infanzia, ludoteche per età superiori. Non ha posti, rette, orari (la colonna "Info" è vuota nell'esportazione).

## Come si accede
Ricerca pubblica, 20 righe per pagina, con pulsante "Excel" (`udo_tevlist.php?export=excel`): il download funziona con una semplice richiesta senza login. Il 2026-11-20 le pagine statiche del sito (PDF delle determine in wp-content) restituivano una pagina di sicurezza del firewall se scaricate con curl; i PDF delle determine non sono stati letti direttamente.

Catalogo storico in open data: dataset "Catalogo telematico dell'offerta di servizi" su dati.puglia.it (A.D. 746/2011), CSV 2011 con 1.044 righe leggibili e campi molto ricchi (orari, giorni di apertura, pasti, posti offerti, rette giornaliera/mensile/annuale, personale), licenza IODL 2.0, mai aggiornato (frequenza "NEVER"): https://dati.puglia.it/ckan/dataset/catalogo-telematico-dell-offerta-di-servizi. Utile come modello di campi, non come dato attuale.

## Esempio di record
| Campo | Valore |
|---|---|
| Avviso | Catalogo ZEROSEI 26/27 |
| Prov / Comune | BA / BARI |
| Gestore | SUORE MINIME DELLA PASSIONE DI N.S.G.C. |
| Denominazione | ASILO NIDO "PRIMI PASSI PIETRO ALBEROTANZA" |
| Tipo | (art. 53) Asilo nido |
| Indirizzo | TRAV. II VIA UMBRIA N. 5, 70132 |
| Web | www.istitutoalberotanza.it |

## Problemi noti
- Nessuna licenza dichiarata; nessun identificativo stabile oltre al codice pratica.
- Elenco annuale: le strutture cambiano ogni anno.
- Telefoni ed email da trattare con cautela (alcuni personali).

## Fonti
- Pagina catalogo 2026/27: https://www.studioinpuglia.regione.puglia.it/zerosei/ (accesso 2026-11-20, WebFetch)
- Ricerca ed esportazione: URL sopra (accesso 2026-11-20, Excel scaricato e contato)
- Open data storico: https://dati.puglia.it/ckan/dataset/catalogo-telematico-dell-offerta-di-servizi (accesso 2026-11-20, CSV scaricato)
- Regione: [[Puglia]]
