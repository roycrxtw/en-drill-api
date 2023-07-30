import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { WordService } from './word.service';
import { WordCreateDto } from './type/word.dto';
import { ApiKeyAuthGuard } from './guard/api-key-auth.guard';
import { IGeneralResponse } from './type/common.type';

@Controller('/words')
@UseGuards(ApiKeyAuthGuard)
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get()
  async listWords(): Promise<object> {
    const list = await this.wordService.listWords();
    return list;
  }

  @Get('/random')
  async randomWord(): Promise<IGeneralResponse> {
    const sampleWord = await this.wordService.randomWord();
    const ret: IGeneralResponse = {
      ok: true,
      payload: {
        sampleWord,
      },
    };
    return ret;
  }

  @Post()
  async createWord(@Body() newWord: WordCreateDto): Promise<object> {
    const ret = await this.wordService.createWord(newWord);
    console.log('[createWord] ret', ret);
    return ret;
  }
}
