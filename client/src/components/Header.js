import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import {
  Headerdiv,
  Menu_icon,
  Logo,
  Header_button_container,
  TitleDiv,
  LoginModalContainer,
  LoginModalBtn,
  LoginBtn,
  LoginModalBackdrop,
  LoginModalView,
  Id_Input,
  Pw_Input,
  Id_text,
  Pw_text,
  ModalInsideContainer,
  CloseBtn
} from './Header.style';
import { Stylelink } from './Sidebar.style';
import axios from 'axios';
import SignUp from './SignUp';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const handleChange = (e) => {
    if (e.target.type === 'password') {
      setPassword(e.target.value);
    }
    if (e.target.type === 'text') {
      setUserId(e.target.value);
    }
  };

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
        `${process.env.REACT_APP_API_URL}/login`,
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
      .get(`${process.env.REACT_APP_API_URL}/logout`, {
        withCredentials: true
      })
      .then((res) => {
        setUserInfo({});
        setIsLogin(false);
        alert('로그아웃 완료');
        history.push({ pathname: '/' });
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
          openModalHandler={openModalHandler}
        />
      ) : null}
      <Stylelink to={'/'}>
        <Logo>Whoever</Logo>
      </Stylelink>

      <Header_button_container>
        <LoginModalContainer>
          {isLogin ? (
            <LoginModalBtn onClick={logoutHandler}>Logout</LoginModalBtn>
          ) : (
            <LoginModalBtn onClick={openModalHandler}>Login</LoginModalBtn>
          )}
          {isOpen === true ? (
            <LoginModalBackdrop onClick={openModalHandler}>
              <LoginModalView onClick={(e) => e.stopPropagation()}>
                <CloseBtn
                  className="fas fa-times-circle"
                  onClick={openModalHandler}
                ></CloseBtn>
                <ModalInsideContainer>
                  <TitleDiv>WHOEVER login</TitleDiv>
                  <Id_text>Whoever ID</Id_text>
                  <Id_Input onChange={handleChange} />
                  <Pw_text>Password</Pw_text>
                  <Pw_Input onChange={handleChange} />
                  <LoginBtn onClick={() => loginBtnHandler()}>Login</LoginBtn>
                  <SignUp />
                </ModalInsideContainer>
              </LoginModalView>
            </LoginModalBackdrop>
          ) : null}
        </LoginModalContainer>
      </Header_button_container>
    </Headerdiv>
  );
};

export default Header;
