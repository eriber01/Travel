import { useState } from 'react'

export const ManageForm = (initialState = {}) => {
    const [state, setState] = useState(initialState)


    const handleState = (data) => {
        setState(state => ({
            ...state,
            [data.target]: data.value
        }))
    }
    console.log(state);

    const reset = () => {
        setState(initialState)
    }
    return { state, handleState, reset }
}
