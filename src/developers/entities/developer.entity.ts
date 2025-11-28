import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
const { nanoid } = require('nanoid');

@Entity('developers')
export class Developer {
  @PrimaryGeneratedColumn('uuid')
  id: string; // dev_083sdewd987
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  dateOfBirth: string;

  @BeforeInsert()
  generateId() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.id = `dev_${nanoid()}`;
  }
}
