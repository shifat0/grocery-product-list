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
              <span>Product name: </span>
              <span>Product details: </span>
              <span>Brand: </span>
              <span>Uploaded: </span>
            </div>
            <div className="modalImg">
              <AiFillCloseCircle
                className="closeModal"
                onClick={() => modalToggle()}
              />
              <img src="" alt="product" />
            </div>
          </div>
          <button className="cartBtn">Add to Cart</button>
        </div>
      )}
    </>
  );
}

export default Modal;
