import { useHistory } from 'react-router-dom';
import {
    ModalSideBarBackdrop,
    MenuContainer,
    userProfileContainer,
    userUpContainer,
    userPhoto,
    userName,
    userDownContainer,
    userInfo,
    userPost,
    Logout,
    postListContainer,
} from './Sidebar.style';

const Sidebar = ({  }) => {
    // const history = useHistory();
    // const [posts, setPosts] = useState(initialState.posts); //dummyData = axios
    // const [categories, setCategories] = useState(initialState.categories);


    return (
        <ModalSideBarBackdrop>
            <MenuContainer>
                <userProfileContainer>
                    <userUpContainer>
                        <userPhoto className="fas fa-user"></userPhoto>
                        <userName>HyeonSi님</userName>
                    </userUpContainer>
                    <userDownContainer>
                        <userInfo>회원 정보</userInfo>
                        <userPost>작성한 글</userPost>
                        <Logout>로그아웃</Logout>
                    </userDownContainer>
                </userProfileContainer>

            <postListContainer>
            
            </postListContainer>

            </MenuContainer>
        </ModalSideBarBackdrop>

        
    )
}

export default Sidebar;