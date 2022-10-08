import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [
        { id: 1, price: 2800, name: 'Cuba' },
        { id: 2, price: 3300, name: 'Republica Dominicana' },
        { id: 3, price: 2600, name: 'España' },
        { id: 4, price: 2500, name: 'Peru' }
    ]
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, { payload }) => {

            console.log(payload);

            state.cart.push(payload)
        },
        removeCart: (state, { payload }) => {
            return state = { cart: state.cart.filter(item => item.id !== payload.id) }
        }
    }
})

export const { addCart, removeCart } = cartSlice.actions

export default cartSlice.reducer;