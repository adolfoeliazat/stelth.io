// Update with your config settings.

const dotenv = require('dotenv');
dotenv.load();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_URI,
      database: process.env.MYSQL_DEV_DB,
      user: process.env.MYSQL_MASTER_USER,
      password: process.env.MYSQL_MASTER_PASS
    },
    pool: {
      min: 1,
      max: 1
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
