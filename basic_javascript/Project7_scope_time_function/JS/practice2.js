function Age_Function() { //This creates the function
    Age = document.getElementById("Age").value; //This takes the value inputed by the user from the empty string that is associated with the ID Age and inputs it into variable age
    if (Age >=18) { //the first part of the flow checks if the variable age input from the previous step is greater or equal to 18
        Vote = "You are old enough to vote!"; //inputs the result of the flow to vote variable
    }
    else {
        Vote = "You are not old enough to vote!"; //inputs the result of the flow to vote variable
    }
    document.getElementById("How_old_are_you?").innerHTML= Vote; //this outputs the result of the previous steps into a new ID to output the final result of the JS function
}