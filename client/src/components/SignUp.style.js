import styled from "styled-components";


export const TitleDiv = styled.div`
  border-bottom: solid 5px #ffad4f;
  font-family: 'Mikado';
  font-size: 35px;
  color: #ffad4f;
  width: 370px;
  text-align: center;
`;

export const Idtext = styled.div`
  font-size: 25px;
  color: #ffad4f;
  padding: 5px;
  padding-top: 15px;
  font-family: 'Mikado';
  text-align: left;
`;

export const Pwtext = styled.div`
  font-size: 25px;
  color: #ffad4f;
  font-family: 'Mikado';
  padding: 5px;
`;

export const PwConfirmtext = styled.div`
  font-size: 25px;
  color: #ffad4f;
  font-family: 'Mikado';
  padding: 5px;
`;

export const SignUpContentContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  text-align: left;
  margin: 5px;
  padding: 10px;
`;

export const PwNotMatch = styled.div`
  display: fixed;
  color:red;
  padding-top: 1px;
  font-size: 14.5px;
  margin-right: 164px;
`;

export const Id_Validation_Check = styled.div`
  display: fixed;
  color:red;
  padding-top: 1px;
  font-size: 14.5px;
  margin-right: 45px;
`;

export const PwValidLenMatch = styled.div`
  display: fixed; 
  color:red;
  padding-top: 1px;
  font-size: 14.5px;
  margin-right: 30px;
`;

export const SignUpModalBtn = styled.a`
  display: block;
  color: #ffad4f;
  cursor: pointer;
  min-width: 20px;
  margin: 10px auto 15px auto;
  font-family: 'twayair';
`;

export const JoinBtn = styled.button`
  background-color: #ffad4f;
  font-size: 30px;
  border: none;
  padding:8px;
  width: 358px;
  color: white;
  cursor: pointer;
  margin-top: 30px;
  font-family: 'Mikado';
`;

export const SignUpModalContainer = styled.form`
  height: 3rem;
  text-align: center;
  margin-bottom: 10px;
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

export const Id_Input = styled.input.attrs({ type: 'text' })`
  font-size: 17px;
  width: 358px;
  height: 2.1em;
  outline: none;
  border: solid 1px #dadada;
  margin-left: 8px;
  cursor: pointer;
  &:focus {
    outline: 1px solid #ffad4f;
  }
`;

export const Pw_Input = styled.input.attrs({ type: 'password' })`
  width: 358px;
  height: 2.2em;
  outline: none;
  border: solid 1px #dadada;
  margin-left: 8px;
  cursor:pointer;

  &:focus {
    outline: 1px solid #ffad4f;
  }
`;

  export const Pw_ReInput = styled.input.attrs({ type: 'password' })`
  width: 358px;
  height: 2.2em;
  outline: none;
  border: solid 1px #dadada;
  margin-left: 8px;
  cursor:pointer;

  &:focus {
    outline: 1px solid #ffad4f;
    border:hidden;
  }
`;

  export const CloseBtn = styled.span`
  border-radius: 50px;
  border: none;
  font-size: 28px;
  margin: -15px 20px -10px 370px;
  cursor: pointer;
  color: #ffad4f;

  &:hover {
  box-shadow: gray 3px 3px 2px;
  border:hidden;
}
`;

export const SignUpModalView = styled.div.attrs((props) => ({
    role: "dialog"
  }))`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: white;
  width: 395px;
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