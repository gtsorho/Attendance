<?php

require ('dbconnect.php');






    $sql =  "SELECT staffinfo.staffname, logtable.staffId, logtable.Day, logtable.checkInDate, 
    logtable.checkInTime, logtable.checkOutTime FROM staffinfo INNER JOIN logtable ON staffinfo.staffId = logtable.staffId";
    
    $result = mysqli_query($conn, $sql);
    // $row = mysqli_fetch_assoc($result);
    // $count = mysqli_num_rows($result);
    

    

    
    if (mysqli_num_rows($result) > 0) {
     
        $logbook = array();
        while($row = mysqli_fetch_assoc($result)) {
            $log = [
                'staffnme' => $row['staffname'],
                'logday' => $row['Day'],
                'logdate' => $row['checkInDate'],
                'inTime' => $row['checkInTime'],
                'outTime' => $row['checkOutTime']
            ];
            
                    // if(isset($_POST['decline'])){
                    //     echo "delete log";
                    //     $staff_id = $row['staffId'];
                    //     $staff_date = $row['checkInDate'];
                    //     $query =  "DELETE from logtable where staffId = $staff_id and checkInDate =  $staff_date";
                    // }
                    // if(isset($_POST['accept'])){
                    //     echo "log accepted";
                    // }

            array_push($logbook,$log);
            // echo $staffnme = $row['staffname']."| ". $logday = $row['Day']."| ". $logdate = $row['checkInDate'] ."| ". $inTime = $row['checkInTime']."| ". $outTime = $row['checkOutTime']."<br>" ;
           
        }
    } 

    
// if(isset($_POST['search'] )){
    
//     // $searchdate = $_POST['dateinput'];
//     // $stringDate = strtotime($searchdate);
//     // $unixdate = date("Y-m-d",  $stringDate );
//     $unixdate = $_POST['dateinput'];
//     var_dump( $unixdate);

//     $sql =  "SELECT staffinfo.staffname, logtable.staffId, logtable.Day, logtable.checkInDate, 
//     logtable.checkInTime, logtable.checkOutTime FROM staffinfo INNER JOIN logtable ON staffinfo.staffId = logtable.staffId where checkInDate = $unixdate ";

//         $result = mysqli_query($conn, $sql);
//         var_dump($result);
//         if (mysqli_num_rows($result) > 0) {
         
//             $logbook = array();
//             while($row = mysqli_fetch_assoc($result)) {
//                 echo $staffnme = $row['staffname']."| ". $logday = $row['Day']."| ". $logdate = $row['checkInDate'] ."| ". $inTime = $row['checkInTime']."| ". $outTime = $row['checkOutTime']."<br>" ;
// }
// }
// }
echo json_encode($logbook);
    
    
    // foreach ($row as $value){
    //     echo $staffnme = $row['staffname']."| ". $logday = $row['Day']."| ". $logdate = $row['checkInDate'] ."| ". $inTime = $row['checkInTime']."| ". $outTime = $row['checkOutTime']."<br>" ;
    // }
   
    
    


