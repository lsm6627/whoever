import styled from 'styled-components';

export const SignUpModalContainer = styled.form`
  text-align: center;
`;

export const SignUpModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const SignUpModalBtn = styled.a`
  display: block;
  color: #ffad4f;
  cursor: pointer;
  min-width: 20px;
  margin: 10px auto 15px auto;
  font-family: 'twayair';
`;

export const SignUpModalView = styled.div.attrs((props) => ({
  role: 'dialog'
}))`
  border-radius: 15px;
  background-color: white;
  width: 430px;
  height: 495px;

  > div.clost.btn {
    margin-top: 10px;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 25px;
    color: #4000c7;
  }
`;

export const SignUpContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  margin: 5px;
  padding: 10px;
`;
export const SignUp_Title_Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: none;
  border-bottom: solid 5px #ffad4f;
  margin-bottom: 15px;
`;

export const TitleDiv = styled.div`
  font-family: 'Mikado';
  font-size: 30px;
  color: #ffad4f;
  width: 370px;
  text-align: center;
`;

export const CloseBtn = styled.a`
  border-radius: 50px;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #ffad4f;

  &:hover {
    text-shadow: gray 2px 2px 2px;
  }
`;

export const Idtext = styled.div`
  font-size: 25px;
  color: #ffad4f;
  font-family: 'Mikado';
`;

export const Id_Input = styled.input.attrs({ type: 'text' })`
  height: 35px;
  outline: none;
  border: solid 1px #dadada;
  cursor: pointer;
  padding: 10px;

  &:focus {
    outline: 3px solid #ffad4f;
    border: hidden;
  }
`;

export const Validation_Check = styled.div`
  color: red;
  font-size: 17px;
  width: fit-content;
  margin: 10px 0 15px 0;
`;

export const Validation_Check_Green = styled.div`
  color: green;
  font-size: 17px;
  width: fit-content;
  margin: 10px 0 15px 0;
`;

export const Pwtext = styled.div`
  font-size: 25px;
  color: #ffad4f;
  font-family: 'Mikado';
`;

export const Pw_Input = styled.input.attrs({ type: 'password' })`
  height: 35px;
  outline: none;
  border: solid 1px #dadada;
  cursor: pointer;
  padding: 10px;

  &:focus {
    outline: 3px solid #ffad4f;
    border: hidden;
  }
`;

export const PwValidLenMatch = styled.div`
  color: red;
  font-size: 17px;
  margin: 10px 0 15px 0;
`;

export const PwConfirmtext = styled.div`
  font-size: 25px;
  color: #ffad4f;
  font-family: 'Mikado';
`;

export const Pw_ReInput = styled.input.attrs({ type: 'password' })`
  height: 35px;
  outline: none;
  border: solid 1px #dadada;
  cursor: pointer;
  padding: 10px;

  &:focus {
    outline: 3px solid #ffad4f;
    border: hidden;
  }
`;

export const PwNotMatch = styled.div`
  color: red;
  font-size: 17px;
  margin: 10px 0 15px 0;
`;

export const JoinBtn = styled.button`
  background-color: #ffad4f;
  font-size: 30px;
  border: none;
  padding: 8px;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  font-family: 'Mikado';
`;
