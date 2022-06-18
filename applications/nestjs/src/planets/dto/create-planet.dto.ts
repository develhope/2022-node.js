import { IsNotEmpty, IsOptional, IsInt, IsString } from 'class-validator';

export class CreatePlanetDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsInt()
  diameter: number;

  @IsNotEmpty()
  @IsInt()
  moons: number;

  @IsOptional()
  @IsString()
  photoFilename?: string;
}
