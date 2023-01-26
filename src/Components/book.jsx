import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { books } = this.props;
    return (
      books.map((book) => (
        <li key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <button type="button">Remove</button>
        </li>
      ))
    );
  }
}

Book.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};

export default Book;
