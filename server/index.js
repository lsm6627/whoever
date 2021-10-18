require('dotenv').config();
const express = require('express');

const cors = require('cors');
const controllers = require('./controllers');
const fs = require('fs');
const cookieParser = require('cookie-parser');

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = con;
