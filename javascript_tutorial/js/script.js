 function  validation(){
    var user = document.getElementById('user').value;
    var pasw = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var mobilenum = document.getElementById('mobileNumber').value;
    var emails = document.getElementById('email').value;

   if(user == ""){
    document.getElementById('username').innerHTML =" ** Please fill the Username field";
    return false;
   }
   if((user.length <= 2) || (user.length > 20)){
    document.getElementById('username').innerHTML =" ** user length must be beetween 2 and 20";
    return false;
   }
   if(!isNaN(user)){
    document.getElementById('username').innerHTML =" ** only characters are allowed ";
    return false;
   }


// password


   if(pasw == ""){
    document.getElementById('password').innerHTML =" ** Please fill the Password field";
    return false;
   }
   if((pasw.length <= 2) || (pasw.length > 20)){
    document.getElementById('password').innerHTML =" ** user length must be beetween 2 and 20";
    return false;
   }
   if(pasw!=conpass){
    document.getElementById('conpass').innerHTML =" ** password are not matching";
    return false;
   }

// confirm password


   if(conpass == ""){
    document.getElementById('conpass').innerHTML =" ** Please fill the Confrim Password field";
    return false;
   }


// mobile number
   if(mobilenum == ""){
    document.getElementById('mobileno').innerHTML =" ** Please fill the Mobile Number field";
    return false;
   }

   if(isNaN(mobilenum)){
    document.getElementById('mobileno').innerHTML =" ** User must write digits only  not charachters";
    return false;
   }
   if(mobilenum.length!=10){
      document.getElementById('mobileno').innerHTML =" ** mobile number must be  10 digits Number";
    return false;
   }

   // emails

   if(emails == ""){
    document.getElementById('emailid').innerHTML =" ** Please fill the Email id field";
    return false;
   }

   if(emails.indexOf('@') <= 0){
    document.getElementById('emailid').innerHTML =" ** @ invalid position ";
   }

   if((emails.charAt(emails.length-4) !='.') && (emails.charAt(emails.length-3) !='.')){
      document.getElementById('emailid').innerHTML =" ** . invalid position ";
   }
  }