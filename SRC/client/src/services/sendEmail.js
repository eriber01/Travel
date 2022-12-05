import { toast } from "react-toastify";
import axios from "axios";

export const sendEmailApi = (payload) => {
    axios.post('/api/sendEmail', {
        data: payload
    }).then((res) => {
        toast.success(res.data.res)
    }).catch((err) => {
        console.log(err);
        toast.error(err)
    })
}