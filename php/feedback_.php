<?php
require ('bootstrap.php');
$data = array();
// $staffID = $_POST['ID'];

$sql =  "SELECT logtable.id, staffinfo.staffname, logtable.staffId, logtable.Day, logtable.checkInDate, 
logtable.checkInTime, logtable.checkOutTime FROM staffinfo INNER JOIN logtable ON staffinfo.staffId = logtable.staffId ";

$result = mysqli_query($conn, $sql);
//$row = mysqli_fetch_assoc($result);
// $count = mysqli_num_rows($result);





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

    }
    $data['logbook'] = $logbook;
}
echo json_encode($data);