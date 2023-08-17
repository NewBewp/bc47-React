import React from "react";
import Chair from "./Chair";
import { useSelector } from "react-redux";
import cn from 'classnames'
const ChairList = ({ data }) => {
  // console.log("data: ", data);
  const {chairBookings} = useSelector((state)=>state.baiTapMovieBooking)
  console.log("chairBookings: ", chairBookings);
  return (
    <div>
      {data.map((hangGhe) => {
        return (
          <div
            key={hangGhe.hang}
            className="d-flex gap-3"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              className="mt-3 mb-0"
              style={{
                width: 30,
              }}
            >
              {hangGhe.hang}
            </p>
            {hangGhe.danhSachGhe.map((ghe) => {
              return <Chair
              className={cn({
                  disabled: !hangGhe.hang,
              })}
              key={ghe.soGhe}
              ghe={ghe}
          />
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ChairList;
