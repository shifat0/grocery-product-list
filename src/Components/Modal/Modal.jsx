import React, { useState } from "react";
import "./modal.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Modal({ showModal, modalToggle, product }) {
  const [productCount, setProductCount] = useState(0);
  let productObj = {
    product: product,
    orederCount: productCount,
  };
  let productArr = [];
  const handleCart = () => {
    const prevProduct = JSON.parse(localStorage.getItem("product-cart"));
    prevProduct === null
      ? productArr.push(productObj)
      : productArr.push(...prevProduct, productObj);
    localStorage.setItem("product-cart", JSON.stringify(productArr));
  };
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
          <div className="countProduct">
            <span
              className={`${
                productCount === 0 ? "modalCount disabled" : "modalCount"
              }`}
              onClick={() => setProductCount((count) => Math.max(count - 1, 0))}
            >
              -
            </span>
            <span className="counter">{productCount}</span>
            <span
              className="modalCount"
              onClick={() => setProductCount(productCount + 1)}
            >
              +
            </span>
          </div>
          <button
            className="cartBtn"
            onClick={() => {
              handleCart();
              modalToggle();
            }}
          >
            Add to Cart
          </button>
        </div>
      )}
    </>
  );
}

export default Modal;
