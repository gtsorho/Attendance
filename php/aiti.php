
<?php 

echo "<style>
.button1{
    display:none;
} 
.button2{
    display:none;
} 
</style> ";


require ('signin.php');
require ('checkin.php');
require ('checkout.php');            
            
$data = array();

$data['success'] = 200;

//$jdata = json_encode($data);
//var_dump($jdata);




?>

<html>
 
<br>
<br>

<form method = "post" >
Staff Id:<input type="text" name="staffid">
<input type="submit" name= "submit">
</form>

<form method="post" action="">
<input  type="submit" class="button1" name="checkIn" value="check In">
<input  type="submit" class="button2" name="checkOut" value="check Out">
</form>



</html>


