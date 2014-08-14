    window.onload = function() {
      document.getElementById("contact-form").onsubmit = validateForm;
    }
    
    function validateForm() {
      var validFirstName = validateTextField("first-name", "error-first-name");
      var validLastName = validateTextField("last-name", "error-last-name");
      var validAddress = validateAddress("adress", "error-address")
     
      var validCity = validateCity("", "")
      var validZip = validatePostCode ()
      var validPhone = validatePhone("phone", "error-phone");
      var validEmail = validateEmail("","")
      var validConfirmEmail = validateConfirmEmail ( )
      return validFirstName && validLastName && validAddress && validPhone && validEmail && validConfirmEmail;
      
    }
    
    function validateTextField(fieldId, errorId){
      var fieldText = document.getElementById(fieldId).value;
      var errorSpan = document.getElementById(errorId);
      
      if(fieldText === "") {
        errorSpan.className = "error";
        return false;
      } 
      else {
       
        errorSpan.className = "hidden";
        return true;
      }
    }
    function validatePhone(inputtxt) {  
     
      var phoneno = /^\d{10}$/;  
        if(inputtxt.value.match(phoneno)) {  
            return true;  
        }  
        else  {  
           alert("Not a valid Phone Number");  
           return false;  
        }  
         }

    function validateEmail(email)  {
        if (var re = /\S+@\S+\.\S+/;)  {
        errorSpan.className = "hidden";
        return true;
        }
    }
  function validateConfirmEmail(conirmEmail){
    if (confirmEmail === email){
       errorSpan.className = "match";
      return true;
    }
  else {
    errorSpan.className = "error"
    return false;
  }
}

    function validateCity(){
  //if the value of city is noAnswer return false
      if(city == "noAnswer" ) {
       return false;
      } 
      else(city== "other"){
        var retVal = prompt("Please enter your city : ", "city");
        errorSpan.className = "hidden";
        return true;
      }
      else {
        errorSpan.className = "hidden";
        return true;
      }
    }
  function validateZip(zip) {
     if(!postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;) {
       return false;
     }
     else {
        errorSpan.className = "hidden";
        return true;
     }
  }
   