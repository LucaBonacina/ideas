---
tipo: regione
territorio: "Emilia-Romagna"
verificato_il: 2026-11-20
tags: [regione, nidi]
---
# Emilia-Romagna

## Normativa
- **L.R. 19/2016** "Servizi educativi per la prima infanzia" (abroga L.R. 1/2000) [fatto]. L'art. 14 obbliga Regione, enti locali e gestori a scambiarsi dati [fatto].
- **DGR 1564/2017**: direttiva sui requisiti strutturali e organizzativi dei servizi educativi per la prima infanzia e sulle norme procedurali; disciplina anche servizi ricreativi e iniziative di conciliazione [fatto].
- Tipologie rilevate dalla Regione: nidi d'infanzia, micronidi, sezioni di nido aggregate a scuole dell'infanzia, spazi bambino, centri per bambini e genitori, servizi sperimentali [fatto] (pagina dati SPI-ER). Educatore domiciliare/familiare e accreditamento: atti **non verificati** in questa sessione.
- 3-6: la Regione rileva anche le scuole dell'infanzia non statali (rilevazione regionale) [fatto].

## Registro o elenco
- La Regione tiene l'**anagrafe SPI-ER** dei servizi 0-3 e dei gestori, alimentata da comuni e gestori (pubblici e privati, convenzionati e non) [fatto]. **Non è pubblica come elenco**: si pubblicano solo tavole per comune e report → [[Regione Emilia-Romagna - SPI-ER tavole servizi 0-3 per comune]].
- Conteggio 2022-23: **1.207 servizi 0-3, 40.680 posti** (661 pubblici, 546 privati) [fatto].
- **Informafamiglie** (portale regionale per le famiglie, pagine per distretto) non è un registro: la pagina `/servizi` è caricata in JavaScript e non espone un elenco leggibile dei nidi (verifica del coordinatore, curl 2026-11-20, https://www.informafamiglie.it/servizi). La sessione S11 ha trovato un distretto assente (Imola) e pagine ferme a maggio 2025 ([[H22b Entusiasta]], E14).
- Il portale `dati.emilia-romagna.it` non era raggiungibile (blocco proxy e poi HTTP 503): **non verificato**. Su dati.gov.it, l'organizzazione "Regione Emilia Romagna" ripubblica dataset comunali (Reggio Emilia, Ferrara) [fatto].

## Misure regionali per le famiglie
- Misura annuale FSE+ per ampliamento posti e riduzione rette, erogata **ai Comuni/Unioni**: a.e. 2026/27 esenzione con ISEE ≤ 40.000 € nei comuni montani/STAMI, abbattimento con ISEE ≤ 26.000 € negli altri; circa 30 M€ per l'abbattimento [fatto] → [[Regione Emilia-Romagna - Misure riduzione rette nidi FSE]]. Elenco dei comuni aderenti: **non verificato**.

## Comuni capoluogo
| Comune | Cosa pubblica | Verifica |
|---|---|---|
| Bologna | Open data `elenco-delle-scuole` (88 nidi: 56 comunali, 31 convenzionati, 1 privato; più infanzia statali/comunali/paritarie), iscritti per nido, CC BY 4.0; iscrizioni online 13/4–4/5/2026 → [[Comune di Bologna - Elenco delle scuole open data]] | [fatto] |
| Ferrara | WFS "Nidi e spazi bambini", 37 record pubblici e privati (dato 2021) → [[Comune di Ferrara - Nidi e spazi bambini open data]] | [fatto] |
| Reggio Emilia | WFS "Nidi d'infanzia", 25 record (solo pubblici, 2022) → [[Comune di Reggio Emilia - Nidi d infanzia open data]] | [fatto] |
| Rimini | CSV "Lista nidi e scuole infanzia" su opendata.comune.rimini.it, riferito a carta dei servizi 2017-18 (da nome file); allegato "posti nidi comunale 2026-27" | metadati visti, file non aperto |
| Modena | bando nidi 2026-27 su comune.modena.it; portale open data non raggiungibile | controllo rapido |
| Parma, Piacenza, Ravenna, Forlì, Cesena | non controllati in dettaglio (Ravenna: promemoria scadenze iscrizioni 2026 pubblicato) | non verificato |

## Buchi
- Nessun elenco regionale pubblico delle strutture (esiste ma è chiuso).
- Open data comunali solo in pochi capoluoghi, spesso solo pubblici e datati.
- Rette private, posti liberi, orari: non pubblicati in forma strutturata.

## Per essere completi
Elenco "vero" = open data comunali dove esistono + elenchi sui siti comunali + MIM/INPS per infanzia e nidi. Copertura stimata con le sole fonti aperte trovate: **circa 15-20%** dei 1.207 servizi 0-3 [stima: Bologna 88 + Ferrara 37 + Reggio 25 su 1.207]. La via maggiore è una **richiesta formale alla Regione dell'anagrafe SPI-ER** (accesso civico/riuso), che coprirebbe ~100% dei servizi 0-3 [stima].

## Fonti
- https://sociale.regione.emilia-romagna.it/infanzia-adolescenza/osservatorio-infanzia-e-adolescenza/il-sistema-informativo-dei-servizi-prima-infanzia-della-regione-emilia-romagna-spi-er (2026-11-20)
- https://bur.regione.emilia-romagna.it/area-bollettini/n-136-del-01-06-2026-parte-seconda/ (allegato 1, 2026-11-20)
- https://opendata.comune.bologna.it/explore/dataset/elenco-delle-scuole/ (2026-11-20)
- https://www.dati.gov.it/opendata/api/3/action/package_search?q=nidi (2026-11-20)
