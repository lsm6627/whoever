import {
  PostTitleBox,
  PTitle,
  PostCount,
  SearchBox,
  SearchText,
  SearchIcon
} from './PostTitle.style';

const PostTitle = ({ categorTitle, categorLength }) => {
  return (
    <PostTitleBox>
      <PTitle>
        {categorTitle} 게시판 <PostCount>{categorLength}</PostCount>
      </PTitle>
      <SearchBox>
        <SearchText type="text" />
        <SearchIcon className="fas fa-search"></SearchIcon>
      </SearchBox>
    </PostTitleBox>
  );
};

export default PostTitle;
