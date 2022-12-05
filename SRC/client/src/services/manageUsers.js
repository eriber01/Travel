import axios from "axios";
import axiosConfig from "./axiosConfig";
import { isAuthorized } from "./isAuthorized";


export const manageUser = async (data) => {

    const config = axiosConfig();
    console.log(data);
    const payload = {
        name: data.name,
        email: data.email,
        authId: data.sub,
        rol: isAuthorized(data?.sub) ? 'admin' : null
    };

    const { data: userData } = await axios.put('/api/manageUser', payload, config)

    console.log(userData);

    if (userData.status === 200) {
        return userData.data
    }
}