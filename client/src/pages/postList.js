import { useState } from 'react';
import { initialState } from '../static/dummyData';
import Lists from '../components/Lists';
import PostTitle from '../components/PostTitle';
import Pagination from '../components/Pagination';
import { Stylelink } from '../pages/main.style';
import {
  Maindiv,
  ListmenuBox,
  ListdivBox,
  PagenumBox,
  WritiBox,
  WritiBtn
} from '../pages/postList.style';

const PostList = ({ match }) => {
  const categoryId = Number(match.params.no);
  const [posts, setPosts] = useState(initialState.posts); //dummyData = axios
  // categoryId에 맞는 post만 서버에서 받는다. useEffect,axios
  const categoryPost = posts
    .filter((post) => post.categoryId === categoryId)
    .reverse();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const categorLength = categoryPost.length;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const getCategorTitle = (no) => {
    if (no === 1) return '여행';
    if (no === 2) return '술';
    if (no === 3) return '맛집';
    if (no === 4) return '낚시';
    if (no === 5) return '노래';
    if (no === 6) return '코딩';
  };
  const currentPosts = (tmp) => {
    let currentPost = 0;
    currentPost = tmp.slice(indexOfFirst, indexOfLast);
    return currentPost;
  };

  return (
    <Maindiv>
      <PostTitle
        categorTitle={getCategorTitle(categoryId)}
        // categorLength={categorLength}
      />
      <ListmenuBox>
        <div>제목</div>
        <div>작성시간</div>
        <div>조회수</div>
        <div>좋아요</div>
      </ListmenuBox>
      <ListdivBox>
        {currentPosts(categoryPost).map((post) => (
          <Lists
            key={post.id}
            post={post}
            categorTitle={getCategorTitle(categoryId)}
          />
        ))}
      </ListdivBox>
      <WritiBox>
        <Stylelink to={`/postList/${categoryId}/newPost`}>
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
