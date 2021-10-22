import { Listdiv, Title } from './Lists.style';
import { Stylelink } from '../pages/main.style';
import { useHistory } from 'react-router-dom';
import OnePost from '../pages/onePost';

const Lists = ({ post, categorTitle }) => {
  const history = useHistory();
  return (
    <Listdiv>
      <Stylelink to={`/onePost/${post.id}`}>
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
      <span>{new Date(post.createdAt).toLocaleDateString('ko-kr')}</span>
      <span>{post.views}</span>
      <span>{post.suggestions}</span>
    </Listdiv>
  );
};

export default Lists;
