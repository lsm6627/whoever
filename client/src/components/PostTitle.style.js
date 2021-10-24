import styled from 'styled-components';

export const PostTitleBox = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PTitle = styled.div`
  font-size: 35px;
  border-bottom: solid 5px #ffad4f;
  font-family: 'twayair';
  padding-bottom: 3px;
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchText = styled.input`
  width: 170px;
  margin-right: 10px;
  height: 35px;
  border: solid 3px #ffad4f;
  border-radius: 15px;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.i`
  font-size: 30px;
  cursor: pointer;
`;
