$(document).ready(function() {

var ValCheck = new Array("false", "false", "false", "false", "false", "false", "false", "false", "false");


$('#first-name').focusout(function(){
		var fieldText = $('#first-name').val();

     if(fieldText === "") {
       $("#error-first-name").text("Required");        
		
      } 
      else {
		 ValCheck[0] = true;
	  }
});

$('#last-name').focusout(function(){
		var fieldText = $('#last-name').val();

     if(fieldText === "") {
       $("#error-last-name").text("Required");        
		
      } 
      else {
		ValCheck[1] = true;
	  }
});

$('#address').focusout(function(){
			var fieldText = $('#address').val();

     if(fieldText === "") {
       $("#error-address").text("Required");        
		
      } 
      else {
		ValCheck[2] = true;
	  }
});

$('#city').focusout(function(){
	var fieldText = $('#city').val();
	
	if(fieldText === "noAnswer"){
		$("#error-city").text("Required");
	}
	if(fieldText === "other"){
		var data = prompt("Please enter your city");
		ValCheck[3] = true;
	}
	 else {
		ValCheck[3] = true;
	}	
});

$('#zip').focusout(function() {
    var fieldText = $('#zip').val();
	var patt = new RegExp("^[0-9]{4,5}$");
	
	var condition = patt.test(fieldText);
	
	if(condition === true){
		ValCheck[4] = true;
		}
	else {
		$("#error-zip").text("4-5 Numeric Digits Required");
	}
	
});

var firstEmail = null;

$('#email').focusout(function() {
    var fieldText = $('#email').val();
	var patt = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
	firstEmail = fieldText;
	var condition = patt.test(fieldText);
	
	if(condition == false){
		$("#error-email").text("Required");
		
		}
	else {
       	ValCheck[5] = true;
	}
});

$('#confirm-email').focusout(function() {
    var fieldText = $('#confirm-email').val();
	
	if(fieldText === firstEmail){
		$("#match-email").text("Email's Match");
		ValCheck[6] = true;
	}
	else {
		$("#error-confirm-email").text("Email's Must Match");
	}


});






$('#submit').click(function(){
	var numOfChecked = $('input[type="checkbox"]:checked').length
	var radioSelected = $('input[type="radio"]:checked').length
	
	if(radioSelected === 0)
	{
		$("#error-car").text('Please answer the question.');
	} else {
	  ValCheck[7] = true;	
	}
	
	if(numOfChecked == 0){
		$("#error-language").text("Please check at least one field.");
	} else {
		ValCheck[8] = true;
	}
	
  
  for (i = 0; i < ValCheck.length; i++)
    {
        var con = ValCheck[i];
      	if(con === "false")
	      {
          $('#error-form').text('Your form is incomplete please check for errors.');
		      throw 500;
		   
	      } 
    }
  
   $('form').submit();

})



// var RequiredField = function(field, valCheck){
// 	var self = this;
	
// 	var fieldText = $('#' + field).val();

//      if(fieldText === "") {
//        $("#error-" + field).text("Required");        
		
//       } 
//       else {
// 		valCheck = true;
// 	  }
	
	
// };



})