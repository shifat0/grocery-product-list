import React from "react";
import "./modal.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Modal({ showModal, modalToggle, product }) {
  return (
    <>
      {showModal && (
        <div className="modalContainer">
          <div className="modalWrapper">
            <div className="modalDetails">
              <span>Product name: {product.name} </span>
              <span className="productDesc">
                Product details: {product.description}
              </span>
              <span>Brand: {product?.brand}</span>
              <span>
                Uploaded: {new Date(product.dateCreated).toDateString()}
              </span>
            </div>
            <div className="modalImg">
              <AiFillCloseCircle
                className="closeModal"
                onClick={() => modalToggle()}
              />
              <img src={product.image} alt="product" />
            </div>
          </div>
          <button className="cartBtn">Add to Cart</button>
        </div>
      )}
    </>
  );
}

export default Modal;
