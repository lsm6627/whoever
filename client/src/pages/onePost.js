/*한가지 게시글을 보는 페이지*/
import { useState } from 'react';
import { useLocation } from 'react-router';
import {} from '../pages/onePost.style';

const OnePost = ({}) => {
  const location = useLocation();
  const { post } = location.state;
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.createdAt}</div>
      <div>{post.content}</div>
    </div>
  );
};

export default OnePost;
