require('dotenv').config();
const express = require('express');

const cors = require('cors');
const controllers = require('./controllers');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
  })
);
app.use(cookieParser());
app.post('/posts', controllers.posts.post);

module.exports = con;
