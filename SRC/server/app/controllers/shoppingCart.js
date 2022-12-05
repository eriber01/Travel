const shoppingCart = require('../models/shoppingCart');
const travelStatuses = require('../models/travelStatuses');
const onMessage = require('../utils');

const getStatus = async (id) => {
    const status = await travelStatuses.findOne({ id: id })
    return status._id
}

const addShoppingCart = async (data, res) => {
    try {

        const cart = new shoppingCart({
            date: data.date,
            products: data.products,
            user: data.user,
            status: await getStatus(data.status)
        })

        await cart.save((err, result) => {
            if (err) {
                onMessage(res, 'Error al Reservar el Viaje', 400, error, null)
            }
            onMessage(res, 'Viaje Reservado', 200, null, result)
        })

    } catch (error) {
        onMessage(res, 'Error al Reservar el Viaje', 400, error, null)
    }
}

const getShoppingCart = async (user, res) => {
    try {
        const statusId = await getStatus(1)

        const cart = await shoppingCart.find({ user: user, status: statusId })
            .populate('user')
            .populate('products')
            .populate('status')

        const data = []

        cart.map(item => {
            const obj = {
                id: item._id,
                userId: item.user._id,
                product: {
                    id: item.products._id,
                    name: item.products.destino,
                    price: item.products.precio
                },
                status: item.status.id,
            }

            data.push(obj)
        })

        onMessage(res, 'Success', 200, null, data)

    } catch (error) {
        onMessage(res, 'Error al traer el Carrito', 400, error, null)
    }
}

const deleteShoppingCart = async (data, res) => {

    try {

        const travel = await shoppingCart.findOne({ _id: data.id })

        if (!travel) {
            return onMessage(res, 'No se pudo encontrar el vieje', 400, null, null)
        }

        await shoppingCart.deleteOne({ _id: travel._id })

        return onMessage(res, 'Viaje Borrado', 200, null, null)

    } catch (error) {
        onMessage(res, 'Error al borrar el vieje', 400, null, null)
    }

}

module.exports = { addShoppingCart, getShoppingCart, deleteShoppingCart }