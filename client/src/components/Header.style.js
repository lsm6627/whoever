import styled from 'styled-components';

export const Headerdiv = styled.div`
  border-bottom: solid 8px #ffad4f;
  margin: 0 auto;
  margin-top: 30px;
  height: 100px;
  width: 90vw;
  display: flex;
  align-items: center;
`;

export const Menu_icon = styled.i`
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 50px;
  display: inline;
  flex: 0.5;
  text-align: center;

  @media only screen and (max-width: 520px) {
    font-size: 35px;
  }
`;

export const Header_button_container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 30px;
  flex: 2;
`;

export const Logo = styled.div`
  font-family: 'Mikado';
  color: #ffad4f;
  display: inline;
  font-size: 70px;
  flex: 7;
  text-shadow: 4px 4px 4px gray;
  margin-right: 10px;

  @media only screen and (max-width: 520px) {
    font-size: 50px;
  }
`;

export const Loginbutton = styled.span`
  background: #fffffc;
  border: solid 5px #ffad4999;
  border-radius: 15px;
  height: 55px;
  cursor: pointer;
  transition: 300ms ease all;
  box-shadow: gray 2px 2px 2px;
  padding: 10px;
  min-width: 100px;
  text-align-last: center;
  margin-top: 38px;
  font-family: 'Mikado';
  margin-right: 40px;

  @media only screen and (max-width: 520px) {
    display: none;
  }

  &:hover {
    box-shadow: gray 6px 6px 6px;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    transition: ease all;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: ease all;
  }

  &:active {
    box-shadow: none;
  }
`;

export const Logout = styled.button.attrs({ type: 'submit' })`
  margin-top: 7.5em;
  background: #fffffc;
  border: solid 5px #ffad4999;
  border-radius: 15px;
  height: 55px;
  cursor: pointer;
  transition: 300ms ease all;
  box-shadow: gray 2px 2px 2px;
  padding: 10px;
  min-width: 100px;
  text-align-last: center;
  font-family: 'Mikado';
  margin-right: 40px;
  `

export const ModalInsideContainer = styled.div`
margin-left: 10px;
`;

export const Title = styled.div`
font-size: 30px;
color: #ffad4f;
font-family: 'mikado';
`;

export const TitleDiv = styled.div`
border-bottom: solid 5px #ffad4f;
font-family: 'Mikado';
font-size: 40px;
color: #ffad4f;
width: 365px;
text-align: center;
margin: 0 0 15px 0;
`;

export const Id_text = styled.div`
font-size: 30px;
color: #ffad4f;
padding: 10px 0 2px;
font-family: 'Mikado';
`;

export const Pw_text = styled.div`
font-size: 30px;
color: #ffad4f;
padding: 10px 0 2px;
font-family: 'Mikado';
`;

export const LoginModalContainer = styled.div`
height: 13.5rem;
`;

export const LoginModalBtn = styled.button`
margin-top: 7.5em;
background: #fffffc;
border: solid 5px #ffad4999;
border-radius: 15px;
height: 55px;
cursor: pointer;
transition: 300ms ease all;
box-shadow: gray 2px 2px 2px;
padding: 10px;
min-width: 100px;
text-align-last: center;
font-family: 'Mikado';
margin-right: 40px;

&:hover {
  box-shadow: gray 6px 6px 6px;
}

&:before,
&:after {
  content: '';
  position: absolute;
  width: 0;
  transition: ease all;
}

&:hover:before,
&:hover:after {
  width: 100%;
  transition: ease all;
}

&:active {
  box-shadow: none;
}
`;

export const LoginBtn = styled.button`
background-color: #ffad4f;
font-size: 35px;
border: none;
padding: 5px;
width: 368px;
color: white;
cursor: pointer;
margin-top: 25px;
font-family: 'Mikado';
`;

export const LoginModalBackdrop = styled.div`
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

export const Validation_Check = styled.div`
color: red;
padding-top: 5px;
`;

export const Id_Input = styled.input.attrs({ type: 'text' })`
font-size: 17px;
width: 368px;
height: 2.1em;
outline: none;
cursor: pointer;
border: solid 1px #dadada;

&:focus {
  outline: 1px solid #ffad4f;
  border: hidden;
}
`;
export const Pw_Input = styled.input.attrs({ type: 'password' })`
width: 368px;
height: 2.2em;
outline: none;
padding: 0px 25px 0px 0px;
border: solid 1px #dadada;
cursor: pointer;

&:focus {
  outline: 1px solid #ffad4f;
  border: hidden;
}
`;
export const CloseBtn = styled.span`
border-radius: 50px;
border: none;
font-size: 28px;
margin: 5px 20px -8px 370px;
cursor: pointer;
color: #ffad4f;

&:hover {
  box-shadow: gray 2px 2px 2px;
}
`;
export const LoginModalView = styled.div.attrs((props) => ({
role: 'dialog'
}))`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border-radius: 15px;
background-color: white;
width: 388px;
height: 435px;

> div.close.btn {
  margin-top: 15px;
  cursor: pointer;
}

> div.desc {
  margin-top: 25px;
  color: #4000c7;
}
`;
