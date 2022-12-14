import React, { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  // console.log(initialCart);
  const [cart, setCart] = useState(initialCart);
  // console.log(cart);
  // delete cart
  const deleteShoppingCart = () => {
    localStorage.removeItem("shopping-cart");
    removeFromDb();
    setCart([]);
  };
  // delete specific product
  const deleteProduct = (id) => {
    console.log(id);
    const filterProduct = cart.filter((product) => product._id !== id);
    setCart(filterProduct);
    removeFromDb(id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {cart.map((product) => (
          <ReviewItem
            deleteProduct={deleteProduct}
            key={product._id}
            product={product}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} deleteShoppingCart={deleteShoppingCart}>
          <Link to="/shipping">
            <button className="review-cart-btn">
              <span>Shipping</span>
              <ArrowRight className="cart-btn-icon" />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
