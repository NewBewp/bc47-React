import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { demoReduxActions } from "../Store/demoRedux/action";

const DemoRedux = () => {
  //Lấy giá trị từ store
  const { number, age, name } = useSelector((state) => state.demoRedux);
  const demoredux = useSelector((state) => state.demoRedux);

  //Thay đổi giá trị trên store
  //dùng dispatch để gửi lên store 1 action
  //action là 1 object gồm 2 thuộc tính
  // + type: string (HẰNG SỐ) ex: 'ABC'

  const dispatch = useDispatch();
  // console.log("name: ", name);
  // console.log("age: ", age);
  // console.log("number: ", number);
  // console.log("demoredux: ", demoredux);s

  return (
    <div className="container mt-5">
      <h1>DemoRedux</h1>
      <p className="mt-3">Number: {number}</p>
      <div className="mt-3">
        <button
          className="btn btn-success"
          onClick={() => {
            // dispatch({
            //   type: "Increase_number",
            //   payload: 1,
            // });
            dispatch(demoReduxActions.increaseNumber(1))
          }}
        >
          + Number
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            // dispatch({
            //   type: "Decrease_number",
            //   payload: -1,
            // });
            dispatch(demoReduxActions.decreaseNumber(1))
          }}
        >
          - Number
        </button>
      </div>
    </div>
  );
};

export default DemoRedux;
