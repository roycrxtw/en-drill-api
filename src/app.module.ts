import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Word } from './entity/word';
import { Example } from './entity/example';
import { WordModule } from './word.module';

console.log(process.env); // remove this after you've confirmed it is working

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

@Module({
  imports: [
    WordModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: parseInt(DB_PORT, 10),
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [Word, Example],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
