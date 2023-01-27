import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = { books: bookSlice, categories: categoriesReducer };

const store = configureStore({ reducer: rootReducer });

export default store;
