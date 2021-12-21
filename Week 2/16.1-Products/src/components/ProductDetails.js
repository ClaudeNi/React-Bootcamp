import React from "react";
import { Link, useParams } from "react-router-dom";
import storeData from "../store";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="product-details">
      <div className="product-detail-item product-name">
        {storeData[id - 1].title}
      </div>
      <div className="product-img">
        <img src={storeData[id - 1].imageUrl} alt={storeData[id - 1].title} />
      </div>
      <div className="product-detail-item">
        <span className="product-subtitle">Price: </span>
        {storeData[id - 1].price}
      </div>
      <div className="product-detail-item">
        <span className="product-subtitle">Size: </span>
        {storeData[id - 1].size}
      </div>
      <Link to="/products">
        <span className="btn">Back</span>
      </Link>
    </div>
  );
};

export default ProductDetails;
