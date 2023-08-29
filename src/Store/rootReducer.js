import { combineReducers } from "redux";
import { demoReduxReducer } from "./demoRedux/reducer";
import { baiTapPhoneReducer } from "../BTPhoneRedux/baitapPhone/reducer";
import { baiTapMovieBookingReducer } from "./btMovieBooking/slice.";
import { baiTapFormReducer } from "./baiTapForm/slice";

export const rootReducer = combineReducers({
    demoRedux: demoReduxReducer,

    baiTapPhone: baiTapPhoneReducer,

    baiTapMovieBooking: baiTapMovieBookingReducer,
    baiTapForm: baiTapFormReducer
})