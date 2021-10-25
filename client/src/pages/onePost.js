import { useState } from 'react';
import { Stylelink } from '../pages/main.style';
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
  CreatedAt_Post,
  Hit_Post,
  Comment_input_Container,
  Comment_Input_Password,
  Comment_Input_But_Container,
  Comment_Input_RegisterBut,
  Comment_Input_RegisterAndSuggestionBut,
  Comment_Input_Content,
  CommentBox,
  Comment_createdBy,
  Comment_content,
  Comment_createAt
} from './onePost.style';
import View from '../components/View';

const OnePost = ({ match, posts }) => {
  const postId = Number(match.params.no);

  const post = posts.filter((el) => el.id === postId);
  const getCategorTitle = (no) => {
    if (no === 1) return '여행';
    if (no === 2) return '술';
    if (no === 3) return '맛집';
    if (no === 4) return '낚시';
    if (no === 5) return '노래';
    if (no === 6) return '코딩';
  };

  return (
    <Maindiv>
      <PostTitleBox>
        <Stylelink to={`/postList=${post[0].categoryId}`}>
          <PostTitle>{getCategorTitle(post[0].categoryId)}</PostTitle>
        </Stylelink>
      </PostTitleBox>
      <Title_Post>{post[0].title}</Title_Post>
      <PostInfo>
        <CreatedAt_Post>
          {new Date(post[0].createdAt).toLocaleDateString('ko-kr')}
        </CreatedAt_Post>
        <Hit_Post>조회수: {post[0].views}</Hit_Post>
      </PostInfo>
      <Post_Content>
        <View editorHTML={post[0].content} />
      </Post_Content>
      <But_Container>
        <But_Suggestion_Up>인정 또 인정 : 0</But_Suggestion_Up>
        <But_Suggestion_Down>비추머겅</But_Suggestion_Down>
      </But_Container>
      <Comment_input_Container>
        <Comment_Input_Password placeholder="댓글 비밀번호" />
        <Comment_Input_But_Container>
          <Comment_Input_RegisterBut>등록</Comment_Input_RegisterBut>
          <Comment_Input_RegisterAndSuggestionBut>
            등록 + 추천
          </Comment_Input_RegisterAndSuggestionBut>
        </Comment_Input_But_Container>
      </Comment_input_Container>
      <Comment_Input_Content placeholder="댓글을 적어주세요!" />
      <CommentBox>
        <Comment_createdBy>여행 고수</Comment_createdBy>
        <Comment_createAt>2021-10-19 07:34:55</Comment_createAt>
      </CommentBox>
      <Comment_content>와 완전 좋은 정보 개이덕!</Comment_content>
      {/* 여기 게시글의 댓글정보 */}
    </Maindiv>
  );
};

export default OnePost;
