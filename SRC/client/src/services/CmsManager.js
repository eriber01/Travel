import axios from "axios"
import { toast } from "react-toastify"

export const CmsManager = async (data, key, e, reset) => {

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
                toast.success(res.data.response)
                reset()
            }).catch(err => {
                toast.success(err.data.response)
            })

            return;
        case 'update':

            console.log('update');
            return;
        case 'getTravels':

            try {
                const { data } = await axios.get('api/getProducts')
                if (data.status === 'success') {
                    console.log(data);
                    return data
                }
            } catch (error) {
                toast.error(error)
            }

            return;
        case 'deleteTravels':

            console.log('delete');
            console.log(data);

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
                    console.log(error);
                })

            return;
        default:
            break;
    }

}