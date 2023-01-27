import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const getData = createAsyncThunk('bookstore/books/GET_BOOKS', async () => fetch(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RWtYzZRZdkOMrjjdxWSg/books',
).then((res) => res.json()));

// Action creators
export const addBook = createAsyncThunk(ADD_BOOK, async (book) => fetch(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RWtYzZRZdkOMrjjdxWSg/books',
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: uuidv4(),
      title: book.title,
      author: book.author,
      category: 'TBD',
    }),
  },
).then(() => {
  const newbook = {
    ...book, item_id: book.id,
  };
  return newbook;
}));

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => fetch(
  `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RWtYzZRZdkOMrjjdxWSg/books/${id}`,
  {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${id}`,
    }),
  },
).then(() => id));

// Reducer
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    books: [],
    loading: false,
  },
  extraReducers: {
    [getData.pending]: (state) => {
      const currentState = state;
      currentState.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      const currentState = state;
      currentState.loading = false;
      const data = action.payload;
      const books = Object.keys(data).map((key) => ({
        item_id: key,
        ...data[key][0],
      }));
      currentState.books = books;
    },
    [getData.rejected]: (state) => {
      const currentState = state;
      currentState.loading = false;
    },
    [addBook.fulfilled]: (state, action) => {
      const currentState = state;
      const newBook = {
        ...action.payload,
        category: 'TBD',
      };
      currentState.books = [...state.books, newBook];
    },
    [removeBook.fulfilled]: (state, { payload }) => {
      const currentState = state;
      const filtered = state.books.filter((item) => item.item_id !== payload);
      currentState.books = filtered;
    },
  },
});

export default dataSlice.reducer;
