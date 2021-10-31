import { useState, useRef } from 'react';
import Writer from '../components/Writer';
import {
  Maindiv,
  TitleWriteContainer,
  Title,
  WriterWriteContainer,
  ButtonContainer,
  SubmitButton,
  BacktoButton
} from '../pages/newPost.style';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const NewPost = ({ match, userInfo }) => {
  const categoryId = Number(match.params.no);
  const history = useHistory();
  const editorRef = useRef();
  const [title, setTitle] = useState('');

  const handleClick = () => {
    if (!title) {
      alert('제목을 작성해주세요');
      return;
    }
    const editorInstance = editorRef.current.getInstance();
    const gethtml = editorInstance.getHTML();
    if (!gethtml) {
      alert('게시물을 작성해주세요');
      return;
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/uploadpost`, {
        userId: userInfo.id,
        img: '',
        categoryId: categoryId,
        title: title,
        content: gethtml
      })
      .then((res) => {
        history.push(`/postList=${categoryId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Maindiv>
      <TitleWriteContainer>
        <Title
          type="text"
          placeholder="제목을 작성해주세요"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </TitleWriteContainer>
      <WriterWriteContainer>
        <Writer editorRef={editorRef} />
      </WriterWriteContainer>
      <ButtonContainer>
        <BacktoButton onClick={() => history.push(`/postList=${categoryId}`)}>
          목록으로
        </BacktoButton>
        <SubmitButton onClick={handleClick}>등록하기</SubmitButton>
      </ButtonContainer>
    </Maindiv>
  );
};

export default NewPost;
