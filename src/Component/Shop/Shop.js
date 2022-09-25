import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
    },[])

    const handlerAddToCart = product => {
      console.log(product)
    }

    return (
      <section className="shop-container">
        <div className="products">
          {products.map((product) => (
            <Product 
            key={product.id} 
            product={product}
            handlerAddToCart={handlerAddToCart}
            ></Product>
          ))}
        </div>
        <div className="product-cart"></div>
      </section>
    );
};

export default Shop;