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
  LogIn,
  Logout,
  LogoutText,
  PostListContainer,
  Listdiv,
  BoardtitleBox,
  Stylelink,
  BoardTitle
} from './Sidebar.style';

const Sidebar = ({
  isLogin,
  sidebarOpen,
  sideBarOpenHandler,
  userInfo,
  openModalHandler,
  logoutHandler,
  categories
}) => {
  return (
    <SidebarContainer>
      {sidebarOpen ? (
        <ModalSideBarBackdrop onClick={sideBarOpenHandler}>
          <MenuContainer onClick={(e) => e.stopPropagation()}>
            <UserProfileContainer>
              <UserInfoUpContainer>
                <UserPhoto className="fas fa-user"></UserPhoto>
                <UserName>{userInfo.userId}</UserName>
              </UserInfoUpContainer>
              <UserInfoDownBtnContainer>
                {isLogin ? (
                  <UserPost className="fas fa-user-edit">
                    <Stylelink to={`/mypost`} onClick={sideBarOpenHandler}>
                      <UserPostText>작성글</UserPostText>
                    </Stylelink>
                  </UserPost>
                ) : (
                  <div style={{ display: 'none' }} />
                )}
                {isLogin ? (
                  <Logout
                    className="fas fa-sign-out-alt"
                    onClick={sideBarOpenHandler}
                  >
                    <LogoutText onClick={() => logoutHandler()}>
                      로그아웃
                    </LogoutText>
                  </Logout>
                ) : (
                  <LogIn className="fas fa-sign-in-alt">
                    <LogoutText onClick={openModalHandler}>로그인</LogoutText>
                  </LogIn>
                )}
              </UserInfoDownBtnContainer>
            </UserProfileContainer>

            <PostListContainer>
              {categories.map((category) => (
                <Listdiv key={category.id}>
                  <BoardtitleBox>
                    <Stylelink
                      to={`/postList=${category.id}`}
                      onClick={sideBarOpenHandler}
                    >
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
