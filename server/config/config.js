const dotenv = require('dotenv');
dotenv.config();

const config = {
  production: {
    host: 'localhost',
    username: 'admin',
    password: process.env.DATABASE_PASSWORD,
    database: 'whoever',
    port: 80,
    dialect: 'mysql'
  }
};

module.exports = config;
