import styled from 'styled-components';

export const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin: 50px auto;
  width: 70vw;
  height: 92%;
  padding: 15px;
  min-width: 450px;
`;

export const PostTitleBox = styled.div`
  width: 100%;
  height: 80px;
`;
export const PostTitle = styled.a`
  font-size: 40px;
  border-bottom: solid 5px #ffad4f;
  cursor: pointer;
`;
export const SearchButton = styled.a`
  margin-left: 92%;
  cursor: pointer;
  font-size: 30px;
`;
export const ListmenuBox = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px 0 15px;
  display: flex;
  font-size: 25px;
  background-color: #e5e5e5;
  padding: 15px;
`;

export const Title_Post = styled.div`
  font-size: 40px;
  padding-bottom: 5px;
  border-bottom: solid 3px;
`;
export const CreatedBy_Post = styled.div`
  flex: 0.2 0 0;
  min-width: fit-content;
  margin-right: 10px;
`;
export const Created_Post = styled.div`
  flex: 1 0 0;
  min-width: fit-content;
`;
export const Hit_Post = styled.div`
  flex: 0 0 1;
  min-width: fit-content;
`;

export const ListdivBox = styled.div`
  width: 100%;
  height: 500px;
  padding: 25px;
`;

export const Listdiv = styled.div``;
export const PagenumBox = styled.div`
  border: solid 1px orange;
  width: 100%;
  height: 200px;
`;
export const Pagenum = styled.div``;

export const But_Container = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin: 15px;
  justify-content: space-around;
  align-items: center; ;
`;

export const But_Suggestion_Up = styled.button`
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

export const But_Suggestion_Down = styled.button`
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
