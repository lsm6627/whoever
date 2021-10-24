import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './pages/main';
import NewPost from './pages/newPost';
import OnePost from './pages/onePost';
import PostList from './pages/postList';
import Login from './components/Login';
import Footer from './components/Footer';
import { initialState } from './static/dummyData';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  // const [userInfo, setUserInfo] = useState({});
  const [posts, setPosts] = useState(initialState.posts);
  const [categories, setCategories] = useState(initialState.categories);

  // const handleChange = () => {

  // };

  // useEffect(() => {
  //   handleChange();
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isLogin={isLogin} categories={categories} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Main posts={posts} categories={categories} />}
          />
          <Route
            path="/postList=:no"
            render={(match) => (
              <PostList
                posts={posts}
                categories={categories}
                match={match.match}
              />
            )}
          />
          <Route
            path="/newPost/postList=:no"
            render={(match) => (
              <NewPost posts={posts} setPosts={setPosts} match={match.match} />
            )}
          />
          <Route
            path="/onePost=:no"
            render={(match) => <OnePost posts={posts} match={match.match} />}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
