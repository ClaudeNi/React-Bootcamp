import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header-item">
        HomePage
      </Link>
      <Link to="/products" className="header-item">
        Products
      </Link>
    </div>
  );
};

export default Header;
