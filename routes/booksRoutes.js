import express from 'express';
const router = express.Router();

import {
  createBook,
  deleteBook,
  getAllBooks,
  updateBook,
} from '../controllers/booksController.js';

router.route('/').post(createBook).get(getAllBooks);
router.route('/:id').delete(deleteBook).patch(updateBook);

export default router;
