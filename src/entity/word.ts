import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Example } from './example';

@Entity()
export class Word {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  word: string;

  @Column()
  type: string;

  @Column()
  definition: string;

  @Column()
  definitionSource: string;

  @Column({
    nullable: true,
  })
  seeAlso?: string;

  @OneToMany(() => Example, (example) => example.word, {
    cascade: true,
    eager: true,
  })
  examples: Example[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
