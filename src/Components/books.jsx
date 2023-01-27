import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import Form from './form';
import { getData } from '../redux/books/books';

export default function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      <ul>
        <Book books={books} />
      </ul>
      <div>
        <Form />
      </div>
    </>
  );
}
