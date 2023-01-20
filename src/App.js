import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navBar';
import Books from './Components/books';
import Categories from './Components/categories';

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
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </>
    );
  }
}
export default App;
