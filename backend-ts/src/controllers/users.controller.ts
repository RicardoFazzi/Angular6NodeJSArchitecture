import { Request, Response } from "express";
import { getMongoManager , getManager} from 'typeorm';
import { UserEntity } from '../entities/user';

export default class UsersController {
  getUsers(req: Request, res: Response) {
    getMongoManager().getRepository(UserEntity).find().then((user) => {
      res.send(user);
    });
  }

  async createUser(req: Request, res: Response) {
    let user = new UserEntity();
    user.firstName = 'pablo';
    user.lastName = 'Herrera';
    user.email = 'mail@hotmail.com';
    getManager().getRepository(UserEntity).save(user).then(response: any => {
      console.log(response);
      res.send(response);
    })
  }
}
