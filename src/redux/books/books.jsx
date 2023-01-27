// import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
// const defaultState = [
//   {
//     id: uuidv4(),
//     title: 'Atomic Habits',
//     author: 'James Clear',
//   },
//   {
//     id: uuidv4(),
//     title: 'Emotional Intelligence',
//     author: 'Daniel Goleman',
//   },
// ];
export const getData = createAsyncThunk('bookstore/books/GET_BOOKS', async () => fetch(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RWtYzZRZdkOMrjjdxWSg/books',
).then((res) => res.json()));

// Reducer
// export default function reducer(state = defaultState, action = {}) {
//   switch (action.type) {
//     case ADD_BOOK: {
//       return [
//         ...state,
//         action.book,
//       ];
//     }

//     case REMOVE_BOOK: {
//       return state.filter((item) => item.id !== action.id);
//     }

//     default: return state;
//   }
// }

// Action creators
export const addBook = createAsyncThunk(ADD_BOOK, async (book) => fetch(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RWtYzZRZdkOMrjjdxWSg/books',
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${book.item_id}`,
      title: book.title,
      author: book.author,
      category: 'TBD',
    }),
  },
).then(() => {
  const newbook = {
    ...book,
  };
  return newbook;
}));

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => fetch(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RWtYzZRZdkOMrjjdxWSg/books/${id}',
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
      const data = {...action.payload};
      currentState.books = data;
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