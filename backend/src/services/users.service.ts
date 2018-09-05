import {getManager, getMongoManager} from 'typeorm';
import * as Promise from 'promise';
import {UserEntity} from '../entities/user';

export default class UsersService {

  findAll(): Promise<Array<UserEntity>> {
    return getMongoManager().getRepository(UserEntity).find();
  }

  findBy(params: any): Promise<Array<UserEntity>> {
    return getMongoManager().getRepository(UserEntity).find(params);
  }

  createUser(user: UserEntity): Promise<UserEntity> {
    return getManager().getRepository(UserEntity).save(user);
  }
}
