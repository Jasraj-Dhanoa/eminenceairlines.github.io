var option1 = document.getElementById("allJobs");
var option2 = document.getElementById("serviceJobs");
var option3 = document.getElementById('supplyJobs');
var option4 = document.getElementById('itJobs');


function jobs(){
    var e = document.getElementById("inputGroupSelect2");
    var strUser = e.options[e.selectedIndex].value;


    if (strUser === '0a') {
        option1.style.display = "block";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
        
      } 
      else if (strUser === "1a") {
          option1.style.display = "none";
          option2.style.display = "block";
          option3.style.display = "none";
          option4.style.display = "none";
      } 
      else if (strUser === "2a") {
          option3.style.display = "block";
          option2.style.display = "none";
          option1.style.display = "none";
          option4.style.display = "none";
      } 
      else if (strUser === "3a") {
        option4.style.display = "block";
        option2.style.display = "none";
        option1.style.display = "none";
        option3.style.display = "none";
      }       
}

$(document).ready(function($) {
    $(document).on('submit', '#jobSelect', function(event) {
        event.preventDefault();
    });
    });