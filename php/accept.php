<?php


include ("adminsignin.php");
    

var_dump($_SESSION);

 $admin = array();

 $val = $_POST['ID'];
 $pass = $_POST['pass'];

 $admin['val'] = $val;
 $admin['pass'] = $pass;

echo json_encode($admin);
