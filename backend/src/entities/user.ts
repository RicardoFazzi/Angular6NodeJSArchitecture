import {Column, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity('user')
export class UserEntity {

  @ObjectIdColumn()
  _id: ObjectID;

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

  @Column({
    length: 100
  })
  password: string;
}
