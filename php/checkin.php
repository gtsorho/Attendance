<?php
require ('bootstrap.php');

$day = date('l');
$boolean = 1;


$data = array();

if(!isset($_SESSION['staff'])){
    $data['response'] = "error";
    $data['message'] = "Please signin";
    echo json_encode($data);
    return false;
}


//var_dump($_SESSION);
//var_dump($_POST);

$STAFF = $_SESSION['staff'];

$data['response'] = 'error';

if(isset($_POST["checkIn"])){
                $sql = "SELECT logBool from logtable where staffId = '$STAFF' and checkInDate = '$date' ";
               
                $result = mysqli_query($conn, $sql);
                
                $row = mysqli_fetch_assoc($result);
                
                $logbool = $row['logBool'];

                if($logbool != null){
                    $data['response'] = 'error'; 
                    $data['message'] = " you've already checked in"; 
                    //echo " you've already checked in";
                    
                }else{
                    $sql = "INSERT INTO `logtable` VALUES (NULL, '$STAFF' , '$date', '$time', NULL, '$day', $boolean, NULL)";
                    
                    if (mysqli_query($conn, $sql)) {
                        $data['response'] = 'success';
                        $data['message'] = "New record created successfully"; 
                        //echo "New record created successfully";

                        $sql = "SELECT staffinfo.staffname, logtable.checkInDate, logtable.checkInTime FROM staffinfo INNER JOIN logtable ON staffinfo.staffId = logtable.staffId WHERE logtable.staffId = '$STAFF' AND logtable.checkInDate = '$date'";
                        $result = mysqli_query($conn, $sql);
                        $row = mysqli_fetch_assoc($result);

                        $log = [
                            'staffname' => $row['staffname'],
                            'logdate' => $row['checkInDate'],
                            'inTime' => $row['checkInTime'],

                        ];

                        // $staffnme = $row['staffname'];
                        // $logdate = $row['checkInDate'];
                        // $inTime = $row['checkInTime'];
                        // $outTime = $row['checkOutTime'];

                        // echo $staffnme, $logdate,$outTime;
                        $data['log'] = $log;
                    
                    } else {
                        $data['response'] = "error";
                        $data['message'] =  "Error getting data";
                        //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                    }
                }
            }
            echo json_encode($data);
                
         