const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async e => {
    
    e.preventDefault();

    const mail = document.getElementById('mail');
    const mensaje = document.getElementById('textareaMensaje')
    const checkNoRobot = document.getElementById('checkNoSoyRobot');
    const checkTermYPol = document.getElementById('checkTermYPolPriv');

    let validMail = ;
    
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
    
    const response = await fetch('http://localhost:5500/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: mail, message: mensaje }),
    });

    const data = await response.text();
    console.log(data);

} )
