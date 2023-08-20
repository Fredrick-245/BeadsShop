import { createSlice } from "@reduxjs/toolkit";
const  NavSlice = createSlice({
    name:'nav',
    initialState:{
        isNavIntersecting:true
    },
    reducers:{
        setNavIsIntersecting(state,action){
            state.isNavIntersecting= action.payload;
            
        }
    }
})
export const { setNavIsIntersecting} = NavSlice.actions
export default NavSlice.reducer