import nodemailer from 'nodemailer';

 export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "cuentamiaparacursos.gmail.com",
      pass: "iicq riyo ruii svoo",
    },
  });