function Time_function() { //Creates function
    var Time = new Date().getHours(); //creates variable and inputs function to get time 
    var Reply; //creates variable wo value
    if (Time< 12 == Time > 0) { //first flow to see if time is less than 12 and greater than 0
        Reply = "It is morning time!"; // inputs a result into reply variable
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon."; // inputs a result into reply variable
    }
    else {
        Reply = "it is evening time."; // inputs a result into reply variable
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //using an output Id we set this to the reply for our final output
}