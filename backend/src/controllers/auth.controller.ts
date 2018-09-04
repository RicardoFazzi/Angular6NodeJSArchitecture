import {Request, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import {UserEntity} from '../../../entities/user';
import {getMongoManager} from 'typeorm';

export default class AuthController {

  async login(req: Request, res: Response) {

    const user = await getMongoManager().getRepository(UserEntity).findOne({email: req.body.username});

    if (!user) {
      res.sendStatus(401);
    }

    bcrypt.compare(req.body.password, user.password)
      .then((auth: boolean) => {
        if (!auth) {
          res.sendStatus(401);
        }
        const token = jwt.sign({user: user}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
        res.send({token});
      });
  }
}
