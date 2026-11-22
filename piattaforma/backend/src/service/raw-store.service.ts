import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { mkdir, readFile, writeFile, readdir } from 'fs/promises';
import { join } from 'path';

/**
 * Archivio dei file grezzi (regola "RAW-first" del template): ogni download si salva così com'è,
 * il parsing lavora solo sui file salvati e si può ripetere senza riscaricare.
 */
@Injectable()
export class RawStoreService {
  private readonly radice: string;

  constructor(config: ConfigService) {
    this.radice = join(config.get<string>('DATA_DIR') || join(process.cwd(), 'data'), 'raw');
  }

  async salva(fonte: string, nomeFile: string, contenuto: Buffer, data = new Date()): Promise<string> {
    const cartella = join(this.radice, fonte, data.toISOString().slice(0, 10));
    await mkdir(cartella, { recursive: true });
    const percorso = join(cartella, nomeFile);
    await writeFile(percorso, contenuto);
    return percorso;
  }

  /** Percorso del file nell'ultimo download disponibile per la fonte, se esiste. */
  async ultimo(fonte: string, nomeFile: string): Promise<{ percorso: string; data: Date } | undefined> {
    const cartella = join(this.radice, fonte);
    const giorni = await readdir(cartella).catch(() => [] as string[]);
    const ordinati = giorni.filter((g) => /^\d{4}-\d{2}-\d{2}$/.test(g)).sort().reverse();
    for (const giorno of ordinati) {
      const percorso = join(cartella, giorno, nomeFile);
      const ok = await readFile(percorso).then(() => true).catch(() => false);
      if (ok) return { percorso, data: new Date(`${giorno}T00:00:00Z`) };
    }
    return undefined;
  }

  async leggi(percorso: string): Promise<Buffer> {
    return readFile(percorso);
  }
}
