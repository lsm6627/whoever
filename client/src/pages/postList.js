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
  Pagenum,
  But_Container,
  But_Suggestion_Up,
  But_Suggestion_Down,
  Title_Post,
  CreatedBy_Post,
  Created_Post,
  Hit_Post
} from '../pages/postList.style';

const PostList = ({ categoryId }) => {
  // categoryId에 맞는 post만 서버에서 받는다?
  // 모든 post정보를 여기서 가공한다?
  return (
    <Maindiv>
      <PostTitleBox>
        <PostTitle>여행 게시판!</PostTitle>
        <SearchButton>
          <i className="fas fa-search"></i>
        </SearchButton>
      </PostTitleBox>
      <Title_Post>제목</Title_Post>
      <ListmenuBox>
        <CreatedBy_Post>작성자</CreatedBy_Post>
        <Created_Post>작성시간</Created_Post>
        <Hit_Post>조회수</Hit_Post>
      </ListmenuBox>
      <ListdivBox>
        <Listdiv>게시판!</Listdiv>
      </ListdivBox>
      <But_Container>
        <But_Suggestion_Up>인정 또 인정 : 0</But_Suggestion_Up>
        <But_Suggestion_Down>비추머겅</But_Suggestion_Down>
      </But_Container>
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
