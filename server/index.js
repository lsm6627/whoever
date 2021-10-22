require('dotenv').config();
const express = require('express');
const session = require('express-session');

const cors = require('cors');
const controllers = require('./controllers');
const cookieParser = require('cookie-parser'); // TODO: 언젠가 이걸 지울지 몰라.

const app = express();
const PORT = 3000;

app.use(
  session({
    secret: 'codegangster@',
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: 'localhost', // TODO: 이거 배포용으로 바꿔야 하지 않나?
      path: '/',
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: 'none',
      httpOnly: true,
      secure: true
    }
  })
);

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

// users 요청
app.post('/login', controllers.login);
app.post('/logout', controllers.logout);
app.post('/signup', controllers.signup);
app.get('/userinfo', controllers.userinfo);

// posts 요청
app.update('/changepost', controllers.changepost);
app.delete('/deletepost', controllers.deletepost);
app.get('/readpost', controllers.readpost);
app.post('/uploadpost', controllers.uploadpost);

// comments 요청
app.update('/changecomment', controllers.changecomment);
app.delete('/deletecomment', controllers.deletecomment);
app.get('/getcomments', controllers.getcomments);
app.post('/uploadcomment', controllers.uploadcomment);

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
