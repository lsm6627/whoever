import styled from 'styled-components';
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
  background-color: #ffffff;
  border: solid 5px #ffad4f;
  border-radius: 25px;
  padding: 15px;
  font-size: 25px;
  height: 100%;
  width: 300px;
`;

export const UserProfileContainer = styled.div`
  margin-top: 30px;
`;

export const UserInfoUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  margin-bottom: 45px;
`;

export const UserPhoto = styled.i`
  display: inline-block;
`;

export const UserName = styled.div`
  display: inline-block;
  margin-left: 30px;
  font-family: 'twayair';
`;

export const UserInfoDownBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 3px solid #ffad4f;
  border-radius: 15px;
  padding: 10px;
`;

export const UserPost = styled.i`
  display: block;
  text-align: center;
  cursor: pointer;
`;

export const UserPostText = styled.div`
  margin-top: 5px;
`;

export const Logout = styled.i`
  display: block;
  text-align: center;
  cursor: pointer;
`;

export const LogoutText = styled.div`
  margin-top: 5px;
`;

export const PostListContainer = styled.div`
  padding: 20px;
  margin-top: 25px;
`;

export const Listdiv = styled.ul`
  padding: 15px;
  padding-left: 25px;
  width: fit-content;
`;

export const BoardtitleBox = styled.li`
  height: 30px;
  list-style-type: none;

  &:hover {
    border-bottom: 3px solid #ffad4f;
  }
`;

export const Stylelink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const BoardTitle = styled.div`
  font-family: 'twayair';
`;
