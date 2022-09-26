import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
    },[])

    useEffect(() => {
      const storedCart = getStoredCart()
      // console.log(storedCart)
      for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id)
        console.log(addedProduct)
      }
    },[])

    const handlerAddToCart = product => {
      // console.log(product)
      const newCart = [...cart, product];
      setCart(newCart)
      addToDb(product.id)
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
        <div className="product-cart">
          <Cart cart={cart}></Cart>
        </div>
      </section>
    );
};

export default Shop;