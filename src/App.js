import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </>
    );
  }
}
export default App;
