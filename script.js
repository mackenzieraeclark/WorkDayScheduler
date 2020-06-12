// Use MOMENT to show the current date
$("#currentDay").text(moment().format("dddd") + ", " + moment().format("MMMM Do") + ", " + moment().format("YYYY"));

//Start Document
$(document).ready(function(){
    // Call Functions
    assessHour();
    localUser();
});

// Function to decide if time slot is passed, present or future
// Function will change color of input based on this criteria
function assessHour() {

    // Declare variables to parse for integer
    var currentTime = moment().format("HH");
    var timeInt = parseInt(currentTime);
    // IF/ELSE statements inside FOR loop to assess standard business hours (9-5)
    for(var i = 9; i < 18; i++) {
        
        // Declare Variables to parse for integer
        var timeSlot = $("#" + i).attr("data-index");
        var timeSlotInt= parseInt(timeSlot);


        // Assess timeSlot
        if(timeInt > timeSlotInt){
            $("#" + i).addClass("past");
        } if(timeInt == timeSlotInt) {
            $("#" + i).addClass("present");
        } if(timeInt < timeSlotInt) {
            $("#" + i).addClass("future");
        }
    }
}

// Function to store locally
function localUser(){
    //Create FOOR loop to store locally
    for(var i = 9; i < 18; i++) {
        $("#" + i).val(localStorage.getItem(i));
    }
}

// Function to allow user to save their input
var saveBtn = $(".saveBtn");
saveBtn.on("click", function() {
    var pTime = $(this).attr("data-index");
    console.log(pTime);
    var userInput = $("#" + pTime).val();
    console.log(userInput);
    localStorage.setItem(pTime, userInput);
});