import { useState, useEffect } from 'react';
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
  Comment_content,
  Comment_createAt
} from './Comment.style';

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .post('http://localhost:4000/getcomments', { id: postId })
      .then((res) => {
        setComments(res.data.data);
      });
  }, []);
  console.log(comments);
  return (
    <>
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
    </>
  );
};

export default Comment;
