import {
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
} from './Login.style';

import SignUp from './SignUp';

const Login = ({
  setUserId,
  setPassword,
  openModalHandler,
  isLogin,
  loginBtnHandler,
  logoutHandler,
  isOpen
}) => {
  const handleChange = (e) => {
    if (e.target.type === 'password') {
      setPassword(e.target.value);
    }
    if (e.target.type === 'text') {
      setUserId(e.target.value);
    }
  };

  return (
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
  );
};

export default Login;
