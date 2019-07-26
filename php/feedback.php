<?php
require ('bootstrap.php');

    $data = array();

    if(isset($_POST['ID'])){
        $staffID = $_POST['ID'];
        
     
    $sql = "SELECT display, id ,checkInDate from actiontable WHERE staffid = '$staffID' ";
    $result = mysqli_query($conn, $sql);   
      
        if (mysqli_num_rows($result) > 0) {
            $logbook = array();                
            $data['response'] = 'success';
                while($row = mysqli_fetch_assoc($result)) {
                    if ($row['display'] == null){
                       
                        $log = [
                        'display' => $row['checkInDate']
                        ];
                        array_push($logbook,$log);

                        $rowId = $row['id'];
                        $sql =  "UPDATE actiontable set display = 'seen' WHERE id = $rowId ";
                        if(mysqli_query($conn, $sql)){
                            $data['response'] = 'success';
                        }
                    }
                    
                }
                $data['logbook'] = $logbook;
         
}else{
    $data['resopnse'] = 'error';
}
    }
    echo json_encode($data);
