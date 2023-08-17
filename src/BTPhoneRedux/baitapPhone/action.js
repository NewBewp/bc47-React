import { HandleCarts, HandleProductDetail,HandleQuantity,DeteleCarts } from "./actionType"

export const baiTapPhoneAction = {
    handleProductDetail: (payload) => {
        return {
            type: HandleProductDetail,
            payload,
        }
    },

    handleCarts: (payload) => {
        return {
            type: HandleCarts,
            payload
        }
    },
    handleCartsQuantity: (payload)=>{
        return{
            type: HandleQuantity,
            payload
        }
    },
    deleteCarts: (payload)=>{
        return{
            type: DeteleCarts,
            payload
        }
    }
}