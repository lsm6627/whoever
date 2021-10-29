import axios from 'axios';
import {
  PostTitleBox,
  PTitle,
  SearchBox,
  SearchText,
  SearchIcon
} from './PostTitle.style';
const PostTitle = ({ categoryTitle, categoryLength }) => {

  const searchHandler = () => {
  
    axios
      .get(
        'http://localhost:4000/searchpage',
        { keyword: keyword, categoryId: categoryId },
        { withCredentials: true }
      )
      .then((res) => {
  //       loginHandler(res.data);
  //       openModalHandler();
      })
      .catch((err) => {
        alert('잘못된 요청입니다');
      });
  };

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
