<?php
if(!isset($_SESSION)) 
{ 
    session_start(); 
}
require_once ('dbconnect.php');
    $date = date('Y-m-d');
    $time = date('h:i:s');