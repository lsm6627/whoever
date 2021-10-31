import axios from 'axios';
import { useState, useEffect } from 'react';
import QueryString from 'qs';
import { useLocation } from 'react-router-dom';
import Lists from '../components/Lists';
import PostTitle from '../components/PostTitle';
import Pagination from '../components/Pagination';
import {
  SearchPostContainer,
  ListmenuBox,
  ListTitle,
  ListCreatedAt,
  ListView,
  ListLike,
  ListdivBox,
  PagenumBox
} from './searchPost.style';

const Searchpost = ({ match }) => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const keyword = queryData.keyword;
  const categoryId = Number(match.params.no);
  const [posts, setPosts] = useState([]);
  const [allPostCount, setAllPostCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const categoryLength = allPostCount;

  const getCategoryTitle = (no) => {
    if (no === 1) return '여행';
    if (no === 2) return '술';
    if (no === 3) return '맛집';
    if (no === 4) return '낚시';
    if (no === 5) return '노래';
    if (no === 6) return '코딩';
  };

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/searchpage?page=${currentPage}`, {
        keyword: keyword,
        categoryId: categoryId
      })
      .then((res) => {
        setPosts(res.data.result);
        setAllPostCount(res.data.allPostCount);
      });
  });

  return (
    <SearchPostContainer>
      <PostTitle
        categoryId={categoryId}
        categoryTitle={getCategoryTitle(categoryId)}
      />

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
    </SearchPostContainer>
  );
};

export default Searchpost;
