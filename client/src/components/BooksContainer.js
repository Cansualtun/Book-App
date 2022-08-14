import Book from './Book';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/JobsContainer';
import Loading from './Loading';
import { getAllBooks } from '../features/allBooks/allBooksSlice';
import PageBtnContainer from './PageBtnContainer';

const BooksContainer = () => {
  const {
    books,
    isLoading,
    totalBooks,
    numOfPages,
    page,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading />;
  }

  if (books.length === 0) {
    return (
      <Wrapper>
        <h2>No books to display.</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalBooks} book{books.length > 1 && 's'} found
      </h5>
      <div className="jobs">
        {books.map((book) => {
          return <Book key={book._id} {...book} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default BooksContainer;
