import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import {createConnection} from 'typeorm';
import * as cors from 'cors';
import * as expressJwt from 'express-jwt';
import {AuthRouter} from './routes/auth.route';
import {UsersRouter} from './routes/users.route';
import {UserEntity} from './entities/user';

/**
 * Create Express server.
 */
const app = express();

/*const options:cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: API_URL,
  preflightContinue: false
};*/

createConnection({
  type: 'mongodb',
  url: 'mongodb://root:root_123456@ds245082.mlab.com:45082/architecture',
  port: 27017,
  entities: [
    UserEntity
  ],
}).then(() => {

  /**
   * Primary app routes.
   */
  app.use('/users', UsersRouter);
  app.use('/login', AuthRouter);
});

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(expressJwt({secret: 'todo-app-super-shared-secret'}).unless({path: ['/login', '/users/register']}));

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log(('  App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
