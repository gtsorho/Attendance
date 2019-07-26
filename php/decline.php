<?php

require ('bootstrap.php');

$data = array();

$var = mysqli_real_escape_string($conn, $_POST['log_Id'] ); 

$sql =  "SELECT staffinfo.staffname, logtable.staffId, logtable.checkInDate, logtable.checkInTime, logtable.checkOutTime 
        FROM staffinfo INNER JOIN logtable ON staffinfo.staffId = logtable.staffId where  logtable.id = $var ";

$result = mysqli_query($conn, $sql);
$row =  mysqli_fetch_assoc($result);
$name = $row['staffname'];
$Id = $row['staffId'];
$inDate = $row['checkInDate'];
$inTime = $row['checkInTime'];
$outTime = $row['checkOutTime'];

if (!$outTime){
    
        $sql = "INSERT INTO `actiontable` VALUES (null, '$name' , '$Id', '$inDate', '$inTime', null, null)";
            if (mysqli_query($conn,$sql)){
                $data['response'] = "success";
                $sql = "DELETE FROM `logtable` WHERE `id` = $var ";

                if (mysqli_query($conn, $sql)) {
                    $data['response'] = "success";

                } else {
                    $data['response'] = "error";
                }

            }else{
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
    }else{
        $sql = "INSERT INTO `actiontable` VALUES (null, '$name' , '$Id', '$inDate', '$inTime', '$outTime',null)";
            if (mysqli_query($conn,$sql)){
                $data['response'] = "success";
                $sql = "DELETE FROM `logtable` WHERE `id` = $var ";
                 if (mysqli_query($conn, $sql)) {
                $data['response'] = "success";

                } else {
                $data['response'] = "error";
                }

            }else{
                $data['response'] = "error";
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        }


echo json_encode($data);

