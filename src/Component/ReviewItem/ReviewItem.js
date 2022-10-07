import React from 'react';
import './ReviewItem.css';
import { Trash } from "react-bootstrap-icons";

const ReviewItem = ({product, deleteProduct}) => {
    const {id, img, name, price, quantity, shipping} = product
    console.log(product);
    return (
      <div className="product-container">
        <img src={img} alt="Product Images" />
        <div className="product-info">
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
          <button onClick={() => deleteProduct(id)} className="delete-btn">
            <Trash className="delete-icon" />
          </button>
        </div>
      </div>
    );
};

export default ReviewItem;