<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

var_dump($_POST);

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true); //this argument will make it throw an exception if there's a problem

$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP(); //we are telling php we are using an SMTP server
$mail->SMTPAuth = true; //it's using authentication, we need to set to true

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = 'syaoranpt@gmail.com';
$mail->Password = 'Irininha91.';

$mail->setFrom($email, $name);
$mail->addAddress("syaoranpt@gmail.com", "Joao");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

echo "Email Sent!";