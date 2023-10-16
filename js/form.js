import { transporter } from "./mailer";

const mail = document.getElementById('mail');
const mensaje = document.getElementById('textareaMensaje')
const checkNoRobot = document.getElementById('checkNoSoyRobot');
const checkTermYPol = document.getElementById('checkTermYPolPriv');
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();
    let validMail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validMail.test(mail.value)) {
        mail.value = ' ';
        document.getElementById('mail').focus();
        alert('Correo no valido...');
        return;
    }
    if (!mensaje.value) {
        document.getElementById('textareaMensaje').focus();
        alert('Ingrese un mensaje valido...');
        return;
    }
    if (!checkNoRobot.checked) {
        document.getElementById('checkNoSoyRobot').focus();
        alert('Es Ud un robot??...');
        return;
    }
    if (!checkTermYPol.checked) {
        document.getElementById('checkTermYPolPriv').focus();
        alert('Debe aceptar los terminos y condiciones...');
        return;
    }

    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: mail.value,
          to: 'cuentamiaparacursos@gmail.com',// soporte@bytecrafters.com
          subject: "Soporte ByteCrafters", // Subject line
          text: mensaje.value, // plain text body
          html: "<b>Hello world?</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        //
        // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
        //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
        //       <https://github.com/forwardemail/preview-email>
        //
      }
      
      main().catch(console.error);
} )


console.log('mail');
console.log('mensaje');
console.log('checkNoRobot');
console.log('checkTermYPol');