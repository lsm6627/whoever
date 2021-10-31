require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const controllers = require('./controllers');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

const app = express();
const PORT = 80;

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
app.get('/logout', controllers.logout.get);
app.post('/signup', controllers.signup.post);

// posts 요청
app.get('/main', controllers.getMainPosts.get);
app.post('/listpage', controllers.getListPagePosts.post);
app.post('/myposts', controllers.getMyPosts.post);
app.post('/onepost', controllers.getOnePost.post);
app.post('/searchpage', controllers.postSearchPosts.post);
app.post('/searchmypost', controllers.postSearchMyPosts.post);
app.put('/changepost', controllers.changepost.update);
app.delete('/deletepost', controllers.deletepost.delete);
app.post('/uploadpost', controllers.uploadpost.post);
app.put('/suggestionsup', controllers.suggestionUp.update);
app.put('/suggestionsdown', controllers.suggestionDown.update);
app.post('/profile', upload.single('image'), controllers.uploadProfile.post);
app.use('/', express.static('uploads'));

// comments 요청
app.post('/getcomments', controllers.getComments.post);
app.put('/changecomment', controllers.changecomment.update);
app.post('/deletecomment', controllers.deletecomment.post);
app.post('/uploadcomment', controllers.uploadcomment.post);

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
