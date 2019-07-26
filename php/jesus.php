<?php
// require  ('bootstrap.php');

// $data = array();

// $sql = "SELECT * FROM actiontable ";
// $result = $conn->query($sql);

// if (mysqli_num_rows($result) > 0) {
//     // output data of each row
//     $logbook = array();
//     while($row =mysqli_fetch_assoc($result)) {
//          $log = [
//             'logid' => $row['id'],
//             'logdate' => $row['checkInDate'],
//             'inTime' => $row['checkInTime'],
//             'outTime' => $row['checkOutTime']
//         ];
//         array_push($logbook,$log);
//     }

//     $data['logbook'] = $logbook;
// }

// echo json_encode($data);


require ('bootstrap.php');
// $data = array();
// $staffID = $_POST['ID'];

$sql =  "SELECT * FROM actiontable";

$result = mysqli_query($conn, $sql);
// $row = mysqli_fetch_assoc($result);
// $count = mysqli_num_rows($result);





if (mysqli_num_rows($result) > 0) {
 
    // $logbook = array();
    while($row = mysqli_fetch_assoc($result)) {
        // $log = [
            var_dump($row['id']) ;
            // 'logdate' => $row['checkInDate'],
            // 'inTime' => $row['checkInTime'],
            // 'outTime' => $row['checkOutTime']
        // ];

        // array_push($logbook,$log);

    }
    // $data['logbook'] = $logbook;
}
// echo json_encode($data);