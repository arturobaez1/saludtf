<?php

use PHPMailer\PHPMailer\PHPMailer;

$nombre = isset ($_POST['nombre'])?$_POST['nombre']:'';
$email = isset ($_POST['email'])?$_POST['email']:'';
$mensaje = isset ($_POST['mensaje'])?$_POST['mensaje']:'';
$contenido=`
<html>
<head>
<title></title>
</head>
<body>
    <h2>Has recibido un mensaje a través de la página</h2>
    <p>` $nombre ` te ha enviado el siguiente mensaje </p>
    <p>` $mensaje `<br><br>
    Puedes ponerte en contacto con la persona a través de este email` $email `</p><hr>
</body>
</html>
`;

require_once  'PHPMailer/Exception.php';
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);


    //Server settings
   
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'holasaludtf@gmail.com';                     // SMTP username
    $mail->Password   = 'A2X1989a';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('holasaludtf@gmail.com', $nombre);
    $mail->addAddress('holasaludtf@gmail.com', 'Salud TF');     // Add a recipient
    $mail->addReplyTo($email, 'Salud TF');

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Pedir Informacion Salud TF';
    $mail->Body    = $contenido;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    if ($mail->send())
    $response = 'El mensaje ha sido enviado, gracias por ponerse en contacto con nosotros';
 else 
    $response "No se pudo enviar el mensaje. Intente nuevamente o escribanos al Whatsapp +573043758916 {$mail->ErrorInfo}";
exit(json_encode(array('response' => $response)));

/*

$headers = 'MIME-version:1.0'. "r\n";
$headers .= "Content-type=text/html; charset=UTF-8\r\n";

$envio = mail(holasaludtf@gmail.com,Pedir informacion Salud TF,$contenido,$headers);

if($envio) {
    $miresultado='<h3>El correo ha sido enviado, gracias por ponerse en contacto con nosotros</h3>';
} else {
    $miresultado='<h3>No se pudo enviar el Correo. Intente nuevamente o escribanos al Whatsapp +573043758916</h3>';
}

echo $miresultado;*/
?>