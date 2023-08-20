import { createSlice } from "@reduxjs/toolkit";
const QuantitySlice = createSlice({
    name: "quantity",
    initialState:{
        value:1
    },
    reducers:{
        increaseQuantity(state){
            state.value=state.value+1
        },
        decreaseQuantity(state){
            if(state.value===1) return
            state.value = state.value-1
        }
    }
})
export default QuantitySlice.reducer
export const {increaseQuantity,decreaseQuantity} = QuantitySlice.actions