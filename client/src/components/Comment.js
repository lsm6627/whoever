import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Comment_input_Container,
  Comment_Input_Password,
  Comment_Input_But_Container,
  Comment_Input_RegisterBut,
  Comment_Input_RegisterAndSuggestionBut,
  Comment_Input_Content,
  CommentBox,
  Comment_createdBy,
  Comment_MakeInfo,
  Comment_createAt,
  Comment_content
} from './Comment.style';

const Comment = ({ postId }) => {
  const history = useHistory();
  const pwInput = useRef();
  const [comments, setComments] = useState([]);
  const [commentPw, setCommentPw] = useState('');
  const [contentCm, setContentCm] = useState('');

  const commentHandler = (e) => {
    if (e.target.type === 'text') {
      setContentCm(e.target.value);
    }
    if (e.target.type === 'password') {
      setCommentPw(e.target.value);
    }
  };

  const uploadCommentHandler = () => {
    axios
      .post('http://localhost:4000/uploadcomment', {
        id: postId,
        content: contentCm,
        password: commentPw
      })
      .then((res) => {
        setComments([res.data.data, ...comments]);
        alert('댓글을 등록했습니다');
        setContentCm('');
        setCommentPw('');
      });
  };

  useEffect(() => {
    axios
      .post('http://localhost:4000/getcomments', { id: postId })
      .then((res) => {
        setComments(res.data.data);
      });
  }, []);
  return (
    <>
      <Comment_input_Container>
        <Comment_Input_Password
          placeholder="댓글 비밀번호"
          onChange={commentHandler}
          value={commentPw}
        />
        <Comment_Input_But_Container>
          <Comment_Input_RegisterBut
            onClick={() => {
              uploadCommentHandler();
            }}
          >
            등록
          </Comment_Input_RegisterBut>
          <Comment_Input_RegisterAndSuggestionBut>
            등록 + 추천
          </Comment_Input_RegisterAndSuggestionBut>
        </Comment_Input_But_Container>
      </Comment_input_Container>
      <Comment_Input_Content
        placeholder="댓글을 적어주세요!"
        onChange={commentHandler}
        value={contentCm}
      />
      {comments
        .map((comment) => (
          <CommentBox key={comment.id}>
            <Comment_MakeInfo>
              <Comment_createdBy>익명 {comment.id}</Comment_createdBy>
              <Comment_createAt>
                {new Date(comment.createdAt).toLocaleDateString('ko-kr')}
              </Comment_createAt>
            </Comment_MakeInfo>
            <Comment_content>{comment.content}</Comment_content>
          </CommentBox>
        ))
        .reverse()}
    </>
  );
};

export default Comment;
