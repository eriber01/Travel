const Product = require('../models/product')


//cloudinary 
const cloudinaryConfig = require('../../config/cloudinaryConfig')
const Cloudinary = require('cloudinary')
Cloudinary.config(cloudinaryConfig)

//manejador de archivos
const fs_extra = require('fs-extra')



//crea el viaje en la base de datos
async function createProduct(req){
    
    const newProduct = new Product()

    const dataProduct = await req.body

    //sube la imagen a cloudinary
    const ImageData = await Cloudinary.v2.uploader.upload(req.file.path)


    newProduct.destino = dataProduct.destino;
    newProduct.descripcion = dataProduct.descripcion;
    newProduct.precio = dataProduct.precio;
    newProduct.imgURL = ImageData.url
    newProduct.public_id = ImageData.public_id
    newProduct.save()

    //elimina el archivo subido del servidor node
    await fs_extra.unlink(req.file.path)
}

//borra el de la base de datos
async function deleteTravel(id, public_id){
    const dataId = await id

    const data = await Product.remove({_id: id})
    await Cloudinary.v2.uploader.destroy(public_id)
}


//actualiza el viaje de la base de datos
async function updateTravel(id, req, data){

    await Cloudinary.v2.uploader.destroy(data.public_id)

    const ImageData = await Cloudinary.v2.uploader.upload(req.file.path)


    const Data = {
        destino: req.body.destino,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        imgURL: ImageData.url,
        public_id: ImageData.public_id
    }

    await Product.updateOne({_id: id}, Data)

    //elimina el archivo subido del servidor node
    await fs_extra.unlink(req.file.path)

}

module.exports = {createProduct, deleteTravel, updateTravel}