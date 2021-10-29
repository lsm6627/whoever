import { useState, useRef } from 'react';
import Writer from '../components/Writer';
import {
  Maindiv,
  TitleWriteContainer,
  TitleBox,
  Title,
  WriterWriteContainer,
  WriterBox,
  ContentContainer,
  ContentBox,
  Content,
  ButtonContainer,
  SubmitButton,
  BacktoButton
} from '../pages/newPost.style';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const NewPost = ({ match, posts, setPosts, userInfo }) => {
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
    // const getContent = editorInstance.getMarkdown();
    const gethtml = editorInstance.getHTML();
    if (!gethtml) {
      alert('게시물을 작성해주세요');
      return;
    }
    axios
      .post('http://localhost:4000/uploadpost', {
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

    // const addPost = {
    //   id: posts.length + 1,
    //   userId: 1,
    //   img: '',
    //   categoryId: categoryId,
    //   title: title,
    //   content: gethtml,
    //   views: 1,
    //   suggestions: 3,
    //   createdAt: '2021-10-12T16:17:27.000Z',
    //   updatedAt: '2021-10-12T16:17:27.000Z'
    // };
    // setPosts([...posts, addPost]);
    // history.push(`/postList=${categoryId}`);
  };

  return (
    <Maindiv>
      <TitleWriteContainer>
        {/* <TitleBox>제목</TitleBox> */}
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
        {/* <WriterBox>작성자</WriterBox> */}
        {/* <Writer> 작성칸</Writer> */}
      </WriterWriteContainer>
      {/* <ContentContainer>
        <ContentBox>내용</ContentBox>
        <Content>내용 작성칸</Content>
      </ContentContainer> */}
      {/* <UploadContainer>
        <UploadBox>
          <UploadFile>사진 불러오기</UploadFile>
          <UploadButton>첨부</UploadButton>
        </UploadBox>
      </UploadContainer> */}
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
