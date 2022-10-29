<?php 
$connection = mysqli_connect("localhost","root","");
$db = mysqli_select_db($connection, "registration");

$email=$_GET['email'];
$pass=$_GET['pass'];
$hashPass=md5($pass);
$query = mysqli_query($connection, "select name from user where email='".$email."' and password='".$hashPass."'");
$row = $query -> fetch_assoc();
if($row){
    $resultstring = $row['name'];
    echo $resultstring;
}
else{
    http_response_code(404);
    echo "Error no user with this email and password combination";
}
mysqli_close($connection);
?>