import * as express from 'express';
import {default as AuthController} from './../controllers/auth.controller';

export let AuthRouter = express.Router();
let authController = new AuthController();

AuthRouter.post('/', authController.login);


