const Product = require('../models/product')


//cloudinary 
const cloudinaryConfig = require('../../config/cloudinaryConfig')
const Cloudinary = require('cloudinary')
Cloudinary.config(cloudinaryConfig)

//manejador de archivos
const fs_extra = require('fs-extra')



//crea el viaje en la base de datos
async function createProduct(req, res) {

    const dataProduct = await req.body

    //sube la imagen a cloudinary
    const ImageData = await Cloudinary.v2.uploader.upload(req.file.path)

    const newProduct = new Product({
        destino: dataProduct.destino,
        descripcion: dataProduct.descripcion,
        precio: dataProduct.precio,
        imgURL: ImageData.url,
        public_id: ImageData.public_id,
    })

    await newProduct.save((err, result) => {
        if (err) {
            return res.json({
                status: 'error',
                response: 'Hubo un error'
            })
        }

        return res.json({
            status: 'success',
            response: 'El vieje se creo Correctamente'
        })
    })

    //elimina el archivo subido del servidor node
    await fs_extra.unlink(req.file.path)
}

//borra el de la base de datos
async function deleteTravel(data, res) {
    try {

        const travel = await Product.findById(data._id)

        if (!travel) {
            return res.json({
                status: 404,
                response: 'El viaje no fue encontrado'
            })
        }

        await Product.remove({ _id: travel._id })
        await Cloudinary.v2.uploader.destroy(travel.public_id)

        return res.json({
            status: 200,
            response: 'Viaje Borrado de manera Exitosa'
        })

    } catch (error) {
        return res.json({
            status: 404,
            response: 'Error al borrar el viaje'
        })
    }
}


//actualiza el viaje de la base de datos
async function updateTravel(res, data, req) {

    try {

        let ImageData
        const travel = await Product.findById(data._id)

        if (!travel) {
            return res.json({
                status: 404,
                response: 'El viaje no fue Encontrado'
            })
        }

        console.log(data);

        if (data.hasImg === 'true') {
            await Cloudinary.v2.uploader.destroy(data.public_id)
            ImageData = await Cloudinary.v2.uploader.upload(req.file.path)
            console.log('entro');
        }

        console.log('BOOOOM');

        const payload = {
            destino: data.destino,
            descripcion: data.descripcion,
            precio: data.precio,
            imgURL: data.hasImg === 'true' ? ImageData.url : data.imgURL,
            public_id: data.hasImg === 'true' ? ImageData.public_id : data.public_id
        }

        await Product.updateOne({ _id: data._id }, payload)

        await data.hasImg ? fs_extra.unlink(req.file.path) : null


        return res.json({
            status: 200,
            response: 'Viaje actualizado de manera Exitosa'
        })

    } catch (error) {
        return res.json({
            status: 404,
            response: "Error al Actualizar el Viaje"
        })
    }

}

module.exports = { createProduct, deleteTravel, updateTravel }