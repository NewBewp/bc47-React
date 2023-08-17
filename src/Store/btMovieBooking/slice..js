import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    chairBookings: [],
    chairBookeds: [],
}

const baiTapMovieBookingSlice = createSlice({
    name: 'baiTapMovieBooking',
    initialState: initialState,
    reducers: {
        setChairBookings: (state, action) => {
            console.log("(state,action): ", (state, action.payload));
            const index = state.chairBookings.findIndex(
                (item) => item.soGhe === action.payload.soGhe
            )
            if (index !== -1) {
                state.chairBookings.splice(index, 1)
            } else {
                state.chairBookings.push(action.payload)
            }
        },
        setChairBookeds: (state) => {
            state.chairBookeds = [...state.chairBookeds, ...state.chairBookings]
            state.chairBookings = []
        }
    },
    extraReducers: () => { } // xử lý action bất đồng bộ (call API)
})

export const { reducer: baiTapMovieBookingReducer, actions: baiTapMovieBookingActions } = baiTapMovieBookingSlice