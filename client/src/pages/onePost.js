import { useState } from 'react';
import { useLocation } from 'react-router';

import {
  Maindiv,
  PostTitleBox,
  PostTitle,
  PostInfo,
  Post_Content,
  But_Container,
  But_Suggestion_Up,
  But_Suggestion_Down,
  Title_Post,
  CreatedBy_Post,
  Created_Post,
  Hit_Post,
  CommentBox,
  Comment_createdBy,
  Comment_content,
  Comment_createAt
} from './onePost.style';

const onePost = ({ categoryId }) => {
  // const location = useLocation();
  // const { post } = location.state;
  return (
    <Maindiv>
      <PostTitleBox>
        <PostTitle>여행</PostTitle>
      </PostTitleBox>
      <Title_Post>여행여행여행혀앻</Title_Post>
      <PostInfo>
        <CreatedBy_Post>여행을 떠나요</CreatedBy_Post>
        <Created_Post>2021-10-19 07:34:50</Created_Post>
        <Hit_Post>9</Hit_Post>
      </PostInfo>
      <Post_Content>
        게시판!의 내용을 여기 적을건데 뭔가 나도 길게 적고는 싶지만 나는 그다지
        창의력이 없는지 길게 적기는 너무 힘든 것이에요. 하지만 테스트를 위해
        일단 적어 봅니다. 이거 깨지나요? 아닐걸요 내가 만든거거든요 훗.
        재송합니다. 개소리는 여기까지 적도록 하겠읍니다.
      </Post_Content>
      <But_Container>
        <But_Suggestion_Up>인정 또 인정 : 0</But_Suggestion_Up>
        <But_Suggestion_Down>비추머겅</But_Suggestion_Down>
      </But_Container>
      <CommentBox>
        <Comment_createdBy>여행 고수</Comment_createdBy>
        <Comment_createAt>2021-10-19 07:34:55</Comment_createAt>
      </CommentBox>
      <Comment_content>와 완전 좋은 정보 개이덕!</Comment_content>
    </Maindiv>
  );
};

export default onePost;
