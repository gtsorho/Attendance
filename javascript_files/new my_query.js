$(document).ready(function(){
		
		
	/*javascript screen for @media screen (mobile and other devices except desktop)*/
   var media = window.matchMedia("all and (max-width:991px)");
	   if(media.matches){
		   $("#open_admin").click(function(){
		   $("div.modal").fadeIn(4000);
		   $("div.desktop_body").slideUp(2000);
	   })

		   $("#shut_admin").click(function(){
		   $("div.modal").fadeOut(4000);
		   $("#open_admin").fadeIn();
		   $("div.desktop_body").slideDown(2000);
	   })

   };

   /* -----------------------------------------------------------------------------------*/
   /*javascript validatiom for the modal pop up*/
   var reg_code = /^(AITI)-[0-9]{8}$/i;
   var pass_code = /^[0-9]{5,10}$/;
   /*________________________________________*/

   /* validating user on the frontEnd */


   $("#LogIn").click(function(e){
	   e.preventDefault();
	   var id_val = $("input[name='ID']").val();
	   var staff_pass = $("input[name='Pass']").val();
	   if (id_val.length == 0 && staff_pass.length == 0) {
		   $("#admin_ID").addClass("w3-border-red");
		   $("#pass").addClass("w3-border-red");
		   $("#admin_alert").fadeIn();
		   return false
	   }
	   else if(id_val.length != 0 && staff_pass.length == 0){
		   if (!reg_code.test(id_val)) {
			   $("#admin_ID").addClass("w3-border-red");
			   $("#admin_alert").text("Please Enter a valid ID, eg: AITI-34437657");
			   $("#admin_alert").fadeIn();
			   return false
		   }else if(staff_pass.length == 0){
			   $("#pass").addClass("w3-border-red");
			   $("#admin_alert").text("Please Enter your password");
			   $("#admin_alert").fadeIn();
			   return false
		   }
		   else{
			   $("#admin_ID").removeClass("w3-border-red");
			   $("#pass").removeClass("w3-border-red");
			   $("#admin_ID").addClass("w3-border-green");
			   $("#pass").addClass("w3-border-green");
			   $("#admin_alert").fadeOut();
		   }

	   }
	   else if(id_val.length == 0 && staff_pass.length != 0){
		   $("#admin_alert").text("Please Enter a valid ID, eg: AITI-34437657");
		   $("#admin_alert").fadeIn();
		   return false
	   }
	   else{
		$.ajax({
			url: "php/adminsignin.php",
			method: "post",
			datatype: "json",
			data: {"ID": id_val, "pass": staff_pass},
			success: (data) => {
				
				if(typeof(data) == "string"){
					data = JSON.parse(data);
					
				}
				if(data.response == "success"){
					var table = "";
					
					data.logbook.forEach((i) =>{
						table += '<tr>'+
						'<td>'+ i.staffnme +'</td>'+
						'<td>'+ i.logday +'</td>'+
						'<td>'+ i.logdate +'</td>'+
						'<td>'+ i.inTime +'</td>'+
                        '<td>'+ i.outTime +'</td>'+
						'<td><button type="button" id= "i.logid" class= "btn_dlt" class="btn btn-outline-dark">Decline</button></td>'+
						'<td><button type="button" id= "i.logid" class= "btn_apr" class="btn btn-outline-dark">Approve</button></td>'+
						'<tr>';
                    });
                    
					//  window.location.href = "adminpage.php";
					$("#LogIn").attr("data-target","#exampleModalScrollable");
					$("#exampleModalScrollable").modal("toggle");
					$("#disp_tbl").append(table);
					//$.get('php/adminpage.php');
                    // $(".btn_dlt").click(() =>{
                    //     var id = this.id;
                    //     var splitid = id.split(" ");
                    //     var deleteid = splitid[1];

                    //     $.ajax({
                    //         url: "",
                    //         method: "post",
                    //         data: {id:deleteid},
                    //         success: (response)=>{
                    //             if(response == "success"){
                                    
                    //             }
                    //             else{
                    //                 alert("invalid id");
                    //             }

                    //         }
                    //     })
                    // })
                    
					
				}
				else if(data.response == "error"){
					$("#admin_alert").text(data.message);
					$("#admin_alert").fadeIn();
					console.log(data);					
				}
			}, 
			error: (err) => {
				// if(typeof(data) == "string"){
				// 	data = JSON.parse(data);

					
				// 	$("#LogIn").attr(data-target," ");
				// 	$("#admin_alert").text(data.message);
				// 	$("#admin_alert").fadeIn();
				// 	console.log(data);
				// }
				console.log(err);
			}
		})
	   }
   });

   $("input#admin_ID").keyup(function(){
	   var val= $(this).val();
	   if (!reg_code.test(val)) {
		   $("#admin_ID").addClass("w3-border-red");
		   $("#admin_alert").text("Please Enter a valid ID, eg: AITI-34437657");
		   $("#admin_alert").fadeIn();
		   return false
	   }
	   else{
		   $("#admin_ID").removeClass("w3-border-red");
		   $("#admin_ID").addClass("w3-border-green");
		   $("#admin_alert").fadeOut();
	   }
   });

   $("input#pass").keyup(function(){
	   var my_pass = $(this).val();
	   if(!pass_code.test(my_pass)){
		   $("input#pass").addClass("w3-border-red");
		   $("#admin_alert").text("Please enter a valid password format, password should contain at least five numerics");
		   $("#admin_alert").fadeIn();
		   return false
	   }
	   else{
		   $("#pass").removeClass("w3-border-red");
		   $("#pass").addClass("w3-border-green");
		   $("#admin_alert").fadeOut();
		   return true
	   }
   });

   /* validating the staff area*/
   var staff_id;
   $("button#Submit").click(function(e){
	   e.preventDefault();
	   var new_reg = /^(AITI)-[0-9]{8}$/i;
	    staff_id = $("input#staff_ID").val();
	   if(staff_id.length == 0){
		   $("#staff_ID").addClass("w3-border-red");
		   $("#staff_alert").text("Please Enter a your ID")
		   $("#staff_alert").fadeIn();
		   return false
	   }
	   else if(staff_id.length != 0){
		   if(!new_reg.test(staff_id)){
			   $("#staff_ID").addClass("w3-border-red");
			   $("#staff_alert").text("Please Enter a valid ID, eg: AITI-34437657");
			   $("#staff_alert").fadeIn();
			   return false
		   }
		   else{
			   $("#staff_ID").removeClass("w3-border-red");
			   $("#staff_ID").addClass("w3-border-green");
			   $("#staff_alert").fadeOut();
			   
			   $.ajax({
				   type:'POST',
				   url: 'php/signin.php',
				   datatype :'json',
				   data:{'ID': staff_id},
				   
				   success: function(data){
					   if(typeof(data) == "string"){

						data = JSON.parse(data);
						if(data.checkin == false && data.checkout == false){
							$("#Submit").hide();
							$("#check_in").fadeIn();
							// $("#staff_alert").text("please" + " " + data.message);
							// $("#staff_alert").removeClass("w3-text-red");
							// $("#staff_alert").addClass("w3-text-green");
						}
						else if(data.checkin == true && data.checkout == false){
							$("#Submit").hide();
							$("#check_in").fadeOut();
							$("#check_out").fadeIn();
						}
						else{
							$("#Submit").hide();
							$("#check_in").hide();
							$("#check_out").hide();
							$("#staff_alert").text("Please you have checked In and Out successfully");
							$("#staff_alert").removeClass("w3-text-red");
							$("#staff_alert").addClass("w3-text-green");
							$("#staff_alert").fadeIn();
							$("#staff_alert").fadeOut(5000);
						}
					}

					   
				$("#check_in").click( (e) => {
					e.preventDefault();
					$.ajax({
						url: "php/checkin.php",
						method: "post",
						data: {"ID": staff_id, "checkIn": "47734"},
						datatype: "json",
						success: (data) => {
							if(typeof(data) == "string"){
								data = JSON.parse(data);
									 $("#staff_alert").text(data.message);
									 $("#staff_alert").removeClass("w3-text-red");
									 $("#staff_alert").addClass("w3-text-green");
									 $("#staff_alert").fadeIn();
									 $("#check_in").fadeOut();

							}
						},
						error: (data) => {
							if(typeof(data) == "string"){
								data = JSON.parse(data);
									$("#staff_alert").text(data.message);
									$("#staff_alert").addClass("w3-text-red");
									$("#staff_alert").fadeIn();
							}
						}
					})
				})
				
				$("#check_out").click((e) => {
					e.preventDefault();
					$.ajax({
						url: "php/checkout.php",
						method: "post",
						data: {"ID": staff_id,"checkOut": "hhhhh"},
						datatype: "json",
						success: (data) => {
							if(typeof(data) == "string"){
								data = JSON.parse(data);
										$("#staff_alert").text(data.message);
										$("#check_out").fadeOut();
										$("#staff_alert").removeClass("w3-text-red");
										$("#staff_alert").addClass("w3-text-green");
										$("#staff_alert").fadeIn();

										$(".alert").text("staff name: " +data.log.staffname+ " | Date: " +data.log.logdate+ " | checkin Time " +data.log.inTime+ " | checkout Time "  +data.log.outTime);
										$(".alert").show();
										
							}
						},
						error: (data) => {
							if(typeof(data) == "string"){
								data = JSON.parse(data);
								$("#staff_alert").text(data.message);
								$("#staff_alert").addClass("w3-text-red");
								$("#staff_alert").fadeIn();
							}
						}
					})
				})
					   
					 
				   },
				   error: function(data){
					$("#staff_alert").show(data.message);
				   }
				   
			   });
			   
			return true

		   }
	   }
	   else{

		   $("#staff_alert").fadeOut();
		   return true
	   }
   })


   /*  check in button */
   $('#check_in').on('click',function(e){
	   e.preventDefault();
	   

   });
   /* validating with regExp on form feilds*/

   $("input#staff_ID").keyup(function(){
	   var reg_val = $(this).val();
	   if (!reg_code.test(reg_val)) {
		   $("#staff_ID").addClass("w3-border-red");
		   $("#staff_alert").text("Please Enter a valid ID, eg: AITI-34437657");
		   $("#staff_alert").fadeIn();
	   }
	   else{
		   $("#staff_ID").removeClass("w3-border-red");
		   $("#staff_ID").addClass("w3-border-green");
		   $("#staff_alert").fadeOut();
	   }
   });

   /* ------------------------------------------------------------------------------------ */

})