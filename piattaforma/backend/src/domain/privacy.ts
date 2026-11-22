/**
 * Regole per non ripubblicare dati personali (vedi wiki: Catalogo delle fonti, avvertenze).
 * Le fonti pubbliche contengono a volte recapiti e nomi di persone fisiche: vanno scartati all'import.
 */
const DOMINI_PERSONALI = new Set([
  'gmail.com', 'googlemail.com', 'libero.it', 'hotmail.com', 'hotmail.it', 'yahoo.com', 'yahoo.it',
  'outlook.com', 'outlook.it', 'live.com', 'live.it', 'msn.com', 'icloud.com', 'me.com', 'alice.it',
  'tin.it', 'virgilio.it', 'tiscali.it', 'fastwebnet.it', 'email.it', 'inwind.it', 'katamail.com',
  'gmx.com', 'gmx.it', 'protonmail.com', 'proton.me',
]);

const VALORI_ASSENTI = new Set(['', 'non disponibile', 'n.d.', 'nd', '-', '0']);

export function pulisci(valore: string | undefined | null): string | undefined {
  const v = (valore ?? '').trim();
  return VALORI_ASSENTI.has(v.toLowerCase()) ? undefined : v;
}

/** Email istituzionale o di un ente: scarta caselle su domini di posta personale. */
export function emailPubblicabile(valore: string | undefined | null): string | undefined {
  const email = pulisci(valore)?.toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(email)) return undefined;
  const dominio = email.split('@')[1];
  return DOMINI_PERSONALI.has(dominio) ? undefined : email;
}

/** Codice fiscale di persona fisica (16 caratteri), diverso dal codice fiscale numerico di un ente. */
export function isCodiceFiscalePersona(valore: string | undefined | null): boolean {
  return /^[A-Z]{6}[0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{3}[A-Z]$/i.test((valore ?? '').trim());
}

/** Telefono fisso pubblicabile: scarta i cellulari (prefisso 3) e i numeri malformati. */
export function telefonoPubblicabile(valore: string | undefined | null): string | undefined {
  const cifre = (pulisci(valore) ?? '').replace(/[^0-9]/g, '').replace(/^0039/, '');
  if (cifre.length < 6 || cifre.length > 11) return undefined;
  return cifre.startsWith('0') ? cifre : undefined;
}

export function sitoPubblicabile(valore: string | undefined | null): string | undefined {
  const sito = pulisci(valore);
  if (!sito || sito.includes('@') || !sito.includes('.')) return undefined;
  return /^https?:\/\//i.test(sito) ? sito : `https://${sito.toLowerCase()}`;
}
