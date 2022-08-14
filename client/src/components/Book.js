import BookInfo from './BookInfo';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';
import { GiWhiteBook } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deleteBook, setEditBook } from '../features/book/bookSlice';

const Book = ({
  _id,
  bookName,
  pageNumber,
  bookType,
  bookAuthor,
  status,
  createdAt,
}) => {
  const dispatch = useDispatch();

  const date = moment(createdAt).format('MMM Do YYYY'); // createdAt is coming from the server

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{bookName.charAt(0)}</div>
        <div className="info">
          <h5>{bookName}</h5>
          <p>{bookAuthor}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <BookInfo icon={<BsBook />} text={pageNumber} />
          <BookInfo icon={<FaCalendarAlt />} text={date} />
          <BookInfo icon={<GiWhiteBook />} text={bookType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-book"
              className="btn edit-btn"
              onClick={() =>
                dispatch(
                  setEditBook({
                    editBookId: _id,
                    bookName,
                    pageNumber,
                    bookType,
                    bookAuthor,
                    status,
                  })
                )
              }
            >
              edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => dispatch(deleteBook(_id))}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Book;
