import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  PostTitleBox,
  PTitle,
  SearchBox,
  SearchText,
  SearchIcon
} from './PostTitle.style';

const PostTitle = ({ categoryId, categoryTitle, categoryLength }) => {
  const [keyword, setKeyword] = useState('');
  
  const searchHandler = () => {
    axios
      .get(
        'http://localhost:4000/searchpage',
        { keyword: keyword, categoryId: categoryId },
        { withCredentials: true }
      )
      .then((res) => {
  //       loginHandler(res.data);
        setKeyword('')
      })
      .catch((err) => {
        alert('잘못된 요청입니다');
      });
  };

  useEffect(() => {
    axios
    .post('http://localhost:4000/listpage',
    { keyword: keyword, categoryId: categoryId })
    .then((res) => {

    })
  }, [])

  return (
    <PostTitleBox>
      <PTitle>{categoryTitle} 게시판</PTitle>
      <SearchBox>
        <SearchText type="text" />
        <SearchIcon className="fas fa-search" onClick={searchHandler} />
      </SearchBox>
    </PostTitleBox>
  );
};
export default PostTitle;
