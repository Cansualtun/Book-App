import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import bookSlice from './features/book/bookSlice';
import allBooksSlice from './features/allBooks/allBooksSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    book: bookSlice,
    allBooks: allBooksSlice,
  },
});
