import {
  Listdiv,
  ListTitleContainer,
  Title,
  ListCreatedAtContainer,
  ListDataCreatedAt,
  ListViewsContainer,
  ListDataViews,
  ListSuggContainer,
  ListDataSugg
} from './Lists.style';
import { Stylelink } from '../pages/main.style';
import OnePost from '../pages/onePost';

const Lists = ({ post }) => {
  return (
    <Listdiv>
      <ListTitleContainer>
        <Stylelink to={`/onePost=${post.id}`}>
          <Title
          // onClick={() => {
          //   history.push({
          //     pathname: `/onePost/${post.id}`,
          //     state: { post: post, categorTitle: categorTitle }
          //   });
          // }}
          >
            {post.title}
          </Title>
        </Stylelink>
      </ListTitleContainer>
      <ListCreatedAtContainer>
        <ListDataCreatedAt>
          {new Date(post.createdAt).toLocaleDateString('ko-kr')}
        </ListDataCreatedAt>
      </ListCreatedAtContainer>
      <ListViewsContainer>
        <ListDataViews>{post.views}</ListDataViews>
      </ListViewsContainer>
      <ListSuggContainer>
        <ListDataSugg>{post.suggestions}</ListDataSugg>
      </ListSuggContainer>
    </Listdiv>
  );
};

export default Lists;
