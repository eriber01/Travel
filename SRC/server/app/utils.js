const onMessage = (res, mes, status, error, data) => {

    return res.json({
        status: status,
        response: mes,
        data: data,
        error
    })
}

module.exports = onMessage