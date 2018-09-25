import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductListContainer } from '../containers/ProductListingContainer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Cart</h1>
        </header>
        <b>Listing des produits</b>
        <ProductListContainer />
      </div>
    );
  }
}

export default App;
