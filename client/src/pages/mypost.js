import axios from 'axios';
import { useState, useEffect } from 'react';
import Lists from '../components/Lists';
import PostTitle from '../components/PostTitle';
import Pagination from '../components/Pagination';
import { Stylelink } from '../pages/main.style';
import {
  MypageContainer,
  ListmenuBox,
  ListTitle,
  ListCreatedAt,
  ListView,
  ListLike,
  ListdivBox,
  PagenumBox
} from './mypost.style';

const Mypost = ({ match, userInfo }) => {
  // const id = userInfo.id
  const [posts, setPosts] = useState([]);
  const [allPostCount, setAllPostCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const categoryLength = allPostCount;
  const [id, setId] = useState('');
  console.log(id)
  const getCategoryTitle = (no) => {
    if (no === 1) return '여행';
    if (no === 2) return '술';
    if (no === 3) return '맛집';
    if (no === 4) return '낚시';
    if (no === 5) return '노래';
    if (no === 6) return '코딩';
  };

const mypostHandler = () => {
 setId(userInfo.id)
 
}
  // useEffect(() => {
  //   axios
  //     .post(`http://localhost:4000/myposts?page=${currentPage}`, {
  //       id: id
  //     })
  //     .then((res) => {
  //       setPosts(res.data.result);
  //       setAllPostCount(res.data.allPostCount);
  //     });
  // }, [id]);

  return (
    <MypageContainer>
      <PostTitle categoryTitle="나의" />
      <ListmenuBox>
        <ListTitle>제목</ListTitle>
        <ListCreatedAt>작성시간</ListCreatedAt>
        <ListView>조회수</ListView>
        <ListLike>좋아요</ListLike>
      </ListmenuBox>
      <ListdivBox>
        {posts.map((post) => (
          <Lists key={post.id} post={post} />
        ))}
      </ListdivBox>

      <PagenumBox>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={categoryLength}
          paginate={setCurrentPage}
        />
      </PagenumBox>
    </MypageContainer>
  );
};

export default Mypost;
