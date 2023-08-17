const initialState = {
    productDetail: {
        "maSP": 2,
        "tenSP": "Meizu 16Xs",
        "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
        "heDieuHanh": "Android 9.0 (Pie); Flyme",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 7600000,
        "hinhAnh": "./img/meizuphone.jpg"
    },
    carts: []
}

export const baiTapPhoneReducer = (state = initialState, action) => {
    console.log("action: ", action);

    switch (action.type) {
        case 'HandleProductDetail': {
            let newProdDetail = { ...action.payload }
            return { ...state, productDetail: newProdDetail }

        }
        case 'HandleCarts': {
            const newCarts = [...state.carts]
            const index = state.carts.findIndex(item => item.maSP === action.payload.maSP)
            if (index !== -1) {
                newCarts[index].cartQuantity += 1
            } else {
                newCarts.push({ ...action.payload, cartQuantity: 1 })
            }
            return { ...state, carts: newCarts }
        }
        case 'HandleQuantity': {
            //C1:
            const newCarts = [...state.carts]
            const index = newCarts.findIndex((item) => item.maSP === action.payload.maSP)

            newCarts[index].cartQuantity =
                newCarts[index].cartQuantity + action.payload.quantity || 1
            // 1 - 1 = 0
            //C2:
            // const newCarts = state.carts.map((item) => {
            //     if (item.maSP === action.payload.maSP) {
            //         return {
            //             ...item,
            //             cartQuantity: item.cartQuantity + action.payload.quantity,
            //         }
            //     }
            //     return item
            // })

            return { ...state, carts: newCarts }
        }
        case 'DeteleCarts':{
            const newCarts = state.carts.filter((item)=>item.maSP !== action.payload)
            
            return { ...state, carts: newCarts }
        }


        default:
            return state
    }
}