import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  ArrayNotEmpty,
} from 'class-validator';
import { ExampleDto } from './example.dto';
import { Type } from 'class-transformer';

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

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ExampleDto)
  examples: ExampleDto[];
}
