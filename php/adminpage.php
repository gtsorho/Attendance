<?php

require ('bootstrap.php');
$data = array();


        function validateDate($date, $format = 'Y-m-d')
        {
            $d = DateTime::createFromFormat($format, $date);
            return $d && $d->format($format) == $date;
        }

        // var_dump(validateDate('2012-02-30')); # true
        $search_date = strtotime($_POST['search_date']);
        $act_time = date('Y-m-d', $search_date);
        $date_tell = validateDate($act_time);


    // $row = mysqli_fetch_assoc($result);
    // $count = mysqli_num_rows($result);
    
    if($date_tell){
        $data['response'] = 'success'; 
        

        $sql =  "SELECT logtable.id, staffinfo.staffname, logtable.staffId, logtable.Day, logtable.checkInDate, 
        logtable.checkInTime, logtable.checkOutTime FROM staffinfo INNER JOIN logtable ON staffinfo.staffId = logtable.staffId 
        where  logtable.checkInDate = '$act_time' ";
        
        $result = mysqli_query($conn, $sql);
            


        if (mysqli_num_rows($result) > 0) {
     
            $logbook = array();
            while($row = mysqli_fetch_assoc($result)) {
                $log = [
                    'logid' => $row['id'],
                    'staffnme' => $row['staffname'],
                    'logday' => $row['Day'],
                    'logdate' => $row['checkInDate'],
                    'inTime' => $row['checkInTime'],
                    'outTime' => $row['checkOutTime']
                ];
                array_push($logbook,$log);
                $data["logbook"] = $logbook;
            }
        }else{
            $data['response'] = "error";
            $data['message'] = "No Record Found";
        }

        
    }else{
        $data['response'] = 'error';
        $data['message'] = "Invalid date entered";
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
echo json_encode($data);
    
    
    // foreach ($row as $value){
    //     echo $staffnme = $row['staffname']."| ". $logday = $row['Day']."| ". $logdate = $row['checkInDate'] ."| ". $inTime = $row['checkInTime']."| ". $outTime = $row['checkOutTime']."<br>" ;
    // }
   
    
    


