import { IsString, IsOptional } from 'class-validator';

export class WordCreateDto {
  @IsString()
  word: string;

  @IsString()
  type: string;

  @IsString()
  definition: string;

  @IsString()
  definitionSource: string;

  @IsOptional()
  seeAlso: string;

  examples: {
    example: string;
    source: string;
  };
}
