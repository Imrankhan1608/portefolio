<?php

// buttom submit //

if (isset($_POST['submit'])) {

    if (isset(($_POST['nom'])) and  ($_POST['tel']) and  ($_POST['mail']) and  ($_POST['message'])) {
        
       
    $name = $_POST['nom'];
    $tel = $_POST['tel'];
    $mail = $_POST['mail'];
    $message = $_POST['message'];

    // Database connection
    $conn = new mysqli("host=localhost; dbname=portefolio", "root", "");
    $requette = $conn->prepare("INSERT INTO mails (nom, tel, mail, message) VALUES (?, ?, ?, ?)");
    $requette->bind_param("sss", $name, $tel, $mail, $message);
    $requette->execute();
    $requette->close();
    $conn->close();
    // pour l'envoie du mail//
    $adrsse = "i001c.2425@gmail.com";
    $sujet = "Nouveau message de votre site web";
    $user = "Nom: $name\n";
    $usertel .= "Téléphone: $tel\n";
    $usermail .= "E-mail: $mail\n";
    $usermessage .= "Message: $message\n";
    $header = "From: $mail"; // ADRESSE DE L'EXPEDITEUR //
    $header .= "Reply-To: $mail\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: text/html; charset=UTF-8\r\n";

          if (mail($adrsse, $sujet, $user, $usertel, $usermail, $usermessage, $header)) {
              header("Location: succes.html");
          } else {
              header("Location: error.html");
          }
    }
}


?>