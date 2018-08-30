import {Entity, Column, PrimaryGeneratedColumn, ObjectID} from 'typeorm';

@Entity("user")
export class UserEntity {

  @PrimaryGeneratedColumn()
  userId: ObjectID;

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