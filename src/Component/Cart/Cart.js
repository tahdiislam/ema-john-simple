import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // console.log(cart)
    let productQuantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        // console.log(product)
        productQuantity += product.quantity;
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
    }
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + totalShipping + tax;
    return (
      <div className="cart">
        <h3>Order Summary</h3>
        <div>
          <p>Selected Items: {productQuantity}</p>
          <p>Total Price: ${totalPrice}</p>
          <p>Total Shipping Charge: ${totalShipping}</p>
          <p>Total Tax: ${tax}</p>
          <h3>Grand Total: ${grandTotal}</h3>
        </div>
      </div>
    );
};

export default Cart;