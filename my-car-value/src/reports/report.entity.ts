import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// make, model, year, mileage, longitude, latitude

@Entity()
class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  constructor(id: number, price: number) {
    this.id = id;
    this.price = price;
  }
}

export { Report };
