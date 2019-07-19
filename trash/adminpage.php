

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="css_files/style.css" type="text/css">

    <link href="css_files/fontawesome-free-5.9.0-web/css/fontawesome.css" rel="stylesheet">
    <link href="css_files/fontawesome-free-5.9.0-web/css/brands.css" rel="stylesheet">
    <link href="css_files/fontawesome-free-5.9.0-web/css/solid.css" rel="stylesheet">
    
    <script src="bootstrap/jquery-3.3.1.slim.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
     <link rel="stylesheet" type="text/css" href="css_files/w3.css2.css">
     

    <title>aiti</title>
  </head>
  <body >
   
   <style>
  
  
 
  
   .container{
      max-width: 100%;
  } 
 
  
</style>
   
   
 <!-- <div class="container log_cont " style=" height:60px;">
          <img id="logo" src="media/logo.png" alt="">
  </div>
   -->
          

   <div class="container"><br>
    <center>
    <div class="row">
      <div class="col"><img src="media/AITI LOGO RGB2.png" alt="" style="max-width: 60%; margin-left: 5%;"></div>
    </div>
    
    <br>
    <br>

      <table class="table table-striped table-dark" id="disp_tbl">
       
          <tr>
            <th scope="col">Staff Name</th>
            <th scope="col">Day</th>
            <th scope="col">Date</th>
            <th scope="col">Arrival Time</th> 
            <th scope="col">Departure Time</th>
            <th scope="col">Delete Log</th>
            <th scope="col">Approve Log</th>
          </tr>
      </table>

    </div>
</center>
<script>
    $(document).ready(()=>{
        $.get("php/adminsignin.php",(data)=>{
            if(typeof(data) == "string"){
                data = JSON.parse(data);
            }
            var table = "";
					data.logbook.forEach((i) =>{
						table += '<tr>'+
						'<td>'+ i.staffnme +'</td>'+
						'<td>'+ i.logday +'</td>'+
						'<td>'+ i.logdate +'</td>'+
						'<td>'+ i.inTime +'</td>'+
						'<td>'+ i.outTime +'</td>'+
						'<td><button>delete<button></td>'+
						'<td><button>approve<button></td>'+
						'<tr>';
          });
                    $("#disp_tbl").append(table);
            //var val = data.val;
            //var password = data.pass;

            //console.log(data.val + data.pass);
        })
    })
</script>
  
</body>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <!-- <script src="bootstrap/popper.min.js"  crossorigin="anonymous"></script>
    <script src="bootstrap/js/bootstrap.min.js" crossorigin="anonymous"></script> -->
    <script src="javascript_files/jquery-3.4.1.slim.min.js"></script>
     <script src="javascript_files/jquery-3.4.1.min.js"></script>
  	 <script src="javascript_files/my_query.js"></script>
  
</html>