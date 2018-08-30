import {UserEntity} from '../entities/user';
import {getMongoManager} from 'typeorm';

export default class UsersService {

  findAll(): Promise<Array<UserEntity>> {
    //return this.repository.find();
    return getMongoManager().getRepository(UserEntity).find();
  }

  /*findBy(params: any): Promise<Array<UserEntity>>  {
    //return this.repository.find(params);
  }*/
}