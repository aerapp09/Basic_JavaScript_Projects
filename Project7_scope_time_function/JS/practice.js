function my_function(){ //defines the function
    if (new Date().getHours() < 18) { //creates an iff statement that uses the Date().gethours function to get the time and if that is less than 18 the flow continues
        document.getElementById("Greeting").innerHTML = "No Mcfly has ever amounted to anything in the history of Hill Valley";
    } //if statement is true then the output is assigned to the paragraph element with ID Greeting in the linked html file
}