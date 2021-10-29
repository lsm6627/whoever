import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import {
  SignUpModalContainer,
  SignUpModalBtn,
  SignUpModalBackdrop,
  SignUpModalView,
  CloseBtn,
  SignUpContentContainer,
  TitleDiv,
  Idtext,
  Id_Input,
  Id_Validation_Check,
  Pwtext,
  Pw_Input,
  PwValidLenMatch,
  PwConfirmtext,
  Pw_ReInput,
  PwNotMatch,
  JoinBtn
} from './SignUp.style';

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginLen, setLoginLen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
            <CloseBtn
              className="fas fa-times-circle"
              onClick={openModalHandler}
            ></CloseBtn>
            <SignUpContentContainer onSubmit={handleSubmit(onSubmit)}>
              <TitleDiv>WHOEVER Sign Up</TitleDiv>
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
              {errors.userId && errors.userId.type === 'required' && (
                <Id_Validation_Check>
                  아이디는 소문자, 숫자 4~20 글자여야 합니다.
                </Id_Validation_Check>
              )}
              {errors.password && errors.password.type === 'required' && (
                <PwValidLenMatch>
                  비밀번호는 8글자 이상, 영문, 숫자 조합이어야 합니다.
                </PwValidLenMatch>
              )}
              {errors.verifyPassword &&
                errors.verifyPassword.type === 'required' && (
                  <PwNotMatch>비밀번호가 일치하지 않습니다.</PwNotMatch>
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
