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
} from './searchMyPost.style';

const SearchMypost = ({ userInfo }) => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const keyword = queryData.keyword;
  const userId = userInfo.id;
  const [posts, setPosts] = useState([]);
  const [allPostCount, setAllPostCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const categoryLength = allPostCount;

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/searchmypost?page=${currentPage}`,
        {
          keyword: keyword,
          userId: userInfo.id
        }
      )
      .then((res) => {
        setPosts(res.data.result);
        setAllPostCount(res.data.allPostCount);
      });
  });

  return (
    <SearchPostContainer>
      <PostTitle userId={userId} categoryTitle="검색된" />

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

export default SearchMypost;
