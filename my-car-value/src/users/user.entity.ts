// These decorators help TypeORM understand all the
// different columns in our entity.
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// By convention, we leave off the type of the class
// for the Entity.
@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor(id: number, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}

export { User };
