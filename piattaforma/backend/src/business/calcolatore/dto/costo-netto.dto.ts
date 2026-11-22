import { Type } from 'class-transformer';
import {
  IsBoolean, IsDate, IsInt, IsNumber, IsOptional, IsString, Max, MaxDate, Min, MinDate, ValidateIf,
} from 'class-validator';

export class CostoNettoDto {
  @Type(() => Date) @IsDate() @MinDate(new Date('2019-01-01')) @MaxDate(() => new Date())
    dataNascita!: Date;

  /** Retta mensile rimborsabile (retta più pasti), al netto di contributi comunali */
  @IsNumber() @Min(0) @Max(5000)
    rettaMensile!: number;

  @IsOptional() @IsInt() @Min(1) @Max(11)
    mesi?: number;

  /** ISEE neutralizzato dall'Assegno unico; null se assente */
  @ValidateIf((_o, v) => v !== null) @IsNumber() @Min(0)
    iseeNeutralizzato!: number | null;

  /** ISEE minorenni o per specifiche prestazioni familiari; se omesso si usa iseeNeutralizzato */
  @IsOptional() @ValidateIf((_o, v) => v !== null) @IsNumber() @Min(0)
    iseeMisureRegionali?: number | null;

  /** Id o chiave di una struttura: ne ricava regione, tipologia e gestione */
  @IsOptional() @IsString()
    struttura?: string;

  @ValidateIf((o: CostoNettoDto) => !o.struttura) @IsString()
    regione?: string;

  @ValidateIf((o: CostoNettoDto) => !o.struttura) @IsString()
    tipologia?: string;

  @IsOptional() @ValidateIf((_o, v) => v !== null) @IsBoolean()
    pubblicaOConvenzionata?: boolean | null;

  @IsOptional() @ValidateIf((_o, v) => v !== null) @IsBoolean()
    comuneAderenteNidiGratisPlus?: boolean | null;

  @IsOptional() @ValidateIf((_o, v) => v !== null) @IsBoolean()
    genitoreOccupatoODid?: boolean | null;
}
