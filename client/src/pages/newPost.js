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

const NewPost = () => {
  return (
    <Maindiv>
      <TitleWriteContainer>
        {/* <TitleBox>제목</TitleBox> */}
        <Title type="text" placeholder="제목을 작성해주세요" />
      </TitleWriteContainer>
      <WriterWriteContainer>
        <Writer />
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
