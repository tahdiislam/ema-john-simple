import React from 'react';
import { CartPlus } from 'react-bootstrap-icons';
import './Product.css'

const Product = ({handlerAddToCart, product}) => {
    const { name, price, img, seller, ratings} = product;
    return (
      <div className="product-card">
        <img src={img} alt="Product Images" srcSet="" />
        <div className="product-info">
          <p>{name}</p>
          <p>Price: ${price}</p>
          <p>
            <small>Manufacturer: {seller}</small>
          </p>
          <p>
            <small>Rating: {ratings}</small>
          </p>
        </div>
        <button
          onClick={() => handlerAddToCart(product)}
          className="add-cart-btn"
        >
          <p>Add to Cart</p>
          <div>
            <CartPlus size={20} />
          </div>
        </button>
      </div>
    );
};

export default Product;