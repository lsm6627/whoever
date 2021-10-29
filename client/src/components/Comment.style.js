import styled from 'styled-components';

export const Comment_input_Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 70px 0 20px 0;
  font-size: 25px;
`;
export const Comment_Input_Password = styled.input.attrs({ type: 'password' })`
  display: inline;
  width: 165px;
  height: 55px;
  padding-left: 10px;
  font-size: 20px;
  border: solid 5px #ffad4f;
  border-radius: 15px;
  padding: 10px;
  transition: all 300ms;

  &:focus {
    outline: none;
    box-shadow: 4px 4px 4px gray;
  }
`;

export const Comment_Input_But_Container = styled.div`
  flex: -1 0 0;
  min-width: 260px;

  @media only screen and (max-width: 520px) {
    margin-left: 3px;
  }
`;

export const Comment_Input_RegisterBut = styled.button`
  background: #fffffc;
  border: solid 5px #ffad4999;
  border-radius: 15px;
  height: 55px;
  cursor: pointer;
  transition: 300ms ease all;
  box-shadow: gray 2px 2px 2px;
  padding: 10px;
  min-width: 60px;
  text-align-last: center;
  margin-top: 38px;
  font-family: 'MaplestoryOTFBold';
  margin-right: 40px;

  @media only screen and (max-width: 520px) {
    margin-right: 3px;
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

export const Comment_Input_RegisterAndSuggestionBut = styled.button`
  background: #fffffc;
  border: solid 5px #ffad4999;
  border-radius: 15px;
  height: 55px;
  cursor: pointer;
  transition: 300ms ease all;
  box-shadow: gray 2px 2px 2px;
  padding: 10px;
  min-width: 110px;
  text-align-last: center;
  margin-top: 38px;
  font-family: 'MaplestoryOTFBold';
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

export const Comment_Input_Content = styled.input`
  height: 100px;
  width: 100%;
  padding: 0 0 50px 10px;
  font-size: 20px;
  border: solid 5px #ffad4f;
  transition: all 300ms;

  &:focus {
    outline: none;
    box-shadow: 4px 4px 4px gray;
  }
`;

export const CommentBox = styled.div`
  font-size: 23px;
  padding: 5px;
  padding-left: 10px;
  border-radius: 8px;
  margin-top: 40px;
`;

export const Comment_MakeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffad4f;
  border-radius: 10px;
  padding: 15px;
`;

export const Comment_createdBy = styled.span`
  font-family: 'twayair';
`;
export const Comment_createAt = styled.span`
  font-family: 'twayair';
  font-size: 20px;
`;

export const Comment_content = styled.div`
  padding: 15px;
`;
