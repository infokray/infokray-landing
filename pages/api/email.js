import nodemailer from "nodemailer";

export default async function handler(req, res) {
    const {name, email, phone, message} = req.body;

    if(!name || !email || !phone || !message) res.status(401).json({status: 'BAD', message: 'Сталася помилка! Спробуйте пізніше.'})

    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    let info = await transporter.sendMail({
        from: `${name} <${email}>`,
        to: "support@infokray.com.ua",
        subject: "Новий лист від веб-сайту",
        text: `${message}`,
        html: `<table style="border: 1px solid #9d9d9d;" cellspacing="0">
<tbody>
<tr>
<td style="padding: 8px; background: #f7f7f7;"><span style="font-family: arial, helvetica, sans-serif;">E-mail:</span></td>
<td style="padding: 8px; background: #dfdfdf;"><span style="font-family: arial, helvetica, sans-serif;">${email}</span></td>
</tr>
<tr>
<td style="padding: 8px; background: #dfdfdf;"><span style="font-family: arial, helvetica, sans-serif;">Имя:</span></td>
<td style="padding: 8px; background: #f7f7f7;"><span style="font-family: arial, helvetica, sans-serif;">${name}</span></td>
</tr>
<tr>
<td style="padding: 8px; background: #f7f7f7;"><span style="font-family: arial, helvetica, sans-serif;">Телефон:</span></td>
<td style="padding: 8px; background: #dfdfdf;"><span style="font-family: arial, helvetica, sans-serif;">${phone}</span></td>
</tr>
<tr>
<td style="padding: 8px; background: #dfdfdf;"><span style="font-family: arial, helvetica, sans-serif;">Повiдомления:</span></td>
<td style="padding: 8px; background: #f7f7f7;"><span style="font-family: arial, helvetica, sans-serif;">${message}</span></td>
</tr>
</tbody>
</table>`
    }, (err, info) => {
        if(err) res.status(501).json({status: 'BAD', message: 'Сталася помилка! Спробуйте пізніше.'});
        res.status(200).json({status: 'OK', message: 'Повідомлення відправлено!'});
    })

}