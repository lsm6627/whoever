import { useState } from 'react';
import Lists from '../components/Lists';
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
const PostList = ({ match, posts }) => {
  const categoryId = Number(match.params.no);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  // ---categoryId에 맞고,페이지에 맞는 게시물들 받기 서버에서 받는다. useEffect,axios---
  const categoryPost = posts
    .filter((post) => post.categoryId === categoryId)
    .reverse();
  const categorLength = categoryPost.length;
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (tmp) => {
    let currentPost = 0;
    currentPost = tmp.slice(indexOfFirst, indexOfLast);
    return currentPost;
  };
  // -----------------------------------------------
  const getCategorTitle = (no) => {
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
        categorTitle={getCategorTitle(categoryId)}
        // categorLength={categorLength}
      />
      <ListmenuBox>
        <ListTitle>제목</ListTitle>
        <ListCreatedAt>작성시간</ListCreatedAt>
        <ListView>조회수</ListView>
        <ListLike>좋아요</ListLike>
      </ListmenuBox>
      <ListdivBox>
        {currentPosts(categoryPost).map((post) => (
          // ! 이부분 각각 요소들 다른 컴포넌트로 받아 올 수 있게 만들어 주세요!
          <Lists
            key={post.id}
            post={post}
            categorTitle={getCategorTitle(categoryId)}
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
          totalPosts={categorLength}
          paginate={setCurrentPage}
        />
      </PagenumBox>
    </Maindiv>
  );
};
export default PostList;
