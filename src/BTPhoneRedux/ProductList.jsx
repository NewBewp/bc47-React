import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ phoneList }) => {
  return (
    <div className="row">
      {phoneList.map((phone) => (
        <ProductItem phone={phone} key={phone.maSP}/>
      ))}
    </div>
  );
};

export default ProductList;