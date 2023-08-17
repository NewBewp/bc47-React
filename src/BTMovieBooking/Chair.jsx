import React from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { baiTapMovieBookingActions } from "../Store/btMovieBooking/slice.";
import cn from "classnames";

const Chair = ({ ghe, className }) => {
    const dispatch = useDispatch();
    console.log(className);
    const { chairBookings, chairBookeds } = useSelector(
        (state) => state.baiTapMovieBooking
    );
    return (
        <div
            className={cn("Chair d-flex mt-3", className, {
                booking: chairBookings.find(
                    (chair) => chair.soGhe === ghe.soGhe
                ),
                booked: chairBookeds.find((chair) => chair.soGhe === ghe.soGhe),
            })}
            onClick={() => {
                dispatch(baiTapMovieBookingActions.setChairBookings(ghe));
            }}
        >
            {ghe.soGhe}
        </div>
    );
};

export default Chair;
