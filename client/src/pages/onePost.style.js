import styled from 'styled-components';

export const Maindiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 70vw;
  height: 92%;
`;

export const PostTitleBox = styled.div`
  display: flex;
  font-size: 35px;
`;

export const PostTitle = styled.div`
  border-bottom: solid 5px #ffad4f;
  padding-bottom: 3px;
  margin-bottom: 20px;
  margin-top: 40px;
  font-family: 'twayair';
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 25px;
  padding: 25px;
  background-color: #fdcb6e;
  border-top: 3px solid black;
`;

export const Title_Post = styled.div`
  margin-top: 25px;
  margin-left: 20px;
  font-size: 30px;
  font-family: 'MaplestoryOTFBold';
  padding-bottom: 10px;
`;

export const CreatedAt_Post = styled.div`
  flex: 1 1 auto;
  font-family: 'twayair';
`;

export const Hit_Post = styled.div`
  flex: 0 0 auto;
  font-family: 'twayair';
`;

export const Post_Content = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  height: fit-content;
`;

export const But_Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  margin: 20px;
`;

export const But_Suggestion_Up = styled.button`
  background-color: #fdcb6e;
  border: 3px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: 'twayair';
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:active {
    background-color: #f7f7f7;
    border-color: #000000;
    transform: scale(0.96);
  }

  &:disabled {
    border-color: #dddddd;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }
`;

export const But_Suggestion_Down = styled.button`
  background-color: #fdcb6e;
  border: 3px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: 'twayair';
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:active {
    background-color: #f7f7f7;
    border-color: #000000;
    transform: scale(0.96);
  }

  &:disabled {
    border-color: #dddddd;
    color: #dddddd;
    cursor: not-allowed;
    opacity: 1;
  }
`;

export const CommentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #fdcb6e;
  font-size: 23px;
  padding: 5px;
  padding-left: 10px;
  border-radius: 8px;
  margin-top: 120px;
`;

export const Comment_createdBy = styled.div`
  font-family: 'twayair';
`;
export const Comment_createAt = styled.div`
  font-family: 'twayair';
  font-size: 20px;
  margin-right: 10px;
`;

export const Comment_content = styled.div`
  padding: 15px;
`;
