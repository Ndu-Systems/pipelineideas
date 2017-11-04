<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  
  if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $msg  = $_POST['msg'];
	 $name  = $_POST['name'];
	 $phone ="";
	 
	$subject = " Pipeline Ideas Customer Enquiry";
	$txt =  $msg . "\r\n" ."\nRegards\n".$name. " , ".$phone ;
	$headers = "From: ".$email . "\r\n" .
	"CC: freedom.khanyile1@gmail.com";

	mail("mrnnmthembu@gmail.com",$subject,$txt,$headers);
	s
  }
?>

