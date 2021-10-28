require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const controllers = require('./controllers');
const multer = require('multer');
const upload = multer({
  dest: 'uploads/'
});

const app = express();
const PORT = 4000;

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

//token
app.get('/tokenrequest', controllers.tokenRequest);

// users 요청
app.post('/login', controllers.login.post);
app.get('/logout', controllers.logout);
app.post('/signup', controllers.signup.post);

// posts 요청
app.get('/main', controllers.getMainPosts.get);
app.post('/listpage', controllers.getListPagePosts.post);
app.post('/myposts', controllers.getMyPosts.post);
app.post('/onepost', controllers.getOnePost.post);
app.get('/searchpage', controllers.getSearchPosts.get);
app.put('/changepost', controllers.changepost.update);
app.delete('/deletepost', controllers.deletepost.delete);
app.post('/uploadpost', controllers.uploadpost.post);
app.put('/suggestionsup', controllers.suggestionUp.update);
app.put('/suggestionsdown', controllers.suggestionDown.update);
app.post('/profile', upload.single('image'), controllers.uploadProfile.post);

// comments 요청
app.post('/getcomments', controllers.getComments.post);
// app.update('/changecomment', controllers.changecomment);
// app.delete('/deletecomment', controllers.deletecomment);
// app.post('/uploadcomment', controllers.uploadcomment);

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
