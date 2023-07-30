import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Word } from './entity/word';
import { WordService } from './word.service';
import { WordCreateDto } from './type/word.dto';

@Controller('/words')
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
