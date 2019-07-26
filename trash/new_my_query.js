$(document).ready(function(){
		
		
	/*javascript screen for @media screen (mobile and other devices except desktop)*/

   /* -----------------------------------------------------------------------------------*/
   /*javascript validatiom for the modal pop up*/
   var reg_code = /^(AITI)-[0-9]{8}$/i;
   var pass_code = /^[0-9]{5,10}$/;
   var date_reg = /(^[a-zA-Z]+)\s([0-3]{1}[0-9]{1})\s([0-9]{4}$)/;
   /*________________________________________*/

   /* validating user on the frontEnd */
	$("#search_date").keyup(function(){
		var search_val = $(this).val();
		search_val.charAt(0).toUpperCase();
		if(!date_reg.test(search_val)){
			$("#notify").text("Please the correct date format");
			$("#notify").fadeIn();
		}
		else{
			$("#notify").fadeOut();
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
							new_table += '<tr id="new_table">'+
							'<td>'+ val.staffnme +'</td>'+
							'<td>'+ val.logday +'</td>'+
							'<td>'+ val.logdate +'</td>'+
							'<td>'+ val.inTime +'</td>'+
                        	'<td>'+ val.outTime +'</td>'+
							'<td><button type="button" id= "'+val.logid+'"  class="btn btn-outline-dark btn_dlt">Decline</button></td>'+
							'<tr>';
						});
						$("#find").text(data.logbook.length + " SEARCH RESULTS(S) FOUND");
						$("#find").fadeIn();
						$("#old_table").replaceWith(new_table);
						
						$(".btn_dlt").click((e) =>{
                        var t_row = e.currentTarget;
                        var id = e.currentTarget.id;

                        $.ajax({
                            url: "php/decline.php",
                            method: "post",
                            data: {"log_Id":id},
                            success: (data)=>{
								if (typeof(data) == "string" ){
									data = JSON.parse(data);
								}
                                if(data.response == "success"){
                                    $(t_row).closest('tr').remove();
                                }
                                else{
									alert("invalid id");
                                }

							},
							error:(err) => {
								alert(err)
							}
                        })
                    })
						
					}
					else if(data.response == "error"){
						$("#new_table").replaceWith("");
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
	
					$.each(data.logbook, (i,val)=>{
						table += '<tr id="old_table">'+
						'<td>'+ val.staffnme +'</td>'+
						'<td>'+ val.logday +'</td>'+
						'<td>'+ val.logdate +'</td>'+
						'<td>'+ val.inTime +'</td>'+
                        '<td>'+ val.outTime +'</td>'+
						'<td><button type="button" id= "'+val.logid+'"  class="btn btn-outline-dark btn_dlt">Decline</button></td>'+
						'<tr>';
					});
					$("input[name='Pass']").val("");
					$("#LogIn").attr("data-target","#exampleModalScrollable");
					$("#exampleModalScrollable").modal("toggle");
					$("#disp_tbl tbody").append(table);

                    $(".btn_dlt").click((e) =>{
                        var t_row = e.currentTarget;
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
                                    $(t_row).closest('tr').remove();
                                }
                                else{
									alert("invalid id");
                                }

							},
							error:(err) => {
								alert(err)
							}
                        })
                    })
                    
					
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
								$("#Submit").hide();
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
							}
					  }
					  else if(data.response == "error"){
						  console.log(data.message);
						  $("#staff_alert").addClass("w3-text-red");
						  $("#staff_alert").text(data.message);
						$("#staff_alert").show(data.message);
					  }
					},
					error: function(err){
						console.log(err);
					   }
				});

					   
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
									 $("input#staff_ID").val("");
									 $(".alert").text("staff name: " +data.log.staffname+ " | Date: " +data.log.logdate+ " | checkin Time " +data.log.inTime);
									 $(".alert").show();
							}
						},
						error: (data) => {
							if(typeof(data) == "string"){
								data = JSON.parse(data);
									$("#staff_alert").text(data.message);
									$("#staff_alert").addClass("w3-text-red");
									$("#staff_alert").fadeIn();
									$("input#staff_ID").val("");
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
										$("input#staff_ID").val("");
										
							}
						},
						error: (data) => {
							if(typeof(data) == "string"){
								data = JSON.parse(data);
								$("#staff_alert").text(data.message);
								$("#staff_alert").addClass("w3-text-red");
								$("#staff_alert").fadeIn();
								$("input#staff_ID").val("");
							}
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
		   $("#staff_alert").text("Please Enter a valid ID, eg: AITI-34437657");
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