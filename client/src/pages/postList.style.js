import styled from 'styled-components';
export const Maindiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 70vw;
  height: 92%;
`;
export const ListmenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-bottom: solid 3px black;
  font-size: 28px;
  padding: 5px;
`;

export const ListTitle = styled.div`
  width: 50%;
  font-family: 'MaplestoryOTFBold';
`;

export const ListCreatedAt = styled.div`
  width: 30%;
  margin-left: 40px;
  font-family: 'MaplestoryOTFBold';

  @media only screen and (max-width: 950px) {
    text-align: right;
  }
`;

export const ListView = styled.div`
  width: 10%;
  font-family: 'MaplestoryOTFBold';

  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const ListLike = styled.div`
  width: 10%;
  font-family: 'MaplestoryOTFBold';

  text-align: right;
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const ListdivBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  font-size: 28px;
`;

export const WritiBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 14px 0;
  padding-top: 15px;
`;

export const WritiBtn = styled.button`
  cursor: pointer;
  border: solid 5px #ffad4999;
  border-radius: 15px;
  background: #fffffc;
  font-family: 'twayair';
  margin: 8px 0;
  font-size: 20px;
  padding: 10px;
  height: 55px;
  transition: 300ms ease all;
  box-shadow: gray 2px 2px 2px;
  min-width: 100px;
  text-align-last: center;

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

export const PagenumBox = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
`;
