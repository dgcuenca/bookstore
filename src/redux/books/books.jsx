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
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_BOOK: {
      return [
        ...state,
        action.book,
      ];
    }

    case REMOVE_BOOK: {
      return state.filter((item) => item.id !== action.id);
    }

    default: return state;
  }
}

// Action creators
export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function removeBook(bookId) {
  return {
    type: REMOVE_BOOK,
    id: bookId,
  };
}
