import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { useLoaderData, useNavigate } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [storedProduct, setStoredProduct] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const pages = Math.ceil(count / size);

  // load data with query
  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setStoredProduct(data.storedProduct);
      });
  }, [page, size]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const newCart = [];
    const ids = Object.keys(storedCart);
    // console.log(ids);

    // load cart product from db
    fetch("http://localhost:5000/productsById", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then(data => {
        // console.log("cart products", data);
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // console.log(addedProduct)
            newCart.push(addedProduct);
          }
          setCart(newCart);
        }
      });
    
  }, [storedProduct]);

  const handlerAddToCart = (selectedProduct) => {
    // console.log(product)
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    // const newCart = [...cart, selectedProduct];
    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  // clear cart
  const deleteShoppingCart = () => {
    localStorage.removeItem("shopping-cart");
    setCart([]);
  };
  // navigate cart review
  const navigate = useNavigate();
  const navigateCartReview = () => {
    navigate("/orders");
  };

  return (
    <section className="shop-container">
      <div className="products">
        {storedProduct.map((product) => (
          <Product
            key={product._id}
            product={product}
            handlerAddToCart={handlerAddToCart}
          ></Product>
        ))}
      </div>
      <div className="product-cart">
        <Cart cart={cart} deleteShoppingCart={deleteShoppingCart}>
          <button onClick={navigateCartReview} className="review-cart-btn">
            <span>Cart Review</span>
            <ArrowRight className="cart-btn-icon" />
          </button>
        </Cart>
      </div>
      <div className="pagination">
        {[...Array(pages).keys()].map((number) => (
          <button
            onClick={() => setPage(number)}
            key={number}
            className={page === number && "selected"}
          >
            {number + 1}
          </button>
        ))}
        <select
          className="select-field"
          onClick={(e) => setSize(e.target.value)}
        >
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </section>
  );
};

export default Shop;
