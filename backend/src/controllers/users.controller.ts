import {Request, Response} from 'express';
import * as bcrypt from 'bcrypt';
import UsersService from '../services/users.service';
import {UserEntity} from '../entities/user';

const userService = new UsersService();

export default class UsersController {

  getUsers(req: Request, res: Response) {
    userService.findAll().then((user) => {
      res.send(user);
    });
  }

  async createUser(req: Request, res: Response) {
    const user = new UserEntity();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.username;
    bcrypt.hash(req.body.password, 10)
      .then((hash) => {
        user.password = hash;
        userService.createUser(user).then((response: any) => {
          console.log(response);
          res.send(response);
        });
      });
  }
}
