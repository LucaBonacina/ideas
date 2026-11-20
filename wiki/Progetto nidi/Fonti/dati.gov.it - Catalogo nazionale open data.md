---
tipo: fonte
ente: "AgID / Dipartimento per la trasformazione digitale (catalogo nazionale dei dati aperti)"
livello: nazionale
territorio: "Italia (aggrega cataloghi regionali e comunali)"
tipologie: [nido, micronido, sezione primavera, scuola dell'infanzia, varie secondo il dataset]
gestione: [varie secondo il dataset]
campi: [metadati CKAN: titolo, organizzazione, risorse, licenza, date]
formato: "API CKAN (JSON)"
aggiornamento: "continuo (harvesting dai cataloghi locali)"
licenza: "metadati aperti; licenza dei dati indicata per singolo dataset"
dati_personali: "no nei metadati"
url: "https://www.dati.gov.it/opendata/api/3/action/package_search"
verificato_il: 2026-11-20
affidabilita: "alta come indice; non garantisce che ogni regione o comune abbia pubblicato"
tags: [fonte, nazionale, open-data, indice]
---
# dati.gov.it - Catalogo nazionale open data

> Non è una fonte di servizi, ma l'**indice** dei dataset pubblici. Serve per trovare i registri regionali e comunali, che sono il vero serbatoio di elenchi nominativi 0-3.

## Misura (verificata dal subagente con l'API CKAN)
- Per le ricerche "asili nido", "asilo nido", "nidi d'infanzia", "prima infanzia", "scuola/e dell'infanzia", "sezioni primavera" e "micronido" ci sono **304 dataset unici** [fatto]:
  - 147 regionali;
  - 149 locali;
  - 5 GeoDati-RNDT (locali);
  - 3 "nazionali", di cui 2 INPS 2004-2011 aggregati e 1 falso positivo.
- **Nessun dataset nazionale nominativo**; nessun dataset MIM o ISTAT sui nidi raccolto nel catalogo [fatto]. L'anagrafe MIM sta sul portale del MIM ([[MIM - Anagrafe scuole statali e paritarie]]).
- I più numerosi vengono da Regione Toscana (47 su "asili nido"), Regione Puglia (19) e Comune di Milano (72 su "scuola dell'infanzia") [fatto].
- Per "PNRR progetti" ci sono 7.916 dataset, quasi tutti locali [fatto, coordinatore].

## Uso nel progetto
Punto di partenza per le note in `Regioni/`: censire i dataset regionali e comunali uno per uno (aggiornamento, campi, licenza) e confrontarne il numero di strutture con i conteggi ISTAT per comune.

## Fonti (accesso 2026-11-20)
- https://www.dati.gov.it/opendata/api/3/action/package_search?q=%22asili%20nido%22&rows=1000
- https://www.dati.gov.it/opendata/api/3/action/package_search?q=PNRR%20progetti
- Dettaglio: [[Fonti ISTAT INPS Openpolis famiglia - subagente]] (E27, E28)
