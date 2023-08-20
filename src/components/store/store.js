import { configureStore } from "@reduxjs/toolkit";
import CartSlice  from "./CartSlice";
import NavigateSlice from "./NavigateSlice";
import QuantitySlice from "./QuantitySlice";

export default configureStore({
    reducer:{
        cart:CartSlice,
        nav:NavigateSlice,
        quantity:QuantitySlice
    },
})