import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordService } from './word.service';
import { WordController } from './word.controller';
import { Word } from './entity/word';

@Module({
  imports: [TypeOrmModule.forFeature([Word])],
  providers: [WordService],
  controllers: [WordController],
})
export class WordModule {}
