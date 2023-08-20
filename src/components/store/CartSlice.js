import { createSlice } from "@reduxjs/toolkit";
import { braceletes } from "../assets/data";
import Quantity from './../ProductDetails/Quantity';

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const cartItem = action.payload;
      let quantity = cartItem.quantity
      state.cartItems.forEach((item) => {
        if (cartItem.id === item.id) {
          quantity += 1;
          state.cartItems = state.cartItems.filter(item=>item.id !==cartItem.id)
        }
      });

      // const product = braceletes.find(item=>item.id===id)
      state.cartItems = [...state.cartItems, { ...cartItem,quantity}];  
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.id);
    },
  },
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
