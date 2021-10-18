// const mail = require("@sendgrid/mail");
import mail from "@sendgrid/mail"

mail.setApiKey("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");

export const sendemail =  async (req, res) => {
  const { body } = req;

  // console.log(body)
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "sarvar.tojikulov@ukr.net",
    from: "sarvar.tojikulov@ukr.net",
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  let result = await mail.send(data);

  console.log(result)
  res.status(200).json({ status: "OK" });
};
