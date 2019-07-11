<?php  
//require ('signin.php');

 if(isset($_POST['checkOut'])){
                $sql = "SELECT checkOutTime from logtable where staffId = '$STAFF' and checkInDate = '$date' ";
                $result = mysqli_query($conn, $sql);
                
                $row = mysqli_fetch_assoc($result);
                
                
                $outTime = $row['checkOutTime'];

                if($outTime != null){
                    echo " you've already checked out";
                    
                }else{

                    $sql = "UPDATE `logtable` SET `checkOutTime`='$time' WHERE `checkInDate`='$date' AND `staffId` = '$STAFF' ";
                
                    if (mysqli_query($conn, $sql)) {
                        echo "check out successful";
                    } else {
                        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                    }
            
                }
            }