import styled from 'styled-components';

export const Headerdiv = styled.div`
  border-bottom: solid 8px #ffad4f;
  margin: 0 auto;
  margin-top: 30px;
  height: 100px;
  width: 90vw;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

export const Menu_icon = styled.i`
  margin-left: 10px;
  display: inline;
  flex: 0.5;
  text-align: center;
`;

export const Header_button_container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 30px;
  flex: 2;
`;

export const Logo = styled.div`
  color: #ffad4f;
  display: inline;
  margin-left: 50px;
  font-size: 35px;
  flex: 7;
`;

export const Loginbutton = styled.span`
  background: #fffffc;
  border: solid;
  border-radius: 15px;
  height: 35px;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  box-shadow: gray 2px 2px 2px;
  /* min-width: 150px; */

  &:hover {
    background: #ffad4999;
    box-shadow: gray 6px 6px 6px;
  }
`;
