require('dotenv').config();
const express = require('express');

const cors = require('cors');
const controllers = require('./controllers');
const fs = require('fs');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

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

app.get('/', controllers.posts);

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
