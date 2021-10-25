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
