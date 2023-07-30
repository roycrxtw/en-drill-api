import { IsString } from 'class-validator';

export class ExampleDto {
  @IsString()
  example: string;

  @IsString()
  source: string;
}
