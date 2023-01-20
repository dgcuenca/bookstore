import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          gender: "Action",
          title: "The Hunger Games",
          author: "Suzanne Collins",
          button1: "Comments",
          button2: "Remove",
          button3: "Edit",
          chapter: "CURRENT CHAPTER",
          numberChapter: "Chapter 17",
          button4: "UPDATE PROGRESS",
        }
      ],
    };
  }

  render() {
    return (
      <ul>
      {this.state.books.map(todo => (
        <li>{todo.title}</li>
      ))}
    </ul>
    );
  }
}
export default Books;

Books.propTypes = {
  id: PropTypes.number,
  gender: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  button1: PropTypes.string,
  button2: PropTypes.string,
  button3: PropTypes.string,
  chapter: PropTypes.string,
  numberChapter: PropTypes.string,
  button4: PropTypes.string,
};
