import React from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import phoneList from "./data.json";
import Cart from "./Cart";

const BTPhoneRedux = () => {
  console.log("phoneList: ", phoneList.hinhAnh);

  return (
    <div className="container mt-5">
      <h1>BTPhoneRedux</h1>

      <button
        data-bs-toggle="modal"
        data-bs-target="#BTPhoneCart"
        className="btn btn-success"
      >
        Giỏ hàng
      </button>

      <ProductList phoneList={phoneList} />
      <ProductDetail />
      <Cart />
    </div>
  );
};

export default BTPhoneRedux;
