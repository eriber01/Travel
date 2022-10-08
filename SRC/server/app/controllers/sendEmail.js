const nodemailer = require('nodemailer')

function SendMail({data}){
    const transporter = nodemailer.createTransport({
        // service: 'gmail',
        host: "smtp-mail.outlook.com", // hostname
        port: 587, // port for secure SMTP
        secureConnection: false,
        auth:{
            user: process.env.GOOGLE_EMAIL,
            pass: process.env.GOOGLE_PASS
        }
    })

console.log(data.email);
    const MailOptions = {
        from: process.env.GOOGLE_EMAIL,
        to: 'eriber01@gmail.com',
        subject: `Mensaje desde Travel Page Asunto: ${data.asunto}`,

        text: `Cuerpo del mensaje:

            Correo: ${data.email},
            Nombre: ${data.name},

            Cuerpo del mensaje: ${data.mensaje}

        `
    }

    transporter.sendMail(MailOptions, (err, info)=>{
        if(err){
            console.log('No se pudo enviar el correo' + err);
            // res.status(500).send('no se pudo enviar el correo')
        }

        console.log('Se a enviado el correo');
        // res.status(200).send('El correo a sido enviado')
    })
}

module.exports = {SendMail}