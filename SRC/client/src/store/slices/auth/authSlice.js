import { createSlice } from "@reduxjs/toolkit";
import { useAuth0 } from '@auth0/auth0-react'

const initialState = {
    user: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            console.log(action.payload);

            state.user = { name: 'eriber' }
        },
        logOutAction: (state) => {
            console.log('logOut');
        }
    }
})


export const { loginAction, logOutAction } = authSlice.actions


export default authSlice.reducer