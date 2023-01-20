import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Tittle"
          name="title"
        />
        <input
          type="text"
          placeholder="Author"
          name="title"
        />
      </form>
    );
  }
}
export default Form;