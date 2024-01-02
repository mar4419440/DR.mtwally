//Get email input
var email = document.getElementById("email"); 
//Get sumbit button
var btnsub = document.getElementById("signupbtn");
//Get cancel button
var btncancel = document.getElementById("cancelbtn");
//Get password input
var password = document.getElementById("psw");
//Get repeat password input
var repassword = document.getElementById("psw-repeat");
//Get the href link
var pop = document.getElementById("policy");
//Get check box 
var checkbox = document.getElementById('')
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 
  function validateForm() {
    let x = document.forms["contain"]["email"]["psw"]["psw-repeat"].value;
    if (x == "") {
      alert("please fill all places");
      return false;
    }
  }

 //   if (btnsub.clicked == true)
  //  {
    //  if (validateForm== false)
      //{}
     // else
     // {
     // }
   // }