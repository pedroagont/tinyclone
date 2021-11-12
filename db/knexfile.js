// Update with your config settings.
require('dotenv').config({ path: '../.env' });

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_HOST_DEV,
      database: process.env.DATABASE_NAME_DEV,
      user: process.env.DATABASE_USER_DEV,
      password: process.env.DATABASE_PASSWORD_DEV
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_HOST_DEV,
      database: process.env.DATABASE_NAME_DEV,
      user: process.env.DATABASE_USER_DEV,
      password: process.env.DATABASE_PASSWORD_DEV
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_HOST_CLOUD,
      database: process.env.DATABASE_NAME_CLOUD,
      user: process.env.DATABASE_USER_CLOUD,
      password: process.env.DATABASE_PASSWORD_CLOUD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
