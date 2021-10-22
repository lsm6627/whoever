import React from 'react';
import { useState } from "react";
import Sidebar from "./Sidebar"
import {
  Headerdiv,
  Menu_icon,
  Logo,
  Loginbutton,
  Header_button_container
} from './Header.style';



const Header = ({ isLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarOpenHandler = (e) => {
    setIsOpen(!isOpen);
  };
  
  return (
    <Headerdiv>
      <Menu_icon className="fas fa-bars" onClick={() => sideBarOpenHandler()}/>
      {isOpen ? <Sidebar /> : null}
      <Logo>Whoever</Logo>
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
