import { useState } from 'react';
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
  ButtonBox,
  SubmitButton,
  BacktoButton
} from '../pages/newPost.style';

const NewPost = ({ match }) => {
  const categoryId = Number(match.params.no);
  const [title, setTitle] = useState('');
  const handlepostTest = (getPost) => {
    // userId: 1,
    //   img: '../images/jyp.png',
    //   categoryId: 1,
    //   title: '여행을 떠나요~~!',
    //   content:

    console.log(
      `userId: 1, title:${title}, 카테고리번호:${categoryId}, content:${getPost}`
    );
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
        <Writer handlepostTest={handlepostTest} />
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
        <ButtonBox>
          <SubmitButton>등록하기</SubmitButton>
          <BacktoButton>목록으로</BacktoButton>
        </ButtonBox>
      </ButtonContainer>
    </Maindiv>
  );
};

export default NewPost;
