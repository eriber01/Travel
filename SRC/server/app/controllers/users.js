const User = require('../models/user')
const onMessage = require('../utils')


const getUser = async (id, path) => {
    const data = await User.findOne({ [path]: id })
    console.log({ data: data });
    return data
}

const createUpdateUser = async (data, res) => {
    try {

        const user = await getUser(data.authId, 'authId')

        const payloadCreate = new User({
            name: data.name,
            email: data.email,
            authId: data.authId,
            rol: data.rol
        })

        const payloadUpdate = {
            name: data.name,
            email: data.email,
            authId: data.authId,
            rol: data.rol
        }

        if (user) {
            await User.updateOne({ _id: user._id }, payloadUpdate)

            const userData = await getUser(user._id, '_id')

            return onMessage(res, 'Usuario Actualizado de Manera Exitosa', 200, null, userData)
        }

        await payloadCreate.save((error, result) => {
            if (error) {
                return onMessage(res, 'Error al Guardar el Usuario', 400, error, null)
            }

            return onMessage(res, 'Usuario Creado de Manera Exitosa', 200, null, result)
        })

    } catch (error) {
        return onMessage(res, 'Error al Guardar el Usuario', 400, error)
    }

}


module.exports = { createUpdateUser }