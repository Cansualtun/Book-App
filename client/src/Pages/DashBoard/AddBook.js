import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  handleChange,
  clearValues,
  createBook,
  editBook,
} from '../../features/book/bookSlice';
const AddBook = () => {
  const {
    isLoading,
    bookAuthor,
    bookName,
    pageNumber,
    bookType,
    bookTypeOptions,
    status,
    statusOptions,
    isEditing,
    editBookId,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookAuthor || !bookName || !pageNumber) {
      toast.error('Please fill out all fields');
      return;
    }
    if (isEditing) {
      dispatch(
        editBook({
          bookId: editBookId,
          book: { bookAuthor, bookName, pageNumber, bookType, status },
        })
      );
      return;
    }
    dispatch(
      createBook({ bookAuthor, bookName, pageNumber, bookType, status })
    );
  };

  const handleBookInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit book' : 'add book'}</h3>
        <div className="form-center">
          {/* bookAuthor */}
          <FormRow
            type="text"
            name="bookAuthor"
            labelText="book author"
            value={bookAuthor}
            handleChange={handleBookInput}
          />
          {/* bookName */}
          <FormRow
            type="text"
            name="bookName"
            labelText="book name"
            value={bookName}
            handleChange={handleBookInput}
          />
          {/* pageNumber */}
          <FormRow
            type="number"
            min="0"
            name="pageNumber"
            labelText="page number"
            value={pageNumber}
            handleChange={handleBookInput}
          />
          {/* status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleBookInput}
            list={statusOptions}
          />
          {/* book type*/}
          <FormRowSelect
            name="bookType"
            labelText="book type"
            value={bookType}
            handleChange={handleBookInput}
            list={bookTypeOptions}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddBook;
