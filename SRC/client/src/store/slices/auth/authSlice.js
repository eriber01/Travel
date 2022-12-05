import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: {
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

            state.users = payload
        }
    }
})


export const { userData } = authSlice.actions


export default authSlice.reducer