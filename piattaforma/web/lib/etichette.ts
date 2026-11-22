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
  PRIVATA_PARITARIA: 'Privata paritaria',
  PARITARIA: 'Paritaria (comunale o privata)',
  PRIVATA: 'Privata',
  SCONOSCIUTA: 'Gestione non indicata dalla fonte',
};

export const FONTI: Record<string, { nome: string; descrizione: string }> = {
  'mim-anagrafe': {
    nome: "Ministero dell'Istruzione e del Merito, anagrafe delle scuole",
    descrizione: "Elenco ufficiale delle scuole dell'infanzia statali e paritarie, a.s. 2026/27.",
  },
  'lombardia-udos': {
    nome: 'Regione Lombardia, unità d\'offerta sociali per la prima infanzia',
    descrizione: 'Registro regionale di nidi, micronidi, nidi famiglia e centri prima infanzia in esercizio.',
  },
  'mim-scuola-in-chiaro': {
    nome: 'Scuola in Chiaro (MIM)',
    descrizione: 'Coordinate geografiche delle scuole.',
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
