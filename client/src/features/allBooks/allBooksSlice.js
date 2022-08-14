import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllBooksThunk } from './allBooksThunk';

const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: true,
  books: [],
  totalBooks: 0,
  numOfPages: 1,
  page: 1,
  ...initialFiltersState,
};

export const getAllBooks = createAsyncThunk(
  'allBooks/getBooks',
  getAllBooksThunk
);

const allBooksSlice = createSlice({
  name: 'allBooks',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: {
    [getAllBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllBooks.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.books = payload.books;
      state.numOfPages = payload.numOfPages;
      state.totalBooks = payload.totalBooks;
    },
    [getAllBooks.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
} = allBooksSlice.actions;

export default allBooksSlice.reducer;
