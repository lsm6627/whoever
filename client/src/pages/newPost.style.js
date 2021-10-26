import styled from 'styled-components';

export const Maindiv = styled.div`
  /* border: solid 2px blue; */
  display: flex;
  flex-direction: column;
  width: 70vw;
  /* height: 92%; */
  margin-top: 40px;
  margin: 50px auto;
  /* padding: 15px; */
  min-width: 450px;
`;

export const TitleWriteContainer = styled.div`
  /* border: solid 2px green; */
  /* width: 100%; */
  /* height: 300px; */
`;

export const TitleBox = styled.div`
  /* border: solid 2px green; */
  width: 100%;
  height: 100px;
`;

export const Title = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  border-bottom: 2px solid gray;
  font-size: 26px;
  margin-bottom: 10px;
  outline: none;
`;

export const WriterWriteContainer = styled.div`
  /* border: solid 2px green; */
  width: 100%;
`;

export const WriterBox = styled.div`
  border: solid 2px red;
  width: 100%;
  height: 100px;
`;

export const Writer = styled.div`
  border: solid 2px red;
  width: 100%;
  height: 200px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 600px;
`;

export const ContentBox = styled.div`
  border: solid 2px purple;
  width: 100%;
  height: 100px;
`;

export const Content = styled.div`
  border: solid 2px purple;
  width: 100%;
  height: 500px;
`;

// export const UploadContainer = styled.div``;

// export const UploadBox = styled.div`
// border: solid 2px black;
// width: 100%;
// height: 100px;`;

// export const UploadFile = styled.div``;

// export const UploadButton = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;

export const BacktoButton = styled.button`
  background: #fffffc;
  border: solid 5px #ffad4999;
  border-radius: 15px;
  height: 55px;
  cursor: pointer;
  transition: 300ms ease all;
  box-shadow: gray 2px 2px 2px;
  padding: 10px;
  min-width: 100px;
  text-align-last: center;
  margin-top: 38px;
  font-family: 'MaplestoryOTFBold';
  margin-right: 40px;

  &:hover {
    box-shadow: gray 6px 6px 6px;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    transition: ease all;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: ease all;
  }

  &:active {
    box-shadow: none;
  }
`;

export const SubmitButton = styled.button`
  background: #fffffc;
  border: solid 5px #ffad4999;
  border-radius: 15px;
  height: 55px;
  cursor: pointer;
  transition: 300ms ease all;
  box-shadow: gray 2px 2px 2px;
  padding: 10px;
  min-width: 100px;
  text-align-last: center;
  margin-top: 38px;
  font-family: 'MaplestoryOTFBold';
  margin-right: 40px;

  &:hover {
    box-shadow: gray 6px 6px 6px;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    transition: ease all;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: ease all;
  }

  &:active {
    box-shadow: none;
  }
`;

export const ButtonBox = styled.div``;
