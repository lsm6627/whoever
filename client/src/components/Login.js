import { useState } from "react";
import {
    Title,
    Text,
    SignupQ,
    LoginModalContainer,
    LoginModalBtn,
    LoginBtn,
    SignUp,
    LoginModalBackdrop,
    LoginModalView,
    Id_Input,
    Pw_Input
  } from "./Login.style";
  


const Login = (login) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <LoginModalContainer>
        <LoginModalBtn onClick={openModalHandler}>
          {isOpen === false ? "Login" : "Modal Opened"}
        </LoginModalBtn>
        {isOpen === true ? (
          <LoginModalBackdrop onClick={openModalHandler}>
            <LoginModalView onClick={(e)=> e.stopPropagation()}>
              <span onClick={openModalHandler} className="close-btn">
                &times;
              </span>
              <Title>WHOEVER Login</Title>
              <Text>Whoever ID <Id_Input/> </Text>
              <Text>Password<Pw_Input/></Text>
                <SignupQ>아직 계정이 없다면?</SignupQ>
              <LoginBtn>Login</LoginBtn>
              <SignUp>Sign Up</SignUp>
            </LoginModalView>
          </LoginModalBackdrop>
        ) : null}
      </LoginModalContainer>
    </div>
  );
};

export default Login;