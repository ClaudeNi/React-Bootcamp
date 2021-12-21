import React from "react";
import storeData from "../store";
import { Link } from "react-router-dom";

class Products extends React.Component {
  state = { data: [] };

  componentDidMount() {
    this.setState({ data: storeData });
  }

  displayProductsTitles = () => {
    return this.state.data.map((product) => {
      return (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="product-item"
        >
          {product.title}
        </Link>
      );
    });
  };

  render() {
    return <div className="products">{this.displayProductsTitles()}</div>;
  }
}

export default Products;
