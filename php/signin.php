<?php 

    $error = false;

//   if(!isset($_SESSION)) 
//   { 
//       session_start(); 

//       require_once ('dbconnect.php');

require_once ('bootstrap.php');

//if (isset($_POST['submit'])){ //start of authentication of staff id

$data = array();
$data['response'] = 'success';

if (isset($_POST['ID']) == false){
    $data['response'] = 'error';
    $data['message'] = "please enter your staff id"; 
    //echo "please enter your staff id";
}else{

        $staffID = mysqli_real_escape_string($conn, $_POST['ID']);
                            
                $query = "SELECT staffId FROM `staffinfo` WHERE staffId = '$staffID'";
    //start get staff id in database
                $result = mysqli_query($conn, $query);
                $row = mysqli_fetch_assoc($result);

                if ($row == null){
                    $data['response'] = 'error';
                    $data['message'] = "try again"; 
                    //echo "try again";
                        
                }else{
                    $data['response'] = 'success';
                    $data['message'] = "signIn Successful";
                    
                    //echo "successful";
                    $staff_id = $row["staffId"];
                    //echo "id: " . $staff_id;
                    $_SESSION['staff'] = $staff_id;
                    //var_dump($staffID);
                    
    //end get staff id in database

    //start get log boolean from database
                        $date = date("Y-m-d");
                        $STAFF = $_SESSION['staff'];
                        $query = "SELECT logBool, checkOutTime from logtable WHERE checkInDate = '$date' and staffId = '$STAFF' ";//and checkOutTime is NULL";
                        $result= mysqli_query($conn, $query);
                       $row = mysqli_fetch_assoc($result);
                        //echo "bool:" . $row['logBool'];
                        $log_bool = $row['logBool'];
                         
    //end get boolean from database

                    // $date = date("Y-m-d");
                    // $query = "SELECT logBool from logtable WHERE logDate = '$date' and staffId = '$staffID'";
             
                
                    if ($log_bool == 1 && $row['checkOutTime'] == null){
                    // echo '<style type="text/css">

                    // .button2 {
                    //     display: block;
                    // }
                    // .button1{
                    //     display:none;
                    // }
                    // </style>';
                    $data['message'] = 'checkout';
                    $data['checkin'] = true;
                    $data['checkout'] = false;
                }else if($log_bool != 1){

                    // echo '<style type="text/css">

                    // .button2 {
                    //     display: none;
                    // }
                    // .button1{
                    //     display:block;
                    // }
                    // </style>';
                    $data['message'] = 'checkin';
                    $data['checkin'] = false;
                    $data['checkout'] = false;
                }else{
                    $data['checkin'] = true;
                    $data['checkout'] = true;
                    $data['message'] = 'you\'ve checked out';
                    //echo 'you\'ve checked out';
                }
                }
    }

// }//end of authentication on staff id

  //}
  echo json_encode($data); 

