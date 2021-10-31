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
  Comment_MakeInfo,
  Comment_createAt,
  Comment_content,
  Comment_delete_Button_Conainer,
  Comment_delete_Button,
  // 패스워드 모달
  CommentPasswordModal,
  CommentModalBackdrop,
  CommentModalContainer,
  CommentModalTitle,
  CommentModalInput,
  CommentModalInputButton
} from './Comment.style';

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [commentPw, setCommentPw] = useState('');
  const [contentCm, setContentCm] = useState('');
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [commentsPasswordInputValue, setCommentsPasswordInputValue] =
    useState();

  const commentHandler = (e) => {
    if (e.target.type === 'text') {
      setContentCm(e.target.value);
    }
    if (e.target.type === 'password') {
      setCommentPw(e.target.value);
    }
  };

  const commentPasswordHandler = (e) => {
    setCommentsPasswordInputValue(e.target.value);
  };

  const uploadCommentHandler = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/uploadcomment`, {
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

  const openCommentModalHandler = () => {
    setOpenCommentModal(!openCommentModal);
  };

  const deleteCommentHandler = (commentId) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/deletecomment`, {
        commentId: commentId,
        commentPassword: commentsPasswordInputValue
      })
      .then((res) => {
        const filteredComments = comments.filter((el) => el.id !== commentId);
        setComments(filteredComments);
        alert('댓글이 삭제 되었습니다.');
        openCommentModalHandler();
      })
      .catch((err) => alert('패스워드가 다릅니다.'));
  };

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/getcomments`, { id: postId })
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
            <Comment_delete_Button_Conainer>
              <Comment_delete_Button onClick={openCommentModalHandler}>
                댓글 삭제
              </Comment_delete_Button>
              {openCommentModal ? (
                <CommentPasswordModal>
                  <CommentModalBackdrop onClick={openCommentModalHandler}>
                    <CommentModalContainer onClick={(e) => e.stopPropagation()}>
                      <CommentModalTitle>패스워드</CommentModalTitle>
                      <CommentModalInput
                        onChange={(e) => commentPasswordHandler(e)}
                      />
                      <CommentModalInputButton
                        onClick={() => deleteCommentHandler(comment.id)}
                      >
                        입력
                      </CommentModalInputButton>
                    </CommentModalContainer>
                  </CommentModalBackdrop>
                </CommentPasswordModal>
              ) : null}
            </Comment_delete_Button_Conainer>
          </CommentBox>
        ))
        .reverse()}
    </>
  );
};

export default Comment;
