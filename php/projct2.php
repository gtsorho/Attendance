


<?php
$message="";
require_once ('dbconnect.php');

if(count($_POST)>0) {

	$query = "SELECT * FROM staffinfo WHERE staffId ='" . $_POST["staffid"] . "' and adminPassword = '". $_POST["password"]."' ";
	$result = mysqli_query($conn,$query);
	$count  = mysqli_num_rows($result);
	if($count==0) {
		$message = "Invalid staffname or Password!";
	} else {
		$message = "You are successfully authenticated!";
	}
}


?>