import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      this.props.books.map(book => (
        <li key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <button type="button">Remove</button>
        </li>
      ))
    );
  }
}
export default Book;