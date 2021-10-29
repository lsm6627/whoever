import { useState, useEffect } from 'react';
import { Stylelink } from '../pages/main.style';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Maindiv,
  PostTitleBox,
  OnePostTitleContainer,
  PostTitle,
  DeletePostButton,
  PostInfo,
  Post_Content,
  But_Container,
  But_Suggestion_Up,
  But_Suggestion_Down,
  Title_Post,
  CreatedAt_Post,
  Hit_Post
} from './onePost.style';
import View from '../components/View';
import Comment from '../components/Comment';

const OnePost = ({ match, userInfo }) => {
  const history = useHistory();
  const postId = Number(match.params.no);
  const [onePost, setOnePost] = useState([]);
  const [isButUpChecked, setIsButUpChecked] = useState(false);
  const [isButDownChecked, setIsButDownChecked] = useState(false);

  useEffect(() => {
    axios.post('http://localhost:4000/onepost', { id: postId }).then((res) => {
      setOnePost(res.data);
    });
  }, []);

  const deletePostHandler = () => {
    axios.post('http://localhost:4000/deletepost', {
      userId: userInfo.id,
      postCreatedById: onePost.userId
    });
    if (userInfo.id === onePost.userId) {
      alert('게시물이 삭제 되었습니다.');
      history.goBack();
      return;
    }
    alert('작성자만 글을 삭제 할 수 있습니다');
  };

  const getCategoryTitle = (no) => {
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
        <Stylelink to={`/postList=${onePost.categoryId}`}>
          <PostTitle>{getCategoryTitle(onePost.categoryId)}</PostTitle>
        </Stylelink>
      </PostTitleBox>
      <OnePostTitleContainer>
        <Title_Post>{onePost.title}</Title_Post>
        <DeletePostButton onClick={deletePostHandler}>글삭제</DeletePostButton>
      </OnePostTitleContainer>
      <PostInfo>
        <CreatedAt_Post>
          {new Date(onePost.createdAt).toLocaleDateString('ko-kr')}
        </CreatedAt_Post>
        <Hit_Post>조회수:{onePost.views}</Hit_Post>
      </PostInfo>
      <Post_Content>
        {onePost.length === 0 ? '' : <View editorHTML={onePost.content} />}
      </Post_Content>
      <But_Container>
        {!isButUpChecked ? (
          <But_Suggestion_Up
            onClick={() => {
              axios
                .put('http://localhost:4000/suggestionsup', {
                  id: onePost.id,
                  suggestions: onePost.suggestions
                })
                .then((res) => {
                  setOnePost(res.data);
                  setIsButUpChecked(true);
                });
            }}
          >
            <i className="fas fa-thumbs-up" /> : {onePost.suggestions}
          </But_Suggestion_Up>
        ) : (
          <But_Suggestion_Up
            onClick={() => {
              alert('추천 버튼은 연속해서 누를 수 없습니다');
            }}
          >
            <i className="fas fa-thumbs-up" /> : {onePost.suggestions}
          </But_Suggestion_Up>
        )}
        {!isButDownChecked ? (
          <But_Suggestion_Down
            onClick={() => {
              axios
                .put('http://localhost:4000/suggestionsdown', {
                  id: onePost.id,
                  suggestions: onePost.suggestions
                })
                .then((res) => {
                  setOnePost(res.data);
                  setIsButDownChecked(true);
                });
            }}
          >
            <i className="fas fa-thumbs-down" />
          </But_Suggestion_Down>
        ) : (
          <But_Suggestion_Down
            onClick={() => {
              alert('비추천 버튼은 연속해서 누를 수 없습니다');
            }}
          >
            <i className="fas fa-thumbs-down" />
          </But_Suggestion_Down>
        )}
      </But_Container>
      <Comment postId={postId} />
      {/* 여기 게시글의 댓글정보 */}
      {/* TODO: 글 목록이 게시글 안에서도 보이면 다른 게시물로 옮겨 다니기 편하겠다! */}
    </Maindiv>
  );
};

export default OnePost;
