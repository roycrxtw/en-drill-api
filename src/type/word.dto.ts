export class WordCreateDto {
  word: string;

  type: string;

  definition: string;

  definitionSource: string;

  seeAlso: string;

  examples: {
    example: string;
    source: string;
  };
}
