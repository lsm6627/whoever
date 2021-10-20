import { PagiNumber } from './Pagination.style';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.map((number) => (
        <PagiNumber key={number} onClick={() => paginate(number)}>
          {number}
        </PagiNumber>
      ))}
    </>
  );
};

export default Pagination;
