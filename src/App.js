import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Component-container">
          <ProductList />
          <hr />
          <ShoppingCart />

          {/* Shopping cart and Product list should go here */}
        </div>
      </div>
    );
  }
}

export default App;
