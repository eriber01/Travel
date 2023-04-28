import { toast } from "react-toastify";
import axios from "axios";
import { config } from "../config";

export const sendEmailApi = (payload) => {
    axios.post(`${config.api}/api/sendEmail`, {
        data: payload
    }).then((res) => {
        toast.success(res.data.res)
    }).catch((err) => {
        console.log(err);
        toast.error(err)
    })
}