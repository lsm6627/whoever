import { useState } from "react";
import { initialState } from '../static/dummyData';
import {
    SidebarContainer,
    ModalSideBarBackdrop,
    MenuContainer,
    userProfileContainer,
    userInfoUpContainer,
    userPhoto,
    userName,
    userInfoDownBtnContainer,
    userPost,
    Logout,
    postListContainer,
    Listdiv,
    BoardtitleBox,
    Stylelink,
    BoardTitle,
} from './Sidebar.style';

const Sidebar = ({ isLogin, isOpen, sideBarOpenHandler }) => {
    const [posts, setPosts] = useState(initialState.posts); //dummyData = axios
    const [categories, setCategories] = useState(initialState.categories);

    return (
        <SidebarContainer>
            {isOpen ?
                <ModalSideBarBackdrop onClick={sideBarOpenHandler}>
                    <MenuContainer onClick={(e) => e.stopPropagation()}>
                        <userProfileContainer>
                            <userInfoUpContainer>
                                <userPhoto className="fas fa-user"></userPhoto>
                                <userName>HyeonSi님</userName>
                            </userInfoUpContainer>
                            <userInfoDownBtnContainer>
                                <userPost>작성한 글</userPost>
                                {/* 당신... 작성한 글 페이지 만들어야돼.. */}
                                {isLogin ? (<Logout>로그아웃</Logout>) : (<Logout>로그인이 필요합니다</Logout>)}
                                {/* 여기 로그인 로그아웃 버튼으로 연결하기 */}
                            </userInfoDownBtnContainer>
                        </userProfileContainer>

                        <postListContainer>
                            {categories.map((category) => (
                                <Listdiv key={category.id}>
                                    <BoardtitleBox>
                                        <Stylelink to={`/postList/${category.id}`} onClick={sideBarOpenHandler}>
                                          {/* 서버쪽으로 categoryId를보내주고, 
                                             서버에서는 받은 categoryId에 연관된 post를 가져온다? */}
                                         <BoardTitle>{category.content}</BoardTitle>
                                        </Stylelink>
                                    </BoardtitleBox>
                                </Listdiv>
                                ))}

                        </postListContainer>
                </MenuContainer>
            </ModalSideBarBackdrop> : null}
        </SidebarContainer>
    )
}

export default Sidebar;