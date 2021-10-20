/* 게시글 작성하는 페이지로 한다.*/
import { useState } from 'react';
import {Maindiv, TitleWriteContainer, TitleBox, Title, WriterWriteContainer, 
        WriterBox, Writer, ContentContainer, ContentBox, Content, ButtonContainer, ButtonBox, SubmitButton, BacktoButton} from '../pages/newPost.style';

const NewPost = () => {
  return (
    <Maindiv>
      <TitleWriteContainer>
        <TitleBox>제목</TitleBox>
          <Title>제목 작성칸</Title>
      </TitleWriteContainer>
      <WriterWriteContainer>
        <WriterBox>작성자</WriterBox>
        <Writer>작성자 작성칸</Writer>
      </WriterWriteContainer>
      <ContentContainer>
        <ContentBox>내용</ContentBox>
          <Content>내용 작성칸</Content>
      </ContentContainer>
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
 
  )
};

export default NewPost;
