import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[
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
      <div>BOOK</div>
    );
  }
}
export default Book;
