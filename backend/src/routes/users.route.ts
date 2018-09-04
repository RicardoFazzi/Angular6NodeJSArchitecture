import * as express from 'express';
import UsersController from './../controllers/users.controller';

export let UsersRouter = express.Router();
const usersController = new UsersController();

UsersRouter.get('/', usersController.getUsers);
UsersRouter.post('/register', usersController.createUser);



