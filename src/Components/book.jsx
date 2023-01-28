import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { books } = props;
  const dispatch = useDispatch();
  const styleLoad = { color: 'blue', fontSize: '7rem' };

  function removeHandler(bookId) {
    dispatch(removeBook(bookId));
  }
  return (
    books.map((book) => (
      <li key={book.item_id}>
        <div className="container1">
          <p className="gender">Gender</p>
          <h2>{book.title}</h2>
          <p className="author">{book.author}</p>
          <div className="buttonContainer">
            <button
              type="button"
            >
              Comments
            </button>
            <hr className="buttonSeparator" />
            <button
              type="button"
              onClick={() => removeHandler(book.item_id)}
            >
              Remove
            </button>
            <hr className="buttonSeparator" />
            <button
              type="button"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="container2">
          <div className="pushContainer">
            <AiOutlineLoading3Quarters style={styleLoad} />
          </div>
          <div>
            <p className="percentage">xx%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <hr className="mainSeparator" />
        <div className="container3">
          <p className="chapter">CURRENT CHAPTER</p>
          <p className="chapterNumber"> Chapter ##</p>
          <button
            type="button"
          >
            UPDATE PROGRESS
          </button>
        </div>
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
