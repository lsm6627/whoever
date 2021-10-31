import axios from 'axios';
import { useState, useEffect } from 'react';
import Lists from '../components/Lists';
import PostTitle from '../components/PostTitle';
import Pagination from '../components/Pagination';
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

const Mypost = ({ userInfo }) => {
  const [posts, setPosts] = useState([]);
  const [allPostCount, setAllPostCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const categoryLength = allPostCount;

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/myposts?page=${currentPage}`, {
        id: userInfo.id
      })
      .then((res) => {
        setPosts(res.data.result);
        setAllPostCount(res.data.allPostCount);
      });
  }, [currentPage]);

  return (
    <MypageContainer>
      <PostTitle userId={userInfo.id} categoryTitle="나의" />
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
