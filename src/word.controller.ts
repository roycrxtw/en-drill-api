import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { WordService } from './word.service';
import { WordCreateDto } from './type/word.dto';
import { ApiKeyAuthGuard } from './guard/api-key-auth.guard';

@Controller('/words')
@UseGuards(ApiKeyAuthGuard)
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get()
  async listWords(): Promise<object> {
    const list = await this.wordService.listWords();
    return list;
  }

  @Post()
  async createWord(@Body() newWord: WordCreateDto): Promise<object> {
    const ret = await this.wordService.createWord(newWord);
    console.log('[createWord] ret', ret);
    return ret;
  }
}
