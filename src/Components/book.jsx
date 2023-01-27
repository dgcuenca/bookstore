import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { books } = props;
  const dispatch = useDispatch();

  function removeHandler(bookId) {
    dispatch(removeBook(bookId));
  }
  return (
    books.map((book) => (
      <li key={book.item_id}>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <button
          type="button"
          onClick={() => removeHandler(book.item_id)}
        >
          Remove
        </button>
      </li>
    ))
  );
};

Book.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};

export default Book;
