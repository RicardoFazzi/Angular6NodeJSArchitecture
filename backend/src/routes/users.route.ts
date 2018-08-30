import * as express from 'express';
import UsersController from './../controllers/users.controller';

export let UsersRouter = express.Router();
let usersController = new UsersController();

UsersRouter.get('/', usersController.getUsers);
UsersRouter.post('/', usersController.createUser);


