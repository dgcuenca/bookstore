import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = { books: booksReducer, categories: categoriesReducer };

const store = configureStore({ reducer: rootReducer });

export default store;
