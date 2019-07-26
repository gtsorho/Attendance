$(document).ready(function(){
		
		
	/*javascript screen for @media screen (mobile and other devices except desktop)*/
	if($(window).width() < 800){
		$(".butt").click(function(){
			$("#admin_note").text("You cannot view logs on your mobile screen, please use your desktop  or PC");
			$("#admin_note").fadeIn();
			$("#admin_note").fadeOut(9000);
			$(".butt").attr("disabled",true);
		})
	}

   /* -----------------------------------------------------------------------------------*/
   /*javascript validatiom for the modal pop up*/
   var reg_code = /^(AITI)-[0-9]{8}$/i;
   var pass_code = /([a-z-Z0-9@#_.!&]+){8,32}/;
   var date_reg = /(^[a-zA-Z]+)\s([0-3]{1}[0-9]{1})\s([0-9]{4}$)/;
   /*________________________________________*/

   /* validating user on the frontEnd */
	$("#search_date").keyup(function(){
		var search_val = $(this).val();
		if(!date_reg.test(search_val)){
			$("#notify").fadeIn();
		}
		else{
			$("#notify").fadeOut();
			$(".toast").hide();
			$.ajax({
				url: "php/adminpage.php",
				method: "post",
				data: {"search_date": search_val},
				datatype: "json",
				success: (data) =>{
					if(typeof(data) == "string"){
						data = JSON.parse(data);
					}
					if(data.response == "success"){
						var new_table = "";
	
						$.each(data.logbook, (i,val)=>{
							new_table += '<tr>'+
							'<td>'+ val.staffnme +'</td>'+
							'<td>'+ val.logday +'</td>'+
							'<td>'+ val.logdate +'</td>'+
							'<td>'+ val.inTime +'</td>'+
                        	'<td>'+ val.outTime +'</td>'+
							'<td><button type="button"  class="btn btn-outline-dark btn_dlt">Decline</button>'+
									'<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" style="position:sticky;left: 420px;top:0px;opacity: 1;float: right;margin-right: 5px;margin-top: -37px;width: 250px ;display: none;">'+
                       						 '<div class="toast-header ">'+
                          
                         					 '<strong class="mr-auto">Delete Log Permanently?</strong>'+
                          						'<small></small>'+
                        
                       						 '</div>'+
                        					'<div class="toast-body">'+
                          					'<center>'+
                          					'<button type="button" class="btn btn-outline-primary yes" id= "'+val.logid+'"  style="width: 50px; margin-right:20px">Yes</button>'+
                         				 	'<button type="button" class="btn btn-outline-danger no"  style="width: 50px; margin-left:20px">No</button>'+
                        					'</center></div>'+
                      					'</div>'+
									'</div>'+
									'</td>'+
							'<tr>';
						});
						$("#find").text(data.logbook.length + " SEARCH RESULT(S) FOUND for " + search_val.toUpperCase());
                        $("#find").fadeIn();
                        $("#search_date").val("")
                        $("#disp_tbl tbody tr").remove();
                        $("#disp_tbl tbody").append(new_table);
						$(".btn_dlt").click((e) =>{
							e.stopPropagation();
							var btn_target = e.currentTarget;
							$(btn_target).next().show();
						})
						$(".yes").click(function(e){
							var yes_targ = e.currentTarget;
							var id = e.currentTarget.id;
							$.ajax({
								url: "php/decline.php",
								method: "post",
								data: {"log_Id":id},
								success: (data)=>{
									if (typeof(data)== "string" ){
										data = JSON.parse(data);
									}
									if(data.response == "success"){
												$(yes_targ).closest("tr").fadeOut();
												$(".toast").hide();	
									}
									else{
										alert("invalid id");
									}
	
								},
								error:(err) => {
									alert(err)
								}
							})
							$(".toast").hide();
						})
						$(".no").click(function(e){
							var no_targ = e.currentTarget;
							$(no_targ).parents("div.toast").hide();
						})
						
					}
					else if(data.response == "error"){
						$("#disp_tbl tbody tr").remove();
						$("#find").text(data.message);
						$("#find").fadeIn();
					}
				},
				error: (err) =>{
					console.log(err)
				} 
			})
		}

	})
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
		   $("#admin_alert").text("Please Enter a your ID");
		   $("#admin_alert").fadeIn();
		   return false
	   }
	   else{
		$(".toast").hide();
		$.ajax({
			url: "php/adminsignin.php",
			method: "post",
			datatype: "json",
			data: {"ID": id_val, "pass": staff_pass},
			success: (data) => {
                $("#find").fadeOut();
				
				if(typeof(data) == "string"){
					data = JSON.parse(data);
					
				}
				if(data.response == "success"){
					var table = "";
					var new_div = "";
					$.each(data.logbook, (i,val)=>{
						table += '<tr >'+
									'<td>'+ val.staffnme +'</td>'+
									'<td>'+ val.logday +'</td>'+
									'<td>'+ val.logdate +'</td>'+
									'<td>'+ val.inTime +'</td>'+
									'<td>'+ val.outTime +'</td>'+
									'<td><button type="button"   class="btn btn-outline-dark btn_dlt">Decline</button>'+
											'<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" style="position:sticky;left: 420px;top:0px;opacity: 1;float: right;margin-right: 5px;margin-top: -37px;width: 250px ;display: none;">'+
                       						 '<div class="toast-header ">'+
                          
                         					 '<strong class="mr-auto">Delete Log Permanently?</strong>'+
                          						'<small></small>'+
                        
                       						 '</div>'+
                        					'<div class="toast-body">'+
                          					'<center>'+
                          					'<button type="button" class="btn btn-outline-primary yes" id= "'+val.logid+'" style="width: 50px; margin-right:20px">Yes</button>'+
                         				 	'<button type="button" class="btn btn-outline-danger no"  style="width: 50px; margin-left:20px">No</button>'+
											'</center>'+
											'</div>'+
                      						'</div>'+
											'</div>'+
									'</td>'+
									
									'<tr>';
									// console.log(val.logid);
                    });
                    $("#search_date").val();
                    $("#disp_tbl tbody tr").remove();
					$("input[name='Pass']").val("");
					$("#exampleModalScrollable").modal("toggle");
					$("#disp_tbl tbody").append(table);
					$("#search_form").after(new_div);
					

					$(".btn_dlt").click((e) =>{
						e.stopPropagation();
						var btn_target = e.currentTarget;
						$(btn_target).next().show();
					})
					$(".yes").click(function(e){
						var yes_targ = e.currentTarget;
						var id = e.currentTarget.id;
						console.log(id);
						$.ajax({
							url: "php/decline.php",
							method: "post",
							data: {"log_Id":id},
							success: (data)=>{
								if (typeof(data)== "string" ){
									data = JSON.parse(data);
								}
								if(data.response == "success"){
											$(yes_targ).closest("tr").fadeOut();
											$(".toast").hide();	
								}
								else{
									alert("invalid id");
								}

							},
							error:(err) => {
								alert(err)
							}
						})
						$(".toast").hide();
					})
					$(".no").click(function(e){
						var no_targ = e.currentTarget;
						$(no_targ).parents("div.toast").hide();
					})

					
					
		
					// var new_target = e.Target;
					
				}
				else if(data.response == "error"){
					$("#admin_alert").text(data.message);
					$("#admin_alert").fadeIn();
					$("input[name='Pass']").val("");
					console.log(data);					
				}
			}, 
			error: (err) => {
				console.log(err);
			}
		})
	   }
   });

   $("input#admin_ID").keyup(function(){
	   var val= $(this).val();
	   if (!reg_code.test(val)) {
		   $("#admin_ID").addClass("w3-border-red");
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
		//    $("#admin_alert").text("Please enter a valid password");
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
   $("button#Submit").click(function(e){
	   e.preventDefault();
	    var staff_id = $("input#staff_ID").val();
	   if(staff_id.length == 0){
		   $("#staff_ID").addClass("w3-border-red");
		   $("#staff_alert").text("Please Enter a your ID")
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
					}
					  if(data.response == "success"){
							if(data.checkin == false && data.checkout == false){
								$.ajax({
									url: "php/feedback.php",
									method: "post",
									data:{'ID': staff_id},
									datatype: "json",
									success: (data) => {
										if(typeof(data) == "string"){
											data = JSON.parse(data);
										}
										if(data.response == "success"){
											var new_p = "";
											$.each(data.logbook, (i,val)=>{
												new_p += '<p>'+val.display+'</p>'+'<br>';
											})
											if(data.logbook.length == 1){
												console.log(data.logbook[0].display);
												$("p#al").text("Your log at " +data.logbook[0].display+ " was deleted");
												$("div#alert").show();
											}
											else if(data.logbook.length > 1){
												$("p#al").text("Your logs at the below dates where deleted");
												$("div#alert").append(new_p);
												$("div#alert").show();
											}
										}
										else if(data.response == "error"){
											$("p#al").text(data.message);
											$("div#alert").show();
										}
										// else if(data.response == "error"){
										// 		console.log(data.message)
										// }
									},
									error: (err)=>{
										console.log(err)
									}
								});
								$("#Submit").hide();
								$("#check_Out").fadeOut();
								$("#check_in").fadeIn();
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
								$("#staff_alert").fadeOut(10000);
							}
					  }
					  else if(data.response == "error"){
						  console.log(data.message);
						  $("#staff_alert").addClass("w3-text-red");
						  $("#staff_alert").text(data.message);
						$("#staff_alert").fadeIn();
						$("#staff_alert").fadeOut(10000);
					  }
					},
					error: function(err){
						console.log(err);
					   }
				});

					   
				$("#check_in").click( (e) => {
					e.preventDefault();
					$("div#alert").hide();
					$.ajax({
						url: "php/checkin.php",
						method: "post",
						data: {"ID": staff_id, "checkIn": "47734"},
						datatype: "json",
						success: (data) => {
							if(typeof(data) == "string"){
								data = JSON.parse(data);
							}
							if(data.response == "success"){
								$("#staff_alert").text(data.message);
								$("#staff_alert").removeClass("w3-text-red");
								$("#staff_alert").addClass("w3-text-green");
								$("#staff_alert").fadeIn();
								$("#check_in").fadeOut();
								$("input#staff_ID").val("");
								$(".alert").text("staff name: " +data.log.staffname+ " | Date: " +data.log.logdate+ " | checkin Time " +data.log.inTime);
								$(".alert").show();
							}
							else if(data.response == "error"){
								$("#staff_alert").text(data.message);
								$("#staff_alert").addClass("w3-text-red");
								$("#staff_alert").fadeIn();
								$("input#staff_ID").val("");
							}
						},
						error: (err) => {
							console.log(err);
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
							}
							if(data.response == "success"){
								$("#staff_alert").text(data.message);
										$("#check_out").fadeOut();
										$("#staff_alert").removeClass("w3-text-red");
										$("#staff_alert").addClass("w3-text-green");
										$("#staff_alert").fadeIn();
										$(".alert").text("staff name: " +data.log.staffname+ " | Date: " +data.log.logdate+ " | checkin Time " +data.log.inTime+ " | checkout Time "  +data.log.outTime);
										$(".alert").show();
										$("input#staff_ID").val("");
							}
							else if(data.response == "error"){
								$("#staff_alert").text(data.message);
								$("#staff_alert").addClass("w3-text-red");
								$("#staff_alert").fadeIn();
								$("input#staff_ID").val("");
							}
						},
						error: (err) => {
							console.log(err);
						}
					})
			})
	
   }
});

   /*  check in button */

   /* validating with regExp on form feilds*/

   $("input#staff_ID").keyup(function(){
	   var reg_val = $(this).val();
	   if (!reg_code.test(reg_val)) {
		   $("#staff_alert").addClass("w3-border-red");
		   $("#staff_alert").fadeIn();
	   }
	   else{
		   $("#staff_ID").removeClass("w3-border-red");
		   $("#staff_ID").addClass("w3-border-green");
		   $("#staff_alert").fadeOut();
	   }
   });

})
   /* ------------------------------------------------------------------------------------ */