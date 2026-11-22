import { Injectable } from '@nestjs/common';
import { calcolaCostoNetto, EsitoCostoNetto } from '../../domain/calcolo/costo-netto';
import { Gestione } from '../../domain/gestione.enum';
import { StruttureService } from '../strutture/strutture.service';
import { CostoNettoDto } from './dto/costo-netto.dto';

@Injectable()
export class CalcolatoreService {
  constructor(private readonly strutture: StruttureService) {}

  async costoNetto(dto: CostoNettoDto): Promise<EsitoCostoNetto & { struttura?: string }> {
    const s = dto.struttura ? await this.strutture.dettaglio(dto.struttura) : undefined;
    // Una struttura comunale o pubblica è "pubblica" per definizione; per le private il convenzionamento
    // non è noto dalle fonti, quindi resta da chiedere alla famiglia.
    const pubblica = s && [Gestione.COMUNALE, Gestione.PUBBLICA_ALTRA, Gestione.STATALE].includes(s.gestione)
      ? true : undefined;
    const esito = calcolaCostoNetto({
      dataNascita: dto.dataNascita,
      rettaMensile: dto.rettaMensile,
      mesi: dto.mesi ?? 11,
      iseeNeutralizzato: dto.iseeNeutralizzato,
      iseeMisureRegionali: dto.iseeMisureRegionali === undefined ? dto.iseeNeutralizzato : dto.iseeMisureRegionali,
      regione: s?.indirizzo.regione ?? dto.regione ?? '',
      tipologia: s?.tipologia ?? dto.tipologia ?? '',
      tipologiaOriginale: s?.tipologiaOriginale,
      pubblicaOConvenzionata: dto.pubblicaOConvenzionata ?? pubblica ?? null,
      comuneAderenteNidiGratisPlus: dto.comuneAderenteNidiGratisPlus ?? null,
      genitoreOccupatoODid: dto.genitoreOccupatoODid ?? null,
    });
    return s ? { ...esito, struttura: s.chiave } : esito;
  }
}
