import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      const newCart = [];
      for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          // console.log(addedProduct)
          newCart.push(addedProduct)
        }
        setCart(newCart)
      }
    },[products])

    const handlerAddToCart = selectedProduct => {
      // console.log(product)
      let newCart = [];
      const exists = cart.find(product => product.id === selectedProduct.id)
      if(!exists)
      {
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct];
      }
      else{
        const rest = cart.filter(product => product.id !== selectedProduct.id)
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists]
      }
      // const newCart = [...cart, selectedProduct];
      setCart(newCart)
      addToDb(selectedProduct.id)
    }
    // clear cart
    const deleteShoppingCart = () => {
      localStorage.removeItem("shopping-cart");
      setCart([])
    };
    // navigate cart review
    const navigate = useNavigate()
    const navigateCartReview = () => {
      navigate('/orders')
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
          <Cart
            cart={cart}
            deleteShoppingCart={deleteShoppingCart}
            navigateCartReview={navigateCartReview}
          ></Cart>
        </div>
      </section>
    );
};

export default Shop;