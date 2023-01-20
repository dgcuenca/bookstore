import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
       {this.state.books.map(todo => (
        <li>{todo.title}</li>
      ))}
      </>
    );
  }
}
export default Book;