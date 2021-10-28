import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import {
  Headerdiv,
  Menu_icon,
  Logo,
  Header_button_container
} from './Header.style';
import { Stylelink } from './Sidebar.style';
import axios from 'axios';
import Login from './Login';

const Header = ({
  isLogin,
  setIsLogin,
  userInfo,
  setUserInfo,
  categories,
  loginHandler
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const sideBarOpenHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const loginBtnHandler = () => {
    // axios로 사용 요청을 보낼때  db에 있는 정보에 맞춰서 버튼 실행하는 이벤트 핸들러
    axios
      .post(
        'http://localhost:4000/login',
        { userId: userId, password: password },
        { withCredentials: true }
      )
      .then((res) => {
        loginHandler(res.data);
        openModalHandler();
      })
      .catch((err) => {
        alert('ID와 Password를 확인해 주세요!');
      });
  };

  const logoutHandler = () => {
    axios
      .get('http://localhost:4000/logout', {
        withCredentials: true
      })
      .then((res) => {
        setUserInfo({});
        setIsLogin(false);
        alert('로그아웃 완료');
      });
  };

  return (
    <Headerdiv>
      <Menu_icon className="fas fa-bars" onClick={() => sideBarOpenHandler()} />
      {sidebarOpen ? (
        <Sidebar
          sidebarOpen={sidebarOpen}
          sideBarOpenHandler={sideBarOpenHandler}
          isLogin={isLogin}
          categories={categories}
          userInfo={userInfo}
          loginBtnHandler={loginBtnHandler}
          logoutHandler={logoutHandler}
        />
      ) : null}
      <Stylelink to={'/'}>
        <Logo>Whoever</Logo>
      </Stylelink>

      <Header_button_container>
        <Login
          isOpen={isOpen}
          openModalHandler={openModalHandler}
          setUserId={setUserId}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          logoutHandler={logoutHandler}
          loginHandler={loginHandler}
        />
      </Header_button_container>
    </Headerdiv>
  );
};

export default Header;
