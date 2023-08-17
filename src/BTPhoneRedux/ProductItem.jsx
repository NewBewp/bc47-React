import React from "react";
import { useDispatch } from "react-redux";
import { baiTapPhoneAction } from "./baitapPhone/action";

const ProductItem = (props) => {
  const { phone } = props;

  const dispatch = useDispatch();

  return (
    <div className="col-4" key={phone.maSP}>
      <div className="card">
        <img src={phone.hinhAnh} alt="..." />

        <div className="card-body">
          <button 
          onClick={()=>{
            dispatch(baiTapPhoneAction.handleCarts(phone))
          }}>Add to Cart</button>
          <button
            onClick={() => {
              dispatch(baiTapPhoneAction.handleProductDetail(phone));
            }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
