import { useState, useEffect } from 'react';
import Lists from '../components/Lists';
import axios from 'axios';
import PostTitle from '../components/PostTitle';
import Pagination from '../components/Pagination';
import { Stylelink } from '../pages/main.style';
import {
  Maindiv,
  ListmenuBox,
  ListTitle,
  ListCreatedAt,
  ListView,
  ListLike,
  ListdivBox,
  PagenumBox,
  WritiBox,
  WritiBtn
} from '../pages/postList.style';
const PostList = ({ match }) => {
  const categoryId = Number(match.params.no);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [posts, setPosts] = useState([]);
  const [allPostCount, setAllPostCount] = useState(0);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/listpage?page=${currentPage}`, {
        categoryId: categoryId
      })
      .then((res) => {
        setPosts(res.data.result);
        setAllPostCount(res.data.allPostCount);
      });
  }, [currentPage]);

  const categoryLength = allPostCount;

  const getCategoryTitle = (no) => {
    if (no === 1) return '여행';
    if (no === 2) return '술';
    if (no === 3) return '맛집';
    if (no === 4) return '낚시';
    if (no === 5) return '노래';
    if (no === 6) return '코딩';
  };
  return (
    <Maindiv>
      <PostTitle
        categoryId={categoryId}
        categoryTitle={getCategoryTitle(categoryId)}
        setPosts={setPosts}
      />
      <ListmenuBox>
        <ListTitle>제목</ListTitle>
        <ListCreatedAt>작성시간</ListCreatedAt>
        <ListView>조회수</ListView>
        <ListLike>좋아요</ListLike>
      </ListmenuBox>
      <ListdivBox>
        {posts.map((post) => (
          <Lists
            key={post.id}
            post={post}
            categoryTitle={getCategoryTitle(categoryId)}
          />
        ))}
      </ListdivBox>
      <WritiBox>
        <Stylelink to={`/newPost/postList=${categoryId}`}>
          <WritiBtn>글쓰기</WritiBtn>
        </Stylelink>
      </WritiBox>
      <PagenumBox>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={categoryLength}
          paginate={setCurrentPage}
        />
      </PagenumBox>
    </Maindiv>
  );
};
export default PostList;
