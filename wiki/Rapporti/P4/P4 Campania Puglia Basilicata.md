---
tipo: rapporto
sessione: P4
regioni: [Campania, Puglia, Basilicata]
data: 2026-11-20
tags: [rapporto, nidi, P4]
---
# P4 Campania Puglia Basilicata

## Cosa ho fatto
- Letti il brief P4 e il [[Metodo del progetto]].
- **Puglia**: interrogata l'API CKAN di dati.puglia.it; scaricati e contati il CSV del registro regionale delle strutture autorizzate, il CSV storico del catalogo telematico (2011) e il CSV dei buoni servizio; letta la pagina del Catalogo zerosei 2026/27 e scaricata la sua esportazione Excel; letto l'art. 53 del Reg. reg. 4/2007 (testo coordinato 2019); lette le pagine dei nidi comunali di Bari e il GeoJSON dei nidi di Lecce.
- **Campania**: letta la DGR 490/2015 (requisiti di nido, micronido, servizi integrativi); letta la pagina del Comune di Napoli su autorizzazione e accreditamento e scaricato l'elenco PDF dei nidi privati autorizzati (03/11/2026); lette le 10 pagine dei nidi comunali per municipalità, le tariffe e l'avviso di iscrizione; cercati dataset regionali su dati.gov.it (il portale regionale non era raggiungibile); letto un avviso d'ambito sulla misura di conciliazione.
- **Basilicata**: lette la scheda normativa di minori.gov.it, l'avviso "Servizi all'infanzia in gestione privata" e gli allegati delle graduatorie "Un nido per l'infanzia" (API WordPress del portale bandi); letto l'avviso nidi 2025/26 di Matera. Potenza non raggiungibile.
- Scritte 3 note regione e 9 note fonte (elenco sotto). **Commit e push non eseguiti**: il comando git commit/push richiesto dal coordinatore è stato bloccato dal sistema di permessi (classificatore automatico); i file sono nel working tree non tracciati.

## Note create
- Regioni: [[Campania]], [[Puglia]], [[Basilicata]]
- Fonti: [[Regione Puglia - Registro strutture e servizi]], [[Regione Puglia - Catalogo telematico zerosei]], [[Regione Puglia - Buoni servizio minori open data]], [[Comune di Bari - Asili nido comunali]], [[Comune di Lecce - Open data asili nido]], [[Comune di Napoli - Nidi privati autorizzati]], [[Comune di Napoli - Asili nido comunali]], [[Regione Campania - Open data strutture per minori]], [[Regione Basilicata - Avvisi Un nido per l infanzia]]

## Evidenze
| Affermazione | Tipo | URL | Accesso | Letta direttamente |
|---|---|---|---|---|
| Il registro regionale pugliese delle strutture autorizzate è in open data CSV CC-BY 4.0 con 935 servizi 0-3 (703 privati, 232 pubblici), ultima iscrizione 24/05/2023 | fatto | https://dati.puglia.it/ckan/dataset/registri-regionali-delle-strutture-e-dei-servizi-socio-assistenziali-pubblici-e-privati-autorizzati | 2026-11-20 | sì (CSV contato) |
| Il registro contiene nome e cognome dei legali rappresentanti | fatto | stesso | 2026-11-20 | sì |
| Il Catalogo zerosei 2026/27 ha 564 unità di offerta, esportabili in Excel senza login | fatto | https://www.studioinpuglia.regione.puglia.it/bs/udo_tevlist.php?cmd=search&t=udo_tev&z_cas_avv=%3D&x_cas_avv=10001 | 2026-11-20 | sì (XLS contato) |
| Buono educativo zerotre 2026/27: domande 30/07-28/08/2026, ISEE fino a 75.000 euro | fatto | https://www.studioinpuglia.regione.puglia.it/zerosei/ | 2026-11-20 | sì (WebFetch) |
| In Puglia l'autorizzazione è comunale e la Regione iscrive nel registro | fatto | registro CSV (campi provvedimento comunale e iscrizione) | 2026-11-20 | sì |
| Reg. reg. 4/2007 art. 53: nido 20-60 posti, micronido 6-20, rapporti 1:5/1:8/1:10, 7,5 mq interni | fatto | https://www.minori.gov.it/sites/default/files/regolamento_4_2007_raccordato_al_7_maggio_2019.pdf | 2026-11-20 | sì (testo 2019) |
| Un regolamento del 30/03/2026 modifica la ricettività dell'art. 53 | fatto (da estratto) | https://legislazionetecnica.it/node/8558733 | 2026-11-20 | no |
| DGR Puglia 1831/2025 istituisce un nuovo registro regionale per minori | fatto (da estratto) | estratto di ricerca su determina regionale 2026 | 2026-11-20 | no |
| "Nidi gratis" in Puglia | non trovato | - | 2026-11-20 | - |
| Bari: 10 voci di nidi comunali, iscrizioni 20/05-19/06/2026, retta 1,11% ISEE max 444 euro | fatto | https://www.comune.bari.it/-/asilo-nido-comunale-iscrizione-e-pagamento | 2026-11-20 | sì (WebFetch) |
| Lecce: GeoJSON con 4 nidi comunali; elenco strutture autorizzate HTTP 410 | fatto | https://dati.puglia.it/ckan/dataset/elenco-e-ubicazione-asili-nido-comunali-lecce | 2026-11-20 | sì |
| Campania: nido 30-60 posti, micronido 6-29, 6 mq interni e 10 mq complessivi, rapporti 1:5/1:8/1:10 (DGR 490/2015) | fatto | https://www.minori.gov.it/sites/default/files/delibera_n.490.pdf | 2026-11-20 | sì |
| Campania: titoli abilitativi e accreditamento rilasciati dal Comune competente (R.R. 4/2014) | fatto | https://www.comune.napoli.it/articolo_tematico/welfare-e-pari-opportunita/autorizzazione-ed-accreditamento/ | 2026-11-20 | sì |
| Napoli: elenco PDF di 45 nidi e micronidi privati autorizzati + 4 ludoteche, agg. 03/11/2026 | fatto | https://static-www.comune.napoli.it/wp-content/uploads/2011/11/elenco-nidi-autorizzati-agg_03-11-2026.pdf | 2026-11-20 | sì (PDF contato) |
| Napoli: circa 80 voci di nidi, micronidi e sezioni primavera comunali | stima | https://www.comune.napoli.it/articolo_tematico/scuola/asili-nido/elenco-asili-nido-e-sezioni-primavera-comunali/ | 2026-11-20 | sì |
| Napoli: iscrizioni 6/3-1/4/2026, quote ISEE da 36 euro (Delibera C.C. 203/2025) | fatto | https://www.comune.napoli.it/articolo_tematico/scuola/asili-nido/tariffe-e-agevolazioni/ | 2026-11-20 | sì |
| Registro regionale campano dei servizi 0-3 | non trovato | - | 2026-11-20 | - |
| Open data Campania: dataset "strutture responsabilità familiari e diritti dei minori" 2021-2022, contenuto non letto (host irraggiungibile) | fatto | https://www.dati.gov.it/opendata/api/3/action/package_search?q=minori&fq=organization:regione-campania | 2026-11-20 | sì (metadati), no (file) |
| Campania: misura di conciliazione con voucher per nidi gestita da reti con gli ambiti (DGR 24/2024, DD 76/2024) | fatto | https://cloud.municipiumapp.it/s3/20250/allegati/ambito-a1-avviso-gestori-titolari-dei-servizi_signed.pdf | 2026-11-20 | sì |
| Campania: voucher rette 2025/26, domande 9/3-23/4/2026, fino a 3.000 euro | fatto (da estratto) | https://www.fanpage.it/napoli/voucher-asili-nido-regione-campania-2025-2026-domande-al-via-fino-a-3-000-euro-a-famiglia/ | 2026-11-20 | no (403) |
| Basilicata: autorizzazione comunale secondo il Manuale DGR 194/2017; L.R. 16/2016 nido familiare tagesmutter | fatto | https://www.minori.gov.it/it/print/4146 ; avviso DGR 211/2026 | 2026-11-20 | sì |
| Basilicata: avviso contributo ai privati autorizzati non convenzionati, 3,6 milioni, DGR 211/2026, graduatoria non pubblicata | fatto | https://portalebandi.regione.basilicata.it/avvisi-e-bandi/avviso-pubblico-servizi-allinfanzia-in-gestione-privata/ | 2026-11-20 | sì |
| Basilicata: "Un nido per l'infanzia" 2025/26, elenchi di 30, 21 e 35 comuni finanziati | fatto | https://portalebandi.regione.basilicata.it/wp-content/uploads/2026/10/allegato_risultato_6ac5f716ef945.pdf | 2026-11-20 | sì |
| Basilicata: registro regionale e misura rette per famiglie 2026 | non trovato | - | 2026-11-20 | - |
| Matera: graduatoria unica per 2 nidi comunali e privati accreditati (2025/26) | fatto | https://comune.matera.it/wp-content/uploads/2025/07/Avviso-ammissione-asili-nido-anno-educativo-2025_2026.pdf | 2026-11-20 | sì |
| Potenza: sito comunale | non verificato (HTTP 403) | https://www.comune.potenza.it/ | 2026-11-20 | no |

## Cosa non ho trovato
- Numero di servizi ISTAT per regione (non cercato oltre per limite di ricerche; il confronto resta da fare con le note nazionali).
- Registri regionali in Campania e Basilicata.
- Testo della modifica 2026 all'art. 53 del Reg. Puglia 4/2007 e della DGR Puglia 1831/2025.
- Avviso ufficiale del voucher nidi Campania 2026.
- Requisiti numerici della Basilicata (allegati DGR 194/2017 sono scansioni).
- Potenza (sito bloccato) e Salerno, Taranto (non fatti per tempo).
- Determine in PDF del sito Studio in Puglia (firewall).

## Conteggio
- WebSearch: 13
- WebFetch: 15 circa (di cui 5 falliti: 403, 404, 502, web.archive.org non raggiungibile)
- curl: circa 60 richieste (pagine, API CKAN e WordPress, file CSV, XLS, PDF)
