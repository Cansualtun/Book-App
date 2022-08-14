import {
  showLoading,
  hideLoading,
  getAllBooks,
} from '../allBooks/allBooksSlice';
import customFetch from '../../utils/axios';
import { clearValues } from './bookSlice';
import { logoutUser } from '../user/userSlice';
import authHeader from '../../utils/authHeader';

export const createBookThunk = async (book, thunkAPI) => {
  try {
    const resp = await customFetch.post('/books', book, authHeader(thunkAPI));
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const deleteBookThunk = async (bookId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(
      `/books/${bookId}`,
      authHeader(thunkAPI)
    );
    thunkAPI.dispatch(getAllBooks());
    return resp.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const editBookThunk = async ({ bookId, book }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/books/${bookId}`, book, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
