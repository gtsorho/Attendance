<?php
require ('signin.php');

$day = date('l');
$boolean = 1;

//var_dump($_SESSION);
//var_dump($_POST);
$STAFF = $_SESSION['staff'];

if(isset($_POST["checkIn"])){
                $sql = "SELECT logBool from logtable where staffId = '$STAFF' and checkInDate = '$date' ";
               
                $result = mysqli_query($conn, $sql);
                
                $row = mysqli_fetch_assoc($result);
                
                $logbool = $row['logBool'];

                if($logbool != null){
                    echo " you've already checked in";
                    
                }else{
                    $sql = "INSERT INTO `logtable` VALUES (NULL, '$STAFF' , '$date', '$time', NULL, '$day', $boolean, NULL)";
                    
                    if (mysqli_query($conn, $sql)) {
                        echo "New record created successfully";
                    } else {
                        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                    }
                }
            }
                
         