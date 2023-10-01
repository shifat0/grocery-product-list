import React, { useEffect, useState } from "react";
import "./products.css";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/products");
      setProducts(res.data);
    };
    getProduct();
  }, []);
  console.log(products);
  return (
    <div className="productContainer">
      {products?.map((product) => (
        <div key={product?._id} className="productCard">
          <img src={product?.image} alt="product-img" />
          <h2 className="productName">{product?.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Products;
