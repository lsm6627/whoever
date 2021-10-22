import styled from "styled-components";
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
  height: 15rem;
  margin: 120px auto;
`;

export const ModalSideBarBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: left;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: solid 5px #ffad4f;
  border-radius: 25px;
  padding: 15px;
  width: 300px;
  height: 100%;
`;

export const userProfileContainer = styled.div``;

export const userInfoUpContainer = styled.div``;

export const userInfoDownBtnContainer = styled.div``;

export const userPhoto = styled.div``;

export const userName = styled.div``;

export const userPost = styled.div`
`;
export const Logout = styled.div`

`;
export const postListContainer = styled.div`

`;
export const Listdiv = styled.div`

`;
export const BoardtitleBox = styled.div`

`;
export const Stylelink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const BoardTitle = styled.div`

`;