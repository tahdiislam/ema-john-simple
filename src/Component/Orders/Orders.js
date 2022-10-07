import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    // console.log(initialCart);
    const [ cart, setCart ] = useState(initialCart);
    // console.log(cart);
    // delete cart
    const deleteShoppingCart = () => {
        console.log('Hello World');
    }
    return (
      <div className="shop-container">
        <div className="products-container">
            {
                cart.map(product => <ReviewItem key={product.id} product={product}/>)
            }
        </div>
        <div className="cart-container">
          <Cart cart={cart} deleteShoppingCart={deleteShoppingCart}/>
        </div>
      </div>
    );
};

export default Orders;