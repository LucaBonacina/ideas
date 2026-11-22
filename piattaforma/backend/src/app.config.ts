import { IsNotEmpty, IsOptional } from 'class-validator';

export class AppConfig {
  @IsNotEmpty()
    MONGO_URI!: string;

  @IsOptional()
    PORT?: string;

  @IsOptional()
    DATA_DIR?: string;

  @IsOptional()
    HTTP_USER_AGENT?: string;
}
