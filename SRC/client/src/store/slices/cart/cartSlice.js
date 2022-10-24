import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    travels: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, { payload }) => {
            state.cart.push(payload)
        },
        removeCart: (state, { payload }) => {
            state = { cart: state.cart.filter(item => item._id !== payload._id) }
        },
    }
})

export const { addCart, removeCart } = cartSlice.actions

export default cartSlice.reducer;