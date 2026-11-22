import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvHttpProxyAgent, fetch } from 'undici';
import log from '../log';

/**
 * Download educato dalle fonti pubbliche: client identificabile, una richiesta alla volta per host
 * con pausa minima, pochi tentativi con attesa crescente. Nessun aggiramento di protezioni:
 * se una fonte blocca, ci si ferma e si segnala (circuit breaker, GR-7).
 */
@Injectable()
export class HttpFetchService {
  private readonly userAgent: string;

  private readonly agente = new EnvHttpProxyAgent();

  private readonly ultimoAccesso = new Map<string, number>();

  private static readonly PAUSA_MS = 1500;

  private static readonly TENTATIVI = 3;

  constructor(config: ConfigService) {
    this.userAgent = config.get<string>('HTTP_USER_AGENT') || 'nidi-bot/0.1';
  }

  async scarica(url: string): Promise<Buffer> {
    const { host } = new URL(url);
    let ultimoErrore: unknown;
    for (let tentativo = 1; tentativo <= HttpFetchService.TENTATIVI; tentativo += 1) {
      await this.attendiTurno(host);
      try {
        const risposta = await fetch(url, {
          dispatcher: this.agente,
          headers: { 'user-agent': this.userAgent, accept: '*/*' },
        });
        if (risposta.status === 403 || risposta.status === 429) {
          throw new Error(`La fonte rifiuta l'accesso (HTTP ${risposta.status}): ci si ferma senza insistere`);
        }
        if (!risposta.ok) throw new Error(`HTTP ${risposta.status}`);
        return Buffer.from(await risposta.arrayBuffer());
      } catch (errore) {
        ultimoErrore = errore;
        const messaggio = errore instanceof Error ? errore.message : String(errore);
        log.warn('Download fallito', { url, tentativo, messaggio });
        if (messaggio.includes('rifiuta')) break;
        await new Promise((r) => { setTimeout(r, 2000 * tentativo); });
      }
    }
    const messaggio = ultimoErrore instanceof Error ? ultimoErrore.message : String(ultimoErrore);
    throw new Error(`Download non riuscito: ${url} (${messaggio})`);
  }

  private async attendiTurno(host: string): Promise<void> {
    const attesa = (this.ultimoAccesso.get(host) ?? 0) + HttpFetchService.PAUSA_MS - Date.now();
    if (attesa > 0) await new Promise((r) => { setTimeout(r, attesa); });
    this.ultimoAccesso.set(host, Date.now());
  }
}
