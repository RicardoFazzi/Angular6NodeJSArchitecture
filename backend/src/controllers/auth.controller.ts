import {Request, Response} from 'express';
import * as jwt from 'jsonwebtoken'

export default class AuthController {

  async login(req: Request, res: Response) {
    const body = req.body;

    if (body.username !== 'pablo') {
      return res.sendStatus(401);
    }

    let token = jwt.sign({userID: 1}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
    res.send({token});
  }
}
