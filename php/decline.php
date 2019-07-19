<?php

require ('bootstrap.php');

$data = array();

$var = $_POST['log_Id'];

$sql = "DELETE FROM `logtable` WHERE `id` = $var ";

if (mysqli_query($conn, $sql)) {
$data['response'] = "success";

} else {
$data['response'] = "error";
}

echo json_encode($data);

