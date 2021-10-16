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
// TODO: 아래 형식으로 클라이언트 요청 받는 것 처리 하면 됨
// app.get('/auth', controllers.auth);
// app.post('/signup', controllers.signup);
// app.post('/signin', controllers.signin);
// app.post('/signout', controllers.signout);

module.exports = con;
