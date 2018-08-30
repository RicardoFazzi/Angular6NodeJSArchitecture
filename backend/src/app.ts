import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import {UsersRouter} from './routes/users.route';
import {createConnection} from 'typeorm';
import {UserEntity} from './entities/user';
import * as cors from 'cors';
import {AuthRouter} from './routes/auth.route';

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
  host: 'localhost',
  port: 27017,
  database: 'architecture',
  entities: [
    UserEntity
  ],
});

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/**
 * Primary app routes.
 */
app.use('/users', UsersRouter);
app.use('/login', AuthRouter);

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log(('  App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
