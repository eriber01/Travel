import axios from "axios";
import axiosConfig from "./axiosConfig";
import { isAuthorized } from "./isAuthorized";
import { config } from "../config";


export const manageUser = async (data) => {

    const configAxios = axiosConfig();
    console.log(data);
    const payload = {
        name: data.name,
        email: data.email,
        authId: data.sub,
        rol: isAuthorized(data?.sub) ? 'admin' : null
    };

    const { data: userData } = await axios.put(`${config.api}/api/manageUser`, payload, configAxios)

    console.log(userData);

    if (userData.status === 200) {
        return userData.data
    }
}