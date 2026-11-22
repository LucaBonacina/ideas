export const NOME_SITO = process.env.NEXT_PUBLIC_NOME_SITO || 'Nido Vicino';

export const TIPOLOGIE: Record<string, string> = {
  NIDO: 'Asilo nido',
  MICRONIDO: 'Micronido',
  SEZIONE_PRIMAVERA: 'Sezione primavera',
  SPAZIO_GIOCO: 'Spazio gioco / servizio integrativo',
  CENTRO_BAMBINI_FAMIGLIE: 'Centro per bambini e famiglie',
  SERVIZIO_DOMICILIARE: 'Nido famiglia / servizio domiciliare',
  SCUOLA_INFANZIA: "Scuola dell'infanzia",
  POLO_INFANZIA: 'Polo per l\'infanzia 0-6',
};

export const GESTIONI: Record<string, string> = {
  STATALE: 'Statale',
  COMUNALE: 'Comunale',
  PUBBLICA_ALTRA: 'Altro ente pubblico',
  PUBBLICA: 'Pubblica',
  PRIVATA_PARITARIA: 'Privata paritaria',
  PARITARIA: 'Paritaria (comunale o privata)',
  PRIVATA: 'Privata',
  SCONOSCIUTA: 'Gestione non indicata dalla fonte',
};

export const FONTI: Record<string, { nome: string; descrizione: string }> = {
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
};

export function fasciaTesto(f: string): string {
  if (f === '0-3') return '0-3 anni';
  if (f === '3-6') return '3-6 anni';
  return '0-6 anni';
}

export function dataBreve(iso?: string): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function euro(n: number): string {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency', currency: 'EUR', useGrouping: 'always', maximumFractionDigits: n % 1 === 0 ? 0 : 2,
  } as unknown as Intl.NumberFormatOptions).format(n);
}

/** Etichette al plurale per i conteggi ("3 asili nido"). */
export const TIPOLOGIE_PLURALE: Record<string, [string, string]> = {
  NIDO: ['asilo nido', 'asili nido'],
  MICRONIDO: ['micronido', 'micronidi'],
  SEZIONE_PRIMAVERA: ['sezione primavera', 'sezioni primavera'],
  SPAZIO_GIOCO: ['spazio gioco o servizio integrativo', 'spazi gioco o servizi integrativi'],
  CENTRO_BAMBINI_FAMIGLIE: ['centro per bambini e famiglie', 'centri per bambini e famiglie'],
  SERVIZIO_DOMICILIARE: ['nido famiglia', 'nidi famiglia'],
  SCUOLA_INFANZIA: ["scuola dell'infanzia", "scuole dell'infanzia"],
  POLO_INFANZIA: ["polo per l'infanzia", "poli per l'infanzia"],
};

export function conteggio(n: number, tipologia: string): string {
  const [uno, molti] = TIPOLOGIE_PLURALE[tipologia] ?? [tipologia, tipologia];
  return `${n.toLocaleString('it-IT')} ${n === 1 ? uno : molti}`;
}

/** Tipologie del censimento ISTAT dei servizi 0-3. */
export const TIPI_ISTAT: Record<string, [string, string]> = {
  CDNUR: ['nido o micronido', 'nidi e micronidi'],
  DNISC: ['sezione primavera', 'sezioni primavera'],
  GUARD: ['spazio gioco', 'spazi gioco'],
  HNUR: ['servizio domiciliare', 'servizi domiciliari'],
  CCHP: ['centro bambini-genitori', 'centri bambini-genitori'],
};
