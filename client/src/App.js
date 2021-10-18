import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Main from './pages/main';
import NewPost from './pages/newPost';
import OnePost from './pages/onePost';
import PostList from './pages/postList';
import Footer from './components/Footer';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isLogin={isLogin} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/newPost">
            <NewPost />
          </Route>
          <Route exact path="/onePost">
            <OnePost />
          </Route>
          <Route exact path="/postList/">
            <PostList />
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
