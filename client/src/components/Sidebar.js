import { useState } from 'react';
import { initialState } from '../static/dummyData';
import {
  SidebarContainer,
  ModalSideBarBackdrop,
  MenuContainer,
  UserProfileContainer,
  UserInfoUpContainer,
  UserPhoto,
  UserName,
  UserInfoDownBtnContainer,
  UserPost,
  UserPostText,
  Logout,
  LogoutText,
  PostListContainer,
  Listdiv,
  BoardtitleBox,
  Stylelink,
  BoardTitle
} from './Sidebar.style';

const Sidebar = ({ isLogin, isOpen, sideBarOpenHandler }) => {
  const [posts, setPosts] = useState(initialState.posts); //dummyData = axios
  const [categories, setCategories] = useState(initialState.categories);

  return (
    <SidebarContainer>
      {isOpen ? (
        <ModalSideBarBackdrop onClick={sideBarOpenHandler}>
          <MenuContainer onClick={(e) => e.stopPropagation()}>
            <UserProfileContainer>
              <UserInfoUpContainer>
                <UserPhoto className="fas fa-user"></UserPhoto>
                <UserName>HyeonSi</UserName>
              </UserInfoUpContainer>
              <UserInfoDownBtnContainer>
                <UserPost className="fas fa-user-edit">
                  <UserPostText>작성글</UserPostText>
                </UserPost>
                {/* 당신... 작성한 글 페이지 만들어야돼.. */}
                {isLogin ? (
                  <Logout className="fas fa-sign-out-alt">
                    <LogoutText>로그아웃</LogoutText>
                  </Logout>
                ) : (
                  <Logout className="fas fa-sign-out-alt">
                    <LogoutText>로그아웃</LogoutText>
                  </Logout>
                )}
                {/* 여기 로그인 로그아웃 버튼으로 연결하기 */}
              </UserInfoDownBtnContainer>
            </UserProfileContainer>

            <PostListContainer>
              {categories.map((category) => (
                <Listdiv key={category.id}>
                  <BoardtitleBox>
                    <Stylelink
                      to={`/postList/${category.id}`}
                      onClick={sideBarOpenHandler}
                    >
                      {/* 서버쪽으로 categoryId를보내주고, 
                                             서버에서는 받은 categoryId에 연관된 post를 가져온다? */}
                      <BoardTitle>{category.content}</BoardTitle>
                    </Stylelink>
                  </BoardtitleBox>
                </Listdiv>
              ))}
            </PostListContainer>
          </MenuContainer>
        </ModalSideBarBackdrop>
      ) : null}
    </SidebarContainer>
  );
};

export default Sidebar;
