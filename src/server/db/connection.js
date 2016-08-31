const options = {}; // add options here
const pgp = require('pg-promise')(options);

// Database connection details;
const cn = {
  host: 'localhost', // 'localhost' is the default;
  port: 5432, // 5432 is the default;
  database: 'beers'
};

const db = pgp(cn); // database instance;

module.exports = db;
