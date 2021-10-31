const dotenv = require('dotenv');
dotenv.config();

const config = {
  development: {
    host: 'localhost',
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'whoever_test',
    dialect: 'mysql'
  },
  production: {
    host: 'localhost',
    username: 'admin',
    password: process.env.DATABASE_PASSWORD,
    database: 'whoever',
    dialect: 'mysql'
  }
};

module.exports = config;
