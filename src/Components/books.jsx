// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Book from './book';
import Form from './form';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: 'The Hunger Games',
          author: 'Suzanne Collins',
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
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
}
export default Books;

// Books.propTypes = {
//   id: PropTypes.number,
//   title: PropTypes.string,
//   author: PropTypes.string,
// };
