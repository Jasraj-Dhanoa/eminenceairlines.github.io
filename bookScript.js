    var parent = document.getElementById("dates");
    var child = document.getElementById("returndiv");
    
    function Remove() {
    parent.removeChild(child);
    }

    function Append(){
        parent.appendChild(child);    
    }


    AirportInput("autocomplete-airport-1");

    // Formatting
    var options = {
        formatting: `<div class="$(unique-result)"
                        single-result" 
                        data-index="$(i)"> 
                    $(IATA) </div>`
    };
    AirportInput("autocomplete-airport-2", options);
    //Great Circle Distance calculation fuction
    function distance(lat1, lon1, lat2, lon2) {
    var R = 6371e3; // metres

    lat1 = parseFloat(lat1)
    lat2 = parseFloat(lat2)
    lon1 = parseFloat(lon1)
    lon2 = parseFloat(lon2)

    var f1 = lat1.toRadians();
    var f2 = lat2.toRadians();
    var df = (lat2 - lat1).toRadians();
    var dl = (lon2 - lon1).toRadians();

    var a = Math.sin(df / 2) * Math.sin(df / 2) +
        Math.cos(f1) * Math.cos(f2) *
        Math.sin(dl / 2) * Math.sin(dl / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;

    return d;
}
if (typeof (Number.prototype.toRadians) === "undefined") {
    Number.prototype.toRadians = function () {
        return this * Math.PI / 180;
    }
}

function checkInputData(id) {
    var realId = "autocomplete-airport-" + id
    return ([document.getElementById(realId).getAttribute("data-lat"), document.getElementById(realId).getAttribute(
        "data-lon")])
}


var globalDistance = 0;
var globalPrice = 0;
var globalTime = 0; 
var totalPassengers = 0;

function checkDistance(self) {
    console.log("Input changed: " + self["id"])
    setTimeout(function () {
        console.log(self.getAttribute("data-lon"))
        var idChanged = self["id"].slice(-1)
        console.log(checkInputData(1))
        console.log(checkInputData(2))
        if (checkInputData(1)[0] && checkInputData(2)[0]) {
            var finalDistance = parseInt(distance(...checkInputData(1), ...  checkInputData(2)) / 1000 + " Km");
            var finalPrice = Math.floor(finalDistance/7.8);
            
            document.getElementById("distance").innerHTML = finalDistance ;


            globalDistance = finalDistance;
            globalPrice = finalPrice;
            globalTime = Math.floor(globalDistance/650);

            flightPrices();
            flightTimes();
            passengerInfo();
            totalPassengers();

        }
    }, 200)

}

function totalPassengers(){
    var Adults = document.getElementById("numberAdults").nodeValue;
    
}

function flightPrices(){
    document.getElementById("price1").innerHTML = "Flight Price $" + globalPrice.toString();  
    document.getElementById("Flight1").value = globalPrice.toString();  

    document.getElementById("price2").innerHTML = "Flight Price $" + (Math.floor(globalPrice/1.2)).toString();
    document.getElementById("Flight2").value = (Math.floor(globalPrice/1.2)).toString();

    document.getElementById("price3").innerHTML = "Flight Price $" + (Math.floor(globalPrice*1.01)).toString();
    document.getElementById("Flight3").value = (Math.floor(globalPrice*1.01)).toString();

}

function flightTimes(){
    document.getElementById("time1").innerHTML = "Flight Duration: " + (globalTime).toString() + " hr";

    document.getElementById("time2").innerHTML = "Flight Duration: " + (globalTime).toString() + " hr";
    
    document.getElementById("time3").innerHTML = "Flight Duration: " + (globalTime).toString() + " hr";


}

function passengerInfo(){
    var x = document.getElementById("");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        }

        // function changeColor(identity){
        //     document.getElementById(identity).style.backgroundColor = 'rgb(240,255,240)'; 
        //     document.getElementById("flight2").style.backgroundColor = 'white'; 
        //     document.getElementById("flight3").style.backgroundColor = 'white'; 
        //     var parent = document.getElementById("lastcon");
        //     var child = document.getElementById("disabledButtonpass");
        //     parent.removeChild(child);

        //     var parent2 = document.getElementById("lastcon");
        //     var button = document.createElement("a");
        //     button.className= "btn btn-primary"
        //     button.style.color = 'white'; 
        //     var node = document.createTextNode("Step 3 | Passenger Information");

        //     button.appendChild(node);
        //     parent2.appendChild(button);             
            

        // };
            var change1 = document.getElementById('CardnameLabel');
            var change2 = document.getElementById('CardnumLabel2');
            var typeChange = document.getElementById('cardnum');
            var typeChange2 = document.getElementById('cardname');

            var hide1 = document.getElementById('expireDiv');
            var hide2 = document.getElementById('postalDiv');

            var parentCredit = document.getElementById('details2');


            function Payment(){
                change1.innerHTML = "Email";
                change2.innerHTML = "Password";
                typeChange.type = "password"
                typeChange2.type = "email"
                
                parentCredit.removeChild(hide1);
                parentCredit.removeChild(hide2);
                
        
                hide1.style.display = "none";
                hide2.style.display = "none";
            }


            function PaymentNew() {
                change1.innerHTML = "Cardholder Name";
                change2.innerHTML = "Card Number";
                typeChange.type = "text"
                typeChange2.type = "text"

                parentCredit.appendChild(hide1);
                parentCredit.appendChild(hide2);

                hide1.style.display = "";
                hide2.style.display = "";

            }

            function nextSection(remove, add){
                var takeOut = document.getElementById(remove);
                var takeIn = document.getElementById(add);
                var parent = document.getElementById("masterdiv");
                //parent.removeChild(takeOut);
                takeIn.style.display = "block";
                takeOut.style.display ="none";                
            }

            $(function() {
                var content = [
                '<h5> Passenger #1 </h5> <hr> <div id="dates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="fnamePass1">First Name </label> <input  required placeholder="" type="text" id="fnamePass1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="lnamePass1">Last Name</label> <input required placeholder="" type="text" id="lnamePass1" class="form-control">  </div> </div> <div id="passdates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="DOB1">Date of Birth</label> <input required placeholder="Select Date" type="date" id="DOB1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="passNum1">Passport Number</label> <input required placeholder="" type="text" id="passNum1" class="form-control"> </div> </div>',
                '<h5> Passenger #2 </h5> <hr> <div id="dates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="fnamePass1">First Name </label> <input  required placeholder="" type="text" id="fnamePass1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="lnamePass1">Last Name</label> <input required placeholder="" type="text" id="lnamePass1" class="form-control">  </div> </div> <div id="passdates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="DOB1">Date of Birth</label> <input required placeholder="Select Date" type="date" id="DOB1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="passNum1">Passport Number</label> <input required placeholder="" type="text" id="passNum1" class="form-control"> </div> </div>',
                '<h5> Passenger #3  </h5> <hr> <div id="dates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="fnamePass1">First Name </label> <input  required placeholder="" type="text" id="fnamePass1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="lnamePass1">Last Name</label> <input required placeholder="" type="text" id="lnamePass1" class="form-control">  </div> </div> <div id="passdates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="DOB1">Date of Birth</label> <input required placeholder="Select Date" type="date" id="DOB1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="passNum1">Passport Number</label> <input required placeholder="" type="text" id="passNum1" class="form-control"> </div> </div>',
                '<h5> Passenger #4  </h5> <hr> <div id="dates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="fnamePass1">First Name </label> <input  required placeholder="" type="text" id="fnamePass1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="lnamePass1">Last Name</label> <input required placeholder="" type="text" id="lnamePass1" class="form-control">  </div> </div> <div id="passdates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="DOB1">Date of Birth</label> <input required placeholder="Select Date" type="date" id="DOB1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="passNum1">Passport Number</label> <input required placeholder="" type="text" id="passNum1" class="form-control"> </div> </div>',
                '<h5> Passenger #5  </h5> <hr> <div id="dates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="fnamePass1">First Name </label> <input  required placeholder="" type="text" id="fnamePass1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="lnamePass1">Last Name</label> <input required placeholder="" type="text" id="lnamePass1" class="form-control">  </div> </div> <div id="passdates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="DOB1">Date of Birth</label> <input required placeholder="Select Date" type="date" id="DOB1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="passNum1">Passport Number</label> <input required placeholder="" type="text" id="passNum1" class="form-control"> </div> </div>',
                '<h5> Passenger #6  </h5> <hr> <div id="dates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="fnamePass1">First Name </label> <input  required placeholder="" type="text" id="fnamePass1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="lnamePass1">Last Name</label> <input required placeholder="" type="text" id="lnamePass1" class="form-control">  </div> </div> <div id="passdates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="DOB1">Date of Birth</label> <input required placeholder="Select Date" type="date" id="DOB1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="passNum1">Passport Number</label> <input required placeholder="" type="text" id="passNum1" class="form-control"> </div> </div>',
                '<h5> Passenger #7  </h5> <hr> <div id="dates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="fnamePass1">First Name </label> <input  required placeholder="" type="text" id="fnamePass1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="lnamePass1">Last Name</label> <input required placeholder="" type="text" id="lnamePass1" class="form-control">  </div> </div> <div id="passdates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="DOB1">Date of Birth</label> <input required placeholder="Select Date" type="date" id="DOB1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="passNum1">Passport Number</label> <input required placeholder="" type="text" id="passNum1" class="form-control"> </div> </div>',
                '<h5> Passenger #8  </h5> <hr> <div id="dates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="fnamePass1">First Name </label> <input  required placeholder="" type="text" id="fnamePass1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="lnamePass1">Last Name</label> <input required placeholder="" type="text" id="lnamePass1" class="form-control">  </div> </div> <div id="passdates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="DOB1">Date of Birth</label> <input required placeholder="Select Date" type="date" id="DOB1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="passNum1">Passport Number</label> <input required placeholder="" type="text" id="passNum1" class="form-control"> </div> </div>',
                '<h5> Passenger #9  </h5> <hr> <div id="dates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="fnamePass1">First Name </label> <input  required placeholder="" type="text" id="fnamePass1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="lnamePass1">Last Name</label> <input required placeholder="" type="text" id="lnamePass1" class="form-control">  </div> </div> <div id="passdates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="DOB1">Date of Birth</label> <input required placeholder="Select Date" type="date" id="DOB1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="passNum1">Passport Number</label> <input required placeholder="" type="text" id="passNum1" class="form-control"> </div> </div>',
                '<h5> Passenger #10  </h5> <hr> <div id="dates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="fnamePass1">First Name </label> <input  required placeholder="" type="text" id="fnamePass1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="lnamePass1">Last Name</label> <input required placeholder="" type="text" id="lnamePass1" class="form-control">  </div> </div> <div id="passdates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="DOB1">Date of Birth</label> <input required placeholder="Select Date" type="date" id="DOB1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="passNum1">Passport Number</label> <input required placeholder="" type="text" id="passNum1" class="form-control"> </div> </div>',
                '<h5> Passenger #11  </h5> <hr> <div id="dates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="fnamePass1">First Name </label> <input  required placeholder="" type="text" id="fnamePass1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="lnamePass1">Last Name</label> <input required placeholder="" type="text" id="lnamePass1" class="form-control">  </div> </div> <div id="passdates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="DOB1">Date of Birth</label> <input required placeholder="Select Date" type="date" id="DOB1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="passNum1">Passport Number</label> <input required placeholder="" type="text" id="passNum1" class="form-control"> </div> </div>',
                '<h5> Passenger #12  </h5> <hr> <div id="dates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="fnamePass1">First Name </label> <input  required placeholder="" type="text" id="fnamePass1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="lnamePass1">Last Name</label> <input required placeholder="" type="text" id="lnamePass1" class="form-control">  </div> </div> <div id="passdates" class="row">  <div class="form-group col"> <label class="font-weight-bold" for="DOB1">Date of Birth</label> <input required placeholder="Select Date" type="date" id="DOB1" class="form-control"> </div>  <div class="form-group col"> <label class="font-weight-bold" for="passNum1">Passport Number</label> <input required placeholder="" type="text" id="passNum1" class="form-control"> </div> </div>'];

                $('#numberAdults, #numberChildren').on('change', function() {
                  $('#forminfocontainer').empty();
                    var countAdults = parseInt($('#numberAdults').val());
                    var countChild = parseInt($('#numberChildren').val());
                    var count = countAdults + countChild;
                  for (var i = 0; i < count; i++) {
                    $('#forminfocontainer').append(content[i%content.length]);
                  }
                });
              
              });

            var countAdults;
            var countChild;
            var count;
            var radioValue; 

              function recordPass(){
                countAdults = parseInt(document.getElementById('numberAdults').value);
                countChild = parseInt(document.getElementById('numberChildren').value);
                count = countAdults + countChild;
              }

              function totalCharges(){
                var count = countAdults + countChild;

                var totalPassengers = document.getElementById('totalPassengers');
                totalPassengers.innerHTML = "Total Passenger(s): " + count;

                var ticketPrice = document.getElementById('eachTicketPrice');

                radioValue = $("input[name='flightType']:checked").val();
                ticketPrice.innerHTML = "Price Per Ticket: $" + radioValue + ".00";

                var subtotal = document.getElementById('Subtotal');
                subtotal.innerHTML = "Subtotal: $" + (count*radioValue) + ".00" ;

                var total = document.getElementById('Total');
                total.innerHTML = "Total: $" + (count*radioValue*1.13).toFixed(2)

              }

              $(document).ready(function($) {
                $(document).on('submit', '#SCHform', function(event) {
                    event.preventDefault();
                });
                });

                $(document).ready(function($) {
                    $(document).on('submit', '#signUP', function(event) {
                        event.preventDefault();
                    });
                    });

                    $(document).ready(function($) {
                        $(document).on('submit', '#form1', function(event) {
                            event.preventDefault();
                        });
                        });

                        $(document).ready(function($) {
                            $(document).on('submit', '#form2', function(event) {
                                event.preventDefault();
                            });
                            });

                            $(document).ready(function($) {
                                $(document).on('submit', '#form3', function(event) {
                                    event.preventDefault();
                                });
                                });

                
                function showTable(){
                    var show = document.getElementById('randomtbl');
                    show.style.visibility = 'hidden';
                }
            
                function nextSectionSch(add){
                            var takeIn = document.getElementById(add);
                            var parent = document.getElementById("parentSCH");
                            takeIn.style.display = "block";   
                            
                            var show = document.getElementById('viewAnother');
                            show.style.display = "block";
            
                            var diable = document.getElementById('view');
                            view.className = "btn btn-primary mt-3 disabled"
                        }
function alertbook(){
    window.alert("Congrats! You have Booked Your Flight.");
}