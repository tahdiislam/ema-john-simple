import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Orders.css'

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    // console.log(products);
    return (
        <div>
            <h1>Order length: {products.length}</h1>
            <h1>Cart length: {initialCart.length}</h1>
        </div>
    );
};

export default Orders;