


<?php

$data = array();



require_once ('bootstrap.php');

// unset($_SESSION['admin']);

// $admin = $_SESSION['admin'];
// var_dump($admin);

// if($admin != $_SESSION['admin']  || $admin == null ){

	 $adminPass = mysqli_real_escape_string($conn, $_POST["pass"]);
	 $adminID = mysqli_real_escape_string($conn, $_POST["ID"]);


	$query = "SELECT * FROM staffinfo WHERE staffId = '$adminID' and adminPassword = '$adminPass' ";
    
    $result = mysqli_query($conn,$query);
      $count  = mysqli_num_rows($result);
 
    


	if($count != 0) {
		$_SESSION['admin'] = $_POST["ID"];

		$data['response'] = 'success'; 
		
		$startdate=strtotime("now");
		$today = date("Y-m-d", $startdate);
		

	$sql =  "SELECT logtable.id, staffinfo.staffname, logtable.staffId, logtable.Day, logtable.checkInDate, 
		logtable.checkInTime, logtable.checkOutTime FROM staffinfo INNER JOIN logtable ON staffinfo.staffId = logtable.staffId 
		where  logtable.checkInDate = '$today'";
		
		$result = mysqli_query($conn, $sql);
		// $row = mysqli_fetch_assoc($result);
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
		unset($_SESSION['admin']);
	} else {
		$data['response'] = 'error';
		$data['message'] = "Invalid staffname or Password!";
		
	}
// }else{
	
// }


	// echo json_encode($logbook);
	echo json_encode($data);


?>