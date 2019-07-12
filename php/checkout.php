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
$STAFF = $_SESSION['staff'];

$data['response'] = 'success';

 if(isset($_POST['checkOut'])){
                $sql = "SELECT checkOutTime from logtable where staffId = '$STAFF' and checkInDate = '$date' ";
                $result = mysqli_query($conn, $sql);
                
                $row = mysqli_fetch_assoc($result);
                
                
                $outTime = $row['checkOutTime'];

                if($outTime != null){
                    $data['response'] = 'error';
                    $data['message'] = " you've already checked out";
                    // echo " you've already checked out";
                    
                }else{

                    $sql = "UPDATE `logtable` SET `checkOutTime`='$time' WHERE `checkInDate`='$date' AND `staffId` = '$STAFF' ";
                
                    if (mysqli_query($conn, $sql)) {
                        $data['response'] = 'success';
                        $data['message'] = "check out successful";
                        // echo "check out successful";

                        $sql = "SELECT staffinfo.staffname, logtable.checkInDate, logtable.checkInTime, logtable.checkOutTime FROM staffinfo INNER JOIN logtable ON staffinfo.staffId = logtable.staffId WHERE logtable.staffId = '$STAFF' AND logtable.checkInDate = '$date'";
                        $result = mysqli_query($conn, $sql);
                        $row = mysqli_fetch_assoc($result);


                        $log = [
                            'staffname' => $row['staffname'],
                            'logdate' => $row['checkInDate'],
                            'inTime' => $row['checkInTime'],
                            'outTime' => $row['checkOutTime']

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
            }echo json_encode($data);