// Use MOMENT to show the current date
$("#currentDay").text(moment().format("dddd") + ", " + moment().format("MMMM Do") + ", " + moment().format("YYYY"));

// Function to decide if time slot is passed, present or future
// Function will change color of input based on this criteria

function assessHour() {
    // Declare necessary variables for funtion
    var currentTime = parseInt(moment().format("HH:mm"));
    var timeSlot = parseInt($("#" + time + "hourInput").attr("data-index"));

    // IF/ELSE statements inside FOR loop to assess standard business hours (9-5)
    for(time=9; time<18; time++) {
        if(timeSlot < currentTime){
            $("#" + time + "hourInput").css("background", "red");
        } else if(timeSlot == currentTime) {
            $("#" + time + "hourInput").css("background", "green");
        } else if(timeSlot > currentTime) {
            $("#" + time + "hourInput").css("background", "blue");
        }
    }
}

// Function to store locally

// Function to allow user to save their input

// Call functions
assessHour();