import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import Form from './form';

export default function Books() {
  const books = useSelector((state) => state.books);

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
