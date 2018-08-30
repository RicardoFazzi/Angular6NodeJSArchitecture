import * as express from 'express';
import {UsersRouter} from './routes/users.route';
import {createConnection, Connection} from 'typeorm';
import {UserEntity} from './entities/user';

/**
 * Create Express server.
 */
const app = express();

let connection = createConnection({
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'architecture',
  entities: [
    UserEntity
  ],
}).then(() => {
  /**
   * Primary app routes.
   */
  app.use('/users', UsersRouter);
});


/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log(('  App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
