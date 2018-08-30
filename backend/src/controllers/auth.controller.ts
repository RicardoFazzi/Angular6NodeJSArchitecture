import {Request, Response} from 'express';

const jwt = require('jsonwebtoken');

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
