import { Listdiv, Title } from './Lists.style';
import { useHistory } from 'react-router-dom';
import OnePost from '../pages/onePost';

const Lists = ({ post }) => {
  const history = useHistory();
  return (
    <Listdiv>
      <Title
        onClick={() => {
          history.push({
            pathname: `/onePost/${post.id}`,
            state: { post: post }
          });
        }}
      >
        {post.title}
      </Title>
      <span>{new Date(post.createdAt).toLocaleDateString('ko-kr')}</span>
      <span>{post.views}</span>
      <span>{post.suggestions}</span>
    </Listdiv>
  );
};

export default Lists;
