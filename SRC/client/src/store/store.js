import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth/authSlice'
import cartSlice from './slices/cart/cartSlice'
import counterSlice from './slices/counter/counterSlice'
import emailSlice from './slices/email/emailSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        auth: authSlice,
        email: emailSlice,
        cart: cartSlice,
    }
})