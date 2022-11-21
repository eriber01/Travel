import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        _id: "",
        name: "",
        email: "",
        authId: "",
        rol: "",
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userData: (state, { payload }) => {
            console.log(payload);

            state.user = payload
        }
    }
})


export const { userData } = authSlice.actions


export default authSlice.reducer