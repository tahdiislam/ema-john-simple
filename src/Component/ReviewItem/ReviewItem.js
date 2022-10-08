import React from 'react';
import './ReviewItem.css';
import { Trash } from "react-bootstrap-icons";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Product deleted", { icon: "✅", duration: 1000 });

const ReviewItem = ({product, deleteProduct}) => {
    const {id, img, name, price, quantity, shipping} = product
    console.log(product);
    return (
      <div className="product-container">
        <img src={img} alt="Product Images" />
        <div className="cart-product-info">
          <p>{name}</p>
          <p>
            Price:
            <span style={{ marginRight: "6px" }} className="price">
              ${price}
            </span>
            Quantity: {quantity}
          </p>
          <p>
            Shipping Charge: <span className="price">${shipping}</span>
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              deleteProduct(id);
              notify();
            }}
            className="delete-btn"
          >
            <Trash className="delete-icon" />
            <Toaster/>
          </button>
        </div>
      </div>
    );
};

export default ReviewItem;