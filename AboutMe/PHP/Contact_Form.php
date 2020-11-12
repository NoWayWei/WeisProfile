<?php
  if(isset($_POST['submit'])){
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $emailFrom = $_POST['emailAddress'];
    $Comments = $_POST['Comments'];
    $Check = $_POST['Check'];

    $mailTo = "weiming2124@gmail.com";
    $headers = "From: " .$emailFrom
    $txt = "You have recieved mail from:" .$firstName.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");

  }


  /*
  $name = $_POST['name'];
  $visitor_email =  $_POST['email'];
  $message =  $_POST['message'];

  $email_form = 'weiming2124@gmail.com'
  $email_subject = "Profile Submission Form"
  $email_body = "User Name: $name. \n".
                  "User Email: $visitor_email. \n".
                    "User Message: $message. \n;

  $to = "weiming2124@gmil.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers);
  header("location: Profile.html");
 ?>
*/
