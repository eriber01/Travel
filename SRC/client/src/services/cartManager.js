import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";

export const addCart = async ({ id, users, user }) => {

    if (!users._id) {
        toast.error('Para Reservar un Viaje debe estar Autentificado')
        return
    }

    try {
        const obj = {
            user: users._id,
            products: id,
            status: 1,
            date: moment(new Date()).format('YYYY/MM/DD')
        }

        await axios.post('/api/addShoppingCart', obj)
            .then((res) => {

                if (res.data.status === 200) {
                    toast.success(res.data.response)
                    return res.data.data
                }

                toast.error(res.data.response)
            })
            .catch(error => {
                console.log(error.response);
            })

    } catch (error) {
        console.log(error);
        toast.error(error?.response)
    }
}

export const getCart = async (user) => {
    try {
        const { data } = await axios.get(`/api/getShoppingCart/${user}`)

        if (data.status === 200) {
            console.log(data.data);
            return data.data
        }

        toast.error(data.response)
        toast.error(data.response)
    } catch (error) {
        toast.error(error?.response)
    }
}

export const removeCart = async (id) => {

    try {

        await axios.delete('/api/deleteShoppingCart', { data: { id } })
            .then(res => {
                toast.success(res.data.response)
            })
    } catch (error) {
        toast.error(error.response)
    }

}

export const paymentCart = async (item) => {
    console.log('la data: ', item);

    const ids = item.map(item => item.id)
    console.log(ids);
    try {
        await axios.put('/api/paymentShoppingCart', { data: ids })
            .then(res => {

                if (res.status === 200) {
                    console.log('res: ', res);
                    toast.success(res.data.response)
                    console.log(res.data);
                    return res.data
                }

                toast.error(res.data.response)
            })
    } catch (error) {
        toast.error(error.response)
    }
}