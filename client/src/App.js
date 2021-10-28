import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './pages/main';
import NewPost from './pages/newPost';
import OnePost from './pages/onePost';
import PostList from './pages/postList';
import Mypost from './pages/mypost';
import Footer from './components/Footer';
import { initialState } from './static/dummyData';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [posts, setPosts] = useState(initialState.posts);
  const [categories, setCategories] = useState(initialState.categories);

  const issueTokens = (token) => {
    axios
      .get('http://localhost:4000/tokenRequest', {
        headers: { authorization: `Bearer ${token}` },
        withCredentials: true
      })
      .then((res) => {
        setUserInfo(res.data.data.userInfo);
        setIsLogin(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    issueTokens();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          categories={categories}
        />
        <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route
            path="/postList=:no"
            render={(match) => <PostList match={match.match} />}
          />
          <Route
            path="/newPost/postList=:no"
            render={(match) => (
              <NewPost posts={posts} setPosts={setPosts} match={match.match} />
            )}
          />
          <Route
            path="/onePost=:no"
            render={(match) => (
              <OnePost posts={posts} setPosts={setPosts} match={match.match} />
            )}
          />
          <Route
            path="/mypost"
            render={(match) => <Mypost posts={posts} match={match.match} />}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
