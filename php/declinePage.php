<?php

require ('bootstrap.php');

if (isset($_POST['decline_btn'])){
        $startdate = strtotime("now");
		$today = date("Y-m-d", $startdate);
		

	$sql =  "SELECT * FROM actiontable where checkInDate = '$today'";
		
		$result = mysqli_query($conn, $sql);
		// $row = mysqli_fetch_assoc($result);
		// $count = mysqli_num_rows($result);
		
	
		
	
		
		if (mysqli_num_rows($result) > 0) {
		 
			$logbook = array();
			while($row = mysqli_fetch_assoc($result)) {
				$log = [
					'staffnme' => $row['staffname'],
					'logdate' => $row['checkInDate'],
					'inTime' => $row['checkInTime'],
					'outTime' => $row['checkOutTime']
				];
		
				array_push($logbook,$log);
	
			}
			$data['logbook'] = $logbook;
		}
		
	} else {
		$data['response'] = 'error';
		
	}

	//echo json_encode($logbook);
	echo json_encode($data);
