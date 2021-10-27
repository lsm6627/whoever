import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import {
  Headerdiv,
  Menu_icon,
  Logo,
  Logoutbutton,
  Header_button_container
} from './Header.style';
import { Stylelink } from './Sidebar.style';
import axios from 'axios';

import Login from './Login'
const Header = ({ isLogin, setIsLogin, userInfo, setUserInfo, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const sideBarOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = () => {
    axios
    .post(`${process.env.REACT_APP_API_URL}/logout`, 
          {withCredentials: true})
    .then((res) => {
      setUserInfo({message: '로그아웃 되었습니다'});
      setIsOpen(false);
    })
  }

  return (
    <Headerdiv>
      <Menu_icon className="fas fa-bars" onClick={() => sideBarOpenHandler()} />
      {isOpen ? (
        <Sidebar
          isOpen={isOpen}
          sideBarOpenHandler={sideBarOpenHandler}
          isLogin={isLogin}
          categories={categories}
        />
      ) : null}
      <Stylelink to={'/'}>
        <Logo>Whoever</Logo>
      </Stylelink>
      <Header_button_container>
        {isLogin ? (
           <Login isLogin={isLogin} setIsLogin={setIsLogin} userInfo={userInfo} setUserInfo={setUserInfo}/>
        ) : (
          <Login/>
        )}
        </Header_button_container>
    </Headerdiv>
  );
};

export default Header;