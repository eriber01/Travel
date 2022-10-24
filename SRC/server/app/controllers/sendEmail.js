const nodemailer = require('nodemailer')

function SendMail({ data }, res) {
    const transporter = nodemailer.createTransport({
        // service: 'gmail',
        host: "smtp-mail.outlook.com", // hostname
        port: 587, // port for secure SMTP
        secureConnection: false,
        auth: {
            user: process.env.EMAIL_NODEMAILER,
            pass: process.env.PASS_NODEMAILER
        }
    })

    console.log('en el mensaje');
    console.log(data.email);
    const MailOptions = {
        from: process.env.EMAIL_NODEMAILER,
        to: process.env.EMAIL_NODEMAILER_TO,
        subject: `Mensaje desde Travel Page Asunto: ${data.asunto}`,

        text: `Cuerpo del mensaje:

            Correo: ${data.email},
            Nombre: ${data.name},

            Cuerpo del mensaje: ${data.mensaje}

        `
    }

    console.log("bomm");
    transporter.sendMail(MailOptions, (err, info) => {
        if (err) {
            console.log('No se pudo enviar el correo' + err);
            res.status(500).send('no se pudo enviar el correo')
        }

        console.log('Se a enviado el correo');
        res.json({
            res: 'Se a enviado el correo'
        })
    })
}

module.exports = { SendMail }