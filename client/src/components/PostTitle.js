import {
  PostTitleBox,
  PTitle,
  SearchBox,
  SearchText,
  SearchIcon
} from './PostTitle.style';
const PostTitle = ({ categoryTitle, categoryLength }) => {
  return (
    <PostTitleBox>
      <PTitle>{categoryTitle} 게시판</PTitle>
      <SearchBox>
        <SearchText type="text" />
        <SearchIcon className="fas fa-search" />
      </SearchBox>
    </PostTitleBox>
  );
};
export default PostTitle;
