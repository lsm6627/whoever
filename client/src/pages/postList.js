import { useState } from 'react';
import { useLocation } from 'react-router';
import { initialState } from '../static/dummyData';
import Lists from '../components/Lists';
import PostTitle from '../components/PostTitle';
import Pagination from '../components/Pagination';
import {
  Maindiv,
  // PostTitleBox,
  // PostTitle,
  // PostCount,
  // SearchBox,
  // SearchText,
  // SearchIcon,
  ListmenuBox,
  ListdivBox,
  // Listdiv,
  PagenumBox,
  Pagenum
} from '../pages/postList.style';

const PostList = ({}) => {
  const location = useLocation();
  const { categoryId, categorContent } = location.state;
  const [posts, setPosts] = useState(initialState.posts); //dummyData = axios
  // categoryId에 맞는 post만 서버에서 받는다. useEffect,axios
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
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

  return (
    <Maindiv>
      <PostTitle categorTitle={categorContent} categorLength={categorLength} />
      <ListmenuBox>
        <no>NO.</no>
        <title>제목</title>
        <created>작성시간</created>
        <hit>조회수</hit>
        <like>좋아요</like>
      </ListmenuBox>
      <ListdivBox>
        {currentPosts(categoryPost).map((post) => (
          <Lists key={post.id} post={post} />
        ))}
      </ListdivBox>
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
