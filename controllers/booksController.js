import Book from '../models/Book.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';

const createBook = async (req, res) => {
  const { bookAuthor, bookName } = req.body;

  if (!bookAuthor || !bookName) {
    throw new BadRequestError('Please provide all values.');
  }
  req.body.createdBy = req.user.userId;
  const book = await Book.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });
};

const getAllBooks = async (req, res) => {
  const { status, bookType, sort, search } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  // add stuff based on condition
  // status param:
  if (status !== 'all') {
    queryObject.status = status;
  }

  // jobType param:
  if (bookType !== 'all') {
    queryObject.bookType = bookType;
  }

  // search param:
  if (search) {
    // MongoDB syntax for search query. 'i' means insensitive.
    queryObject.bookAuthor = { $regex: search, $options: 'i' };
  }

  // NO AWAIT
  // should initialized before sorting params
  let result = Book.find(queryObject);

  // chain sort conditions:
  // * There is no limitations; only sorting.
  // https://mongoosejs.com/docs/api/query.html#query_Query-sort
  if (sort === 'latest') {
    result = result.sort('-createdAt');
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt');
  }
  if (sort === 'a-z') {
    result = result.sort('bookName');
  }
  if (sort === 'z-a') {
    result = result.sort('-bookName');
  }

  // pagination setup
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const books = await result;

  const totalBooks = await Book.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalBooks / limit);

  res.status(StatusCodes.OK).json({ books, totalBooks, numOfPages });
};

const updateBook = async (req, res) => {
  const { id: bookId } = req.params;
  const { bookName, bookAuthor } = req.body;

  if (!bookAuthor || !bookName) {
    throw new BadRequestError('Please provide all values.');
  }

  const book = await Book.findOne({ _id: bookId });

  if (!book) {
    throw new NotFoundError(`No book with id: ${bookId}`);
  }

  // check permissions
  checkPermissions(req.user, book.createdBy);

  const updatedBook = await Book.findOneAndUpdate({ _id: bookId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ updatedBook });
};

const deleteBook = async (req, res) => {
  const { id: bookId } = req.params;

  const book = await Book.findOne({ _id: bookId });

  if (!book) {
    throw new NotFoundError(`No book with id: ${bookId}`);
  }
  checkPermissions(req.user, book.createdBy);

  await book.remove();

  res.status(StatusCodes.OK).json({ msg: 'Success! Book removed.' });
};

const showStats = async (req, res) => {
  res.send('show stats');
};

export { createBook, deleteBook, getAllBooks, updateBook, showStats };
