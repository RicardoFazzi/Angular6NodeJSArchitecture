import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("user")
export class UserEntity {

  @PrimaryGeneratedColumn()
  userId: number;

  @Column({
    length: 100
  })
  firstName: string;

  @Column({
    length: 100
  })
  lastName: string;

  @Column({
    length: 100
  })
  email: string;
}