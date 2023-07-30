import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Word } from './entity/word';

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(Word)
    private readonly wordModel: Repository<Word>,
  ) {}

  async listWords(): Promise<object> {
    const list = await this.wordModel.find({
      relations: {
        examples: true,
      },
    });
    console.log('[listWords] list', list);
    return list;
  }

  async searchWords(keyword: string): Promise<object> {
    const list = await this.wordModel.find({
      where: {
        word: keyword,
      },
      loadRelationIds: true,
    });
    console.log('[listWords] list', list);
    return list;
  }

  async createWord(word): Promise<object> {
    console.log('[createWord], newWord:', word);
    const ret = await this.wordModel.save(word);
    console.log('[createWord] ret', ret);
    return ret;
  }
}
