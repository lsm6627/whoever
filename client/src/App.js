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
// import { initialState } from './static/dummyData';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  // const [userInfo, setUserInfo] = useState({});
  // const [posts, setPosts] = useState(initialState.posts);
  // const [categories, setCategories] = useState(initialState.categories);

  // const handleChange = () => {
  //   setPosts(initialState.posts);
  //   setCategories(initialState.categories);
  // };

  // useEffect(() => {
  //   handleChange();
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isLogin={isLogin} />
        <Switch>
          <Route exact path="/">
            <Main />
            {/* <Main posts={posts} categories={categories} /> */}
          </Route>
          <Route path="/newPost">
            <NewPost />
          </Route>
          <Route path="/onePost/:no" component={OnePost}>
            <OnePost />
          </Route>
          <Route path="/postList/:no" component={PostList}>
            <PostList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// 처음에 main를 띄운다.

// 띄울때 위에 header를 박아버리고 아래를 footer를 박아버린다.
