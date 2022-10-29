<?php
$connection = mysqli_connect("localhost","root","");
$db = mysqli_select_db($connection, "registration");

$name=$_GET['name'];
$email=$_GET['email'];
$pass=$_GET['pass'];
$hashPass=md5($pass);
$checkExist = mysqli_query($connection, "select email from user where email='".$email."'");
$row = $checkExist -> fetch_assoc();
if($row){
    http_response_code(400);
    echo "This email is already in use";
}
else{
    $query = mysqli_query($connection, "insert into user (email, name ,password) VALUES ('$email','$name','$hashPass')");
    echo $name;
}
mysqli_close($connection);
?>