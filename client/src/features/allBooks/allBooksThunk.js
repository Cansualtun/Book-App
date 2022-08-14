import customFetch from '../../utils/axios';
import authHeader from '../../utils/authHeader';

export const getAllBooksThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allBooks;
  let url = `/books?status=${searchStatus}&bookType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url, authHeader(thunkAPI));
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
