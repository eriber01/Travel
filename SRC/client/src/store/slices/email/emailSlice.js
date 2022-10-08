import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
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
            console.log(payload);
            // console.log(state);

            state.email[payload.path] = payload.value.trim()
        },
        sendEmail: (state, { payload }) => {

            console.log(payload);

            if (!payload?.name?.length) {
                console.log('asdasdasd');
                toast.error('Debe ingresar el Nombre')
                return;
            } else if (!payload?.email?.length) {
                console.log('asdasdasd');
                toast.error('Debe ingresar el Email')
                return;
            } else if (!payload?.asunto?.length) {
                console.log('asdasdasd');
                toast.error('Debe ingresar el Asunto')
                return;
            } else if (!payload?.mensaje?.length) {
                console.log('asdasdasd');
                toast.error('Debe ingresar el Mensaje')
                return;
            }

            axios.post('api/sendEmail', {
                data: payload
            }).then((res) => {
                console.log(res);
                toast.success('Mensaje Enviado')

                onChange({ value: '', path: 'name' })
            }).catch((err) => {
                console.log(err);
            })
            // state = initialState

        }
    }
})

export const { onChange, sendEmail } = emailSlice.actions;

export default emailSlice.reducer;