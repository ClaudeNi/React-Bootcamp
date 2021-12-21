import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import "./App.css";
import "./components/components.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={Products} />
          <Route path="/product/:id" exact component={ProductDetails} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
