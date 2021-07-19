function emailValidation() {
    inputText = document.getElementById('email');
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
        document.getElementById('eV').innerHTML="Valid email";
        document.getElementById('eV').style.color="green";
        document.getElementById('email').style.background = "green";
        document.getElementById('eV').style.margin= "10px";
        return true;
    }
    else {
        document.getElementById('eV').innerHTML = " Invalid email";
        document.getElementById('eV').style.color="red";
        document.getElementById('email').style.background = "crimson";     
        document.getElementById('eV').style.margin= "10px";
        return false;
    }
}

function feedbackValidation(){
    inputText = document.getElementById('feedback');
    if(inputText.value.length<10){
        document.getElementById('fV').innerHTML="Feedback has to be atleast 10 characters long";
        document.getElementById('fV').style.color="red";
        return false;
    }
    else{
        document.getElementById('fV').innerHTML="Valid Feedback";
        document.getElementById('fV').style.color="green";

        return true;
    }
}
function validateForm(){
    let name = document.forms["myForm"]["name"].value;
    let dob =  document.forms["myForm"]["birthday"].value;
    if(name==""){
        alert("Name must be filled")
        return false;
    }
    if(!dob){
        alert("Date of birth has to be filled");
        return false;
    }
    if(!emailValidation()){
        alert("Email needs to be valid.")
        return false;
    }
    if(!feedbackValidation()){
        alert("Feedback needs to be above 10 characters.")
        return false;
    }
    if(feedbackValidation() && emailValidation()){
        document.getElementById('myForm').action="submittedForm.html";
    }
}

function display(){
    // document.getElementById("result").innerHTML = window.location.search; 
    document.getElementById("name").innerHTML = "Name: "+ getUrlVars()["name"].replaceAll("+"," ");
    document.getElementById("email").innerHTML = "Email: "+ getUrlVars()['email'].replace("%40","@");
    document.getElementById("dob").innerHTML = "DOB: "+ getUrlVars()['birthday'];
    document.getElementById("country").innerHTML = "Country: "+ getUrlVars()['country'];
    document.getElementById("feedback").innerHTML = "Feedback: "+ getUrlVars()['feedback'].replaceAll("+"," ");
    document.getElementById("rating").innerHTML = "Rating: "+ getUrlVars()['rating'];

}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }