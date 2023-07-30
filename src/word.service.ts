import * as _ from 'lodash';
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

  async randomWord(): Promise<object> {
    const count = await this.wordModel.count();
    const offset = _.random(0, count - 1);
    const sampleWord = _.first(
      await this.wordModel.find({
        relations: {
          examples: true,
        },
        take: 1,
        skip: offset,
      }),
    );
    console.log('[randomWord] offset', offset);
    return sampleWord;
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
