import {getConnection, getMongoManager} from 'typeorm';
import {UserEntity} from '../entities/user';

export default class BaseService<T> {

  repository: any;

  constructor(T: any) {
    //this.repository = getMongoManager().getRepository(T);
  }

  findAll(): Promise<Array<UserEntity>> {
    //return this.repository.find();
    return getConnection().manager.find(UserEntity);
  }

  findBy(params: any): Promise<Array<T>>  {
    return this.repository.find(params);
  }
}