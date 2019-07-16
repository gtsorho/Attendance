


<?php
$message="";
$data = array();

require_once ('dbconnect.php');


    $query = "SELECT * FROM staffinfo WHERE staffId ='" . $_POST["staffid"] . "' and adminPassword = '". $_POST["password"]."' ";
    
    $result = mysqli_query($conn,$query);
      $count  = mysqli_num_rows($result);
 
    


	if($count != 0) {
		

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
		
				array_push($logbook,$log);
	
			}
		} 
	


	 else {
		$data['response'] = 'error';
		$data['message'] = "Invalid staffname or Password!";
		
	}
}

    echo json_encode($logbook);

?>