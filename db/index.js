const knex = require('knex');
const knexfile = require('./knexfile');
const ENVIRONMENT = process.env.NODE_ENV;

const db = knex(knexfile[ENVIRONMENT]);

module.exports = db;
