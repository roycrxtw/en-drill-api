import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Word } from './word';

@Entity()
export class Example {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  example: string;

  @Column()
  source: string;

  @ManyToOne(() => Word, (word) => word.examples)
  word: Word;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
