import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useForm } from 'react-hook-form';

import {
  SignUpModalContainer,
  SignUpModalBtn,
  SignUpModalBackdrop,
  SignUpModalView,
  CloseBtn,
  SignUpContentContainer,
  SignUp_Title_Container,
  TitleDiv,
  Idtext,
  Id_Input,
  Validation_Check,
  Validation_Check_Green,
  Pwtext,
  Pw_Input,
  PwConfirmtext,
  Pw_ReInput,
  JoinBtn
} from './SignUp.style';

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/signup`, {
        userId: data.userId,
        password: data.password
      })
      .then((res) => {
        setIsOpen();
        alert('회원가입이 완료 되었습니다.');
      })
      .catch((err) => alert('중복된 ID 입니다.'));
  };

  useEffect(() => {
    setIsVerified(watch('verifyPassword') === watch('password'));
  }, [watch('verifyPassword'), watch('password')]);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SignUpModalContainer onSubmit={handleSubmit(onSubmit)}>
      <SignUpModalBtn onClick={openModalHandler}>
        {isOpen === false ? '아직 계정이 없다면?' : '아직 계정이 없다면?'}
      </SignUpModalBtn>

      {isOpen === true ? (
        <SignUpModalBackdrop onClick={openModalHandler}>
          <SignUpModalView onClick={(e) => e.stopPropagation()}>
            <SignUpContentContainer onSubmit={handleSubmit(onSubmit)}>
              <SignUp_Title_Container>
                <TitleDiv>WHOEVER Sign Up</TitleDiv>
                <CloseBtn
                  className="fas fa-times-circle"
                  onClick={openModalHandler}
                ></CloseBtn>
              </SignUp_Title_Container>
              <Idtext>Whoever ID</Idtext>
              <Id_Input
                name="userId"
                className="userId"
                {...register('userId', {
                  pattern: /^[a-z0-9_-]{4,20}$/,
                  maxLength: 20,
                  minLength: 4,
                  required: true
                })}
              />
              {errors.userId ? (
                <Validation_Check>
                  아이디는 소문자, 숫자 4~20 글자여야 합니다.
                </Validation_Check>
              ) : (
                <Validation_Check_Green>
                  사용가능한 아이디 입니다.
                </Validation_Check_Green>
              )}
              <Pwtext>Password</Pwtext>
              <Pw_Input
                name="password"
                className="password"
                {...register('password', {
                  pattern: /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                  required: true,
                  minLength: 8
                })}
                onInvalid={(e) => {
                  e.target.setCustomValidity(
                    '비밀번호는 8글자 이상, 영문, 숫자 조합이어야 합니다.'
                  );
                }}
                onInput={(e) => {
                  e.target.setCustomValidity('');
                }}
              />
              {errors.password ? (
                <Validation_Check>
                  비밀번호는 8글자 이상, 영문, 숫자 조합이어야 합니다.
                </Validation_Check>
              ) : (
                <Validation_Check_Green>
                  사용가능한 비밀번호 입니다.
                </Validation_Check_Green>
              )}
              <PwConfirmtext>Password Confirm</PwConfirmtext>
              <Pw_ReInput
                name="verifyPassword"
                className="password"
                {...register('verifyPassword', { required: true })}
                onInvalid={(e) => {
                  e.target.setCustomValidity('비밀번호가 일치하지 않습니다.');
                }}
                onInput={(e) => {
                  e.target.setCustomValidity('');
                }}
              />
              {!isVerified ? (
                <Validation_Check>
                  비밀번호가 일치하지 않습니다.
                </Validation_Check>
              ) : (
                <Validation_Check_Green>
                  비밀번호가 일치합니다.
                </Validation_Check_Green>
              )}
              <JoinBtn>Sign Up</JoinBtn>
            </SignUpContentContainer>
          </SignUpModalView>
        </SignUpModalBackdrop>
      ) : null}
    </SignUpModalContainer>
  );
};

export default SignUp;
