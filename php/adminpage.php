<?php

require ('dbconnect.php');







    $sql =  "SELECT staffinfo.staffname, logtable.Day, logtable.checkInDate, 
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
            array_push($logbook,$log);
           // echo $staffnme = $row['staffname']."| ". $logday = $row['Day']."| ". $logdate = $row['checkInDate'] ."| ". $inTime = $row['checkInTime']."| ". $outTime = $row['checkOutTime']."<br>" ;
        }
    } 

echo json_encode($logbook);
    
    
    // foreach ($row as $value){
    //     echo $staffnme = $row['staffname']."| ". $logday = $row['Day']."| ". $logdate = $row['checkInDate'] ."| ". $inTime = $row['checkInTime']."| ". $outTime = $row['checkOutTime']."<br>" ;
    // }
   
    
    


