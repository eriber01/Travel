import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    travels: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartSlice: (state, { payload }) => {
            console.log(payload);
            state.cart = (payload)
        },
        removeCartSlice: (state, { payload }) => {
            state = { cart: state.cart.filter(item => item._id !== payload._id) }
        },
    }
})

export const { addCartSlice, removeCartSlice } = cartSlice.actions

export default cartSlice.reducer;