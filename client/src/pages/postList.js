import { useState } from 'react';
import {
  Maindiv,
  PostTitleBox,
  PostTitle,
  SearchButton,
  ListmenuBox,
  ListdivBox,
  Listdiv,
  PagenumBox,
  Pagenum
} from '../pages/postList.style';

const PostList = ({ categoryId }) => {
  // categoryId에 맞는 post만 서버에서 받는다?
  // 모든 post정보를 여기서 가공한다?
  return (
    <Maindiv>
      <PostTitleBox>
        <PostTitle>여행 게시판!</PostTitle>
        <SearchButton>검색</SearchButton>
      </PostTitleBox>
      <ListmenuBox>
        <no>NO.</no>
        <title>제목</title>
        <created>작성시간</created>
        <hit>조회수</hit>
        <like>좋아요</like>
      </ListmenuBox>
      <ListdivBox>
        <Listdiv>게시판!</Listdiv>
      </ListdivBox>
      <PagenumBox>
        <Pagenum>12345</Pagenum>
      </PagenumBox>
    </Maindiv>
    // <div>
    //   <span>게시판{categoryId}</span>
    // </div>
  );
};

export default PostList;
