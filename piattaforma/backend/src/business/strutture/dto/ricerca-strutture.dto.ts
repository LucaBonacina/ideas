import { Type } from 'class-transformer';
import {
  IsEnum, IsIn, IsInt, IsLatitude, IsLongitude, IsNumber, IsOptional, IsString, Length, Max, Min, ValidateIf,
} from 'class-validator';
import { Tipologia } from '../../../domain/tipologia.enum';

export class RicercaStruttureDto {
  /** Codice ISTAT del comune (6 cifre) */
  @IsOptional() @IsString() @Length(6, 6)
    comune?: string;

  @IsOptional() @IsString() @Length(2, 2)
    provincia?: string;

  @IsOptional() @IsEnum(Tipologia)
    tipologia?: Tipologia;

  @IsOptional() @IsIn(['0-3', '3-6'])
    fascia?: '0-3' | '3-6';

  /** Testo libero sul nome della struttura */
  @IsOptional() @IsString() @Length(2, 80)
    q?: string;

  @ValidateIf((o: RicercaStruttureDto) => o.lng !== undefined)
  @Type(() => Number) @IsLatitude()
    lat?: number;

  @ValidateIf((o: RicercaStruttureDto) => o.lat !== undefined)
  @Type(() => Number) @IsLongitude()
    lng?: number;

  @IsOptional() @Type(() => Number) @IsNumber() @Min(0.1) @Max(50)
    raggioKm?: number;

  @IsOptional() @Type(() => Number) @IsInt() @Min(1)
    pagina?: number;

  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100)
    perPagina?: number;
}
