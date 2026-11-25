import { ELENCHI_SEZIONI_PRIMAVERA } from '../business/import/sezioni-primavera/fonti';

export interface DescrizioneFonte {
  nome: string;
  descrizione: string;
}

/** Nome e descrizione leggibili delle fonti delle strutture (codice = provenienza.fonte). */
const CATALOGO: Record<string, DescrizioneFonte> = {

  'mim-anagrafe': {
    nome: "Ministero dell'Istruzione e del Merito, anagrafe delle scuole",
    descrizione: "Elenco ufficiale delle scuole dell'infanzia statali e paritarie, a.s. 2026/27, con bambini iscritti per età e per orario (a.s. 2024/25).",
  },
  'lombardia-udos': {
    nome: 'Regione Lombardia, unità d\'offerta sociali per la prima infanzia',
    descrizione: 'Registro regionale di nidi, micronidi, nidi famiglia e centri prima infanzia in esercizio.',
  },
  'fvg-registro-prima-infanzia': {
    nome: 'Regione Friuli-Venezia Giulia, registro dei servizi per la prima infanzia',
    descrizione: 'Servizi 0-3 attivi, aggiornato ogni mese: età accolte, accreditamento, adesione all\'abbattimento rette. Senza indirizzi.',
  },
  'piemonte-anagrafe-prima-infanzia': {
    nome: 'Regione Piemonte, anagrafe dei servizi per la prima infanzia',
    descrizione: 'Nidi, micronidi, sezioni primavera, spazi gioco e nidi in famiglia autorizzati, dati al 31/12/2025.',
  },
  'lazio-servizi-educativi-accreditati': {
    nome: 'Regione Lazio, elenco dei servizi educativi accreditati',
    descrizione: 'Nidi, micronidi, spazi gioco e sezioni primavera accreditati, con posti; dati provvisori del 16/11/2026.',
  },
  'roma-capitale-elenco-servizi-0-3': {
    nome: 'Roma Capitale, elenco dei servizi 0-3 per le iscrizioni 2026/27',
    descrizione: 'Nidi capitolini e convenzionati, sezioni ponte e spazi gioco, municipio per municipio.',
  },
  'toscana-nidi-gratis': {
    nome: 'Regione Toscana, servizi aderenti a Nidi gratis 2026/27',
    descrizione: "Elenco dei servizi 0-3 pubblici e privati aderenti alla misura, decreto dell'ottobre 2026.",
  },
  'puglia-catalogo-zerosei': {
    nome: 'Regione Puglia, catalogo telematico zerosei 2026/27',
    descrizione: 'Servizi 0-3 privati abilitati ai buoni educativi regionali.',
  },
  'puglia-registro-strutture': {
    nome: 'Regione Puglia, registro delle strutture e dei servizi',
    descrizione: 'Registro regionale delle strutture autorizzate (CC-BY 4.0), fermo al 2023: alcune strutture potrebbero aver chiuso.',
  },
  'campania-elenco-nidi-micronidi': {
    nome: 'Regione Campania, elenco di nidi e micronidi',
    descrizione: 'Elenco regionale del marzo 2024.',
  },
  'napoli-nidi-privati-autorizzati': {
    nome: 'Comune di Napoli, nidi privati autorizzati',
    descrizione: 'Elenco comunale aggiornato a novembre 2026.',
  },
  'trento-elenco-nidi-infanzia': {
    nome: "Provincia di Trento, elenco dei nidi d'infanzia",
    descrizione: "Nidi d'infanzia al 1° settembre 2025.",
  },
  'trento-nidi-familiari-tagesmutter': {
    nome: 'Provincia di Trento, nidi familiari (Tagesmutter)',
    descrizione: 'Numero di servizi domiciliari per comune al 1° settembre 2026.',
  },
  'vda-autorizzazioni-nidi': {
    nome: "Regione Valle d'Aosta, autorizzazioni dei servizi per la prima infanzia",
    descrizione: "Elenco regionale dell'agosto 2026.",
  },
  'veneto-servizi-finanziati-ddr': {
    nome: 'Regione Veneto, servizi 0-3 finanziati',
    descrizione: 'Allegati del decreto regionale di riparto.',
  },
  'veneto-nidi-in-famiglia': {
    nome: 'Regione Veneto, nidi in famiglia',
    descrizione: 'Elenco regionale dei nidi in famiglia.',
  },
  'bologna-elenco-scuole': {
    nome: 'Comune di Bologna, elenco delle scuole (open data)',
    descrizione: 'Nidi comunali, convenzionati e privati, a.e. 2026/27.',
  },
  'ferrara-nidi-spazi-bambini': {
    nome: 'Comune di Ferrara, nidi e spazi bambini (open data)',
    descrizione: 'Dati del 2021.',
  },
  'reggio-emilia-servizi-prima-infanzia': {
    nome: 'Reggio Emilia, iscritti ai servizi 0-3 (open data)',
    descrizione: 'Servizi della provincia con iscritti, a.e. 2024/25.',
  },
  'genova-scuole': {
    nome: 'Comune di Genova, scuole e servizi educativi (open data)',
    descrizione: 'Nidi, sezioni primavera e spazi gioco, dicembre 2024.',
  },
  'mim-scuola-in-chiaro': {
    nome: 'Scuola in Chiaro (MIM)',
    descrizione: 'Coordinate e telefono delle scuole; 66 scuole dell\'infanzia non ancora presenti nell\'anagrafe open data.',
  },
  'emilia-romagna-servizi-autorizzati': {
    nome: 'Regione Emilia-Romagna, servizi educativi autorizzati al funzionamento',
    descrizione: 'Elenchi regionali dei servizi 0-3 pubblici e privati autorizzati (L.R. 19/2016, sistema SPiER), febbraio 2026.',
  },
  'sicilia-albo-lr22-86-minori': {
    nome: 'Regione Siciliana, albo degli enti socio-assistenziali (sezione Minori)',
    descrizione: 'Asili nido, micronidi, spazi gioco e centri per bambini e famiglie iscritti all\'albo L.R. 22/1986, settembre 2026.',
  },
  'liguria-albo-servizi-prima-infanzia': {
    nome: 'Regione Liguria, albo dei servizi socioeducativi per la prima infanzia',
    descrizione: 'Nidi pubblici verificati, nidi privati accreditati e servizi domiciliari, aggiornato al 30/04/2026.',
  },
  'bolzano-microstrutture-prima-infanzia': {
    nome: 'Provincia di Bolzano, elenco delle microstrutture per la prima infanzia',
    descrizione: 'Microstrutture comunali (Kita) e aziendali con indirizzo ed ente gestore, settembre 2026.',
  },
  'siti-comunali': {
    nome: 'Siti istituzionali dei comuni',
    descrizione: 'Strutture nominate nelle pagine dei siti comunali (schede dei luoghi, elenchi, avvisi), ciascuna con il link '
      + 'alla pagina da cui viene. Raccolte nel novembre 2026 nei comuni non coperti dai registri regionali.',
  },
};

/** Le sezioni primavera vengono dai decreti degli Uffici scolastici regionali: nome e atto dal loro elenco. */
for (const e of ELENCHI_SEZIONI_PRIMAVERA) {
  CATALOGO[e.fonte] = {
    nome: `Sezioni primavera ammesse al finanziamento, ${e.regione}`,
    descrizione: e.atto,
  };
}

export function descrizioneFonte(codice: string): DescrizioneFonte {
  return CATALOGO[codice] ?? { nome: codice, descrizione: '' };
}

/** Fonti che non producono schede ma vanno citate: conteggi, coordinate, siti dei comuni, mappa. */
export interface FonteAusiliaria extends DescrizioneFonte {
  url: string;
  licenza: string;
  uso: string;
}

export const FONTI_AUSILIARIE: FonteAusiliaria[] = [
  {
    nome: 'ISTAT, servizi educativi per la prima infanzia',
    descrizione: 'Numero di servizi 0-3 per comune e tipologia (dati 2024).',
    url: 'https://esploradati.istat.it/',
    licenza: 'CC BY 4.0',
    uso: 'Misura della completezza, comune per comune.',
  },
  {
    nome: 'ISTAT, elenco dei comuni italiani',
    descrizione: 'Codici e denominazioni dei comuni, province e regioni.',
    url: 'https://www.istat.it/classificazione/codici-dei-comuni-delle-province-e-delle-regioni/',
    licenza: 'CC BY 4.0',
    uso: 'Riconoscimento dei comuni nelle fonti.',
  },
  {
    nome: 'Indice dei domicili digitali della PA (IPA)',
    descrizione: 'Siti istituzionali dei comuni.',
    url: 'https://indicepa.gov.it/',
    licenza: 'CC BY 4.0',
    uso: 'Indirizzi dei siti comunali consultati.',
  },
  {
    nome: 'ANNCSU, Archivio nazionale dei numeri civici delle strade urbane (Agenzia delle Entrate - ISTAT)',
    descrizione: 'Numeri civici con coordinate, aggiornamento del 02/11/2026, integrati da stradari regionali e comunali.',
    url: 'https://www.anncsu.gov.it/',
    licenza: 'open data (serie di dati di elevato valore, Reg. UE 2023/138)',
    uso: 'Coordinate delle strutture che ne erano prive (geocodifica dall\'indirizzo).',
  },
  {
    nome: 'OpenStreetMap',
    descrizione: '© OpenStreetMap contributors.',
    url: 'https://www.openstreetmap.org/copyright',
    licenza: 'ODbL 1.0',
    uso: 'Sfondo della mappa e coordinate di alcuni civici assenti in ANNCSU.',
  },
];
