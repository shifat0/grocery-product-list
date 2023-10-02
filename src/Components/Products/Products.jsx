import React, { useContext, useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import Modal from "../Modal/Modal";
import { searchContext } from "../../Pages/Home";
import { ImSpinner } from "react-icons/im";

function Products() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const { searchText } = useContext(searchContext);
  const [loading, setLoading] = useState(false);
  console.log(loading);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}`);
      if (res) {
        setProducts(res?.data);
        setLoading(false);
      }
    };
    getProduct();
  }, []);
  const modalToggle = () => setShowModal(!showModal);

  return (
    <>
      {loading ? (
        <ImSpinner className="spinner" />
      ) : (
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
                <img
                  src={product?.image}
                  alt="product-img"
                  className="productImg"
                />

                <h2 className="productName">{product?.name}</h2>
              </div>
            ))}
          <Modal
            showModal={showModal}
            modalToggle={() => modalToggle()}
            product={singleProduct}
          />
        </div>
      )}
    </>
  );
}

export default Products;
