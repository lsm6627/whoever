import { useState } from 'react';
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

const Mypost = ({ match, posts }) => {
  const categoryId = Number(match.params.no);
  // categoryId에 맞는 post만 서버에서 받는다. useEffect,axios
  //  console.log(myposts)
  const categoryPost = posts.filter((post) => post.userId === 1).reverse();
  // console.log(categoryPost)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const categoryLength = categoryPost.length;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const getCategoryTitle = (no) => {
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
    <MypageContainer>
      <PostTitle categoryTitle="나의" />
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
    </MypageContainer>
  );
};

export default Mypost;
