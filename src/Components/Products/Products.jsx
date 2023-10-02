import React, { useContext, useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import Modal from "../Modal/Modal";
import { searchContext } from "../../Pages/Home";

function Products() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const { searchText } = useContext(searchContext);
  console.log(searchText);
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/products");
      setProducts(res?.data);
    };
    getProduct();
  }, []);
  const modalToggle = () => setShowModal(!showModal);

  return (
    <>
      <div className="productContainer">
        {products
          ?.filter((product) =>
            searchText.toLowerCase() === ""
              ? product
              : product.name.toLowerCase().includes(searchText)
          )
          .map((product) => (
            <div
              key={product?._id}
              className="productCard"
              onClick={() => {
                modalToggle();
                setSingleProduct(product);
              }}
            >
              <img src={product?.image} alt="product-img" />
              <h2 className="productName">{product?.name}</h2>
            </div>
          ))}
        <Modal
          showModal={showModal}
          modalToggle={() => modalToggle()}
          product={singleProduct}
        />
      </div>
    </>
  );
}

export default Products;
