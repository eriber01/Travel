import axios from "axios"
import { toast } from "react-toastify"
import axiosConfig from "./axiosConfig"
import { config } from "../config"

export const CmsManager = async (data, key, e, reset) => {
    const id = data

    const configAxios = axiosConfig()

    switch (key) {
        case 'create':
            e.preventDefault()

            if (!data?.destino?.length) {
                toast.error("Debe escribir el Destino")
                e.target.destino.value = ''

                return;
            } else if (!data?.descripcion?.length) {
                toast.error('Debe escribir la Descripcion')
                e.target.descripcion.value = ''

                return;
            } else if (!data?.precio) {
                toast.error('Debe escribir el Precio')
                e.target.precio.value = ''

                return;
            } else if (!data?.img) {
                toast.error('Debe Seleccionar una Imagen')
                e.target.img.value = ''

                return;
            }

            e.target.destino.value = ''
            e.target.descripcion.value = ''
            e.target.precio.value = ''
            e.target.img.value = ''

            await axios.post(`${config.api}/api/manejadorCMS/createProduct`, data, configAxios).then(res => {
                if (data.status === 200) {
                    toast.success(data.response)
                } else if (data.status === 404) {
                    toast.error(data.response)
                }
                reset()
            }).catch(err => {
                toast.error(err.data.response)
            })

            return;
        case 'updateTravels':

            await axios.put(`${config.api}/api/manejadorCMS/update`, data, configAxios)
                .then(res => {
                    if (res.data.status === 200) {
                        toast.success(res.data.response)
                    } else if (res.data.status === 404) {
                        toast.error(res.data.response)
                    }
                }).catch(err => {
                    toast.error(err.data.response)
                })

            return;
        case 'getTravels':

            try {
                const { data } = await axios.get(`${config.api}/api/getProducts`)
                if (data.status === 200) {
                    console.log(data);
                    return data
                }
            } catch (error) {
                toast.error(error.data.response)
            }

            return;
        case 'deleteTravels':

            await axios.delete(`${config.api}/api/manejadorCMS/deleteCMS`,
                { data })
                .then(({ data }) => {
                    console.log(data);

                    if (data.status === 200) {
                        toast.success(data.response)
                    } else if (data.status === 404) {
                        toast.error(data.response)
                    }
                }).catch((error) => {
                    toast.error(error.data.response)
                })

            return;
        case "getUniqueTravels":

            try {
                const { data } = await axios.get(`${config.api}/api/getUniqueProducts/${id}`)
                if (data.status === 200) {
                    return data.data
                }

            } catch (error) {
                toast.error(error.data.response)
            }

            return;
        default:
            break;
    }

}