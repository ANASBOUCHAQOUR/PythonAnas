const knex = require('knex');
const config = require('../config/knexfile.js');

const db = knex(config.development);

module.exports = db;