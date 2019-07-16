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

   $("#modal_submit").click(function(){
	   var admin_id = $("#adm").val();
	   var admin_password = $("#adm_pass").val();
	   if(admin_id.length == 0 && admin_password.length == 0){
		   $("#adm").addClass("w3-border w3-border-red");
		   $("#adm_pass").addClass("w3-border w3-border-red");
		   $("#validate_msg").show();
		   return false
	   }
	   else if(admin_id.length != 0 && admin_password.length == 0){
		   if(!reg_code.test(admin_id)){
			   $("#adm").addClass("w3-border-red");
			   $("#validate_msg").text("Please enter a valid ID format");
			   $("#validate_msg").fadeIn();
			   return false
		   }
		   else if(admin_password.length == 0){
			   $("#adm_pass").addClass("w3-border w3-border-red");
			   $("#validate_msg").text("Please enter your password");
			   $("#validate_msg").fadeIn();
			   return false
		   }
		   else{
			   $("#adm").addClass("w3-border w3-border-green");
			   $("#adm_pass").addClass("w3-border w3-border-green");
			   $("#validate_msg").fadeOut();
			   return true
		   }
	   }
	   else if (admin_id.length == 0 && admin_password.length != 0) {
			   $("#adm").addClass("w3-border w3-border-red");
			   $("#validate_msg").text("Please enter your ID");
			   $("#validate_msg").fadeIn();
			   return false
	   }
	   else if(admin_id.length != 0 && admin_password.length != 0){
		   if(!reg_code.test(admin_id)){
			   $("#adm").addClass("w3-border-red");
			   $("#validate_msg").text("Please enter a valid ID format");
			   $("#validate_msg").fadeIn();
			   return false
		   }
		   else if(!pass_code.test(admin_password)){
			   $("#adm_pass").addClass("w3-border w3-border-red");
			   $("#validate_msg").text("Please enter a valid password format, password should contain at least five numerics");
			   $("#validate_msg").fadeIn();
			   return false
		   }
		   else{
			   $("#validate_msg").fadeOut();
			   return true
		   }
	   }

	   else{
			   $("#adm").addClass("w3-border-green");
			   $("#adm_pass").addClass("w3-border-green");
			   $("#validate_msg").fadeOut();
			   return true
	   }
   })
   $("#adm_pass").keyup(function(){
	   var pass_val = $(this).val();
	   if(!pass_code.test(pass_val)){
		   $("#adm_pass").addClass("w3-border w3-border-red");
		   $("#validate_msg").text("Please enter a valid password format, password should contain at least five numerics");
		   $("#validate_msg").fadeIn();
		   return false
	   }
	   else{
		   $("#adm_pass").removeClass("w3-border w3-border-red");
		   $("#adm_pass").addClass("w3-border w3-border-green");
		   $("#validate_msg").fadeOut();
		   return true
	   }
   })
   $("#adm").keyup(function(){
	   var adm_val = $(this).val();
	   if(!reg_code.test(adm_val)){
		   $("#adm").addClass("w3-border w3-border-red");
		   $("#validate_msg").text("Please enter a valid ID, eg: AITI-34437657");
		   $("#validate_msg").fadeIn();
		   return false
	   }
	   else{
		   $("#adm").removeClass("w3-border w3-border-red");
		   $("#adm").addClass("w3-border w3-border-green");
		   $("#validate_msg").fadeOut();
		   return true
	   }
   })



   /*________________________________________*/

   /* validating user on the frontEnd */
   


   $("button#LogIn").click(function(){
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
	   else if(id_val.length != 0 && staff_pass.length != 0){
		   if (!reg_code.test(id_val)) {
			   $("#admin_ID").addClass("w3-border-red");
			   $("#admin_alert").text("Please Enter a valid ID, eg: AITI-34437657");
			   $("#admin_alert").fadeIn();
			   return false
		   }
		   else if (!pass_code.test(staff_pass)) {
			   $("#pass").addClass("w3-border-red");
			   $("#admin_alert").text("Please enter a valid password format, password should contain at least five numerics");
			   $("#admin_alert").fadeIn();
			   return false
		   }
		   else{
			   $("#pass").addClass("w3-border-green");
			   $("#admin_ID").removeClass("w3-border-red");
			   $("#admin_ID").addClass("w3-border-green");
			   $("#admin_alert").fadeOut();
			   return true
		   }
		   
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

   $("button#Submit").click(function(){
	   var new_reg = /^(AITI)-[0-9]{8}$/i;
	   var staff_id = $("input#staff_ID").val();
	   if(staff_id.length == 0){
		   $("#staff_ID").addClass("w3-border-red");
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
			   ("#staff_ID").removeClass("w3-border-red");
			   $("#staff_ID").addClass("w3-border-green");
			   $("#staff_alert").fadeOut();
			   return true

		   }
	   }
	   else{

		   $("#staff_alert").fadeOut();
		   return true
	   }
   })
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