import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import QueryString from 'qs';
import Lists from '../components/Lists';
import PostTitle from '../components/PostTitle';
import Pagination from '../components/Pagination';
import { Stylelink } from '../pages/main.style';
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

const Searchpost = ({ match, posts }) => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search, {
    ignoreQueryPrefix: true
  });
  console.log('mmmmmmmmm', match.params.no);
  console.log('llllllllllllllll', queryData.keyword);
  const categoryId = Number(match.params.no);
  const categoryPost = posts.filter((post) => post.userId === 1).reverse();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const categoryLength = categoryPost.length;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  //   axios
  //   .post(
  //     'http://localhost:4000/searchpage',
  //     { keyword: keyword, categoryId: categoryId },
  //     { withCredentials: true }
  //   )
  //   .then((res) => {
  //     console.log(res.data);
  //     setKeyword('');
  //   })
  //   .catch((err) => {
  //     alert('잘못된 요청입니다');
  //   });

  const getCategoryTitle = (no) => {
    if (no === 1) return '여행';
    if (no === 2) return '술';
    if (no === 3) return '맛집';
    if (no === 4) return '낚시';
    if (no === 5) return '노래';
    if (no === 6) return '코딩';
  };

  //   const currentPosts = (tmp) => {
  //     let currentPost = 0;
  //     currentPost = tmp.slice(indexOfFirst, indexOfLast);
  //     return currentPost;
  //   };
  return (
    <SearchPostContainer>
      <PostTitle categoryTitle="검색된" />
      {/* // categorLength={categorLength} */}
      <ListmenuBox>
        <ListTitle>제목</ListTitle>
        <ListCreatedAt>작성시간</ListCreatedAt>
        <ListView>조회수</ListView>
        <ListLike>좋아요</ListLike>
      </ListmenuBox>
      <ListdivBox>
        {currentPosts(categoryPost).map((post) => (
          //  console.log(post)
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
