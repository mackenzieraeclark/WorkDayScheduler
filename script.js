// Declare global variables
var currentTime = moment().format("HH");
var timeInt = parseInt(currentTime);

var saveBtn = $(".saveBtn");

// Use MOMENT for each time slot
$("#9am").attr("data-index", moment("9:00 am", "h:mm a").format("HH"));
$("#10am").attr("data-index", moment("10:00 am", "hh:mm a").format("HH"));
$("#11am").attr("data-index", moment("11:00 am", "hh:mm a").format("HH"));
$("#12pm").attr("data-index", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1pm").attr("data-index", moment("1:00 pm", "h:mm a").format("HH"));
$("#2pm").attr("data-index", moment("2:00 pm", "h:mm a").format("HH"));
$("#3pm").attr("data-index", moment("3:00 pm", "h:mm a").format("HH"));
$("#4pm").attr("data-index", moment("4:00 pm", "h:mm a").format("HH"));
$("#5pm").attr("data-index", moment("5:00 pm", "h:mm a").format("HH"));


// Use MOMENT to show the current date
$("#currentDay").text(moment().format("dddd") + ", " + moment().format("MMMM Do") + ", " + moment().format("YYYY"));

// Call Functions
assessHour();
localUser();

// Function to decide if time slot is passed, present or future
// Function will change color of input based on this criteria
function assessHour() {

    // IF/ELSE statements inside FOR loop to assess standard business hours (9-5)
    for(var i = 0; i < 18; i++) {
        var timeSlot = $("#" + i + "hourInput").attr("data-index");
        var timeSlotInt= parseInt(timeSlot);
        
        // Assess timeSlot
        if(timeInt > timeSlotInt){
            $("#" + i + "hourInput").addClass("past");
        } if(timeInt == timeSlotInt) {
            $("#" + i + "hourInput").addClass("present");
        } if(timeInt < timeSlotInt) {
            $("#" + i + "hourInput").addClass("future");
        }
    }
}

// Function to store locally
function localUser(){
    //Create FOOR loop to store locally
    for(var i = 0; i < 18; i++) {
        $("#" + i + "hourInput").val(localStorage.getItem(i));
    }
}

// Function to allow user to save their input
saveBtn.on("click", function() {
    var buttonTime = $(this).attr("data-index");
    var userInput = $("#" + buttonTime + "hour").val();
    localStorage.setItem(buttonTime, userInput);
})