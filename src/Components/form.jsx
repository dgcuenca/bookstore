import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = (props) => {
  const { title, author } = props;
  const [newtitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(author);
  const dispatch = useDispatch();

  function validateNewbook() {
    if (!newtitle.trim() || !newAuthor.trim()) return;
    const newBook = { id: uuidv4(), title: newtitle, author: newAuthor };
    dispatch(addBook(newBook));
    setNewTitle('');
    setNewAuthor('');
  }

  return (
    <>
      <h2>
        ADD NEW BOOK
      </h2>
      <form className="form">
        <input
          type="text"
          placeholder="Tittle"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newtitle}
          name="title"
          className="inputForm"
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setNewAuthor(e.target.value)}
          value={newAuthor}
          name="author"
          className="inputForm"
        />
        <button
          type="button"
          onClick={() => validateNewbook()}
        >
          ADD BOOK
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Form.defaultProps = {
  title: '',
  author: '',
};

export default Form;
