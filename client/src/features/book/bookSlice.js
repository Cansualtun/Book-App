import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { createBookThunk, deleteBookThunk, editBookThunk } from './bookThunk';

const initialState = {
  isLoading: false,
  bookAuthor: '',
  bookName: '',
  pageNumber: '',
  bookTypeOptions: ['fiction', 'nonfiction', 'drama', 'poetry', 'folktale'],
  bookType: 'fiction',
  statusOptions: ['reading', 'finished', 'to be read'],
  status: 'reading',
  isEditing: false,
  editBookId: '',
};

export const createBook = createAsyncThunk('book/createBook', createBookThunk);
export const deleteBook = createAsyncThunk('book/deleteBook', deleteBookThunk);
export const editBook = createAsyncThunk('book/editBook', editBookThunk);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
    setEditBook: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: {
    [createBook.pending]: (state) => {
      state.isLoading = true;
    },
    [createBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      toast.success('Book Created');
    },
    [createBook.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteBook.fulfilled]: (state, { payload }) => {
      toast.success(payload);
    },
    [deleteBook.rejected]: (state, { payload }) => {
      toast.error(payload);
    },
    [editBook.pending]: (state) => {
      state.isLoading = true;
    },
    [editBook.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('Book Modified.');
    },
    [editBook.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { handleChange, clearValues, setEditBook } = bookSlice.actions;

export default bookSlice.reducer;
