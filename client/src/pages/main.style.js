import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Maindiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 70%;
  height: 92%;
`;

export const Listdiv = styled.div`
  width: 45%;
  height: 40%;
  margin: 30px;
  min-width: 450px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px gray;
  padding: 20px;

  @media only screen and (max-width: 1000px) {
    width: 55%;
  }
`;
export const BoardtitleBox = styled.div`
  border-bottom: solid 5px #ffad4f;
  width: 100%;
  height: 15%;
  display: flex;
`;

export const BoardTitle = styled.div`
  display: flex;
  margin-left: 10px;
  font-size: 1.5em;
  align-items: center;
  margin-bottom: 10px;
  /* cursor: pointer; */
`;

export const BoardContentBox = styled.div`
  width: 100%;
  height: 85%;
`;

export const ListBox = styled.div`
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  line-height: 20px;
  padding: 3px;

  &:hover {
    opacity: 50%;
    transition: ease all 300ms;
  }
`;
export const Stylelink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const Listtitle = styled.div`
  font-size: 1em;
  /* cursor: pointer; */
`;

export const CreatedDate = styled.div`
  font-size: 0.9em;
  margin-right: 10px;
`;
