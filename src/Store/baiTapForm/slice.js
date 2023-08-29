// rxslice

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productList: [],
  productEdit: undefined
}

const baiTapForm = createSlice({
  name: 'baiTapForm',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productList.push(action.payload)
    },
    deleteProduct: (state, action) => {
      state.productList = state.productList.filter(prod => prod.id !== action.payload)
    },
    editProduct: (state, {payload}) => {
      state.productEdit = payload
    },
    updateProduct: (state, {payload})=>{
      // c1
      const index = state.productEdit.findIndex((prod)=>prod.id === payload.id)
      state.productList[index] = payload

      // c2
      //state.productList = state.productList.map((prod)=>{
      //   if(prod.id===payload.id){
      //     return payload
      //   }
      //   return prod
      // })

      state.productEdit = undefined
    }
  }
});

export const { reducer: baiTapFormReducer, actions: baiTapFormActions } = baiTapForm
