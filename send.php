<?php
   $to = "kovalyova_alena@inbox.ru";
   $subject = "Contact Us";
   $message = '<h1>Send question</h1>
                <p>Your name <b> '.$_POST['name'].'</b></p>
                <p>Your email <b> '.$_POST['email'].'</b></p>
                <p>Text message <b> '.$_POST['commit'].'</b></p>';
   $header = "From:abc@somedomain.com \r\n";
   $header .= "MIME-Version: 1.0\r\n";
   $header .= "Content-type: text/html\r\n";
   mail($to, $subject, $message, $header);