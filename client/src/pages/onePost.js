import { useState } from 'react';
import { initialState } from '../static/dummyData';
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
  CommentBox,
  Comment_createdBy,
  Comment_content,
  Comment_createAt
} from './onePost.style';

const OnePost = ({ match, location }) => {
  console.log(match);
  console.log(location.search);
  const postId = Number(match.params.no);
  const [posts, setPosts] = useState(initialState.posts); //dummyData = axios

  const post = posts.filter((el) => el.id === postId);
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
      <PostTitleBox>
        <PostTitle>{getCategorTitle(post[0].categoryId)}</PostTitle>
      </PostTitleBox>
      <Title_Post>{post[0].title}</Title_Post>
      <PostInfo>
        <CreatedAt_Post>
          {new Date(post[0].createdAt).toLocaleDateString('ko-kr')}
        </CreatedAt_Post>
        <Hit_Post>{post[0].views}</Hit_Post>
      </PostInfo>
      <Post_Content>{post[0].content}</Post_Content>
      <But_Container>
        <But_Suggestion_Up>인정 또 인정 : 0</But_Suggestion_Up>
        <But_Suggestion_Down>비추머겅</But_Suggestion_Down>
      </But_Container>
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
