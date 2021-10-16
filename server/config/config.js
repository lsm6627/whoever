require('dotenv').config();

const config = {
  development: {
    host: 'localhost',
    user: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'whoever_test',
    dialect: 'mysql'
  },
  production: {
    host: 'localhost',
    user: 'admin',
    password: process.env.DATABASE_PASSWORD,
    database: 'whoever',
    dialect: 'mysql'
  }
};

module.exports = config;
