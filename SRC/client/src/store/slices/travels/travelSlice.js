import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    travels: [],
    travelDetails: []
}

export const travelSlice = createSlice({
    name: 'travels',
    initialState,
    reducers: {
        onChange: (state, { payload }) => {

            state.travels = state.travels.map(item => {
                if (item._id === payload.id) {
                    if (payload.key === 'img') {
                        item.hasImg = true
                    }
                    return {
                        ...item,
                        [payload.key]: payload.value
                    }
                }
                return { ...item }
            })

        },
        getTravels: (state, { payload }) => {
            state.travels = payload
        },
        deleteTravels: (state, { payload }) => {
            state.travels = state.travels.filter(item => item._id !== payload)
        },
        getTravelDetails: (state, { payload }) => {
            console.log(payload);
            state.travelDetails = [payload]
        }
    }
})

export const { onChange, getTravels, deleteTravels, getTravelDetails } = travelSlice.actions

export default travelSlice.reducer;