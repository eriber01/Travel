import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { sendEmailApi } from "../../../services/sendEmail";

const initialState = {
    email: {
        name: '',
        email: '',
        asunto: '',
        mensaje: ''
    }
}

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        onChange: (state, { payload }) => {
            state.email[payload.path] = payload.value.trim()
        },
        sendEmail: (state, { payload }) => {

            console.log(payload);

            if (!payload?.name?.length) {
                toast.error('Debe ingresar el Nombre')
                return;
            } else if (!payload?.email?.length) {
                toast.error('Debe ingresar el Email')
                return;
            } else if (!payload?.asunto?.length) {
                toast.error('Debe ingresar el Asunto')
                return;
            } else if (!payload?.mensaje?.length) {
                toast.error('Debe ingresar el Mensaje')
                return;
            }

            sendEmailApi(payload)

        }
    }
})

export const { onChange, sendEmail } = emailSlice.actions;

export default emailSlice.reducer;