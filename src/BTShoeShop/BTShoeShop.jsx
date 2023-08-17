import React, { useState } from "react";
import prdList from "./data.json";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

const BTShoeShop = () => {
  console.log({ prdList });
  const [productDetail, setProductDetail] = useState(prdList[0]);

  const [carts, setCarts] = useState([]); //[]trả về địa chỉ ô nhớ tham chiếu

  const handleCarts = (product) => {
    // setCarts()
    console.log("product:", product);
    setCarts((currentState) => {
      //currentState đang tham chiếu địa chỉ ô nhớ
      const index = currentState.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        currentState[index].cartQuantity += 1;
      } else {
        currentState.push({ ...product, cartQuantity: 1 }); //
      }

      return [...currentState]; //thay đổi địa chỉ ô nhớ
    });
  };

  const handleProductDetail = (product) => {
    setProductDetail(product);
  };

  const handleCartsQuantity = (id, quantity) => {
    console.log("quantity: ", quantity);
    console.log("id: ", id);

    setCarts((currentState) => {
      const index = currentState.findIndex((item) => item.id === id);

      currentState[index].cartQuantity +=
        currentState[index].cartQuantity + quantity || 1;

      return [...currentState];
    });
  };

  const handleDeleteCart = (id) => {
    setCarts((currentState) => {
      return currentState.filter((item) => item.id !== id);
    });
  };

  
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h1>BTShoeShop</h1>
        <button
          type="button"
          className="btn btn-outline-success"
          data-bs-toggle="modal"
          data-bs-target="#carts"
        >
          Cart
        </button>
      </div>
      <ProductList
        prdList={prdList}
        handleProductDetail={handleProductDetail}
        handleCarts={handleCarts}
        handleDeleteCart={handleDeleteCart}

      />
      {/* Modal detail */}
      <ProductDetail productDetail={productDetail} />

      {/* model carts */}
      <Cart carts={carts} handleCartsQuantity={handleCartsQuantity} />
    </div>
  );
};

export default BTShoeShop;
