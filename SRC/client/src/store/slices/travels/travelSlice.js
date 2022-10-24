import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    travels: []
}

export const travelSlice = createSlice({
    name: 'travels',
    initialState,
    reducers: {
        getTravels: (state, { payload }) => {
            state.travels = payload
        },
        deleteTravels: (state, { payload }) => {
            state.travels = state.travels.filter(item => item._id !== payload)
        }
    }
})

export const { getTravels, deleteTravels } = travelSlice.actions

export default travelSlice.reducer;