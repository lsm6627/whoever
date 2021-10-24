import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import {
  Headerdiv,
  Menu_icon,
  Logo,
  Loginbutton,
  Header_button_container
} from './Header.style';
import { Stylelink } from './Sidebar.style';

const Header = ({ isLogin, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarOpenHandler = () => {
    setIsOpen(!isOpen);
  };

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
          <Loginbutton>Logout</Loginbutton>
        ) : (
          <Loginbutton>Login</Loginbutton>
        )}
      </Header_button_container>
    </Headerdiv>
  );
};

export default Header;
