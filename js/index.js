const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 5500;

app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '98feaa0ab2e981f75bc4a197899b4c72',// soporte@bytecrafters.com
      pass: "iicq riyo ruii svoo",
    },
  });

  let mailOptions = {
    from: 'tu_correo@gmail.com',
    to: 'destinatario@example.com',
    subject: 'Asunto del correo',
    text: `Correo: ${email}\nMensaje: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.send('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo', error);
    res.status(500).send('Error al enviar el correo');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});