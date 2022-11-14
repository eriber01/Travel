import axios from "axios"
import { toast } from "react-toastify"

export const CmsManager = async (data, key, e, reset) => {
    const id = data
    console.log(data);

    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
    };

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

            await axios.post('api/manejadorCMS/createProduct', data, config).then(res => {
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

            await axios.put('api/manejadorCMS/update', data, config)
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
                const { data } = await axios.get('http:/api/getProducts')
                if (data.status === 'success') {
                    console.log(data);
                    return data
                }
            } catch (error) {
                toast.error(error.data.response)
            }

            return;
        case 'deleteTravels':

            await axios.delete('api/manejadorCMS/deleteCMS',
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
                console.log(id);
                const { data } = await axios.get(`http:/api/getUniqueProducts/${id}`)
                if (data.status === 200) {
                    console.log(data);
                    return data.response
                }

            } catch (error) {
                toast.error(error.data.response)
            }

            return;
        default:
            break;
    }

}