import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Orders.css'

const Orders = () => {
    const cart = useNavigate()
    console.log(cart);
    return (
        <div>
            <h1>Order length: {cart.length}</h1>
        </div>
    );
};

export default Orders;