import * as express from 'express';
import {default as AuthController} from './../controllers/auth.controller';

export let AuthRouter = express.Router();
const authController = new AuthController();

AuthRouter.post('/', authController.login);


