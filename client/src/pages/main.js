import { useState } from 'react';
import {
  Listdiv,
  Maindiv,
  Boardtitle,
  BoardContent,
  Title,
  List,
  Listtitle,
  CreatedDate
} from '../pages/main.style';
import { initialState } from '../assets/state';

const Main = () => {
  const [posts, setPosts] = useState(initialState.posts);
  const [categories, setCategories] = useState(initialState.categories);

  // console.log(categories);
  return (
    <Maindiv>
      {categories.map((els) => (
        <Listdiv>
          <Boardtitle>
            <Title>{els.content}</Title>
          </Boardtitle>
          <BoardContent>
            {posts
              .filter((el) => el.categoryId === els.id)
              .map((el) => (
                <List>
                  <Listtitle>{el.title}</Listtitle>
                  <CreatedDate>
                    {new Date(el.createdAt).toLocaleDateString('ko-kr')}
                  </CreatedDate>
                </List>
              ))}
          </BoardContent>
        </Listdiv>
      ))}
    </Maindiv>
  );
};

export default Main;

// 초기에 보이는 페이지로 한다. //
// componants 를 띄우는 용도로 한다.

// MainList.js를 나오게 박아버린다. //

// map으로 나눈다!
