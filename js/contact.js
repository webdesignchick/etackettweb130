$(document).ready(function() {

var ValCheck = {
	firstName: false,
	lastName: false,
	address: false,
	city: false,
	zip: false,
	email: false,
	confirmEmail: false,
	language: false,
	car: false
}



$('#first-name').focusout(function(){
	RequiredField('first-name', ValCheck.firstName);
});

$('#last-name').focusout(function(){
	RequiredField('last-name', ValCheck.lastName);
});

$('#address').focusout(function(){
	RequiredField('address', ValCheck.address);
});

$('#city').focusout(function(){
	var fieldText = $('#city').val();
	
	if(fieldText === "noAnswer"){
		$("span#error-city").text("Required");
	}
	if(fieldText === "other"){
		var data = prompt("Please enter your city");
		ValCheck.city = true;
	}
	 else {
		ValCheck.city = true;
	}	
});

$('#zip').focusout(function() {
    var fieldText = $('#zip').val();
	var patt = new RegExp("^[0-9]{4,5}$");
	
	var condition = patt.test(fieldText);
	
	if(condition == true){
		ValCheck.zip = true;
		}
	else {
		$("span#error-zip").text("4-5 Numeric Digits Required");
	}
	
});

var firstEmail = null;

$('#email').focusout(function() {
    var fieldText = $('#email').val();
	var patt = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
	firstEmail = fieldText;
	var condition = patt.test(fieldText);
	
	if(condition == false){
		$("span#error-email").text("Required");
		
		}
	else {
       	ValCheck.email = true;
	}
});

$('#confirm-email').focusout(function() {
    var fieldText = $('#confirm-email').val();
	
	if(fieldText === firstEmail){
		$("span#match-email").text("Email's Match");
		ValCheck.email = true;
	}
	else {
		$("span#error-confirm-email").text("Email's Must Match");
	}


});






$('#submit').click(function(){
	var numOfChecked = $('input[type="checkbox"]:checked').length
	var radioSelected = $('input[type="radio"]:checked').length
	
	if(radioSelected == 0)
	{
		$("span#error-car").text('Please answer the question.');
	} else {
	  ValCheck.car = true;	
	}
	
	if(numOfChecked == 0){
		$("span#error-language").text("Please check at least one field.");
	} else {
		ValCheck.language = true;
	}
	
	
	if(
	   ValCheck.address &&
	   ValCheck.car &&
	   ValCheck.city &&
	   ValCheck.confirmEmail &&
	   ValCheck.email &&
	   ValCheck.firstName && 
	   ValCheck.lastName &&
	   ValCheck.language && 
	   ValCheck.zip)
	   {
		 $('form').submit();
		 url:"success.html";
		   
	   }
	   else
	   {
		   		$('span#error-form').text('Your form is incomplete please check for errors.');

		   
	   }
	   
	
	
})



var RequiredField = function(field, valCheck){
	var self = this;
	
	var fieldText = $('#' + field).val();

     if(fieldText === "") {
       $("span#error-" + "!").text("Required");        
		
      } 
      else {
		valCheck = true;
	  }
	
	
};



})