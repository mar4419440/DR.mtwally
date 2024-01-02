//Get email input
var email = document.getElementById("email"); 
//Get password input
var password = document.getElementById("psw");
//Get cancel button
var btncancel = document.getElementById("cancelbtn");
//Get login button
var btnlogin = document.getElementById("loginbtn");
function validateForm() {
    let x = document.forms["contain"]["email"]["psw"].value;
    if (x == "") {
      alert("please fill all places");
      return false;
    }
  }