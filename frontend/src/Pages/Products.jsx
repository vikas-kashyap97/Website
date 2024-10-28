
import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; // Create a CSS file for styling

const Products = () => {
  return (
    <div className='products'>
      <h1>Our Product Categories</h1>
      <div className="product-category">
        <Link to="/Girls Fashion" className="product-box">
          <h2>Girls Fashion</h2>
        </Link>
        <Link to="/Boys Fashion" className="product-box">
          <h2>Boys Fashion</h2>
        </Link>
        <Link to="/Boys Footwear" className="product-box">
          <h2>Boys Footwear</h2>
        </Link>
        <Link to="/Girls Footwear" className="product-box">
          <h2>Girls Footwear</h2>
        </Link>
        <Link to="/Toys" className="product-box">
          <h2>Toys</h2>
        </Link>
        <Link to="/Essential" className="product-box">
          <h2>Essential</h2>
        </Link>
      </div>
    </div>
  );
};

export default Products;